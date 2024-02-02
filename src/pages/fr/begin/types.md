---
layout: 'layouts/Layout.astro'
title: 'Javascript > Types'
---

# Les types de variables

## Type de valeur primitif
En JavaScript, il existe sept types de valeurs primitives :

- <code>number</code> pour les nombres (entiers ou flottants)
- <code>string</code> pour les chaînes de caractères
- <code>boolean</code> pour les booléens (`true` ou `false`)
- <code>null</code> pour une valeur null
- <code>undefined</code> pour une valeur non définie
- <code>symbol</code> (introduit dans ECMAScript 2015) pour des valeurs
symboliques uniques
- <code>bigint</code> (introduit dans ECMAScript 2020) pour des nombres
entiers de grande précision

Voici quelques exemples de valeurs de chaque type de valeur primitif :
```js
let nombre = 10; // number
let chaine = "Bonjour"; // string
let boolean = true; // boolean
let vide = null; // null
let indefini; // undefined
let symbole = Symbol("symbole"); // symbol
let bigint = 123456789012345678901234567890n; // bigint
```
## Type de valeur objet

En JavaScript, toutes les valeurs qui ne sont pas des valeurs primitives
sont des objets. Les objets sont des valeurs qui ont des propriétés (qui
peuvent être des valeurs primitives ou des objets) et des méthodes (des
fonctions associées à l'objet).

Voici comment créer un objet en JavaScript :
```js
let monObjet = {
propriete1: valeur1,
propriete2: valeur2,
methode1: function() {
// code de la méthode
}
};
```

Voici comment accéder aux propriétés et aux méthodes d'un objet :
```js
console.log(monObjet.propriete1); // affiche la valeur de la propriété1
monObjet.methode1(); // exécute la méthode1
```
