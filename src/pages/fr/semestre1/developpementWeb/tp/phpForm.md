---
layout: "layouts/Layout.astro"
title: "TP Complet : PHP et Formulaires"
---

# TP 2 : PHP et Formulaires 

## Objectifs

1. Comprendre les bases de l'intégration de PHP avec les formulaires HTML.
2. Apprendre à traiter les données de formulaire en PHP.
3. Valider les entrées utilisateur côté serveur.
4. Créer une page de contact dynamique avec PHP et HTML.

## Instructions

### Étape 1 : Création de la Page de Contact

Créez un fichier HTML appelé `contact.html` et ajoutez le code HTML suivant pour créer un formulaire de contact de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="form-styles.css">
</head>
<body>
    <header>
        <h1>Contactez-moi</h1>
    </header>
    <main>
        <form action="process_contact.php" method="post">
            <div>
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div>
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="subject">Sujet :</label>
                <input type="text" id="subject" name="subject" required>
            </div>
            <div>
                <label for="message">Message :</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div>
                <label for="phone">Téléphone (optionnel) :</label>
                <input type="tel" id="phone" name="phone">
            </div>
            <div>
                <button type="submit">Envoyer</button>
            </div>
        </form>
    </main>
    <footer>
        <p>&copy; 2024 Mon Projet Web Étudiant</p>
    </footer>
</body>
</html>
```

**Explications :**
- Ce formulaire HTML envoie les données à un script PHP `process_contact.php` via la méthode POST.

### Étape 2 : Traitement des Données du Formulaire en PHP

Créez un fichier PHP appelé `process_contact.php` pour traiter les données soumises par le formulaire :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process Contact</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="form-styles.css">
</head>
<body>
    <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $phone = $_POST['phone'];
    ?>
    <header>
        <h1>Merci pour votre message, <?php echo htmlspecialchars($name); ?>!</h1>
    </header>
    <main>
        <p>Nous avons bien reçu votre message :</p>
        <ul>
            <li><strong>Nom :</strong> <?php echo htmlspecialchars($name); ?></li>
            <li><strong>Email :</strong> <?php echo htmlspecialchars($email); ?></li>
            <li><strong>Sujet :</strong> <?php echo htmlspecialchars($subject); ?></li>
            <li><strong>Message :</strong> <?php echo nl2br(htmlspecialchars($message)); ?></li>
            <li><strong>Téléphone :</strong> <?php echo htmlspecialchars($phone); ?></li>
        </ul>
    </main>
    <footer>
        <p>&copy; 2024 Mon Projet Web Étudiant</p>
    </footer>
</body>
</html>
```

**Explications :**
- Les données du formulaire sont récupérées à l'aide de `$_POST`.
- La fonction `htmlspecialchars` est utilisée pour échapper les caractères spéciaux et éviter les attaques XSS.

### Exercice Autonome 1

Modifiez le fichier `process_contact.php` pour ajouter une validation de base :
1. Vérifiez que les champs `name`, `email`, `subject` et `message` ne sont pas vides.
2. Affichez un message d'erreur si l'un de ces champs est vide.

### Étape 3 : Validation des Données de Formulaire

Ajoutez une validation plus avancée dans `process_contact.php` :

```php
<?php
    $errors = [];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];

    if (empty($name)) {
        $errors[] = "Le nom est requis.";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Un email valide est requis.";
    }

    if (empty($subject)) {
        $errors[] = "Le sujet est requis.";
    }

    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }

    if (count($errors) > 0) {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    } else {
        echo "<h1>Merci pour votre message, " . htmlspecialchars($name) . "!</h1>";
        echo "<p>Nous avons bien reçu votre message :</p>";
        echo "<ul>";
        echo "<li><strong>Nom :</strong> " . htmlspecialchars($name) . "</li>";
        echo "<li><strong>Email :</strong> " . htmlspecialchars($email) . "</li>";
        echo "<li><strong>Sujet :</strong> " . htmlspecialchars($subject) . "</li>";
        echo "<li><strong>Message :</strong> " . nl2br(htmlspecialchars($message)) . "</li>";
        echo "<li><strong>Téléphone :</strong> " . htmlspecialchars($phone) . "</li>";
        echo "</ul>";
    }
?>
```

**Explications :**
- Un tableau `$errors` est utilisé pour stocker les messages d'erreur.
- `filter_var` est utilisé pour valider l'email.

### Exercice Autonome 2

Ajoutez la validation suivante au formulaire :
1. Le numéro de téléphone doit être facultatif, mais s'il est fourni, il doit contenir uniquement des chiffres.
2. Affichez un message d'erreur approprié si le numéro de téléphone contient des caractères non numériques.

### Étape 4 : Amélioration de la Validation et Feedback

Améliorez le fichier `process_contact.php` pour conserver les valeurs de formulaire en cas d'erreur afin que l'utilisateur n'ait pas à les ressaisir :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process Contact</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="form-styles.css">
</head>
<body>
    <?php
        $errors = [];
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $subject = $_POST['subject'] ?? '';
        $message = $_POST['message'] ?? '';
        $phone = $_POST['phone'] ?? '';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($name)) {
                $errors[] = "Le nom est requis.";
            }

            if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors[] = "Un email valide est requis.";
            }

            if (empty($subject)) {
                $errors[] = "Le sujet est requis.";
            }

            if (empty($message)) {
                $errors[] = "Le message est requis.";
            }

            if (!empty($phone) && !ctype_digit($phone)) {
                $errors[] = "Le numéro de téléphone doit contenir uniquement des chiffres.";
            }

            if (count($errors) == 0) {
                echo "<h1>Merci pour votre message, " . htmlspecialchars($name) . "!</h1>";
                echo "<p>Nous avons bien reçu votre message :</p>";
                echo "<ul>";
                echo "<li><strong>Nom :</strong> " . htmlspecialchars($name) . "</li>";
                echo "<li><strong>Email :</strong> " . htmlspecialchars($email) . "</li>";
                echo "<li><strong>Sujet :</strong> " . htmlspecialchars($subject) . "</li>";
                echo "<li><strong>Message :</strong> " . nl2br(htmlspecialchars($message)) . "</li>";
                echo "<li><strong>Téléphone :</strong> " . htmlspecialchars($phone) . "</li>";
                echo "</ul>";
            }
        }
    ?>
    <?php if (count($errors) > 0): ?>
        <?php foreach ($errors as $error): ?>
            <p style="color:red;"><?php echo $error; ?></p>
        <?php endforeach; ?>
        <form action="process_contact.php" method="post">
            <div>
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($name); ?>" required>
            </div>
            <div>
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($email); ?>" required>
            </div>
            <div>
                <label for="subject">Sujet :</label>
                <input type="text" id="subject" name="subject" value="<?php echo htmlspecialchars($subject); ?>" required>
            </div>
            <div>
                <label for="message">Message :</label>
                <textarea id="message" name="message" rows="5" required><?php echo htmlspecialchars($message); ?></textarea>
            </div>
            <div>
                <label for="phone">Téléphone (optionnel) :</label>
                <input type="tel" id="phone" name="phone" value="<?php echo htmlspecialchars($phone); ?>">
            </div>
            <div>
                <button type="submit">Envoyer</button>
            </div>
        </form>
    <?php endif; ?>
</body>
</html>
```

**Explications :**
- Les valeurs des champs sont conservées en cas d'erreur pour éviter que l'utilisateur ait à tout ressaisir.

### Exercice Autonome 3

Améliorez encore le formulaire pour :
1. Ajouter une validation côté client en utilisant des attributs HTML5 tels que `pattern` pour le numéro de téléphone.
2. Ajouter un champ de sélection pour le sujet avec plusieurs options prédéfinies.

### Conclusion

En suivant ces étapes, vous avez appris à :
- Créer et intégrer des formulaires HTML avec PHP.
- Traiter et valider les données de formulaire en PHP.
- Offrir un retour utilisateur approprié en cas d'erreur de validation.
- Améliorer l'expérience utilisateur en conservant les valeurs des champs et en ajoutant des validations côté client.

## Résultats

Une fois que vous avez terminé toutes les étapes, soumettez votre travail en utilisant le lien suivant : [Lien de soumission des résultats](#)

---
