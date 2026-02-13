# 🧪 Tester le site localement

## Lancer le serveur de développement

```bash
npm run dev
```

Puis ouvre ton navigateur sur : **http://localhost:3000**

## Ce que tu devrais voir :

### 1. Page d'accueil (Hero)
- ✅ Fond noir avec dégradé violet/rose subtil
- ✅ "Ombelyne" en très grand avec effet gradient
- ✅ Phrase qui s'écrit lettre par lettre
- ✅ Bouton "Entrer" avec effet hover
- ✅ Particules flottantes en arrière-plan

### 2. Section Cartes (après avoir cliqué sur "Entrer")
- ✅ 6 cartes avec titres et textes
- ✅ Effet hover qui agrandit légèrement les cartes
- ✅ Animation au scroll (les cartes apparaissent progressivement)
- ✅ Bordures qui s'illuminent au survol

### 3. Section Message
- ✅ Texte long en plusieurs paragraphes
- ✅ Certains mots en gradient (amitié, toi, connexion, etc.)
- ✅ Barre verticale gradient à gauche
- ✅ Animation au scroll

### 4. Section Musique
- ✅ Titre "Une musique pour nous"
- ✅ Player YouTube intégré
- ✅ Musique de Damso qui se charge
- ✅ Effet hover sur le player

### 5. Footer
- ✅ Cœur animé qui pulse
- ✅ "ton chairaiiii Ahamed"
- ✅ Année dynamique (2026)

## Tester le responsive

### Sur desktop :
- Redimensionne la fenêtre du navigateur
- Tout doit rester bien aligné

### Sur mobile :
- Ouvre les DevTools (F12)
- Clique sur l'icône mobile (ou Ctrl+Shift+M)
- Teste différentes tailles :
  - iPhone SE (375px)
  - iPhone 12 Pro (390px)
  - iPad (768px)

## Vérifier les performances

1. Ouvre les DevTools (F12)
2. Va dans l'onglet "Lighthouse"
3. Clique sur "Generate report"
4. Tu devrais avoir :
   - Performance : > 90
   - Accessibility : > 90
   - Best Practices : > 90
   - SEO : > 90

## Problèmes courants

### Le site ne se charge pas ?
```bash
npm install
npm run dev
```

### Les animations ne fonctionnent pas ?
Vérifie que Framer Motion est installé :
```bash
npm list framer-motion
```

### Le build échoue ?
```bash
npm run build
```
Regarde les erreurs dans le terminal.

---

Tout fonctionne ? Prêt pour le déploiement ! 🚀
