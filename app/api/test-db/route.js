import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const test = await prisma.$queryRaw`SELECT 1+1 AS result`;
    return Response.json({ success: true, test });
  } catch (error) {
    console.error("Database Error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}