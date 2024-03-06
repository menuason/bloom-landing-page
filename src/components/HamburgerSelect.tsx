import { useState } from 'react';
import hamburger from '../assets/icons/hamburger/hamburger.svg';
import { useTranslation } from "react-i18next";
import MultiLanguageSelect from "./MultilanguageSelect";

const HamburgerSelect = () => {
  const { t } = useTranslation();

  const NAV_BAR_ITEMS_MOB = [
    {
      title: t("header.catalogue"),
      href: '/catalogue',
    },
    {
      title: t("header.packaging"),
      href: '/packaging',
    },
    {
      title: t("header.about.aboutUs"),
      href: '/about-us',
    },
    {
      title: t("header.about.mission"),
      href: '/mission-and-vision',
    },
    {
      title: t("header.about.system"),
      href: '/our-system',
    },
    {
      title: t("header.about.partners"),
      href: '',
    },
    {
      title: t("header.contact"),
      href: '/contact-us',
    },
  ];

  const [show, setShow] = useState(false);

  const handleHamburgerToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        className="border-none hover:outline-none hover:border-none "
        onClick={handleHamburgerToggle}
      >
        <img
          src={hamburger}
          className="self-center cursor-pointer h-[27px] w-10"
          alt="logo"
        />
      </button>

      {show && (
        <div
          className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={handleHamburgerToggle}
        >
          <div
            className="flex flex-col gap-3 absolute top-0 left-0 w-[337px] h-full py-8 px-4 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {
                NAV_BAR_ITEMS_MOB.map((item) => {
                  return (
                    <a href={item.href} key={item.title} className="flex self-center  py-3 px-4 -mx-4 border-b border-gray-100">
                      {item.title}
                    </a>
                  );
                })
              }
            </div>
            <MultiLanguageSelect />
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerSelect;
