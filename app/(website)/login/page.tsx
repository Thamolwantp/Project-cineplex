import Head from 'next/head';
import './login.css';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="loginBox">
          <div className="logo">
            <h1></h1>
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
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
          <p>Not a member yet? Register now to get started!</p>
          <Link href="/register">
            <button className="registerButton">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}