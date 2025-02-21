


import { useState } from "react";
import { Menu, X } from "lucide-react";

import { useRouter } from "next/navigation";


export default function Header() {
  const router = useRouter();


  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); 
    }
  };

  return (
    // <header className="fixed top-0 left-0 w-full bg-white  z-50 flex justify-between items-center px-6 py-4">
    //   {/* Logo */}
    //   <h1 className="text-blue-600 text-2xl md:text-3xl font-bold">
    //     Mia<span className="text-gray-600">Transcript</span>
    //   </h1>

    //   {/* Menu burger (mobile) */}
    //   <button
    //     aria-label="Ouvrir le menu"
    //     className="md:hidden text-gray-600 z-50"
    //     onClick={() => setMenuOpen(!menuOpen)}
    //   >
    //     {menuOpen ? <X size={28} /> : <Menu size={28} />}
    //   </button>

    //   {/* Overlay (fond sombre lors du menu ouvert) */}
    //   {menuOpen && (
    //     <div
    //       className="fixed inset-0 bg-black bg-opacity-50 z-40"
    //       onClick={() => setMenuOpen(false)}
    //     ></div>
    //   )}

    //   {/* Navigation */}
    //   <nav
    //     className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out
    //       ${menuOpen ? "translate-x-0" : "translate-x-full"} md:relative md:translate-x-0 md:flex md:items-center md:space-x-8 md:shadow-none`}
    //   >
    //     {/* Bouton de fermeture dans le menu mobile */}
    //     <div className="flex justify-end p-4 md:hidden">
    //       <button
    //         aria-label="Fermer le menu"
    //         onClick={() => setMenuOpen(false)}
    //         className="text-gray-600"
    //       >
    //         <X size={28} />
    //       </button>
    //     </div>
        
    //     {/* Liens de navigation */}
    //     <ul className="flex flex-col md:flex-row md:items-center  md:space-x-8  text-gray-600 text-lg p-8 md:p-0 w-full ">
    //       <li>
    //         <button
    //           onClick={() => scrollToSection("accueil")}
    //           className="hover:text-blue-500 block py-2 md:py-0"
    //         >
    //           Accueil
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           onClick={() => scrollToSection("fonctionnality")}
    //           className="hover:text-blue-500 block py-2 md:py-0"
    //         >
    //           Fonctionnalités
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           onClick={() => scrollToSection("tarifs")}
    //           className="hover:text-blue-500 block py-2 md:py-0"
    //         >
    //           Tarifs
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           onClick={() => scrollToSection("contact")}
    //           className="hover:text-blue-500 block py-2 md:py-0"
    //         >
    //           Contact
    //         </button>
    //       </li>
    //     </ul>

    //     {/* Boutons connexion et inscription */}
    //     <div className="flex flex-col items-center space-y-4 p-6 md:hidden">
    //       <button
    //         onClick={() => router.push("/Connexion")}
    //         className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
    //       >
    //         Se connecter
    //       </button>
    //       <button
    //         onClick={() => router.push("/Inscription")}
    //         className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
    //       >
    //         S'inscrire
    //       </button>
    //     </div>
    //   </nav>

    //   {/* Boutons desktop (toujours visibles) */}
    //   <div className="hidden md:flex space-x-4">
    //     <button
    //       onClick={() => router.push("/Connexion")}
    //       className=" px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition md:text-sm max-lg:px-3"
    //     >
    //       Se connecter
    //     </button>
    //     <button
    //      onClick={() => router.push("/Inscription")}
    //       className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
    //     >
    //       S'inscrire
    //     </button>
    //   </div>
    // </header>

    <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center px-6 py-4">
    {/* Logo */}
    <h1 className="text-blue-600 text-2xl font-bold">
      Mia<span className="text-gray-600">Transcript</span>
    </h1>
  
    {/* Menu Burger (Mobile) */}
    <button
      aria-label="Ouvrir le menu"
      className="md:hidden text-gray-600 z-50"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  
    {/* Navigation */}
    <nav
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:relative md:translate-x-0 md:flex md:items-center md:space-x-4 md:shadow-none`}
    >
      {/* Liens de navigation */}
      <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-gray-600 text-lg p-8 md:p-0 w-full">
        <li>
          <button onClick={() => scrollToSection("accueil")} className="hover:text-blue-500 py-2 md:py-0">
            Accueil
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("fonctionnality")} className="hover:text-blue-500 py-2 md:py-0">
            Fonctionnalités
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("tarifs")} className="hover:text-blue-500 py-2 md:py-0">
            Tarifs
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 py-2 md:py-0">
            Contact
          </button>
        </li>
      </ul>
  
      {/* Boutons (Mobile) */}
      <div className="flex flex-col md:hidden gap-2 px-8">
        <button
          onClick={() => router.push("/Connexion")}
          className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
        >
          Se connecter
        </button>
        <button
          onClick={() => router.push("/Inscription")}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          S'inscrire
        </button>
      </div>
    </nav>
  
    {/* Boutons (Desktop) */}
    <div className="hidden md:flex space-x-2">
      <button
        onClick={() => router.push("/Connexion")}
        className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
      >
        Se connecter
      </button>
      <button
        onClick={() => router.push("/Inscription")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        S'inscrire
      </button>
    </div>
  </header>
  );
}
