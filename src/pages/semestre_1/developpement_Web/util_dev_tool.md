---
layout: "layouts/Layout.astro"
title: "DEVS — Outils & Mise en place d’un environnement web local (XAMPP, CLI, réseau)"
type: "TP"
---

#### Objectifs du TD

- Découvrir les **outils DEVS** (panorama rapide).
- Maîtriser les **bases CLI** (Linux/macOS & Windows).
- Comprendre **serveur web, IP, ports, nom de domaine & DNS**.
- Installer/ouvrir **XAMPP**, créer et accéder à un **site local**.
- Utiliser **Visual Studio Code** + **extensions utiles**.
- Appliquer des **bonnes pratiques** (noms de dossiers, arborescence, Git).

---

## 1) Outils autour de DEVS (panorama rapide)

> DEVS = *Discrete Event System Specification* (modélisation/simulation à événements discrets).

- **Outils/plateformes courants**  
  - *DEVSJAVA / DEVS-Suite* : simulation en Java.  
  - *CD++ / Cell-DEVS* : modélisation DEVS & cellulaires.  
  - *PythonDEVS / PyPDEVS* : simulation en Python.  
  - *MS4 Me / Adevs* : outils académiques/industriels.  
- **Cas d’usage** : modélisation de systèmes réactifs, réseaux, logistique, smart-city, etc.  
- **Ce TD** : focus **environnement web local** (pratique pour héberger rapidement une UI, un backend simple, collecter des sorties de simulation), et rappels **réseau/CLI** utiles pour déployer et connecter des briques (simulateur ↔ web UI ↔ base).

---

## 2) Rappels CLI : naviguer en ligne de commande

### 2.1 Linux / macOS (Terminal)

- **Se déplacer**
  - ```
  pwd            # affiche le dossier courant
  ls             # liste les fichiers
  cd mon_dossier # entrer dans un dossier
  cd ..          # remonter
  ```
- **Fichiers / dossiers**
  - ```
  mkdir site-local
  touch index.php
  cp src.php backup/src.php
  mv ancien.php nouveau.php
  rm fichier.txt
  rm -r dossier_a_supprimer
  ```
- **Élévation & paquets**
  - ```
  sudo apt update && sudo apt install apache2 php  # Debian/Ubuntu
  brew install php                                  # macOS (Homebrew)
  ```

### 2.2 Windows (PowerShell)

- **Se déplacer**
  - ```
  Get-Location
  Get-ChildItem
  Set-Location .\mon_dossier
  Set-Location ..
  ```
- **Fichiers / dossiers**
  - ```
  New-Item -ItemType Directory site-local
  New-Item index.php
  Copy-Item src.php backup\src.php
  Rename-Item ancien.php nouveau.php
  Remove-Item fichier.txt
  Remove-Item -Recurse dossier_a_supprimer
  ```

> Astuce : espaces **interdits** dans les noms → préférez **kebab-case** (*mon-site*), **snake_case** (*mon_site*) ou **camelCase** (*monSite*).

---

## 3) Serveur web & réseau : l’essentiel

- **Serveur web** : logiciel (Apache, Nginx) qui reçoit des requêtes HTTP(S) et renvoie des réponses (HTML, JSON…).  
- **IP** : adresse numérique d’une machine (ex : `127.0.0.1` pour *localhost*).  
- **Port** : “porte logique” d’un service (HTTP : **80**, HTTPS : **443**, MySQL : **3306**).  
- **Nom de domaine** : alias lisible (ex : `example.com`) → résolu par le **DNS** vers une **IP**.  
- **Localhost** : votre machine, accessible sans Internet via `http://localhost` ou `http://127.0.0.1`.

> Schéma mental : *Navigateur* → **HTTP** → *Serveur web (Apache)* → interprète **PHP** → lit/écrit *Base de données (MySQL)* → renvoie **HTML**.

---

## 4) XAMPP : installer, lancer, tester

**XAMPP** = Apache (web) + MariaDB/MySQL (BDD) + PHP + outils annexes.

### 4.1 Installation
1. Télécharger depuis *Apache Friends*.  
2. Installer (options par défaut OK).  
3. Ouvrir le **panneau de contrôle** XAMPP.

> Dossiers par défaut :
- **Windows** : `C:\xampp\htdocs`
- **macOS** : `/Applications/XAMPP/htdocs/`

### 4.2 Lancer les services
- Dans le panneau XAMPP → **Start** sur **Apache** (et **MySQL** si besoin).  
- Vérifier : ouvrir le navigateur → `http://localhost/` (page d’accueil XAMPP ou liste de dossiers).

### 4.3 Créer votre *premier site local*
1. Dans `htdocs`, créer un dossier **sans espace**, p. ex. `devs-intro`.  
2. Ajouter un fichier `index.php` :
   - ```php
   <?php
   echo "<h1>Bonjour DEVS / Web local</h1>";
   phpinfo(); // à enlever en prod; utile pour vérifier PHP
   ```
3. Visiter : `http://localhost/devs-intro/`

> Ajouter un **deuxième site** ? Ajoutez simplement **un autre dossier** dans `htdocs`, ex. `mon-dashboard/` → `http://localhost/mon-dashboard/`.

### 4.4 (Optionnel) Alias ou VirtualHost
- **Simple (Alias Apache)** : éditer `httpd.conf` et ajouter un alias vers un dossier hors `htdocs`.  
- **Pro (VirtualHost)** : déclarer un hôte comme `http://monprojet.local/` + entrée dans `hosts`.  
  > Réservé aux apprenants à l’aise ; utile pour simuler des domaines multiples.

---

## 5) Visual Studio Code : coder confortablement

### 5.1 Installation & ouverture
- Installer **VS Code**, puis **Ouvrir un dossier** → sélectionnez votre site (`devs-intro`).

### 5.2 Extensions utiles
- **PHP Intelephense** (aide, autocomplétion).  
- **PHP Debug** (avec Xdebug si besoin).  
- **Live Server** (utile pour HTML/CSS/JS **statique**).  
  > ⚠️ Pour **PHP**, le rendu passe par **Apache/XAMPP** (donc ouvrez l’URL `http://localhost/...` plutôt que le port de Live Server).

### 5.3 Exemples de snippets
- ```php
<?php
$nom = "Antoine";
$role = "Étudiant";
echo "Bienvenue $nom — Rôle : $role";
```

- ```php
<?php
$heure = (int) date("H");
echo $heure < 12 ? "Bonjour ☀️" : "Bon après-midi 🌙";
```

---

## 6) Bonnes pratiques (indispensables)

- **Noms** : pas d’espaces, pas d’accent, pas de caractères spéciaux. Ex. `mon-site`, `mon_site`.  
- **Arborescence**
  - ```
  mon-projet/
  ├─ public/          # fichiers exposés (index.php, assets)
  ├─ src/             # code applicatif
  ├─ vendor/          # dépendances (Composer)
  ├─ .env             # variables locales (ne pas commiter)
  └─ README.md
  ```
- **.gitignore** minimal (si Git) :
  - ```
  /vendor/
  /.env
  /.vscode/
  /node_modules/
  ```
- **Sécurité** : ne laissez pas `phpinfo()`/fichiers sensibles en prod ; n’affichez jamais de mots de passe.  
- **Backups** : sauvegardes régulières (BDD + code).  
- **Logs** : consultez `logs/apache_error.log` si l’affichage est blanc.

---

## 7) Ajouter un “site” (récap express)

1. **Créer un dossier** dans `htdocs` (ex. `tp-devs-outils`).  
2. **Mettre un `index.php`** (même vide avec un `echo`).  
3. **Démarrer Apache** dans XAMPP.  
4. **Aller à** `http://localhost/tp-devs-outils/`.

---

## 8) Exercices guidés (15–30 min)

1. **Hello + heure** : créez `bonjour.php` qui dit “Bonjour/Bonsoir” selon l’heure.  
2. **Mini-formulaire** : page avec un `<form>` qui affiche “Bonjour, {nom}”.  
   - ```php
   <?php
   $nom = $_POST['nom'] ?? null;
   ?>
   <form method="post">
     <input name="nom" placeholder="Votre nom" />
     <button>Envoyer</button>
   </form>
   <?php if ($nom): ?>
     <p>Bonjour, <?= htmlspecialchars($nom) ?> !</p>
   <?php endif; ?>
   ```
3. **Deux sites** : créez `site-a/` et `site-b/` et accédez-y via `http://localhost/site-a/` et `/site-b/`.

---

## 9) Dépannage (FAQ rapide)

- **Page blanche** : activer l’affichage des erreurs en dev :
  - ```php
  <?php
  ini_set('display_errors', 1);
  error_reporting(E_ALL);
  ```
- **Port 80 occupé** : changer le port Apache (ex. 8080) → accéder via `http://localhost:8080/`.  
- **Permissions (mac/Linux)** : vérifier droits (`chmod`, `chown`).  
- **Live Server n’affiche pas le PHP** : normal → utiliser `http://localhost/...` (Apache).  
- **Chemins** : utiliser des chemins **relatifs** ou `__DIR__` en PHP :
  - ```php
  require __DIR__ . '/src/config.php';
  ```

---

## 10) Mémo rapide des commandes utiles

- **Linux/macOS**
  - ```
  ls -la
  cd .. && cd mon-dossier
  mkdir -p public src
  code .             # ouvrir VS Code dans le dossier courant (si 'code' installé)
  ```
- **Windows (PowerShell)**
  - ```
  Get-ChildItem
  Set-Location ..
  New-Item -ItemType Directory public,src
  code .
  ```

---

### Conclusion

Vous savez maintenant :
- Installer/lancer **XAMPP**,
- Créer **plusieurs sites locaux** (dossiers dans `htdocs`),
- Expliquer **IP/ports/DNS/localhost**,
- Naviguer en **CLI**,
- Utiliser **VS Code** et ses **extensions clés**,
- Respecter des **bonnes pratiques** (naming, arborescence, sécurité).

> À vous de jouer : créez deux petits sites, ajoutez un formulaire, et tenez un petit *journal de commandes* de ce que vous tapez aujourd’hui (trace pour révision).
