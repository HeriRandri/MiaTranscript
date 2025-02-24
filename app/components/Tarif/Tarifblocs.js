

export default function Tarifblocs({ title, price, description, titleButton }) {
  return (
    <div className="bg-white border-2 border-blue-500 p-6 rounded-lg text-center mb-6 max-w-sm w-full mx-auto">
      <h3 className="text-xl text-blue-600 font-semibold mb-2">{title}</h3>
      <h4 className="text-xl text-gray-600 font-semibold mb-2">{price}</h4>
      <p className="text-lg text-gray-600">{description}</p>
      <br />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-4 transition duration-300">
        {titleButton}
      </button>
    </div>
  );
}
