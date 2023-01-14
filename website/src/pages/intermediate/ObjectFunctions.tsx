import { useLocale } from "../../hooks/useLocale";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const code1 = `let person = { name: 'John', age: 30 };
let entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30]]`;

const code2 = `let person = { name: 'John', age: 30 };
let keys = Object.keys(person);
console.log(keys); // ['name', 'age']`;

const code3 = `let person = { name: 'John', age: 30 };
let values = Object.values(person);
console.log(values); // ['John', 30]`;

export const ObjectFunctions = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.intermediate.objectFunctions.title")}</h1>
      <h2>Fonction Object.entries()</h2>
      <p>
        La fonction <code>Object.entries()</code> permet de retourner un tableau
        de toutes les propriétés et valeurs d'un objet. L'exemple suivant
        utilise <code>Object.entries()</code> pour retourner un tableau des
        propriétés et valeurs d'un objet:
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        wrapLines
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </ReactSyntaxHighlighter>

      <h2>Fonction Object.keys()</h2>
      <p>
        La fonction <code>Object.keys()</code> permet de retourner un tableau
        des propriétés d'un objet. L'exemple suivant utilise{" "}
        <code>Object.keys()</code> pour retourner un tableau des propriétés d'un
        objet:
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        wrapLines
        showLineNumbers
        style={atomOneDark}
      >
        {code2}
      </ReactSyntaxHighlighter>

      <h2>Fonction Object.values()</h2>
      <p>
        La fonction <code>Object.values()</code> permet de retourner un tableau
        des valeurs des propriétés d'un objet. L'exemple suivant utilise{" "}
        <code>Object.values()</code> pour retourner un tableau des valeurs des
        propriétés d'un objet:
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        wrapLines
        showLineNumbers
        style={atomOneDark}
      >
        {code3}
      </ReactSyntaxHighlighter>
    </section>
  );
};
