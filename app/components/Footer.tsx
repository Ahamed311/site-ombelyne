'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-purple-500/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          className="inline-block mb-4"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <span className="text-4xl">❤️</span>
        </motion.div>

        <p className="font-[family-name:var(--font-poppins)] text-gray-400 mb-2">
          Avec tout mon amour et ma gratitude
        </p>

        <p className="font-[family-name:var(--font-playfair)] text-2xl gradient-text font-semibold mb-6">
          ton chairaiiii Ahamed
        </p>

        <p className="font-[family-name:var(--font-poppins)] text-sm text-gray-500">
          {currentYear} • Une amitié qui dure pour toujours
        </p>
      </motion.div>
    </footer>
  );
}
