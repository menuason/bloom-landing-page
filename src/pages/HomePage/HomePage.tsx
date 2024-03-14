import { useTranslation } from "react-i18next";
import { AboutBloomHouse, Assortment, WhyChooseUs } from ".";
import { RoundedArrowDownIcon } from "../../assets/icons/roundedArrowDown/roundedArrowDown";

const HomePage = () => {
  const { t } = useTranslation();

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4 lg:mb-[156px] md:mb-24 xs:mb-14 pt-20">
      <div className="relative w-full">
        <video
          className="w-full md:h-screen object-cover"
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
        >
          <source
            src="/src/assets/videos/Bloom House.mp4"
            type="video/mp4"
          />
          {t("homePage.videoNotSupported")}
        </video>

        <div className="lg:block md:hidden xs:hidden absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer">
          <RoundedArrowDownIcon onClick={scrollDown} />
        </div>
      </div>

      <Assortment />
      <AboutBloomHouse />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
