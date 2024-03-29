import { SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowDownIcon } from '../../public/icons/arrowDown/arrowDownIcon';

type LanguageInfo = {
  shortName: string;
  flagPath: string;
};

type Languages = {
  [key: string]: LanguageInfo;
};

const languages: Languages = {
  en: { shortName: 'EN', flagPath: '../../icons/flags/en.svg' },
  ru: { shortName: 'РУ', flagPath: '../../icons/flags/ru.svg' },
  hy: { shortName: 'հԱ', flagPath: '../../icons/flags/hy.svg' },
};

const MultiLanguageSelect = () => {
  const location = useLocation();
  const { pathname } = location;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLanguageSelect = (ev: SyntheticEvent, lang: string) => {
    ev.stopPropagation();
    changeLanguage(lang);
  };

  return (
    <>
      <DropdownMenu.Root onOpenChange={(isOpen) => setIsMenuOpen(isOpen)} modal={false}>
        <DropdownMenu.Trigger
          className="flex items-center cursor-pointer mt-2 text-bloomBlack border-none hover:border-none hover:outline-none focus:outline-none">
          <div className="flex gap-2 hover:text-[#7E7E7E]">
            <div className="flex gap-4">
              <div className="lg:block md:hidden xs:hidden text-[#7E7E7E]">|</div>
              <div className="flex gap-2 font-medium hover:text-[#7E7E7E] text-bloomTitle">
                <span>
                  {languages[selectedLanguage].shortName.toUpperCase()}
                </span>
                <img src={languages[selectedLanguage].flagPath} alt="logo" />
              </div>
            </div>

            <ArrowDownIcon className={`flex items-center transition-transform ${isMenuOpen ? 'rotate-180' : ' '}`} />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="center"
          className="text-bloomBlack bg-white z-10 hover:outline-none shadow-md lg:-mr-5 pl-[10px] pr-6 pb-2 pt-0 mt-0"
        >
          {Object.keys(languages).map((item) => (
            <DropdownMenu.Item
              key={item}
              className="flex font-medium justify-between gap-2 py-2 tracking-wide cursor-pointer hover:outline-none normal hover:text-[#7E7E7E]"
              // onSelect={(ev) => handleLanguageSelect(ev, item)}
              onClick={(ev) => handleLanguageSelect(ev, item)}
            >
              <span>{languages[item].shortName.toUpperCase()}</span>
              <img src={languages[item].flagPath} alt="logo" />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default MultiLanguageSelect;
