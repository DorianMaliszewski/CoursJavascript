---
layout: 'layouts/Layout.astro'
title: 'Javascript > Async/Await'
---
# Async/Await

L'Async/Await est une syntaxe introduite dans ECMAScript 2017 pour simplifier la gestion des opérations asynchrones en utilisant des promesses. Cette approche rend le code asynchrone plus lisible et plus proche de la syntaxe synchrone.

## 1. Fonctionnement de base

Pour utiliser `async` et `await`, une fonction doit être déclarée comme `async`. Cela permet à la fonction de retourner une promesse. L'instruction `await` est utilisée à l'intérieur de cette fonction pour attendre qu'une promesse soit résolue avant de continuer l'exécution.

```js
async function exempleAsync() {
  // Opération asynchrone
  let resultat = await fonctionAsynchrone();

  // Suite du code après la résolution de la promesse
  console.log(resultat);
}

// Appel de la fonction asynchrone
exempleAsync();
```

## 2. Utilisation d'Async/Await avec les Promesses

L'Async/Await est souvent utilisé avec des fonctions qui retournent des promesses. Cela rend le code plus lisible en évitant une cascade de `.then()`.

```js
function fonctionAsynchrone() {
  return new Promise((resolve, reject) => {
    // Opération asynchrone
    if (/* opération réussie */) {
      resolve('Réussite !');
    } else {
      reject('Échec !');
    }
  });
}

async function exempleAsync() {
  try {
    // Utilisation d'await avec une promesse
    let resultat = await fonctionAsynchrone();
    console.log(resultat);
  } catch (erreur) {
    console.error(erreur);
  }
}
```

## 3. Gestion des Erreurs

La gestion des erreurs avec Async/Await est simplifiée à l'aide du bloc `try/catch`. Les erreurs rejetées par les promesses peuvent être capturées dans le bloc `catch`.

```js
async function exempleAsync() {
  try {
    let resultat = await fonctionAsynchrone();
    console.log(resultat);
  } catch (erreur) {
    console.error('Une erreur s'est produite :', erreur);
  }
}
```

## 4. Utilisation d'Async/Await dans les Fonctions de Haut Niveau

Les fonctions de plus haut niveau, comme les fonctions d'événement ou les fonctions de rappel, peuvent également bénéficier d'Async/Await. Cependant, assurez-vous que la fonction de plus haut niveau est également déclarée comme `async`.

```js
async function fonctionDeHautNiveau() {
  try {
    let resultat = await fonctionAsynchrone();
    console.log(resultat);
  } catch (erreur) {
    console.error('Une erreur s'est produite :', erreur);
  }
}

// Appel de la fonction de plus haut niveau
fonctionDeHautNiveau();
```

## 5. Async/Await avec Promise.all

Lorsque vous travaillez avec plusieurs promesses, vous pouvez utiliser `Promise.all` avec Async/Await pour attendre la résolution de toutes les promesses.

```js
async function exempleAvecPromiseAll() {
  const promesse1 = fonctionAsynchrone1();
  const promesse2 = fonctionAsynchrone2();

  // Attendre la résolution de toutes les promesses
  const [resultat1, resultat2] = await Promise.all([promesse1, promesse2]);

  console.log(resultat1, resultat2);
}
```

## 6. Utilisation d'Async/Await avec Fetch API

L'Async/Await peut également être utilisé de manière efficace avec la Fetch API pour effectuer des requêtes HTTP de manière asynchrone.

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.exemple.com/donnees');
    const data = await response.json();
    console.log(data);
  } catch (erreur) {
    console.error('Erreur lors de la récupération des données :', erreur);
  }
}

// Appel de la fonction pour récupérer les données
fetchData();
```

## 7. Conclusion

L'utilisation d'Async/Await en JavaScript simplifie considérablement la gestion des opérations asynchrones, en rendant le code plus lisible et en facilitant la gestion des erreurs. Cette syntaxe est devenue une norme dans le développement moderne en JavaScript, remplaçant souvent l'utilisation des callbacks et des chaînes de promesses.

N'oubliez pas de déclarer la fonction contenant `await` comme `async` et de traiter les erreurs avec le bloc `try/catch` pour assurer une gestion appropriée des erreurs asynchrones. Cela permet d'écrire du code plus propre et plus robuste, améliorant ainsi la qualité du développement JavaScript.
