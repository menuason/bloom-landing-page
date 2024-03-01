import roundArrowRight from "../../assets/icons/roundArrowRight/roundArrowRight.svg";
import { ImageList } from "../../components/ImageList";
import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { useTranslation } from "react-i18next";

const PACKAGING_IMAGE_LIST = [
  {
    thumbnail: "src/assets/packaging-page-photos/pic-1.png",
    hoverImg: "src/assets/packaging-page-photos/pic1-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-1-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-2.png",
    hoverImg: "src/assets/packaging-page-photos/pic2-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-2-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-3.png",
    hoverImg: "src/assets/packaging-page-photos/pic3-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-3-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-4.png",
    hoverImg: "src/assets/packaging-page-photos/pic4-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-4-dialog.png",
  },
];

const PackagingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <img src="src/assets/packaging-page-photos/453.png" alt="Bloom House" />
        <img
          src="src/assets/packaging-page-photos/opacityLayer.png"
          className="absolute top-0 left-0 right-0 bottom-0"
          alt="Bloom House"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 w-[886px] text-center text-white flex flex-col gap-2 m-auto justify-center">
          <h2 className="lg:text-4xl font-normal mt-6">{t("packagingPage.packaging.title")}</h2>
          <div className="flex items-center gap-3 justify-center font-extraligh">
            <a href="/">
              <p className="cursor-pointer hover:text-[#C0C0C0]">{t("packagingPage.packaging.nav1")}</p>
            </a>
            <ArrowRightIcon width={8} height={12} />
            {t("packagingPage.packaging.nav2")}
          </div>
        </div>
      </div>

      <div className="flex gap-20 px-20 mt-[72px] my-[124px]">
        <img
          className="h-[420px]"
          alt="Bloom House"
          src="src/assets/packaging-page-photos/5P4A34438.png"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-950">
          <p className="text-4xl text-gray-950">{t("packagingPage.mainContent.title")}</p>
          <div className="text-base">
            <p>
              {t("packagingPage.mainContent.text.p1")}
            </p>
            <p>
              {t("packagingPage.mainContent.text.p2")}
            </p>
            <p>{t("packagingPage.mainContent.text.p3")}</p>
          </div>

          <div className="flex flex-col gap-8 text-base">
            <p>
              {t("packagingPage.mainContent.text.p4")}
            </p>
            <button className="flex text-base h-14 w-fit px-6 gap-3 items-center bg-[#1F2023] text-white">
              <img src={roundArrowRight} alt="" />
              {t("packagingPage.mainContent.button.text")}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9 mt-8 mb-40">
        <div className="flex flex-col items-center gap-2 text-gray-950 justify-center">
          <p className="text-4xl">{t("packagingPage.gallerySection.title")}</p>
          <p className="font-light text-[#323232]">
            {t("packagingPage.gallerySection.text")}
          </p>
        </div>
        <ImageList images={PACKAGING_IMAGE_LIST} />
      </div>
    </>
  );
};

export default PackagingPage;
