---
layout: "layouts/Layout.astro"
title: "HTML5"
type: "CM"
---

# Introduction au Web

## Brève histoire du Web

Le **World Wide Web** (souvent appelé simplement "le Web") a été inventé en **1989** par **Tim Berners-Lee**, un chercheur du CERN en Suisse.  
À cette époque, les scientifiques avaient besoin d’un moyen simple pour partager leurs documents et leurs résultats.  

L’idée de Tim Berners-Lee était d’utiliser :  
- des **pages de texte** reliées entre elles par des **hyperliens** (les fameux "liens" cliquables),  
- un **langage commun** pour écrire ces pages (**HTML**),  
- et un système d’adresses pour identifier chaque page (**URL**).  

### Quelques dates importantes

- **1991** : la première page web est mise en ligne.  
- **1993** : apparition de **Mosaic**, le premier navigateur graphique. Jusqu’ici, les pages web étaient très basiques.  
- **1994** : création du **W3C** (World Wide Web Consortium), l’organisation chargée de définir les standards du Web.  
- **Années 2000** : arrivée du **Web 2.0** → les utilisateurs ne font plus que lire, ils peuvent aussi écrire (forums, blogs, réseaux sociaux).  
- **Aujourd’hui** : le Web fait partie de notre vie quotidienne et repose sur trois grands langages :  
  - **HTML** pour la structure,  
  - **CSS** pour la mise en forme,  
  - **JavaScript** pour l’interactivité.  

---

## Architecture du Web

Le Web fonctionne grâce à un modèle **client-serveur** :  

- **Client** : c’est le navigateur (Chrome, Firefox, Safari, Edge). Il envoie des demandes.  
- **Serveur** : c’est l’ordinateur distant qui héberge les pages web et les renvoie au navigateur.  
- **HTTP/HTTPS** : protocole qui permet la communication entre les deux.  
- **URL** : l’adresse qui identifie chaque ressource (page, image, vidéo, etc.).  

```plaintext
Navigateur (client) <--> Serveur (pages web)
```

---

# Introduction à HTML5

## Qu'est-ce que HTML5 ?

**HTML (HyperText Markup Language)** est un langage de balisage.  
Il ne permet pas de programmer, mais de **structurer le contenu d’une page web** : titres, paragraphes, images, liens, etc.  

**HTML5** est la version actuelle du langage, standardisée en 2014, et encore utilisée aujourd’hui.

---

## Structure de base d'un document HTML5

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bonjour le Web !</h1>
    <p>Ceci est mon premier paragraphe.</p>
  </body>
</html>
```

### Explications

- `<!DOCTYPE html>` : indique que le document utilise **HTML5**.  
- `<html>` : balise principale qui contient toute la page.  
- `<head>` : contient des informations de configuration (titre, encodage, etc.).  
- `<meta charset="UTF-8">` : précise l’encodage des caractères.  
- `<title>` : définit le titre affiché dans l’onglet du navigateur.  
- `<body>` : contient le contenu visible par l’utilisateur.  
- `<h1>` : un titre.  
- `<p>` : un paragraphe.  

---

# Les balises de base

- `<h1>` à `<h6>` : titres (du plus grand au plus petit).  
- `<p>` : paragraphe.  
- `<a href="...">` : lien hypertexte.  
- `<img src="..." alt="...">` : image.  
- `<ul>`, `<ol>`, `<li>` : listes (à puces ou numérotées).  

Exemple :

```html
<h1>Titre principal</h1>
<p>Voici un paragraphe avec un <a href="https://www.example.com">lien</a>.</p>

<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>
```

---

# Conclusion

- Le Web a été inventé pour partager des documents et repose encore aujourd’hui sur les mêmes principes.  
- Le langage de base pour structurer une page est **HTML**.  
- **HTML5** est la version moderne qui nous servira de base pour créer nos premières pages web.  

Dans les prochains cours, nous verrons :  
- **CSS** pour améliorer l’apparence des pages,  
- **JavaScript** pour rendre les pages interactives.
