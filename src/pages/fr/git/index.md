---
layout: "layouts/Layout.astro"
title: Introduction au Git CLI
---

# Introduction au Git CLI

Ce cours vous apprend les bases de Git CLI. Nous couvrirons `clone`, `pull`, `fetch`, `checkout`, `branch`, `switch`, `commit`, `rebase`, et Git Flow.

## 1. Installation de Git

Vérifiez l'installation de Git :

```bash
git --version
```

Si Git n'est pas installé, téléchargez-le depuis [le site officiel](https://git-scm.com/).

## 2. Configuration de SSH

Pour utiliser SSH avec Git, générez une clé SSH et ajoutez-la à votre compte Git :

1. **Générer une clé SSH** :

    ```bash
    ssh-keygen -t rsa -b 4096 -C "votre-email@example.com"
    ```

2. **Ajouter la clé SSH à l'agent SSH** :

    ```bash
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_rsa
    ```

3. **Ajouter la clé SSH à votre compte Git** :

    ```bash
    cat ~/.ssh/id_rsa.pub
    ```

    Collez ce contenu dans la section des clés SSH de votre compte Git (par exemple, [GitHub](https://github.com/settings/keys)).

### Avantages de SSH

- **Sécurité** : Utilise desés cl cryptographiques.
- **Confort** : Pas de mot de passe à chaque interaction.
- **Performance** : Opérations plus rapides.

## 3. Cloner un dépôt

Pour cloner un dépôt :

```bash
git clone https://github.com/username/repository.git
```




