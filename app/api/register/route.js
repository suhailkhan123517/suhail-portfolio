import { connectMongoDB } from "@lib/mongodb";
import CustomUser from "@models/customUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await req.json();
    console.log(user);
    await connectMongoDB();
    await CustomUser.create(user);
    return NextResponse.json(
      { message: "User Successfully registered" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering the user.",
      },
      { status: 500 }
    );
  }
}
