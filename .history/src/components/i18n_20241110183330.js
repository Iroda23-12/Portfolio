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
      " About me"
      "Hi There": `Hi There,`,
      "I'm": `I'm Iroda`,
      "I study at": `I'm stydy at `,
      "Frontend": `Frontend`,
      "About-button": `About Me`,
      "AboutMe": `Hi! My name is Iroda.
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
                     which is aimed at promoting tourism in Uzbekistan` ,
                     " Skills & ":' Skills & ',
                     "Abilities":'Abilities',
                     "My Project":'My Project',
                     "First project":'First Project',
                     "First demo day":'First Demo Day',
                     " Get in ":'Get in',
                     "Touch":'Touch',
                     "Submit ":'Submit',
                     "Iroda Portfolio":'Iroda Portfolio',
                     "Thanks":'Thank you for visiting my personal portfolio website. Connect with me over socials.',
                     "Keep Rising":'Keep Rising 🚀. Connect with me over live chat!',
                     "Contact Info":'Contact Info',
                     "Designed With ❤️ By Iroda":'Designed With ❤️ By Iroda'
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
      "Hi There": `Всем Привет`,
      "I'm": `Я Ирода`,
      "I study at": `Я учусь на`,
      "Frontend": ` Frontend`,
      "About-button": `Обо Мне`,
      " About me":"Обо Мне",
      "AboutMe": `Привет! Меня зовут Ирода.
Я ученица 168-й
школы 8А класса и
учусь в Coddy Camp
уже 10 месяцев, где развиваю
свои навыки веб-разработки. Моя страсть
к программированию началась еще в школе, и
я активно участвую в различных проектах,
стремясь создавать удобные и привлекательные веб-
приложения. В своих проектах я использую React и Zustand
для государственного управления. В данный момент я
работаю над сайтом «UzbekistanExplorer.com»,
который направлен на продвижение туризма в Узбекистане`,
" Skills & ":'Навыки и ',
"Abilities":'способности',
 "My Project":'Мои проекты',
 "First project":'Первый проект',
 "First demo day":'Первый демо день',
 " Get in ":'Свяжитесь с',
 "Touch":' Нами',
 "Submit ":'Отправить',
 "Iroda Portfolio":'Ирода Портфолио',
 "Thanks":'Спасибо за посещение моего персонального портфолио сайта. Свяжитесь со мной через социальные сети.',
 "Keep Rising":'Рости, Конечно! Свяжитесь с мной через живой чат!',
 "Contact Info":'Контактная информация',
 " Uzbekistan Tashkent":' Узбекистан Ташкент',
 "Designed With ❤️ By Iroda":"Разработано с ❤️Автор:Иродa"
    }
  },
  uz: {
    translation: {
      "Home": 'Uy',
      "About": 'Haqida',
      "Skills": `Ko'nikmalar`,
      "Project": 'Project',
      "Contact": 'Kontakt',
      "Language": 'Til',
      "ENG": `ENG`,
      "RUS": 'RUS',
      "UZB": `UZB`,
      " About me":'Men haqimda',
      "Hi There": `Salom`,
      "I'm": `Man Irodaman`,
      "I study at": `Men o'qiyman`,
      "Frontend": ` Frontendda`,
      "About-button": `Men haqimda`,
      "AboutMe":`Salom! Mening ismim Iroda.
 Men 168-sinf talabasiman
 8A sinfidagi maktab va
 Coddy Kampida o'qigan
 10 oydan beri, men rivojlanayotgan joyda
 mening veb-ishlab chiqish ko'nikmalarim. Mening ishtiyoqim
 maktabda boshlangan dasturlash uchun va
 Men turli loyihalarda faol ishtirok etaman,
 qulay va jozibali veb yaratishga intilish
 ilovalar. Loyihalarimda React va Zustand-dan foydalanaman
 davlat boshqaruvi uchun. Ayni paytda, 
 Men 'UzbekistanExplorer.com' veb-saytida ishlayman,
 O'zbekistonda turizmni rivojlantirishga qaratilgan`,
 " Skills & ":`Ko'nikmalar va `,
 "Abilities":'qobiliyatlar',
 "My Project":'Mening Loihalarim',
 "First project":'Birinchi loyiha',
 "First demo day":'Birinchi demo kun',
 " Get in ":'Biz bilan',
 "Touch":` bog'laning`,
 "Submit ":'Yuborish',
 "Iroda Portfolio":'Iroda Portfolio',
 "Thanks":`Mening shaxsiy portfelim veb-saytimga tashrif buyurganingiz uchun tashakkur. Men bilan ijtimoiy tarmoqlar orqali bog'laning.`,
 "Keep Rising":`Ko'tarilishda davom eting 🚀. Jonli chat orqali men bilan bog'laning!`,
 "Contact Info":"Aloqa Ma'lumotlari",
 "Designed With ❤️ By Iroda":"Iroda tomonidan ❤️ bilan yaratilgan"

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