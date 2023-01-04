import { useLocale } from "../../hooks/useLocale";

export const Tips = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.intermediate.tips.title")}</h1>
    </section>
  );
};
