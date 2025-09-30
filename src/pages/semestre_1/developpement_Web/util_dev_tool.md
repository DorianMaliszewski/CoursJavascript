---

layout: "layouts/Layout.astro"
title: "Outils & Mise en place d’un environnement web local"
type: "TP"
----------

#### Objectifs du TD (version débutants)

* Comprendre **serveur web local** (Apache), **localhost**, **IP** et **ports**.
* Installer **XAMPP** et lancer **Apache**.
* Créer un **premier site local** étape par étape (dossier → fichier → test).
* Utiliser **Visual Studio Code** pour éditer vos fichiers.
* Savoir exécuter **quelques commandes** en terminal (**macOS** & **Windows**).
* Appliquer des **bonnes pratiques** et savoir **dépanner** les erreurs courantes.
---

# 1) Installer les outils

## 1.1 Visual Studio Code (éditeur)

* Téléchargez **VS Code** : [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Installez‑le, puis lancez‑le.

## 1.2 XAMPP (serveur web local)

* Téléchargez **XAMPP** (Windows/macOS) : [https://www.apachefriends.org/](https://www.apachefriends.org/)
* Installez avec les **options par défaut**.
* Ouvrez le **panneau de contrôle XAMPP**.

**Dossiers par défaut où placer vos sites** :

* **Windows** : `C:\xampp\htdocs`
* **macOS** : `/Applications/XAMPP/htdocs/`

---

# 2) Lancer XAMPP et vérifier

1. Ouvrez le **panneau XAMPP**.
2. Cliquez **Start** sur **Apache** (vert = démarré).
3. Ouvrez votre navigateur et allez sur **[http://localhost/](http://localhost/)** : vous devez voir la page d’accueil XAMPP ou la liste des dossiers.

Si tout est OK, vous avez un **serveur web** qui répond **en local**.

---

# 3) Votre premier site local — pas à pas (A → Z)

## 3.1 Créer le dossier du site

* **Windows** : dans `C:\xampp\htdocs\`, créez un dossier **sans espace**, par ex. `test`.
* **macOS** : dans `/Applications/XAMPP/htdocs/`, créez un dossier `test`.

## 3.2 Créer la page d’accueil

1. Ouvrez **VS Code** → **File → Open Folder** → sélectionnez le dossier `test`.
2. Créez un fichier **`index.php`** avec ce contenu :

```php
<?php
// Exemple 1 : afficher un message
echo "<h1>Bonjour, site local ✔</h1>";

// Exemple 2 : date/heure
$date = date('d/m/Y H:i:s');
echo "<p>Dernière mise à jour : $date</p>";

// Exemple 3 : petite interaction (GET)
$nom = $_GET['nom'] ?? 'anonyme';
echo "<p>Bonjour, $nom ! Ajoutez ?nom=VotrePrenom à l’URL.</p>";
```

3. **Enregistrez** le fichier.

## 3.3 Tester dans le navigateur

* Lancez **Apache** si ce n’est pas déjà fait.
* Ouvrez : **[http://localhost/test/](http://localhost/test/)**
* Vous devez voir votre message et la date. Testez : **[http://localhost/test/?nom=Alice](http://localhost/test/?nom=Alice)**

> Besoin de vérifier la config PHP ? Ajoutez temporairement `phpinfo();` puis **supprimez‑le** :
>
> ```php
> <?php phpinfo();
> ```

## 3.4 Ajouter un deuxième site (facultatif)

* Créez un autre dossier (ex. `mon-portfolio`) dans `htdocs`.
* Ajoutez un `index.php` (ou `index.html`).
* Accédez via **[http://localhost/mon-portfolio/](http://localhost/mon-portfolio/)**.

---

# 4) Commandes de base en terminal

> **Note** : La commande **`cd`** (changer de dossier) fonctionne **sur macOS et Windows**.

## 4.1 macOS (Terminal)

```bash
pwd          # dossier courant
ls           # lister les fichiers
cd ..        # remonter d’un dossier
cd test      # entrer dans le dossier 'test'
mkdir demo   # créer un dossier
code .       # ouvrir le dossier courant dans VS Code (si 'code' est installé)
```

## 4.2 Windows (PowerShell)

```powershell
cd           # affiche le dossier courant et sert à naviguer
ls           # alias de Get-ChildItem (liste les fichiers)
cd ..        # remonter d’un dossier
cd test      # entrer dans 'test'
mkdir demo   # créer un dossier
New-Item index.php   # créer un fichier
code .      # ouvrir le dossier courant dans VS Code (si 'code' est installé)
```

> Astuce noms de fichiers/dossiers : **pas d’espaces**, pas d’accents. Préférez `kebab-case` ou `snake_case`.

---

# 5) Utiliser VS Code efficacement

* **Ouvrir un dossier** : *File → Open Folder…* (pointez sur `htdocs/test`).
* **Créer un fichier** : clic droit dans l’explorateur → *New File* → `index.php`.
* **Écrire / Enregistrer** : Ctrl/Cmd+S.
* **Extensions utiles (optionnel)** :

  * *PHP Intelephense* (aide à l’édition)
  * *PHP Debug* (si vous utilisez Xdebug)

> ⚠️ *Live Server* ne traite pas le **PHP**. Pour tester du PHP, passez **toujours** par **[http://localhost/](http://localhost/)...** (Apache/XAMPP).

---

# 6) Bonnes pratiques

* **Arborescence claire** :

```
htdocs/
├─ test/
│  ├─ index.php
│  ├─ assets/
│  └─ styles/
```

* **Sécurité (local vs prod)** : ne laissez pas `phpinfo()` ou des mots de passe en clair.
* **Sauvegardes** : pensez à copier vos dossiers importants régulièrement.

---

# 7) Dépannage (FAQ très simple)

* **Page blanche / erreur** :

  ```php
  <?php
  ini_set('display_errors', 1);
  error_reporting(E_ALL);
  ```

  Rechargez la page et lisez le message d’erreur.
* **`http://localhost/` ne répond pas** : vérifiez dans XAMPP que **Apache** est en **vert** (démarré).
* **Conflit de port (80)** : arrêtez l’appli qui l’occupe (ex. Skype/IIS) **ou** changez le port d’Apache (ex. 8080) puis accédez via `http://localhost:8080/`.
* **Fichier non trouvé** : vérifiez le **nom du dossier** (sans espace) et le **chemin** dans l’URL.

---

# 8) Récap express (checklist)

1. Installer **VS Code** & **XAMPP**.
2. Démarrer **Apache**.
3. Créer `htdocs/test/` puis `index.php`.
4. Ouvrir **[http://localhost/test/](http://localhost/test/)** (tester aussi `?nom=VotrePrenom`).
5. Éditer/enregistrer dans VS Code → recharger la page.

C’est tout ! Vous avez un **environnement web local** fonctionnel et un **premier site** qui répond. 🎉
