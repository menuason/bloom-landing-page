import { useTranslation } from "react-i18next";
import { AboutBloomHouse, Assortment, WhyChooseUs } from ".";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 lg:mb-[156px] md:mb-24 xs:mb-14 pt-20">
      <div className="relative">
        <video controls width="100%" height="100%" autoPlay muted loop>
          <source src="/src/assets/videos/Bloom House.mp4" type="video/mp4" />
          {t("homePage.videoNotSupported")}
        </video>
      </div>

      <Assortment />
      <AboutBloomHouse />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
