import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  uz: {
    translation: {
      "hello": "Assalomu alekom"
    }
  },
  en: {
    translation: {
      "hello": "Hello",
    }
  }
  ru
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "uz",

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;