import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const userId = Number(id);

    if (!userId || isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid userId' }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const stats = await prisma.ticket.groupBy({
      by: ['purchase_at', 'user_id'],  
      where: { user_id: userId },
      _count: { ticket_id: true },
      orderBy: { purchase_at: 'asc' },
    });

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error('Error fetching ticket stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
