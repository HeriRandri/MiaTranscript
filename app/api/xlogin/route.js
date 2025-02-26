// app/api/signin/route.js
import { NextResponse } from "next/server";
import prisma from "../../utils/prisma"; // Ton utilitaire Prisma
import bcrypt from "bcryptjs"; // Assure-toi d'utiliser bcryptjs pour la vérification du mot de passe
import jwt from "jsonwebtoken"; // Pour créer le token JWT

const JWT_SECRET = process.env.JWT_SECRET || "secret_key"; // Tu peux aussi charger cela depuis une variable d'environnement

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Vérifier que les champs email et mot de passe sont fournis
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email et mot de passe sont requis" },
        { status: 400 }
      );
    }

    // Chercher l'utilisateur dans la base de données
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Vérifier si l'utilisateur existe
    if (!user) {
      return NextResponse.json(
        { message: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    // Comparer le mot de passe envoyé avec le mot de passe stocké (haché)
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Créer un token JWT pour l'utilisateur
    const token = jwt.sign(
      { userId: user.id, email: user.email }, // Payload du token
      JWT_SECRET, // Clé secrète pour signer le token
      { expiresIn: "1h" } // Le token expire dans 1 heure
    );

    // Retourner le token avec les informations de l'utilisateur
    return NextResponse.json(
      { message: "Connexion réussie", token, userId: user.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    return NextResponse.json(
      { message: "Erreur serveur, veuillez réessayer plus tard" },
      { status: 500 }
    );
  }
}
