---
layout: "layouts/Layout.astro"
title: "CSS > Flexbox"
---

# Les Flexbox

## Introduction à Flexbox

Flexbox est un modèle de disposition unidimensionnel qui permet de créer des mises en page flexibles et dynamiques. Il offre un contrôle puissant sur la disposition des éléments à l'intérieur d'un conteneur, en alignant, en espaçant et en réorganisant les éléments de manière intuitive.

### Principes fondamentaux de Flexbox :

- **Conteneur Flex** : Un élément qui définit un contexte de flexbox en appliquant la propriété `display: flex`.
- **Axe Principal et Transversal** : Dans Flexbox, il y a toujours un axe principal et un axe transversal. Par défaut, l'axe principal est horizontal (de gauche à droite) et l'axe transversal est vertical (de haut en bas).
- **Alignement** : Les éléments flexibles peuvent être alignés le long de l'axe principal ou transversal à l'aide des propriétés `justify-content` et `align-items`.
- **Espacement** : L'espacement entre les éléments flexibles peut être défini avec la propriété `margin`, et l'espacement entre les conteneurs flexibles peut être défini avec `justify-content` et `align-items`.

## Création d'un conteneur Flex

Pour créer un conteneur Flex, utilisez la propriété `display: flex` sur l'élément parent.

```css
.container {
  display: flex;
}
```

## Définition de la direction principale

La direction principale détermine l'orientation des éléments flexibles à l'intérieur du conteneur flex. Par défaut, la direction principale est horizontale (de gauche à droite).

```css
.container {
  display: flex;
  flex-direction: row; /* Direction horizontale (par défaut) */
}
```

## Alignement des éléments flexibles

Les éléments flexibles peuvent être alignés le long de l'axe principal et transversal à l'intérieur du conteneur flex.

```css
.container {
  display: flex;
  justify-content: center; /* Centre les éléments horizontalement */
  align-items: center; /* Centre les éléments verticalement */
}
```

## Espacement entre les éléments flexibles

L'espacement entre les éléments flexibles peut être défini à l'aide de la propriété `margin`.

```css
.item {
  margin: 10px; /* Espacement de 10 pixels autour de chaque élément */
}
```

## Réorganisation des éléments flexibles

Flexbox offre des fonctionnalités puissantes pour réorganiser les éléments flexibles en fonction de l'espace disponible et des besoins de mise en page.

```css
.container {
  display: flex;
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne si nécessaire */
}
```

## Media Queries avec Flexbox

Les Media Queries peuvent être utilisées avec Flexbox pour créer des mises en page réactives et adaptatives.

```css
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column; /* Change la direction en colonne pour les petits écrans */
  }
}
```

## Conclusion

Flexbox est un outil puissant pour créer des mises en page flexibles et réactives. En comprenant les principes fondamentaux de Flexbox et en utilisant ses fonctionnalités avancées telles que l'alignement, l'espacement et la réorganisation, les développeurs web peuvent créer des interfaces utilisateur modernes et dynamiques.
