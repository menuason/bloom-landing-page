import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";

const ContactUsPageUpperSection = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <img src="src/assets/contact-us-page-photos/5P4A3240.png" alt="Bloom House" />
        <img
          src="src/assets/contact-us-page-photos/blurLayer.png"
          className="absolute top-0 left-0 right-0 bottom-0"
          alt="Bloom House"
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <img
          src="src/assets/contact-us-page-photos/tablet.png"
          alt="Bloom House Tablet/Desktop"
          className="h-[102px]"
        />
        <img
          src="src/assets/contact-us-page-photos/tablet-blur.png"
          className="absolute top-0 left-0 right-0 bottom-0 h-[102px] w-full"
          alt="Bloom House"
        />
      </div>
      <div className="block md:hidden">
        <img
          className="w-full h-[105px]"
          src="src/assets/contact-us-page-photos/mob.png"
          alt="Bloom House Mobile"
        />
        <img
          src="src/assets/contact-us-page-photos/mob-blur.png"
          className="absolute top-0 left-0 right-0 bottom-0 h-[105px] w-full"
          alt="Bloom House"
        />
      </div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 text-center text-white flex flex-col justify-end  mx-auto
          lg:mt-20 lg:gap-2 lg:mb-9 lg:justify-end
          md:mt-8 lg:gap-1 md:mb-6
          xs:mt-8 lg:gap-1 xs:mb-6
        "
      >
        <h2
          className="font-medium
            lg:text-4xl
            md:text-xl
            xs:text-xl
          "
        >
          Contact Us
        </h2>
        <div className="flex items-center gap-3 justify-center font-extralight cursor-pointer">
          <a href="/">
            <p className="cursor-pointer hover:text-[#C0C0C0]">Home</p>
          </a>
          <ArrowRightIcon color="white" width={8} height={12} />
          Packaging
        </div>
      </div>
    </div>
  );
};

export default ContactUsPageUpperSection;
