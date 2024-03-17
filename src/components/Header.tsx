import logo from "../assets/logo/logo-dark.svg";
import { useTranslation } from "react-i18next";
import MultiLanguageSelect from "./MultilanguageSelect";
import HamburgerSelect from "./HamburgerSelect";
import AboutUsSelect from "./AboutUsSelect";

const Header = () => {
  const { t, i18n } = useTranslation();

  const NAV_BAR_ITEMS_WEB = [
    {
      title: t("header.home").toUpperCase(),
      href: `/home/${i18n.language}`,
    },
    {
      title: t("header.catalogue").toUpperCase(),
      href: `/catalogue/${i18n.language}`,
    },
    {
      title: t("header.packaging").toUpperCase(),
      href: `/packaging/${i18n.language}`,
    },
    {
      title: t("header.about.aboutUs").toUpperCase(),
      href: "",
      component: <AboutUsSelect />,
    },
    {
      title: t("header.contact").toUpperCase(),
      href: `/contact-us/${i18n.language}`,
    },
  ];

  return (
    <div
      className="bg-white h-20 w-full flex justify-between px-6 shadow-bloomBoxShadow fixed z-10
        lg:px-20
        md:px-8
        xs:px-4
     "
    >
      <a
        href={`/home/${i18n.language}`}
        className="self-center cursor-pointer
          lg:h-14 lg:w-[105px]
          md:h-12 md:w-[95px]
          xs:h-12 xs:w-[90px]
        "
      >
        <img src={logo} alt="logo" />
      </a>
      <div className="flex items-center gap-12 cursor-pointer text-bloomBlack">
        <div className="hidden lg:flex gap-12 items-center font-normal mt-2">
          {
            NAV_BAR_ITEMS_WEB.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="hover:text-[#7E7E7E]"
              >
                {item?.component ?? item.title}
              </a>
            ))
          }

        </div>
      </div>
      <div className="flex gap-4">
        <MultiLanguageSelect />
        <div className="flex items-center cursor-pointer lg:hidden">
          <HamburgerSelect />
        </div>
      </div>
    </div>
  );
};

export default Header;
