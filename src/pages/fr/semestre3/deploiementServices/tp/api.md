---
layout: "layouts/Layout.astro"
title: "TP Noté : Création d'une API RESTful pour un Système de Devoirs"
---

# TP Noté : Création d'une API RESTful pour un Système de Devoirs

## Objectif

L'objectif de ce TP est de créer une API RESTful en utilisant Node.js, Express, MySQL, CORS et JSON Web Tokens (JWT). L'API doit être compatible avec l'outil de backend Retool et permettre de gérer un système de devoirs.

## Description du Système de Devoirs

L'API doit permettre de gérer les devoirs avec les informations suivantes :
- Nom du devoir
- Description
- Date de début
- Date de rendu (deadline)
- Matière
- Nom du professeur

## Étapes à Suivre

### 1. Préparation de l'Environnement

#### Installation des Outils Nécessaires

Assurez-vous d'avoir Node.js et MySQL installés sur votre machine. Vous pouvez vérifier leur installation avec les commandes suivantes :
```sh
node -v
mysql -V
```

##### Pour installer Node.js et MySQL :

**Windows :**
1. Téléchargez le programme d'installation de Node.js depuis le [site officiel](https://nodejs.org).
2. Téléchargez et installez MySQL Community Server depuis le [site officiel de MySQL](https://dev.mysql.com/downloads/mysql/).

**macOS :**
1. Utilisez Homebrew pour installer Node.js et MySQL :
```sh
brew install node
brew install mysql
```

**Linux (Ubuntu) :**
1. Utilisez le gestionnaire de paquets `apt` :
```sh
sudo apt update
sudo apt install nodejs npm
sudo apt install mysql-server
```

### 2. Création de la Base de Données MySQL

Créez une base de données MySQL nommée `devoirs` et une table `devoir` avec les champs suivants :
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `nom` VARCHAR(255) NOT NULL
- `description` TEXT
- `date_debut` DATE
- `date_rendu` DATE
- `matiere` VARCHAR(255)
- `professeur` VARCHAR(255)

Exécutez cette commande SQL pour créer la table :
```sql
CREATE DATABASE devoirs;
USE devoirs;
CREATE TABLE devoir (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  date_debut DATE,
  date_rendu DATE,
  matiere VARCHAR(255),
  professeur VARCHAR(255)
);
```

### 3. Initialisation du Projet Node.js

Créez un nouveau projet Node.js et installez les dépendances nécessaires :
```sh
mkdir api-devoirs
cd api-devoirs
npm init -y
npm install express mysql cors jsonwebtoken bcrypt dotenv
```

### 4. Création du Fichier de Configuration `.env`

Créez un fichier `.env` à la racine de votre projet et ajoutez les variables d'environnement suivantes :
```env
SECRET_KEY=yourSecretKey
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=devoirs
```

### 5. Mise en Place du Serveur Express

Créez un fichier `app.js` et configurez le serveur Express avec les modules nécessaires.

### 6. Mise en Place de l'Authentification

#### Routes de Registration et Login

Ajoutez les routes de registration et login pour gérer l'authentification des utilisateurs :
```js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

const users = []; // Utiliser une base de données réelle en production

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('Utilisateur créé');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Identifiants invalides');
  }
});
```

### 7. Routes CRUD pour les Devoirs

Ajoutez les routes pour gérer les devoirs. Ces routes doivent être protégées par JWT.

#### Middleware d'Authentification

Ajoutez un middleware pour vérifier les tokens JWT :
```js
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send('Accès refusé');

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send('Token invalide');
    req.user = decoded;
    next();
  });
};
```

#### Routes CRUD pour les Devoirs

Ajoutez les routes suivantes dans votre fichier `app.js` pour gérer les devoirs :

1. Récupérer tous les devoirs :
```js
app.get('/devoirs', authenticateToken, (req, res) => {
  connection.query('SELECT * FROM devoir', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
```

2. Créer un nouveau devoir :
```js
app.post('/devoirs', authenticateToken, (req, res) => {
  const devoir = req.body;
  connection.query('INSERT INTO devoir SET ?', devoir, (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, ...devoir });
  });
});
```

3. Mettre à jour un devoir existant :
```js
app.put('/devoirs/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  const updatedDevoir = req.body;
  connection.query('UPDATE devoir SET ? WHERE id = ?', [updatedDevoir, id], (err) => {
    if (err) throw err;
    res.json(updatedDevoir);
  });
});
```

4. Supprimer un devoir :
```js
app.delete('/devoirs/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM devoir WHERE id = ?', id, (err) => {
    if (err) throw err;
    res.status(204).send();
  });
});
```

### Exercice

1. Configurez une base de données MySQL et créez la table `devoir` avec les champs spécifiés.
2. Établissez une connexion à la base de données MySQL depuis votre application Node.js.
3. Créez les routes CRUD pour la gestion des devoirs.
4. Ajoutez l'authentification JWT et protégez les routes.
5. Utilisez Postman pour tester les routes `POST /register`, `POST /login`, `GET /devoirs`, `POST /devoirs`, `PUT /devoirs/:id`, `DELETE /devoirs/:id`.

### Exemples Utiles

#### Exemple de JSON pour Ajouter un Devoir

Pour ajouter un devoir, vous pouvez envoyer un JSON via un outil comme Postman :

Exemple de JSON :
```json
{
  "nom": "Devoir de Mathématiques",
  "description": "Résoudre les exercices du chapitre 3",
  "date_debut": "2024-08-01",
  "date_rendu": "2024-08-10",
  "matiere": "Mathématiques",
  "professeur": "M. Dupont"
}
```

Postman est un outil permettant de tester et de manipuler des API. Vous pouvez le télécharger et l'utiliser pour envoyer des requêtes à votre serveur. [Téléchargez Postman](https://www.postman.com/downloads/)

#### Exemple de Route `PUT` pour Mettre à Jour un Devoir

```js
app.put('/devoirs/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  const updatedDevoir = req.body;
  connection.query('UPDATE devoir SET ? WHERE id = ?', [updatedDevoir, id], (err) => {
    if (err) throw err;
    res.json(updatedDevoir);
  });
});
```

## Critères d'Évaluation

### Barème

- Fonctionnalité complète de l'API (routes CRUD, authentification JWT, gestion des CORS) : 5 points
- Structure et organisation du code : 2 points
- Utilisation correcte des variables d'environnement : 1 point
- Qualité de la documentation et des commentaires dans le code : 1 point
- Test des routes avec Postman (screenshots ou démonstration) : 1 point

## Ressources Supplémentaires

- [Documentation officielle de Node.js](https://nodejs.org/en/docs/)
- [Documentation officielle d'Express.js](https://expressjs.com/)
- [Guide sur les meilleures pratiques de sécurité des API RESTful](https://www.owasp.org/index.php/REST_Security_Cheat_Sheet)
- [Tutoriel sur l'utilisation de Postman](https://learning.postman.com/docs/getting-started/introduction/)

Bonne chance !
