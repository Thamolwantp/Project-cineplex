import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Missing email" }, { status: 400 });
    }

    // ตั้งค่า nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // อีเมลที่ใช้ส่ง
        pass: process.env.EMAIL_PASS, // รหัสผ่าน หรือ App Password
      },
    });

    // ตั้งค่าเนื้อหาอีเมล
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "ยืนยันการซื้อตั๋ว - Vestra Cineplex",
      text: `ท่านทำการซื้อตั๋วหนังกับ Vestra Cineplex เรียบร้อยแล้ว และขอขอบคุณอย่างยิ่งจาก Vestra Cineplex`,
    };

    // ส่งอีเมล
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Email sending failed" }, { status: 500 });
  }
}
