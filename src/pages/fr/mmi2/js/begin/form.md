---
layout: "layouts/Layout.astro"
title: "Javascript > Forms"
---

# Les formulaires (FormData)

`FormData` est une interface JavaScript qui permet de créer facilement des objets représentant des paires clef/valeur pour l'envoi de données sous forme de formulaires.

## Création d'un objet FormData

Pour créer un objet `FormData`, vous pouvez l'instancier vide ou à partir d'un formulaire HTML existant.

### FormData vide

```js
const formData = new FormData();
```

### FormData à partir d'un formulaire HTML

```js
const monFormulaire = document.getElementById("monFormulaire");
const formData = new FormData(monFormulaire);
```

## Ajout de données à FormData

Vous pouvez ajouter des paires clef/valeur à un objet `FormData` en utilisant la méthode `append()`.

```js
formData.append("nom", "John Doe");
formData.append("email", "john.doe@example.com");
```

## Gestion de fichiers avec FormData

`FormData` est particulièrement utile pour l'envoi de fichiers. Les champs de type `file` des formulaires HTML peuvent être ajoutés à l'objet `FormData`.

```html
<input type="file" id="fichierInput" name="fichier" />
```

```js
const fichierInput = document.getElementById("fichierInput");
formData.append("fichier", fichierInput.files[0]);
```

## Traitement côté serveur

Côté serveur, assurez-vous de gérer correctement les données envoyées avec `FormData`. Les bibliothèques et frameworks côté serveur offrent souvent des outils pour traiter ces données de manière efficace.

En conclusion, l'utilisation de `FormData` simplifie l'envoi de données de formulaire, y compris les fichiers, via des requêtes AJAX en JavaScript. Cela offre une solution pratique pour interagir avec les serveurs web et les API nécessitant des données de formulaire.

## Exemple complet

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemple FormData</title>
  </head>
  <body>
    <form id="monFormulaire">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom" />

      <label for="email">Email :</label>
      <input type="email" id="email" name="email" />

      <label for="fichierInput">Fichier :</label>
      <input type="file" id="fichierInput" name="fichier" />

      <button type="button" onclick="envoyerFormulaire()">Envoyer</button>
    </form>

    <script>
      function envoyerFormulaire() {
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
      }
    </script>
  </body>
</html>
```
