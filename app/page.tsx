"use client"; // เพิ่มคำสั่งนี้ที่ด้านบนสุดของไฟล์

import Head from 'next/head';
import './login.css';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path); // ใช้ router.push เพื่อเปลี่ยนหน้า
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
            <h1>MyApp</h1>
          </div>
          <h2>Login</h2>
          <form>
            <div className="inputGroup">
              <label>User/Email</label>
              <input type="text" placeholder="Enter your username or email" />
            </div>
            <div className="inputGroup">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            {/* ใช้ handleRedirect เพื่อเปลี่ยนหน้า */}
            <button
              className="submitButton"
              type="button"
              onClick={() => handleRedirect('/moviepage')}
            >
              Submit
            </button>
          </form>
          <p>Not a member yet? Register now to get started!</p>
          {/* ใช้ handleRedirect เพื่อเปลี่ยนหน้า */}
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

