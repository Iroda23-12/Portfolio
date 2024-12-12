import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Skills": "Skills",
      "Project": "Project",
      "Contact": "Contact",
      "Language": "Language",
      "ENG": "ENG",
      "RUS": "RUS",
    }
  },
  ru: {
    translation: {
      "Home": "Дом", 
      "About": "О нас",
      "Skills": "Навыки",
      "Project": "Проект",
      "Contact": "Контакты",
      "Language": "язык",
      "ENG": "АНГЛ",
      "RUS": "РУСС",
    }
  },
  uz: {
    translation: {
      "Home":'Uy',
      "About": 'Haqida',
      "Skills":`Ko'nikmalar`,
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