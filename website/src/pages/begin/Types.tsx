import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `let nombre = 10; // number
let chaine = "Bonjour"; // string
let boolean = true; // boolean
let vide = null; // null
let indefini; // undefined
let symbole = Symbol("symbole"); // symbol
let bigint = 123456789012345678901234567890n; // bigint`;

const code2 = `let monObjet = {
  propriete1: valeur1,
  propriete2: valeur2,
  methode1: function() {
    // code de la méthode
  }
};`;

const code3 = `console.log(monObjet.propriete1); // affiche la valeur de la propriété1
monObjet.methode1(); // exécute la méthode1`;

export const Types = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slate lg:prose-lg max-w-full">
      <h1>{t("pages.begin.types.title")}</h1>
      <h2>Type de valeur primitif</h2>
      <p>En JavaScript, il existe sept types de valeurs primitives :</p>
      <ul>
        <li>
          <code>number</code> pour les nombres (entiers ou flottants)
        </li>
        <li>
          <code>string</code> pour les chaînes de caractères
        </li>
        <li>
          <code>boolean</code> pour les booléens (`true` ou `false`)
        </li>
        <li>
          <code>null</code> pour une valeur null
        </li>
        <li>
          <code>undefined</code> pour une valeur non définie
        </li>
        <li>
          <code>symbol</code> (introduit dans ECMAScript 2015) pour des valeurs
          symboliques uniques
        </li>
        <li>
          <code>bigint</code> (introduit dans ECMAScript 2020) pour des nombres
          entiers de grande précision
        </li>
      </ul>
      <p>
        Voici quelques exemples de valeurs de chaque type de valeur primitif :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </ReactSyntaxHighlighter>
      <h2>Type de valeur objet</h2>
      <p>
        En JavaScript, toutes les valeurs qui ne sont pas des valeurs primitives
        sont des objets. Les objets sont des valeurs qui ont des propriétés (qui
        peuvent être des valeurs primitives ou des objets) et des méthodes (des
        fonctions associées à l'objet).
      </p>
      <p>Voici comment créer un objet en JavaScript :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code2}
      </ReactSyntaxHighlighter>
      <p>Voici comment accéder aux propriétés et aux méthodes d'un objet :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code3}
      </ReactSyntaxHighlighter>
    </section>
  );
};
