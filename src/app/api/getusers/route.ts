import { connectMongoDb } from "@/app/lib/mongodb";
import User from "@/models/User.model";
import { NextResponse } from "next/server";

export async function POST() {
  await connectMongoDb();
  const users = await User.find();

  return NextResponse.json({ users }, { status: 200 });
}
