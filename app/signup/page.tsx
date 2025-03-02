"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [otpForm, setOtpForm] = useState({ email: "", otpInput: "" });
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isOTPRequested, setIsOTPRequested] = useState(false); // เช็คว่าผู้ใช้สมัครเสร็จแล้วหรือยัง

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
      setMessage("OTP has been sent to your email.");
      setOtpForm({ email: form.email, otpInput: "" }); // กำหนด email สำหรับยืนยัน OTP
      setIsOTPRequested(true); // แสดงฟอร์ม OTP
    } else {
      setMessage(data.error);
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
      setIsVerified(true);
      setMessage("OTP verified successfully!");
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg w-96">
        <h2 className="flex justify-center text-2xl font-bold mb-4">
          {isVerified ? "Account Verified" : isOTPRequested ? "Enter OTP" : "Sign Up"}
        </h2>

        {!isOTPRequested && !isVerified && (
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
        )}

        {isOTPRequested && !isVerified && (
          <form onSubmit={handleSubmitOTP}>
            <input
              type="text"
              name="otpInput"
              placeholder="Enter OTP"
              value={otpForm.otpInput}
              onChange={handleOtpChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
              Verify OTP
            </button>
          </form>
        )}

        {message && <p className="text-center mt-2 text-red-500">{message}</p>}
      </div>
    </div>
  );
}
