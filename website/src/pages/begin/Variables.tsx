import { useLocale } from "../../hooks/useLocale";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const code1 = `let maVariable;`;

const code2 = `let nombre = 10; // nombre entier
let decimal = 3.14; // nombre à virgule flottante
let chaine = "Bonjour"; // chaîne de caractères
let boolean = true; // booléen
let vide = null; // valeur null
let indefini; // valeur undefined`;

const code3 = `let nombre = 10;
nombre += 5; // nombre vaut maintenant 15`;

const code4 = `let variable1, variable2, variable3;`;

const code5 = `let nom;
let age;
let estClient;
let nombreDeCommandes;`;

const code6 = `let 123; // ne peut pas commencer par un chiffre
let mon-nom; // ne peut pas contenir de tirets
let mon nom; // ne peut pas contenir d'espaces`;

const code7 = `var nom = "toto"; // ne doit pas être utilisé mais fonctionne encore

//Exemple valide
const nom = "toto"
let age = 18
age = 19

//Exemple incorrect
let nom = "toto" // cette variable n'est jamais réaffectée
const age = 18
age = 19 // cette variable est une constante elle ne doit pas être réaffectée
`;

export const Variables = () => {
  const t = useLocale();

  return (
    <section className="prose lg:prose-lg prose-slate max-w-full">
      <h1>{t("pages.begin.variables.title")}</h1>
      <h2>Déclaration de variables</h2>
      <p>Voici comment déclarer une variable en JavaScript :</p>
      <p>
        Vous pouvez également initialiser une variable en lui affectant une
        valeur lors de sa déclaration :
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </SyntaxHighlighter>
      <h2>Types de données</h2>
      <p>
        Il existe différents types de données que vous pouvez stocker dans une
        variable, tels que des nombres (entiers ou flottants), des chaînes de
        caractères, des booléens (`true` ou `false`), et des valeurs spéciales
        comme `null` et `undefined`.
      </p>
      <p>Voici quelques exemples de variables de différents types :</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code2}
      </SyntaxHighlighter>
      <h2>Opérateurs d'affectation</h2>
      <p>
        Vous pouvez utiliser des opérateurs pour affecter des valeurs à une
        variable, comme l'opérateur `=` pour l'affectation de base, ou
        l'opérateur `+=` pour ajouter une valeur à une variable existante :
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code3}
      </SyntaxHighlighter>

      <h2>Déclaration multiple</h2>
      <p>
        Il est possible de déclarer plusieurs variables en utilisant la syntaxe
        suivante :
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code4}
      </SyntaxHighlighter>

      <h2>Nommage de variables</h2>
      <p>
        Il est recommandé de donner des noms significatifs aux variables pour
        rendre votre code plus facile à lire et à comprendre. Vous pouvez
        utiliser des lettres, des chiffres et des underscores (`_`) dans les
        noms de variables, mais les noms de variables ne peuvent pas commencer
        par un chiffre. Il est également conseillé d'utiliser des camelCases
        (première lettre en minuscule, suivies de mots avec la première lettre
        en majuscule) pour les noms de variables composées de plusieurs mots,
        comme `maVariable`.
      </p>
      <p>Voici quelques exemples de noms de variables valides :</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code5}
      </SyntaxHighlighter>
      <p>Voici quelques exemples de noms de variables non valides :</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code6}
      </SyntaxHighlighter>

      <h2>var, let et const</h2>
      <p>
        Il est possible de déclarer une variable de différentes façon.{" "}
        <code>var</code> ne doit plus être utilisé il est remplacé par{" "}
        <code>let</code> qui sert à déclarer une variable qui peut être
        réaffectée par la suite. <code>const</code> permet de déclarer une
        variable qui ne doit pas être ré&affectée par la suite. Quelques soit le
        mot clef utilisé le code sera fonctionnel mais votre éditeur de code à
        de grande chance de vous signalez une erreur de déclaration permettant
        de garder votre code propre et cohérent
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code7}
      </SyntaxHighlighter>
    </section>
  );
};
