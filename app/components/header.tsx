"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50  backdrop-blur ">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Wire
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
          <Link href="#compte" className="hover:text-black">Compte</Link>
          <Link href="#tarifs" className="hover:text-black">Tarifs</Link>
          <Link href="#solutions" className="hover:text-black">Solutions</Link>
          <Link href="#support" className="hover:text-black">Support</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#signup"
            className="rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-black/90"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </header>
  );
}


