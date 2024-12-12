import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    }
  },
  ru: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next", 
    }
  },
  uz: {
    translation: {
      Home
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;