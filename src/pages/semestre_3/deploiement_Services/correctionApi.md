---
layout: "layouts/Layout.astro"
title: "Correction du TP Noté : Création d'une API RESTful pour un Système de Devoirs"
---

# Correction du TP Noté : Création d'une API RESTful pour un Système de Devoirs

## Objectif

L'objectif de ce TP était de créer une API RESTful en utilisant Node.js, Express, MySQL, CORS et JSON Web Tokens (JWT). L'API devait être compatible avec l'outil de backend Retool et permettre de gérer un système de devoirs.

## Description du Système de Devoirs

L'API devait permettre de gérer les devoirs avec les informations suivantes :
- Nom du devoir
- Description
- Date de début
- Date de rendu (deadline)
- Matière
- Nom du professeur

## Correction des Étapes

### 1. Préparation de l'Environnement

Assurez-vous que les outils nécessaires sont installés et correctement configurés. Vérifiez les versions de Node.js et MySQL :
```sh
node -v
mysql -V
```

### 2. Création de la Base de Données MySQL

Créez la base de données et la table `devoir` avec les champs spécifiés. Voici la commande SQL pour créer la table :

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

Initialisez le projet et installez les dépendances nécessaires :
```sh
mkdir api-devoirs
cd api-devoirs
npm init -y
npm install express mysql cors jsonwebtoken bcrypt dotenv
```

### 4. Création du Fichier de Configuration `.env`

Créez un fichier `.env` avec les variables d'environnement suivantes :
```env
SECRET_KEY=yourSecretKey
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=devoirs
```

### 5. Mise en Place du Serveur Express

Configurez le serveur Express dans un fichier `app.js` :
```js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send('Accès refusé');

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send('Token invalide');
    req.user = decoded;
    next();
  });
};

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

app.get('/devoirs', authenticateToken, (req, res) => {
  connection.query('SELECT * FROM devoir', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/devoirs', authenticateToken, (req, res) => {
  const devoir = req.body;
  connection.query('INSERT INTO devoir SET ?', devoir, (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, ...devoir });
  });
});

app.put('/devoirs/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  const updatedDevoir = req.body;
  connection.query('UPDATE devoir SET ? WHERE id = ?', [updatedDevoir, id], (err) => {
    if (err) throw err;
    res.json(updatedDevoir);
  });
});

app.delete('/devoirs/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM devoir WHERE id = ?', id, (err) => {
    if (err) throw err;
    res.status(204).send();
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${process.env.PORT}/`);
});
```

### Test des Routes avec Postman

Utilisez Postman pour tester les routes suivantes :
- `POST /register` pour créer un nouvel utilisateur.
- `POST /login` pour obtenir un token JWT.
- `GET /devoirs` pour récupérer tous les devoirs (utilisez le token JWT dans le header Authorization).
- `POST /devoirs` pour créer un nouveau devoir (utilisez le token JWT dans le header Authorization).
- `PUT /devoirs/:id` pour mettre à jour un devoir existant (utilisez le token JWT dans le header Authorization).
- `DELETE /devoirs/:id` pour supprimer un devoir (utilisez le token JWT dans le header Authorization).

### Exemples Utiles

#### Exemple de JSON pour Ajouter un Devoir

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

## Critères d'Évaluation

- Fonctionnalité complète de l'API (routes CRUD, authentification JWT, gestion des CORS).
- Structure et organisation du code.
- Utilisation correcte des variables d'environnement.
- Qualité de la documentation et des commentaires dans le code.

## Ressources Supplémentaires

- [Documentation officielle de Node.js](https://nodejs.org/en/docs/)
- [Documentation officielle d'Express.js](https://expressjs.com/)
- [Guide sur les meilleures pratiques de sécurité des API RESTful](https://www.owasp.org/index.php/REST_Security_Cheat_Sheet)
- [Tutoriel sur l'utilisation de Postman](https://learning.postman.com/docs/getting-started/introduction/)

Bonne chance !
