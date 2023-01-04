import { useLocale } from "../hooks/useLocale";

export const Cheatsheet = () => {
  const t = useLocale();

  return (
    <section>
      <h1 className="text-3xl">{t("pages.cheatsheet.title")}</h1>
    </section>
  );
};
