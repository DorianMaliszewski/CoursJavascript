import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../hooks/useLocale";

const code1 = `<button onclick="alert('Hello World!')">Cliquez ici</button>`;

export const Intro = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.intro.title")}</h1>
      <p>
        JavaScript est un langage de programmation de script principalement
        utilisé dans les pages Web interactives pour rendre les pages plus
        dynamiques et réactives. JavaScript est exécuté côté client
        (c'est-à-dire dans le navigateur Web de l'utilisateur) et permet de
        manipuler l'interface utilisateur, de réaliser des appels HTTP
        asynchrones, de créer des animations, etc.
      </p>
      <p>
        JavaScript est un langage de programmation orienté objet, ce qui
        signifie qu'il permet de créer des objets qui possèdent des propriétés
        (des valeurs associées à des noms) et des méthodes (des fonctions
        associées à l'objet). JavaScript supporte également les fonctions
        anonymes, les closures, le polymorphisme, l'héritage, etc.
      </p>
      <p>
        JavaScript est un langage de programmation interprété, ce qui signifie
        qu'il n'est pas nécessaire de le compiler avant de l'exécuter. Le code
        JavaScript est généralement intégré directement dans les pages HTML sous
        forme de balises &lt;script&gt;. Le code JavaScript peut également être
        stocké dans des fichiers externes et inclus dans les pages HTML à l'aide
        de l'attribut src de la balise &lt;script&gt;.
      </p>
      <p>
        Voici un exemple de code JavaScript qui affiche un message dans une
        boîte de dialogue lorsque vous cliquez sur un bouton :
      </p>
      <ReactSyntaxHighlighter
        language="html"
        style={atomOneDark}
        showLineNumbers
      >
        {code1}
      </ReactSyntaxHighlighter>
    </section>
  );
};
