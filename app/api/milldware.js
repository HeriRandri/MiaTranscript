// src/server/middleware/auth.js
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Récupère le token dans l'en-tête Authorization

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifie et décode le token
    req.user = decoded; // Ajoute les informations utilisateur au requête
    next(); // Passe au prochain middleware ou handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
