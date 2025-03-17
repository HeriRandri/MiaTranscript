import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier fourni" },
        { status: 400 }
      );
    }

    // Convertir le fichier en Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `public/uploads/${fileName}`;

    // Sauvegarder le fichier sur le serveur
    await fs.writeFile(filePath, fileBuffer);

    // Enregistrer le fichier en base de données
    const transcript = await prisma.transcript.create({
      data: {
        userId: 1, // Remplace avec l'ID de l'utilisateur connecté
        audioUrl: `/uploads/${fileName}`,
      },
    });

    return NextResponse.json({
      message: "Fichier uploadé avec succès",
      file: { name: file.name, uploadedAt: new Date() },
      transcript,
    });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
