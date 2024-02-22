import logo from '../assets/logo/logo-dark.svg';
import hamburger from '../assets/icons/hamburger/hamburger.svg';
import close from '../assets/icons/close/close.svg';
import { useTranslation } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import arrowDown from '../assets/icons/arrowDown/arrowDown.svg';

import { useState } from 'react';

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
          <img src={arrowDown} alt="Arrow Down" className="mt-0.5" />
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

const NAV_BAR_ITEMS_MOB = [
  {
    title: 'Catalogue',
    href: '',
  },
  {
    title: 'Packaging',
    href: '',
  },
  {
    title: 'About Us',
    href: '',
  },
  {
    title: 'Mission and Vision',
    href: '',
  },
  {
    title: 'Our System',
    href: '',
  },
  {
    title: 'Partners',
    href: '',
  },
  {
    title: 'Contact',
    href: '',
  },
];

const HamburgerSelect = () => {
  const [show, setShow] = useState(false);

  const handleHamburgerToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        className="border-none hover:outline-none hover:border-none "
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
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleHamburgerToggle}
        >
          <div
            className="flex flex-col gap-3 absolute top-0 left-0 w-[337px] h-full py-8 px-4 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <button
                className="float-right text-gray-700 hover:text-gray-900"
                onClick={handleHamburgerToggle}
              >
                <img
                  src={close}
                  className="self-center cursor-pointer h-[14px] w-[14px]"
                  alt="logo"
                />
              </button>
            </div>
            <div>
              {
                NAV_BAR_ITEMS_MOB.map((item) => {
                  return (
                    <div key={item.title} className="flex self-center font-medium py-3 px-4 -mx-4 border-b border-gray-100">
                      {item.title}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Header = () => {
  const { t } = useTranslation();

  const NAV_BAR_ITEMS_WEB = [
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
    <div className="
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

      <div className="flex gap-12 items-center cursor-pointer text-black">
          {
            NAV_BAR_ITEMS_WEB.map((item) => (
              <a key={item.title} href={item.href} className="hover:text-green-600">{item.title}</a>
            ))
          }
          <MultiLanguageSelect />
          {/*<div className="flex items-center cursor-pointer lg:hidden">*/}
          {/*  <HamburgerSelect />*/}
          {/*</div>*/}
      </div>

    </div>
  );
};

export default Header;
