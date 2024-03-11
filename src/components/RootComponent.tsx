import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const RootComponent = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};
