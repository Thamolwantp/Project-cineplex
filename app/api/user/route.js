import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany(); // ดึงข้อมูลผู้ใช้ทั้งหมด
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// ✅ POST: เพิ่ม User ใหม่
export async function POST(req) {
    try {
      const { username, email, password } = await req.json(); // รับข้อมูลจาก body
  
      // ตรวจสอบข้อมูล
      if (!username || !email || !password) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
      }
  
      // สร้าง User ใหม่ในฐานข้อมูล
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          user: username,
          email,
          password: hashedPassword, // 🔴 **ควรเข้ารหัส Password ก่อนบันทึกจริง**
        },
      });
  
      return NextResponse.json(newUser, { status: 201 }); // ส่งข้อมูลที่เพิ่มกลับไป
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}