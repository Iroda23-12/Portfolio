// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        skills: "Skills",
        project: "Project",
        contact: "Contact",
      },
    },
    ru: {
      translation: {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки",
        project: "Проекты",
        contact: "Контакты",
        aboutMe: "Обо мне",
        submit: "Отправить",
        name: "Имя",
        email: "Электронная почта",
        phone: "Телефон",
        message: "Сообщение",
      },
    },
    uz: {
      translation: {
        home: "Bosh sahifa",
        about: "Haqimda",
        skills: "Ko'nikmalar",
        project: "Loyihalar",
        contact: "Aloqa",
        aboutMe: "Haqimda",
        submit: "Yuborish",
        name: "Ism",
        email: "Email",
        phone: "Telefon",
        message: "Xabar",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
    