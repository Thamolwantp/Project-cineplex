import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) }, 
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function DELETE(req, { params }) {
    try {
      const { id } = params; 
  

      const existingUser = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!existingUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      await prisma.user.delete({
        where: { id: parseInt(id) },
      });
  
      return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
