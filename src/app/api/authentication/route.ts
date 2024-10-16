import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();  // Initialize Prisma Client
const jwtSecret = process.env.JWT_SECRET;

type UserRequest = {
  Email: string;
  Password: string;
};

export async function POST(req: NextRequest) {
  if (!jwtSecret) {
    return NextResponse.json(
      {
        statusCode: 500,
        message: "JWT secret is not defined. Internal server error.",
      },
      { status: 500 }
    );
  }

  const { Email, Password } = (await req.json()) as UserRequest;

  try {
    // Find the user in the database by email
    const user = await prisma.users.findFirst({
      where: { Email: Email },
    });

    // Check if the user exists
    if (!user) {
      return NextResponse.json(
        { statusCode: 404, message: "User not found" },
        { status: 404 }
      );
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { statusCode: 401, message: "Invalid password" },
        { status: 401 }
      );
    }

    // Generate a JWT token if the user exists and the password is correct
    const token = jwt.sign(
      {
        id: user.Id,
      },
      jwtSecret as string,
      { expiresIn: "1h" } // Token expiration time
    );

    // Update the user in the database with the new session token and the last login time
    await prisma.users.update({
      where: { Id: user.Id },
      data: {
        SessionToken: token,  // Store the session token
        LastLoginAt: new Date(),  // Update the last login time
      },
    });

    // Return the JWT token
    return NextResponse.json(
      {
        statusCode: 200,
        message: "Login successful",
        token: token, // Send the JWT token back to the client
      },
      { status: 200 }
    );
  } catch (error:any) {
    return NextResponse.json(
      {
        statusCode: 500,
        message: "Internal server error, error: " + error.message,
      },
      { status: 500 }
    );
  }
}
