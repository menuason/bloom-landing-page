import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import arrowDown from "../assets/icons/arrowDown/arrowDown.svg";

const LANG_ITEMS = [
  {
    lang: "English",
    shortLang: "Eng",
    name: "en",
  },
  {
    lang: "Հայերեն",
    shortLang: "Հայ",
    name: "hy",
  },
  {
    lang: "Русский",
    shortLang: "Рус",
    name: "ru",
  },
];

const MultiLanguageSelect = () => {
  const storedLanguage = localStorage.getItem("selectedLanguage");

  const [selectedValue, setSelectedLanguage] = useState(storedLanguage || 'en');
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);

    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <>
      <div className="hidden lg:flex md:hidden sx:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            className="
          flex items-center cursor-pointer text-black border-none
          hover:border-none hover:outline-none
          focus:outline-none
        "
          >
            <div className="flex gap-2 hover:text-green-600">
              {
                selectedValue === "en"
                  ? "Eng"
                  : selectedValue === "ru"
                    ? "Рус"
                    : "Հայ"
              }
              <img src={arrowDown} alt="Arrow Down" className="mt-0.5" />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="start"
            className="
            absolute text-black bg-white z-10
            hover:outline-none py-3 px-4"
          >
            {LANG_ITEMS.map((item) => (
              <div key={item.lang}>
                <DropdownMenu.Item
                  onSelect={() => changeLanguage(`${item.name}`)}
                  className="
                flex self-start py-2 my-0.5 cursor-pointer
                hover:outline-none
              "
                >
                  {item.lang}
                </DropdownMenu.Item>
              </div>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div className="lg:hidden md:flex xs:flex ">
        <div className="flex gap-3 h-6">
          {LANG_ITEMS.map((item) => (
            <div
              key={item.lang}
              onClick={() => changeLanguage(`${item.name}`)}
              className="flex pr-4 border-r border-[#B0B4C0] h-4 last:border-0"
            >
              <span className="self-center">{item.shortLang}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MultiLanguageSelect;
