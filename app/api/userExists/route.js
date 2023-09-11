import { connectMongoDB } from "@lib/mongodb";
import CustomUser from "@models/customUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const user = await req.json();
    await CustomUser.findOne(user.email).select("_id");
    console.log("user:", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
