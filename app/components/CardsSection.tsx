'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    title: 'Présence',
    text: 'Tu es cette personne rare qui sait être là, vraiment là. Pas juste physiquement, mais avec ton cœur et ton attention.',
  },
  {
    title: 'Écoute',
    text: 'Dans un monde où tout le monde parle, tu es celle qui écoute. Tu entends ce que je ne dis pas, tu comprends mes silences.',
  },
  {
    title: 'Rires',
    text: 'Nos fous rires qui ne finissent jamais, ces moments où on pleure de rire pour des choses que personne d\'autre ne comprendrait.',
  },
  {
    title: 'Soutien',
    text: 'Dans mes doutes, mes peurs, mes moments de faiblesse, tu es mon pilier. Tu me relèves sans me juger.',
  },
  {
    title: 'Authenticité',
    text: 'Avec toi, je peux être moi, sans filtre, sans masque. Tu acceptes mes défauts comme tu célèbres mes qualités.',
  },
  {
    title: 'Gratitude',
    text: 'Merci d\'être cette amie exceptionnelle, cette sœur de cœur. Tu rends ma vie plus belle simplement en en faisant partie.',
  },
];

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />
      
      <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4 gradient-text relative z-10">
        {card.title}
      </h3>
      
      <p className="font-[family-name:var(--font-poppins)] text-gray-300 leading-relaxed relative z-10">
        {card.text}
      </p>
    </motion.div>
  );
}

export default function CardsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
      >
        Ce que tu représentes
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
