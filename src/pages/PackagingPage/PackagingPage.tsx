import { ImageList } from "../../components/ImageList";
import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { useTranslation } from "react-i18next";
import { PlayIcon } from "../../assets/icons/roundArrowRight/play";

const PACKAGING_IMAGE_LIST = [
  {
    thumbnail: "src/assets/packaging-page-photos/pic-1.png",
    hoverImg: "src/assets/packaging-page-photos/pic1-2.png",
    sliderImg: "src/assets/packaging-page-photos/pic-1-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-2.png",
    hoverImg: "src/assets/packaging-page-photos/pic2-2.png",
    sliderImg: "src/assets/packaging-page-photos/pic-2-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-3.png",
    hoverImg: "src/assets/packaging-page-photos/pic3-2.png",
    sliderImg: "src/assets/packaging-page-photos/pic-3-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-4.png",
    hoverImg: "src/assets/packaging-page-photos/pic4-2.png",
    sliderImg: "src/assets/packaging-page-photos/pic-4-dialog.png",
  },
];

const PackagingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <img
          src="src/assets/packaging-page-photos/packaging.png"
          alt="Bloom House"
          className="w-full lg:h-full xs:h-[102px]"
        />
        <div className="absolute inset-0 p-0 w-fit h-fit text-center text-white flex flex-col m-auto
            lg:gap-2 md:gap-1
          "
        >
          <h2 className="font-medium
            lg:text-4xl lg:mt-6
            md:mt-5 md:text-xl
            xs:text-xl
          "
          >
            {t("systemPage.system.title")}
          </h2>
          <div className="flex items-center gap-3 justify-center font-light">
            <a href="/">
              <p className="cursor-pointer hover:text-[#C0C0C0]">
                {t("packagingPage.packaging.nav1")}
              </p>
            </a>
            <ArrowRightIcon color="white" width={8} height={12} />
            {t("packagingPage.packaging.nav2")}
          </div>
        </div>
      </div>

      <div className="flex
          lg:flex-row lg:gap-[72px] lg:px-20 lg:mt-[72px] lg:mb-[124px]
          md:flex-col md:gap-6 md:px-8 md:mt-12 md:mb-6
          xs:flex-col xs:gap-6 xs:px-4 xs:mt-6 xs:mb-6
        "
      >
        <div className="relative">
          <img
            alt="Bloom House"
            src="src/assets/packaging-page-photos/mainPic.png"
            className="w-full"
          />
          <PlayIcon
            width={40}
            height={40}
            className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
          />
        </div>

        <div className="flex flex-col text-gray-950 justify-center
            lg:gap-6 lg:w-1/2
            md:gap-3 md:w-full
            xs:gap-3 md:w-full
          "
        >
          <p className="text-4xl text-gray-950
             lg:text-3xl lg:self-start
             md:text-2xl md:self-center
             xs:text-2xl xs:self-start
            "
          >
            {t("packagingPage.mainContent.title")}
          </p>
          <div className="font-normal
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            <p>
              {t("packagingPage.mainContent.text.p1")}
            </p>
            <p>
              {t("packagingPage.mainContent.text.p2")}
            </p>
            <p>{t("packagingPage.mainContent.text.p3")}</p>
          </div>

          <div className=" flex flex-col font-normal lg:gap-8
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            <p>
              {t("packagingPage.mainContent.text.p4")}
            </p>
            <button className="hidden lg:flex flex text-base w-fit py-4 px-6 gap-3 items-center bg-[#1F2023] text-white">
              <PlayIcon width={24} height={24} />
              {t("packagingPage.mainContent.button.text")}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9
          lg:mt-8 lg:mb-40 lg:px-20 lg:gap-8
          md:mt-6 md:mb-[72px] md:px-8 md:gap-6
          xs:mt-6 xs:mb-[72px] xs:px-4 xs:gap-4
        "
      >
        <div className="flex flex-col items-center gap-2 text-gray-950 justify-center
            lg:self-center
            md:self-center
            xs:self-start
          "
        >
          <p className="
             lg:text-3xl lg:self-center
             md:text-2xl md:self-center
             xs:text-2xl xs:self-start
            "
          >
            {t("packagingPage.gallerySection.title")}
          </p>
          <p className="font-normal text-[#323232]
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            {t("packagingPage.gallerySection.text")}
          </p>
        </div>
        <ImageList images={PACKAGING_IMAGE_LIST} />
      </div>
    </>
  );
};

export default PackagingPage;
