import { connectMongoDb } from "@/app/lib/mongodb";
import User from "@/models/User.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, sub, picture } = await req.json();

    const role = "user";
    const status = "initial";
    const userId = sub;
    const image = picture;

    await connectMongoDb();
    await User.create({ name, email, userId, image, role, status });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Error updating user" },
      { status: 500 }
    );
  }
}
