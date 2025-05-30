---
layout: "layouts/Layout.astro"
title: "TP Multiple"
---

# TP 1 : Morpion

## Objectif
Créer un jeu de morpion interactif avec PHP. Vous apprendrez à :
1. Manipuler des formulaires HTML pour interagir avec un serveur PHP.
2. Modifier le CSS pour améliorer l'apparence du morpion.
3. Ajouter une fonctionnalité pour détecter le vainqueur du jeu.

---

## Partie 1 : Préparation du plateau et amélioration du CSS

### Étape 1 : Le code PHP et HTML
Voici le code de base du jeu de morpion en PHP. Vous devrez utiliser ce code pour démarrer le TP :

```php
<?php
// Initialisation du plateau (3x3) si non défini
if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION['plateau'])) {
    $_SESSION['plateau'] = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    $_SESSION['joueur'] = 'X'; // X commence
}

// Gestion du clic sur une case
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['ligne']) && isset($_POST['colonne'])) {
    $ligne = (int)$_POST['ligne'];
    $colonne = (int)$_POST['colonne'];

    // Vérifie si la case est vide
    if ($_SESSION['plateau'][$ligne][$colonne] === '') {
        $_SESSION['plateau'][$ligne][$colonne] = $_SESSION['joueur'];
        // Change de joueur
        $_SESSION['joueur'] = $_SESSION['joueur'] === 'X' ? 'O' : 'X';
    }
}

// Réinitialiser le plateau
if (isset($_POST['reset'])) {
    session_destroy();
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Morpion</title>
</head>
<body>
    <header>
        <div class="logo">Logo</div>
        <nav>
            <ul>
                <li>Echecs</li>
                <li>Mahjong</li>
                <li>Force 4</li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="morpion">
            <?php foreach ($_SESSION['plateau'] as $ligneIndex => $ligne) : ?>
                <div class="morpionligne">
                    <?php foreach ($ligne as $colonneIndex => $case) : ?>
                        <form method="POST" >
                            <input type="hidden" name="ligne" value="<?php echo $ligneIndex; ?>">
                            <input type="hidden" name="colonne" value="<?php echo $colonneIndex; ?>">
                            <button type="submit" >
                                <?php echo htmlspecialchars($case); ?>
                            </button>
                        </form>
                    <?php endforeach; ?>
                </div>
            <?php endforeach; ?>
        </div>

        <form method="POST">
            <button type="submit" name="reset">Réinitialiser</button>
        </form>
    </main>

    <footer>
        <div>Google Maps</div>
        <div>Réseaux Sociaux</div>
        <div>Contact+Infos</div>
    </footer>
</body>
</html>

?>
```

### Étape 2 : Amélioration du CSS
Vous devez modifier le fichier `styles.css` pour rendre le plateau plus esthétique. Voici quelques idées :
- Centrez le plateau au milieu de l'écran.
- Ajoutez une bordure et une couleur de fond aux cases.
- Mettez en surbrillance la case survolée.
- Changez le style du bouton pour qu'il s'intègre au thème général.

Le code css de base : 

```css
body {
    margin: 0;
}

header {
    display:flex;
    justify-content: space-between;
    height: 5vh;
    background-color: darkslateblue;
    color: beige;
    align-items: center;
    padding: 10px;
}

nav ul {
display: flex;
list-style-type: none;
justify-content: space-between;
gap: 10px;
}

footer{
    height: 5vh;
    background-color: chartreuse;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
}

main
{
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.PUB {
    background-color: hotpink;
    height: 90vh;
    width:20vw ;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 10px;
    padding-right: 10px;
    
}

.PUB div{
    background-color: khaki;
    height: 20vh;
    width: 100%;
    
}

.morpion{
    width: 70vw;
    height: 70vw;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-left: 30px;
}

.morpionligne{
    width: 100% ;
    height: 30%;
    background-color: mintcream;
    display:flex;
    justify-content: space-between;
}

.morpionligne form { 
    height: 100%;
    width: 30%;
    background-color: orange;
}

.morpionligne form button { 
    height: 100%;
    width: 100%;
    font-size: xx-large;
}

.morpionligne div:hover { 

    background-color: blue;
    transform: rotate(180deg);
}
```

---

## Partie 2 : Détection du vainqueur

Dans cette partie, vous devez implémenter un système pour détecter si un joueur a gagné. Voici les étapes et indices pour vous guider :

1. **Analyser le plateau après chaque tour**  
   Pensez à examiner les lignes, colonnes et diagonales pour voir si elles contiennent trois symboles identiques (X ou O). Vous pouvez utiliser des boucles pour parcourir les différentes combinaisons possibles.

2. **Créer une logique de vérification**  
   - Pour vérifier une ligne : assurez-vous que toutes les cases de cette ligne contiennent le même symbole.
   - Pour les colonnes : appliquez une méthode similaire, mais en parcourant les cases verticalement.
   - Pour les diagonales : identifiez les deux diagonales et vérifiez si elles contiennent trois symboles identiques.

3. **Gérer le résultat**  
   Si un joueur gagne :
   - Affichez un message pour indiquer le gagnant.
   - Bloquez les cases restantes pour empêcher tout autre clic.

   Si aucune combinaison gagnante n'est trouvée et que toutes les cases sont remplies :
   - Déclarez un match nul.

4. **Afficher un message clair**  
   Intégrez un affichage dynamique pour informer les joueurs du résultat (par exemple, avec un message au-dessus ou en dessous du plateau).

5. **Réinitialisation**  
   Assurez-vous que le bouton de réinitialisation fonctionne toujours correctement pour redémarrer une nouvelle partie.

---

# TP 2 : Puissance 4

## Objectif
Ce TP est divisé en deux parties :
1. **Amélioration du design CSS** : Vous devrez intégrer et utiliser le fichier CSS fourni pour améliorer l'apparence du jeu.
2. **Ajout de la vérification de victoire** : Vous implémenterez une logique pour vérifier si un utilisateur a gagné.

---

## Étape 1 : Préparer votre environnement

### Fichiers fournis :
1. `index.php` : Contient le code PHP du jeu.
2. `styles.css` : Contient le style CSS que vous devrez intégrer.
---

### Le CSS
```css
body{
    margin: 0;
    padding: 0;
}

header{
    background-color: orange;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

nav ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    gap: 20px;
}

main{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: powderblue;
    height: calc(90vh - 40px);
    width: 100%;
}

.pub{
    width: 15vh;
    background-color: purple;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.pub div{
  background-color: red;
  height: 15vh;
  width: 80%;
}

footer {
    position: fixed;
    bottom: 0;
    background-color: orchid;
    display: flex;
    height: 5vh;
    width: 100%;
    align-items: center;
    justify-content: space-around;
}

.ligne{
    display: flex;
    gap: 4px;
    padding: 10px;
    width: min-content;
}

.bleu{
    background-color: blue;
}


.puissance-quatre{
    display: flex;
    
    flex-direction: column;
    gap: 4px;
    align-items: center;

}
.ligne div{
    height: 8vw;
    width: 8vw;
    border-radius: 50%;
    transition: all 1s;
    border: solid;
}

.ligne form{
    height: 8vw;
    width: 8vw;
    border-radius: 50%;
    transition: all 1s;
}

.ligne form button{
    height: 8vw;
    width: 8vw;
    border-radius: 50%;
    transition: all 1s;
}

.socle{
    width: calc(8vw * 8);
    background-color: #0000ff;
    height: 8vw;
}

.rouge { background-color: red; }
.jaune { background-color: yellow; }
```

---

### Le PHP

```php
<?php
session_start();

// Initialisation du tableau de jeu
if (!isset($_SESSION['board'])) {
    $_SESSION['board'] = array_fill(0, 6, array_fill(0, 7, null));
}

// Gestion des clics
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['col'])) {
    $col = intval($_POST['col']);

    // Trouver la première ligne disponible dans la colonne
    for ($row = 5; $row >= 0; $row--) {
        if ($_SESSION['board'][$row][$col] === null) {
            // Définir la couleur actuelle (alternance entre "rouge" et "jaune")
            if (!isset($_SESSION['current_color']) || $_SESSION['current_color'] === 'jaune') {
                $_SESSION['next_color'] = 'jaune';
                $_SESSION['current_color'] = 'rouge';

            } else {
                $_SESSION['next_color'] = 'rouge';
                $_SESSION['current_color'] = 'jaune';
            }

            // Mettre à jour le tableau avec la couleur actuelle
            $_SESSION['board'][$row][$col] = $_SESSION['current_color'];
            break;
        }
    }
}
else
{
    $_SESSION['next_color'] = 'rouge';
}

// Réinitialiser le plateau
if (isset($_POST['reset'])) {
    session_destroy();
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}


?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <link rel="stylesheet" href="styles.css">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Puissance Quatre</title>
</head>
<body>
<header>
            <div id="logo-head">logo</div>
            <nav>
                <ul>
                    <li>morpion</li>
                    <li>test de personnalité</li>
                    <li>calculatrice</li>
                </ul>
            </nav>
        </header>
    <main>
        <div class="puissance-quatre">
            <div class="ligne">
                <?php for ($j = 0; $j < 7; $j++): ?>
                    <form method="post" action="index.php" style="display: inline;">
                        <input type="hidden" name="col" value="<?php echo $j; ?>">
                        <button type="submit" class="<?php echo $_SESSION['next_color'];?>">&#x25BC;</button>
                    </form>
                <?php endfor; ?>
            </div>

            <div>
                <?php for ($i = 0; $i < 6; $i++): ?>
                    <div class="ligne bleu">
                        <?php for ($j = 0; $j < 7; $j++): ?>
                            <div class="cell <?php echo $_SESSION['board'][$i][$j] ?? ''; ?>"></div>
                        <?php endfor; ?>
                    </div>
                <?php endfor; ?>
            </div>

            <div class="socle">
                <form method="POST">
                    <button type="submit" name="reset">Réinitialiser</button>
                </form>
            </div>
        </div>
        <div class="pub">
        <div>pub1</div>
        <div>pub2</div>
        <div>pub3</div>
    </div>
</main>
<footer>
    <div>Contact</div>
    <div>Nos reseaux</div>
    <div>Mention légale</div>
</footer>

</body>
</html>
```
## Partie 1 : Amélioration de l'interface visuelle

### Objectif
Ameliorer l'interface visuelle en retravaillant les coouleur, espacement,etc.

## Partie 2 : Ajout de la vérification de victoire

### Objectif
Implémentez une fonction qui vérifie si un joueur a aligné 4 pions (horizontalement, verticalement ou en diagonale).

### Où mettre le code ?
1. Dans le fichier `index.php`, ajoutez une fonction PHP qui vérifie la victoire.
2. Appelez cette fonction après chaque action de l'utilisateur.
3. Affichez un message (par exemple, une alerte) si un joueur a gagné.

```php
// Ajoutez votre fonction ici
function checkWinner($board) {
    // Votre code pour vérifier la victoire
}
```
---

# TP 3 : Test de Personnalité

Dans ce TP vous allez devoir appliquer le Style que nous avions definis dans la dernière séance au code PHP que je vous donne. 

## Le code PHP

Le code est composé de deux pages, une page permettant la saisie des questions et une page permettant l'affichage des résultats. 

### Le Questionnaire (index.php)

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test de Personnalité</title>
</head>
<body>
    <div class="container">
        <h1>Test de Personnalité</h1>
        <form action="resultat.php" method="POST">
            <div class="question">
                <p>1. Vous aimez aider les autres.</p>
                <input type="hidden" name="criteria[q1]" value="gentillesse">
                <div class="options">
                    <label><input type="radio" name="q1" value="1" required> Pas du tout d'accord</label>
                    <label><input type="radio" name="q1" value="2"> Pas d'accord</label>
                    <label><input type="radio" name="q1" value="3"> Neutre</label>
                    <label><input type="radio" name="q1" value="4"> D'accord</label>
                    <label><input type="radio" name="q1" value="5"> Très d'accord</label>
                </div>
            </div>

            <div class="question">
                <p>2. Vous préférez économiser que dépenser.</p>
                <input type="hidden" name="criteria[q2]" value="radin">
                <div class="options">
                    <label><input type="radio" name="q2" value="1" required> Pas du tout d'accord</label>
                    <label><input type="radio" name="q2" value="2"> Pas d'accord</label>
                    <label><input type="radio" name="q2" value="3"> Neutre</label>
                    <label><input type="radio" name="q2" value="4"> D'accord</label>
                    <label><input type="radio" name="q2" value="5"> Très d'accord</label>
                </div>
            </div>

            <div class="question">
                <p>3. Vous aimez être le centre de l'attention.</p>
                <input type="hidden" name="criteria[q3]" value="egocentrique">
                <div class="options">
                    <label><input type="radio" name="q3" value="1" required> Pas du tout d'accord</label>
                    <label><input type="radio" name="q3" value="2"> Pas d'accord</label>
                    <label><input type="radio" name="q3" value="3"> Neutre</label>
                    <label><input type="radio" name="q3" value="4"> D'accord</label>
                    <label><input type="radio" name="q3" value="5"> Très d'accord</label>
                </div>
            </div>

            <div class="question">
                <p>4. Vous vous sentez satisfait après avoir aidé quelqu'un.</p>
                <input type="hidden" name="criteria[q4]" value="gentillesse">
                <div class="options">
                    <label><input type="radio" name="q4" value="1" required> Pas du tout d'accord</label>
                    <label><input type="radio" name="q4" value="2"> Pas d'accord</label>
                    <label><input type="radio" name="q4" value="3"> Neutre</label>
                    <label><input type="radio" name="q4" value="4"> D'accord</label>
                    <label><input type="radio" name="q4" value="5"> Très d'accord</label>
                </div>
            </div>

            <button type="submit">Voir les résultats</button>
        </form>
    </div>
</body>
</html>
```

### La page des résultats (resultat.php)

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $criteria = $_POST['criteria'];
    $results = [];

    foreach ($criteria as $question => $criterion) {
        if (!isset($results[$criterion])) {
            $results[$criterion] = 0;
        }
        $results[$criterion] += (int) $_POST[$question];
    }

    echo "<div style='text-align:center; padding: 20px;'>";
    echo "<h1>Résultats du Test de Personnalité</h1>";
    foreach ($results as $criterion => $score) {
        echo "<p><strong>$criterion:</strong> $score points</p>";
    }
    echo "</div>";
} else {
    header('Location: index.php');
    exit;
}
?>
```

## Partie 1 : Styliser le formulaire

Vous devez styliser le formulaire comme nous l'avons vue dans le cours.

## Partie 2 : Styliser la page des résultats

Vous allez devoir modifier la page resultat.php afin que la page présente le résusltat du questionnaire de manière jolie. Vous pouvez par exemple transformer le nombre de points obtenu dans certain critère par une progress bar.

## Bonus : Faire un graphique

Vous devrez faire un graphique permettant de visualiser les différents critères.

---

# TP 4 : Calculatrice en HTML/CSS/PHP

Dans ce TP, vous allez travailler sur une calculatrice simple développée en PHP. Vous allez personnaliser son design et ajouter une fonctionnalité supplémentaire.

Pour vous aider, vous vous baserez sur le code php suivant : 

```php
    <?php
// Initialisation des variables
$result = "";
$display = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input = $_POST['input'] ?? "";

    // Évaluer l'expression si "=" est pressé
    if (isset($_POST['equals'])) {
        try {
            $display = eval("return $input;");
        } catch (Throwable $e) {
            $display = "Erreur";
        }
    } elseif (isset($_POST['clear'])) {
        $display = "";
        $input = "";
    } else {
        $display = $input;
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <div class="calculator">
        <form method="POST">
            <input type="text" class="screen" name="input" value="<?= htmlspecialchars($display) ?>" readonly>
            <div class="buttons">
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '7') ?>">7</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '8') ?>">8</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '9') ?>">9</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '/') ?>">/</button>

                <button type="submit" name="input" value="<?= htmlspecialchars($display . '4') ?>">4</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '5') ?>">5</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '6') ?>">6</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '*') ?>">x</button>

                <button type="submit" name="input" value="<?= htmlspecialchars($display . '1') ?>">1</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '2') ?>">2</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '3') ?>">3</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '-') ?>">-</button>

                <button type="submit" name="clear">C</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '0') ?>">0</button>
                <button type="submit" name="equals">=</button>
                <button type="submit" name="input" value="<?= htmlspecialchars($display . '+') ?>">+</button>
            </div>
        </form>
    </div>
</body>
</html>

```

## Objectifs du TP

1. **Partie 1 : Appliquer le design CSS**  
   Vous allez appliquer un style en CSS pour que la calculatrice corresponde au design vu lors de la séance précédente.

2. **Partie 2 : Ajouter une fonctionnalité "historique des calculs"**  
   Vous ajouterez un tableau affichant les derniers calculs effectués sous la calculatrice.

---
Ajouter une fonctionnalité "historique des calculs"

Dans cette partie, vous allez ajouter une section sous la calculatrice pour afficher les derniers calculs effectués.

1. Modifiez votre fichier PHP pour inclure un tableau des historiques. Voici un exemple de modification dans votre fichier :

   ```php
   <?php
   // Initialisation des variables
   $result = "";
   $display = "";
   $history = [];

   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
       $input = $_POST['input'] ?? "";

       // Évaluer l'expression si "=" est pressé
       if (isset($_POST['equals'])) {
           try {
               $result = eval("return $input;");
               $history[] = $input . " = " . $result;
               $display = $result;
           } catch (Throwable $e) {
               $display = "Erreur";
           }
       } elseif (isset($_POST['clear'])) {
           $display = "";
           $input = "";
       } else {
           $display = $input;
       }
   }
   ?>

   <div class="history">
       <h2>Historique des calculs</h2>
       <ul>
           <?php foreach ($history as $entry): ?>
               <li><?= htmlspecialchars($entry) ?></li>
           <?php endforeach; ?>
       </ul>
   </div>
   ```

2. Ajoutez le style suivant à votre fichier `style.css` pour styliser l'historique :

   ```css
   .history {
       margin-top: 20px;
       font-size: 0.9em;
       color: #333;
   }
   .history ul {
       list-style: none;
       padding: 0;
   }
   .history li {
       background: #f9f9f9;
       padding: 5px 10px;
       margin-bottom: 5px;
       border-radius: 3px;
   }
   ```

3. Testez à nouveau votre calculatrice et assurez-vous que les calculs effectués s'affichent dans l'historique.

---

## Bonus

- Ajoutez un bouton pour effacer l'historique.
- Personnalisez les couleurs des boutons et du fond pour mieux correspondre au style de votre choix.


---
