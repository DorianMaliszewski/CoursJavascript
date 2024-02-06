---
layout: "layouts/Layout.astro"
title: "Javascript > Advanced Exercises"
---

# Exercices

## Todo List

Dans cet exercice vous avez besoin d'utiliser le localStorage, et la données du formulaire.

Une tâche se compose d'une date de création, un titre, une description et une date de traitement:

```js
{
    dateDeCreation: Date,
    titre: string,
    description: string,
    dateDeTraitement: Date
}
```

- Créez une page HTML avec 2 champs textes dans un formulaire
  - Titre
  - Description
- Ajoutez un bouton pour soumettre le formulaire et un pour le reinitialiser
- Lorsque je complète le formulaire et je le soumet, ma liste se met à jour automatiquement avec le nouveau todo.
- Lorsque j'ajoute un todo mon formulaire se remet à zéro
- Sur chaque todo afficher ajoutez un bouton permettant de marquer le todo comme fait. Quand je clique dessus la date de traitement du todo est renseignée.
- Lorsque j’actualise la page ma liste est toujours là (utilisation du localStorage)

## Récupérer des données et les afficher

- Créez une page HTML avec un bouton : "Charger les données"
- Quand je clique sur le bouton. faire une requête fetch sur cette url avec la méthode `GET` et `Content-Type: application/json` : https://jsonplaceholder.typicode.com/todos/
- Afficher les données avec tous les champs dans une liste
- Maintenant je veux que ca soit fait automatiquement dès le chargement de la page.
- Maintenant je veux avoir une pagination de 10 dans ma liste.
  - Par défaut je suis sur la page 1, mes données sont toute chargées mais j'affiche uniquement les éléments de 0 à 9 (10 éléments)
  - Il y a un bouton page suivante qui me permet de voir la prochaine page. Si je suis sur la dernière page le bouton est désactivé
  - Il y a un bouton page précédente qui me permet de retoruner à la page précedente. Si je suis sur la page 1 le bouton est désactivé
