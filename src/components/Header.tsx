import logo from "../assets/logo/logo-dark.svg";
import { useTranslation } from "react-i18next";
import MultiLanguageSelect from "./MultilanguageSelect";
import HamburgerSelect from "./HamburgerSelect";

const Header = () => {
  const { t } = useTranslation();

  const NAV_BAR_ITEMS_WEB = [
    {
      title: t("header.home"),
      href: "/",
    },
    {
      title: t("header.catalogue"),
      href: "",
    },
    {
      title: t("header.packaging"),
      href: "/packaging",
    },
    {
      title: t("header.about.aboutUs"),
      href: "",
    },
    {
      title: t("header.contact"),
      href: "",
    },
  ];

  return (
    <div
      className="
      bg-white h-20 w-full flex justify-between px-6
      lg:px-20
      md:px-8
     "
    >
      <img
        src={logo}
        className="
          self-center cursor-pointer h-14 w-[105px]
          xs:h-12 w-[89px]
        "
        alt="logo"
      />

      <div className="flex items-center gap-12 cursor-pointer text-black">
        <div className="hidden lg:flex gap-12 items-center">
          {NAV_BAR_ITEMS_WEB.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover:text-green-600"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          <MultiLanguageSelect />
          <div className="flex items-center cursor-pointer lg:hidden">
            <HamburgerSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
