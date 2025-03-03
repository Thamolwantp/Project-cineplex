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
    setMessage("");
  
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  
    const data = await res.json();
    if (res.ok) {
      setMessage("Register successful! OTP has been sent to your email.");
      // เมื่อสำเร็จตั้งค่า isVerified เป็น false เพื่อแสดงฟอร์ม OTP
      setIsVerified(false); 
    } else {
      setMessage(data.error);
    }
  };
  

  const handleSubmitOTP = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
  
    const res = await fetch("/api/verify-otp", {  // อย่าลืมเช็คว่า URL ถูกต้องหรือไม่
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
        <h2 className="flex justify-center text-2xl font-bold mb-4">{isVerified ? "Account Verified" : "Sign Up"}</h2>

        {!isVerified ? (
          // ฟอร์มสมัคร
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
          // ฟอร์มกรอก OTP
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
