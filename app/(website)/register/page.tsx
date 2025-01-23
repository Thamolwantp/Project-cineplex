import Head from 'next/head';
import './register.css';

export default function Page() {
  return (
    <>
      <Head>
        <title>Register Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="loginBox">
          <div className="logo">
            <h1></h1>
          </div>
          <h2>Register</h2>
          <form>
            <div className="inputGroup">
              <label>User/Email</label>
              <input type="text" placeholder="Enter your username or email" />
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
            <button className="sent">sent code</button>
          </form>
          <button type="submit" className="submitButton">Sign up</button>
        </div>
      </div>
    </>
  );
}