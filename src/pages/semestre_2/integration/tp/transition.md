---
layout: "layouts/Layout.astro"
title: "Animations et Transitions en HTML/CSS"
---

# Introduction aux Animations et Transitions en HTML/CSS

Les animations et transitions en CSS permettent d'ajouter du dynamisme à vos pages web. Tandis que les **transitions** gèrent les changements progressifs entre deux états d’un élément (souvent au survol), les **animations** vous offrent la possibilité de définir des séquences d’étapes via des règles @keyframes.

---

## 1. Transitions CSS

Les transitions permettent de modifier en douceur les propriétés CSS lorsqu'un élément change d'état (ex. : au survol). Vous pouvez ainsi animer la couleur, la taille, la position, et bien d’autres propriétés.

### Exemple de transition sur un bouton

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transition CSS</title>
  <style>
    .bouton {
      padding: 10px 20px;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .bouton:hover {
      background-color: #2980b9;
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <button class="bouton">Survolez-moi</button>
</body>
</html>
```

**Résultat visuel :**

<div style="text-align:center; margin:20px;">
  <button style="padding:10px 20px; background-color:#3498db; color:#fff; border:none; border-radius:5px; transition: background-color 0.3s ease, transform 0.3s ease;"
          onmouseover="this.style.backgroundColor='#2980b9'; this.style.transform='scale(1.1)';"
          onmouseout="this.style.backgroundColor='#3498db'; this.style.transform='scale(1)';">
    Survolez-moi
  </button>
</div>

---

## 2. Animations CSS

Les animations en CSS vous permettent de définir des séquences d'étapes grâce aux règles **@keyframes**. Elles s'exécutent de manière continue ou sur demande et peuvent animer plusieurs propriétés.

### Exemple d'animation simple

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animation CSS</title>
  <style>
    .animation {
      width: 100px;
      height: 100px;
      background-color: #e74c3c;
      position: relative;
      animation: mouvement 2s infinite;
    }
    @keyframes mouvement {
      0%   { left: 0; }
      50%  { left: 200px; }
      100% { left: 0; }
    }
  </style>
</head>
<body>
  <div class="animation"></div>
</body>
</html>
```

**Résultat visuel :**

<div style="position:relative; height:120px; margin:20px;">
  <div style="width:100px; height:100px; background-color:#e74c3c; position:relative; animation:mouvement 2s infinite;"></div>
  <style>
    @keyframes mouvement {
      0%   { left: 0; }
      50%  { left: 200px; }
      100% { left: 0; }
    }
  </style>
</div>

---

## 3. Combinaison Transitions et Animations

Il est possible de combiner transitions et animations pour obtenir des effets encore plus sophistiqués. Dans l'exemple suivant, un élément animé effectue une rotation continue, et sa taille augmente en douceur lorsqu'on le survole.

### Exemple combiné

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transitions & Animations</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: #9b59b6;
      transition: transform 0.5s;
      animation: rotate 4s linear infinite;
    }
    .box:hover {
      transform: scale(1.2);
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

**Résultat visuel :**

<div style="text-align:center; margin:20px;">
  <div class="box" style="width:100px; height:100px; background-color:#9b59b6; transition: transform 0.5s; animation: rotate 4s linear infinite;"></div>
  <style>
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    .box:hover {
      transform: scale(1.2);
    }
  </style>
</div>

---

## 4. Exercice de Base : Créez votre propre animation et transition

### Objectif

Développer une page web complète incluant :
- Un **élément animé** qui se déplace et change de couleur.
- Une **transition** qui modifie sa taille ou son opacité au survol.
- L'utilisation d'une animation définie via **@keyframes** pour contrôler le mouvement ou l'apparence de l'élément.

### Consignes

1. **Structure HTML :**
   - Créez une page HTML avec une div ayant la classe `animElement`.
2. **Style CSS :**
   - Dans une balise `<style>` dans le `<head>`, définissez une animation via **@keyframes** qui fait déplacer l'élément horizontalement et lui fait changer de couleur.
   - Appliquez une transition pour modifier une propriété (ex. : la taille ou l'opacité) lorsque l'utilisateur survole l'élément.
3. **Exemple de code de base :**
```html
<div class="animElement">Je suis animé !</div>
<style>
  .animElement {
    width: 150px;
    height: 150px;
    background-color: #f39c12;
    line-height: 150px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin: 20px auto;
    position: relative;
    transition: transform 0.4s, opacity 0.4s;
    animation: deplacement 3s ease-in-out infinite;
  }
  .animElement:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
  @keyframes deplacement {
    0%   { left: 0; background-color: #f39c12; }
    50%  { left: 200px; background-color: #d35400; }
    100% { left: 0; background-color: #f39c12; }
  }
</style>
```
4. **Test et ajustements :**
   - Vérifiez que l’animation est fluide.
   - Assurez-vous que la transition au survol se déclenche correctement.
   - Expérimentez avec différentes durées et courbes d’animation pour obtenir l’effet désiré.

### Critères d’évaluation

- **Fluidité et réactivité** de l’animation et de la transition.
- **Qualité du code** et respect des consignes.
- **Créativité** dans la combinaison des effets et le choix des couleurs.
- **Structure HTML/CSS** claire et bien organisée.

---

## 5. Animations Avancées et Transitions Complexes

Dans cette section, nous allons explorer des animations plus complexes et des transitions avancées qui intègrent plusieurs propriétés et effets simultanés. Vous découvrirez comment :

- Utiliser des **keyframes** avec plusieurs étapes (0%, 25%, 50%, 75%, 100%).
- Combiner des transformations telles que **translate**, **rotate**, **scale** et **skew**.
- Appliquer des effets de **perspective** et de **3D** pour enrichir vos animations.
- Créer des transitions sur plusieurs propriétés simultanément (position, opacité, couleur, etc.).

### Exemple d'animation avancée

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animation Avancée</title>
  <style>
    .avancé {
      width: 120px;
      height: 120px;
      background-color: #27ae60;
      margin: 50px auto;
      position: relative;
      transform-style: preserve-3d;
      animation: complexe 5s ease-in-out infinite;
      transition: transform 0.5s, opacity 0.5s;
    }
    .avancé:hover {
      transform: scale(1.2) rotateY(20deg);
      opacity: 0.7;
    }
    @keyframes complexe {
      0% {
        transform: translateX(0) rotate(0deg) scale(1);
        background-color: #27ae60;
      }
      25% {
        transform: translateX(100px) rotate(45deg) scale(1.1);
        background-color: #2ecc71;
      }
      50% {
        transform: translateX(0) rotate(90deg) scale(1);
        background-color: #27ae60;
      }
      75% {
        transform: translateX(-100px) rotate(45deg) scale(0.9);
        background-color: #1abc9c;
      }
      100% {
        transform: translateX(0) rotate(0deg) scale(1);
        background-color: #27ae60;
      }
    }
  </style>
</head>
<body>
  <div class="avancé">Animation Avancée</div>
</body>
</html>
```

**Résultat visuel :**

<div style="text-align:center; margin:20px;">
  <div class="avancé" style="width:120px; height:120px; background-color:#27ae60; margin:50px auto; position:relative; transform-style: preserve-3d; animation: complexe 5s ease-in-out infinite; transition: transform 0.5s, opacity 0.5s;">
    Animation Avancée
  </div>
  <style>
    @keyframes complexe {
      0% {
        transform: translateX(0) rotate(0deg) scale(1);
        background-color: #27ae60;
      }
      25% {
        transform: translateX(100px) rotate(45deg) scale(1.1);
        background-color: #2ecc71;
      }
      50% {
        transform: translateX(0) rotate(90deg) scale(1);
        background-color: #27ae60;
      }
      75% {
        transform: translateX(-100px) rotate(45deg) scale(0.9);
        background-color: #1abc9c;
      }
      100% {
        transform: translateX(0) rotate(0deg) scale(1);
        background-color: #27ae60;
      }
    }
    .avancé:hover {
      transform: scale(1.2) rotateY(20deg);
      opacity: 0.7;
    }
  </style>
</div>

---

## 6. Grand Exercice : Projet Final d'Animations et Transitions

### Objectif du Projet

Créez une page web interactive qui intègre **toutes les techniques** abordées dans ce TP :

- **Transitions CSS** pour des effets au survol sur différents éléments (boutons, images, liens, etc.).
- **Animations CSS** basées sur des **@keyframes** pour des effets continus (ex: animations de chargement, bannières animées, éléments en mouvement).
- **Animations Avancées** combinant plusieurs transformations (translate, rotate, scale, skew) et des effets 3D.
- **Transitions multiples** appliquées sur diverses propriétés simultanément (position, opacité, couleur, etc.).

### Consignes du Projet

1. **Structure HTML :**
   - Créez une page web complète avec un header, un main et un footer.
   - Le header doit inclure une barre de navigation avec des boutons animés au survol.
   - Le main doit contenir une galerie d'images ou d'éléments interactifs animés.
   - Le footer doit inclure des informations de contact et des liens animés.

2. **Effets Animés et Transitions :**
   - Utilisez des **transitions CSS** sur les boutons et les liens pour modifier leur apparence au survol.
   - Appliquez des **animations CSS** pour créer des effets continus sur certains éléments (par exemple, une bannière animée ou des icônes dynamiques).
   - Intégrez une animation avancée sur un élément central (par exemple, un logo ou une image) qui combine plusieurs transformations et change de couleur.

3. **Style et Esthétique :**
   - Définissez une palette de couleurs cohérente et moderne.
   - Utilisez des marges et des paddings adaptés pour un design harmonieux.
   - Expérimentez avec des effets de transparence et des dégradés pour enrichir le visuel.

4. **Interactivité :**
   - Ajoutez des effets au survol sur les éléments interactifs pour améliorer l'expérience utilisateur.
   - Veillez à ce que toutes les animations soient fluides et que les transitions soient réactives.
   - Assurez-vous que la page est responsive et fonctionne bien sur différents appareils.


### Barème de Notation

- **Fluidité et Réactivité (3 points) :**
  - Les animations et transitions doivent être fluides, sans saccades.
  - Les effets au survol doivent être réactifs et apporter une réelle amélioration visuelle.

- **Complexité et Originalité des Animations (2points) :**
  - Utilisation de techniques avancées (keyframes multiples, effets 3D, combinaisons de transformations).
  - Originalité et créativité dans la conception des animations.

- **Esthétique et Cohérence Visuelle (2 points) :**
  - Palette de couleurs harmonieuse et design moderne.
  - Mise en page équilibrée et agréable à l'œil.

- **Interactivité et Expérience Utilisateur (3 points) :**
  - Effets interactifs bien implémentés, améliorant l'expérience utilisateur.
  - Adaptation responsive pour une bonne visualisation sur tous les appareils.

**Total : 10 points**

**Bon courage et amusez-vous bien avec vos animations !** 🚀
