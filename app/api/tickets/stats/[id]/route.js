import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, context) {
  try {
    // ใช้ await เพื่อดึง params
    const { id } = await context.params;
    const userId = Number(id);

    if (!userId || isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid userId' }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // ใช้ groupBy เพื่อจัดกลุ่มตามวันที่และนับจำนวนตั๋วที่ซื้อ
    const stats = await prisma.ticket.groupBy({
      by: ['purchase_at', 'user_id'],  // Group ตามวันที่
      where: { user_id: userId },
      _count: { ticket_id: true },  // นับจำนวนตั๋ว
      orderBy: { purchase_at: 'asc' },  // เรียงตามวันที่
    });

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error('Error fetching ticket stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
