---
layout: 'layouts/Layout.astro'
title: "Javascript > Promise"
---

# Les Promesses (Promise)

Les promesses (ou Promise en anglais) sont un mécanisme essentiel dans JavaScript pour gérer les opérations asynchrones de manière plus lisible et efficace. Elles permettent de simplifier le code et d'éviter les "callback hell" en organisant les opérations asynchrones de manière plus linéaire. Une promesse représente la réussite ou l'échec éventuel d'une opération asynchrone.

## Introduction

Les promesses sont des objets qui représentent la terminaison ou l'échec éventuel d'une opération asynchrone. Elles ont trois états possibles :

- Pendante (pending) : L'opération n'est ni terminée ni rejetée.
- Résolue (fulfilled) : L'opération est réussie, et la promesse renvoie une valeur.
- Rejetée (rejected) : L'opération a échoué, et la promesse renvoie une raison d'échec.

## Création d'une Promesse

Pour créer une promesse, utilisez le constructeur Promise. Il prend une fonction en argument avec deux paramètres : `resolve` et `reject`. Vous appelez `resolve` lorsque l'opération réussit et `reject` lorsque l'opération échoue.

```js
const maPromesse = new Promise((resolve, reject) => {
  // Code asynchrone ici

  if (/* opération réussie */) {
    resolve('Réussite !');
  } else {
    reject('Échec !');
  }
});
```

## Utilisation des Promesses

Les promesses sont utilisées pour gérer des opérations asynchrones, comme les requêtes HTTP, les lectures de fichiers, etc. Les méthodes principales des promesses sont `then`, `catch`, et `finally`.

### `then`

La méthode `then` est utilisée pour traiter le résultat d'une promesse résolue.

```js
maPromesse.then((valeur) => {
  console.log(`Réussite : ${valeur}`);
});
```

### `catch`

La méthode `catch` est utilisée pour traiter le rejet d'une promesse.

```js
maPromesse.catch((raison) => {
  console.error(`Échec : ${raison}`);
});

```
### `finally`

La méthode finally est utilisée pour exécuter du code, que la promesse soit résolue ou rejetée.

```js
maPromesse.finally(() => {
  console.log('Opération terminée, que ce soit un succès ou un échec.');
});
```

## Chaînage de Promesses

Il est possible de chaîner plusieurs promesses pour exécuter des opérations séquentielles.

```js
premierePromesse()
  .then((resultat) => deuxiemePromesse(resultat))
  .then((nouveauResultat) => {
    console.log(`Résultat final : ${nouveauResultat}`);
  })
  .catch((erreur) => {
    console.error(`Une erreur s'est produite : ${erreur}`);
  });
```
## `Promise.all` et `Promise.race`

- `Promise.all` est utilisé pour traiter un tableau de promesses et renvoie une nouvelle promesse résolue avec un tableau de résultats une fois que toutes les promesses sont résolues.
- `Promise.race` renvoie la première promesse résolue ou rejetée parmi un tableau de promesses.

```js
const promesse1 = fetch('https://api.exemple.com/donnees1');
const promesse2 = fetch('https://api.exemple.com/donnees2');

Promise.all([promesse1, promesse2])
  .then((resultats) => {
    console.log('Toutes les promesses sont résolues :', resultats);
  })
  .catch((erreur) => {
    console.error('Au moins une promesse a été rejetée :', erreur);
  });
```

Les promesses en JavaScript sont un concept puissant pour gérer l'asynchronisme de manière plus claire et structurée. Elles sont largement utilisées dans le développement moderne pour améliorer la lisibilité et la gestion des opérations asynchrones.
