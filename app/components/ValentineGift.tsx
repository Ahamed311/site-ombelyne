'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ValentineGift() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {!isOpen ? (
          <motion.div className="flex flex-col items-center">
            <motion.h2
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-8 gradient-text"
            >
              Un dernier message...
            </motion.h2>

            <motion.p className="font-[family-name:var(--font-poppins)] text-gray-400 mb-12 text-lg">
              Clique sur le cadeau 🎁
            </motion.p>

            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="text-8xl md:text-9xl filter drop-shadow-2xl">
                🎁
              </div>
              
              {/* Sparkles around gift */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-3xl"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8 
              }}
              className="relative"
            >
              {/* Confetti effect */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 1],
                    x: (Math.random() - 0.5) * 400,
                    y: (Math.random() - 0.5) * 400,
                    opacity: [1, 1, 0],
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut"
                  }}
                >
                  {['💜', '💖', '✨', '🎉', '💝'][Math.floor(Math.random() * 5)]}
                </motion.div>
              ))}

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-10 md:p-16 rounded-3xl border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-8 gradient-text">
                    Joyeuse Saint-Valentin ! 💜
                  </h2>

                  <div className="space-y-6 font-[family-name:var(--font-poppins)] text-lg md:text-xl text-gray-300 leading-relaxed">
                    <p>
                      Aujourd'hui, les gens fêtent l'amour, les relations amoureuses... 
                      Mais moi, je célèbre quelque chose de tout aussi précieux : <span className="gradient-text font-semibold">notre amitié</span>.
                    </p>

                    <p>
                      En <span className="gradient-text font-semibold">1 an</span>, tu m'as beaucoup appris, beaucoup conseillé. 
                      Grâce à toi, j'ai pris des <span className="gradient-text font-semibold">bonnes décisions</span>. 
                      Tu continues toujours à être là pour moi.
                    </p>

                    <p>
                      Je prie que cette amitié <span className="gradient-text font-semibold">dure pour toujours</span>. 
                      Tu es une personne rare, précieuse, et je suis chanceux de t'avoir dans ma vie.
                    </p>

                    <motion.p
                      className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] gradient-text font-bold pt-6"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      Merci d'être toi, Ombelyne 💜
                    </motion.p>
                  </div>

                  <motion.div
                    className="mt-10 text-6xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    💝
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </section>
  );
}
