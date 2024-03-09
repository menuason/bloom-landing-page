import logo from "../assets/logo/logo-dark.svg";
import { useTranslation } from "react-i18next";
import MultiLanguageSelect from "./MultilanguageSelect";
import HamburgerSelect from "./HamburgerSelect";
import AboutUsSelect from "./AboutUsSelect";

const Header = () => {
  const { t, i18n } = useTranslation();

  const NAV_BAR_ITEMS_WEB = [
    {
      title: t("header.home"),
      href: `/home/${i18n.language}`,
    },
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
      href: "",
      component: <AboutUsSelect />,
    },
    {
      title: t("header.contact"),
      href: `/contact-us/${i18n.language}`,
    },
  ];

  return (
    <div
      className="bg-white h-20 w-full flex justify-between px-6
        lg:px-20
        md:px-8
        xs:px-4
     "
    >
      <a
        href={`/home/${i18n.language}`}
        className="self-center cursor-pointer h-14 w-[105px]
          xs:h-12 xs:w-[89px]
        "
      >
        <img src={logo} alt="logo" />
      </a>
      <div className="flex items-center gap-12 cursor-pointer text-bloomBlack">
        <div className="hidden lg:flex gap-12 items-center">
          {NAV_BAR_ITEMS_WEB.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover:text-green-600"
            >
              {item?.component ?? item.title}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex">
          <MultiLanguageSelect />
        </div>
        <div className="lg:hidden flex items-center cursor-pointer ">
          <HamburgerSelect />
        </div>
      </div>
    </div>
  );
};

export default Header;
