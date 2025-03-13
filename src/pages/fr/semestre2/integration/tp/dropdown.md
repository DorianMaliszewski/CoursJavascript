---
layout: "layouts/Layout.astro"
title: "Menus Dropdown en CSS et JavaScript"
---

# Introduction aux Menus Dropdown en CSS et JavaScript

Les **menus dropdown** sont des éléments interactifs permettant d'afficher une liste déroulante lorsque l'utilisateur interagit avec un bouton ou un élément de navigation. Nous allons d'abord voir comment créer un menu dropdown en **CSS pur**, puis nous ajouterons de l'interactivité avec **JavaScript**.

---

## 1. Menu Dropdown en CSS Pur

Avec **CSS pur**, nous pouvons afficher et masquer un menu déroulant en utilisant uniquement les **pseudo-classes** comme `:hover`.

### Exemple de Dropdown en CSS

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dropdown en CSS</title>
  <style>
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
      padding: 10px;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
  </style>
</head>
<body>
  <div class="dropdown">
    <button>Menu</button>
    <div class="dropdown-content">
      <a href="#">Lien 1</a><br>
      <a href="#">Lien 2</a><br>
      <a href="#">Lien 3</a>
    </div>
  </div>
</body>
</html>
```

**Explication :**
- `.dropdown-content` est caché par défaut (`display: none;`).
- Lorsqu'on **survole** `.dropdown`, on affiche `.dropdown-content`.

---

## 2. Menu Dropdown en JavaScript

Le CSS a ses limites : ici, le menu s'affiche uniquement au survol. En JavaScript, nous pouvons contrôler son ouverture et fermeture **au clic**.

### Bases de JavaScript

Avant d'aller plus loin, voici quelques bases essentielles :
- **Sélection d'un élément** : `document.querySelector('.classe')`
- **Ajout d'un événement** : `element.addEventListener('click', function() {})`
- **Basculer une classe** : `element.classList.toggle('classe')`

### Exemple de Dropdown en JavaScript

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dropdown en JS</title>
  <style>
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
      padding: 10px;
    }
    .show {
      display: block;
    }
  </style>
</head>
<body>
  <div class="dropdown">
    <button id="dropdownBtn">Menu</button>
    <div class="dropdown-content" id="dropdownMenu">
      <a href="#">Lien 1</a><br>
      <a href="#">Lien 2</a><br>
      <a href="#">Lien 3</a>
    </div>
  </div>
  
  <script>
    document.getElementById("dropdownBtn").addEventListener("click", function() {
      document.getElementById("dropdownMenu").classList.toggle("show");
    });
  </script>
</body>
</html>
```

**Explication :**
- Au clic sur le bouton, on **bascule** (`toggle`) l'affichage du menu avec la classe `.show`.
- Plus besoin de survoler, on contrôle l'affichage avec un clic !

---

## 3. Exercice Final : Site Web avec Menu Hamburger et Cartes en Flexbox

### Objectif du Projet
Créer une page web **responsive** qui contient :
1. Un **menu de navigation** avec une version **desktop** et une version **mobile**.
2. Un **menu hamburger** en JavaScript qui s'affiche sur mobile.
3. Une **section de cartes** qui s'affiche en **3 par ligne** sur desktop et **1 par ligne** sur mobile.

### Consignes
- Utiliser les **media queries** pour gérer l'affichage du menu et des cartes.
- Le menu hamburger doit être fonctionnel avec JavaScript.
- Utiliser **Flexbox** pour la disposition des cartes.

**Critères d'évaluation :**
- Bonne **utilisation des media queries**.
- Menu hamburger fonctionnel en **JavaScript**.
- **Disposition des cartes** correcte en flexbox.
- Code clair et bien structuré.

**Bon courage ! 🚀**
