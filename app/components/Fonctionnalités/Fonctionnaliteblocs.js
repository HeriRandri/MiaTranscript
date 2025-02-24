



export default function Fonctionnaliteblocs({ Icon, title, description }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center flex flex-col items-center">
      <div className="text-4xl mb-4">{<Icon className="text-blue-500 w-12 h-12 mb-4" />}</div>
      <h3 className="text-xl text-gray-600 font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}