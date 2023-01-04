import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `let monTableau = []; // tableau vide

let monTableau = [1, 2, 3]; // tableau de nombres

let monTableau = ["un", "deux", "trois"]; // tableau de chaînes de caractères

let monTableau = [true, false, true]; // tableau de booléens

let monTableau = [{nom: "Alice"}, {nom: "Bob"}]; // tableau d'objets`;

const code2 = `let monTableau = new Array(); // tableau vide

let monTableau = new Array(1, 2, 3); // tableau de nombres

let monTableau = new Array("un", "deux", "trois"); // tableau de chaînes de caractères

let monTableau = new Array(true, false, true); // tableau de booléens

let monTableau = new Array({nom: "Alice"}, {nom: "Bob"}); // tableau d'objets`;

const code3 = `let premierElement = monTableau[0]; // accès au premier élément
let dernierElement = monTableau[monTableau.length - 1]; // accès au dernier élément`;

const code4 = `for (let i = 0; i &lt; monTableau.length; i++) {
  console.log(monTableau[i]); // affiche chaque élément
}`;

const code5 = `for (let element of monTableau) {
  console.log(element); // affiche chaque élément
}`;

const code6 = `for (let i of Object.getOwnPropertyNames(monTableau)) {
  console.log(monTableau[i]); // affiche chaque élément
}`;

const code7 = `let dernierElement = monTableau.pop(); // retire le dernier élément du tableau`;

const code8 = `monTableau.push(4); // ajoute le nombre 4 à la fin du tableau`;

const code9 = `monTableau.unshift(0); // ajoute le nombre 0 au début du tableau`;

const code10 = `let premierElement = monTableau.shift(); // retire le premier élément du tableau`;

const code11 = `monTableau[1] = "deux"; // remplace le deuxième élément par "deux"`;

const code12 = `monTableau.splice(1, 0, "un-demi"); // insère "un-demi" à la deuxième position du tableau`;

const code13 = `monTableau.splice(2, 1); // supprime l'élément à la troisième position du tableau`;

const code14 = `monTableau.sort(); // trie les éléments du tableau par ordre alphabétique ou numérique`;

const code15 = `monTableau.reverse(); // inverse l'ordre des éléments du tableau`;

const code16 = `let taille = monTableau.length; // détermine la taille du tableau`;

export const Arrays = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.begin.arrays.title")}</h1>

      <h2>Création d'un tableau</h2>
      <p>Voici comment créer un tableau en JavaScript :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également utiliser la syntaxe suivante pour créer un tableau
        (disponible depuis ECMAScript 2015) :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code2}
      </ReactSyntaxHighlighter>

      <h2>Accès aux éléments d'un tableau</h2>
      <p>Voici comment accéder aux éléments d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code3}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également utiliser une boucle pour parcourir tous les
        éléments d'un tableau :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code4}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également utiliser une boucle <code>for...of</code>{" "}
        (disponible depuis ECMAScript 2015) pour parcourir tous les éléments
        d'un tableau :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code5}
      </ReactSyntaxHighlighter>
      <p>
        Notez que les boucles <code>for</code> et <code>for...of</code> ne
        parcourent que les éléments du tableau qui sont enumerables
        (c'est-à-dire, les éléments qui sont listés lorsque vous utilisez une
        boucle <code>for</code> ou une boucle <code>for...of</code>). Si vous
        voulez parcourir tous les éléments du tableau, y compris ceux qui sont
        hérités et non-enumerables, vous pouvez utiliser la fonction{" "}
        <code>Object.getOwnPropertyNames()</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code6}
      </ReactSyntaxHighlighter>

      <h2>Modification des éléments d'un tableau</h2>
      <p>Voici comment ajouter un élément à la fin d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code7}
      </ReactSyntaxHighlighter>
      <p>Voici comment retirer un élément de la fin d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code8}
      </ReactSyntaxHighlighter>
      <p>Voici comment ajouter un élément au début d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code9}
      </ReactSyntaxHighlighter>
      <p>Voici comment retirer un élément du début d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code10}
      </ReactSyntaxHighlighter>
      <p>Voici comment remplacer un élément d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code11}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment insérer un élément à une position donnée d'un tableau :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code12}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment supprimer un élément à une position donnée d'un tableau :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code13}
      </ReactSyntaxHighlighter>
      <p>Voici comment trier les éléments d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code14}
      </ReactSyntaxHighlighter>
      <p>Voici comment inverse l'ordre des éléments d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code15}
      </ReactSyntaxHighlighter>

      <h2>Taille d'un tableau</h2>
      <p>Voici comment déterminer la taille d'un tableau :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code16}
      </ReactSyntaxHighlighter>
    </section>
  );
};
