import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { useTranslation } from "react-i18next";

const ContactUsPageUpperSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <img
        src="src/assets/contact-us-page-photos/contact.png"
        alt="Bloom House"
        className="w-full lg:h-full xs:h-[102px]"
      />
      <div className="absolute inset-0 p-0 m-0 w-fit h-fit text-center text-white flex flex-col m-auto
            lg:gap-2 md:gap-1
          "
      >
        <h2 className="font-light
            lg:text-4xl lg:mt-6
            md:mt-5 md:text-xl
            xs:text-xl
          "
        >
          {t("contactUsPage.contact.title")}
        </h2>
        <div className="flex items-center gap-3 justify-center font-light">
          <a href="/">
            <p className="cursor-pointer hover:text-[#C0C0C0]">
              {t("contactUsPage.contact.nav1")}
            </p>
          </a>
          <ArrowRightIcon color="white" width={8} height={12} />
          {t("contactUsPage.contact.nav2")}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPageUpperSection;
