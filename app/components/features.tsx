"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Wallet } from "lucide-react";

const features = [
    {
        icon: <Zap className="h-8 w-8 text-blue-400" />,
        title: "Instantané",
        description: "Envoyez de l'argent en quelques secondes à n'importe qui, n'importe où."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
        title: "Sécurisé",
        description: "Vos transactions sont protégées par une sécurité de niveau bancaire."
    },
    {
        icon: <Wallet className="h-8 w-8 text-purple-400" />,
        title: "Sans frais",
        description: "Profitez de transferts gratuits entre utilisateurs Wire, sans frais cachés."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-zinc-950" id="solutions">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pourquoi choisir Wire ?</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Une expérience bancaire repensée pour vous offrir rapidité, sécurité et simplicité.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-zinc-950 inline-block group-hover:scale-110 transition-transform duration-300 border border-zinc-800">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
                <div>
                    
                </div>
        </section>
       
    );
}
