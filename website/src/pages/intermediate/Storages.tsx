import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `// enregistrer une valeur dans le stockage local
localStorage.setItem("cle", "valeur");

// récupérer une valeur du stockage local
let valeur = localStorage.getItem("cle");

// supprimer une valeur du stockage local
localStorage.removeItem("cle");

// vider toutes les valeurs du stockage local
localStorage.clear();`;

const code2 = `// enregistrer un objet dans le stockage local
let monObjet = { "nom": "John", "âge": 30 };
localStorage.setItem("monObjet", JSON.stringify(monObjet));

// récupérer un objet du stockage local
let monObjet = JSON.parse(localStorage.getItem("monObjet"));

// enregistrer un tableau dans le stockage local
let monTableau = ["un", "deux", "trois"];
localStorage.setItem("monTableau", JSON.stringify(monTableau));

// récupérer un tableau du stockage local
let monTableau = JSON.parse(localStorage.getItem("monTableau"));`;

const code3 = `// enregistrer une valeur dans le sessionStorage
sessionStorage.setItem("cle", "valeur");

// récupérer une valeur du sessionStorage
let valeur = sessionStorage.getItem("cle");

// supprimer une valeur du sessionStorage
sessionStorage.removeItem("cle");

// vider toutes les valeurs du sessionStorage
sessionStorage.clear();`;

const code4 = `// enregistrer un objet dans le sessionStorage
let monObjet = { "nom": "John", "âge": 30 };
sessionStorage.setItem("monObjet", JSON.stringify(monObjet));

// récupérer un objet du sessionStorage
let monObjet = JSON.parse(sessionStorage.getItem("monObjet"));

// enregistrer un tableau dans le sessionStorage
let monTableau = ["un", "deux", "trois"];
sessionStorage.setItem("monTableau", JSON.stringify(monTableau));

// récupérer un tableau du sessionStorage
let monTableau = JSON.parse(sessionStorage.getItem("monTableau"));`;

const code5 = `function setCookie(nom, valeur, jours) {
  let date = new Date();
  date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = nom + "=" + valeur + ";" + expires + ";path=/";
}`;

const code6 = `setCookie("nom", "valeur", 7); // enregistre un cookie qui expirera dans 7 jours`;

const code7 = `// récupérer un cookie
function getCookie(nom) {
  let nomEgal = nom + "=";
  let decalage = 0;
  let tabCookies = document.cookie.split(";");
  for (let i = 0; i < tabCookies.length; i++) {
    let c = tabCookies[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nomEgal) === 0) {
      return c.substring(nomEgal.length, c.length);
    }
  }
  return "";
}

// supprimer un cookie
function deleteCookie(nom) {
  setCookie(nom, "", -1);
}`;

export const Storages = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg">
      <h1>{t("pages.intermediate.storages.title")}</h1>
      <p>
        Il existe plusieurs méthodes de stockage de données en JavaScript, qui
        permettent de conserver des informations côté client et de les
        réutiliser ultérieurement. Les méthodes de stockage incluent :
      </p>
      <ul>
        <li>
          Le <strong>stockage local</strong>, qui permet de stocker des données
          de manière permanente dans le navigateur de l'utilisateur
        </li>
        <li>
          Le <strong>sessionStorage</strong>, qui permet de stocker des données
          de manière temporaire pour une session donnée (c'est-à-dire, jusqu'à
          ce que le navigateur soit fermé)
        </li>
        <li>
          Le <strong>cookies</strong>, qui permet de stocker des données de
          manière temporaire ou permanente sur l'ordinateur de l'utilisateur
        </li>
      </ul>
      <h2>Stockage local</h2>
      <p>
        Le stockage local vous permet de stocker des données de manière
        permanente dans le navigateur de l'utilisateur. Les données stockées
        dans le stockage local sont accessibles depuis n'importe quelle page du
        site, même si le navigateur est fermé et rouvert.
      </p>
      <p>Voici comment utiliser le stockage local :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code1}
      </ReactSyntaxHighlighter>
      <p>
        Le stockage local accepte uniquement des chaînes de caractères comme
        valeurs. Si vous voulez stocker un objet ou un tableau, vous devez
        d'abord le convertir en chaîne de caractères en utilisant{" "}
        <code>JSON.stringify()</code>, et le convertir en objet ou en tableau en
        utilisant <code>JSON.parse()</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code2}
      </ReactSyntaxHighlighter>
      <h2>SessionStorage</h2>
      <p>
        Le sessionStorage est similaire au stockage local, mais les données sont
        stockées de manière temporaire pour une session donnée (c'est-à-dire,
        jusqu'à ce que le navigateur soit fermé).
      </p>
      <p>Voici comment utiliser le sessionStorage :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code3}
      </ReactSyntaxHighlighter>
      <p>
        Le sessionStorage accepte uniquement des chaînes de caractères comme
        valeurs. Si vous voulez stocker un objet ou un tableau, vous devez
        d'abord le convertir en chaîne de caractères en utilisant{" "}
        <code>JSON.stringify()</code>, et le convertir en objet ou en tableau en
        utilisant <code>JSON.parse()</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code4}
      </ReactSyntaxHighlighter>
      <h2>Cookies</h2>
      <p>
        Les cookies sont de petits fichiers stockés sur l'ordinateur de
        l'utilisateur qui permettent de conserver des informations sur la
        navigation de l'utilisateur sur un site web. Les cookies sont souvent
        utilisés pour stocker les préférences de l'utilisateur, pour suivre le
        comportement de l'utilisateur sur un site web, ou pour stocker des
        informations de connexion pour que l'utilisateur n'ait pas à saisir son
        nom d'utilisateur et son mot de passe à chaque visite. Les cookies
        peuvent être stockés de manière temporaire ou permanente sur
        l'ordinateur de l'utilisateur.
      </p>
      <p>Voici comment enregistrer un cookie :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code5}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment utiliser la fonction <code>setCookie()</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code6}
      </ReactSyntaxHighlighter>
      <p>Voici comment récupérer un cookie :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code7}
      </ReactSyntaxHighlighter>
      <p>
        Note : les cookies sont souvent utilisés pour suivre les utilisateurs
        sur plusieurs sites. Assurez-vous d'informer les utilisateurs et de
        respecter leur vie privée lorsque vous utilisez des cookies.
      </p>
    </section>
  );
};
