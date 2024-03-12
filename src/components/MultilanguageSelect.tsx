import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import arrowDown from "../assets/icons/arrowDown/arrowDown.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type LanguageInfo = {
  shortName: string;
  fullName: string;
};

type Languages = {
  [key: string]: LanguageInfo;
};

const languages: Languages = {
  hy: { shortName: "հայ", fullName: "հայերեն" },
  ru: { shortName: "Рус", fullName: "Русский" },
  en: { shortName: "Eng", fullName: "English" },
};

const MultiLanguageSelect = () => {
  const location = useLocation();
  const { pathname } = location;

  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  const [selectedLanguage, setSelectedLanguage] = useState(
    lang || i18n.language,
  );

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);

    const redirectionPath = `${pathname.slice(0, -2)}${language}`;

    navigate(redirectionPath);
  };

  useEffect(() => {
    setSelectedLanguage(lang || i18n.language);
  }, [i18n.language, lang]);

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className="flex items-center cursor-pointer text-bloomBlack border-none hover:border-none hover:outline-none focus:outline-none">
          <div className="flex gap-2 hover:text-green-600 focus:text-green-600">
            {languages[selectedLanguage].shortName}

            <img src={arrowDown} alt="Arrow Down" className="mt-0.5" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          align="start"
          className="absolute text-bloomBlack bg-white z-10 hover:outline-none py-3 px-4"
        >

          {Object.keys(languages).map((item) => (
            <div key={item}>
              <DropdownMenu.Item
                onSelect={() => changeLanguage(`${item}`)}
                className="flex self-start py-2 my-0.5 cursor-pointer hover:outline-none font-notmal hover:text-green-600"
              >
                {languages[item].shortName}
              </DropdownMenu.Item>
            </div>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default MultiLanguageSelect;
