import Link from "next/link";
import Logo from "./ui/Logo";
import { div } from "framer-motion/client";

export default function Footer() {
    return (
        <div>
            <div className="max-w-full py-16 bg-gradient-to-r from-black to-gray-900">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
      
      {/* Texte de gauche */}
      <div className="flex flex-col max-w-lg">
        <span className="text-blue-400 uppercase text-sm tracking-wider mb-2">Newsletter</span>
        <span className="text-4xl font-semibold mb-4">Recevez les actualités de Wire dans votre boîte mail</span>
        <p className="text-gray-300 text-lg leading-relaxed">
          Inscrivez-vous à la Newsletter de Wire pour rester informé sur les dernières fonctionnalités, 
          les mises à jour de nos produits et les dernières innovations dans le domaine des transferts d'argent instantanés !
        </p>
      </div>

      {/* Formulaire de droite */}
      <div className="flex flex-col w-full max-w-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input 
            type="text" 
            placeholder="Prénom" 
            className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input 
            type="text" 
            placeholder="Nom" 
            className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Adresse email" 
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div className="mb-6">
          <label className="flex items-start space-x-2">
            <input 
              type="checkbox" 
              className="mt-1 h-4 w-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 text-blue-600"
            />
            <span className="text-sm text-gray-300">
              J'accepte de recevoir les communications marketing de Wire. 
              Je peux me désinscrire à tout moment en cliquant sur le lien dans l'email.
            </span>
          </label>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]">
          S'inscrire à la newsletter
        </button>
        
        <p className="text-xs text-gray-400 mt-4 text-center">
          Vos données sont protégées par notre politique de confidentialité. 
          Nous ne partageons jamais vos informations avec des tiers.
        </p>
      </div>

    </div>
  </div>
</div>

        
        <footer className="bg-black border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Logo />
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            La nouvelle façon de gérer votre argent. Simple, rapide et sécurisé.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Produit</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors">Fonctionnalités</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sécurité</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Tarifs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Entreprise</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Compagnie</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors">À propos</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Légal</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors">Confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Conditions</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Wire Inc. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        {/* Social icons placeholders */}
                        <div className="w-5 h-5 bg-zinc-800 rounded-full hover:bg-zinc-700 cursor-pointer transition-colors"></div>
                        <div className="w-5 h-5 bg-zinc-800 rounded-full hover:bg-zinc-700 cursor-pointer transition-colors"></div>
                        <div className="w-5 h-5 bg-zinc-800 rounded-full hover:bg-zinc-700 cursor-pointer transition-colors"></div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}
