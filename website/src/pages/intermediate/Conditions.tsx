import { useLocale } from "../../hooks/useLocale";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeIf = `let x = 5;

if (x > 10) {
  console.log("x est plus grand que 10");
} else {
  console.log("x est plus petit ou égal à 10");
}`;

const codeIf2 = `let x = 5;
let y = 10;

if (x > 0 && y > 0) {
  console.log("x et y sont tous les deux positifs");
}

if (x > 0 || y > 0) {
  console.log("au moins un des deux est positif");
}`;

const codeIf3 = `let x = 5;

switch (x) {
  case 1:
    console.log("x est égal à 1");
    break;
  case 5:
    console.log("x est égal à 5");
    break;
  default:
    console.log("x est différent de 1 et 5");
    break;
}`;

export const Conditions = () => {
  const t = useLocale();

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl">{t("pages.intermediate.conditions.title")}</h1>
      <h2>If, Else</h2>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeIf}
      </SyntaxHighlighter>
      <p>
        Dans cet exemple, la condition vérifie si la variable <code>x</code> est
        supérieure à 10. Comme <code>x</code> est égal à 5, la condition est
        fausse et le message "<code>x est plus petit ou égal à 10</code>" est
        affiché dans la console.
      </p>
      <div>
        <p>
          Il existe plusieurs opérateurs de comparaison que tu peux utiliser
          dans les conditions :
        </p>
        <ul>
          <li>
            <code>&gt;</code> (strictement supérieur)
          </li>
          <li>
            <code>&lt;</code> (strictement inférieur)
          </li>
          <li>
            <code>&gt;=</code> (supérieur ou égal)
          </li>
          <li>
            <code>&lt;=</code> (inférieur ou égal)
          </li>
          <li>
            <code>==</code> (égal)
          </li>
          <li>
            <code>!=</code> (différent)
          </li>
        </ul>
      </div>
      <p>
        Tu peux également utiliser des conditions de type "ET" (
        <code>&amp;&amp;</code>) et "OU" (<code>||</code>) :
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeIf2}
      </SyntaxHighlighter>
      <p>
        Enfin, tu peux utiliser la structure <code>switch</code> pour vérifier
        plusieurs valeurs différentes d'une même variable :
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeIf3}
      </SyntaxHighlighter>
    </section>
  );
};
