import { GetInTouchSection } from "./GetInTouchSection";
import ContactUsForm from "./ContactUsForm";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { useTranslation } from "react-i18next";

const ContactUsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageDescriptionHeader
        image="/src/assets/contact-us-page-photos/contact.png"
        title={t("contactUsPage.contact.title")}
        navOne={t("contactUsPage.contact.nav2")}
      />
      <div
        className="flex
          lg:mt-[72px] lg:mb-[108px] lg:mx-20 lg:flex-row lg:justify-between
          md:mt-12 md:mb-[72px] md:mx-8 md:flex-col md:gap-12
          xs:mt-6 xs:mb-14 xs:mx-4 xs:flex-col xs:gap-8
        "
      >
        <GetInTouchSection />
        <ContactUsForm />
      </div>
    </>
  );
};

export default ContactUsPage;
