# ⚡ Commandes Rapides

## 🚀 Développement

```bash
# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en mode production
npm start
```

## 📦 Git - Première fois

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Site premium pour Ombelyne"

# Créer la branche main
git branch -M main

# Connecter à GitHub (remplace TON-USERNAME et TON-REPO)
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git

# Pousser le code
git push -u origin main
```

## 🔄 Git - Mises à jour

```bash
# Voir les changements
git status

# Ajouter les changements
git add .

# Commit
git commit -m "Description"

# Push
git push
```

## 🧪 Tests

```bash
# Tester le build
npm run build

# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Lister les dépendances
npm list --depth=0
```

## 🛠️ Dépannage

```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install

# Nettoyer le cache Next.js
rm -rf .next

# Annuler les changements locaux
git restore .

# Voir les logs Git
git log --oneline
```

## 📱 Test Responsive

```bash
# Lancer le serveur
npm run dev

# Puis dans le navigateur :
# 1. Ouvre http://localhost:3000
# 2. F12 pour DevTools
# 3. Ctrl+Shift+M pour mode mobile
# 4. Teste différentes tailles
```

## 🚀 Déploiement Vercel

```bash
# 1. Push sur GitHub
git add .
git commit -m "Ready for deployment"
git push

# 2. Va sur vercel.com
# 3. Importe le repo
# 4. Clique sur Deploy
# 5. C'est tout ! ✨
```

## 📝 Commandes Utiles

```bash
# Voir la version de Node
node -v

# Voir la version de npm
npm -v

# Voir les scripts disponibles
npm run

# Ouvrir dans VS Code
code .

# Ouvrir dans le navigateur
start http://localhost:3000
```

## 🎯 Workflow Complet

```bash
# 1. Développement
npm run dev

# 2. Test
# Vérifie dans le navigateur

# 3. Build
npm run build

# 4. Commit
git add .
git commit -m "Description"

# 5. Push
git push

# 6. Vercel déploie automatiquement ! 🎉
```

---

Copie-colle ces commandes directement dans ton terminal ! 💻
