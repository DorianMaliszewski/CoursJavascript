# Introduction au Git CLI

Ce cours vise à vous apprendre les bases de l'utilisation de Git via la ligne de commande (CLI). Nous couvrirons les commandes essentielles telles que `clone`, `pull`, `fetch`, `checkout`, `branch`, `switch`, et `commit`. Nous expliquerons également ce qu'est Git Flow et comment l'utiliser dans le développement.

## 1. Installation de Git

Avant de commencer, assurez-vous que Git est installé sur votre système. Vous pouvez vérifier cela en ouvrant un terminal et en tapant :

```bash
git --version
```

Si Git n'est pas installé, vous pouvez le télécharger depuis [le site officiel de Git](https://git-scm.com/).

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
    merge git hotfix/1.0.1
    git branch -d hotfix/1.0.1
    ```

Ce cours vous a fourni les bases pour utiliser Git via la ligne de commande et comprendre Git Flow. Pour approfondir vos connaissances, consultez la [documentation officielle de Git](https://git-scm.com/doc).
