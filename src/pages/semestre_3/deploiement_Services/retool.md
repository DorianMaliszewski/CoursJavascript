---
layout: "layouts/Layout.astro"
title: "TP Noté : Utilisation de l'API RESTful avec Retool pour la Gestion des Devoirs"
type : "tp"
---

# TP — Gestion de stock de tee-shirts avec Retool + Firebase (Firestore)

> Objectif : construire une app d’admin en **Retool** connectée à **Firestore** pour gérer un catalogue de tee-shirts et des promotions (globales, par marque, ou par produit), avec une **UI plaisante** (header + pages).  
> Livrable : app Retool fonctionnelle + mini-rapport (captures et explications) + barème en fin de document.

---

## 0) Pré-requis

- Un projet **Firebase** avec **Cloud Firestore (mode production)**.
- Une application web Firebase (pour récupérer la config).
- Un compte **Retool** (Cloud ou Self-hosted).
- (Option) **Firebase Auth** si vous voulez restreindre l’accès (hors scope minimal du TP).

---

## 1) Modèle de données Firestore

### Collections et champs

**`teeshirts`** (collection)
- `nom`: string (obligatoire)
- `marque`: string (obligatoire)
- `taille`: string (ex: "XS" | "S" | "M" | "L" | "XL")
- `description`: string
- `couleurs`: array\<string> (ex: ["noir","blanc"])
- `stock`: number (int, défaut 0)
- `prix`: number (optionnel, pour voir l’impact des promos)

**`promos`** (collection)
- `nom`: string (obligatoire)
- `reduction_percent`: number (0–100)
- `date_debut`: timestamp
- `date_fin`: timestamp
- `scope`: object
  - `type`: "global" | "marque" | "produit"
  - `marque`: string | null (si type="marque")
  - `produit_id`: string | null (id d’un doc `teeshirts`, si type="produit")

### Exemples de documents

**`teeshirts/`**
```json
{
  "nom": "Classic Tee",
  "marque": "AlphaWear",
  "taille": "M",
  "description": "Coton bio 180g",
  "couleurs": ["noir", "blanc"],
  "stock": 25,
  "prix": 19.9
}
```

**`promos/`**
```json
{
  "nom": "Rentrée",
  "reduction_percent": 15,
  "date_debut": {"_seconds": 1735603200, "_nanoseconds": 0},
  "date_fin":   {"_seconds": 1736208000, "_nanoseconds": 0},
  "scope": { "type": "marque", "marque": "AlphaWear", "produit_id": null }
}
```

---

## 2) (Option) Règles de sécurité Firestore (dev simple)

> Pour le TP, vous pouvez ouvrir en lecture/écriture (à éviter en prod) ou utiliser un service account côté Retool.  
> **Dev rapide non sécurisé** :
```
// Firestore Security Rules (dev uniquement !)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // NE PAS UTILISER EN PROD
    }
  }
}
```

---

## 3) Connexion Firebase dans Retool

1. **Resources > Create new** > type **Firestore**.
2. Renseigner la **config** Firebase (Project ID, service account si Admin SDK) ou utiliser la ressource **Firestore native** de Retool.
3. Tester la connexion.

> Alternative (REST) : ressource **REST API** vers `https://firestore.googleapis.com/v1/projects/<PROJECT_ID>/databases/(default)/documents/` (plus verbeux).  
> Recommandé : **ressource Firestore native** (plus simple pour CRUD).

---

## 4) Architecture de l’app Retool (Header + Pages)

### Header global (dans un “App Frame” ou répliqué)
- **Title**: “TeeShop Admin”
- **Tabs/Buttons**:
  - `Catalogue`
  - `Promotions`
  - `Tableau de bord`
  - Bouton primaire “+ Produit” (ouvre un **Modal** global de création)
- Style: fond clair, icône, espaces, cohérence typographique.

### Pages / Vues
1. **Catalogue**
   - **Filtres** (colonne gauche) :
     - Input recherche par `nom`
     - Select `marque`
     - Select `taille`
     - MultiSelect `couleurs`
   - **Table** `teeshirts` (colonne droite) : colonnes clés + actions par ligne (Éditer / Supprimer)
   - **Actions globales** :
     - Bouton “+ Produit” (même que header)
   - **Modal Éditer Produit** (form autorempli)
2. **Promotions**
   - Table `promos` : nom, réduction, période, scope
   - Boutons: “+ Promotion”, Éditer, Supprimer
   - **Modal Create/Edit Promo** avec champs + validation scope
3. **Tableau de bord**
   - Cards (KPI) : nb produits, stock total, nb promos actives
   - Graphiques (option) : stock par marque, répartition tailles
   - Liste “Promos actives aujourd’hui”

---

## 5) Requêtes Retool (Firestore) — Catalogue

> Noms des queries entre `[]`.

### Lire la liste des tee-shirts
- **[getTees]** (Firestore > Collection: `teeshirts`)
- Filtres (Transformer côté Table ou requêtes paramétrées) :
```js
// Transformer d’une Table (si vous ramenez tout et filtrez côté client) :
const rows = data; // data = docs Firestore
const q = {{ searchInput.value?.toLowerCase() || "" }};
const marque = {{ selectMarque.value || "" }};
const taille = {{ selectTaille.value || "" }};
const couleurs = {{ multiselectCouleurs.value || [] }};

return rows.filter(r => {
  const okQ = !q || (r.nom || "").toLowerCase().includes(q);
  const okM = !marque || r.marque === marque;
  const okT = !taille || r.taille === taille;
  const okC = !couleurs.length || (r.couleurs || []).some(c => couleurs.includes(c));
  return okQ && okM && okT && okC;
});
```

### Créer un tee-shirt
- **[createTee]** (Firestore > Add doc)
- Collection: `teeshirts`
- Body (depuis le formulaire) :
```js
{
  nom: {{ formTee.nom.value }},
  marque: {{ formTee.marque.value }},
  taille: {{ formTee.taille.value }},
  description: {{ formTee.description.value }},
  couleurs: {{ formTee.couleurs.value }}, // array
  stock: {{ Number(formTee.stock.value) || 0 }},
  prix: {{ Number(formTee.prix.value) || null }}
}
```
- **On Success**: `getTees.trigger(); modalCreateTee.close();`

### Mettre à jour un tee-shirt
- **[updateTee]** (Firestore > Update doc)
- Document path: `teeshirts/{{ tableTees.selectedRow.data.id }}`
- Body: même structure que création, avec valeurs du **formEditTee**.
- **On Success**: refresh + close modal.

### Supprimer un tee-shirt
- **[deleteTee]** (Firestore > Delete doc)
- Path: `teeshirts/{{ tableTees.selectedRow.data.id }}`
- Confirm dialog avant exécution.

---

## 6) Requêtes Retool — Promotions

### Lire promos
- **[getPromos]** (Firestore > Collection: `promos`)

### Créer / Éditer une promo
- **[createPromo]** (Add doc) ou **[updatePromo]** (Update doc)
- Body :
```js
{
  nom: {{ formPromo.nom.value }},
  reduction_percent: {{ Number(formPromo.reduction.value) }},
  date_debut: {{ formPromo.dateDebut.value }}, // Retool Date -> Firestore Timestamp auto
  date_fin: {{ formPromo.dateFin.value }},
  scope: {
    type: {{ selectScope.value }},
    marque: {{ selectScope.value === "marque" ? selectMarquePromo.value : null }},
    produit_id: {{ selectScope.value === "produit" ? selectProduitPromo.value?.id : null }}
  }
}
```
- **Validation côté composant** (désactiver submit si invalide) :
```js
// formPromo.submitDisabled
const t = {{ selectScope.value }};
if (t === "marque" && !{{ selectMarquePromo.value }}) return true;
if (t === "produit" && !{{ selectProduitPromo.value }}) return true;
const r = Number({{ formPromo.reduction.value }});
if (isNaN(r) || r < 0 || r > 100) return true;
const d1 = new Date({{ formPromo.dateDebut.value }});
const d2 = new Date({{ formPromo.dateFin.value }});
if (!(d1 < d2)) return true;
return false;
```

### Supprimer une promo
- **[deletePromo]** (Firestore > Delete doc)
- Path: `promos/{{ tablePromos.selectedRow.data.id }}`

---

## 7) Application des promotions (calcul affiché)

> On calcule un **prix affiché** (sans modifier le doc) dans la Table/Detail produit.

### Query utilitaire — Promos actives aujourd’hui
- **[getActivePromos]** (Firestore > `promos` + filtre côté client)
```js
// Transformer pour ne garder que les promos actives aujourd’hui
const now = new Date();
return data.filter(p => {
  const d1 = p.date_debut ? new Date(p.date_debut) : null;
  const d2 = p.date_fin ? new Date(p.date_fin) : null;
  const inWindow = (!d1 || d1 <= now) && (!d2 || now <= d2);
  return inWindow;
});
```

### Fonction JS (Temporary State ou JS Query) — meilleur prix
```js
// getBestPrice(tee, activePromos)
function getBestPrice(tee, promos) {
  if (!tee?.prix) return null;
  let best = { price: tee.prix, applied: null };

  promos.forEach(p => {
    const type = p.scope?.type;
    let match = false;
    if (type === "global") match = true;
    if (type === "marque" && p.scope?.marque === tee.marque) match = true;
    if (type === "produit" && p.scope?.produit_id === tee.id) match = true;

    if (match) {
      const discounted = Number((tee.prix * (1 - (p.reduction_percent || 0)/100)).toFixed(2));
      if (discounted < best.price) best = { price: discounted, applied: p };
    }
  });

  return best; // { price, applied }
}
```

### Utilisation dans la Table `teeshirts`
- Colonne calculée **“Prix affiché”** :
```js
const bp = getBestPrice(currentRow, {{ getActivePromos.data }});
return bp?.price ?? currentRow.prix ?? "-";
```
- Colonne **“Promo appliquée”** :
```js
const bp = getBestPrice(currentRow, {{ getActivePromos.data }});
return bp?.applied ? `${bp.applied.nom} (-${bp.applied.reduction_percent}%)` : "—";
```

> **Simplification si trop dur** : ne gérer que `scope.type = "global"` (ou global + marque), ignorer “produit”.

---

## 8) UI/UX recommandations (Retool)

- **Header** : Container + Title + Tabs (Button Group) + bouton primaire “+ Produit”.
- **Catalogue** :
  - Two-column layout (Container split).
  - Filtres groupés avec bordures douces, placeholders, bouton Reset.
  - Table avec colonnes: Nom, Marque, Taille, Couleurs, Stock, Prix, Prix affiché, Promo appliquée, Actions.
  - **Actions** par ligne : `Éditer` (modal pré-rempli), `Supprimer` (confirm).
  - **Modal Create/Edit** : champs requis mis en évidence, validation (prix ≥ 0, stock ≥ 0).
- **Promotions** :
  - Table : Nom, %Réduc, Début, Fin, Scope (badge: Global | Marque: X | Produit: #id/nom).
  - Form Promo :
    - `Select scope`: si `global` → masquer marque/produit.
    - si `marque` → afficher `selectMarquePromo`.
    - si `produit` → afficher `selectProduitPromo` (autocomplete sur `teeshirts`).
- **Tableau de bord** :
  - 3 Cards KPI : nb produits, stock total (sum), nb promos actives.
  - 1 Bar chart : stock par `marque`.
  - 1 Pie chart : répartition par `taille`.
  - Table mini : promos actives (nom, % et fin).

---

## 9) Queries Dashboard (exemples)

### KPIs (JS à partir de `getTees.data` et `getActivePromos.data`)
```js
// kpiNbProduits
return {{ getTees.data.length }};

// kpiStockTotal
return {{ getTees.data.reduce((s, r) => s + (Number(r.stock)||0), 0) }};

// kpiPromosActives
return {{ getActivePromos.data.length }};
```

### Dataset “stock par marque”
```js
const map = {};
({{ getTees.data }} || []).forEach(t => {
  map[t.marque] = (map[t.marque] || 0) + (Number(t.stock)||0);
});
return Object.entries(map).map(([marque, stock]) => ({ marque, stock }));
```

---

## 10) Données de test (seed rapide)

### Produits
```json
[
  {"nom":"Classic Tee","marque":"AlphaWear","taille":"M","description":"Coton bio 180g","couleurs":["noir","blanc"],"stock":25,"prix":19.9},
  {"nom":"Street Tee","marque":"UrbanWave","taille":"L","description":"Oversize","couleurs":["gris"],"stock":12,"prix":24.5},
  {"nom":"Sport Tee","marque":"FitMax","taille":"S","description":"Respirant","couleurs":["bleu","noir"],"stock":30,"prix":29.0}
]
```

### Promotions
```json
[
  {"nom":"Global -10%","reduction_percent":10,"date_debut":"2025-09-01T00:00:00Z","date_fin":"2025-10-31T23:59:59Z","scope":{"type":"global","marque":null,"produit_id":null}},
  {"nom":"Alpha -15%","reduction_percent":15,"date_debut":"2025-09-10T00:00:00Z","date_fin":"2025-09-30T23:59:59Z","scope":{"type":"marque","marque":"AlphaWear","produit_id":null}}
]
```

> Vous pouvez coller ces objets via des **Query JSON** dans Retool et boucler pour créer les docs, ou ajouter à la main.

---

## 11) Multi-pages dans Retool

- Soit **plusieurs apps** (Catalogue / Promotions / Dashboard) avec un **Header commun** et navigation par liens.
- Soit **une app** avec **Tabs** ou **View containers** + **URL Params** (ex: `?page=promos`) :
```js
// Au chargement, sélectionner l’onglet depuis l’URL
const p = utils.getUrlParam("page") || "catalogue";
tabsMain.setValue(p);
```

---

## 13) Chemin “simplifié” si c’est trop dur

- Ignorer `scope.type="produit"`.
- Conserver uniquement `global` **ou** `global + marque`.
- Ne pas afficher le “Prix affiché” (ou l’afficher seulement pour `global`).

---

## 15) Barème ( /20 )

- **Modèle de données & Connexion Firestore** — **5 pts**
  - Collections `teeshirts` et `promos` bien créées (1)
  - Champs conformes (1)
  - Ressource Firestore connectée et testée (1)
- **Catalogue** — **5 pts**
  - Liste + filtres fonctionnels (2)
  - Création avec validation (1.5)
  - Édition (1.5)
  - Suppression avec confirmation (1)
- **Promotions** — **5 pts**
  - Liste + création/édition/suppression (2.5)
  - Validation dates et pourcentage (1)
  - Gestion scope (global/marque/produit ou version simplifiée expliquée) (1.5)
- **Application des promos au prix affiché** — **2 pts**
  - Calcul correct du meilleur prix et affichage (1.5)
  - Indication de la promo appliquée (0.5)
- **UI/UX & Navigation** — **3 pts**
  - Header propre + pages/tabs cohérents (1)
  - Modals et toasts/confirmations (2)

> **Tolérance** : si la version simplifiée est choisie (ex: pas de scope “produit”), **ne pénaliser** que la partie correspondante du barème.

---


- Travail autonome pour la To-Do List : 15 points, répartis comme suit :
  - Ajout des tâches : 5 points
  - Lecture et affichage des tâches : 5 points
  - Qualité visuelle et organisation de l'interface : 5 points

**Ressources Supplémentaires**
- Documentation Firebase
- Documentation officielle de Retool

Bonne chance !
