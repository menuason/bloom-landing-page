import { FC } from "react";
import logoLight from "../assets/logo/logo-light.svg";
import { useTranslation } from "react-i18next";
import { PhoneFilledIcon } from "../../public/icons/phone/phone-filled";
import { MailFilledIcon } from "../../public/icons/mail/mail-filled";
import { LocationFilledIcon } from "../../public/icons/location/location-filled";

const Footer: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#232427] text-white w-full flex flex-col bottom-0 ">
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

          <span className="text-[#E2E2E2]  text-sm/[16px] font-normal leading-6">
            {t("footer.info")}
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3 items-baseline">
          <p className="mb-2 text-sm">{t("footer.usefulLinks.links")}</p>
          <div className="flex flex-col gap-3">
            <a
              href={`/catalogue/${i18n.language}`}
              className="text-[#E2E2E2] hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-normal leading-6">
                {t("footer.usefulLinks.catalogue")}
              </span>
            </a>

            <a
              href={`/packaging/${i18n.language}`}
              className="text-[#E2E2E2] hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-normal leading-6">
                {t("footer.usefulLinks.packaging")}
              </span>
            </a>
            <a
              href={`/about-us/${i18n.language}`}
              className="text-[#E2E2E2] hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-normal leading-6">
                {t("footer.usefulLinks.aboutUs")}
              </span>
            </a>
            <a
              href={`/contact-us/${i18n.language}`}
              className="text-[#E2E2E2] hover:text-gray-400"
            >
              <span className="text-sm/[16px] font-normal leading-6">
                {t("footer.usefulLinks.contact")}
              </span>
            </a>
          </div>
        </div>

        <div className="w-72 mt-4 flex flex-col justify-center items-baseline flex-wrap gap-4">
          <p className="mb-2 text-sm">{t("footer.contactInfo.information")}</p>
          <div className="flex items-center gap-2 text-[#E2E2E2] ">
            <PhoneFilledIcon color="#E2E2E2" />
            <a href="tel:+374 77103567">
              <span className="text-sm/[16px] font-normal leading-6">
                +374 77103567
              </span>
            </a>
            <span className="text-sm/[16px] font-normal leading-6">|</span>
            <a href="tel: +910 7103567">
              <span className="text-sm/[16px] font-normal leading-6">
                +7 910 7103567
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MailFilledIcon color="#E2E2E2" />
            <a href="mailto:info@bloomhouse.am">
              <span className="text-sm/[16px] font-normal leading-6">
                info@bloomhouse.am
              </span>
            </a>
          </div>
          <div className="flex gap-2 text-[#E2E2E2] ">
            <LocationFilledIcon color="#E2E2E2" />
            <a
              href="https://www.google.com/maps/place/46th+St,+0815/@40.0488,44.4698,17z/data=!4m6!3m5!1s0x406ac7dd852d1143:0xfda2d06cdeba888!8m2!3d40.0487835!4d44.4721143!16s%2Fg%2F11f7r131dm?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm/[16px] font-normal leading-6">
                {t("footer.contactInfo.location")}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-t-[#323232] py-3">
        <span className="text-[#E2E2E2] text-sm/[16px] font-normal leading-6">
          &copy; 2024 Bloom House. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
