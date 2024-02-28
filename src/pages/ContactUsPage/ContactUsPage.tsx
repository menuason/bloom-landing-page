import { GetInTouchSection } from "./GetInTouchSection";
import ContactUsForm from "./ContactUsForm";
import ContactUsPageUpperSection from "./ContactUsPageUpperSection";

const ContactUsPage = () => {
  return (
    <>
      <ContactUsPageUpperSection />
      <div className="flex mt-[72px] mb-[108px]
        lg:mx-20 lg:flex-row lg:justify-between
        md:mx-8 md:flex-col md:gap-12
        xs:mx-4 xs:flex-col xs:gap-8
        "
      >
        <GetInTouchSection />
        <ContactUsForm />
      </div>
    </>
  );
};

export default ContactUsPage;
