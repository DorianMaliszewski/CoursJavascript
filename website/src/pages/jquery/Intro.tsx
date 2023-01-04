import { useLocale } from "../../hooks/useLocale";

export const Intro = () => {
  const t = useLocale();

  return (
    <section className="prose prose-slante lg:prose-lg max-w-full">
      <h1>{t("pages.jquery.intro.title")}</h1>
      <p>
        jQuery est une bibliothèque JavaScript qui simplifie la manipulation du
        HTML, du CSS et de l'interface utilisateur. Elle vous permet d'écrire du
        code JavaScript plus facilement et de manière plus concise.
      </p>
    </section>
  );
};
