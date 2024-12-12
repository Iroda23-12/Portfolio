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
      "I study at":`I'm stydy at `,
      "Frontend":`Frontend`,
      "About-button":`About Me`,
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
      "I study at":`Я учусь на`,
      "Frontend":` Frontend`,
      "About-button":`Обо Мне`,
      "AboutMe":`Hi! My name is Iroda.
                 I am a student of 168th 
                 school in grade 8A and
                  have been studying at Coddy Camp
                   for 10 months now, where I develop
                    my web development skills. My passion 
                    for programming started in school, and 
                    I am actively involved in various projects, 
                    striving to create convenient and attractive web 
                    applications. In my projects, I use React and Zustand 
                    for state management. At the moment, I 
                    am working on the website 'UzbekistanExplorer.com',
                     which is aimed at promoting tourism in Uzbekistan`
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
      "Hi There":`Salom`,
      "I'm":`Man Irodaman`,
      "I study at":`Men o'qiyman`,
      "Frontend":` Frontendda`,
      "About-button":`Men haqimda`
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