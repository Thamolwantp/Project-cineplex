'use client';

import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'; // นำเข้า useRouter
import './register.css';

export default function Page() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [inputOtp, setInputOtp] = useState(''); // สถานะเก็บ OTP ที่ผู้ใช้กรอก
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // กำหนด useRouter

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
    } catch {
      setMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    }
  };

  // ฟังก์ชันสำหรับการสมัครสมาชิก
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputOtp) {
      setMessage('กรุณากรอกรหัส OTP');
      return;
    }

    // ตรวจสอบว่า OTP ที่กรอกตรงกับ OTP ที่ส่งไป
    if (inputOtp !== otp) {
      setMessage('รหัส OTP ไม่ถูกต้อง');
      return;
    }

    // ตรวจสอบว่า password และ confirm password ตรงกัน
    if (password !== confirmPassword) {
      setMessage('รหัสผ่านไม่ตรงกัน');
      return;
    }

    // หลังจากทุกอย่างถูกต้อง ไปที่หน้า moviepage
    router.push('/moviepage');
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
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label>A verification code has been sent to your email</label>
              <input
                type="password"
                placeholder="verify code..."
                value={inputOtp}
                onChange={(e) => setInputOtp(e.target.value)} // เก็บ OTP ที่กรอก
              />
            </div>
            <button className="sent" type="submit">Send code</button>
          </form>
          <button className="submitButton" onClick={handleSignUp}>Sign up</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}