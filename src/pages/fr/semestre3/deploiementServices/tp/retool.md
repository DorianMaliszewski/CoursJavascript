---
layout: "layouts/Layout.astro"
title: "TP Noté : Utilisation de l'API RESTful avec Retool pour la Gestion des Devoirs"
---

### TP Noté : Utilisation de Firebase et Retool pour la Gestion des Devoirs

#### Objectif
Ce TP a pour objectif de créer une interface de gestion des devoirs en utilisant Firebase comme base de données et Retool comme outil de création d'interface. Vous serez capable de créer, consulter et manipuler des devoirs à travers une interface graphique. Vous travaillerez également en autonomie pour construire une liste de tâches avec Firebase et Retool.

#### Prérequis
- Avoir un compte Firebase et configurer un projet.
- Avoir un compte sur Retool (un compte gratuit suffit).

---

### Étapes à Suivre

#### 1. Préparation

**Création de la structure de données dans Firebase**
- Connectez-vous à votre console Firebase et accédez à la section **Firestore Database**.
- Créez une collection nommée `devoirs` avec les champs suivants pour chaque document :
  - `nom`: string
  - `description`: string
  - `date_debut`: date
  - `date_rendu`: date
  - `matiere`: string
  - `professeur`: string
- Enregistrez quelques exemples de devoirs pour faciliter les tests.

#### 2. Configuration de Retool

**Création d'une Nouvelle Application**
- Connectez-vous à votre compte Retool.
- Cliquez sur **Create new** et sélectionnez **App** pour créer une nouvelle application.

#### 3. Connexion à Firebase

**Création d'une Ressource Firebase**
- Dans le panneau de gauche, cliquez sur **Resource** et sélectionnez **Create new resource**.
- Choisissez **Firebase** comme type de ressource.
- Configurez la ressource en ajoutant l'ID de votre projet Firebase et les informations d'authentification nécessaires.
- Enregistrez la ressource.

#### 4. Création de l'Interface de Gestion des Devoirs

**Affichage des Devoirs**
- Dans votre application Retool, ajoutez un composant **Table** à partir du panneau de composants sur la gauche.
- Configurez la table pour qu'elle utilise les données provenant de Firebase.
  - Cliquez sur la table et allez dans l'onglet **Data**.
  - Dans **Data source**, sélectionnez votre ressource Firebase et configurez la requête pour récupérer tous les documents de la collection `devoirs`.

**Ajout de Devoirs**
- Ajoutez un bouton **Ajouter un devoir** à votre interface.
- Ajoutez un formulaire avec les champs nécessaires (nom, description, date de début, date de rendu, matière, professeur).
- Configurez le bouton pour envoyer une requête `add` à Firebase avec les données du formulaire, en ajoutant un nouveau document dans la collection `devoirs`.

**Mise à Jour et Suppression de Devoirs**
- Pour chaque ligne de la table des devoirs, ajoutez des boutons **Éditer** et **Supprimer**.
  - **Éditer** : Configurez le bouton pour ouvrir un formulaire pré-rempli avec les informations du devoir sélectionné et envoyer une requête `update` à Firebase pour mettre à jour le document.
  - **Supprimer** : Configurez le bouton pour envoyer une requête `delete` à Firebase pour supprimer le devoir sélectionné.

#### 5. Création d'une To-Do List (Autonomie)
- Créez une nouvelle collection dans Firebase nommée `todo`.
- Conservez une structure simple avec des champs comme `tache`: string et `statut`: boolean.
- Dans Retool, créez un outil pour ajouter des tâches à la liste de tâches et une interface pour les afficher et les mettre à jour.

### Conclusion
En suivant ces étapes, vous serez en mesure de créer une interface de gestion des devoirs complète avec Firebase et Retool, en manipulant les devoirs et en réalisant une liste de tâches en autonomie.

---

#### Critères d'Évaluation

**Barème**
- Suivi avec accompagnement pour les devoirs : 5 points
- Travail autonome pour la To-Do List : 15 points, répartis comme suit :
  - Ajout des tâches : 5 points
  - Lecture et affichage des tâches : 5 points
  - Qualité visuelle et organisation de l'interface : 5 points

**Ressources Supplémentaires**
- Documentation Firebase
- Documentation officielle de Retool

Bonne chance !
