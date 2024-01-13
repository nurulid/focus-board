import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // #1 import bcrypt

import prisma from "@/utils/prisma";

export async function POST(req) {
  const { username, email, password } = await req.json();

  try {
    // #2 Create hashed password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 -> round
    // Create user to database
    const createUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ data: createUser, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: "Something went wrong. Please try again later" }, { status: 500 });
  }
}
