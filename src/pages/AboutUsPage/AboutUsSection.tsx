import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { useTranslation } from "react-i18next";

export const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <img
          src="src/assets/about-us-page-photos/aboutUs.png"
          alt="Bloom House"
          className="w-full lg:h-full xs:h-[102px]"
        />
        <div className="absolute inset-0 p-0 m-0 w-fit h-fit text-center text-white flex flex-col m-auto
            lg:gap-2 md:gap-1
          "
        >
          <h2 className="font-medium
            lg:text-4xl lg:mt-6 md:mt-5 md:text-xl xs:text-xl
          "
          >
            {t("aboutUsPage.about.title")}
          </h2>
          <div className="flex items-center gap-3 justify-center font-light">
            <a href="/">
              <p className="cursor-pointer hover:text-[#C0C0C0]">{t("aboutUsPage.about.nav1")}</p>
            </a>
            <ArrowRightIcon color="white" width={8} height={12} />
            {t("aboutUsPage.about.nav2")}
          </div>
        </div>
      </div>

      <div className="flex
          lg:flex-row lg:gap-[72px] lg:px-20 lg:mt-[72px] lg:mb-[124px]
          md:flex-col md:gap-6 md:px-8 md:mt-12 md:mb-6
          xs:flex-col xs:gap-6 xs:px-4 xs:mt-6 xs:mb-6
        "
      >
        <img
          alt="Bloom House"
          src="src/assets/about-us-page-photos/mainPic1.png"
          className="w-full"
        />

        <div className="flex flex-col text-gray-950 justify-center
            lg:gap-8
            md:gap-3
            xs:gap-3
          "
        >
          <p className="text-4xl text-gray-950 font-medium
               lg:text-3xl lg:self-start
               md:text-2xl md:self-center
               xs:text-2xl xs:self-start
             "
          >
            {t("aboutUsPage.mainContent.title")}
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col font-normal
              lg:text-base lg:gap-6
              md:text-sm
              xs:text-sm
             "
            >
              <p>
                {t("aboutUsPage.mainContent.text.p1")}
              </p>

              <p>
                {t("aboutUsPage.mainContent.text.p2")}
              </p>
              <p>
                {t("aboutUsPage.mainContent.text.p3")}
              </p>
              <p>
                {t("aboutUsPage.mainContent.text.p4")}
              </p>
              <p>
                {t("aboutUsPage.mainContent.text.p5")}
              </p>
            </div>
            <button
              className="w-fit bg-black px-4 text-white flex items-center justify-center gap-4
                lg:py-3 lg:text-base lg:self-start
                md:py-1.5 md:text-sm md:self-center
                xs:py-1.5 xs:text-sm xs:self-start
              "
            >
              {t("homePage.aboutBloomHouse.aboutBloomHouseButton")}
              <ArrowRightIcon color="white" width={12} height={12} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
