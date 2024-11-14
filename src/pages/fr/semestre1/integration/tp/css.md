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
   - **Rappel** : Cherchez comment organiser une navigation horizontale avec une liste non ordonnée (`ul`) et des éléments de liste (`li`).

---

### Étape 2 : Appliquer des styles de base à la page

1. **Sélecteur `body`** :
   - Appliquez une couleur de fond agréable à la page et choisissez une police lisible.
   - **Rappel** : Utilisez `background-color`, `font-family`, et `color`.

2. **En-tête et navigation** :
   - Ajoutez une couleur de fond sombre à l'en-tête avec un texte clair. Centre le texte et ajoute une marge pour espacer les éléments.
   - **Rappel** : Utilisez `background-color`, `color`, `text-align`, et `padding` pour centrer et espacer les éléments.
   - **Exercice** : Essayez de rendre la navigation réactive en affichant les éléments sous forme de **menu hamburger** sur mobile (utilisez des médias queries).

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

1. **Mise en page avec Flexbox** :
   - Utilisez **Flexbox** pour disposer vos sections (par exemple, une colonne pour le texte et une autre pour l'image).
   - **Exercice** : Utilisez `display: flex` pour organiser vos éléments de manière flexible.
     - Cherchez comment utiliser `flex-direction: row` pour aligner les éléments horizontalement et `justify-content` pour espacer les éléments.
   
2. **Exercice** : Créez une disposition où les images et le texte s'adaptent bien en fonction de la taille de l'écran.
   - **Rappel** : Pensez à utiliser `flex-wrap` pour que les éléments se déplacent sur une nouvelle ligne quand l'espace est insuffisant.

---

### Étape 5 : Ajouter des effets et transitions

1. **Transition sur les liens** :
   - Ajoutez un effet de survol doux aux liens de la navigation. Par exemple, changez leur couleur ou appliquez une transformation quand l'utilisateur survole les éléments.
   - **Rappel** : Cherchez comment utiliser `transition` pour rendre l'effet plus fluide.

2. **Effet de survol sur les images** :
   - Appliquez un effet sur les images lorsque l'utilisateur les survole, comme un zoom ou un changement de bordure.
   - **Rappel** : Utilisez `transform: scale()` pour agrandir l'image au survol.

3. **Exercice** : Créez une animation pour le texte dans l'en-tête, par exemple un effet de décalage du texte au chargement de la page ou un changement de couleur au survol.

---

### Étape 6 : Mise en page avec CSS Grid

1. **Créer une disposition en grille** :
   - Utilisez **CSS Grid** pour organiser des sections de contenu (par exemple, plusieurs projets ou compétences sous forme de cartes).
   - **Exercice** : Créez une grille avec des colonnes qui s'ajustent en fonction de la taille de l'écran (utilisez `grid-template-columns` et `@media`).
   - **Rappel** : Cherchez comment utiliser `grid-gap` pour espacer les éléments et `grid-template-areas` pour personnaliser la disposition.

---

### Étape 7 : Ajouter des sections dynamiques

1. **Carte de projet** :
   - Créez une section qui présente des projets ou des compétences sous forme de cartes avec des images et du texte.
   - **Exercice** : Ajoutez une bordure, une ombre portée, et un effet de survol qui modifie la taille de la carte et sa couleur de fond.
   - **Rappel** : Utilisez `box-shadow`, `border-radius` et `transition` pour donner un effet agréable au survol.

2. **Sections supplémentaires** :
   - Ajoutez une ou deux sections supplémentaires sous forme de **témoignages** ou d'**avis**. Utilisez une mise en page en grille ou en colonne.

---

### Étape 8 : Responsivité et Media Queries

1. **Utilisation des Media Queries** :
   - Faites en sorte que votre page soit responsive. Par exemple, modifiez la disposition des sections pour les petits écrans.
   - **Exercice** : Utilisez `@media` pour adapter les styles selon la taille de l'écran (par exemple, changer la navigation horizontale en une barre verticale sur mobile).
   - **Rappel** : Cherchez comment appliquer des règles CSS spécifiques pour les petits écrans.

---

### Conclusion

Félicitations ! Vous avez maintenant une page web structurée avec un en-tête, un contenu principal, des images, des vidéos, une navigation interactive et des effets visuels. Vous avez également utilisé des techniques avancées comme **Flexbox** et **CSS Grid** pour organiser votre page de manière dynamique et responsive. 

N'oubliez pas de tester votre page sur différents appareils et tailles d'écran pour vous assurer qu'elle s'affiche correctement partout.

Une fois votre page terminée, soumettez-la en suivant les instructions fournies par votre enseignant.


---
