import { useTranslation } from "react-i18next";
import { AboutBloomHouse, Assortment, WhyChooseUs } from ".";

const HomePage = () => {
  const videoContainerHeight = "calc(100vh - 80px)";
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 lg:mb-[156px] md:mb-24 xs:mb-14">
      <div style={{ height: videoContainerHeight }} className="relative">
        {t("homePage.videoNotSupported")}
      </div>
      <Assortment />
      <AboutBloomHouse />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
