---
layout: "layouts/Layout.astro"
title: "TP Noté : Utilisation de l'API RESTful avec Retool pour la Gestion des Devoirs"
---

# TP Noté : Utilisation de l'API RESTful avec Retool pour la Gestion des Devoirs

## Objectif

L'objectif de ce TP est de créer une interface de gestion des devoirs en utilisant Retool et l'API RESTful que vous avez développée précédemment. Vous serez capable de voir tous les devoirs, de les filtrer, et de les gérer à travers une interface graphique.

## Prérequis

- Avoir l'API RESTful pour la gestion des devoirs en cours d'exécution.
- Un compte sur Retool (vous pouvez créer un compte gratuit sur [Retool](https://retool.com/)).

## Étapes à Suivre

### 1. Préparation

#### Lancement de l'API

Assurez-vous que votre API est en cours d'exécution. Vous pouvez vérifier cela en testant les différentes routes avec Postman.

### 2. Configuration de Retool

#### Création d'une Nouvelle Application

1. Connectez-vous à votre compte Retool.
2. Cliquez sur "Create new" et sélectionnez "App" pour créer une nouvelle application.

### 3. Connexion à l'API

#### Création d'une Ressource API

1. Dans le panneau de gauche, cliquez sur "Resource" et sélectionnez "Create new resource".
2. Choisissez "REST API" comme type de ressource.
3. Configurez la ressource avec l'URL de base de votre API. Par exemple, si votre API est exécutée sur un serveur à l'adresse `http://<votre-serveur>:3000`, utilisez cette URL. Remplacez `<votre-serveur>` par l'adresse IP ou le nom de domaine de votre serveur.
4. Enregistrez la ressource.

### 4. Création de l'Interface de Gestion des Devoirs

#### Affichage des Devoirs

1. Dans votre application Retool, ajoutez un composant "Table" à partir du panneau de composants sur la gauche.
2. Configurez la table pour qu'elle utilise les données provenant de l'API.

    - Cliquez sur la table et allez dans l'onglet "Data".
    - Dans "Data source", sélectionnez "REST API" et choisissez la ressource que vous avez créée.
    - Configurez la requête pour récupérer tous les devoirs avec `GET /devoirs`.

    Exemple de configuration de la requête :
    ```json
    {
      "method": "GET",
      "url": "/devoirs",
      "headers": {
        "Authorization": "Bearer {{ authToken }}"
      }
    }
    ```

3. Ajoutez un champ de texte et un bouton pour permettre la recherche/filtrage des devoirs par nom de devoir ou matière.

    - Configurez le champ de texte pour saisir les critères de recherche.
    - Configurez le bouton pour déclencher une nouvelle requête à l'API avec les critères de recherche comme paramètres de requête.

#### Ajout de Devoirs

1. Ajoutez un bouton "Ajouter un devoir" à votre interface.
2. Ajoutez un formulaire avec les champs nécessaires (nom, description, date de début, date de rendu, matière, professeur).
3. Configurez le bouton pour envoyer une requête `POST /devoirs` avec les données du formulaire.

    Exemple de configuration de la requête :
    ```json
    {
      "method": "POST",
      "url": "/devoirs",
      "headers": {
        "Authorization": "Bearer {{ authToken }}",
        "Content-Type": "application/json"
      },
      "body": {
        "nom": "{{ form.nom }}",
        "description": "{{ form.description }}",
        "date_debut": "{{ form.date_debut }}",
        "date_rendu": "{{ form.date_rendu }}",
        "matiere": "{{ form.matiere }}",
        "professeur": "{{ form.professeur }}"
      }
    }
    ```

#### Mise à Jour et Suppression de Devoirs

1. Pour chaque ligne de la table des devoirs, ajoutez des boutons "Éditer" et "Supprimer".
2. Configurez le bouton "Éditer" pour ouvrir un formulaire pré-rempli avec les informations du devoir sélectionné et envoyer une requête `PUT /devoirs/:id` avec les données mises à jour.

    Exemple de configuration de la requête :
    ```json
    {
      "method": "PUT",
      "url": "/devoirs/{{ table.selectedRow.data.id }}",
      "headers": {
        "Authorization": "Bearer {{ authToken }}",
        "Content-Type": "application/json"
      },
      "body": {
        "nom": "{{ form.nom }}",
        "description": "{{ form.description }}",
        "date_debut": "{{ form.date_debut }}",
        "date_rendu": "{{ form.date_rendu }}",
        "matiere": "{{ form.matiere }}",
        "professeur": "{{ form.professeur }}"
      }
    }
    ```

3. Configurez le bouton "Supprimer" pour envoyer une requête `DELETE /devoirs/:id` pour supprimer le devoir sélectionné.

    Exemple de configuration de la requête :
    ```json
    {
      "method": "DELETE",
      "url": "/devoirs/{{ table.selectedRow.data.id }}",
      "headers": {
        "Authorization": "Bearer {{ authToken }}"
      }
    }
    ```

### 5. Gestion des Authentifications

1. Ajoutez un formulaire de login à votre application Retool.
2. Configurez le formulaire pour envoyer une requête `POST /login` et stocker le token JWT reçu dans une variable globale `authToken`.

    Exemple de configuration de la requête :
    ```json
    {
      "method": "POST",
      "url": "/login",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "username": "{{ loginForm.username }}",
        "password": "{{ loginForm.password }}"
      }
    }
    ```

3. Utilisez cette variable `authToken` pour les requêtes authentifiées comme montré dans les exemples précédents.

### Conclusion

En suivant ces étapes, vous serez en mesure de créer une interface de gestion des devoirs complète avec Retool, utilisant votre API RESTful pour effectuer des opérations CRUD sur les devoirs.

## Critères d'Évaluation

### Barème

- Connexion et utilisation de l'API RESTful dans Retool : 4 points
- Fonctionnalité complète de l'interface (affichage, ajout, mise à jour, suppression des devoirs) : 4 points
- Gestion correcte de l'authentification et des autorisations : 2 points

## Ressources Supplémentaires

- [Documentation Retool](https://docs.retool.com/docs)
- [Documentation officielle de Node.js](https://nodejs.org/en/docs/)
- [Documentation officielle d'Express.js](https://expressjs.com/)
- [Guide sur les meilleures pratiques de sécurité des API RESTful](https://www.owasp.org/index.php/REST_Security_Cheat_Sheet)

Bonne chance !
