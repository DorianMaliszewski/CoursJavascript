import { useLocale } from "../hooks/useLocale";

export const Index = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.home.title")}</h1>
      <p>
        Pour apprendre le JavaScript, vous êtes au bon endroit! Ce site est
        conçu pour vous apprendre les bases du langage de manière interactive et
        ludique.
      </p>
      <p>
        JavaScript est un langage de programmation de scripts principalement
        utilisé dans les pages web interactives pour ajouter des fonctionnalités
        telles que les menus déroulants, les diaporamas d'images et les
        formulaires de validation.
      </p>
      <p>Au cours de votre apprentissage, vous découvrirez comment :</p>
      <ul>
        <li>
          Structurer votre code avec des variables, des fonctions et des
          structures de contrôle de flux
        </li>
        <li>Manipuler le HTML et le CSS avec le DOM</li>
        <li>
          Gérer les évènements utilisateur tels que les clics de souris et les
          frappes de touches
        </li>
        <li>Utiliser des bibliothèques et des frameworks tels que jQuery</li>
      </ul>
      <p>
        J'espère que vous apprécierez votre parcours d'apprentissage et que vous
        serez bientôt en mesure de créer des pages web interactives de qualité
        professionnelle.
      </p>
      <p>Commençons!</p>
    </section>
  );
};
