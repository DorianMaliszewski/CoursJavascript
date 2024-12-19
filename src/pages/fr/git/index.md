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

Pour récupérer et fusionner les dernières modifications du dépôt distant, utilisez la commande `pull` :

```bash
git pull origin main
```

### Fetch

Pour récupérer les dernières modifications du dépôt distant sans fusion, utilisez la commande `fetch` :

```bash
git fetch origin
```

## 4. Naviguer entre les branches

### Checkout

Pour basculer vers une autre branche, utilisez `checkout` :

```bash
git checkout nom-de-la-branche
```

### Switch

Pour basculer vers une autre branche (Git 2.23+), utilisez `switch` :

```bash
git switch nom-de-la-branche
```

### Switch avec upstream

Pour basculer et définir l'upstream, utilisez `switch -u` :

```bash
git switch -u nom-de-la-branche
```

## 5. Créer et gérer des branches

### Branch

Pour créer une branche sans basculer dessus, utilisez `branch` :

```bash
git branch nom-de-la-nouvelle-branche
```

### Checkout -b

Pour créer et basculer vers une nouvelle branche, utilisez `checkout -b` :

```bash
git checkout -b nom-de-la-nouvelle-branche
```

### Switch -c

Pour créer et basculer vers une nouvelle branche (Git 2.23+), utilisez `switch -c` :

```bash
git switch -c nom-de-la-nouvelle-branche
```

## 6. Commiter vos modifications

Pour enregistrer vos modifications, suivez ces étapes :

1. Ajoutez les fichiers modifiés :

    ```bash
    git add nom-du-fichier
    ```

    Ou ajoutez tous les fichiers :

    ```bash
    git add .
    ```

2. Committez avec un message :

    ```bash
    git commit -m "Description des modifications"
    ```

## 7. Git Flow

Git Flow est un ensemble de conventions pour gérer les branches dans un projet Git. Il définit des branches principales (`main` et `develop`) et des branches secondaires pour les fonctionnalités, corrections de bugs, releases et hotfixes.

## 8. Utilisation des Pull Requests (PR) ou Merge Requests (MR)

Lorsque vous travaillez en équipe, utilisez des PR/MR plutôt que `git merge`. Voici pourquoi :

- **Relecture de code** : Les PR/MR permettent de revoir le code avant fusion, réduisant les erreurs et améliorant la qualité.
- **Discussion et collaboration** : Les PR/MR favorisent la collaboration en permettant des discussions et des suggestions.
- **Historique des modifications** : Les PR/MR conservent un historique des modifications proposées, facilitant le suivi des changements.
- **Intégration continue** : Les PR/MR déclenchent des tests automatiques, assurant que les modifications ne cassent pas le code existant.

## 9. Commandes recommandées pour la gestion des branches

### Créer et basculer vers une nouvelle branche avec upstream

Pour créer et basculer vers une nouvelle branche avec upstream, utilisez `switch -c` :

```bash
git switch -c nom-de-la-nouvelle-branche
```

### Définir l'upstream pour une branche existante

Pour définir l'upstream pour une branche existante, utilisez `branch --set-upstream-to` :

```bash
git branch --set-upstream-to=origin/nom-de-la-branche nom-de-la-branche
```

Ce cours vous a fourni les bases pour utiliser Git via la ligne de commande et comprendre Git Flow. Pour approfondir vos connaissances, consultez la [documentation officielle de Git](https://git-scm.com/doc).

### Structure des branches

- `main` : La branche principale avec le code stable.
- `develop` : La branche de développement pour nouvelles fonctionnalités.
- `feature/*` : Les branches pour développer de nouvelles fonctionnalités.
- `release/*` : Les branches pour préparer une nouvelle release.
- `hotfix/*` : Les branches pour corriger des bugs critiques.

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

