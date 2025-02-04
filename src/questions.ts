// This is for testing purpose
export const questions = [
  {
    "question": "Pourquoi utilise-t-on `modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; })` ?",
    "answers": [
      "Pour fermer le modal uniquement lorsque l'on clique en dehors de la boîte de dialogue",
      "Pour éviter que le modal puisse être fermé",
      "Pour fermer le modal lorsqu'on clique sur n'importe quel élément",
      "Pour empêcher l'utilisateur de modifier le contenu du modal"
    ],
    "correct_answer": 0
  },
  {
    "question": "Pourquoi `let currentTache = null;` est-il défini en dehors des fonctions ?",
    "answers": [
      "Pour conserver la référence à la tâche sélectionnée à travers différents événements",
      "Pour éviter une erreur de syntaxe",
      "Parce que JavaScript n'autorise pas la déclaration de variables dans une fonction",
      "Parce que `null` est nécessaire pour éviter une fuite mémoire"
    ],
    "correct_answer": 0
  },
  {
    "question": "Quel est l'effet de `currentColonne.insertBefore(newTache, currentColonne.querySelector('.ajouter'));` ?",
    "answers": [
      "Ajoute la nouvelle tâche juste avant le bouton `Ajouter une tâche`",
      "Ajoute la nouvelle tâche en début de colonne",
      "Remplace le bouton `Ajouter une tâche` par la nouvelle tâche",
      "Ajoute la nouvelle tâche à la fin de la colonne"
    ],
    "correct_answer": 0
  },
  {
    "question": "Pourquoi utilise-t-on `dataset` pour stocker la description des tâches ?",
    "answers": [
      "Pour stocker des données personnalisées directement dans l'élément HTML sans affecter son affichage",
      "Parce que `innerText` ne permet pas de stocker des données",
      "Parce que c'est obligatoire en JavaScript moderne",
      "Parce que `localStorage` ne peut pas être utilisé pour stocker des descriptions"
    ],
    "correct_answer": 0
  },
  {
    "question": "Quel est le rôle de `overflow-x: auto;` sur `.carte` ?",
    "answers": [
      "Permet de faire défiler horizontalement les colonnes si elles dépassent la largeur de l'écran",
      "Empêche les colonnes de dépasser la largeur de la page",
      "Désactive le défilement vertical de la page",
      "Réduit automatiquement la taille des colonnes si elles sont trop larges"
    ],
    "correct_answer": 0
  }
]
