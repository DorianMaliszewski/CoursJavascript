---
layout: "layouts/Layout.astro"
title: "Javascript > Object"
---

# Les objets

## Création d'objets

Voici comment créer un objet vide en JavaScript :</p>

```js
let monObjet = {};
```

Voici comment ajouter des propriétés (des valeurs associées à des noms)
à un objet :

```js
monObjet.propriete1 = valeur1;
monObjet.propriete2 = valeur2;
```

Voici comment ajouter des méthodes (des fonctions associées à l'objet) à
un objet :

```js
monObjet.methode1 = function () {
  // code de la méthode
};
```

Voici comment créer un objet avec des propriétés et des méthodes en une
seule étape :

```js
let monObjet = {
  propriete1: valeur1,
  propriete2: valeur2,
  methode1: function () {
    // code de la méthode
  },
};
```

## Accès aux propriétés et aux méthodes

Voici comment accéder aux propriétés d'un objet :

```js
console.log(monObjet.propriete1); // affiche la valeur de la propriété1
```

Voici comment accéder aux méthodes d'un objet :

```js
monObjet.methode1(); // exécute la méthode1
```

Vous pouvez également accéder aux propriétés et aux méthodes d'un objet
en utilisant la syntaxe suivante :

```js
console.log(monObjet["propriete1"]); // affiche la valeur de la propriété1
monObjet["methode1"](); // exécute la méthode1
```

Cette syntaxe est particulièrement utile lorsque le nom de la propriété
ou de la méthode est stocké dans une variable :

```js
let nomPropriete = "propriete1";
console.log(monObjet[nomPropriete]); // affiche la valeur de la propriété1

let nomMethode = "methode1";
monObjet[nomMethode](); // exécute la méthode1
```

## Modification et suppression de propriétés

Voici comment modifier une propriété d'un objet :

```js
monObjet.propriete1 = nouvelleValeur;
```

Voici comment supprimer une propriété d'un objet :

```js
delete monObjet.propriete1;
```

Notez que vous ne pouvez pas supprimer une propriété d'un objet s'il
s'agit d'un objet intrisèque (par exemple, <code>Array.prototype</code>{" "}
ou <code>Object.prototype</code>).

## Boucles sur les propriétés d'un objet

Voici comment parcourir toutes les propriétés d'un objet avec une boucle{" "}
<code>for...in</code> :

```js
for (let nomPropriete in monObjet) {
  console.log(nomPropriete); // affiche le nom de chaque propriété
}
```

Voici comment parcourir toutes les propriétés d'un objet avec une boucle{" "}
<code>for...of</code> (disponible depuis ECMAScript 2015) :

```js
for (let valeur of Object.values(monObjet)) {
  console.log(valeur); // affiche la valeur de chaque propriété
}
```

Notez que la boucle <code>for...of</code> ne permet de parcourir que les
propriétés "enumerable" de l'objet (c'est-à-dire, les propriétés qui
sont listées lorsque vous utilisez une boucle <code>for...in</code>). Si
vous voulez parcourir toutes les propriétés de l'objet, y compris celles
qui sont héritées et non-enumerables, vous pouvez utiliser la fonction{" "}
<code>Object.getOwnPropertyNames()</code> :

```js
for (let nomPropriete of Object.getOwnPropertyNames(monObjet)) {
  console.log(nomPropriete); // affiche le nom de chaque propriété
}
```

## Prototype

En JavaScript, chaque objet a un lien vers un autre objet appelé
"prototype". Lorsque vous tentez d'accéder à une propriété d'un objet,
le moteur JavaScript va d'abord chercher la propriété dans l'objet
lui-même. Si la propriété n'est pas trouvée, il va chercher la propriété
dans le prototype de l'objet. Si la propriété n'est toujours pas
trouvée, il va chercher la propriété dans le prototype du prototype, et
ainsi de suite jusqu'à ce que la chaîne de prototypes soit épuisée. Si
la propriété n'est toujours pas trouvée, elle est considérée comme étant
undefined. Voici comment accéder au prototype d'un objet :

```js
let prototype = Object.getPrototypeOf(monObjet);
```

Voici comment définir le prototype d'un objet :

```js
Object.setPrototypeOf(monObjet, prototype);
```

Vous pouvez également utiliser la syntaxe suivante pour définir le
prototype d'un objet (disponible depuis ECMAScript 2015) :

```js
monObjet.__proto__ = prototype;
```

Notez que cette syntaxe est déconseillée en raison de son comportement
imprévisible dans certains environnements.

## Héritage

En JavaScript, vous pouvez créer un objet qui hérite des propriétés et
des méthodes d'un autre objet en définissant le prototype de l'objet
enfant comme étant l'objet parent. Voici comment créer un objet enfant
qui hérite d'un objet parent :

```js
let objetParent = {
  propriete1: valeur1,
  methode1: function () {
    // code de la méthode
  },
};

let objetEnfant = Object.create(objetParent);
```

Vous pouvez également utiliser une fonction constructeur comme objet
parent en utilisant la syntaxe suivante :

```js
function ObjetParent(arg1, arg2) {
  this.propriete1 = arg1;
  this.propriete2 = arg2;
}
ObjetParent.prototype.methode1 = function () {
  // code de la méthode
};

function ObjetEnfant(arg1, arg2, arg3) {
  ObjetParent.call(this, arg1, arg2);
  this.propriete3 = arg3;
}
ObjetEnfant.prototype = Object.create(ObjetParent.prototype);
ObjetEnfant.prototype.constructor = ObjetEnfant;
ObjetEnfant.prototype.methode2 = function () {
  // code de la méthode
};

let objetEnfant = new ObjetEnfant(valeur1, valeur2, valeur3);
```

Notez que l'objet enfant hérite des propriétés et des méthodes de
l'objet parent, mais aussi de ses propres propriétés et méthodes. Si
vous modifiez le prototype de l'objet parent, les modifications seront
répercutées sur l'objet enfant et sur tous les autres objets qui
héritent de l'objet parent.
