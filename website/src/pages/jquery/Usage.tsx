import { useLocale } from "../../hooks/useLocale";

export const Usage = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.jquery.usage.title")}</h1>
    </section>
  );
};
