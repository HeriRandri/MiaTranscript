import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { walletId, amount, type, description } = req.body;
    try {
      const transaction = await prisma.transaction.create({
        data: { walletId, amount, type, description },
      });

      // Mise à jour du total du portefeuille
      await prisma.wallet.update({
        where: { id: walletId },
        data: { total: { increment: type === "INCOME" ? amount : -amount } },
      });

      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: "Transaction échouée" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
