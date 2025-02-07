// This is for testing purpose
export const questions = {
  name: "HTML/CSS",
	mode: "exam",
	questionsPerTest: 20,
  timeByQuestionInSeconds: 10,
	questions: [
		{
			question: "Quelle est la balise principale d'un document HTML ?",
			answers: ["<head>", "<body>", "<html>", "<main>"],
			correctAnswerIndex: 2,
		},
		{
			question:
				"Quelle balise est utilisée pour créer un lien hypertexte en HTML ?",
			answers: ["<link>", "<a>", "<href>", "<url>"],
			correctAnswerIndex: 1,
		},
		{
			question: "Quelle balise est utilisée pour insérer une image en HTML ?",
			answers: ["<image>", "<img>", "<pic>", "<src>"],
			correctAnswerIndex: 1,
		},
		{
			question: "Quelle propriété CSS permet de changer la couleur du texte ?",
			answers: ["background-color", "color", "text-color", "font-color"],
			correctAnswerIndex: 1,
		},
		{
			question: "Quelle balise est utilisée pour créer une liste ordonnée ?",
			answers: ["<ul>", "<li>", "<ol>", "<list>"],
			correctAnswerIndex: 2,
		},
		{
			question:
				"Quelle unité de mesure en CSS est relative à la taille de la police de l'élément parent ?",
			answers: ["px", "em", "rem", "%"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quel attribut HTML est utilisé pour spécifier une image alternative si l'image principale ne peut pas être affichée ?",
			answers: ["alt", "src", "title", "href"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle est la valeur par défaut de la propriété position en CSS ?",
			answers: ["static", "relative", "absolute", "fixed"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle propriété CSS est utilisée pour rendre un élément invisible tout en occupant l'espace ?",
			answers: ["visibility", "display", "opacity", "z-index"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle pseudo-classe CSS permet de sélectionner le premier enfant d'un élément parent ?",
			answers: [":first", ":first-child", ":nth-child(1)", ":first-of-type"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quel élément HTML est utilisé pour regrouper les options d'un élément <select> ?",
			answers: ["<group>", "<option>", "<fieldset>", "<optgroup>"],
			correctAnswerIndex: 3,
		},
		{
			question:
				"Quelle propriété CSS permet de modifier l'épaisseur du texte ?",
			answers: ["font-weight", "font-size", "text-bold", "text-style"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle méthode HTTP est utilisée pour récupérer des données depuis un serveur ?",
			answers: ["POST", "GET", "PUT", "DELETE"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle balise est utilisée pour insérer un script JavaScript dans un document HTML ?",
			answers: ["<script>", "<js>", "<javascript>", "<code>"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle propriété CSS permet d'ajouter une ombre à un élément ?",
			answers: ["text-shadow", "box-shadow", "shadow", "opacity"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quel élément HTML est utilisé pour afficher une barre de progression ?",
			answers: ["<progress>", "<meter>", "<range>", "<bar>"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle propriété CSS permet de contrôler l'espacement entre les lignes de texte ?",
			answers: ["letter-spacing", "line-height", "word-spacing", "text-indent"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle propriété CSS permet d'afficher un élément en tant que bloc tout en permettant à d'autres éléments d'être sur la même ligne ?",
			answers: [
				"display: block;",
				"display: inline;",
				"display: inline-block;",
				"display: flex;",
			],
			correctAnswerIndex: 2,
		},
		{
			question:
				"Quelle propriété CSS est utilisée pour rendre un élément totalement transparent ?",
			answers: ["opacity", "visibility", "display", "z-index"],
			correctAnswerIndex: 0,
		},
		{
			question: "Quelle balise HTML est utilisée pour insérer une vidéo ?",
			answers: ["<media>", "<movie>", "<video>", "<mp4>"],
			correctAnswerIndex: 2,
		},
		{
			question:
				"Quelle propriété CSS permet d'ajouter une transition fluide entre les états d'un élément ?",
			answers: ["animation", "transition", "transform", "motion"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle unité de mesure CSS est relative à la largeur de l'écran ?",
			answers: ["px", "em", "vw", "%"],
			correctAnswerIndex: 2,
		},
		{
			question:
				"Quel attribut HTML est utilisé pour définir un texte à afficher lorsque l'utilisateur passe la souris sur un élément ?",
			answers: ["tooltip", "title", "alt", "hover"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle propriété CSS est utilisée pour transformer un texte en majuscules ?",
			answers: ["text-style", "text-transform", "text-uppercase", "font-case"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle balise HTML est utilisée pour insérer une boîte de dialogue ?",
			answers: ["<dialog>", "<popup>", "<alert>", "<modal>"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle pseudo-classe CSS permet de sélectionner un élément lorsqu'il est activé ?",
			answers: [":hover", ":focus", ":checked", ":active"],
			correctAnswerIndex: 3,
		},
		{
			question:
				"Quelle propriété CSS est utilisée pour appliquer une grille de mise en page ?",
			answers: ["grid-template", "grid", "display: grid;", "layout"],
			correctAnswerIndex: 2,
		},
		{
			question:
				"Quelle est la valeur par défaut de flex-direction en CSS Flexbox ?",
			answers: ["row", "column", "row-reverse", "column-reverse"],
			correctAnswerIndex: 0,
		},
		{
			question:
				"Quelle propriété CSS permet de fixer un élément en haut de la page, même en défilant ?",
			answers: [
				"position: absolute;",
				"position: relative;",
				"position: sticky;",
				"position: fixed;",
			],
			correctAnswerIndex: 3,
		},
		{
			question:
				"Quelle pseudo-classe CSS permet de cibler un élément qui a le focus ?",
			answers: [":hover", ":focus", ":checked", ":target"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle propriété CSS permet de définir la largeur minimale d'un élément ?",
			answers: ["max-width", "min-width", "width", "size"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle méthode HTTP est utilisée pour envoyer des données à un serveur ?",
			answers: ["GET", "PUT", "DELETE", "POST"],
			correctAnswerIndex: 3,
		},
		{
			question:
				"Quelle propriété CSS permet d'aligner verticalement un élément Flexbox ?",
			answers: [
				"align-content",
				"align-items",
				"justify-content",
				"flex-align",
			],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle balise HTML est utilisée pour créer un champ de saisie dans un formulaire ?",
			answers: ["<textarea>", "<input>", "<field>", "<textbox>"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle propriété CSS permet de contrôler la vitesse d'une animation ?",
			answers: [
				"animation-speed",
				"animation-duration",
				"animation-delay",
				"transition-speed",
			],
			correctAnswerIndex: 1,
		},
		{
			question: "Quel élément HTML est utilisé pour structurer un formulaire ?",
			answers: ["<fieldset>", "<legend>", "<form>", "<section>"],
			correctAnswerIndex: 2,
		},
		{
			question:
				"Quelle propriété CSS permet d'espacer les colonnes en CSS Grid ?",
			answers: ["grid-gap", "column-gap", "row-gap", "spacing"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle pseudo-classe CSS permet de sélectionner le dernier enfant d'un élément parent ?",
			answers: [":last", ":last-child", ":nth-last-child(1)", ":last-of-type"],
			correctAnswerIndex: 1,
		},
		{
			question:
				"Quelle propriété CSS permet de définir l'ordre d'affichage des éléments flexibles ?",
			answers: ["order", "flex-order", "display-order", "position"],
			correctAnswerIndex: 0,
		},
	],
};
