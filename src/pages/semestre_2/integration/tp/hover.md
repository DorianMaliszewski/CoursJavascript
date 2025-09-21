---
layout: "layouts/Layout.astro"
title: "Responsive Design et Media Queries en HTML/CSS"
---

# Introduction aux Media Queries

Les **Media Queries** sont des outils fondamentaux en CSS pour adapter le design d'un site à différents types d’écrans : smartphones, tablettes, ordinateurs...  
Elles permettent de rendre un site **responsive**, c’est-à-dire qu'il s'ajuste automatiquement selon la taille et l’orientation de l’écran.

Grâce aux Media Queries, vous pouvez modifier des couleurs, des tailles, des positions, ou encore masquer/afficher des éléments selon la largeur ou la hauteur de l’écran.

La syntaxe de base :
```css
@media (condition) {
  /* Styles CSS spécifiques */
}
```

Exemples de conditions :
- `(max-width: 600px)` : pour les écrans de 600px de large ou moins (souvent les téléphones).
- `(min-width: 901px)` : pour les écrans de 901px et plus (ordinateurs).
- `(orientation: portrait)` : pour détecter un appareil tenu en mode portrait.
- `(orientation: landscape)` : pour détecter le mode paysage.

---

## 1. Changer le style selon la taille de l’écran

Nous allons commencer par un exemple simple où la couleur de fond change selon la largeur de l’écran.

```css
/* Styles par défaut */
body {
  background-color: lightblue;
}

/* Pour les écrans de moins de 600px */
@media (max-width: 600px) {
  body {
    background-color: lightcoral;
  }
}
```

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: lightblue;
    }
    @media (max-width: 600px) {
      body {
        background-color: lightcoral;
      }
    }
  </style>
</head>
<body>
  <h1>Redimensionnez la fenêtre pour voir le fond changer</h1>
</body>
</html>
```

---

## 2. Exercice 1 – Les couleurs d'écran 📱💻🖥️

### Objectif :
Afficher plusieurs `<div>` qui changent de couleur selon la taille de l’écran et l’orientation.

```html
<div class="portrait">Portrait</div>
<div class="paysage">Paysage</div>
<div class="large">Large Screen</div>
<div class="medium">Medium Screen</div>
<div class="small">Small Screen</div>
```

```css
div {
  padding: 20px;
  margin: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
}

/* Petite taille */
@media (max-width: 600px) {
  .small { background-color: crimson; }
}

/* Moyenne taille */
@media (min-width: 601px) and (max-width: 900px) {
  .medium { background-color: orange; }
}

/* Grande taille */
@media (min-width: 901px) {
  .large { background-color: green; }
}

/* Orientation portrait */
@media (orientation: portrait) {
  .portrait { background-color: purple; }
}

/* Orientation paysage */
@media (orientation: landscape) {
  .paysage { background-color: steelblue; }
}
```

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    div {
      padding: 20px;
      margin: 10px;
      color: white;
      font-weight: bold;
      text-align: center;
    }
    @media (max-width: 600px) {
      .small { background-color: crimson; }
    }
    @media (min-width: 601px) and (max-width: 900px) {
      .medium { background-color: orange; }
    }
    @media (min-width: 901px) {
      .large { background-color: green; }
    }
    @media (orientation: portrait) {
      .portrait { background-color: purple; }
    }
    @media (orientation: landscape) {
      .paysage { background-color: steelblue; }
    }
  </style>
</head>
<body>
  <div class="portrait">Portrait</div>
  <div class="paysage">Paysage</div>
  <div class="large">Large Screen</div>
  <div class="medium">Medium Screen</div>
  <div class="small">Small Screen</div>
</body>
</html>
```

---

## 3. Exercice 2 – Changer dynamiquement le texte ✍️

```html
<p class="responsive-text">Bienvenue sur mon site !</p>
```

```css
.responsive-text::after {
  content: " Version Ordinateur.";
}

@media (max-width: 900px) {
  .responsive-text::after {
    content: " Version Tablette.";
  }
}

@media (max-width: 600px) {
  .responsive-text::after {
    content: " Version Mobile.";
  }
}
```

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .responsive-text::after {
      content: " Version Ordinateur.";
    }
    @media (max-width: 900px) {
      .responsive-text::after {
        content: " Version Tablette.";
      }
    }
    @media (max-width: 600px) {
      .responsive-text::after {
        content: " Version Mobile.";
      }
    }
  </style>
</head>
<body>
  <p class="responsive-text">Bienvenue sur mon site !</p>
</body>
</html>
```

---

## 4. Exercice 3 – Masquer et afficher selon l’écran 🕵️‍♂️

```html
<div class="desktop-only">Visible uniquement sur ordinateur</div>
<div class="mobile-only">Visible uniquement sur mobile</div>
```

```css
.desktop-only, .mobile-only {
  display: none;
}

@media (min-width: 901px) {
  .desktop-only {
    display: block;
    background-color: darkblue;
    color: white;
    padding: 20px;
  }
}

@media (max-width: 600px) {
  .mobile-only {
    display: block;
    background-color: darkred;
    color: white;
    padding: 20px;
  }
}
```

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .desktop-only, .mobile-only {
      display: none;
    }
    @media (min-width: 901px) {
      .desktop-only {
        display: block;
        background-color: darkblue;
        color: white;
        padding: 20px;
      }
    }
    @media (max-width: 600px) {
      .mobile-only {
        display: block;
        background-color: darkred;
        color: white;
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="desktop-only">Visible uniquement sur ordinateur</div>
  <div class="mobile-only">Visible uniquement sur mobile</div>
</body>
</html>
```

---

## 5. Exercice Final Noté : Site Responsive avec Menu et Cartes (💯)

### Objectif :
Créer un site responsive complet comprenant :
- Un **menu horizontal** sur PC et vertical ou burger sur mobile (< 600px).
- Un **main** avec minimum 6 cartes :
  - **3 cartes par ligne** (> 900px).
  - **1 carte par ligne** (< 600px).
- Un **footer** simple avec copyright.

