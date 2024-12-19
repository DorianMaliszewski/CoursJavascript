---
layout: "layouts/Layout.astro"
title: Introduction au Git CLI
---

# Introduction au Git CLI

Ce cours vise à vous apprendre les bases de l'utilisation de Git via la ligne de commande (CLI). Nous couvrirons les commandes essentielles telles que `clone`, `pull`, `fetch`, `checkout`, `branch`, `switch`, et `commit`. Nous expliquerons également ce qu'est Git Flow et comment l'utiliser dans le développement.

## 1. Installation de Git

Avant de commencer, assurez-vous que Git est installé sur votre système. Vous pouvez vérifier cela en ouvrant un terminal et en tapant :

```bash
git --version
```

Si Git n'est pas installé, vous pouvez le télécharger depuis [le site officiel de Git](https://git-scm.com/).

## 2. Configuration de SSH pour Git

Pour utiliser SSH avec Git, vous devez générer une clé SSH et l'ajouter à votre compte Git (par exemple, GitHub, GitLab, etc.). Voici comment procéder :

1. **Générer une clé SSH** :

    Ouvrez un terminal et exécutez la commande suivante, en remplaçant `votre-email@example.com` par votre adresse e-mail :

    ```bash
    ssh-keygen -t rsa -b 4096 -C "votre-email@example.com"
    ```

    Appuyez sur Entrée pour accepter l'emplacement par défaut du fichier. Vous pouvez également définir un mot de passe pour sécuriser votre clé.

2. **Ajouter la clé SSH à l'agent SSH** :

    Démarrez l'agent SSH et ajoutez votre clé SSH à celui-ci :

    ```bash
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_rsa
    ```

3. **Ajouter la clé SSH à votre compte Git** :

    Copiez le contenu de votre clé SSH publique :

    ```bash
    cat ~/.ssh/id_rsa.pub
    ```

    Collez ce contenu dans la section des clés SSH de votre compte Git (par exemple, [GitHub](https://github.com/settings/keys), [GitLab](https://gitlab.com/-/profile/keys)).

### Avantages de l'utilisation de SSH par rapport à HTTP

- **Sécurité** : SSH utilise des clés cryptographiques pour l'authentification, ce qui est plus sécurisé que l'utilisation de mots de passe via HTTP.
- **Confort** : Une fois configuré, SSH ne demande pas de mot de passe à chaque interaction avec le dépôt, contrairement à HTTP qui demande un nom d'utilisateur et un mot de passe à chaque opération.
- **Performance** : Les opérations Git via SSH sont généralement plus rapides que via HTTP, surtout pour les opérations de clonage et de push de grands dépôts.

## 3. Cloner un dépôt

Pour cloner un dépôt Git existant sur votre machine locale, utilisez la commande `clone` suivie de l'URL du dépôt :

## 2. Cloner un dépôt

Pour cloner un dépôt Git existant sur votre machine locale, utilisez la commande `clone` suivie de l'URL du dépôt :

```bash
git clone https://github.com/username/repository.git
```

## 3. Mettre à jour votre dépôt local

### Pull

Pour récupérer les dernières modifications du dépôt distant et les fusionner avec votre branche locale, utilisez la commande `pull` :

```bash
git pull origin main
```

### Fetch

Pour récupérer les dernières modifications du dépôt distant sans les fusionner avec votre branche locale, utilisez la commande `fetch` :

```bash
git fetch origin
```

## 4. Naviguer entre les branches

### Checkout

Pour basculer vers une autre branche existante, utilisez la commande `checkout` :

```bash
git checkout nom-de-la-branche
```

### Switch

Pour basculer vers une autre branche existante (disponible depuis Git 2.23), utilisez la commande `switch` :

```bash
git switch nom-de-la-branche
```

### Switch avec mise en place de l'upstream

Pour basculer vers une autre branche et définir l'upstream, utilisez la commande `switch` avec l'option `-u` :

```bash
git switch -u nom-de-la-branche
```

## 5. Créer et gérer des branches

### Branch

Pour créer une nouvelle branche sans basculer dessus, utilisez la commande `branch` :

```bash
git branch nom-de-la-nouvelle-branche
```

### Checkout -b

Pour créer une nouvelle branche et basculer dessus immédiatement, utilisez la commande `checkout` avec l'option `-b` :

```bash
git checkout -b nom-de-la-nouvelle-branche
```

### Switch -c

Pour créer une nouvelle branche et basculer dessus immédiatement (disponible depuis Git 2.23), utilisez la commande `switch` avec l'option `-c` :

```bash
git switch -c nom-de-la-nouvelle-branche
```

## 6. Commiter vos modifications

Pour enregistrer vos modifications dans le dépôt local, suivez ces étapes :

1. Ajoutez les fichiers modifiés à l'index :

    ```bash
    git add nom-du-fichier
    ```

    Ou ajoutez tous les fichiers modifiés :

    ```bash
    git add .
    ```

2. Committez les modifications avec un message descriptif :

    ```bash
    git commit -m "Description des modifications"
    ```

## 7. Git Flow

Git Flow est un ensemble de conventions pour gérer les branches dans un projet Git. Il définit des branches principales (`main` et `develop`) et des branches secondaires pour les fonctionnalités, les corrections de bugs, les releases et les hotfixes.

## 8. Utilisation des Pull Requests (PR) ou Merge Requests (MR)

Lorsque vous travaillez en équipe, il est préférable d'utiliser des Pull Requests (PR) sur GitHub ou des Merge Requests (MR) sur GitLab plutôt que de fusionner directement les branches avec `git merge`. Voici pourquoi :

- **Relecture de code** : Les PR/MR permettent à d'autres membres de l'équipe de revoir le code avant sa fusion, ce qui réduit les erreurs et améliore la qualité du code.
- **Discussion et collaboration** : Les PR/MR fournissent un espace pour discuter des modifications et apporter des suggestions, favorisant la collaboration.
- **Historique des modifications** : Les PR/MR conservent un historique des modifications proposées, facilitant le suivi des changements et la compréhension de l'évolution du projet.
- **Intégration continue** : Les PR/MR peuvent être configurés pour déclencher des tests automatiques, assurant que les modifications ne cassent pas le code existant.

## 9. Commandes recommandées pour la gestion des branches

### Créer et basculer vers une nouvelle branche avec mise en place de l'upstream

Pour créer une nouvelle branche et basculer dessus immédiatement tout en définissant l'upstream, utilisez la commande `switch` avec l'option `-c` :

```bash
git switch -c nom-de-la-nouvelle-branche
```

### Définir l'upstream pour une branche existante

Pour définir l'upstream pour une branche existante, utilisez la commande `branch` avec l'option `--set-upstream-to` :

```bash
git branch --set-upstream-to=origin/nom-de-la-branche nom-de-la-branche
```

Ce cours vous a fourni les bases pour utiliser Git via la ligne de commande et comprendre Git Flow. Pour approfondir vos connaissances, consultez la [documentation officielle de Git](https://git-scm.com/doc).

### Structure des branches

- `main` : La branche principale qui contient le code stable.
- `develop` : La branche de développement où toutes les nouvelles fonctionnalités sont intégrées.
- `feature/*` : Les branches pour développer de nouvelles fonctionnalités.
- `release/*` : Les branches pour préparer une nouvelle release.
- `hotfix/*` : Les branches pour corriger des bugs critiques dans la version en production.

### Workflow

1. **Créer une branche de fonctionnalité** :

    ```bash
    git checkout -b feature/nom-de-la-fonctionnalite develop
    ```

2. **Développer et committer** :

    ```bash
    git add .
    git commit -m "Ajout de la fonctionnalité"
    ```

3. **Fusionner la branche de fonctionnalité dans `develop`** :

    ```bash
    git checkout develop
    git merge feature/nom-de-la-fonctionnalite
    git branch -d feature/nom-de-la-fonctionnalite
    ```

4. **Créer une branche de release** :

    ```bash
    git checkout -b release/1.0.0 develop
    ```

5. **Préparer la release** :

    ```bash
    git add .
    git commit -m "Préparation de la release 1.0.0"
    ```

6. **Fusionner la branche de release dans `main` et `develop`** :

    ```bash
    git checkout main
    git merge release/1.0.0
    git tag -a v1.0.0 -m "Version 1.0.0"
    git checkout develop
    git merge release/1.0.0
    git branch -d release/1.0.0
    ```

7. **Créer une branche de hotfix** :

    ```bash
    git checkout -b hotfix/1.0.1 main
    ```

8. **Corriger le bug** :

    ```bash
    git add .
    git commit -m "Correction du bug"
    ```

9. **Fusionner la branche de hotfix dans `main` et `develop`** :

    ```bash
    git checkout main
    git merge hotfix/1.0.1
    git tag -a v1.0.1 -m "Version 1.0.1"
    git checkout develop
    git merge hotfix/1.0.1
    git branch -d hotfix/1.0.1
    ```

