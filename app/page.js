"use client";

import { CheckCircle, FileText, Upload } from "lucide-react";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";

import Image from "next/image";
import Fonctionnaliteblocs from "./components/Fonctionnalités/Fonctionnaliteblocs";
import Tarifblocs from "./components/Tarif/Tarifblocs";
import Accueil from "./components/Accueil/Accueil";
import Faq from "./components/Contact/Faq"
import Form from "./components/Contact/Form"
import Header from "./components/Header/Header"

export default function Home() {
const scrollToSection = (id)=>{
    const section = document.getElementById(id)
    if (section){
      section.scrollIntoView({behavior:"smooth"})
    }
}
  return (
    <div className=" bg-white ">
      <Header/>
      
      <section id="accueil" className="mt-20 mb-5 p-20 flex justify-between items-center max-lg:flex-col-reverse max-lg:items-center">
      <Accueil />
      
      <div className="max-lg:w-full flex justify-center">
        <Image
          src="/transcription.png"
          alt="Illustration d'une transcription"
          width={500}
          height={300}
          className="max-lg:w-80 w-[500px] max-sm:w-60 mb-6"
        />
      </div>
    </section>
       
      
    <section id="fonctionnality" className="px-6 sm:px-12 lg:px-20 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          Pourquoi choisir notre solution?
        </h2>
        <h3 className="text-lg text-center text-gray-600 mb-8">
          Profitez d’un outil puissant qui convertit vos vidéos et audios en texte en quelques clics.
        </h3>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fonctionnaliteblocs
            Icon={CheckCircle}
            title="Transcription rapide et précise"
            description="Obtenez une transcription instantanée et fiable grâce à notre intelligence artificielle."
          />
          <Fonctionnaliteblocs
            Icon={FileText}
            title="Support multi-format"
            description="Convertissez vos fichiers MP3, MP4, WAV et bien plus encore."
          />
          <Fonctionnaliteblocs
            Icon={Upload}
            title="Exportation flexible"
            description="Téléchargez vos transcriptions en TXT, DOCX ou PDF facilement."
          />
        </div>
      </div>

     
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
        Commencer votre essai gratuit
      </button>
    </section>

<section id="tarifs" className="mt-20 px-6 sm:px-10 lg:px-20 flex flex-col items-center justify-center">
  <div className="container mx-auto px-4 py-10">
    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600 mb-6 sm:mb-8">
      Choisissez le plan qui vous convient
    </h2>
    <h3 className="text-md sm:text-lg text-center text-gray-600 mb-6 sm:mb-8">
      Des tarifs flexibles et transparents pour tous vos besoins
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <Tarifblocs
        title="Gratuit"
        price="0€ / mois"
        description="Transcription de dix minutes max / mois. Exportation en TXT uniquement"
        titleButton="Essayer gratuitement"
      />
      <Tarifblocs
        title="Standard"
        price="9,99€ / mois"
        description="Transcription illimitée Export en TXT, DOCX, PDF. Prise en charge multi-langues"
        titleButton="Choisir ce plan"
      />
      <Tarifblocs
        title="Premium"
        price="19,99€ / mois"
        description="Transcription avancée avec IA Export en TXT, DOCX, PDF, SRT. Correction automatique des erreurs"
        titleButton="S'abonner maintenant"
      />
    </div>
  </div>
</section>

    <section id="contact" className="mt-20 p-10 bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl max-sm:text-2xl font-semibold mb-8 text-blue-600">FAQ & Contact</h1>
      <p className="mb-8 text-lg text-center text-gray-600 max-sm:text-base">
        Découvrez toutes les fonctionnalités de notre application.
      </p>
      <div className="px-20 max-lg:px-10 min-h-screen flex max-lg:flex-col-reverse justify-between items-center w-full">
        <Faq />
        <Form />
      </div>
    </section>
    
    <div className="bg-gray-600 w-full flex justify-center items-center py-5">
      <div className="px-10 flex flex-col text-gray-300 space-y-3">
        <p className="flex items-center space-x-2">
          <Mail size={20} />
          <span>support@miaTranscript.com</span>
        </p>
        <p className="flex items-center space-x-2">
          <Phone size={20} />
          <span>55 88 233 55</span>
        </p>
        <p className="flex items-center space-x-2">
          <Linkedin size={20} />
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            LinkedIn
          </a>
        </p>
        <p className="flex items-center space-x-2">
          <Facebook size={20} />
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Facebook
          </a>
        </p>
      </div>
    </div>
      

    </div>
  );
}
