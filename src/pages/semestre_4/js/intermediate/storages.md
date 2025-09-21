---
layout: "layouts/Layout.astro"
title: "Storage"
type: "tp"
---

# Stockage

Il existe plusieurs méthodes de stockage de données en JavaScript, qui
permettent de conserver des informations côté client et de les
réutiliser ultérieurement. Les méthodes de stockage incluent :

- Le <strong>stockage local</strong>, qui permet de stocker des données
  de manière permanente dans le navigateur de l'utilisateur
- Le <strong>sessionStorage</strong>, qui permet de stocker des données
  de manière temporaire pour une session donnée (c'est-à-dire, jusqu'à
  ce que le navigateur soit fermé)
- Le <strong>cookies</strong>, qui permet de stocker des données de
  manière temporaire ou permanente sur l'ordinateur de l'utilisateur

## Stockage local

Le stockage local vous permet de stocker des données de manière
permanente dans le navigateur de l'utilisateur. Les données stockées
dans le stockage local sont accessibles depuis n'importe quelle page du
site, même si le navigateur est fermé et rouvert.

Voici comment utiliser le stockage local :

```js
// enregistrer une valeur dans le stockage local
localStorage.setItem("cle", "valeur");

// récupérer une valeur du stockage local
let valeur = localStorage.getItem("cle");

// supprimer une valeur du stockage local
localStorage.removeItem("cle");

// vider toutes les valeurs du stockage local
localStorage.clear();
```

Le stockage local accepte uniquement des chaînes de caractères comme
valeurs. Si vous voulez stocker un objet ou un tableau, vous devez
d'abord le convertir en chaîne de caractères en utilisant{" "}
<code>JSON.stringify()</code>, et le convertir en objet ou en tableau en
utilisant <code>JSON.parse()</code> :

```js
// enregistrer un objet dans le stockage local
let monObjet = { nom: "John", âge: 30 };
localStorage.setItem("monObjet", JSON.stringify(monObjet));

// récupérer un objet du stockage local
let monObjet = JSON.parse(localStorage.getItem("monObjet"));

// enregistrer un tableau dans le stockage local
let monTableau = ["un", "deux", "trois"];
localStorage.setItem("monTableau", JSON.stringify(monTableau));

// récupérer un tableau du stockage local
let monTableau = JSON.parse(localStorage.getItem("monTableau"));
```

## SessionStorage

Le sessionStorage est similaire au stockage local, mais les données sont
stockées de manière temporaire pour une session donnée (c'est-à-dire,
jusqu'à ce que le navigateur soit fermé).

Voici comment utiliser le sessionStorage :

```js
// enregistrer une valeur dans le sessionStorage
sessionStorage.setItem("cle", "valeur");

// récupérer une valeur du sessionStorage
let valeur = sessionStorage.getItem("cle");

// supprimer une valeur du sessionStorage
sessionStorage.removeItem("cle");

// vider toutes les valeurs du sessionStorage
sessionStorage.clear();
```

Le sessionStorage accepte uniquement des chaînes de caractères comme
valeurs. Si vous voulez stocker un objet ou un tableau, vous devez
d'abord le convertir en chaîne de caractères en utilisant{" "}
<code>JSON.stringify()</code>, et le convertir en objet ou en tableau en
utilisant <code>JSON.parse()</code> :

```js
// enregistrer un objet dans le sessionStorage
let monObjet = { nom: "John", âge: 30 };
sessionStorage.setItem("monObjet", JSON.stringify(monObjet));

// récupérer un objet du sessionStorage
let monObjet = JSON.parse(sessionStorage.getItem("monObjet"));

// enregistrer un tableau dans le sessionStorage
let monTableau = ["un", "deux", "trois"];
sessionStorage.setItem("monTableau", JSON.stringify(monTableau));

// récupérer un tableau du sessionStorage
let monTableau = JSON.parse(sessionStorage.getItem("monTableau"));
```

## Cookies

Les cookies sont de petits fichiers stockés sur l'ordinateur de
l'utilisateur qui permettent de conserver des informations sur la
navigation de l'utilisateur sur un site web. Les cookies sont souvent
utilisés pour stocker les préférences de l'utilisateur, pour suivre le
comportement de l'utilisateur sur un site web, ou pour stocker des
informations de connexion pour que l'utilisateur n'ait pas à saisir son
nom d'utilisateur et son mot de passe à chaque visite. Les cookies
peuvent être stockés de manière temporaire ou permanente sur
l'ordinateur de l'utilisateur.

Voici comment enregistrer un cookie :

```js
function setCookie(nom, valeur, jours) {
  let date = new Date();
  date.setTime(date.getTime() + jours * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = nom + "=" + valeur + ";" + expires + ";path=/";
}
```

Voici comment utiliser la fonction <code>setCookie()</code> :

```js
setCookie("nom", "valeur", 7); // enregistre un cookie qui expirera dans 7 jours
```

Voici comment récupérer un cookie :

```js
// récupérer un cookie
function getCookie(nom) {
  let nomEgal = nom + "=";
  let decalage = 0;
  let tabCookies = document.cookie.split(";");
  for (let i = 0; i < tabCookies.length; i++) {
    let c = tabCookies[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nomEgal) === 0) {
      return c.substring(nomEgal.length, c.length);
    }
  }
  return "";
}

// supprimer un cookie
function deleteCookie(nom) {
  setCookie(nom, "", -1);
}
```

Note : les cookies sont souvent utilisés pour suivre les utilisateurs
sur plusieurs sites. Assurez-vous d'informer les utilisateurs et de
respecter leur vie privée lorsque vous utilisez des cookies.
