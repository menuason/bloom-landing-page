import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { GetInTouchSection } from "./GetInTouchSection";
import ContactUsForm from "./ContactUsForm";

const ContactUsPage = () => {
  return (
    <>
      <div className="relative">
        <img src="src/assets/contact-us-page-photos/5P4A3240.png" alt="Bloom House" />
        <img
          src="src/assets/contact-us-page-photos/blurLayer.png"
          className="absolute top-0 left-0 right-0 bottom-0"
          alt="Bloom House"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 w-[886px] text-center text-white flex flex-col gap-2 m-auto mt-20">
          <h2 className="lg:text-4xl font-medium">Contact Us</h2>
          <div className="flex items-center gap-3 justify-center font-extralight cursor-pointer">
            <a href="/">
              <p className="cursor-pointer hover:text-[#C0C0C0]">Home</p>
            </a>
            <ArrowRightIcon />
            Packaging
          </div>
        </div>
      </div>

      <div className="flex justify-between mx-20 mt-[72px] mb-[108px]">
        <GetInTouchSection />
        <ContactUsForm />
      </div>
    </>
  );
};

export default ContactUsPage;
