import { connectMongoDB } from "@lib/mongodb";
import CustomUser from "@models/customUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const existsUser = await CustomUser.findOne({ email }).select("_id");
    console.log("user:", existsUser);
    return NextResponse.json({ existsUser });
  } catch (error) {
    console.log(error);
  }
}
