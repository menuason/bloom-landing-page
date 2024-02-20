import { FC } from "react";
import { PhoneIcon } from "../assets/icons/phone/phone";
import { MailIcon } from "../assets/icons/mail/mail";
import { LocationIcon } from "../assets/icons/location/location";
import logoLight from "../assets/logo/logo-light.svg";

const Footer: FC = () => {
  return (
    <div className="bg-[#1F2023] text-white w-full flex flex-col absolute bottom-0">
      <div
        className="
        flex items-center justify-between
        lg:flex-row lg:mt-14 lg:mb-6 lg:px-20
        md:flex-col md:items-start md:mt-14 md:mb-6 md:pl-8 md:gap-6
        xs:flex-col xs:items-start xs:mt-14 xs:mb-6 xs:pl-4 sm:gap-6
        "
      >
        <div
          className="
          flex flex-col gap-6
          lg:max-w-[30%]
          md:max-w-[50%]
          xs:max-w-[50%]
          "
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <img
              src={logoLight}
              className="self-center h-14 w-[105px] cursor-pointer"
              alt="logo"
            />
          </a>

          <span className="text-white text-sm/[16px] font-thin leading-6">
            Bloom House is a gerbera greenhouse farm established in 2022 with
            the unique mission of cultivating the best gerberas.
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3 items-baseline">
          <p className="mb-2 text-sm">Useful Links</p>
          <div className="flex flex-col gap-3">
            <a href="#home" className="text-white hover:text-gray-400">
              <span className="text-sm/[16px] font-thin leading-6">
                Catalogue
              </span>
            </a>

            <a href="#about" className="text-white hover:text-gray-400">
              <span className="text-sm/[16px] font-thin leading-6">
                Packaging
              </span>
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              <span className="text-sm/[16px] font-thin leading-6">
                About Us
              </span>
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              <span className="text-sm/[16px] font-thin leading-6">
                Contact
              </span>
            </a>
          </div>
        </div>

        <div className="w-72 mt-4 flex flex-col justify-center items-baseline flex-wrap gap-3">
          <p className="mb-2 text-sm">Contact</p>
          <div className="flex items-center gap-2 text-white">
            <PhoneIcon />
            <a href="tel:+374 77103567">
              <span className="text-sm/[16px] font-thin leading-6">
                +374 77103567
              </span>
            </a>
            <span className="text-sm/[16px] font-thin leading-6">|</span>
            <a href="tel: +910 7103567">
              <span className="text-sm/[16px] font-thin leading-6">
                +910 7103567
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MailIcon />
            <a href="mailto:bloomhouse.arm@gmail.com">
              <span className="text-sm/[16px] font-thin leading-6">
                bloomhouse.arm@gmail.com
              </span>
            </a>
          </div>
          <div className="flex gap-2 text-white">
            <LocationIcon />
            <a
              href="https://maps.google.com?q=Marmarashen+village+Yerevan-Ararat+highway+136/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm/[16px] font-thin leading-6">
                Marmarashen village Yerevan-Ararat highway 136/1
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t-neutral-500 border-t border-gray-600 py-3">
        <span className="text-sm/[16px] font-thin leading-6">
          &copy; 2024 Bloom House. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
