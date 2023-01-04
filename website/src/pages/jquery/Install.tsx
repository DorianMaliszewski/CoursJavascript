import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`;

export const Install = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.jquery.install.title")}</h1>
      <p>
        Pour utiliser jQuery, vous devez inclure la bibliothèque jQuery dans
        votre page HTML en ajoutant une balise <code>script</code> avec l'URL de
        la bibliothèque :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </ReactSyntaxHighlighter>
    </section>
  );
};
