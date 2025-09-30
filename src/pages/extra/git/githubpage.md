---
layout: "layouts/Layout.astro"
title: "Publier un site avec GitHub Pages — du zéro à l’URL publique"
type: "TP"
---

#### Objectifs du TD

- Créer un dépôt GitHub et y pousser un site statique.
- Activer **GitHub Pages** (user site ou project site).
- Déployer depuis `main`, `docs/` ou `gh-pages`.
- (Optionnel) Configurer un **domaine personnalisé** et HTTPS.
- Comprendre les limites et bonnes pratiques.

---

## 1) Pré-requis

- Un compte **GitHub**.
- **Git** installé localement + un éditeur (ex. VS Code).
- Un dossier contenant votre site **statique** (HTML/CSS/JS) — ou un projet *buildé* (ex. Astro, React, Vite) dont la sortie est en `dist/`.

> Rappel naming :
> - Pas d’espaces ni d’accents dans les noms de dossiers/fichiers.
> - Préférez `kebab-case` ou `snake_case`.

---

## 2) Deux types de sites GitHub Pages

1) **User/Organization Site** (page d’accueil de votre compte)  
   - Nom du dépôt **obligatoire** : `votrePseudo.github.io`  
   - L’URL publique sera : `https://votrePseudo.github.io`

2) **Project Site** (site d’un projet spécifique)  
   - Nom de dépôt libre (ex. `mon-projet`)  
   - L’URL publique sera : `https://votrePseudo.github.io/mon-projet/`

> Choisissez le type qui correspond à votre besoin. On peut en avoir **un seul** de type *User Site* par compte, mais **autant** de *Project Sites* que vous voulez.

---

## 3) Création du dépôt & premier push

### 3.1 Créer le dépôt sur GitHub
- **New repository** → nommez-le selon votre choix (ou `votrePseudo.github.io` pour un *User Site*).
- Laissez public (recommandé pour Pages), sans README (facultatif).

### 3.2 Initialiser localement et pousser
- Dans le terminal, placez-vous dans votre dossier de site, puis :
  - ```
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/votrePseudo/mon-projet.git
  git push -u origin main
  ```

> Remplacez l’URL par celle de **votre** dépôt.  
> Si vous avez déjà un dépôt local, adaptez (ne refaites pas `git init`).

---

## 4) Activer GitHub Pages

### 4.1 Méthode A — Depuis la branche `main` (racine ou `/docs`)
- Allez dans **Settings → Pages**.
- **Source** :
  - *Branch* : `main`
  - *Folder* : `/ (root)` **ou** `/docs`
- Cliquez **Save**.

> Si vous choisissez `/docs`, placez votre `index.html` dans un dossier `docs/` à la racine du repo.

### 4.2 Méthode B — Branche dédiée `gh-pages` (souvent utilisée pour sites buildés)
- Créez une branche `gh-pages` contenant **uniquement** les fichiers **buildés** (ex. `dist/`).
- Dans **Settings → Pages** :
  - *Branch* : `gh-pages`
  - *Folder* : `/ (root)`
- **Save**.

> Avantage : votre branche `main` contient le **code source**, `gh-pages` ne contient que le **site publié**.

---

## 5) Arborescences types

### 5.1 Déploiement direct depuis `main` (racine)
- ```
  mon-projet/
  ├─ index.html
  ├─ assets/
  └─ styles.css
  ```

### 5.2 Déploiement depuis `docs/`
- ```
  mon-projet/
  ├─ docs/
  │  ├─ index.html
  │  └─ assets/
  └─ src/ (vos sources éventuelles)
  ```

### 5.3 Déploiement via `gh-pages`
- ```
  mon-projet/
  ├─ src/ ... (code source)
  ├─ dist/ ... (sortie de build)
  └─ (CI) publie dist/ → branche gh-pages
  ```

---

## 6) Exemple minimal d’index

- ```html
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Mon site GitHub Pages</title>
  </head>
  <body>
    <h1>Bonjour GitHub Pages 👋</h1>
    <p>Déployé depuis GitHub !</p>
  </body>
  </html>
  ```

> Commit/push, puis attendez 30–90 secondes que GitHub génère le site.

---

## 7) Cas des sites “buildés” (Astro, Vite, React…)

### 7.1 Build local → push manuel sur `gh-pages`
- ```
  npm install
  npm run build        # génère /dist
  ```
- Publier `dist/` sur la branche `gh-pages` :
  - ```
    git subtree push --prefix dist origin gh-pages
    ```
  - ou utilisez l’outil `gh-pages` :
    - ```
      npm i -D gh-pages
      npx gh-pages -d dist
      ```

### 7.2 Via GitHub Actions (automatique à chaque push)
- Ajoutez un workflow `.github/workflows/pages.yml` :
  - ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches: [ main ]

    permissions:
      contents: read
      pages: write
      id-token: write

    concurrency:
      group: "pages"
      cancel-in-progress: true

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-node@v4
            with:
              node-version: '20'
          - run: npm ci
          - run: npm run build
          - uses: actions/upload-pages-artifact@v3
            with:
              path: ./dist

      deploy:
        needs: build
        runs-on: ubuntu-latest
        environment:
          name: github-pages
          url: \${{ steps.deployment.outputs.page_url }}
        steps:
          - id: deployment
            uses: actions/deploy-pages@v4
    ```

- Dans **Settings → Pages**, mettez **Source** sur *GitHub Actions*.

> Pour **Astro** : assurez-vous que la sortie est dans `dist/` (par défaut) et, si déployé en sous-chemin (project site), configurez `base` dans `astro.config.mjs`.

---

## 8) Tester l’accès

- Pour un **User Site** : `https://votrePseudo.github.io`
- Pour un **Project Site** : `https://votrePseudo.github.io/mon-projet/`

> Si 404 : attendez ~1–2 minutes, puis **Actions** (onglet) pour voir les logs de build si vous utilisez un workflow.

---

## 9) (Optionnel) Domaine personnalisé + HTTPS

### 9.1 Déclarer le domaine
- Dans **Settings → Pages**, section **Custom domain** :
  - Saisissez `www.mondomaine.fr` (recommandé : utiliser le sous-domaine `www`).
  - GitHub créera un fichier `CNAME` au déploiement.

### 9.2 Configurer les DNS chez votre registrar
