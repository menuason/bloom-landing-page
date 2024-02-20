import logo from '../assets/logo/logo-dark.svg';

const NAV_BAR_ITEMS = [
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
    title: 'Contact',
    href: '',
  },
  {
    title: 'Eng',
    href: '',
  },
];

const Header = () => {
  return (
    <div className="bg-white h-20 flex justify-between px-20">
      <img src={logo} className="self-center h-14 w-[105px] cursor-pointer" alt="logo" />
      <div className="flex gap-12 items-center cursor-pointer text-black">
        {NAV_BAR_ITEMS.map((item, ind) => (
          <a href={item.href} className="hover:text-green-600" key={ind}>{item.title}</a>
        ))}
      </div>
    </div>
  );
};

export default Header;
