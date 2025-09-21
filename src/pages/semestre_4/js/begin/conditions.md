---
layout: "layouts/Layout.astro"
title: "Conditions"
type: "tp"
---

# Les conditions

## If, Else

```js
let x = 5;

if (x > 10) {
  console.log("x est plus grand que 10");
} else {
  console.log("x est plus petit ou égal à 10");
}
```

Dans cet exemple, la condition vérifie si la variable <code>x</code> est
supérieure à 10. Comme <code>x</code> est égal à 5, la condition est
fausse et le message "<code>x est plus petit ou égal à 10</code>" est
affiché dans la console.

Il existe plusieurs opérateurs de comparaison que tu peux utiliser
dans les conditions :

- <code>></code> (strictement supérieur)
- <code><</code> (strictement inférieur)
- <code>=</code> (supérieur ou égal)
- <code><=</code> (inférieur ou égal)
- <code>==</code> (égal)
- <code>!=</code> (différent)

Tu peux également utiliser des conditions de type "ET" (
<code>&&</code>) et "OU" (<code>||</code>) :

```js
let x = 5;
let y = 10;

if (x > 0 && y > 0) {
  console.log("x et y sont tous les deux positifs");
}

if (x > 0 || y > 0) {
  console.log("au moins un des deux est positif");
}
```

## Switch

Tu peux utiliser la structure <code>switch</code> pour vérifier
plusieurs valeurs différentes d'une même variable :

```js
let x = 5;

switch (x) {
  case 1:
    console.log("x est égal à 1");
    break;
  case 5:
    console.log("x est égal à 5");
    break;
  default:
    console.log("x est différent de 1 et 5");
    break;
}
```
