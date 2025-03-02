"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState<{ username: string; email: string; password: string }>({
    username: "",
    email: "",
    password: "",
  });
  const [otpForm, setOtpForm] = useState<{ email: string; otpInput: string }>({
    email: "",
    otpInput: "",
  });
  const [message, setMessage] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false); // สถานะการยืนยัน

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtpForm({ ...otpForm, [e.target.name]: e.target.value });
  };

  const handleSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(""); // รีเซ็ตข้อความ
  
    if (!form.username || !form.email || !form.password) {
      setMessage("Please fill out all fields.");
      return;
    }
  
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      // ตรวจสอบว่า response ถูกต้องหรือไม่
      if (!res.ok) {
        const errorData = await res.text(); // ใช้ .text() แทน .json() หาก response ไม่ใช่ JSON
        setMessage(errorData || "Something went wrong.");
        return;
      }
  
      // อ่านข้อมูลที่ได้จาก API
      const data = await res.json();
      if (data.message) {
        setMessage(data.message);
        setIsVerified(false); // ตั้งสถานะการยืนยันเป็น false
      } else {
        setMessage("Something went wrong with the registration.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("An error occurred. Please try again.");
    }
  };
  
  const handleSubmitOTP = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(otpForm),
    });

    const data = await res.json();
    if (res.ok) {
      setIsVerified(true);  // เมื่อ OTP ถูกยืนยันสำเร็จ
      setMessage("OTP verified successfully!");
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg w-96">
        <h2 className="flex justify-center text-2xl font-bold mb-4">
          {isVerified ? "Account Verified" : "Sign Up"}
        </h2>

        {!isVerified ? (
          <form onSubmit={handleSubmitSignUp}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmitOTP}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={otpForm.email}
              onChange={handleOtpChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="text"
              name="otpInput"
              placeholder="Enter OTP"
              value={otpForm.otpInput}
              onChange={handleOtpChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Verify OTP
            </button>
          </form>
        )}

        {message && <p className="text-center mt-2 text-red-500">{message}</p>}
      </div>
    </div>
  );
}
