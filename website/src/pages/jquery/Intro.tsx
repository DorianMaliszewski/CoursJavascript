import { useLocale } from "../../hooks/useLocale";

export const Intro = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.jquery.intro.title")}</h1>
    </section>
  );
};
