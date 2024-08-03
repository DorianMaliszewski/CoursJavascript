---
layout: "layouts/Layout.astro"
title: "Introduction au CSS"
---

# Introduction au CSS

## Qu'est-ce que le CSS ?

CSS (Cascading Style Sheets) est un langage utilisé pour décrire la présentation d'un document HTML. Tandis que HTML s'occupe de la structure du contenu, CSS gère l'apparence visuelle. Le CSS permet de contrôler la mise en page, les couleurs, les polices, et bien plus encore, afin de rendre les pages web attrayantes et faciles à utiliser.

## Structure de base d'un fichier CSS

Un fichier CSS est constitué de règles. Chaque règle se compose d'un sélecteur et d'un bloc de déclaration :

```css
sélecteur {
  propriété: valeur;
}
```

Exemple :

```css
body {
  background-color: lightblue;
}
```

Cette règle CSS définit la couleur de fond du corps de la page en bleu clair.

## Ajouter du CSS à un document HTML

Il existe plusieurs façons d'ajouter du CSS à un document HTML :

1. **CSS en ligne** : Utilisation de l'attribut `style` directement dans les balises HTML.
2. **CSS interne** : Utilisation de la balise `<style>` dans la section `<head>` du document HTML.
3. **CSS externe** : Lien vers un fichier CSS externe à l'aide de la balise `<link>`.

### Exemple de CSS en ligne

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple CSS en ligne</title>
</head>
<body>
  <h1 style="color:blue;">Titre bleu</h1>
  <p style="font-size:20px;">Paragraphe avec une taille de police de 20px.</p>
</body>
</html>
```
<div style="margin:auto;">
<h1 style="color:blue;">Titre bleu</h1>
<p style="font-size:20px;">Paragraphe avec une taille de police de 20px.</p>
</div>

### Exemple de CSS interne

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple CSS interne</title>
  <style>
    h1 {
      color: blue;
    }
    p {
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h1>Titre bleu</h1>
  <p>Paragraphe avec une taille de police de 20px.</p>
</body>
</html>
```
<div style="margin:auto;">
<h1 style="color:blue;">Titre bleu</h1>
<p style="font-size:20px;">Paragraphe avec une taille de police de 20px.</p>
</div>

### Exemple de CSS externe

Créez un fichier `styles.css` :

```css
h1 {
  color: blue;
}
p {
  font-size: 20px;
}
```

Puis, liez ce fichier dans votre document HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple CSS externe</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Titre bleu</h1>
  <p>Paragraphe avec une taille de police de 20px.</p>
</body>
</html>
```
<div style="margin:auto;">
<h1 style="color:blue;">Titre bleu</h1>
<p style="font-size:20px;">Paragraphe avec une taille de police de 20px.</p>
</div>

## Propriétés CSS essentielles

### Couleur et Arrière-plan

```css
/* Couleur du texte */
p {
  color: red;
}

/* Couleur de fond */
body {
  background-color: yellow;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Couleur et Arrière-plan</title>
  <style>
    p {
      color: red;
    }
    body {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <p>Paragraphe en rouge sur fond jaune.</p>
</body>
</html>
```
<div style="margin:auto;">
<p style="color:red;">Paragraphe en rouge sur fond jaune.</p>
</div>

### Bordures

```css
div {
  border: 2px solid black;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Bordures</title>
  <style>
    div {
      border: 2px solid black;
    }
  </style>
</head>
<body>
  <div>Contenu avec une bordure noire.</div>
</body>
</html>
```
<div style="margin:auto;">
<div style="border: 2px solid black;">Contenu avec une bordure noire.</div>
</div>

### Marges et Padding

```css
div {
  margin: 20px; /* Espace à l'extérieur de l'élément */
  padding: 20px; /* Espace à l'intérieur de l'élément */
  background-color: lightgrey;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Marges et Padding</title>
  <style>
    div {
      margin: 20px;
      padding: 20px;
      background-color: lightgrey;
    }
  </style>
</head>
<body>
  <div>Contenu avec marges et padding.</div>
</body>
</html>
```
<div style="margin:auto;">
<div style="margin: 20px; padding: 20px; background-color: lightgrey;">Contenu avec marges et padding.</div>
</div>

## Display: Bloc, Inline, et Inline-block

### Display Bloc

Les éléments de type bloc prennent toute la largeur disponible et commencent toujours sur une nouvelle ligne.

```css
div {
  display: block;
  background-color: red;
  width: 100px;
  height: 100px;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Display Bloc</title>
  <style>
    div {
      display: block;
      background-color: red;
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <div></div>
  <div></div>
</body>
</html>
```
<div style="margin:auto;">
<div style="display: block; background-color: red; width: 100px; height: 100px;"></div>
<div style="display: block; background-color: red; width: 100px; height: 100px;"></div>
</div>

### Display Inline

Les éléments en ligne ne prennent que la largeur nécessaire et ne commencent pas sur une nouvelle ligne.

```css
span {
  display: inline;
  background-color: blue;
  padding: 10px;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Display Inline</title>
  <style>
    span {
      display: inline;
      background-color: blue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <span>Élément en ligne</span>
  <span>Élément en ligne</span>
</body>
</html>
```
<div style="margin:auto;">
<span style="display: inline; background-color: blue; padding: 10px;">Élément en ligne</span>
<span style="display: inline; background-color: blue; padding: 10px;">Élément en ligne</span>
</div>

### Display Inline-Block

Les éléments en ligne-bloc sont similaires aux éléments en ligne, mais vous pouvez leur appliquer des dimensions.

```css
span {
  display: inline-block;
  background-color: green;
  width: 100px;
  height: 100px;
  margin: 5px;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Display Inline-Block</title>
  <style>
    span {
      display: inline-block;
      background-color: green;
      width: 100px;
      height: 100px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <span></span>
  <span></span>
</body>
</html>
```
<div style="margin:auto;">
<span style="display: inline-block; background-color: green; width: 100px; height: 100px; margin: 5px;"></span>
<span style="display: inline-block; background-color: green; width: 100px; height: 100px; margin: 5px;"></span>
</div>

## Flexbox

Flexbox est un modèle de mise en page qui permet de créer des mises en page complexes et flexibles.

### Conteneur Flex

```css
.container {
  display: flex;
  flex-direction: row; /* row, row-reverse, column, column-reverse */
  justify-content: center; /* flex-start, flex-end, center, space-between, space-around */
  align-items: center; /* flex-start, flex-end, center, stretch */
  height: 100vh;
}
.item {
  background-color: lightcoral;
  padding: 20px;
  margin: 10px;
  color: white;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Flexbox</title>
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      border: 2px solid black;
    }
    .item {
      background-color: lightcoral;
      padding: 20px;
      margin: 10px;
      color: white;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```
<div style="margin:auto;">
<div style="display: flex; justify-content: center; align-items: center; height: 100vh; border: 2px solid black;">
  <div style="background-color: lightcoral; padding: 20px; margin: 10px; color: white;">Item 1</div>
  <div style="background-color: lightcoral; padding: 20px; margin: 10px; color: white;">Item 2</div>
  <div style="background-color: lightcoral; padding: 20px; margin: 10px; color: white;">Item 3</div>
</div>
</div>

## Grid Layout

Grid Layout est un système de mise en page basé sur une grille à deux dimensions.

### Conteneur Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes de taille égale */
  grid-gap: 10px; /* espace entre les éléments */
}
.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
```

Exemple HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple Grid Layout</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }
    .item {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>
```
<div style="margin:auto;">
<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px;">
  <div style="background-color: lightblue; padding: 20px; text-align: center;">Item 1</div>
  <div style="background-color: lightblue; padding: 20px; text-align: center;">Item 2</div>
  <div style="background-color: lightblue; padding: 20px; text-align: center;">Item 3</div>
  <div style="background-color: lightblue; padding: 20px; text-align: center;">Item 4</div>
  <div style="background-color: lightblue; padding: 20px; text-align: center;">Item 5</div>
  <div style="background-color: lightblue; padding: 20px; text-align: center;">Item 6</div>
</div>
</div>

## Conclusion

Dans ce cours, nous avons couvert les bases du CSS, y compris la structure des fichiers CSS, comment intégrer CSS dans un document HTML, et certaines des propriétés CSS les plus courantes. Nous avons également exploré les concepts avancés de mise en page avec Flexbox et Grid Layout. En pratiquant ces concepts, vous serez capable de créer des mises en page web élégantes et efficaces.

---
