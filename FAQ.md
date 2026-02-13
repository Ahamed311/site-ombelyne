# ❓ Questions Fréquentes (FAQ)

## 🚀 Déploiement

### Q : Combien de temps pour déployer ?
**R :** Environ 10 minutes en suivant [DEMARRAGE-RAPIDE.md](DEMARRAGE-RAPIDE.md).

### Q : C'est gratuit ?
**R :** Oui ! GitHub et Vercel sont gratuits pour les projets personnels.

### Q : Dois-je payer un domaine ?
**R :** Non, Vercel te donne une URL gratuite (ex: `ton-site.vercel.app`). Tu peux acheter un domaine personnalisé si tu veux.

### Q : Le site sera rapide ?
**R :** Oui ! Vercel utilise un CDN mondial. Le site se charge en moins de 2 secondes.

## 🛠️ Technique

### Q : Dois-je connaître le code ?
**R :** Non pour déployer. Oui pour modifier. Mais les guides [PERSONNALISATION.md](PERSONNALISATION.md) sont très simples.

### Q : Puis-je modifier le contenu ?
**R :** Oui ! Lis [PERSONNALISATION.md](PERSONNALISATION.md) pour savoir comment.

### Q : Comment changer la musique ?
**R :** Remplace l'URL YouTube dans `app/components/MusicSection.tsx`. Détails dans [PERSONNALISATION.md](PERSONNALISATION.md).

### Q : Le site fonctionne sur mobile ?
**R :** Oui ! Il est parfaitement responsive (testé sur iPhone, Android, iPad).

### Q : Puis-je ajouter des photos ?
**R :** Oui ! Place-les dans `public/` et utilise le composant Next.js Image. Voir [PERSONNALISATION.md](PERSONNALISATION.md).

## 🎨 Design

### Q : Puis-je changer les couleurs ?
**R :** Oui ! Modifie `app/globals.css`. Détails dans [PERSONNALISATION.md](PERSONNALISATION.md).

### Q : Puis-je changer la police ?
**R :** Oui ! Modifie `app/layout.tsx`. Toutes les Google Fonts sont disponibles.

### Q : Les animations sont-elles modifiables ?
**R :** Oui ! Modifie les props `motion.div` dans les composants.

### Q : Puis-je ajouter une section ?
**R :** Oui ! Crée un nouveau composant et importe-le dans `app/page.tsx`.

## 🐛 Problèmes

### Q : Le site ne se charge pas localement
**R :** 
```bash
npm install
npm run dev
```
Si ça ne marche pas, vérifie que Node.js est installé : `node -v`

### Q : Erreur lors du build
**R :** Lis l'erreur dans le terminal. Souvent c'est une faute de frappe. Vérifie avec `npm run build`.

### Q : Git ne fonctionne pas
**R :** Vérifie que Git est installé : `git --version`. Lis [COMMANDES-GIT.md](COMMANDES-GIT.md).

### Q : Vercel ne déploie pas
**R :** Vérifie que :
- Le code est sur GitHub
- Le repository est connecté à Vercel
- Le build local fonctionne (`npm run build`)

### Q : La vidéo YouTube ne se charge pas
**R :** Vérifie l'URL dans `app/components/MusicSection.tsx`. Elle doit être au format : `https://www.youtube.com/embed/VIDEO_ID`

## 📱 Mobile

### Q : Le site est-il responsive ?
**R :** Oui ! Testé sur toutes les tailles d'écran.

### Q : Comment tester sur mobile ?
**R :** 
1. Lance `npm run dev`
2. Ouvre DevTools (F12)
3. Clique sur l'icône mobile (Ctrl+Shift+M)
4. Teste différentes tailles

### Q : Le texte est trop petit sur mobile
**R :** Les tailles sont optimisées. Si tu veux changer, modifie les classes Tailwind (`text-xl` → `text-2xl`).

## 🔄 Mises à jour

### Q : Comment mettre à jour le site ?
**R :**
```bash
# 1. Modifie les fichiers
# 2. Teste localement
npm run dev
# 3. Commit et push
git add .
git commit -m "Mise à jour"
git push
# 4. Vercel redéploie automatiquement !
```

### Q : Combien de temps pour voir les changements ?
**R :** 2-3 minutes après le push. Vercel rebuild et redéploie automatiquement.

### Q : Puis-je revenir en arrière ?
**R :** Oui ! Vercel garde l'historique. Tu peux rollback depuis le dashboard.

## 💰 Coûts

### Q : Combien ça coûte ?
**R :** 0€ ! Tout est gratuit :
- GitHub : gratuit
- Vercel : gratuit (plan Hobby)
- Next.js : open source
- Tailwind : open source
- Framer Motion : open source

### Q : Y a-t-il des limites ?
**R :** Vercel gratuit :
- 100 GB de bande passante/mois
- Déploiements illimités
- Largement suffisant pour un site personnel

## 🎯 Performance

### Q : Le site est-il rapide ?
**R :** Oui ! Score Lighthouse attendu > 90.

### Q : Les animations ralentissent-elles le site ?
**R :** Non, Framer Motion est optimisé. Les animations sont fluides.

### Q : Puis-je améliorer la performance ?
**R :** Le site est déjà optimisé. Si besoin :
- Compresse les images
- Utilise Next.js Image
- Minimise les animations

## 📚 Documentation

### Q : Par où commencer ?
**R :** Lis [BIENVENUE.md](BIENVENUE.md) puis [DEMARRAGE-RAPIDE.md](DEMARRAGE-RAPIDE.md).

### Q : Où trouver toute la doc ?
**R :** [INDEX-DOCUMENTATION.md](INDEX-DOCUMENTATION.md) liste tous les guides.

### Q : Les guides sont-ils à jour ?
**R :** Oui ! Créés en même temps que le code.

## 🆘 Aide

### Q : Je suis bloqué, que faire ?
**R :** 
1. Relis le guide correspondant
2. Vérifie les erreurs dans le terminal
3. Teste `npm run build` pour voir les erreurs
4. Lis [TESTER.md](TESTER.md) section "Problèmes courants"

### Q : Où trouver de l'aide ?
**R :** 
- Documentation Next.js : https://nextjs.org/docs
- Documentation Tailwind : https://tailwindcss.com/docs
- Documentation Framer Motion : https://www.framer.com/motion/

## 🎉 Succès

### Q : Comment savoir si tout fonctionne ?
**R :** Suis la [CHECKLIST-DEPLOIEMENT.md](CHECKLIST-DEPLOIEMENT.md).

### Q : Le site est en ligne, et maintenant ?
**R :** Partage l'URL avec Ombelyne ! 💜

### Q : Puis-je partager le code ?
**R :** Oui, c'est ton projet ! Le repository GitHub peut être public ou privé.

---

D'autres questions ? Relis les guides, tout est expliqué ! 📚
