import { useLocale } from "../../hooks/useLocale";

export const Exercises = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-xl max-w-screen">
      <h1>{t("pages.begin.exercises.title")}</h1>
      <h2>Exercice 1</h2>
      <ul>
        <li>
          Créer une page HTML avec 3 boutons et une balise div avec un id
        </li>
        <li>
          Si je clique sur un bouton le texte change, le texte est différent selon le bouton cliqué
        </li>
        <li>
          Si je clique sur un bouton la couleur d’arrière plan (background) de la div change (différents pour chaque bouton)
        </li>
        <li>
          Reproduire avec les différentes syntaxes
        </li>
      </ul>

      <a href="/exercises/exo1.html" download="exo1.html" target="_blank" className="btn btn-primary">Voir la correction</a>

      <h2>
        Exercice 2
      </h2>
      <ul>
        <li>
          Créer une page HTML avec deux boutons et une div avec un id :
        </li>
        <li>
          Quand je clique sur un bouton une couleur d’arrière plan aléatoire est générée
        </li>
        <li>
          Quand je clique sur l’autre bouton la couleur d’arrière plan revient à la précédente
        </li>
        <li>
          Par défaut la couleur d’arrière plan sera “magenta”
        </li>
        <li>
          Reproduire avec les différentes syntaxes
        </li>
      </ul>
      

      <h3>
        Exercice 3
      </h3>
      <ul>
        <li>
          Créer une page HTML avec un formulaire contenant les champs: nom, prénom, âge et une zone de texte pour écrire ses ambitions dans le futur
        </li>
        <li>
          Lorsque je soumet le formulaire les valeurs entrées s’affichent dans le DOM
        </li>
      </ul>

      <a href="/exercises/exo3.html" download="exo3.html" target="_blank" className="btn btn-primary">Voir la correction</a>


      <h2>
        Exercice 4
      </h2>
      <ul>
        <li>
          Faire une “todo-list”:
        </li>
        <li>
          Une tâche c’est une date de création, un titre, une description et une date de traitement
        </li>
        <li>
          Ma todo liste s’adapte en fonction de la taille de l’écran
        </li>
        <li>
          Je peux ajouter des todo, les supprimer et ma liste se met à jour automatiquement
        </li>
        <li>
          Lorsque j’actualise la page ma liste est toujours là
        </li>
      </ul>

      
        <a href="/exercises/exo4.html" download="exo4.html" target="_blank" className="btn btn-primary mr-4">Voir la correction</a>
        <a href="/exercises/exo4_advanced.html" download="exo4_advanced.html" target="_blank" className="btn btn-primary">Voir la correction avancée</a>

    </section>
  );
};
