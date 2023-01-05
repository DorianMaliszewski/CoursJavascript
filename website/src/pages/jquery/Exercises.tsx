import { useLocale } from "../../hooks/useLocale";

export const Exercises = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-xl max-w-screen">
      <h1>{t("pages.jquery.exercises.title")}</h1>
      <h2>
        Exercice 5
      </h2>
      <ul>
        <li>
          Faire une “todo-list” avec jQuery:
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
    </section>
  );
};
