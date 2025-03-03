import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, otpInput } = await req.json();

    // ค้นหาผู้ใช้ที่ใช้ email นี้
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // ตรวจสอบว่า OTP หมดอายุหรือยัง
    const currentTime = new Date();
    if (user.otpExpiration && currentTime > new Date(user.otpExpiration)) {
      return NextResponse.json({ error: 'OTP has expired' }, { status: 400 });
    }

    // ตรวจสอบว่า OTP ที่ป้อนไว้ตรงกับในฐานข้อมูลหรือไม่
    if (user.otp !== otpInput) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    // ถ้าทุกอย่างถูกต้อง, ทำการอัปเดตสถานะการยืนยันตัวตน
    await prisma.user.update({
      where: { email },
      data: { isVerified: true },
    });

    return NextResponse.json({ message: 'OTP verified successfully' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}