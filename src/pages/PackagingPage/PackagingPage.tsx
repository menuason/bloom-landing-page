import { ImageList } from "../../components/ImageList";
import { useTranslation } from "react-i18next";
import { PlayIcon } from "../../assets/icons/roundArrowRight/play";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { Button } from "../../components/Button";
import { PackagingFullScreenVideo } from "../../components/PackagingFullScreenVideo";
import { FC, useEffect, useState } from "react";
import { getImageUrl } from "../../firebase";

interface PackagingPageProps {}

const PackagingPage:FC<PackagingPageProps> = () => {
  const { t } = useTranslation();

  const [imagesList, setImagesList] = useState<string[]>([]);
  const [mainPic, setMainPic] = useState("");
  const [headerPic, setHeaderPic] = useState("");

  useEffect(() => {
    getImageUrl('packaging-page/mainPic.png').then((url) => setMainPic(url));
    getImageUrl('packaging-page/packaging.png').then((url) => setHeaderPic(url));

    const ImagePathsFromFirebase = [
      "packaging-page/pic-1.png",
      "packaging-page/pic1-2.png",
      "packaging-page/pic-1-dialog.png",
      "packaging-page/pic-2.png",
      "packaging-page/pic2-2.png",
      "packaging-page/pic-2-dialog.png",
      "packaging-page/pic-3.png",
      "packaging-page/pic3-2.png",
      "packaging-page/pic-3-dialog.png",
      "packaging-page/pic-4.png",
      "packaging-page/pic4-2.png",
      "packaging-page/pic-4-dialog.png",
    ];

    Promise.all(ImagePathsFromFirebase.map((img) => getImageUrl(img)))
      .then((urls) => setImagesList(urls))
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);


  const PACKAGING_IMAGE_LIST = [
    {
      thumbnail: imagesList[0],
      hoverImg: imagesList[1],
      sliderImg: imagesList[2],
    },
    {
      thumbnail: imagesList[3],
      hoverImg: imagesList[4],
      sliderImg: imagesList[5],
    },
    {
      thumbnail: imagesList[6],
      hoverImg: imagesList[7],
      sliderImg: imagesList[8],
    },
    {
      thumbnail: imagesList[9],
      hoverImg: imagesList[10],
      sliderImg: imagesList[11],
    },
  ];

  return (
    <>
      <PageDescriptionHeader
        image={headerPic}
        title={t("systemPage.system.title")}
        navOne={t("packagingPage.packaging.nav2")}
      />

      <div
        className="flex
        lg:flex-row lg:gap-[72px] lg:px-20 lg:mt-[72px] lg:mb-[124px]
        md:flex-col md:gap-6 md:px-8 md:mt-12 md:mb-6
        xs:flex-col xs:gap-6 xs:px-4 xs:mt-6 xs:mb-6
       "
      >
        <PackagingFullScreenVideo>
          <div className="relative">
            <img
              alt="Bloom House"
              src={mainPic}
              className="w-full h-full"
            />

            <PlayIcon
              width={60}
              height={60}
              color="white"
              className="flex items-center justify-center bg-black/[.2] w-full h-full lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </PackagingFullScreenVideo>

        <div
          className="flex flex-col text-gray-950 justify-center
          lg:gap-6 lg:w-1/2
          md:gap-3 md:w-full
          xs:gap-3 xs:w-full
         "
        >
          <p
            className="text-4xl text-gray-950
             lg:text-3xl lg:self-start
             md:text-2xl md:self-center
             xs:text-2xl xs:self-start
           "
          >
            {t("packagingPage.mainContent.title")}
          </p>
          <div
            className="font-normal
            lg:text-base
            md:text-sm
            xs:text-sm
           "
          >
            <p>{t("packagingPage.mainContent.text.p1")}</p>
            <p>{t("packagingPage.mainContent.text.p2")}</p>
            <p>{t("packagingPage.mainContent.text.p3")}</p>

            <div className="flex flex-col lg:gap-8 lg:mt-3">
              <p>{t("packagingPage.mainContent.text.p4")}</p>

              <PackagingFullScreenVideo>
                <Button
                  type="outlined"
                  className="hidden lg:flex"
                  startIcon={<PlayIcon color="black" width={24} height={24} />}
                >
                  {t("packagingPage.mainContent.button.text")}
                </Button>
              </PackagingFullScreenVideo>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-9
          lg:mt-8 lg:px-20 lg:gap-8
          md:mt-6 md:px-8 md:gap-6
          xs:mt-6 xs:px-4 xs:gap-4
        "
      >
        <div
          className="flex flex-col items-center gap-2 text-gray-950 justify-center
          lg:self-center
          md:self-center
          xs:self-start
        "
        >
          <p
            className="
             lg:text-3xl lg:self-center
             md:text-2xl md:self-center
             xs:text-2xl xs:self-start
            "
          >
            {t("packagingPage.gallerySection.title")}
          </p>
          <p
            className="font-normal text-[#323232]
            lg:text-base
            md:text-sm
            xs:text-sm
           "
          >
            {t("packagingPage.gallerySection.text")}
          </p>
        </div>
      </div>
      <div
        className=" lg:mt-8 lg:mb-[156px] lg:px-20 lg:gap-8
          md:mt-6 md:mb-[72px] md:px-8 md:gap-6
          xs:mt-6 xs:mb-[72px] xs:pl-4 xs:gap-4
        "
      >
        <ImageList images={PACKAGING_IMAGE_LIST} />
      </div>
    </>
  );
};

export default PackagingPage;
