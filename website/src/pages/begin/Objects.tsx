import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocale } from "../../hooks/useLocale";

const code1 = `let monObjet = {};`;

const code2 = `monObjet.propriete1 = valeur1;
monObjet.propriete2 = valeur2;`;

const code3 = `monObjet.methode1 = function() {
  // code de la méthode
};`;

const code4 = `let monObjet = {
  propriete1: valeur1,
  propriete2: valeur2,
  methode1: function() {
    // code de la méthode
  }
};`;

const code5 = `console.log(monObjet.propriete1); // affiche la valeur de la propriété1`;

const code6 = `monObjet.methode1(); // exécute la méthode1`;

const code7 = `console.log(monObjet["propriete1"]); // affiche la valeur de la propriété1
monObjet["methode1"](); // exécute la méthode1`;

const code8 = `let nomPropriete = "propriete1";
console.log(monObjet[nomPropriete]); // affiche la valeur de la propriété1

let nomMethode = "methode1";
monObjet[nomMethode](); // exécute la méthode1`;

const code9 = `monObjet.propriete1 = nouvelleValeur;`;

const code10 = `delete monObjet.propriete1;`;

const code11 = `for (let nomPropriete in monObjet) {
  console.log(nomPropriete); // affiche le nom de chaque propriété
}`;

const code12 = `for (let valeur of Object.values(monObjet)) {
  console.log(valeur); // affiche la valeur de chaque propriété
}`;

const code13 = `for (let nomPropriete of Object.getOwnPropertyNames(monObjet)) {
  console.log(nomPropriete); // affiche le nom de chaque propriété
}`;

const code14 = `let prototype = Object.getPrototypeOf(monObjet);`;

const code15 = `Object.setPrototypeOf(monObjet, prototype);`;

const code16 = `monObjet.__proto__ = prototype;`;

const code17 = `let objetParent = {
  propriete1: valeur1,
  methode1: function() {
    // code de la méthode
  }
};

let objetEnfant = Object.create(objetParent);`;

const code18 = `function ObjetParent(arg1, arg2) {
  this.propriete1 = arg1;
  this.propriete2 = arg2;
}
ObjetParent.prototype.methode1 = function() {
  // code de la méthode
};

function ObjetEnfant(arg1, arg2, arg3) {
  ObjetParent.call(this, arg1, arg2);
  this.propriete3 = arg3;
}
ObjetEnfant.prototype = Object.create(ObjetParent.prototype);
ObjetEnfant.prototype.constructor = ObjetEnfant;
ObjetEnfant.prototype.methode2 = function() {
  // code de la méthode
};

let objetEnfant = new ObjetEnfant(valeur1, valeur2, valeur3);`;

export const Objects = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slate lg:prose-lg">
      <h1>{t("pages.begin.objects.title")}</h1>

      <h2>Création d'objets</h2>
      <p>Voici comment créer un objet vide en JavaScript :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code1}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment ajouter des propriétés (des valeurs associées à des noms)
        à un objet :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code2}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment ajouter des méthodes (des fonctions associées à l'objet) à
        un objet :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code3}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment créer un objet avec des propriétés et des méthodes en une
        seule étape :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code4}
      </ReactSyntaxHighlighter>

      <h2>Accès aux propriétés et aux méthodes</h2>
      <p>Voici comment accéder aux propriétés d'un objet :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code5}
      </ReactSyntaxHighlighter>
      <p>Voici comment accéder aux méthodes d'un objet :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code6}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également accéder aux propriétés et aux méthodes d'un objet
        en utilisant la syntaxe suivante :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code7}
      </ReactSyntaxHighlighter>
      <p>
        Cette syntaxe est particulièrement utile lorsque le nom de la propriété
        ou de la méthode est stocké dans une variable :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code8}
      </ReactSyntaxHighlighter>

      <h2>Modification et suppression de propriétés</h2>
      <p>Voici comment modifier une propriété d'un objet :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code9}
      </ReactSyntaxHighlighter>
      <p>Voici comment supprimer une propriété d'un objet :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code10}
      </ReactSyntaxHighlighter>
      <p>
        Notez que vous ne pouvez pas supprimer une propriété d'un objet s'il
        s'agit d'un objet intrisèque (par exemple, <code>Array.prototype</code>{" "}
        ou <code>Object.prototype</code>).
      </p>
      <h2>Boucles sur les propriétés d'un objet</h2>
      <p>
        Voici comment parcourir toutes les propriétés d'un objet avec une boucle{" "}
        <code>for...in</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code11}
      </ReactSyntaxHighlighter>
      <p>
        Voici comment parcourir toutes les propriétés d'un objet avec une boucle{" "}
        <code>for...of</code> (disponible depuis ECMAScript 2015) :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code12}
      </ReactSyntaxHighlighter>
      <p>
        Notez que la boucle <code>for...of</code> ne permet de parcourir que les
        propriétés "enumerable" de l'objet (c'est-à-dire, les propriétés qui
        sont listées lorsque vous utilisez une boucle <code>for...in</code>). Si
        vous voulez parcourir toutes les propriétés de l'objet, y compris celles
        qui sont héritées et non-enumerables, vous pouvez utiliser la fonction{" "}
        <code>Object.getOwnPropertyNames()</code> :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code13}
      </ReactSyntaxHighlighter>

      <h2>Prototype</h2>
      <p>
        En JavaScript, chaque objet a un lien vers un autre objet appelé
        "prototype". Lorsque vous tentez d'accéder à une propriété d'un objet,
        le moteur JavaScript va d'abord chercher la propriété dans l'objet
        lui-même. Si la propriété n'est pas trouvée, il va chercher la propriété
        dans le prototype de l'objet. Si la propriété n'est toujours pas
        trouvée, il va chercher la propriété dans le prototype du prototype, et
        ainsi de suite jusqu'à ce que la chaîne de prototypes soit épuisée. Si
        la propriété n'est toujours pas trouvée, elle est considérée comme étant
        undefined. Voici comment accéder au prototype d'un objet :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code14}
      </ReactSyntaxHighlighter>

      <p>Voici comment définir le prototype d'un objet :</p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code15}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également utiliser la syntaxe suivante pour définir le
        prototype d'un objet (disponible depuis ECMAScript 2015) :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code16}
      </ReactSyntaxHighlighter>
      <p>
        Notez que cette syntaxe est déconseillée en raison de son comportement
        imprévisible dans certains environnements.
      </p>

      <h2>Héritage</h2>
      <p>
        En JavaScript, vous pouvez créer un objet qui hérite des propriétés et
        des méthodes d'un autre objet en définissant le prototype de l'objet
        enfant comme étant l'objet parent. Voici comment créer un objet enfant
        qui hérite d'un objet parent :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code17}
      </ReactSyntaxHighlighter>
      <p>
        Vous pouvez également utiliser une fonction constructeur comme objet
        parent en utilisant la syntaxe suivante :
      </p>
      <ReactSyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={atomOneDark}
      >
        {code18}
      </ReactSyntaxHighlighter>
      <p>
        Notez que l'objet enfant hérite des propriétés et des méthodes de
        l'objet parent, mais aussi de ses propres propriétés et méthodes. Si
        vous modifiez le prototype de l'objet parent, les modifications seront
        répercutées sur l'objet enfant et sur tous les autres objets qui
        héritent de l'objet parent.
      </p>
    </section>
  );
};
