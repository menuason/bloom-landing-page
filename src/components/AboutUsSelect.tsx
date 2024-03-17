import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import arrowDown from "../assets/icons/arrowDown/arrowDown.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const AboutUsSelect = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ABOUT_US_ITEMS = [
    {
      menuItem: t("header.about.aboutUs"),
      name: "about",
      href: `/about-us/${i18n.language}`,
    },
    {
      menuItem: t("header.about.mission"),
      name: "mission",
      href: `/mission-and-vision/${i18n.language}`,
    },
    {
      menuItem: t("header.about.system"),
      name: "system",
      href: `/our-system/${i18n.language}`,
    },
    {
      menuItem: t("header.about.partners"),
      name: "partners",
      href: `/${i18n.language}`,
    },
  ];

  return (
    <DropdownMenu.Root
      onOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
    >
      <DropdownMenu.Trigger
        className="
          flex items-center cursor-pointer text-bloomBlack border-none
          hover:border-none hover:outline-none
          focus:outline-none
        "
      >
        <div className="flex gap-2 hover:text-[#7E7E7E]">
          {t("header.about.aboutUs").toUpperCase()}
          <img
            src={arrowDown}
            alt="Arrow Down"
            className={`mt-0.5 transition-transform ${isMenuOpen ? "rotate-180" : " "}`}
          />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="start"
        className="
            text-bloomBlack bg-white w-[100vw]
            hover:outline-none px-20 pt-4 pb-4 shadow-inner
         "
        sideOffset={22}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <b>Bloom House</b>
            {ABOUT_US_ITEMS.map((item) => (
              <div key={item.name}>
                <DropdownMenu.Item
                  className="
                  flex self-start py-2 my-0.5 cursor-pointer
                  hover:outline-none hover:text-[#7E7E7E]
                "
                >
                  <a href={item.href}>
                    {item.menuItem.toUpperCase()}
                  </a>
                </DropdownMenu.Item>
              </div>
            ))}
          </div>
          <img src="/src/assets/select.png" alt="Bloom House" className="h-[279px]" />
        </div>

      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AboutUsSelect;
