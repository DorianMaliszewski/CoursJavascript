---

layout: "layouts/Layout.astro"
title: "Publier un site avec GitHub Pages — du zéro à l’URL publique"
type: "TP"
----------

#### Objectifs du Tutoriel

* Mettre en ligne un **site statique** (HTML/CSS/JS) sur **GitHub Pages**.
* Deux chemins au choix :

  1. **Démarrer un nouveau projet** (recommandé si vous partez de zéro).
  2. **Publier un projet déjà existant**.
* Activer **GitHub Pages** et obtenir une **URL publique**.

---

# Avant de commencer (pré‑requis)

* Un **compte GitHub** (gratuit).
* **Git** installé (+ un éditeur comme **VS Code**).
* Connexion Internet.

> Rappels de nommage : pas d’espaces ni d’accents dans les noms de fichiers/dossiers. Utilisez `kebab-case` ou `snake_case`.

---

# Les deux types de GitHub Pages

1. **User Site** (page d’accueil de votre compte)

   * Nom **obligatoire** du dépôt : `votrePseudo.github.io`
   * URL : `https://votrePseudo.github.io`
   * **Un seul** User Site par compte.

2. **Project Site** (site d’un projet)

   * Nom libre (ex. `mon-portfolio`)
   * URL : `https://votrePseudo.github.io/mon-portfolio/`
   * Autant que vous voulez.

> Pour un **portfolio**, le plus simple est souvent un **Project Site**. Si vous voulez une page d’accueil personnelle, choisissez un **User Site**.

---

# Chemin A — Démarrer un nouveau projet (zéro → en ligne)

## Étape A1 — Créer le dépôt sur GitHub

1. Connectez‑vous sur [https://github.com](https://github.com).
2. Cliquez sur **➕ New** (ou **New repository**).
3. **Repository name** :

   * *User Site* → `votrePseudo.github.io`,
   * *Project Site* → `mon-portfolio` (par exemple).
4. **Public** (recommandé).
5. Laissez le reste par défaut (README **facultatif**).
6. Cliquez **Create repository**.

## Étape A2 — Créer le site en local

Créez un dossier sur votre ordinateur (même nom que le dépôt, ce n’est pas obligatoire mais pratique) et ajoutez un fichier **`index.html`** minimal :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mon Portfolio</title>
</head>
<body>
  <h1>Bonjour 👋</h1>
  <p>Ceci est mon premier site sur GitHub Pages.</p>
</body>
</html>
```

> Important : **`index.html` doit être à la racine** du projet (pas dans un sous‑dossier) si vous déployez depuis la racine.

## Étape A3 — Initialiser Git (méthode Terminal)

Dans ce dossier, ouvrez un **terminal** et tapez :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

Associez ensuite votre dépôt distant (remplacez par votre URL GitHub) :

```bash
git remote add origin https://github.com/votrePseudo/mon-portfolio.git
git push -u origin main
```

### Alternative : faire le commit/push avec **VS Code** (sans terminal)

1. Ouvrez le dossier dans **VS Code**.
2. Allez dans l’onglet **Source Control** (icône branche).
3. Cliquez **Initialize Repository**.
4. Entrez un **message** (ex. "Initial commit") dans le champ tout en haut et cliquez **Commit**.
5. Cliquez **Publish Branch** (ou **Sync Changes**). Si VS Code demande l’URL du dépôt distant, collez celle de votre repo GitHub.

> **Définitions utiles** :
>
> * **Commit** = prendre un "instantané" de vos fichiers avec un message.
> * **Push** = envoyer vos commits sur GitHub.

## Étape A4 — Activer GitHub Pages

1. Sur GitHub, ouvrez **votre dépôt** → onglet **Settings** → **Pages** (menu latéral).
2. Section **Build and deployment** → **Source** : choisissez **Deploy from a branch**.
3. **Branch** : `main` ; **Folder** : `/ (root)`.
4. Cliquez **Save**.

Après ~1 minute, une **URL** s’affiche (ou un bouton **Visit site**). Votre site est en ligne ! 🎉

---

# Chemin B — Vous avez **déjà** un projet (dossier existant)

## Étape B1 — Créer le dépôt GitHub

Suivez **A1** (création du dépôt sur GitHub).

## Étape B2 — Connecter votre dossier existant au dépôt

Ouvrez un **terminal dans votre dossier de projet** puis :

```bash
git init                  # si pas déjà un dépôt git
git add .
git commit -m "Initial commit"
git branch -M main

git remote add origin https://github.com/votrePseudo/mon-projet.git
# Si un remote 'origin' existe déjà, utilisez :
# git remote set-url origin https://github.com/votrePseudo/mon-projet.git

git push -u origin main
```

> **Astuce** : si votre projet a déjà des commits, sautez `git init` et `git add .` et faites directement un `git remote set-url` puis `git push`.

## Étape B3 — Vérifier l’arborescence

Assurez‑vous d’avoir un **`index.html`** à la **racine** si vous déployez depuis `/ (root)` :

```
mon-projet/
├─ index.html
├─ assets/
└─ styles.css
```

## Étape B4 — Activer GitHub Pages

Même procédure que **A4** : **Settings → Pages → Deploy from a branch** → Branch `main` + Folder `/ (root)` → **Save**.

---

# Mettre à jour votre site (après)

Chaque fois que vous modifiez vos fichiers :

### Méthode Terminal

```bash
git add .
git commit -m "Ma mise à jour"
git push
```

### Méthode VS Code

1. Onglet **Source Control**.
2. Entrez le **message** de commit → **Commit**.
3. **Sync Changes** (ou **Push**).

GitHub Pages régénère votre site en ~30–90 secondes.

---

# Où trouver l’URL et les logs ?

* **Settings → Pages** : l’**URL** de votre site est affichée ici.
* **Actions** (onglet du dépôt) : si vous utilisez GitHub Actions, vous verrez l’historique des déploiements.
* En mode "Deploy from a branch", le déploiement est automatique dès que `main` change.

---

# Problèmes fréquents & solutions rapides

* **404 / Page introuvable** : vérifiez que `index.html` est bien à la **racine** (ou que vous avez choisi le bon **Folder** dans Pages).
* **L’URL n’apparaît pas** : revérifiez **Settings → Pages**, la **Source** doit être **Deploy from a branch**, **Branch** = `main`, **Folder** = `/ (root)`.
* **Pas de changement après push** : rafraîchissez après 1–2 min, videz le cache (Ctrl+F5). Vérifiez que vous avez bien fait `git push`.
* **Nom du dépôt User Site incorrect** : pour un User Site, le dépôt doit être **exactement** `votrePseudo.github.io`.

---

# (Optionnel) Choisir entre User Site et Project Site

* Vous pouvez avoir **1** User Site (page d’accueil personnelle) **et** autant de Project Sites que nécessaire.
* Un **Project Site** est idéal pour un **portfolio** par projet ou un site de cours.

---

# Récap express

1. Créez un **dépôt GitHub** (Public).
2. Mettez un **`index.html`** à la racine.
3. **Commit** → **Push** (Terminal *ou* VS Code).
4. **Settings → Pages** : **Deploy from a branch**, `main` + `/ (root)` → **Save**.
5. Récupérez l’**URL** → partagez-la !

---

Bon déploiement ✨
