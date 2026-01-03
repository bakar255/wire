import { div } from "framer-motion/client";


export default function SocialProof() {


    return (
       <div className="bg-gradient-to-b from-zinc-950 to-black">
  <div className="max-w-6xl mx-auto px-6 py-20 mb-26">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      <div className="lg:w-1/2">
        <img src="bizi.jpg" className="rounded-xl shadow-2xl w-full h-auto" alt="Wire App Mobile & Desktop" />
      </div>
      
      <div className="lg:w-1/2 flex flex-col">
        <p className="text-sm uppercase tracking-widest text-blue-300 mb-3">Case Study • Wire Fintech</p>
        <h2 className="text-5xl font-light mb-6 leading-tight">Redéfinir les transferts d'argent pour l'ère numérique</h2>
        
        <div className="space-y-4 text-xl text-gray-300 leading-relaxed">
          <p>Conception et développement d'une plateforme de paiements transfrontaliers challenger bank.</p>
          <p>Architecture microservices, API REST, dashboard analytique en temps réel et applications mobiles natives.</p>
          <p>Intégration de blockchain privée pour la réconciliation et compliance automatisée.</p>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm">React + Next.js</span>
          <span className="px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm">Node.js Microservices</span>
          <span className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm">Hyperledger Fabric</span>
          <span className="px-4 py-2 bg-amber-900/30 text-amber-300 rounded-full text-sm">PCI-DSS Compliance</span>
        </div>
          <button className="border border-gray-300 rounded-full px-2 py-4 mt-6 cursor-pointer">En savoir-plus</button>

      </div>
      
    </div>
  </div>
     
       {/* Version 2 */}
       <div className="flex mx-auto justify-center items-center gap-26">
      <div className="flex flex-col">
        <p className="text-1xl uppercase text-emerald-400 mb-2">La révolution des paiements internationaux</p>
        <span className="text-4xl leading-tight font-light mb-5">Plus rapide qu'une banque</span>
        
        <div className="flex flex-col space-y-4 text-xl text-gray-300 leading-relaxed max-w-lg">
          <span>Envoyez de l'argent en temps réel vers 150+ pays avec des frais jusqu'à 80% inférieurs aux banques.</span>
          <span>Solutions sur mesure pour les startups, scale-ups et entreprises établies qui opèrent à l'international.</span>
          <span>Notre infrastructure de paiement certifiée PCI-DSS garantit une sécurité bancaire de niveau institutionnel.</span>
        </div>
        
        {/* Ajout d'un CTA pour cette version */}
        <div className="mt-10 flex gap-4">
          <button className=" cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Démarrer gratuitement
          </button>
          <button className="border cursor-pointer border-gray-600 hover:border-emerald-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Voir la démo
          </button>
        </div>
      </div>

        <div>
        <img src="business hero.png"  className="rounded-lg w-126 h-116 shadow-2xl" alt="bzi" />
      </div>
</div>

   <div>
      <div className="flex flex-col items-center text-center mt-26">
        <p className="text-1xl uppercase text-cyan-400 mb-2">La fin des intermédiaires coûteux</p>
        <span className="text-4xl mb-5">Wire ne construit pas une banque. Nous en construisons une meilleure.</span>
        
        <div className="flex flex-col leading-7 text-2xl space-y-6 text-wrap max-w-2xl">
          <span>Pendant que les banques traditionnelles prennent 3 à 5 jours ouvrables, Wire règle vos transactions en quelques secondes.</span>
          <span>Notre technologie de ledger distribué élimine les correspondants bancaires, réduisant les coûts et les points de défaillance.</span>
        </div>
        
        {/* Statistiques */}
        <div className="mt-12 grid grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400">0.1%</div>
            <div className="text-lg text-gray-300 mt-2">Frais moyens</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400">150+</div>
            <div className="text-lg text-gray-300 mt-2">Pays desservis</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400">24/7</div>
            <div className="text-lg text-gray-300 mt-2">Support & Transactions</div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <img src="business-hero-3.png" className="rounded-lg w-140 h-auto" alt="" />
      </div>
      
    </div>
</div>
         
    
    )
}