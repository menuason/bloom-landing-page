import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import arrowDown from "../assets/icons/arrowDown/arrowDown.svg";
import { useTranslation } from "react-i18next";

const AboutUsSelect = () => {
  const { t, i18n } = useTranslation();

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
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="
          flex items-center cursor-pointer text-bloomBlack border-none
          hover:border-none hover:outline-none
          focus:outline-none
        "
      >
        <div className="flex gap-2 hover:text-green-600">
          {t("header.about.aboutUs")}
          <img src={arrowDown} alt="Arrow Down" className="mt-0.5" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="start"
        className="
            absolute text-bloomBlack bg-white z-10 w-[200px]
            hover:outline-none px-4 py-3
         "
      >
        {ABOUT_US_ITEMS.map((item) => (
          <div key={item.name}>
            <DropdownMenu.Item
              className="
                flex self-start py-2 my-0.5 cursor-pointer
                hover:outline-none
              "
            >
              <a href={item.href}>
                {item.menuItem}
              </a>
            </DropdownMenu.Item>
          </div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AboutUsSelect;
