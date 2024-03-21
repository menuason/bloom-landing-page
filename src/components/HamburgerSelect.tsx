import { SyntheticEvent, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import hamburger from "../../public/icons/hamburger/hamburger.svg";

const HamburgerSelect = () => {
  const { t } = useTranslation();

  const NAV_BAR_ITEMS_MOB = [
    {
      title: t("header.catalogue"),
      href: `/catalogue/${i18n.language}`,
    },
    {
      title: t("header.packaging"),
      href: `/packaging/${i18n.language}`,
    },
    {
      title: t("header.about.aboutUs"),
      href: `/about-us/${i18n.language}`,
    },
    {
      title: t("header.about.mission"),
      href: `/mission-and-vision/${i18n.language}`,
    },
    {
      title: t("header.about.system"),
      href: `/our-system/${i18n.language}`,
    },
    {
      title: t("header.about.partners"),
      href: `/${i18n.language}`,
    },
    {
      title: t("header.contact"),
      href: `/contact-us/${i18n.language}`,
    },
  ];

  const [show, setShow] = useState(false);

  const handleHamburgerToggle = (e: SyntheticEvent) => {
    e.stopPropagation();

    setShow(!show);
    if (!show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <button
        className="border-none hover:outline-none hover:border-none mt-2"
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
          className="fixed top-0 right-0 h-full bg-black bg-opacity-50 z-10 w-full"
          onClick={handleHamburgerToggle}
        >
          <div
            className="flex flex-col gap-3 top-0 left-0 h-full py-8 pl-4 bg-white z-10 items-start md:w-[377px] xs:w-9/12
            animate-fade-right animate-once animate-duration-300 overflow-hidden"
          >
            <div className="w-full">
              {NAV_BAR_ITEMS_MOB.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.title}
                    className="flex self-center py-3 px-4 -mx-4 border-b border-gray-100 uppercase"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerSelect;
