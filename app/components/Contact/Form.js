

export default function Form() {
  return (
    <div className="px-10 max-sm:px-5 mb-12 w-full">
      <h2 className="text-xl font-bold text-blue-600 text-center mb-6 max-sm:text-lg">Besoin d’aide ? Contactez-nous !</h2>
      <form className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-md max-sm:p-5">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
