import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany(); 
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
    try {
      const { username, email, password } = await req.json(); 
  

      if (!username || !email || !password) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
      }
  

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          user: username,
          email,
          password: hashedPassword, 
        },
      });
  
      return NextResponse.json(newUser, { status: 201 }); 
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}