---
layout: 'layouts/Layout.astro'
title: 'Javascript > Events'
---

# Les évènements (event)

Les évènements en JavaScript sont des actions qui sont déclenchées par
l'utilisateur (comme un clic sur un bouton) ou par le navigateur (comme
le chargement d'une page). JavaScript vous permet de définir des
fonctions de gestionnaire d'évènements qui seront exécutées lorsque
l'évènement se produit.

Voici comment définir un gestionnaire d'évènements pour l'évènement <code>click</code> d'un bouton :
```html
<button onclick="maFonction()">Cliquez ici</button>

<script>
function maFonction() {
    alert("Vous avez cliqué sur le bouton!");
}
</script>
```

Voici comment définir un gestionnaire d'évènements en utilisant l'API
des évènements :
```html
<button id="monBouton">Cliquez ici</button>

<script>
let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", maFonction);

function maFonction() {
    alert("Vous avez cliqué sur le bouton!");
}
</script>
```

Voici comment désactiver le comportement par défaut d'un évènement :
```js
monBouton.addEventListener("click", function(e) {
    e.preventDefault(); // empêche le comportement par défaut de l'évènement (par exemple, le rechargement de la page lors de la soumission d'un formulaire)
});
```
Voici comment accéder aux détails de l'évènement dans le gestionnaire
d'évènements :
```js
monBouton.addEventListener("click", function(e) {
    console.log(e.target); // affiche l'élément qui a déclenché l'évènement
    console.log(e.type); // affiche le type de l'évènement (par exemple, "click")
    console.log(e.clientX); // affiche la position X de la souris par rapport à la fenêtre du navigateur
    console.log(e.clientY); // affiche la position Y de la souris par rapport à la fenêtre du navigateur
});
```

Voici comment définir un gestionnaire d'évènements sur tous les éléments
d'un même type (par exemple, tous les boutons) :
```js
document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") { // vérifie si l'élément qui a déclenché l'évènement est un bouton
        console.log("Vous avez cliqué sur un bouton!");
    }
});
```

Voici une liste de quelques évènements courants en JavaScript :

- <code>click</code> : déclenché lorsque l'utilisateur clique sur un
élément
- <code>submit</code> : déclenché lorsque l'utilisateur soumet un
formulaire
- <code>focus</code> : déclenché lorsque l'utilisateur place le curseur
dans un élément
- <code>blur</code> : déclenché lorsque l'utilisateur retire le curseur
d'un élément
- <code>change</code> : déclenché lorsque l'utilisateur modifie la
valeur d'un élément
- <code>mouseover</code> : déclenché lorsque l'utilisateur place le
curseur sur un élément
- <code>mouseout</code> : déclenché lorsque l'utilisateur retire le
curseur d'un élément
- <code>keydown</code> : déclenché lorsque l'utilisateur appuie sur une
touche du clavier
- <code>keyup</code> : déclenché lorsque l'utilisateur relâche une
touche du clavier
- <code>load</code> : déclenché lorsque la page est chargée
- <code>unload</code> : déclenché lorsque l'utilisateur quitte la page
