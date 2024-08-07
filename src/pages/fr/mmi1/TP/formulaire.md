---
layout: "layouts/Layout.astro"
title: "TP Formulaires pour Étudiants de Première Année en Informatique"
---

# TP 3 : Formulaires 

## Objectifs

1. Apprendre à créer des formulaires en HTML.
2. Comprendre l'importance des différents éléments de formulaire.
3. Utiliser le CSS pour styliser un formulaire.
4. Ajouter un formulaire à la page de contact et le rendre fonctionnel et esthétique.

## Instructions

### Étape 1 : Ajouter un Formulaire à la Page de Contact

Modifiez votre fichier `contact.html` pour ajouter un formulaire de contact. Ajoutez le code HTML suivant dans la section `<main>` de votre fichier `contact.html` :

```html
<main>
    <h1>Contactez-moi</h1>
    <form action="#" method="post">
        <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="subject">Sujet :</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        <div>
            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div>
            <button type="submit">Envoyer</button>
        </div>
    </form>
</main>
```

**Explications :**
- La balise `<form>` crée un formulaire et définit l'action (ce qui se passe quand le formulaire est soumis) et la méthode (comment les données sont envoyées).
- Les balises `<label>` et `<input>` créent des champs de saisie pour le nom, l'email et le sujet.
- La balise `<textarea>` crée un champ de saisie pour le message.
- La balise `<button>` crée un bouton de soumission.

### Étape 2 : Créer un Fichier CSS pour les Formulaires

Créez un fichier CSS appelé `form-styles.css` et liez-le à votre fichier `contact.html` en ajoutant la ligne suivante dans la section `<head>` :

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="form-styles.css">
</head>
```

**Explications :**
- La balise `<link rel="stylesheet" href="form-styles.css">` permet de lier le fichier CSS contenant les styles spécifiques aux formulaires.

### Étape 3 : Styliser le Formulaire

Ajoutez les styles suivants à votre fichier `form-styles.css` :

```css
form {
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form div {
    margin-bottom: 1em;
}

label {
    display: block;
    margin-bottom: .5em;
    color: #333;
}

input, textarea {
    width: 100%;
    padding: .5em;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}

button {
    padding: 0.7em;
    color: #fff;
    background-color: #0056b3;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #004494;
}
```

**Explications :**
- La balise `form` définit les styles de base pour le formulaire, y compris la largeur maximale, le centrage, le padding, la couleur de fond, le rayon de la bordure et l'ombre de la boîte.
- Les balises `form div`, `label`, `input`, `textarea` et `button` définissent les styles pour les différents éléments du formulaire, y compris les marges, le padding, les bordures, les couleurs et les rayons des bordures.

### Étape 4 : Ajouter des Styles de Focus et de Validation

Ajoutez les styles suivants à votre fichier `form-styles.css` pour améliorer l'expérience utilisateur avec des effets de focus et de validation :

```css
input:focus, textarea:focus {
    border-color: #0056b3;
    outline: none;
}

input:invalid, textarea:invalid {
    border-color: #e74c3c;
}

input:valid, textarea:valid {
    border-color: #2ecc71;
}
```

**Explications :**
- Les balises `input:focus` et `textarea:focus` définissent les styles pour les champs de saisie lorsqu'ils sont sélectionnés par l'utilisateur.
- Les balises `input:invalid` et `textarea:invalid` définissent les styles pour les champs de saisie invalides.
- Les balises `input:valid` et `textarea:valid` définissent les styles pour les champs de saisie valides.

### Étape 5 : Ajouter un Message de Confirmation

Modifiez votre fichier `contact.html` pour ajouter un message de confirmation qui s'affichera lorsque le formulaire est soumis. Ajoutez le code HTML suivant après le formulaire :

```html
<div id="confirmation" style="display:none;">
    <p>Merci pour votre message ! Nous vous répondrons dès que possible.</p>
</div>

<script>
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('#confirmation').style.display = 'block';
});
</script>
```

**Explications :**
- La balise `<div id="confirmation" style="display:none;">` crée un message de confirmation qui est initialement caché.
- Le script JavaScript écoute l'événement de soumission du formulaire, empêche le comportement par défaut et affiche le message de confirmation.

### Étape 6 : Ajouter des Champs Optionnels

Ajoutez un champ optionnel au formulaire pour recueillir des informations supplémentaires. Ajoutez le code HTML suivant dans le formulaire existant :

```html
<div>
    <label for="phone">Téléphone (optionnel) :</label>
    <input type="tel" id="phone" name="phone">
</div>
```

**Explications :**
- La balise `<label for="phone">Téléphone (optionnel) :</label>` crée une étiquette pour le champ de saisie du téléphone.
- La balise `<input type="tel" id="phone" name="phone">` crée un champ de saisie pour le numéro de téléphone.

### Conclusion

En suivant ces étapes, vous avez appris à créer et styliser des formulaires en HTML et CSS. Vous avez également ajouté des fonctionnalités interactives pour améliorer l'expérience utilisateur. N'hésitez pas à expérimenter davantage pour améliorer vos compétences en création et stylisation de formulaires.

## Résultats

Une fois que vous avez terminé toutes les étapes, soumettez votre travail en utilisant le lien suivant : [Lien de soumission des résultats](#)

---
