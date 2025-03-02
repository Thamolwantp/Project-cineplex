'use client';

import { useState } from 'react';
import Head from 'next/head';
import './register.css';

export default function Page() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  // ฟังก์ชันสร้าง OTP แบบสุ่ม
  const generateOtp = () => {
    const otpCode = Math.floor(100000 + Math.random() * 900000); // สร้างรหัส OTP 6 หลัก
    return otpCode.toString();
  };

  // ฟังก์ชันส่งรหัส OTP ไปยังอีเมล
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('กรุณากรอกอีเมล');
      return;
    }

    // สร้าง OTP
    const generatedOtp = generateOtp();
    setOtp(generatedOtp); // เก็บ OTP สำหรับตรวจสอบในอนาคต

    // ส่งอีเมล (ใช้ API ส่งอีเมลจริงที่นี่ เช่น Nodemailer หรือ SendGrid)
    try {
      const res = await fetch('/api/otp/sendOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: generatedOtp }),
      });

      if (res.ok) {
        setMessage('รหัส OTP ถูกส่งไปยังอีเมลของคุณแล้ว');
      } else {
        setMessage('เกิดข้อผิดพลาดในการส่งรหัส OTP');
      }
    } catch (error) {
      setMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    }
  };

  return (
    <>
      <Head>
        <title>Register Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="loginBox">
          <h2>Register</h2>
          <form onSubmit={handleSendCode}>
            <div className="inputGroup">
              <label>User/Email</label>
              <input
                type="text"
                placeholder="Enter your username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="inputGroup">
              <label>Confirm Password</label>
              <input type="password" placeholder="Enter your password again" />
            </div>
            <div className="inputGroup">
              <label>A verification code has been sent to your email</label>
              <input type="password" placeholder="verify code..." />
            </div>
            <button className="sent" type="submit">Send code</button>
          </form>
          <button type="submit" className="submitButton">Sign up</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}
