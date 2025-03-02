import { useState } from "react";
import { useRouter } from "next/router";

const OTPPage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("OTP verified successfully!");
        router.push("/dashboard"); // เปลี่ยนเส้นทางหลังจากยืนยัน OTP สำเร็จ
      } else {
        setMessage("Invalid OTP, please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Enter OTP</h1>
      <form onSubmit={handleSubmitOTP}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify OTP</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OTPPage;
