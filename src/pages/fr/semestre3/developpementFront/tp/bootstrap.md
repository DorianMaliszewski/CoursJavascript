---
layout: "layouts/Layout.astro"
title: "Développemennt du mockup"
---

# TP : Créer un chatbot avec Tailwind CSS, Flowbite et Ollama

## Partie 1 : Configuration de l’environnement

1. **Installer Tailwind CSS**
   - Tailwind CSS est un framework CSS qui facilite le développement rapide d’interfaces élégantes et responsives.
   - **Lien** : [Documentation officielle de Tailwind CSS](https://tailwindcss.com/docs/installation)
   - Ajoutez Tailwind à votre projet en incluant son CDN directement dans votre fichier HTML :
     ```html
     <script src="https://cdn.tailwindcss.com"></script>
     ```

2. **Ajouter Flowbite**
   - Flowbite fournit des composants interactifs (boutons, modales, etc.) compatibles avec Tailwind CSS.
   - **Lien** : [Documentation officielle de Flowbite](https://flowbite.com/docs/getting-started/introduction/)
   - Intégrez Flowbite en ajoutant ce CDN dans votre fichier HTML :
     ```html
     <script src="https://cdn.jsdelivr.net/npm/flowbite/dist/flowbite.min.js"></script>
     ```

3. **Structure de base du projet**
   - Créez un fichier `index.html` contenant l'interface utilisateur et liez-y votre fichier CSS/JavaScript.

---

## Partie 2 : Interface utilisateur avec Tailwind CSS

- Créez une interface simple avec :
  - Une zone d'affichage des messages du chatbot.
  - Un champ de saisie (input) pour poser des questions.
  - Un bouton pour envoyer la question.

Voici une structure de base pour l'interface :

```html
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg">
        <div id="chatBox" class="p-4 h-64 overflow-y-auto">
            <!-- Messages ajoutés ici -->
        </div>
        <div class="p-4 flex">
            <input id="userInput" type="text" placeholder="Posez votre question..."
                class="flex-1 border rounded-lg p-2 mr-2" />
            <button id="sendButton" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Envoyer</button>
        </div>
    </div>
</div>
```

---

## Partie 3 : Intégration d’Ollama

1. **Installation d’Ollama**
   - Téléchargez Ollama sur votre ordinateur depuis le site officiel.
   - **Lien** : [Documentation officielle d’Ollama](https://ollama.com/)
   - Suivez les instructions pour installer et exécuter le serveur local d’Ollama.
   - Assurez-vous que le modèle LLaMA 3.2 (3B) est disponible et chargé :
     ```bash
     ollama pull llama-3.2-3b
     ollama serve
     ```
   - Le serveur d’Ollama est accessible par défaut sur `http://localhost:11434/api/ask`.

2. **Tester la connexion**
   - Ouvrez un terminal et envoyez une requête POST à Ollama pour vérifier qu’il répond correctement :
     ```bash
     curl -X POST http://localhost:11434/api/ask 
     -H "Content-Type: application/json" 
     -d '{"prompt": "Hello, how are you?"}'
     ```

---

## Partie 4 : Interaction avec Ollama via JavaScript

Voici un script JavaScript pour envoyer la question posée dans le champ input et afficher la réponse dans la zone de chat :

```javascript
document.getElementById("sendButton").addEventListener("click", async () => {
    // Récupérer la saisie utilisateur depuis l'input
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) {
        alert("Veuillez entrer une question !");
        return;
    }

    // Ajouter la question de l'utilisateur dans la zone de chat
    addMessage("You", userInput);

    try {
        // Envoyer la requête à Ollama
        const response = await fetch("http://localhost:11434/api/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: `Imagine que tu es cet étudiant. Réponds comme si la question te concernait : ${userInput}`
            })
        });

        // Lire la réponse
        if (!response.ok) throw new Error("Erreur de l'API");
        const data = await response.json();

        // Afficher la réponse du chatbot
        addMessage("Chatbot", data.answer || "Pas de réponse reçue.");
    } catch (error) {
        console.error(error);
        addMessage("Chatbot", "Erreur lors de la connexion à Ollama.");
    }

    // Vider le champ input
    document.getElementById("userInput").value = "";
});

// Fonction pour ajouter un message dans la zone de chat
function addMessage(sender, message) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.className = sender === "You" ? "text-right text-blue-600" : "text-left text-gray-800";
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);

    // Scroller automatiquement vers le bas
    chatBox.scrollTop = chatBox.scrollHeight;
}
```

---

## Partie 5 : Finalisation

1. **Personnalisation**
   - Les étudiants peuvent personnaliser le style de leur chatbot avec Tailwind (couleurs, animations, etc.).
   - Ils doivent modifier le prompt pour refléter leur propre personnalité.

2. **Validation**
   - Testez le chatbot en posant des questions variées.
   - Vérifiez que la mise en page est responsive (testez sur mobile et desktop).

---

Ce TP guidera les étudiants à travers la création d’un projet fonctionnel et stylé qu’ils pourront intégrer dans leur portfolio.
