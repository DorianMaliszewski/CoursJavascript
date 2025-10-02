---
layout: "layouts/Layout.astro"
title: "TP #2 — Multi-pages, Recherche en liste & Ventes (Retool + Firestore)"
type : "tp"
---

> Énoncé : À partir de votre app du TP précédent, **conservez** tout ce qui existe et **réorganisez** l’interface en **plusieurs pages**. Vous ajoutez uniquement : une page **Recherche** (liste + champ Recherche) et une **nouvelle collection** Firestore pour les **ventes** afin d’alimenter la page **Accueil** en indicateurs et graphiques centrés sur les ventes.

## Pages à produire
- **Accueil** : synthèse **orientée ventes** (indicateurs + graphiques) à partir de `teeshirts`, `promos`, `ventes`.
- **T-shirts** : gestion des tee-shirts (ajout, modification, suppression) **reprise du TP précédent**.
- **Promotions** : gestion des promotions (globales, par marque, par produit) **reprise du TP précédent**.
- **Recherche** : nouvelle page listant les produits en **liste** (pas de tableau) avec **champ Recherche** (sans bouton) qui filtre les résultats.

## Nouvelle collection Firestore : `ventes`
Chaque document représente **une vente**.

**Champs requis**
- `produit_id` : string — id d’un doc `teeshirts`
- `quantite` : number — entier ≥ 1
- `prix_unitaire` : number — prix au moment de la vente (après promo si applicable)
- `total` : number — `quantite * prix_unitaire`
- `date_vente` : timestamp — date/heure UTC de la vente
- `canal` : string — ex. "web", "boutique", "marketplace"
- `marque` : string — recopiée depuis `teeshirts` (facilite l’agrégation)
- `taille` : string — recopiée depuis `teeshirts`
- `promo_appliquee` : object | null
  - `type` : "global" | "marque" | "produit" | null
  - `nom` : string | null
  - `reduction_percent` : number | null

**Champs optionnels**
- `couleurs` : array<string>
- `client_id` : string
- `source` : string

**Exemples**
```
{
  "produit_id": "abc123",
  "quantite": 2,
  "prix_unitaire": 17.91,
  "total": 35.82,
  "date_vente": {"_seconds": 1735603200, "_nanoseconds": 0},
  "canal": "web",
  "marque": "AlphaWear",
  "taille": "M",
  "promo_appliquee": { "type": "marque", "nom": "Rentrée", "reduction_percent": 15 }
}
```
```
{
  "produit_id": "xyz789",
  "quantite": 1,
  "prix_unitaire": 24.5,
  "total": 24.5,
  "date_vente": {"_seconds": 1735858800, "_nanoseconds": 0},
  "canal": "boutique",
  "marque": "UrbanWave",
  "taille": "L",
  "promo_appliquee": null
}
```

## Spécifications de la page **Accueil** (ventes)
**Indicateurs (cards)**
- `Ventes ce mois-ci` : nombre total de ventes réalisées sur le mois courant.
- `CA ce mois-ci` : somme des `total` sur le mois courant.
- `Ventes depuis le 1er janvier` : nombre total de ventes sur l’année en cours.
- `CA année en cours` : somme des `total` sur l’année en cours.
- `Panier moyen ce mois-ci` : `(somme total du mois) / (nombre de ventes du mois)`.
- `% ventes avec promo` : part des ventes du mois avec `promo_appliquee != null`.

**Graphiques (centrés ventes)**
- `Évolution des ventes` (ligne ou barres) : ventes par jour sur les 30 derniers jours.
- `CA par marque` (barres) : somme des `total` regroupée par `marque` sur une période récente (ex. 30 jours).
- `Ventes par marque` (camembert) : répartition **en pourcentage** du **nombre** de ventes par `marque` sur le mois courant.
- `Répartition par taille` (camembert ou barres) : parts des ventes par `taille` sur le mois courant.

## Objectifs du TP
1) Mettre en place la page **Recherche** affichant les produits en **liste** filtrable via un **champ Recherche** (sans bouton).  
2) Créer et utiliser la collection **`ventes`** pour alimenter la page **Accueil** avec des **indicateurs** et des **graphiques** orientés **ventes**.

## Livrables
- Une app Retool avec **quatre pages/onglets** : **Accueil**, **T-shirts**, **Promotions**, **Recherche**.
- La collection **`ventes`** créée selon le **format** ci-dessus et **prise en compte** dans les indicateurs/graphes de la page **Accueil**.
- Un mini-rapport avec **captures d’écran** des quatre pages.
