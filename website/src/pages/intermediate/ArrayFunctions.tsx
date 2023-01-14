import { useLocale } from "../../hooks/useLocale";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const code1 = `let numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.map(x => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8]`;

const code2 = `let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4]`;

const code3 = `let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 10`;

export const ArrayFunctions = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.intermediate.arrayFunctions.title")}</h1>
      <h2>Fonction map()</h2>
      <p>
        La fonction <code>map()</code> permet de parcourir tous les éléments
        d'un tableau et de les transformer selon une fonction définie. L'exemple
        suivant utilise <code>map()</code> pour doubler chaque élément d'un
        tableau:
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        wrapLines
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </ReactSyntaxHighlighter>
      <h2>Fonction filter()</h2>
      <p>
        La fonction <code>filter()</code> permet de filtrer les éléments d'un
        tableau en fonction d'une condition donnée. L'exemple suivant utilise{" "}
        <code>filter()</code> pour extraire les nombres pairs d'un tableau:
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        wrapLines
        showLineNumbers
        style={atomOneDark}
      >
        {code2}
      </ReactSyntaxHighlighter>

      <h2>Fonction reduce()</h2>
      <p>
        La fonction <code>reduce()</code> permet de réduire un tableau à une
        seule valeur en combinant les éléments du tableau en utilisant une
        fonction donnée. L'exemple suivant utilise <code>reduce()</code> pour
        calculer la somme de tous les éléments d'un tableau:
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        wrapLines
        showLineNumbers
        style={atomOneDark}
      >
        {code3}
      </ReactSyntaxHighlighter>
      <p>
        Il est important de noter que ces fonctions ne modifient pas le tableau
        d'origine, elles retournent un nouveau tableau avec les modifications
        effectuées.
      </p>
    </section>
  );
};
