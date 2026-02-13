# ✅ Checklist Avant Déploiement

## 🔍 Vérifications Locales

### 1. Build réussi
```bash
npm run build
```
- [ ] Aucune erreur
- [ ] Aucun warning critique
- [ ] Build terminé avec succès

### 2. Test en développement
```bash
npm run dev
```
- [ ] Le site se charge sur http://localhost:3000
- [ ] La Hero Section s'affiche correctement
- [ ] Le bouton "Entrer" fonctionne
- [ ] Les 6 cartes s'affichent
- [ ] Le message long est visible
- [ ] La vidéo YouTube se charge
- [ ] Le footer s'affiche avec la signature

### 3. Test Responsive

#### Mobile (375px)
- [ ] Texte lisible
- [ ] Pas de débordement horizontal
- [ ] Boutons cliquables
- [ ] Cartes en 1 colonne
- [ ] Vidéo responsive

#### Desktop (1920px)
- [ ] Centrage correct
- [ ] Cartes en 3 colonnes
- [ ] Espacement harmonieux
- [ ] Animations fluides

### 4. Test des Animations
- [ ] Hero : fade in + slide
- [ ] Texte machine à écrire fonctionne
- [ ] Particules flottent
- [ ] Cartes apparaissent au scroll
- [ ] Hover sur les cartes fonctionne
- [ ] Message apparaît au scroll
- [ ] Cœur pulse dans le footer

### 5. Test du Contenu
- [ ] "Ombelyne" s'affiche correctement
- [ ] Phrase d'intro correcte
- [ ] 6 cartes avec les bons textes
- [ ] Message long complet
- [ ] Vidéo YouTube correcte (Damso)
- [ ] Signature "ton chairaiiii Ahamed"
- [ ] Année 2026 affichée

## 📦 Préparation Git

### 6. Fichiers à commit
- [ ] Tous les composants créés
- [ ] package.json avec framer-motion
- [ ] globals.css modifié
- [ ] layout.tsx modifié
- [ ] page.tsx modifié
- [ ] Documentation (README, etc.)

### 7. Git Status
```bash
git status
```
- [ ] Tous les fichiers sont trackés
- [ ] Pas de fichiers sensibles (.env, etc.)

## 🚀 Déploiement

### 8. GitHub
- [ ] Repository créé sur GitHub
- [ ] Code pushé sur la branche main
- [ ] Tous les commits sont présents

### 9. Vercel
- [ ] Compte Vercel créé
- [ ] GitHub connecté à Vercel
- [ ] Repository importé
- [ ] Déploiement lancé

### 10. Vérification Post-Déploiement
- [ ] URL de production reçue
- [ ] Site accessible en ligne
- [ ] Test sur mobile réel
- [ ] Test sur desktop
- [ ] Vidéo YouTube fonctionne
- [ ] Animations fluides
- [ ] Pas d'erreurs console

## 🎯 Tests Finaux

### 11. Performance
Ouvre DevTools → Lighthouse :
- [ ] Performance > 80
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

### 12. Compatibilité Navigateurs
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

### 13. Partage
- [ ] URL copiée
- [ ] Testé sur plusieurs appareils
- [ ] Prêt à partager avec Ombelyne ! 💜

## 📝 Notes

### Si un test échoue :
1. Note le problème
2. Corrige localement
3. Teste à nouveau
4. Commit et push
5. Vercel redéploie automatiquement

### Commandes Utiles
```bash
# Tester localement
npm run dev

# Builder
npm run build

# Voir les changements
git status

# Commit
git add .
git commit -m "Fix: description"
git push
```

---

Une fois tous les ✓ cochés, tu es prêt ! 🎉
