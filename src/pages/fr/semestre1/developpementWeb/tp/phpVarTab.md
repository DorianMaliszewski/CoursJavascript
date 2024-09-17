---
layout: "layouts/Layout.astro"
title: "TP Complet : Variables, Structures de Contrôle, Tableaux et PHP & HTML"
---

# TP 1 : Variables, Structures de Contrôle, Tableaux et PHP & HTML 

## Objectifs

1. Comprendre les bases des variables en PHP.
2. Apprendre à utiliser les structures de contrôle.
3. Manipuler des tableaux.
4. Intégrer PHP et HTML pour créer une page dynamique et stylisée.

## Instructions

### Étape 1 : Variables en PHP

Créez un fichier PHP appelé `variables.php` et ajoutez le code suivant :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Variables</title>
</head>
<body>
    <?php
        $nom = "John";
        $age = 25;
        $estEtudiant = true;
        
        echo "<p>Nom : $nom</p>";
        echo "<p>Âge : $age</p>";
        echo "<p>Est étudiant : " . ($estEtudiant ? "Oui" : "Non") . "</p>";
    ?>
</body>
</html>
```

**Explications :**
- Les variables `$nom`, `$age` et `$estEtudiant` sont déclarées et initialisées.
- La fonction `echo` est utilisée pour afficher les valeurs des variables dans le document HTML.

### Exercice Autonome 1

Modifiez le fichier `variables.php` pour ajouter deux nouvelles variables :
1. `$ville` pour stocker le nom d'une ville.
2. `$note` pour stocker une note sur 20.

Affichez ces deux nouvelles variables dans le document HTML.

### Étape 2 : Structures de Contrôle

Créez un fichier PHP appelé `controle.php` et ajoutez le code suivant :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Structures de Contrôle</title>
</head>
<body>
    <?php
        $note = 75;
        
        if ($note >= 90) {
            echo "<p>Excellent</p>";
        } elseif ($note >= 75) {
            echo "<p>Très bien</p>";
        } elseif ($note >= 50) {
            echo "<p>Passable</p>";
        } else {
            echo "<p>Échec</p>";
        }
    ?>
</body>
</html>
```

**Explications :**
- La structure conditionnelle `if-elseif-else` est utilisée pour afficher un message en fonction de la note.

### Exercice Autonome 2

Modifiez le fichier `controle.php` pour ajouter une nouvelle condition :
1. Si la note est exactement 100, affichez "Parfait".

### Étape 3 : Boucles en PHP

Ajoutez une section sur les boucles dans `controle.php` pour afficher les chiffres de 1 à 10 :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Boucles</title>
</head>
<body>
    <h2>Chiffres de 1 à 10</h2>
    <?php
        for ($i = 1; $i <= 10; $i++) {
            echo "<p>$i</p>";
        }
    ?>
</body>
</html>
```

**Explications :**
- La boucle `for` est utilisée pour afficher les chiffres de 1 à 10.

### Exercice Autonome 3

Modifiez le fichier `controle.php` pour ajouter une boucle `while` qui affiche les chiffres de 10 à 1.

### Étape 4 : Manipulation de Tableaux

Créez un fichier PHP appelé `tableaux.php` et ajoutez le code suivant :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Tableaux</title>
</head>
<body>
    <?php
        $etudiants = ["Alice", "Bob", "Charlie", "Diane"];
        
        echo "<ul>";
        foreach ($etudiants as $etudiant) {
            echo "<li>$etudiant</li>";
        }
        echo "</ul>";
    ?>
</body>
</html>
```

**Explications :**
- Un tableau `$etudiants` est créé pour stocker des noms d'étudiants.
- Une boucle `foreach` est utilisée pour parcourir le tableau et afficher chaque étudiant dans une liste HTML.

### Exercice Autonome 4

Modifiez le fichier `tableaux.php` pour ajouter un nouveau tableau `$notes` avec les notes des étudiants (en utilisant des valeurs fictives). Affichez chaque étudiant avec sa note correspondante.

### Étape 5 : Tableaux Associatifs

Ajoutez une section dans `tableaux.php` pour utiliser un tableau associatif :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Tableaux Associatifs</title>
</head>
<body>
    <?php
        $notes = [
            "Alice" => 15,
            "Bob" => 12,
            "Charlie" => 18,
            "Diane" => 10
        ];
        
        echo "<ul>";
        foreach ($notes as $etudiant => $note) {
            echo "<li>$etudiant : $note</li>";
        }
        echo "</ul>";
    ?>
</body>
</html>
```

**Explications :**
- Un tableau associatif `$notes` est utilisé pour stocker les notes des étudiants.
- Une boucle `foreach` est utilisée pour parcourir le tableau et afficher chaque étudiant avec sa note.

### Exercice Autonome 5

Modifiez le fichier `tableaux.php` pour ajouter une nouvelle note pour un étudiant supplémentaire. Ajoutez également une condition pour afficher un message spécial si la note est supérieure ou égale à 18.

### Étape 6 : Intégration de PHP et HTML

Créez un fichier PHP appelé `page.php` et ajoutez le code suivant :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP PHP & HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            margin: 0;
            padding: 0;
        }
        header, footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
        }
        main {
            padding: 2em;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 2em auto;
        }
    </style>
</head>
<body>
    <?php
        $titre = "Bienvenue sur Mon Site Web";
        $description = "Ceci est un exemple d'intégration de PHP et HTML.";
    ?>
    <header>
        <h1><?php echo $titre; ?></h1>
    </header>
    <main>
        <p><?php echo $description; ?></p>
    </main>
    <footer>
        <p>&copy; 2024 Mon Projet Web Étudiant</p>
    </footer>
</body>
</html>
```

**Explications :**
- Les variables `$titre` et `$description` sont utilisées pour stocker le titre et la description de la page.
- Le contenu des variables est affiché dans les sections correspondantes du document HTML.

### Exercice Autonome 6

Ajoutez une nouvelle section dans `page.php` pour afficher l'heure actuelle en utilisant la fonction `date()` de PHP.

### Conclusion

En suivant ces étapes, vous avez appris à :
- Déclarer, initialiser et utiliser des variables en PHP.
- Utiliser les structures de contrôle pour afficher des messages conditionnels et utiliser des boucles.
- Manipuler des tableaux pour stocker et afficher des données.
- Intégrer PHP et HTML pour créer une page web dynamique et stylisée.

## Résultats

Une fois que vous avez terminé toutes les étapes, soumettez votre travail en utilisant le lien suivant : [Lien de soumission des résultats](#)

---
