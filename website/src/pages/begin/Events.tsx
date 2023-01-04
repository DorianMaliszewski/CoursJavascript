import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `<button onclick="maFonction()">Cliquez ici</button>

<script>
function maFonction() {
  alert("Vous avez cliqué sur le bouton!");
}
</script>`;

const code2 = `<button id="monBouton">Cliquez ici</button>

<script>
let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", maFonction);

function maFonction() {
  alert("Vous avez cliqué sur le bouton!");
}
</script>`;

const code3 = `monBouton.addEventListener("click", function(e) {
  e.preventDefault(); // empêche le comportement par défaut de l'évènement (par exemple, le rechargement de la page lors de la soumission d'un formulaire)
});`;

const code4 = `monBouton.addEventListener("click", function(e) {
  console.log(e.target); // affiche l'élément qui a déclenché l'évènement
  console.log(e.type); // affiche le type de l'évènement (par exemple, "click")
  console.log(e.clientX); // affiche la position X de la souris par rapport à la fenêtre du navigateur
  console.log(e.clientY); // affiche la position Y de la souris par rapport à la fenêtre du navigateur
});`;

const code5 = `document.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") { // vérifie si l'élément qui a déclenché l'évènement est un bouton
    console.log("Vous avez cliqué sur un bouton!");
  }
});`;

export const Events = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.begin.events.title")}</h1>
      <p>
        Les évènements en JavaScript sont des actions qui sont déclenchées par
        l'utilisateur (comme un clic sur un bouton) ou par le navigateur (comme
        le chargement d'une page). JavaScript vous permet de définir des
        fonctions de gestionnaire d'évènements qui seront exécutées lorsque
        l'évènement se produit.
      </p>
      <p>
        Voici comment définir un gestionnaire d'évènements pour l'évènement{" "}
        <code>click</code> d'un bouton :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code1}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment définir un gestionnaire d'évènements en utilisant l'API
        des évènements :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code2}
      </ReactSyntaxHighlighter>
      <p>Voici une liste de quelques évènements courants en JavaScript :</p>
      <ul>
        <li>
          <code>click</code> : déclenché lorsque l'utilisateur clique sur un
          élément
        </li>
        <li>
          <code>submit</code> : déclenché lorsque l'utilisateur soumet un
          formulaire
        </li>
        <li>
          <code>focus</code> : déclenché lorsque l'utilisateur place le curseur
          dans un élément
        </li>
        <li>
          <code>blur</code> : déclenché lorsque l'utilisateur retire le curseur
          d'un élément
        </li>
        <li>
          <code>change</code> : déclenché lorsque l'utilisateur modifie la
          valeur d'un élément
        </li>
        <li>
          <code>mouseover</code> : déclenché lorsque l'utilisateur place le
          curseur sur un élément
        </li>
        <li>
          <code>mouseout</code> : déclenché lorsque l'utilisateur retire le
          curseur d'un élément
        </li>
        <li>
          <code>keydown</code> : déclenché lorsque l'utilisateur appuie sur une
          touche du clavier
        </li>
        <li>
          <code>keyup</code> : déclenché lorsque l'utilisateur relâche une
          touche du clavier
        </li>
        <li>
          <code>load</code> : déclenché lorsque la page est chargée
        </li>
        <li>
          <code>unload</code> : déclenché lorsque l'utilisateur quitte la page
        </li>
      </ul>
      <p>
        Voici comment désactiver le comportement par défaut d'un évènement :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code3}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment accéder aux détails de l'évènement dans le gestionnaire
        d'évènements :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code4}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment définir un gestionnaire d'évènements sur tous les éléments
        d'un même type (par exemple, tous les boutons) :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code5}
      </ReactSyntaxHighlighter>
    </section>
  );
};
