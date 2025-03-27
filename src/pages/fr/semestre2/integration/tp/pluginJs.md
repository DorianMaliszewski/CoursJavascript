---
layout: "layouts/Layout.astro"
title: "Découverte de Three.js pour créer des scènes 3D"
---

# Introduction à Three.js 🧱🎮

**Three.js** est une bibliothèque JavaScript qui permet de créer des **scènes 3D interactives** dans un navigateur web.  
C’est une passerelle facile d’accès pour s’amuser avec la **3D en ligne**, sans avoir besoin de logiciels complexes comme Blender ou Unity.

Three.js repose sur **WebGL**, une technologie de dessin 3D pour les navigateurs.  
Mais au lieu d’écrire plein de code complexe en WebGL, on utilise Three.js pour simplifier tout ça ✅

---

## 1. Pourquoi utiliser Three.js ? 🤔

Quelques exemples d’usages :
- Créer un jeu ou une animation en 3D 🎮
- Intégrer un objet interactif dans un site web 🧩
- Faire un visualiseur de produits ou de données 🧬
- Apprendre les bases de la modélisation et des scènes 3D 🌍

---

## 2. Mise en place du projet 🧰

Tu peux commencer un projet avec juste un fichier HTML et un lien vers la bibliothèque :

```html
<script src="https://unpkg.com/three@0.160.0/build/three.min.js"></script>
```

Pas besoin d’installation complexe ! Tu peux copier/coller le code et l’ouvrir dans un navigateur.

---

## 3. Structure d’une scène 3D 🏗️

Trois éléments de base sont nécessaires :

| Élément        | Rôle |
|----------------|------|
| `Scene`        | Conteneur général pour les objets 3D |
| `Camera`       | Point de vue pour observer la scène |
| `Renderer`     | Moteur de rendu pour afficher la scène dans la page web |

---

## 4. Premier exemple : un cube qui tourne 🔁

On va créer une scène complète avec un **cube vert qui tourne**.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cube 3D avec Three.js</title>
  <script src="https://unpkg.com/three@0.160.0/build/three.min.js"></script>
  <style>
    body { margin: 0; overflow: hidden; }
    canvas { display: block; }
  </style>
</head>
<body>
  <script>
    // 1. Créer la scène
    const scene = new THREE.Scene();

    // 2. Créer la caméra (angle, ratio, near, far)
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );

    // 3. Créer le moteur de rendu
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 4. Créer un cube
    const geometry = new THREE.BoxGeometry(); // géométrie (forme)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // matière
    const cube = new THREE.Mesh(geometry, material); // assemblage
    scene.add(cube);

    // 5. Placer la caméra
    camera.position.z = 5;

    // 6. Animation
    function animate() {
      requestAnimationFrame(animate); // boucle infinie
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera); // afficher la scène
    }

    animate(); // démarrer l’animation
  </script>
</body>
</html>
```

---

## 5. Exercice 1 – Changer l’apparence du cube 🎨

👉 Change la couleur du cube avec une autre couleur hexadécimale :

```js
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // rouge
```

👉 Essaie aussi d’ajouter un **fil de fer** (wireframe) :

```js
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
```

---

## 6. Exercice 2 – Ajouter d’autres formes 🔺⚽

Three.js permet de créer d’autres géométries très facilement.

### Une sphère :

```js
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x2196f3 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
```

### Un cône :

```js
const cone = new THREE.Mesh(
  new THREE.ConeGeometry(1, 2, 16),
  new THREE.MeshBasicMaterial({ color: 0xffa500 })
);
scene.add(cone);
```

Tu peux aussi changer la **position** d’un objet :

```js
cone.position.set(2, 0, 0); // x, y, z
```

---

## 7. Ajouter de la lumière 💡

Pour rendre les objets plus réalistes, on ajoute de la lumière + un matériau qui la prend en compte :

```js
// Nouveau matériau
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// Lumière directionnelle
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);
```

Et n’oublie pas d’utiliser `MeshStandardMaterial` au lieu de `MeshBasicMaterial`.

---

## 8. Exercice 3 – Créer une mini-scène 🌌

Objectif : une scène avec plusieurs formes, à différentes positions, avec au moins **une lumière**.

Exemple de structure :

- 1 cube au centre
- 1 sphère à gauche
- 1 cône à droite
- Une lumière blanche en haut

---

## 9. Gérer les fenêtres redimensionnées 🖥️📱

Quand on change la taille de la fenêtre, il faut adapter la caméra et le renderer :

```js
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

---

## 10. Exercice Final Noté : Crée ta scène 3D personnalisée 💯

### Instructions :

- Crée une **scène complète**
- Ajoute **au moins 3 formes différentes**
- Utilise des **couleurs variées**
- Intègre **une lumière directionnelle**
- Anime **au moins un objet** (rotation ou déplacement)
- Positionne bien ta **caméra** pour voir toute la scène
- Le code doit être **clair et commenté**

---

## Bonus : Aller plus loin 🌟

Si tu veux explorer encore plus loin :
- Ajouter un **fond étoilé**
- Charger des **textures**
- Importer un modèle 3D `.glb` ou `.obj`
- Gérer la **souris ou le clavier** pour bouger la caméra (OrbitControls)

Mais ça, c’est pour un prochain cours 😁

---
