# 🎨 Guide de Personnalisation

Si tu veux modifier le site plus tard, voici comment faire :

## 🎯 Modifications Simples

### Changer le nom
**Fichier** : `app/components/HeroSection.tsx`
**Ligne** : Cherche "Ombelyne"
```tsx
<h1>Ombelyne</h1>
// Remplace par le nouveau nom
```

### Changer la phrase d'intro
**Fichier** : `app/components/HeroSection.tsx`
**Ligne** : Cherche "Pour toi, qui illumines mes jours..."
```tsx
const fullText = 'Pour toi, qui illumines mes jours...';
// Remplace par ta nouvelle phrase
```

### Modifier les cartes
**Fichier** : `app/components/CardsSection.tsx`
**Ligne** : Cherche `const cards = [`
```tsx
{
  title: 'Nouveau Titre',
  text: 'Nouveau texte ici...',
}
```

### Changer le message long
**Fichier** : `app/components/MessageSection.tsx`
**Ligne** : Cherche `const paragraphs = [`
```tsx
const paragraphs = [
  "Nouveau paragraphe 1...",
  "Nouveau paragraphe 2...",
];
```

### Changer la musique
**Fichier** : `app/components/MusicSection.tsx`
**Ligne** : Cherche l'URL YouTube
```tsx
src="https://www.youtube.com/embed/NOUVEAU_ID"
```

### Modifier la signature
**Fichier** : `app/components/Footer.tsx`
**Ligne** : Cherche "ton chairaiiii Ahamed"
```tsx
<p>Nouvelle signature</p>
```

## 🎨 Modifications Avancées

### Changer les couleurs
**Fichier** : `app/globals.css`
```css
:root {
  --gradient-purple: #a855f7; /* Nouveau violet */
  --gradient-pink: #ec4899;   /* Nouveau rose */
}
```

### Changer la police
**Fichier** : `app/layout.tsx`
```tsx
import { Nouvelle_Police } from "next/font/google";

const nouvellePolice = Nouvelle_Police({
  variable: "--font-nouvelle",
  subsets: ["latin"],
});
```

### Ajouter une nouvelle section
1. Crée un nouveau fichier dans `app/components/`
2. Copie la structure d'un composant existant
3. Importe-le dans `app/page.tsx`
4. Ajoute-le entre les autres sections

### Modifier les animations
**Fichier** : N'importe quel composant
Cherche les blocs `motion.div` et modifie :
```tsx
initial={{ opacity: 0, y: 50 }}  // État initial
animate={{ opacity: 1, y: 0 }}   // État final
transition={{ duration: 0.8 }}   // Durée
```

## 🔧 Modifications Techniques

### Ajouter une nouvelle page
1. Crée un dossier dans `app/` (ex: `app/nouvelle-page/`)
2. Ajoute un fichier `page.tsx` dedans
3. Accède via `/nouvelle-page`

### Optimiser les images
1. Place tes images dans `public/`
2. Utilise le composant Next.js Image :
```tsx
import Image from 'next/image';

<Image 
  src="/mon-image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>
```

### Ajouter des métadonnées SEO
**Fichier** : `app/layout.tsx`
```tsx
export const metadata: Metadata = {
  title: "Nouveau titre",
  description: "Nouvelle description",
  openGraph: {
    title: "Titre pour les réseaux sociaux",
    description: "Description pour les réseaux sociaux",
  },
};
```

## 📝 Workflow de Modification

1. **Modifie le fichier**
2. **Sauvegarde** (Ctrl+S)
3. **Teste localement** : `npm run dev`
4. **Vérifie dans le navigateur** : http://localhost:3000
5. **Si OK, commit** : 
   ```bash
   git add .
   git commit -m "Description de la modification"
   git push
   ```
6. **Vercel redéploie automatiquement** ! 🚀

## ⚠️ Conseils

- Fais toujours une sauvegarde avant de modifier
- Teste localement avant de push
- Modifie un élément à la fois
- Si ça casse, utilise `git restore .` pour annuler

## 🆘 En cas de problème

### Le site ne compile plus
```bash
npm run build
```
Regarde les erreurs et corrige-les.

### Les animations ne fonctionnent plus
Vérifie que tu n'as pas supprimé :
- Les imports `framer-motion`
- Les balises `motion.div`
- Les props `initial`, `animate`, `transition`

### Le style est cassé
Vérifie :
- Les classes Tailwind (pas de fautes de frappe)
- Le fichier `globals.css` (pas de syntaxe CSS invalide)

---

N'hésite pas à expérimenter ! Le code est bien structuré et facile à modifier. 🎨
