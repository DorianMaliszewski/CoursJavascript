---
layout: "layouts/Layout.astro"
title: "Node.js et API RESTful - Session 1"
---

# Introduction à Node.js et API RESTful - Session 1

## Introduction à Node.js

### Qu'est-ce que Node.js ?

Node.js est un environnement d'exécution JavaScript côté serveur. Il permet d'exécuter du JavaScript en dehors d'un navigateur, offrant ainsi la possibilité de créer des applications backend performantes et évolutives.

**Définition et historique :**
- Node.js a été créé en 2009 par Ryan Dahl.
- Il est construit sur le moteur JavaScript V8 de Google Chrome.

**Pourquoi utiliser Node.js ?**
- Performances élevées grâce à l'architecture événementielle et non bloquante.
- Utilisation du même langage (JavaScript) pour le frontend et le backend.

### Installation de Node.js

#### Guide d'installation rapide

**Windows :**
Téléchargez le programme d'installation depuis le site officiel [Node.js](https://nodejs.org) et suivez les instructions.

**macOS :**
Utilisez Homebrew pour installer Node.js :
```sh
brew install node
```

**Linux :**
Utilisez le gestionnaire de paquets de votre distribution. Par exemple, pour Ubuntu :
```sh
sudo apt-get update
sudo apt-get install nodejs npm
```

#### Utilisation du gestionnaire de versions Node (nvm)

Installez `nvm` (Node Version Manager) pour gérer plusieurs versions de Node.js :
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install node
```

### Exercice

1. Installez Node.js sur votre machine.
2. Créez un fichier `app.js` et écrivez un script simple qui affiche "Hello, World!" dans la console :
```js
console.log("Hello, World!");
```
3. Exécutez le script avec la commande :
```sh
node app.js
```

## Modules et Programmation Asynchrone

### Modules intégrés

Node.js inclut plusieurs modules intégrés pour faciliter le développement. Parmi les plus utilisés, on retrouve `fs` (file system) et `http`.

#### Utilisation de `fs` (file system)

Le module `fs` permet de travailler avec le système de fichiers. Voici comment lire un fichier de manière synchrone :
```js
const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

#### Utilisation de `http` pour créer un serveur web simple

Voici comment créer un serveur HTTP de base avec Node.js :
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Serveur en cours d'exécution sur http://127.0.0.1:3000/');
});
```

### Concepts de base de l'asynchronisme

L'asynchronisme est au cœur de Node.js, permettant de gérer des opérations longues (comme la lecture de fichiers ou les requêtes réseau) sans bloquer l'exécution du programme.

#### Callbacks

Les callbacks sont des fonctions passées en argument à une autre fonction, et qui sont exécutées après que cette fonction a terminé son opération. C'est une méthode courante pour gérer l'asynchronisme en JavaScript.

Exemple de lecture de fichier avec un callback :
```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### Promises

Les Promises sont une autre manière de gérer l'asynchronisme, en fournissant une méthode plus lisible et plus flexible que les callbacks. Une Promise représente une opération asynchrone et peut être dans l'un des trois états : en attente, résolue ou rejetée.

Exemple de lecture de fichier avec une Promise :
```js
const fsPromises = require('fs').promises;

fsPromises.readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

#### async/await

L'async/await est une syntaxe plus moderne pour travailler avec des Promises, rendant le code asynchrone plus lisible et plus proche du code synchrone.

Exemple de lecture de fichier avec async/await :
```js
const readFileAsync = async () => {
  try {
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readFileAsync();
```

### Exercice

1. Créez un serveur HTTP de base avec le module `http` comme montré ci-dessus.
2. Lisez et écrivez dans un fichier de manière asynchrone avec `fs.promises`.

## Introduction à Express.js

### Introduction à Express.js

Express.js est un framework minimaliste pour Node.js qui facilite la création d'applications web et d'API.

#### Installation et configuration de base

Installez Express.js via npm :
```sh
npm install express
```

#### Création de routes simples

Avec Express.js, vous pouvez définir des routes pour gérer différentes URL de votre application :
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Serveur en cours d'exécution sur http://localhost:3000/');
});
```

#### Gestion des requêtes et réponses

- Lecture des paramètres de requête :
```js
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```
- Envoi de réponses JSON :
```js
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, API!' });
});
```

### Exercice

1. Installez Express.js et créez une application simple avec quelques routes de base (`GET`, `POST`).

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
  database: 'school'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});
```

### Création de la table `devoir`

Pour stocker les devoirs, créez une table `devoir` avec les champs suivants : nom, description, matière, professeur, date debut, date rendu, et un boolean `fait`.

Exécutez cette commande SQL pour créer la table :
```sql
CREATE TABLE devoir (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  matiere VARCHAR(255),
  professeur VARCHAR(255),
  date_debut DATE,
  date_rendu DATE,
  fait BOOLEAN
);
```

### Intégration avec l'API

Modifiez les routes de votre API pour utiliser MySQL pour les opérations CRUD.

Exemple pour la route `GET /devoirs` :
```js
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'school'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

app.get('/devoirs', (req, res) => {
  connection.query('SELECT * FROM devoir', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/devoirs', (req, res) => {
  const devoir = req.body;
  connection.query('INSERT INTO devoir SET ?', devoir, (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, ...devoir });
  });
});
```

### Exercice

1. Configurez une base de données MySQL et créez la table `devoir` avec les champs spécifiés.
2. Établissez une connexion à la base de données MySQL depuis votre application Node.js.
3. Modifiez les routes de votre API pour utiliser MySQL pour les opérations CRUD sur la table `devoir`.

## Mise en Place d'une API RESTful de Base

### Conception d'API RESTful

Une API RESTful suit des principes spécifiques pour permettre une interaction efficace entre le client et le serveur. Cela inclut l'utilisation des méthodes HTTP appropriées (GET, POST, PUT, DELETE) et une structure cohérente des endpoints.

#### Principes REST

- Utilisation de méthodes HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- Structure des endpoints basée sur les ressources.

### Création des routes RESTful

- `GET /devoirs` : Récupérer tous les devoirs.
- `POST /devoirs` : Créer un nouveau devoir.
- `PUT /devoirs/:id` : Mettre à jour un devoir existant.
- `DELETE /devoirs/:id` : Supprimer un devoir.

#### Exemple de route `PUT` générique

Voici un exemple générique pour une route `PUT` qui met à jour une ressource :
```js
app.put('/resource/:id', (req, res) => {
  const id = req.params.id;
  const updatedResource = req.body;
  connection.query('UPDATE resource SET ? WHERE id = ?', [updatedResource, id], (err) => {
    if (err) throw err;
    res.json(updatedResource);
  });
});
```

### Exemple complet

Créez un fichier `app.js` et ajoutez le code suivant pour implémenter l'API RESTful :

```js
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'school'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

// Récupérer tous les devoirs
app.get('/devoirs', (req, res) => {
  connection.query('SELECT * FROM devoir', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Créer un nouveau devoir
app.post('/devoirs', (req, res) => {
  const devoir = req.body;
  connection.query('INSERT INTO devoir SET ?', devoir, (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, ...devoir });
  });
});
```

### Exercice

1. Implémentez la route `PUT /devoirs/:id` pour mettre à jour un devoir existant en vous basant sur l'exemple générique ci-dessus.
2. Implémentez la route `DELETE /devoirs/:id` pour supprimer un devoir existant en utilisant un modèle similaire.

Continuez la session 2 pour compléter votre API RESTful en ajoutant des fonctionnalités de sécurité, d'authentification et de déploiement.
