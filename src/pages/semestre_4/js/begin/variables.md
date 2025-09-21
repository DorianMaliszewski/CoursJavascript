---
layout: "layouts/Layout.astro"
title: "Variables"
type: "tp"
---

# Les variables

## Déclaration de variables

Voici comment déclarer une variable en JavaScript :

Vous pouvez également initialiser une variable en lui affectant une
valeur lors de sa déclaration :

```js
let maVariable;
```

## Types de données

Il existe différents types de données que vous pouvez stocker dans une
variable, tels que des nombres (entiers ou flottants), des chaînes de
caractères, des booléens (`true` ou `false`), et des valeurs spéciales
comme `null` et `undefined`.

Voici quelques exemples de variables de différents types :

```js
let nombre = 10; // nombre entier
let decimal = 3.14; // nombre à virgule flottante
let chaine = "Bonjour"; // chaîne de caractères
let boolean = true; // booléen
let vide = null; // valeur null
let indefini; // valeur undefined
```

## Opérateurs d'affectation

Vous pouvez utiliser des opérateurs pour affecter des valeurs à une
variable, comme l'opérateur `=` pour l'affectation de base, ou
l'opérateur `+=` pour ajouter une valeur à une variable existante :

```js
let nombre = 10;
nombre += 5; // nombre vaut maintenant 15
```

## Déclaration multiple

Il est possible de déclarer plusieurs variables en utilisant la syntaxe
suivante :

```js
let variable1, variable2, variable3;
```

## Nommage de variables

Il est recommandé de donner des noms significatifs aux variables pour
rendre votre code plus facile à lire et à comprendre. Vous pouvez
utiliser des lettres, des chiffres et des underscores (`_`) dans les
noms de variables, mais les noms de variables ne peuvent pas commencer
par un chiffre. Il est également conseillé d'utiliser des camelCases
(première lettre en minuscule, suivies de mots avec la première lettre
en majuscule) pour les noms de variables composées de plusieurs mots,
comme `maVariable`.

Voici quelques exemples de noms de variables valides :

```js
let nom;
let age;
let estClient;
let nombreDeCommandes;
```

Voici quelques exemples de noms de variables non valides :

```js
let 123; // ne peut pas commencer par un chiffre
let mon-nom; // ne peut pas contenir de tirets
let mon nom; // ne peut pas contenir d'espaces
```

## var, let et const

Il est possible de déclarer une variable de différentes façon.{" "}
<code>var</code> ne doit plus être utilisé il est remplacé par{" "}
<code>let</code> qui sert à déclarer une variable qui peut être
réaffectée par la suite. <code>const</code> permet de déclarer une
variable qui ne doit pas être ré&affectée par la suite. Quelques soit le
mot clef utilisé le code sera fonctionnel mais votre éditeur de code à
de grande chance de vous signalez une erreur de déclaration permettant
de garder votre code propre et cohérent

```js
var nom = "toto"; // ne doit pas être utilisé mais fonctionne encore

//Exemple valide
const nom = "toto";
let age = 18;
age = 19;

//Exemple incorrect
let nom = "toto"; // cette variable n'est jamais réaffectée
const age = 18;
age = 19; // cette variable est une constante elle ne doit pas être réaffectée
```
