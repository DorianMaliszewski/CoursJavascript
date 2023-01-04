import { useLocale } from "../../hooks/useLocale";

export const Exercises = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.jquery.exercises.title")}</h1>
    </section>
  );
};
