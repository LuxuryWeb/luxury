import { connectMongoDb } from "@/app/lib/mongodb";
import User from "@/models/User.model";
import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { email, status, role } = await request.json();

    await connectMongoDb();

    if (role) {
      await User.updateOne({ email }, { $set: { role } });
      return NextResponse.json(
        { message: "User has been updated" },
        { status: 201 }
      );
    }

    await User.updateOne({ email }, { $set: { status } });

    return NextResponse.json(
      { message: "User has been updated", status },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating user" },
      { status: 500 }
    );
  }
}
