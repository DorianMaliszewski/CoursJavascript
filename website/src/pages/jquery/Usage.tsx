import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `$(document).ready(function() {
  $("#mon-element").css("background-color", "red");
});`;

const code2 = `$(document).ready(function() {
  $("#mon-element").fadeOut(1000);
});`;

const code3 = `$(document).ready(function() {
  $("#mon-bouton").click(function() {
    alert("Bouton cliqué!");
  });
});`;

export const Usage = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.jquery.usage.title")}</h1>
      <p>
        Une fois que la bibliothèque jQuery est incluse, vous pouvez utiliser
        les fonctionnalités de jQuery dans votre code JavaScript. Voici comment
        sélectionner un élément HTML avec jQuery et changer sa couleur de fond :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </ReactSyntaxHighlighter>
      <p>Voici comment utiliser une animation avec jQuery :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code2}
      </ReactSyntaxHighlighter>
      <p>Voici comment gérer les évènements avec jQuery :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code3}
      </ReactSyntaxHighlighter>
      <p>
        Il existe de nombreuses autres fonctionnalités de jQuery, comme les
        requêtes AJAX, la manipulation du contenu HTML, la validation de
        formulaire, etc. Consultez la{" "}
        <a href="https://api.jquery.com/" target="_blank">
          documentation de jQuery
        </a>
        &nbsp; pour en savoir plus sur les différentes fonctionnalités de la
        bibliothèque.
      </p>
    </section>
  );
};
