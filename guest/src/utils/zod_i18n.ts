import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import enTranslation from "zod-i18n-map/locales/en/zod.json";
import esTranslation from "zod-i18n-map/locales/es/zod.json";
import frTranslation from "zod-i18n-map/locales/fr/zod.json";

i18next.init({
  lng: "en",
  resources: {
    en: { zod: enTranslation },
    es: { zod: esTranslation },
    fr: { zod: frTranslation },
  },
});
z.setErrorMap(zodI18nMap);

export { z };
