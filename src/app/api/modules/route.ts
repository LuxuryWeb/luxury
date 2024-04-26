import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const modules = await prisma.modules.findMany({
    relationLoadStrategy: 'join',
    include: {
      classes: true
    }
  });

  return NextResponse.json({ modules: modules.map(m => {
    return { ...m, image: `${process.env.API_URL}` + m.image }
  }) }, { status: 200 });
}
