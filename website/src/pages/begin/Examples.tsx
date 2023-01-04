import { useLocale } from "../../hooks/useLocale";

export const Examples = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.begin.examples.title")}</h1>
    </section>
  );
};
