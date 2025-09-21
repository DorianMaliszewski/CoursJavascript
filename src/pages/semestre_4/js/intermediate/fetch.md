---
layout: "layouts/Layout.astro"
title: "Fetch"
type: "tp"
---

# Récupérer des données avec fetch

L'API fetch permet de recupérer des données via une requête XHR (XML Http Request). On l'utilise souvent lorsque l'on souhaite récupérer des données sur une API.

## Utilisation

Pour recupérer les données il suffit d'utiliser directement la fonction `fetch()`. La valeur retournée de fetch est `Promise<Response>`. Nous verrons par la suite quels sont les fonctions couramment utiliser pour obtenir le contenu de la réponse. Voici un exemple avec les paramètres les plus communs :

```js
// Les options par défaut sont indiquées par *
const response = fetch(url, {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify(donnees), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
});
```

## Récupérer des données au format JSON

Pour obtenir les données de la réponse au format JSON il suffit d'utiliser la fonction `json()` avec l'objet de la réponse :

```js
const response = fetch(url);

response.then((res) => {
  const json = res.json();
  console.log(json); // affiche le contenu de la réponse au format json (donc un type Object)
});
```

## Récupérer des données au format texte

Pour obtenir les données de la réponse au format texte il suffit d'utiliser la fonction `text()` avec l'objet de la réponse :

```js
const response = fetch(url);

response.then((res) => {
  const json = res.text();
  console.log(text); // affiche le contenu de la réponse au format text (donc un type string)
});
```

## Récupérer des données au format fichier

Pour obtenir les données de la réponse au format fichier il suffit d'utiliser la fonction `blob()` avec l'objet de la réponse :

```js
const response = fetch(url);

response.then((res) => {
  const objectURL = URL.createObjectURL(myBlob); // Ici j'ai mon fichier sous forme d'url par exemple que je peux place dans une image pour l'afficher
  document.getElementById("mon-image").src = objectURL;
});
```

## Envoyer des données au format JSON

Pour envoyer des données au format JSON il faut ajouter des paramètres supplémentaires dans la fonction `fetch` :

```js
const data = { firstName: "test", fullName: "test" };

fetch(url, {
  method: "POST",
  body: data,
  headers: {
    "Content-Type": "application/json",
  },
});
```

## Envoyer un formulaire

Pour envoyer des données d'un formulaire il faut ajouter des paramètres supplémentaires dans la fonction `fetch` tout comme pour le JSON :

```js
const monFormulaire = document.getElementById("monFormulaire");
const formData = new FormData(monFormulaire);

fetch("/endpoint", {
  method: "POST",
  body: formData,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur de requête : " + response.statusText);
    }
    return response.text();
  })
  .then((data) => console.log("Requête réussie :", data))
  .catch((error) => console.error("Erreur de requête :", error));
```

## Lien utile

Lien vers la documentation fetch sur MDN : [Clique ici](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
