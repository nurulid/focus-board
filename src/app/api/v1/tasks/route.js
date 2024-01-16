import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const done = searchParams.get("done");

  // console.log(done)

  let tasks;

  try {
    if (done) {
      tasks = await prisma.task.findMany({
        where: {
          isCompleted: true,
        },
      });
    } else {
      tasks = await prisma.task.findMany();
    }

    return NextResponse.json(
      { tasks, message: "Fetch all tasks success." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "Fetch all tasks ERROR." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const data = await req.json();

  // creating data in database
  try {
    const task = await prisma.task.create({
      data
    });
    return NextResponse.json(
      { message: "Task created successfully.", data: task },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: "Create task error!" }, { status: 500 });
  }
}
