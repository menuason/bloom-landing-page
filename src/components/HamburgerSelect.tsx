import { useState } from 'react';
import hamburger from '../assets/icons/hamburger/hamburger.svg';
import close from '../assets/icons/close/close.svg';

const NAV_BAR_ITEMS_MOB = [
  {
    title: 'Catalogue',
    href: '',
  },
  {
    title: 'Packaging',
    href: '/packaging',
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
    href: '/our-system',
  },
  {
    title: 'Partners',
    href: '',
  },
  {
    title: 'Contact',
    href: '/contact-us',
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
          className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
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
                    <a href={item.href} key={item.title} className="flex self-center font-medium py-3 px-4 -mx-4 border-b border-gray-100">
                      {item.title}
                    </a>
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

export default HamburgerSelect;
