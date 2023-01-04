import { LOCALES } from "../locales";

export const useLocale = () => (string: keyof typeof LOCALES) =>
  LOCALES[string];
