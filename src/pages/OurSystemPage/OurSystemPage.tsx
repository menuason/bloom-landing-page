import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { ImageList } from "../../components/ImageList";
import { useTranslation } from "react-i18next";

const OUR_SYSTEM_IMAGE_LIST = [
  {
    thumbnail: "src/assets/our-system-page-photos/pic-1.png",
    hoverImg: "src/assets/our-system-page-photos/pic1-2.png",
    dialogImg: "src/assets/our-system-page-photos/pic-1-dialog.png",
  },
  {
    thumbnail: "src/assets/our-system-page-photos/pic-2.png",
    hoverImg: "src/assets/our-system-page-photos/pic2-2.png",
    dialogImg: "src/assets/our-system-page-photos/pic-2-dialog.png",
  },
  {
    thumbnail: "src/assets/our-system-page-photos/pic-3.png",
    hoverImg: "src/assets/our-system-page-photos/pic3-2.png",
    dialogImg: "src/assets/our-system-page-photos/pic-3-dialog.png",
  },
  {
    thumbnail: "src/assets/our-system-page-photos/pic-4.png",
    hoverImg: "src/assets/our-system-page-photos/pic4-2.png",
    dialogImg: "src/assets/our-system-page-photos/pic-4-dialog.png",
  },
];

const OurSystemPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <img src="src/assets/our-system-page-photos/upperPic.png" alt="Bloom House" />
        <img
          src="src/assets/our-system-page-photos/opacity.png"
          className="absolute top-0 left-0 right-0 bottom-0"
          alt="Bloom House"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-[886px] text-center text-white flex flex-col gap-2 m-auto justify-center">
          <h2 className="lg:text-4xl font-normal mt-6">{t("systemPage.system.title")}</h2>
          <div className="flex items-center gap-3 justify-center font-extraligh">
            <a href="/">
              <p className="cursor-pointer hover:text-[#C0C0C0]">{t("systemPage.system.nav1")}</p>
            </a>
            <ArrowRightIcon />
            {t("systemPage.system.nav2")}
          </div>
        </div>
      </div>

      <div className="flex gap-20 px-20 mt-[72px] my-[124px]">
        <img
          className="h-[420px]"
          alt="Bloom House"
          src="src/assets/our-system-page-photos/mainPic.png"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-950">
          <p className="text-4xl text-gray-950">{t("systemPage.mainContent.title")}</p>
          <div className="text-base font-normal">
            <p>
              <b>{t("systemPage.mainContent.text.boldP1")}</b>
              {t("systemPage.mainContent.text.p1")}
            </p>
            <p>
              <b>{t("systemPage.mainContent.text.boldP2")}</b>
              {t("systemPage.mainContent.text.p2")}
            </p>
            <p>
              <b>{t("systemPage.mainContent.text.boldP3")}</b>
              {t("systemPage.mainContent.text.p3")}
            </p>
            <p>
              <b>{t("systemPage.mainContent.text.boldP4")}</b>
              {t("systemPage.mainContent.text.p4")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9 mt-8 mb-40">
        <div className="flex flex-col items-center gap-2 text-gray-950 justify-center">
          <p className="text-4xl">{t("systemPage.gallerySection.title")}</p>
          <p className="font-light text-[#323232]">
            {t("systemPage.gallerySection.text")}
          </p>
        </div>
        <ImageList images={OUR_SYSTEM_IMAGE_LIST} />
      </div>
    </>
  );
};

export default OurSystemPage;
