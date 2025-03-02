import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sendOTPEmail } from '@/utils/sendEmail';  // ✅ Import ฟังก์ชันส่งอีเมล

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // สร้างรหัส OTP 6 หลัก
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // คำนวณเวลาหมดอายุ (10 นาทีจากเวลาปัจจุบัน)
    const otpExpiration = new Date();
    otpExpiration.setMinutes(otpExpiration.getMinutes() + 10);

    // Hash รหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // บันทึกข้อมูลลงฐานข้อมูล
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        otp, // บันทึก OTP ในฐานข้อมูล
        otpExpiration, // บันทึกเวลาหมดอายุ OTP
        isVerified: false, // ผู้ใช้ยังไม่ได้ยืนยันตัวตน
      },
    });

    // ส่งอีเมล OTP
    await sendOTPEmail(email, otp);

    return NextResponse.json({ message: 'OTP sent to email' }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}