import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AboutBloomHouse, Assortment, WhyChooseUs } from ".";
import { RoundedArrowDownIcon } from "../../../public/icons/roundedArrowDown/roundedArrowDown";
import { RoundPlayIcon } from "../../../public/icons/roundArrowRight/roundPlay";

const HomePage = () => {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const videoForMobile = useRef<HTMLVideoElement>(null!);
  const videoForWeb = useRef<HTMLVideoElement>(null!);

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

  const toggleMobileVideoPlay = () => {
    setIsVideoPlaying(true);
    videoForMobile.current?.play();
  };
  const toggleWebVideoPlay = () => {
    setIsVideoPlaying(true);
    videoForWeb.current?.play();
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
              onClick={toggleWebVideoPlay}
              ref={videoForWeb}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/bloom-test-ec336.appspot.com/o/Bloom%20House%20Opening.mp4?alt=media&token=74c31a52-72ed-4127-a91a-df623ea480ed"
                }
                type="video/mp4"
              />
              {t("homePage.videoNotSupported")}
            </video>
          </div>
        ) : (
          <>
            <div className="relative w-full lg:block md:block xs:hidden">
              <video
                ref={videoForMobile}
                className="w-full md:h-screen object-cover"
                width="100%"
                height="100%"
                muted
                loop
                autoPlay={!isMobile}
              >
                <source
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/bloom-test-ec336.appspot.com/o/Bloom%20House%20New.mp4?alt=media&token=89bfde67-5868-48fd-b593-e415a571cf5a"}
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
                onClick={toggleMobileVideoPlay}
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
