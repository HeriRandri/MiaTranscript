// pages/api/users.js
import { prisma } from "../../server/prisma"; // Assurez-vous que Prisma Client est bien importé

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email et mot de passe sont requis" });
    }

    try {
      // Créez un utilisateur dans la table User
      const user = await prisma.user.create({
        data: {
          email,
          password, // Assurez-vous de ne pas stocker de mots de passe en clair dans la production (utilisez bcrypt pour le hachage)
        },
      });

      return res.status(201).json(user); // Retourner l'utilisateur créé
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  } else {
    return res.status(405).json({ message: "Méthode HTTP non autorisée" });
  }
}
