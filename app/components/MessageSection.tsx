'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const paragraphs = [
  "Ombelyne, si je devais définir ce qu'est une vraie amitié, je parlerais de toi. De nous. De cette connexion rare qui ne se force pas, qui existe simplement.",
  "Tu sais, il y a des personnes qui traversent notre vie, et puis il y a celles qui la marquent à jamais. Tu fais partie de ces personnes précieuses qui changent tout.",
  "Avec toi, je n'ai pas besoin de prétendre. Je peux être vulnérable, drôle, sérieux, stupide. Tu acceptes toutes mes facettes sans jamais me demander de choisir.",
  "Nos conversations qui durent des heures, nos silences confortables, nos délires incompréhensibles pour les autres... C'est ça, notre langage. Notre bulle.",
  "Merci d'être cette lumière dans ma vie. Merci pour ta patience, ta loyauté, ta sincérité. Merci d'être toi, tout simplement.",
  "Cette amitié, c'est un trésor que je chéris chaque jour. Et je voulais prendre le temps de te le dire, de te le montrer.",
];

function Paragraph({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const words = text.split(' ');
  const highlightWords = ['amitié', 'toi', 'connexion', 'précieuses', 'acceptes', 'lumière', 'trésor', 'chéris'];

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[.,!?]/g, '');
        const isHighlight = highlightWords.includes(cleanWord.toLowerCase());
        const punctuation = word.match(/[.,!?]/g)?.[0] || '';
        
        return (
          <span key={i}>
            <span className={isHighlight ? 'gradient-text font-semibold' : ''}>
              {cleanWord}
            </span>
            {punctuation}{' '}
          </span>
        );
      })}
    </motion.p>
  );
}

export default function MessageSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
        
        <div className="pl-8">
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} text={paragraph} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
