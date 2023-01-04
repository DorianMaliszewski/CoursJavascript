import { useLocale } from "../hooks/useLocale";

export const Index = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.home.title")}</h1>
    </section>
  );
};
