import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `function maFonction() {
  // code de la fonction
}`;

const code2 = `let maFonction = function() {
  // code de la fonction
};`;

const code3 = `maFonction();`;

const code4 = `maFonction(argument1, argument2);`;

const code5 = `function maFonction(arg1, arg2) {
  console.log(arg1); // affiche la valeur de l'argument1
  console.log(arg2); // affiche la valeur de l'argument2
}`;

const code6 = `function maFonction(arg1, arg2) {
  let resultat = arg1 + arg2;
  return resultat; // renvoie la valeur de resultat à l'appelant
}`;

const code7 = `let resultat = maFonction(10, 5); // resultat vaut 15`;

const code8 = `let maFonction = (arg1, arg2) => {
  // code de la fonction
};`;

const code9 = `let maFonction = arg => {
  // code de la fonction
};`;

const code10 = `let maFonction = (arg1, arg2) => arg1 + arg2;`;

const code11 = `let tableau = [1, 2, 3, 4, 5];
let tableauFiltre = tableau.filter(x => x % 2 === 0); // renvoie [2, 4]`;

const code12 = `let variableGlobale = "je suis globale";

function maFonction() {
  let variableLocale = "je suis locale";
}

console.log(variableGlobale); // affiche "je suis globale"
console.log(variableLocale); // affiche une erreur, variableLocale est undefined`;

const code13 = `function maFonction() {
  globalThis.variableGlobale = "je suis globale";
}

console.log(variableGlobale); // affiche "je suis globale"`;

const code14 = `function MonObjet(arg1, arg2) {
  this.propriete1 = arg1;
  this.propriete2 = arg2;
  this.methode1 = function() {
    // code de la méthode
  }
}`;

const code15 = `let monObjet = new MonObjet(valeur1, valeur2);`;

const code16 = `console.log(monObjet.propriete1); // affiche la valeur de la propriété1
monObjet.methode1(); // exécute la méthode1`;

export const Functions = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slate lg:prose-lg">
      <h1>{t("pages.begin.functions.title")}</h1>
      <h2>Déclaration de fonctions</h2>
      <p>Voici comment déclarer une fonction en JavaScript :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code1}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également utiliser une expression de fonction pour déclarer
        une fonction :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code2}
      </ReactSyntaxHighlighter>
      <h2>Appel de fonctions</h2>
      <p>Voici comment appeler une fonction en JavaScript :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code3}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également passer des arguments (des valeurs passées à la
        fonction) à une fonction en les indiquant entre parenthèses lors de
        l'appel de la fonction :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code4}
      </ReactSyntaxHighlighter>
      <p>
        Les arguments sont disponibles à l'intérieur de la fonction sous forme
        de variables :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code5}
      </ReactSyntaxHighlighter>

      <h2>Fonctions avec valeurs de retour</h2>
      <p>
        Les fonctions peuvent également renvoyer une valeur à l'aide de
        l'instruction <code>return</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code6}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez récupérer la valeur renvoyée par une fonction en la stockant
        dans une variable :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code7}
      </ReactSyntaxHighlighter>
      <p>
        Notez que l'exécution de la fonction s'arrête immédiatement lorsque
        l'instruction <code>return</code> est exécutée.
      </p>

      <h2>Fonctions fléchées</h2>
      <p>
        Depuis ECMAScript 2015, il est possible de déclarer des fonctions en
        utilisant une syntaxe appelée "fonctions fléchées" (arrow functions en
        anglais). Les fonctions fléchées sont une alternative concise à la
        syntaxe traditionnelle des fonctions et permettent de créer des
        fonctions anonymes. Voici comment déclarer une fonction fléchée :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code8}
      </ReactSyntaxHighlighter>
      <p>
        Si la fonction ne prend qu'un seul argument, vous pouvez omettre les
        parenthèses :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code9}
      </ReactSyntaxHighlighter>
      <p>
        Si la fonction ne contient qu'une seule instruction, vous pouvez
        également omettre les accolades et la keyword <code>return</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code10}
      </ReactSyntaxHighlighter>
      <p>
        Voici un exemple de fonction fléchée qui prend un tableau en argument et
        renvoie un tableau filtré :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code11}
      </ReactSyntaxHighlighter>
      <h2>Portée de variables</h2>
      <p>
        En JavaScript, les variables déclarées à l'intérieur d'une fonction sont
        locales et ne sont pas accessibles depuis l'extérieur de la fonction.
        Les variables déclarées à l'extérieur de toute fonction sont globales et
        sont accessibles depuis n'importe où dans le script. Voici un exemple :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code12}
      </ReactSyntaxHighlighter>
      <p>
        Il est possible de déclarer une variable globale à l'intérieur d'une
        fonction en utilisant la keyword <code>globalThis</code> (introduite
        dans ECMAScript 2020) :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code13}
      </ReactSyntaxHighlighter>
      <p>
        Notez que l'utilisation de <code>globalThis</code> est déconseillée en
        raison de son comportement imprévisible dans certains environnements.
      </p>

      <h2>Fonctions constructeurs</h2>
      <p>
        En JavaScript, vous pouvez utiliser des fonctions constructeurs pour
        créer des objets de manière répétitive. Une fonction constructeur est
        une fonction qui est appelée avec la keyword <code>new</code>. Voici
        comment déclarer une fonction constructeur :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code14}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment créer un nouvel objet à l'aide de la fonction constructeur
        :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code15}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez accéder aux propriétés et aux méthodes de l'objet de la même
        manière que pour un objet créé avec l'opérateur <code>{}</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
      >
        {code16}
      </ReactSyntaxHighlighter>
    </section>
  );
};
