import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "Home": "",
    }
  },
  ru: {
    translation: {
      "Home": "Bienvenue à React et react-i18next", 
    }
  },
  uz: {
    translation: {
      "Home":'Uy'
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