import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { arTranslations } from "./translations/ar";
import { bnTranslations } from "./translations/bn";
import { deTranslations } from "./translations/de";
import { enTranslations } from "./translations/en";
import { esTranslations } from "./translations/es";
import { frTranslations } from "./translations/fr";
import { hiTranslations } from "./translations/hi";
import { idTranslations } from "./translations/id";
import { itTranslations } from "./translations/it";
import { jaTranslations } from "./translations/ja";
import { kkTranslations } from "./translations/kk";
import { koTranslations } from "./translations/ko";
import { ptTranslations } from "./translations/pt";
import { ruTranslations } from "./translations/ru";
import { thTranslations } from "./translations/th";
import { trTranslations } from "./translations/tr";
import { ukTranslations } from "./translations/uk";
import { uzTranslations } from "./translations/uz";
import { viTranslations } from "./translations/vi";
import { zhTranslations } from "./translations/zh";

const resources = {
  ar: arTranslations,
  bn: bnTranslations,
  de: deTranslations,
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  hi: hiTranslations,
  id: idTranslations,
  it: itTranslations,
  ja: jaTranslations,
  kk: kkTranslations,
  ko: koTranslations,
  pt: ptTranslations,
  ru: ruTranslations,
  th: thTranslations,
  tr: trTranslations,
  uk: ukTranslations,
  uz: uzTranslations,
  vi: viTranslations,
  zh: zhTranslations
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", 
    fallbackLng: ["en", "ru", "de", "ar", "es", "fr", "hi", "it", "ja", "kk", "ko", "pt", "bn", "th", "id", "tr", "uk", "uz", "vi", "zh"],
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
