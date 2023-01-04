import { useLocale } from "../../hooks/useLocale";

export const Install = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.jquery.install.title")}</h1>
    </section>
  );
};
