---
layout: 'layouts/Layout.astro'
title: 'Les boucles en Javascript'
---
# Les boucles

## Boucle for

La boucle for en JavaScript s'utilise de la manière suivante :

```js
for (initialisation; condition; étape) {
  // code à exécuter
}
``` 
La boucle for commence par l'initialisation de la boucle, qui est
généralement utilisée pour déclarer et initialiser une variable de
boucle. Ensuite, la condition est vérifiée. Si la condition est vraie,
le code à l'intérieur de la boucle est exécuté. Enfin, l'étape est
exécutée, généralement utilisée pour mettre à jour la variable de
boucle. Ensuite, la condition est à nouveau vérifiée, et ainsi de suite
jusqu'à ce que la condition soit fausse, ce qui fait sortir de la
boucle.

Voici un exemple de boucle for qui affiche les nombres de 1 à 10 :
```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```
## Boucle while
La boucle while en JavaScript s'utilise de la manière suivante :
```js
while (condition) {
  // code à exécuter
}
``` 
La boucle while vérifie d'abord la condition. Si la condition est vraie,
le code à l'intérieur de la boucle est exécuté, puis la condition est à
nouveau vérifiée. Cela se poursuit jusqu'à ce que la condition soit
fausse, ce qui fait sortir de la boucle.


Voici un exemple de boucle while qui affiche les nombres de 1 à 10 :

```js
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
```

## Boucle do-while

La boucle do-while en JavaScript s'utilise de la manière suivante :

```js
do {
  // code à exécuter
} while (condition);`;
``` 

La boucle do-while fonctionne de manière similaire à la boucle while,
mais la condition est vérifiée à la fin de chaque itération de la boucle
au lieu de au début. Cela signifie que le code à l'intérieur de la
boucle sera toujours exécuté au moins une fois, même si la condition est
fausse.


Voici un exemple de boucle do-while qui affiche les nombres de 1 à 10 :

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
```
## Instructions de contrôle de flux

Il existe également des instructions de contrôle de flux comme{" "}
<code>break</code> et <code>continue</code>, qui permettent de sortir de
la boucle ou de passer à l'itération suivante de la boucle :


- <code>break</code> permet de sortir complètement de la boucle.


- <code>continue</code> permet de passer à l'itération suivante de la
boucle sans exécuter le reste du code de l'itération en cours.

