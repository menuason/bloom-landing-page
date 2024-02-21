import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        home: 'Home',
        catalogue: 'Catalogue',
        packaging: 'Packaging',
        about: {
          aboutUs: 'About Us',
          mission: 'Mission and Vision',
          system: 'Our System',
          partners: 'Partners',
        },
        contact: 'Contact',
      },
    },
  },
  hy: {
    translation: {
      header: {
        home: 'Գլխավոր',
        catalogue: 'Կատալոգ',
        packaging: 'Փաթեթավորում',
        about: {
          aboutUs: 'Մեր Մասին',
          mission: 'Առաքելություն Եվ Տեսլական',
          system: 'Մեր Համակարգը',
          partners: 'Գործընկերներ',
        },
        contact: 'Կապ',
      },
    },
  },
  ru: {
    translation: {
      header: {
        home: 'Главная',
        catalogue: 'Каталог',
        packaging: 'Упаковка',
        about: {
          aboutUs: 'О Нас',
          mission: 'Миссия и видение',
          system: 'Наша система',
          partners: 'Партнеры',
        },
        contact: 'Контакт',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
