import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    fetchWallets();
  }, []);

  const fetchWallets = async () => {
    try {
      const response = await axios.get("/api/wallets");
      setWallets(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold">Gestionnaire de Budget</h1>
      {wallets.map((wallet) => (
        <div key={wallet.id} className="border p-4 rounded my-2">
          <h2 className="text-xl font-semibold">
            {wallet.name} - {wallet.total} €
          </h2>
          <AddTransaction walletId={wallet.id} onSuccess={fetchWallets} />
          <AddSubWallet parentWalletId={wallet.id} onSuccess={fetchWallets} />
        </div>
      ))}
    </div>
  );
}

function AddTransaction({ walletId, onSuccess }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("INCOME");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/transaction", {
      walletId,
      amount,
      type,
      description,
    });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mt-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
        className="border p-2 w-full mt-2"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 w-full mt-2"
      >
        <option value="INCOME">Revenu</option>
        <option value="EXPENSE">Dépense</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
      >
        Ajouter
      </button>
    </form>
  );
}

function AddSubWallet({ parentWalletId, onSuccess }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/wallets", { name, parentWalletId });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom du sous-portefeuille"
        className="border p-2 w-full mt-2"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded mt-2 w-full"
      >
        Créer
      </button>
    </form>
  );
}
