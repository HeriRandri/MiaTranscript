
import { useRouter } from "next/navigation";

    export default function Accueil() {
      const router = useRouter();
        return (
          <div className=" max-lg:text-left">
            <h1 className="text-4xl md:text-4xl font-bold text-blue-600 mb-6 max-sm:text-2xl">
              CONVERTIR UNE VIDÉO / <br /> AUDIO EN TEXTES <br /> FACILEMENT
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6 max-sm:text-base">
              Convertissez facilement vos vidéos et audios en texte avec précision.
              Inscrivez-vous et profitez d’une transcription rapide et efficace.
            </h3>
            <div className="flex gap-4 max-sm:flex-col">
              <button onClick={() => router.push("/Inscription")} className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
                S'inscrire maintenant
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition">
                Essayer gratuitement
              </button>
            </div>
          </div>
        );
      }
    