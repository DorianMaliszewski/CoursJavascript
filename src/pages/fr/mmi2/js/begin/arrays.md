---
layout: "layouts/Layout.astro"
title: "Javascript > Array"
---

# Les tableaux (Array)

## Création d'un tableau

Voici comment créer un tableau en JavaScript :

```js
let monTableau = []; // tableau vide

let monTableau = [1, 2, 3]; // tableau de nombres

let monTableau = ["un", "deux", "trois"]; // tableau de chaînes de caractères

let monTableau = [true, false, true]; // tableau de booléens

let monTableau = [{ nom: "Alice" }, { nom: "Bob" }]; // tableau d'objets
```

Vous pouvez également utiliser la syntaxe suivante pour créer un tableau (disponible depuis ECMAScript 2015) :

```js
let monTableau = new Array(); // tableau vide

let monTableau = new Array(1, 2, 3); // tableau de nombres

let monTableau = new Array("un", "deux", "trois"); // tableau de chaînes de caractères

let monTableau = new Array(true, false, true); // tableau de booléens

let monTableau = new Array({ nom: "Alice" }, { nom: "Bob" }); // tableau d'objets
```

## Accès aux éléments d'un tableau

Voici comment accéder aux éléments d'un tableau :

```js
let premierElement = monTableau[0]; // accès au premier élément
let dernierElement = monTableau[monTableau.length - 1]; // accès au dernier élément
```

Vous pouvez également utiliser une boucle pour parcourir tous les
éléments d'un tableau :

```js
for (let i = 0; i &lt; monTableau.length; i++) {
  console.log(monTableau[i]); // affiche chaque élément
}
```

Vous pouvez également utiliser une boucle <code>for...of</code>{" "}
(disponible depuis ECMAScript 2015) pour parcourir tous les éléments
d'un tableau :

```js
for (let element of monTableau) {
  console.log(element); // affiche chaque élément
}
```

Notez que les boucles <code>for</code> et <code>for...of</code> ne
parcourent que les éléments du tableau qui sont enumerables
(c'est-à-dire, les éléments qui sont listés lorsque vous utilisez une
boucle <code>for</code> ou une boucle <code>for...of</code>). Si vous
voulez parcourir tous les éléments du tableau, y compris ceux qui sont
hérités et non-enumerables, vous pouvez utiliser la fonction{" "}
<code>Object.getOwnPropertyNames()</code> :

```js
for (let i of Object.getOwnPropertyNames(monTableau)) {
  console.log(monTableau[i]); // affiche chaque élément
}
```

## Modification des éléments d'un tableau

Voici comment ajouter un élément à la fin d'un tableau :

```js
let dernierElement = monTableau.pop(); // retire le dernier élément du tableau
```

Voici comment retirer un élément de la fin d'un tableau :

```js
monTableau.push(4); // ajoute le nombre 4 à la fin du tableau
```

Voici comment ajouter un élément au début d'un tableau :

```js
monTableau.unshift(0); // ajoute le nombre 0 au début du tableau
```

Voici comment retirer un élément du début d'un tableau :

```js
let premierElement = monTableau.shift(); // retire le premier élément du tableau
```

Voici comment remplacer un élément d'un tableau :

```js
monTableau[1] = "deux"; // remplace le deuxième élément par "deux"
```

Voici comment insérer un élément à une position donnée d'un tableau :

```js
monTableau.splice(1, 0, "un-demi"); // insère "un-demi" à la deuxième position du tableau
```

Voici comment supprimer un élément à une position donnée d'un tableau :

```js
monTableau.splice(2, 1); // supprime l'élément à la troisième position du tableau
```

Voici comment trier les éléments d'un tableau :

```js
monTableau.sort(); // trie les éléments du tableau par ordre alphabétique ou numérique
```

Voici comment inverse l'ordre des éléments d'un tableau :

```js
monTableau.reverse(); // inverse l'ordre des éléments du tableau
```

## Taille d'un tableau

Voici comment déterminer la taille d'un tableau :

```js
let taille = monTableau.length; // détermine la taille du tableau
```
