import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import slugify from "slugify";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const done = searchParams.get("done");

  console.log(done)

  let allTasks;

  try {
    if (done) {
      allTasks = await prisma.tasks.findMany({
        where: {
          isCompleted: true,
        },
      });
    } else {
      allTasks = await prisma.tasks.findMany();
    }

    return NextResponse.json(
      { data: allTasks, message: "Fetch data success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "Fetch data ERROR" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { name, description, createdAt, isCompleted, userId } = await req.json();

  // creating data in database
  try {
    const createTask = await prisma.tasks.create({
      data: {
        name,
        description,
        createdAt,
        isCompleted,
        userId: Number(userId),
      },
    });
    return NextResponse.json(
      { message: "Create task success!", data: createTask },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Create task error!" }, { status: 500 });
  }
}
