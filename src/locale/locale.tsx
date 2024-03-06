import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import OurSystemPageTranslation from "./system";
import PackagingPageTranslation from "./packaging";
import FooterTranslation from "./footer";
import HeaderTranslation from "./header";
import CataloguePageTranslation from "./catalogue";
import ContactUsPageTranslation from "./contact";
import AboutUsPageTranslation from "./about";
import MissionAndVisionPageTranslation from "./mission";
import HomePageTranslation from "./home";

const resources = {
  en: {
    translation: {
      header: HeaderTranslation.en,
      homePage: HomePageTranslation.en,
      systemPage: OurSystemPageTranslation.en,
      cataloguePage: CataloguePageTranslation.en,
      packagingPage: PackagingPageTranslation.en,
      contactUsPage: ContactUsPageTranslation.en,
      aboutUsPage: AboutUsPageTranslation.en,
      missionAndVisionPage: MissionAndVisionPageTranslation.en,
      footer: FooterTranslation.en,
    },
  },
  hy: {
    translation: {
      header: HeaderTranslation.hy,
      homePage: HomePageTranslation.hy,
      systemPage: OurSystemPageTranslation.hy,
      cataloguePage: CataloguePageTranslation.hy,
      packagingPage: PackagingPageTranslation.hy,
      contactUsPage: ContactUsPageTranslation.hy,
      aboutUsPage: AboutUsPageTranslation.hy,
      missionAndVisionPage: MissionAndVisionPageTranslation.hy,
      footer: FooterTranslation.hy,
    },
  },
  ru: {
    translation: {
      header: HeaderTranslation.ru,
      homePage: HomePageTranslation.ru,
      systemPage: OurSystemPageTranslation.ru,
      cataloguePage: CataloguePageTranslation.ru,
      packagingPage: PackagingPageTranslation.ru,
      contactUsPage: ContactUsPageTranslation.ru,
      aboutUsPage: AboutUsPageTranslation.ru,
      missionAndVisionPage: MissionAndVisionPageTranslation.ru,
      footer: FooterTranslation.ru,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
