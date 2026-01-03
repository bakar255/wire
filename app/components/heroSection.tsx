"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="Hero">
      <div className="hero-container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="HeroText">Envoyez et recevez, sans frais avec Wire</h2>
          <p className="HeroSub">
            Une application qui vous permet d’envoyer de l’argent de façon instantané dans le monde entier, tout ça de façon automatisé et sûr.
          </p>
          <div className="hero-cta">
            <motion.button
              className="install-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Installer l'application dès maintenant
            </motion.button>
          </div>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ position: 'relative' }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
            >
              <img
                className="frame"
                src="/Framephone.png"
                alt="Wire App Interface"
              />
            </motion.div>

            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1,
                pointerEvents: 'none'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}