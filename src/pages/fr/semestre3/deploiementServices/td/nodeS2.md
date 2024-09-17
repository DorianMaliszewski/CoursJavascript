---
layout: "layouts/Layout.astro"
title: "Node.js et API RESTful - Session 2"
---

# Introduction à Node.js et API RESTful - Session 2

## Sécurité et Authentification

### Introduction à la sécurité des API

La sécurité des API est cruciale pour protéger les données et les utilisateurs. Quelques aspects clés incluent la gestion des CORS, l'utilisation de JSON Web Tokens (JWT) pour sécuriser les routes, et le hachage des mots de passe pour l'authentification.

#### Gestion des CORS

CORS (Cross-Origin Resource Sharing) permet aux serveurs de contrôler l'accès aux ressources en fonction de l'origine de la demande. Pour gérer les CORS dans Express.js, vous pouvez utiliser le middleware `cors`.

Installation du middleware CORS :
```sh
npm install cors
```

Utilisation dans votre application Express.js :
```js
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, API!' });
});

app.listen(3000, () => {
  console.log("Serveur en cours d'exécution sur http://localhost:3000/");
});
```

### Sécurisation des routes avec JWT (JSON Web Tokens)

JWT est une méthode sécurisée pour transmettre des informations entre le client et le serveur. Chaque token est signé, garantissant son intégrité.

Installation de `jsonwebtoken` :
```sh
npm install jsonwebtoken
```

Génération d'un token JWT :
```js
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });
console.log(token);
```

Vérification d'un token JWT :
```js
app.use((req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).send('Accès refusé');
    }
    req.user = decoded;
    next();
  });
});
```

### Authentification

Pour implémenter un système d'authentification, vous devez créer des routes pour l'inscription et la connexion des utilisateurs. Utilisez `bcrypt` pour le hachage des mots de passe.

Installation de `bcrypt` :
```sh
npm install bcrypt
```

Création des routes de login et registration :
```js
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

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
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Identifiants invalides');
  }
});

app.listen(3000, () => {
  console.log("Serveur en cours d'exécution sur http://localhost:3000/");
});
```

### Exercice

1. Implémentez un système d'authentification simple avec JWT pour l'API créée précédemment.
2. Créez des routes de login et registration comme montré ci-dessus.
3. Utilisez Postman pour tester les routes `POST /register` et `POST /login`.

## Interaction avec une Base de Données MySQL

### Introduction à MySQL

MySQL est un système de gestion de bases de données relationnelles très populaire. Vous allez apprendre à intégrer MySQL avec votre application Node.js en utilisant le module `mysql`.

#### Installation de MySQL

Installez MySQL sur votre machine (voir la documentation officielle pour les instructions spécifiques à votre système d'exploitation).

#### Installation du module `mysql`

Installez le module `mysql` via npm :
```sh
npm install mysql
```

#### Connexion à MySQL

Voici comment établir une connexion à une base de données MySQL :
```js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});
```

### Intégration avec l'API

Modifiez les routes de votre API pour utiliser MySQL pour les opérations CRUD.

Exemple pour la route `GET /users` :
```js
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/users', (req, res) => {
  const user = req.body;
  connection.query('INSERT INTO users SET ?', user, (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, ...user });
  });
});

app.listen(3000, () => {
  console.log("Serveur en cours d'exécution sur http://localhost:3000/");
});
```

### Exemple de JSON à envoyer pour ajouter un utilisateur

Pour ajouter un utilisateur, vous pouvez envoyer un JSON via un outil comme Postman :

Exemple de JSON :
```json
{
  "nom": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "actif": true
}
```

Postman est un outil permettant de tester et de manipuler des API. Vous pouvez le télécharger et l'utiliser pour envoyer des requêtes à votre serveur. [Téléchargez Postman](https://www.postman.com/downloads/)

### Exercice

1. Configurez une base de données MySQL et créez la table `users` avec les champs spécifiés dans la session 1.
2. Établissez une connexion à la base de données MySQL depuis votre application Node.js.
3. Modifiez les routes de votre API pour utiliser MySQL pour les opérations CRUD sur la table `users`.
4. Utilisez Postman pour tester les routes `GET /users` et `POST /users`.

## Déploiement et Conclusion

### Préparation pour la production

Avant de déployer une application Node.js en production, assurez-vous de bien gérer les variables d'environnement et d'optimiser les performances.

#### Variables d'environnement

Utilisez le module `dotenv` pour gérer les variables d'environnement :
```sh
npm install dotenv
```

Créez un fichier `.env` :
```
SECRET_KEY=yourSecretKey
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=test
```

Utilisation dans votre application :
```js
require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}/`);
});
```

### Optimisation des performances

Quelques pratiques pour optimiser les performances de votre application Node.js :
- Utilisez des outils de surveillance et de profilage.
- Mettez en cache les réponses fréquentes.
- Optimisez les requêtes à la base de données.

### Exercice

1. Déployez l'API sur Heroku et connectez une base de données MySQL hébergée (ex : ClearDB pour Heroku).
2. Assurez-vous que votre application utilise les variables d'environnement pour les clés secrètes et les connexions à la base de données.
3. Utilisez Postman pour tester votre API déployée sur Heroku.

### Conclusion

**Résumé des concepts clés :**
- Sécurité et authentification avec JWT.
- Interaction avec une base de données MySQL.
- Déploiement d'une application Node.js sur Heroku.

**Questions & Réponses :**

Posez toutes vos questions sur les concepts vus pendant les deux sessions.

**Suggestions de ressources supplémentaires :**
- [Documentation officielle de Node.js](https://nodejs.org/en/docs/)
- [Documentation officielle d'Express.js](https://expressjs.com/)
- [Guide sur les meilleures pratiques de sécurité des API RESTful](https://www.owasp.org/index.php/REST_Security_Cheat_Sheet)

---
