import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const wallets = await prisma.wallet.findMany({
        where: { parentWalletId: null }, // Récupère les grands portefeuilles
        include: { subWallets: true },
      });
      res.status(200).json(wallets);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  } else if (req.method === "POST") {
    const { name, parentWalletId } = req.body;
    try {
      const newWallet = await prisma.wallet.create({
        data: { name, parentWalletId: parentWalletId || null, total: 0 },
      });
      res.status(200).json(newWallet);
    } catch (error) {
      res.status(500).json({ error: "Création échouée" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
