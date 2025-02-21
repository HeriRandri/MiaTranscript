

export default function Faq() {
    return (
      <div className="p-10 max-sm:p-5 mb-10 w-full">
        <h2 className="text-xl text-blue-600 font-bold text-center mb-6 max-sm:text-lg">FAQ</h2>
        <div className="space-y-4 max-sm:text-sm">
          <div className="bg-white p-7 shadow-lg rounded-md max-sm:p-4">
            <h3 className="text-xl text-gray-600 font-semibold max-sm:text-lg">Quels formats sont pris en charge ?</h3>
            <p className="text-gray-600">MP3, MP4, WAV, etc.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md max-sm:p-4">
            <h3 className="text-xl text-gray-600 font-semibold max-sm:text-lg">Combien de temps prend une transcription ?</h3>
            <p className="text-gray-600">En quelques secondes.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md max-sm:p-4">
            <h3 className="text-xl text-gray-600 font-semibold max-sm:text-lg">Puis-je utiliser le service gratuitement ?</h3>
            <p className="text-gray-600">Oui, avec un plan gratuit limité.</p>
          </div>
        </div>
      </div>
    );
  }
  