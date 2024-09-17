---
layout: "layouts/Layout.astro"
title: "CSS > Grid"
---

# Les Grid

## Introduction à CSS Grid

CSS Grid est un système de disposition bidimensionnel qui permet de créer des mises en page complexes et flexibles. Il introduit une nouvelle façon de concevoir des mises en page web, en permettant un contrôle précis sur les lignes et les colonnes.

### Principes fondamentaux de CSS Grid :

- **Conteneur Grid** : Un élément qui définit un contexte de grille en appliquant la propriété `display: grid`.
- **Lignes et Colonnes** : CSS Grid permet de définir explicitement des lignes et des colonnes dans le conteneur de grille.
- **Espacement** : Les espaces entre les lignes et les colonnes peuvent être définis avec `grid-gap` ou ses variantes (`grid-row-gap`, `grid-column-gap`).
- **Placement d'éléments** : Les éléments peuvent être placés dans la grille en utilisant des propriétés telles que `grid-row`, `grid-column`, `grid-area`.

## Création d'une grille de base

Pour créer une grille de base, vous pouvez utiliser la propriété `display: grid` sur le conteneur de grille. Vous pouvez également définir le nombre de colonnes et de lignes ainsi que leur taille.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px; /* Trois colonnes de largeur égale */
  grid-template-rows: 50px 50px; /* Deux lignes de hauteur égale */
}
```

## Placement des éléments dans la grille

Les éléments peuvent être placés dans la grille en spécifiant les lignes et les colonnes qu'ils doivent occuper à l'aide des propriétés `grid-column` et `grid-row`.

```css
.item {
  grid-column: 1 / 3; /* occupe les colonnes 1 à 3 */
  grid-row: 1 / 2; /* occupe la ligne 1 */
}
```

## Grilles automatiques avec CSS Grid

CSS Grid propose également des fonctionnalités pour créer des grilles automatiques, où le navigateur détermine automatiquement le nombre de colonnes et/ou de lignes en fonction du contenu.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* Crée des colonnes automatiques de 100px minimum et 1 fraction flexible */
}
```

## Alignement et espacement avec CSS Grid

CSS Grid offre des fonctionnalités puissantes pour l'alignement et l'espacement des éléments dans la grille. Vous pouvez utiliser les propriétés `justify-content` et `align-items` pour aligner les éléments, ainsi que `grid-gap` pour définir l'espacement entre eux.

```css
.container {
  display: grid;
  justify-content: center; /* Centre les éléments horizontalement */
  align-items: center; /* Centre les éléments verticalement */
  grid-gap: 20px; /* Espacement entre les éléments de la grille */
}
```

## Media Queries avec CSS Grid

Comme avec d'autres fonctionnalités CSS, les Media Queries peuvent être utilisées avec CSS Grid pour créer des mises en page réactives et adaptatives. Par exemple, vous pouvez modifier le nombre de colonnes en fonction de la taille de l'écran.

```css
@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr; /* Une colonne pour les petits écrans */
  }
}
```

## Conclusion

CSS Grid offre une flexibilité et un contrôle puissants pour la création de mises en page web complexes et réactives. En combinant les fonctionnalités de CSS Grid avec d'autres outils de mise en page CSS, comme Flexbox et les Media Queries, les développeurs web peuvent créer des interfaces utilisateur modernes et dynamiques.
