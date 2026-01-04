export default function Login() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-10">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg w-96 flex flex-col">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="mb-4 p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition">
          Se connecter
        </button>
        <p className="mt-4 text-gray-400 text-sm text-center hover:text-white cursor-pointer">
          Mot de passe oublié ?
        </p>
      </div>
    </div>
  );
}
