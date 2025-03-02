import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// เมื่อได้รับคำขอลงทะเบียน
export async function POST(req) {
  const { username, email, password } = await req.json();

  // สร้าง OTP แบบสุ่ม 6 หลัก
  const otp = Math.floor(100000 + Math.random() * 900000); // OTP 6 หลัก
  const otpExpiration = new Date();
  otpExpiration.setMinutes(otpExpiration.getMinutes() + 5); // OTP หมดอายุใน 5 นาที

  try {
    // บันทึกข้อมูลผู้ใช้ในฐานข้อมูล
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password, // ควรใช้การเข้ารหัสรหัสผ่าน
        otp,
        otpExpiration,
      },
    });

    // ตั้งค่าการเชื่อมต่อกับ Gmail เพื่อส่ง OTP
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // ข้อความที่ต้องการส่งในอีเมล
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
    };

    // ส่ง OTP ไปยังอีเมล
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "OTP sent to your email. Please check your inbox.",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred during registration.",
    }, { status: 500 });
  }
}
