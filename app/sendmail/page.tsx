'use client';

import { useState } from 'react';

export default function SendMailPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    if (!email || !username) {
      setMessage('⚠️ Please enter both email and username.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ Email sent successfully to ${email}!`);
      } else {
        setMessage(`❌ Failed: ${data.error}`);
      }
    } catch (error) {
      // ✅ แก้ไขข้อผิดพลาดของ TypeScript ที่ 'error' เป็น 'unknown'
      if (error instanceof Error) {
        setMessage(`❌ Error: ${error.message}`);
      } else {
        setMessage('❌ An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Send OTP Email</h1>
        
        <input
          type="email"
          placeholder="Enter recipient email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        <button
          onClick={sendEmail}
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Sending...' : 'Send Email'}
        </button>

        {message && <p className="mt-4 text-gray-800">{message}</p>}
      </div>
    </div>
  );
}
