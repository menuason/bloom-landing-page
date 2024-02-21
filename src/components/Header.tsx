import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import logo from '../assets/logo/logo-dark.svg';
import arrowDown from '../assets/icons/arrowDown/arrowDown.svg';

const LANG_ITEMS = [
  {
    lang: 'English',
    name: 'en',
  },
  {
    lang: 'Русский',
    name: 'ru',
  },
  {
    lang: 'հայերեն',
    name: 'hy',
  },
];

const MultiLanguageSelect = () => {
  const [selectedValue, setSelectedLanguage] = useState('en');
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="
          flex items-center cursor-pointer text-black border-none
          hover:border-none hover:outline-none
          focus:outline-none
        "
      >
        <div className="flex gap-2 hover:text-green-600">
          {selectedValue === 'en' ? 'Eng' : selectedValue === 'ru' ? 'Рус' : 'Հայ'}
          <img src={arrowDown} alt="Arrow Down" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="start"
        className="
            absolute text-black bg-white
            hover:outline-none py-2 px-4"
      >
        {
          LANG_ITEMS.map((item) => (
            <DropdownMenu.Item
              onSelect={() => changeLanguage(`${item.name}`)}
              className="
                flex self-start px-4 py-2 my-0.5 cursor-pointer
                hover:outline-none
              "
            >
              {item.lang}
            </DropdownMenu.Item>
          ))
        }
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const Header = () => {
  const { t } = useTranslation();

  const NAV_BAR_ITEMS = [
    {
      title: t('header.home'),
      href: '',
    },
    {
      title: t('header.catalogue'),
      href: '',
    },
    {
      title: t('header.packaging'),
      href: '',
    },
    {
      title: t('header.about.aboutUs'),
      href: '',
    },
    {
      title: t('header.contact'),
      href: '',
    },
  ];

  return (
    <div className="bg-white h-20 flex justify-between px-20">
      <img src={logo} className="self-center h-14 w-[105px] cursor-pointer" alt="logo" />
      <div className="flex gap-12">
        <div className="flex gap-12 items-center cursor-pointer text-black">
          {NAV_BAR_ITEMS.map((item, ind) => (
            <a href={item.href} className="hover:text-green-600" key={ind}>{t(`${item.title}`)}</a>
          ))}
        </div>
        <MultiLanguageSelect />
      </div>
    </div>
  );
};

export default Header;
