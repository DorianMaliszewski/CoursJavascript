import { useLocale } from "../../hooks/useLocale";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeFor1 = `for (initialisation; condition; étape) {
  // code à exécuter
}`;

const codeFor2 = `for (let i = 1; i <= 10; i++) {
  console.log(i);
}`;

const codeWhile1 = `while (condition) {
  // code à exécuter
}`;

const codeWhile2 = `let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}`;

const codeDoWhile = `do {
  // code à exécuter
} while (condition);`;

const codeDoWhile2 = `let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);`;

export const Loops = () => {
  const t = useLocale();

  return (
    <section className="gap-8 flex flex-col">
      <h1 className="text-3xl">{t("pages.intermediate.loops.title")}</h1>

      <h2>Boucle for</h2>
      <p>La boucle for en JavaScript s'utilise de la manière suivante :</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeFor1}
      </SyntaxHighlighter>
      <p>
        La boucle for commence par l'initialisation de la boucle, qui est
        généralement utilisée pour déclarer et initialiser une variable de
        boucle. Ensuite, la condition est vérifiée. Si la condition est vraie,
        le code à l'intérieur de la boucle est exécuté. Enfin, l'étape est
        exécutée, généralement utilisée pour mettre à jour la variable de
        boucle. Ensuite, la condition est à nouveau vérifiée, et ainsi de suite
        jusqu'à ce que la condition soit fausse, ce qui fait sortir de la
        boucle.
      </p>
      <p>Voici un exemple de boucle for qui affiche les nombres de 1 à 10 :</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeFor2}
      </SyntaxHighlighter>

      <h2>Boucle while</h2>
      <p>La boucle while en JavaScript s'utilise de la manière suivante :</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeWhile1}
      </SyntaxHighlighter>
      <p>
        La boucle while vérifie d'abord la condition. Si la condition est vraie,
        le code à l'intérieur de la boucle est exécuté, puis la condition est à
        nouveau vérifiée. Cela se poursuit jusqu'à ce que la condition soit
        fausse, ce qui fait sortir de la boucle.
      </p>
      <p>
        Voici un exemple de boucle while qui affiche les nombres de 1 à 10 :
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeWhile2}
      </SyntaxHighlighter>

      <h2>Boucle do-while</h2>
      <p>La boucle do-while en JavaScript s'utilise de la manière suivante :</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeDoWhile}
      </SyntaxHighlighter>
      <p>
        La boucle do-while fonctionne de manière similaire à la boucle while,
        mais la condition est vérifiée à la fin de chaque itération de la boucle
        au lieu de au début. Cela signifie que le code à l'intérieur de la
        boucle sera toujours exécuté au moins une fois, même si la condition est
        fausse.
      </p>
      <p>
        Voici un exemple de boucle do-while qui affiche les nombres de 1 à 10 :
      </p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {codeDoWhile2}
      </SyntaxHighlighter>

      <h2>Instructions de contrôle de flux</h2>
      <p>
        Il existe également des instructions de contrôle de flux comme{" "}
        <code>break</code> et <code>continue</code>, qui permettent de sortir de
        la boucle ou de passer à l'itération suivante de la boucle.
      </p>
      <p>
        <code>break</code> permet de sortir complètement de la boucle.
      </p>
      <p>
        <code>continue</code> permet de passer à l'itération suivante de la
        boucle sans exécuter le reste du code de l'itération en cours.
      </p>
    </section>
  );
};
