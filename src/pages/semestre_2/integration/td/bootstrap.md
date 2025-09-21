---
layout: "layouts/Layout.astro"
title: "Tailwindcss"
---

# Introduction à Tailwind CSS

## 1. Présentation de Tailwind CSS

Tailwind CSS est un framework CSS **utilitaire** qui permet de styliser des éléments directement dans le HTML sans écrire de CSS personnalisé. Voici la documentation officiel : [Cliquez ici](https://tailwindcss.com/docs/installation/using-vite)

### Exemple minimaliste

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Tailwind</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-4">
    <h1 class="text-3xl font-bold text-center text-blue-500">Bienvenue sur Tailwind CSS</h1>
</body>
</html>
```

## 2. Mise en page avec Tailwind

### 2.1 Utilisation de Flexbox

Tailwind facilite la gestion des mises en page avec **flexbox**.

```html
<div class="flex items-center justify-center h-screen bg-gray-200">
    <div class="p-6 bg-white rounded-lg shadow-lg">
        <p class="text-lg">Contenu centré avec flexbox.</p>
        <p class="text-lg">Contenu centré avec flexbox.</p>
    </div>
</div>
```

**Résultat visuel :**

<div class="flex items-center justify-center h-screen bg-gray-200">
    <div class="p-6 bg-white rounded-lg shadow-lg">
        <p class="text-lg">Contenu centré avec flexbox.</p>
        <p class="text-lg">Contenu centré avec flexbox.</p>
    </div>
</div>

### 2.2 Utilisation de Grid

La grille CSS de Tailwind permet d’aligner facilement des éléments.

```html
<div class="grid grid-cols-3 gap-4 p-4">
    <div class="p-6 bg-blue-300">1</div>
    <div class="p-6 bg-blue-400">2</div>
    <div class="p-6 bg-blue-500">3</div>
</div>
```

**Résultat visuel :**

<div class="grid grid-cols-3 gap-4 p-4">
    <div class="p-6 bg-blue-300">1</div>
    <div class="p-6 bg-blue-400">2</div>
    <div class="p-6 bg-blue-500">3</div>
</div>

---

## 3. Typographie et couleurs

### 3.1 Modifier la taille et la couleur du texte

```html
<p class="text-xl text-gray-700">Texte en gris foncé et taille XL.</p>
```

**Résultat visuel :**

<div class="flex justify-center p-4">
    <p class="text-xl text-gray-700">Texte en gris foncé et taille XL.</p>
</div>

### 3.2 Ajouter une police personnalisée

```html
<p class="font-serif text-lg text-red-500">Texte en rouge avec une police serif.</p>
```

**Résultat visuel :**

<div class="flex justify-center p-4">
    <p class="font-serif text-lg text-red-500">Texte en rouge avec une police serif.</p>
</div>

---

## 4. Boutons et effets de survol

### 4.1 Bouton stylisé avec Tailwind

```html
<button class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
    Cliquez-moi
</button>
```

**Résultat visuel :**

<div class="flex justify-center p-4">
    <button class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
        Cliquez-moi
    </button>
</div>

### 4.2 Bouton avec une ombre au survol

```html
<button class="px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:shadow-lg">
    Effet d'ombre
</button>
```

**Résultat visuel :**

<div class="flex justify-center p-4">
    <button class="px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:shadow-lg">
        Effet d'ombre
    </button>
</div>

---

## 5. Gestion des cartes et des bordures arrondies

### 5.1 Carte simple

```html
<div class="max-w-sm p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold">Titre de la carte</h2>
    <p class="text-gray-600">Ceci est une carte stylisée avec Tailwind.</p>
</div>
```

**Résultat visuel :**

<div class="flex justify-center p-4">
    <div class="max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold">Titre de la carte</h2>
        <p class="text-gray-600">Ceci est une carte stylisée avec Tailwind.</p>
    </div>
</div>

---

## 6. Formulaires et champs de saisie

### 6.1 Champ de saisie stylisé

```html
<input type="text" placeholder="Entrez votre texte" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
```

**Résultat visuel :**

<div class="flex justify-center p-4">
    <input type="text" placeholder="Entrez votre texte" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
</div>

---

# Exercice : Création d'un site avec Tailwind CSS

## Objectif

Développer une page web complète avec **Tailwind CSS**, comprenant :
- Un **header** flexible avec des boutons interactifs.
- Un **main** contenant une galerie d’images en **flexbox**, avec des images de tailles différentes.
- Un **footer** structuré avec toutes les informations nécessaires.
- Une **personnalisation des couleurs** et des marges bien définies.

---

## Consignes

1. **Header (barre de navigation) :**
   - Utiliser **Flexbox** pour aligner les éléments horizontalement.
   - Ajouter des boutons avec des effets au **hover**.

   Exemple simple de bouton :
   ```html
   <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
       Mon bouton
   </button>
   ```

2. **Main (galerie d’images) :**
   - Utiliser **Flexbox** pour afficher les images en ligne.
   - Les images doivent avoir des tailles différentes tout en restant bien agencées.
   
   Exemple d’image avec bord arrondi et ombre :
   ```html
   <img src="https://via.placeholder.com/150" class="rounded-lg shadow-md">
   ```

3. **Footer :**
   - Doit contenir toutes les **informations nécessaires** (ex. : copyright, contacts, liens).
   - Bien espacé avec des marges adaptées.

4. **Personnalisation des couleurs et marges :**
   - Définir une palette de couleurs cohérente.
   - Utiliser des **marges adaptées** (`m-`, `p-` pour padding et margin).

   Exemple d’élément avec une couleur personnalisée et une bonne marge :
   ```html
   <div class="bg-indigo-600 text-white p-6 m-4 rounded-lg">
       Élément stylisé
   </div>
   ```

---

## Critères d’évaluation

- **Utilisation correcte de Flexbox** pour le header et la galerie.
- **Effets au survol** correctement appliqués aux boutons.
- **Disposition harmonieuse** des images de la galerie.
- **Informations bien structurées** dans le footer.
- **Cohérence des couleurs et bonne utilisation des marges.**

**Bon développement !** 🚀

