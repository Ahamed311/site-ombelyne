# 📝 Commandes Git - Aide-mémoire

## Première fois (initialiser le projet)

```bash
# 1. Initialiser Git
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Faire le premier commit
git commit -m "Site premium pour Ombelyne"

# 4. Créer la branche main
git branch -M main

# 5. Connecter à GitHub (remplace TON-USERNAME et TON-REPO)
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git

# 6. Pousser le code
git push -u origin main
```

## Mises à jour futures

Quand tu modifies le site :

```bash
# 1. Voir ce qui a changé
git status

# 2. Ajouter les changements
git add .

# 3. Faire un commit avec un message
git commit -m "Description de tes changements"

# 4. Pousser sur GitHub
git push
```

## Commandes utiles

```bash
# Voir l'historique des commits
git log --oneline

# Annuler les derniers changements (avant commit)
git restore .

# Voir les différences
git diff

# Voir les branches
git branch

# Voir l'URL du repository
git remote -v
```

## Exemples de messages de commit

```bash
git commit -m "Ajout d'une nouvelle carte"
git commit -m "Modification du texte du message"
git commit -m "Changement de la musique"
git commit -m "Amélioration du responsive mobile"
git commit -m "Correction d'un bug d'animation"
```

## En cas de problème

### "fatal: not a git repository"
```bash
git init
```

### "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git
```

### "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

---

Besoin d'aide ? Ces commandes couvrent 99% des cas ! 🎯
