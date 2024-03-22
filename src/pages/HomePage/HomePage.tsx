import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AboutBloomHouse, Assortment, WhyChooseUs } from ".";
import { RoundedArrowDownIcon } from "../../../public/icons/roundedArrowDown/roundedArrowDown";
import { RoundPlayIcon } from "../../../public/icons/roundArrowRight/roundPlay";

const HomePage = () => {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const isMobile = width < 1000;
  const updateScreenSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const toggleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex flex-col gap-4 lg:mb-[156px] md:mb-24 xs:mb-14 pt-20">
      <div className="min-h-[212px]">
        {isVideoPlaying ? (
          <div className="lg:h-full md:h-full xs:h-auto">
            <video
              className="w-full md:h-screen object-cover"
              width="100%"
              height="100%"
              autoPlay={!isMobile}
              muted
              loop
              onClick={toggleVideoPlay}
            >
              <source
                src={"../../videos/Bloom House.mp4"}
                type="video/mp4"
              />
              {t("homePage.videoNotSupported")}
            </video>
          </div>
        ) : (
          <>
            <div className="relative w-full lg:block md:block xs:hidden">
              <video
                className="w-full md:h-screen object-cover"
                width="100%"
                height="100%"
                autoPlay={!isMobile}
                muted
                loop
              >
                <source
                  src={"../../videos/Bloom House.mp4"}
                  type="video/mp4"
                />
                {t("homePage.videoNotSupported")}
              </video>

              <div className="animate-bounce lg:block md:block xs:hidden absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer">
                <RoundedArrowDownIcon onClick={scrollDown} />
              </div>
            </div>

            <div className="relative lg:hidden md:hidden xs:block">
              <img
                alt="Bloom House"
                src={"../../home-page-photos/thumbnail.jpg"}
              />
              <RoundPlayIcon
                color="white"
                className="flex items-center justify-center bg-black/[.2] w-full h-full lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={toggleVideoPlay}
              />
            </div>
          </>
        )}
      </div>

      <Assortment />
      <AboutBloomHouse />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
