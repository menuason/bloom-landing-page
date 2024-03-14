import { FC } from "react";
import logoLight from "../assets/logo/logo-light.svg";
import { useTranslation } from "react-i18next";
import { MailFilledIcon } from "../assets/icons/mail/mail-filled";
import { LocationFilledIcon } from "../assets/icons/location/location-filled";
import { PhoneFilledIcon } from "../assets/icons/phone/phone-filled";

const Footer: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#232427] text-white w-full flex flex-col bottom-0">
      <div
        className="
        flex items-center justify-between
        lg:flex-row lg:mt-8 lg:mb-6 lg:px-20
        md:flex-col md:items-start md:mt-8 md:mb-6 md:pl-8 md:gap-6
        xs:flex-col xs:items-start xs:mt-8 xs:mb-6 xs:pl-4 sm:gap-6
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
            href={`/home/${i18n.language}`}
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
            {t("footer.info")}
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3 items-baseline">
          <p className="mb-2 text-sm">{t("footer.usefulLinks.links")}</p>
          <div className="flex flex-col gap-3">
            <a
              href={`/catalogue/${i18n.language}`}
              className="text-white hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-thin leading-6">
                {t("footer.usefulLinks.catalogue")}
              </span>
            </a>

            <a
              href={`/packaging/${i18n.language}`}
              className="text-white hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-thin leading-6">
                {t("footer.usefulLinks.packaging")}
              </span>
            </a>
            <a
              href={`/about-us/${i18n.language}`}
              className="text-white hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-thin leading-6">
                {t("footer.usefulLinks.aboutUs")}
              </span>
            </a>
            <a
              href={`/contact-us/${i18n.language}`}
              className="text-white hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-thin leading-6">
                {t("footer.usefulLinks.contact")}
              </span>
            </a>
          </div>
        </div>

        <div className="w-72 mt-4 flex flex-col justify-center items-baseline flex-wrap gap-4">
          <p className="mb-2 text-sm">{t("footer.contactInfo.contact")}</p>
          <div className="flex items-center gap-2 text-white">
            <PhoneFilledIcon color={"white"} />
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
            <MailFilledIcon color={"white"} />
            <a href="mailto:bloomhouse.arm@gmail.com">
              <span className="text-sm/[16px] font-thin leading-6">
                bloomhouse.arm@gmail.com
              </span>
            </a>
          </div>
          <div className="flex gap-2 text-white">
            <LocationFilledIcon color={"white"} />
            <a
              href="https://maps.google.com?q=Marmarashen+village+Yerevan-Ararat+highway+136/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm/[16px] font-thin leading-6">
                {t("footer.contactInfo.location")}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-t-[#323232] py-3">
        <span className="text-sm/[16px] font-thin leading-6">
          &copy; 2024 Bloom House. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
