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
      "UZB": "UZB",
      "Hi There":`Hi There,`,
      "I'm":`I'm Iroda`,
      "I stydy at":`I'm stydy at `,
      "Frontend":`Frontend`
    }
  },
  ru: {
    translation: {
      "Home": "Дом", 
      "About": "О нас",
      "Skills": "Навыки",
      "Project": "Проект",
      "Contact": "Контакты",
      "Language": "языки",
      "ENG": "АНГЛ",
      "RUS": "РУСС",
      "UZB": "УЗБ",
      "Hi There":`Всем Привет`,
      "I'm":`Я Ирода`,
      "I stydy at":`�� учусь в `,
      "Frontend":`Frontend`
    }
  },
  uz: {
    translation: {
      "Home":'Uy',
      "About": 'Haqida',
      "Skills":`Ko'nikmalar`,
      "Project": 'Project',
      "Contact": 'Kontakt',
      "Language": 'Til',
      "ENG": `ENG`,
      "RUS": 'RUS',
      "UZB": `UZB`,
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