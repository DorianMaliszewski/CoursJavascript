---
layout: "layouts/Layout.astro"
title: "Récapitulatif"
---

## HTML (Hypertext Markup Language)

HTML est le langage standard utilisé pour créer et structurer le contenu des pages web.

### Concepts clés :

- Structure de base avec `<!DOCTYPE html>`, `<html>`, `<head>` et `<body>`
- Utilisation de balises telles que `<div>`, `<p>`, `<h1>` à `<h6>`, `<ul>`, `<ol>`, `<li>`, etc.
- Attribution d'attributs comme `class`, `id`, `href`, `src`, etc.
- Création de liens avec la balise `<a>`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="container">
      <h1>Hello, World!</h1>
      <p>This is a paragraph.</p>
      <a href="#">Click here</a> to learn more.
    </div>
  </body>
</html>
```

## CSS (Cascading Style Sheets)

CSS est un langage utilisé pour styliser et mettre en forme le contenu HTML.

### Concepts clés :

- Utilisation de sélecteurs CSS pour cibler et appliquer des styles aux éléments HTML
- Définition de propriétés CSS telles que `color`, `font-size`, `margin`, `padding`, etc.
- Classes et IDs pour cibler spécifiquement des éléments et leur appliquer des styles
- Création de règles de style pour les liens, les conteneurs, etc.

```css
/* Sélectionne tous les paragraphes */
p {
  font-size: 16px;
  color: #333;
}

/* Style pour la classe "container" */
#container {
  width: 80%;
  margin: 0 auto;
}

/* Style pour les liens */
a {
  text-decoration: none;
  color: blue;
}
```

## Flexbox

Flexbox est un modèle de disposition CSS qui permet un agencement flexible des éléments dans un conteneur.

### Concepts clés :

- Utilisation de `display: flex` pour déclarer un conteneur comme conteneur flex
- Définition de la direction principale avec `flex-direction`
- Répartition des éléments le long de l'axe principal avec `justify-content`
- Alignement des éléments le long de l'axe transversal avec `align-items`

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  margin: 10px;
}
```

## Media Queries

Les Media Queries sont des règles CSS qui permettent d'appliquer des styles différents en fonction des caractéristiques du périphérique de visualisation.

### Concepts clés :

- Utilisation de Media Queries pour rendre les sites web réactifs et adaptables
- Application de styles différents en fonction de la taille de l'écran, de l'orientation, etc.
- Utilisation de `@media` pour définir les conditions de la requête
- Réorganisation du contenu, modification des tailles de police, etc. en fonction des besoins

```css
/* Styles de base pour les écrans de petite taille */
body {
  font-size: 14px;
}

/* Media Query pour les écrans plus grands */
@media screen and (min-width: 768px) {
  body {
    font-size: 16px;
  }
}
```

## Animations en CSS

Les animations CSS permettent de créer des effets de transition et de mouvement sur les éléments HTML.

### Concepts clés :

- Utilisation de `@keyframes` pour définir les étapes de l'animation
- Définition de la durée de l'animation avec `animation-duration`
- Contrôle du timing de l'animation avec `animation-timing-function`
- Application d'animations à des éléments spécifiques avec `animation`

```css
/* Animation */
@keyframes example {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Applique l'animation aux éléments avec la classe "fade-in" */
.fade-in {
  animation: example 2s ease-in-out;
}
```

Ce récapitulatif couvre les bases de HTML et CSS ainsi que des concepts avancés tels que Flexbox, Media Queries et les animations en CSS. Ces compétences sont essentielles
