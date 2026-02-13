'use client';

import { motion } from 'framer-motion';

export default function MusicSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Une musique pour nous
        </h2>
        
        <p className="font-[family-name:var(--font-poppins)] text-gray-400 mb-10 text-lg">
          Parce que certaines mélodies parlent mieux que les mots
        </p>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/56STvMBKYdw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
