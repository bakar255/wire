'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Carousel() {

  const brands = [
    { id: 1, image: "swiss.jpg" },
    { id: 2, image: "money.png" },
    { id: 3,image: "wise.png" },
    { id: 4, image: "canada.webp" },
    { id: 5, image: "revolut.png" },
    { id: 6, image: "tencent.png" },
  ];

  return (
    <div className="bg-black py-12 overflow-hidden">
        <h2 className="text-center uppercase mb-2 text-blue-400">Des millions d'utilisateurs nous font confiance</h2>
      <motion.div
        className="flex gap-22"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 backdrop-blur-sm rounded-xl p-6 w-50 h-30 flex items-center justify-center"
          >
            <img 
                src={brand.image} 
                className="max-w-full max-h-full object-contain"
                >
            </img>

            <span className="text-white"></span>
          </div>
        ))}
      </motion.div>
    </div>
);
}