import { NextResponse } from "next/server";
import prisma from "../utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    const hashPwd = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPwd,
      },
    });

    return NextResponse.json({
      id: user.id,
      name: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
