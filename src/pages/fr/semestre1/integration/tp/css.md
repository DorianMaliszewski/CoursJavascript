---
layout: "layouts/Layout.astro"
title: "TP CSS pour Étudiants de Première Année en Informatique"
---

# TP 2 : CSS 

## Objectifs

1. Apprendre les bases du CSS.
2. Comprendre l'importance des sélecteurs, des propriétés et des valeurs.
3. Utiliser le CSS pour embellir une page web existante.
4. Ajouter des styles aux éléments HTML tels que les textes, les images et les vidéos.

## Instructions

### Étape 1 : Créer un Fichier CSS

Créez un fichier CSS appelé `styles.css` et liez-le à votre fichier `index.html` en ajoutant la ligne suivante dans la section `<head>` de votre fichier HTML :

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet Web Étudiant</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Explications :**
- La balise `<link rel="stylesheet" href="styles.css">` permet de lier le fichier CSS à la page HTML.
- Le fichier CSS contiendra les styles qui seront appliqués aux éléments HTML de la page.

### Étape 2 : Appliquer des Styles de Base

Ajoutez les styles suivants à votre fichier `styles.css` :

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}

h1 {
    color: #0056b3;
}

p {
    line-height: 1.6;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 1em;
}

nav ul li a {
    color: #0056b3;
    text-decoration: none;
}
```

**Explications :**
- La balise `body` définit les styles de base pour la page, y compris la police de caractères, la couleur de fond, la couleur du texte, les marges et les padding.
- Les balises `header` et `footer` définissent les styles pour l'en-tête et le pied de page, y compris la couleur de fond, la couleur du texte, l'alignement du texte et le padding.
- La balise `h1` définit la couleur du titre.
- La balise `p` définit l'espacement entre les lignes de texte.
- Les balises `nav ul`, `nav ul li` et `nav ul li a` définissent les styles pour le menu de navigation, y compris la suppression des puces, l'affichage en ligne des éléments de la liste et les styles des liens.

### Étape 3 : Ajouter des Styles aux Images et Vidéos

Ajoutez les styles suivants à votre fichier `styles.css` pour embellir les images et les vidéos :

```css
img {
    max-width: 100%;
    height: auto;
    border: 2px solid #ccc;
    border-radius: 5px;
}

video {
    max-width: 100%;
    height: auto;
    border: 2px solid #ccc;
    border-radius: 5px;
}
```

**Explications :**
- La balise `img` définit les styles pour les images, y compris la largeur maximale, la hauteur automatique, la bordure et le rayon de la bordure.
- La balise `video` définit les styles pour les vidéos, y compris la largeur maximale, la hauteur automatique, la bordure et le rayon de la bordure.

### Étape 4 : Ajouter des Styles aux Sections de la Page

Ajoutez les styles suivants à votre fichier `styles.css` pour embellir les sections de la page :

```css
main {
    padding: 2em;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header, footer {
    padding: 1em 0;
    background-color: #333;
    color: #fff;
    text-align: center;
}

header nav ul {
    display: flex;
    justify-content: center;
    padding: 0;
}

header nav ul li {
    margin: 0 1em;
}
```

**Explications :**
- La balise `main` définit les styles pour la section principale de la page, y compris le padding, la couleur de fond, le rayon de la bordure et l'ombre de la boîte.
- Les balises `header` et `footer` ont été mises à jour pour inclure du padding, la couleur de fond, la couleur du texte et l'alignement du texte.
- Les balises `header nav ul` et `header nav ul li` définissent les styles pour le menu de navigation dans l'en-tête, y compris l'affichage en flex, la justification du contenu au centre et la marge des éléments de la liste.

### Étape 5 : Ajouter des Effets de Survol

Ajoutez les styles suivants à votre fichier `styles.css` pour ajouter des effets de survol aux liens :

```css
nav ul li a:hover {
    color: #ff6347;
}

img:hover, video:hover {
    border-color: #ff6347;
}
```

**Explications :**
- La balise `nav ul li a:hover` définit la couleur du texte des liens lorsque l'utilisateur survole avec la souris.
- Les balises `img:hover` et `video:hover` définissent la couleur de la bordure des images et des vidéos lorsque l'utilisateur survole avec la souris.

### Étape 6 : Recherche et Résolution de Problèmes

Pour cette étape, vous allez devoir trouver des solutions par vous-même en utilisant des ressources en ligne. Voici comment procéder :

1. **Identifier le besoin** : Que souhaitez-vous accomplir ? Par exemple, ajouter des animations CSS à votre page web.
2. **Formuler la recherche** : Utilisez un moteur de recherche (comme Google) pour trouver des informations. Par exemple, si vous voulez savoir comment ajouter des animations CSS, recherchez "CSS animations".
3. **Analyser les résultats** : Regardez plusieurs sources pour vérifier les informations. Utilisez des sites fiables comme MDN Web Docs, W3Schools, Stack Overflow, etc.
4. **Tester et appliquer** : Une fois que vous avez trouvé la solution, testez-la dans votre propre projet pour voir si elle fonctionne.

### Exemple de recherche :

Si vous voulez savoir comment ajouter des animations CSS à votre page HTML, vous pouvez rechercher "CSS animations". Vous trouverez des ressources et des exemples de code qui vous montreront comment utiliser les propriétés `@keyframes` et `animation` pour créer des animations.

### Étape 7 : Ajouter des Styles Avancés

Pour cette étape, vous allez ajouter des styles avancés à votre site en utilisant ChatGPT comme ressource. Voici comment procéder :

1. **Formuler la recherche** : Utilisez ChatGPT pour poser des questions spécifiques. Par exemple, vous pouvez demander "Comment créer une grille CSS ?".
2. **Analyser la réponse** : Utilisez les informations fournies par ChatGPT pour comprendre comment créer et structurer une grille CSS.
3. **Tester et appliquer** : Ajoutez la grille CSS à votre fichier HTML en utilisant les informations obtenues.

### Exemple de recherche sur ChatGPT :

Vous pouvez utiliser le lien suivant pour accéder à ChatGPT et poser votre question : [ChatGPT](https://chat.openai.com)

### Conclusion

En suivant ces étapes, vous avez appris à utiliser le CSS pour embellir une page web. Vous avez également appris à rechercher des informations pour résoudre des problèmes par vous-même et à utiliser ChatGPT pour obtenir de l'aide. N'hésitez pas à expérimenter davantage pour améliorer vos compétences en CSS.

## Résultats

Une fois que vous avez terminé toutes les étapes, soumettez votre travail en utilisant le lien suivant : [Lien de soumission des résultats](#)

---