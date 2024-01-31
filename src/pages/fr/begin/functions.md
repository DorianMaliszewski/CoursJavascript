---
layout: 'layouts/Layout.astro'
title: 'Javascript > Fonctions'
---
# Les fonctions

## Déclaration de fonctions

Voici comment déclarer une fonction en JavaScript :
```js
function maFonction() {
// code de la fonction
}
```
Vous pouvez également utiliser une expression de fonction pour déclarer
une fonction :

```js
let maFonction = function() {
  // code de la fonction
};
```
## Appel de fonctions

Voici comment appeler une fonction en JavaScript :
```js
maFonction();
```

Vous pouvez également passer des arguments (des valeurs passées à la
fonction) à une fonction en les indiquant entre parenthèses lors de
l'appel de la fonction :

```js
maFonction(argument1, argument2);
```

Les arguments sont disponibles à l'intérieur de la fonction sous forme
de variables :

```js
function maFonction(arg1, arg2) {
  console.log(arg1); // affiche la valeur de l'argument1
  console.log(arg2); // affiche la valeur de l'argument2
}
```
## Fonctions avec valeurs de retour

Les fonctions peuvent également renvoyer une valeur à l'aide de
l'instruction <code>return</code> :
```js
function maFonction(arg1, arg2) {
  let resultat = arg1 + arg2;
  return resultat; // renvoie la valeur de resultat à l'appelant
}
```
Vous pouvez récupérer la valeur renvoyée par une fonction en la stockant
dans une variable :

```js
let resultat = maFonction(10, 5); // resultat vaut 15
```

Notez que l'exécution de la fonction s'arrête immédiatement lorsque
l'instruction <code>return</code> est exécutée.

## Fonctions fléchées

Depuis ECMAScript 2015, il est possible de déclarer des fonctions en
utilisant une syntaxe appelée "fonctions fléchées" (arrow functions en
anglais). Les fonctions fléchées sont une alternative concise à la
syntaxe traditionnelle des fonctions et permettent de créer des
fonctions anonymes. Voici comment déclarer une fonction fléchée :

```js
let maFonction = (arg1, arg2) => {
  // code de la fonction
};
```

Si la fonction ne prend qu'un seul argument, vous pouvez omettre les
parenthèses :

```js
let maFonction = arg => {
  // code de la fonction
};
```

Si la fonction ne contient qu'une seule instruction, vous pouvez
également omettre les accolades et la keyword <code>return</code> :

```js
let maFonction = (arg1, arg2) => arg1 + arg2;
```

Voici un exemple de fonction fléchée qui prend un tableau en argument et
renvoie un tableau filtré :

```js
let tableau = [1, 2, 3, 4, 5];
let tableauFiltre = tableau.filter(x => x % 2 === 0); // renvoie [2, 4]
```
## Portée de variables

En JavaScript, les variables déclarées à l'intérieur d'une fonction sont
locales et ne sont pas accessibles depuis l'extérieur de la fonction.
Les variables déclarées à l'extérieur de toute fonction sont globales et
sont accessibles depuis n'importe où dans le script. Voici un exemple :

```js
let variableGlobale = "je suis globale";

function maFonction() {
  let variableLocale = "je suis locale";
}

console.log(variableGlobale); // affiche "je suis globale"
console.log(variableLocale); // affiche une erreur, variableLocale est undefined
```

Il est possible de déclarer une variable globale à l'intérieur d'une
fonction en utilisant la keyword <code>globalThis</code> (introduite
dans ECMAScript 2020) :

```js
function maFonction() {
  globalThis.variableGlobale = "je suis globale";
}

console.log(variableGlobale); // affiche "je suis globale"`;
```

Notez que l'utilisation de <code>globalThis</code> est déconseillée en
raison de son comportement imprévisible dans certains environnements.

## Fonctions constructeurs

En JavaScript, vous pouvez utiliser des fonctions constructeurs pour
créer des objets de manière répétitive. Une fonction constructeur est
une fonction qui est appelée avec la keyword <code>new</code>. Voici
comment déclarer une fonction constructeur :

```js
function MonObjet(arg1, arg2) {
  this.propriete1 = arg1;
  this.propriete2 = arg2;
  this.methode1 = function() {
    // code de la méthode
  }
}
```

Voici comment créer un nouvel objet à l'aide de la fonction constructeur :
```js
let monObjet = new MonObjet(valeur1, valeur2);
```

Vous pouvez accéder aux propriétés et aux méthodes de l'objet de la même
manière que pour un objet créé avec l'opérateur <code>{}</code> :
```js
console.log(monObjet.propriete1); // affiche la valeur de la propriété1
monObjet.methode1(); // exécute la méthode1
```
