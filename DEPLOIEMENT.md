# 🚀 Guide de Déploiement - Site pour Ombelyne

## Étape 1 : Préparer le code

Tout est déjà prêt ! Le site a été testé et compile parfaitement.

## Étape 2 : Push sur GitHub

### Si tu n'as pas encore de repository GitHub :

1. Va sur [github.com](https://github.com) et crée un nouveau repository
2. Nomme-le comme tu veux (ex: "site-ombelyne")
3. Ne coche RIEN (pas de README, pas de .gitignore)
4. Clique sur "Create repository"

### Ensuite, dans ton terminal :

```bash
git init
git add .
git commit -m "Site premium pour Ombelyne"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git
git push -u origin main
```

Remplace `TON-USERNAME` et `TON-REPO` par tes vraies valeurs.

## Étape 3 : Déployer sur Vercel

### Méthode la plus simple :

1. Va sur [vercel.com](https://vercel.com)
2. Clique sur "Sign Up" ou "Log In"
3. Connecte-toi avec ton compte GitHub
4. Clique sur "Add New..." → "Project"
5. Sélectionne ton repository "site-ombelyne"
6. Clique sur "Deploy"

**C'est tout !** Vercel va :
- Détecter automatiquement Next.js
- Installer les dépendances
- Builder le projet
- Le mettre en ligne

⏱️ Temps estimé : 2-3 minutes

## Étape 4 : Récupérer l'URL

Une fois le déploiement terminé :
- Vercel te donnera une URL du type : `https://site-ombelyne.vercel.app`
- Tu peux la partager immédiatement !

## 🎨 Personnaliser le domaine (optionnel)

Si tu veux un domaine personnalisé :
1. Va dans les settings du projet sur Vercel
2. Section "Domains"
3. Ajoute ton domaine personnalisé

## 🔄 Mises à jour futures

Pour mettre à jour le site :
```bash
git add .
git commit -m "Mise à jour"
git push
```

Vercel redéploiera automatiquement ! 🎉

## ✅ Checklist finale

- [ ] Code pushé sur GitHub
- [ ] Projet déployé sur Vercel
- [ ] URL récupérée
- [ ] Site testé sur mobile
- [ ] Site testé sur desktop
- [ ] Partagé avec Ombelyne ❤️

---

Besoin d'aide ? Tout est déjà configuré et prêt à fonctionner !
