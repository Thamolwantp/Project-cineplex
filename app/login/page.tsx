"use client"; // เพิ่มคำสั่งนี้ที่ด้านบนสุดของไฟล์

import Head from 'next/head';
import './login.css';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  
  // สร้าง state สำหรับจัดการข้อความแจ้งเตือน
  const [error, setError] = useState('');

  const handleRedirect = (path: string) => {
    router.push(path); // ใช้ router.push เพื่อเปลี่ยนหน้า
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ตรวจสอบว่า User/Email และ Password ถูกกรอกหรือไม่
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    if (!email || !password) {
      setError('Please enter both User/Email and Password');
    } else {
      setError('');
      handleRedirect('/moviepage'); // เปลี่ยนหน้าไปที่ /moviepage
    }
  };

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="loginBox">
          <div className="logo">
          </div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label>User/Email</label>
              <input type="text" name="email" placeholder="Enter your username or email" />
            </div>
            <div className="inputGroup">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter your password" />
            </div>
            {/* หากมีข้อความผิดพลาด ให้แสดงข้อความแจ้งเตือน */}
            {error && <p className="error">{error}</p>}
            
            <button
              className="submitButton"
              type="submit"
            >
              Submit
            </button>
          </form>
          
          {/* ปุ่ม Login ผ่าน Google */}
          <button
            className="googleButton"
            type="button"
            onClick={() => signIn('google', { callbackUrl: '/moviepage' })}
          >
            Login with Google
          </button>

          <p>Not a member yet? Register now to get started!</p>
          <button
            className="registerButton"
            type="button"
            onClick={() => handleRedirect('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}