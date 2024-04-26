import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/app/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const modules = await prisma.modules.findFirst({
    where: {
      link: {
        equals: params.id
      }
    },
    relationLoadStrategy: 'join',
    include: {
      classes: true
    }
  });

  return NextResponse.json({ modules }, { status: 200 });
}
