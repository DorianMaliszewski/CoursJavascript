---
layout: "layouts/Layout.astro"
title: "TP CSS pour Étudiants de Première Année en Informatique"
---

# TP 2 : Créer une Page Web Interactif avec CSS

## Objectifs

1. Pratiquer l'application des concepts de base du CSS.
2. Créer une page web dynamique et attrayante en utilisant des sélecteurs, des propriétés et des valeurs CSS.
3. Développer une page structurée avec des images, du texte, et des sections distinctes.
4. Mettre en œuvre des effets visuels, des transitions et une mise en page fluide.

---

### Étape 1 : Structurer la page HTML

1. **Créez un fichier `index.html`** avec la structure suivante :
   - Un en-tête (`header`) avec un titre principal (`h1`) et une navigation (`nav`).
   - Une section principale (`main`) pour le contenu de la page.
   - Un pied de page (`footer`) avec des informations de contact ou des liens sociaux.

2. **Dans l'en-tête**, créez une navigation horizontale (sans formulaire) avec quelques liens fictifs (par exemple, "Accueil", "À propos", "Projets", "Contact").
   - **Rappel** : Organisez la navigation avec une liste non ordonnée (`ul`) et des éléments de liste (`li`).

---

### Étape 2 : Appliquer des styles de base à la page

1. **Sélecteur `body`** :
   - Appliquez une couleur de fond agréable à la page et choisissez une police lisible.
   - **Rappel** : Utilisez `background-color`, `font-family`, et `color`.

2. **En-tête et navigation** :
   - Ajoutez une couleur de fond sombre à l'en-tête avec un texte clair. Centre le texte et ajoute une marge pour espacer les éléments.
   - **Rappel** : Utilisez `background-color`, `color`, `text-align`, et `padding` pour centrer et espacer les éléments.

---

### Étape 3 : Ajouter des images et des vidéos

1. **Sélecteur `img`** :
   - Ajoutez une image dans votre `main` (par exemple, une photo de vous-même ou de votre projet) et assurez-vous qu'elle s'ajuste bien à la taille de son conteneur.
   - **Rappel** : Utilisez `max-width: 100%` pour rendre l'image responsive.

2. **Sélecteur `video`** :
   - Ajoutez une vidéo dans la section `main`. La vidéo peut être une démonstration ou une vidéo d'introduction.
   - **Rappel** : Utilisez `max-width: 100%` et `height: auto` pour que la vidéo soit flexible.

---

### Étape 4 : Organiser le contenu avec Flexbox

Utilisez **Flexbox** pour disposer vos sections de manière flexible. Voici un exemple simple pour aligner les éléments horizontalement avec des espaces égaux entre eux.

```css
.container {
    display: flex;
    flex-direction: row; /* Aligne les éléments horizontalement */
    justify-content: space-between; /* Espace les éléments de manière égale */
    align-items: center; /* Centre verticalement les éléments */
}
```

**Explication des propriétés :**
- `display: flex` active Flexbox sur l’élément.
- `flex-direction: row` aligne les éléments en ligne.
- `justify-content: space-between` distribue l’espace entre les éléments.
- `align-items: center` centre verticalement les éléments.

---

### Étape 5 : Ajouter des effets avec les pseudo-classes

Les **pseudo-classes** permettent de changer les styles lorsqu’un utilisateur interagit avec un élément (exemple : `:hover` pour le survol, `:focus` pour le focus, etc.).

1. **Effet de survol sur les liens** :
   - Utilisez la pseudo-classe `:hover` pour ajouter un effet de transition. Cela adoucit le changement de style au survol. Exemple :

   ```css
   nav a {
       color: #ffffff;
       text-decoration: none;
       transition: color 0.3s ease; /* Transition douce pour le changement de couleur */
   }

   nav a:hover {
       color: #ffa500; /* Changement de couleur au survol */
   }
   ```

   - **Explication** : Le `:hover` est déclenché lorsque l’utilisateur passe la souris sur un élément. Ici, `transition` adoucit le passage de la couleur initiale à celle au survol.

2. **Effet de survol sur les images** :
   - Utilisez `:hover` pour agrandir légèrement les images au survol :

   ```css
   img {
       transition: transform 0.3s ease;
   }

   img:hover {
       transform: scale(1.05); /* Agrandissement au survol */
   }
   ```

---

### Étape 6 (Bonus) : Media Queries pour la Responsivité

Les **Media Queries** permettent d’adapter le style en fonction de la taille de l’écran, rendant votre page responsive. Exemple pour ajuster le layout sur mobile :

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column; /* Empile les éléments en colonne sur les petits écrans */
    }

    nav ul {
        flex-direction: column; /* Modifie la navigation en liste verticale sur mobile */
    }
}
```

**Explication** :
- La media query `@media (max-width: 768px)` applique les styles uniquement si la largeur de l’écran est de 768px ou moins.
- Le `flex-direction: column` passe les éléments d’une disposition en ligne à une disposition en colonne pour faciliter la lecture sur des petits écrans.

---

### Conclusion

Félicitations ! Vous avez appris à structurer une page web avec CSS en utilisant des techniques comme **Flexbox** pour la mise en page, des **pseudo-classes** pour ajouter des effets interactifs, et des **media queries** pour rendre votre page responsive.

Une fois votre page terminée, n'oubliez pas de tester sur différents appareils et tailles d'écran pour vous assurer qu'elle s'affiche correctement partout. Soumettez votre travail en suivant les instructions fournies par votre enseignant.
