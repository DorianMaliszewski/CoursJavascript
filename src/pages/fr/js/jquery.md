---
layout: "layouts/Layout.astro"
title: "Javascript > jQuery"
---

# jQuery

jQuery est une bibliothèque JavaScript qui simplifie la manipulation du
HTML, du CSS et de l'interface utilisateur. Elle vous permet d'écrire du
code JavaScript plus facilement et de manière plus concise.

## Installation

Pour utiliser jQuery, vous devez inclure la bibliothèque jQuery dans
votre page HTML en ajoutant une balise <code>script</code> avec l'URL de
la bibliothèque :

```js
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## Utilisation

Une fois que la bibliothèque jQuery est incluse, vous pouvez utiliser
les fonctionnalités de jQuery dans votre code JavaScript. Voici comment
sélectionner un élément HTML avec jQuery et changer sa couleur de fond :

```js
$(document).ready(function () {
  $("#mon-element").css("background-color", "red");
});
```

Voici comment utiliser une animation avec jQuery :

```js
$(document).ready(function () {
  $("#mon-element").fadeOut(1000);
});
```

Voici comment gérer les évènements avec jQuery :

```js
$(document).ready(function () {
  $("#mon-bouton").click(function () {
    alert("Bouton cliqué!");
  });
});
```

Il existe de nombreuses autres fonctionnalités de jQuery, comme les
requêtes AJAX, la manipulation du contenu HTML, la validation de
formulaire, etc. Consultez la{" "}
<a href="https://api.jquery.com/" target="_blank">
documentation de jQuery
</a>
&nbsp; pour en savoir plus sur les différentes fonctionnalités de la
bibliothèque.

## Exercice 5

- Faire une “todo-list” avec jQuery:
- Une tâche c’est une date de création, un titre, une description et une date de traitement
- Ma todo liste s’adapte en fonction de la taille de l’écran
- Je peux ajouter des todo, les supprimer et ma liste se met à jour automatiquement
- Lorsque j’actualise la page ma liste est toujours là
