"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-4 w-full bg-[]  max-w-5xl rounded-full border backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
       <div className="mt-5">
      <Logo  />
       </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#compte" className="hover:text-white transition-colors">Compte</Link>
          <Link href="#tarifs" className="hover:text-white transition-colors">Tarifs</Link>
          <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="#support" className="hover:text-white transition-colors">Support</Link>
        </nav>
        <div>
           <div className="flex items-center gap-3">
          <Link
            href="#signup"
            className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            S'inscrire
          </Link>
        </div>

        </div>

       
      </div>
      
    </motion.header>
  );
}


