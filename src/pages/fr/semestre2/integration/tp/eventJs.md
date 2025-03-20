---
layout: "layouts/Layout.astro"
title: "Les Événements en JavaScript"
---

# Introduction aux Événements en JavaScript

Les **événements** en JavaScript permettent de réagir à des actions de l'utilisateur, comme un clic, une saisie au clavier, ou un survol d'élément. Comprendre et manipuler ces événements est essentiel pour créer des pages web interactives.

---

## 1. Les Types d'Événements

Voici quelques événements courants en JavaScript :

- **click** : Lorsqu'un utilisateur clique sur un élément (par exemple, un bouton).
- **mouseover** : Lorsqu'un utilisateur survole un élément.
- **keydown** : Lorsqu'une touche du clavier est enfoncée.
- **submit** : Lorsqu'un formulaire est soumis.

---

## 2. Ajouter un Événement avec `addEventListener()`

La méthode `addEventListener()` est utilisée pour lier un événement à un élément. Elle prend deux arguments principaux :
1. Le type d'événement (par exemple, `click`).
2. La fonction qui sera exécutée lorsque l'événement se produit.

### Exemple de Clic

```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Événements JavaScript</title>
</head>
<body>
  <button id="btn">Cliquez-moi</button>

  <script>
    document.getElementById('btn').addEventListener('click', function() {
      alert('Bouton cliqué!');
    });
  </script>
</body>
</html>
```

**Explication :**
- Lorsqu'on clique sur le bouton, une alerte s'affiche.

---

## 3. Autres Types d'Événements

### Exemple de `mouseover` et `mouseout`

```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Événements Mouse</title>
  <style>
    .hover-box {
      width: 200px;
      height: 200px;
      background-color: #ddd;
    }
  </style>
</head>
<body>
  <div class="hover-box" id="box"></div>

  <script>
    const box = document.getElementById('box');

    box.addEventListener('mouseover', function() {
      box.style.backgroundColor = 'lightgreen';
    });

    box.addEventListener('mouseout', function() {
      box.style.backgroundColor = '#ddd';
    });
  </script>
</body>
</html>
```

**Explication :**
- Le fond de la boîte devient vert lorsqu'on survole l'élément et redevient gris lorsqu'on en sort.

---

## 4. Exercices Interactifs

### Exercice 1 : Ajouter un événement de clic sur un bouton

#### Objectif :
Lorsque l'utilisateur clique sur un bouton, affichez un message dans la console.

```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercice Clic</title>
</head>
<body>
  <button id="clickBtn">Cliquez-moi</button>

  <script>
    document.getElementById('clickBtn').addEventListener('click', function() {
      console.log('Vous avez cliqué sur le bouton!');
    });
  </script>
</body>
</html>
```

### Exercice 2 : Modifier le texte d'un paragraphe au survol

#### Objectif :
Lorsque l'utilisateur survole un élément, le texte de cet élément doit changer.

```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercice Mouseover</title>
</head>
<body>
  <p id="hoverText">Survolez-moi pour changer le texte</p>

  <script>
    document.getElementById('hoverText').addEventListener('mouseover', function() {
      this.textContent = 'Vous m'avez survolé!';
    });

    document.getElementById('hoverText').addEventListener('mouseout', function() {
      this.textContent = 'Survolez-moi pour changer le texte';
    });
  </script>
</body>
</html>
```

---

## 5. Exercice Final : Créer une Application de Cartes Simple

### Objectif du Projet

Créer une page web simple qui simule une application de type Trello. L'utilisateur pourra ajouter des cartes dans une colonne en cliquant sur un bouton.

#### Étapes :
1. **HTML** : Créez une structure avec un conteneur pour les cartes et un bouton pour ajouter des cartes.
2. **CSS** : Utilisez Flexbox pour organiser les cartes.
3. **JavaScript** : Ajoutez la logique pour ajouter de nouvelles cartes lorsque l'utilisateur clique sur le bouton.

#### Code Exemple :

```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application de Cartes</title>
  <style>
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .card {
      width: 150px;
      height: 200px;
      background-color: lightblue;
      border: 1px solid #ccc;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card button {
      background-color: lightcoral;
      border: none;
      padding: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Ajouter une Carte</h1>
  <button id="addCardBtn">Ajouter une carte</button>

  <div class="card-container" id="cardContainer"></div>

  <script>
    document.getElementById('addCardBtn').addEventListener('click', function() {
      const cardContainer = document.getElementById('cardContainer');
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <p>Nouvelle carte</p>
        <button>Supprimer</button>
      `;

      const deleteButton = card.querySelector('button');
      deleteButton.addEventListener('click', function() {
        cardContainer.removeChild(card);
      });

      cardContainer.appendChild(card);
    });
  </script>
</body>
</html>
```

---

### Consignes pour l'Exercice Final :

- **Ajoutez des cartes** en cliquant sur le bouton "Ajouter une carte".
- **Supprimez les cartes** en cliquant sur le bouton "Supprimer" de chaque carte.
- **Utilisez Flexbox** pour l'agencement des cartes.
- Améliorez l'interface avec du CSS si nécessaire.

**Critères d'évaluation :**
- Ajout et suppression de cartes fonctionnels.
- Utilisation correcte des événements en JavaScript.
- Disposition des cartes avec Flexbox.
- Code bien structuré et lisible.

**Bonne chance et amusez-vous bien ! 🚀**

