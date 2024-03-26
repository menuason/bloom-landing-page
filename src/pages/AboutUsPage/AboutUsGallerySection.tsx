import { useTranslation } from "react-i18next";
import { ImageList } from "../../components/ImageList";

export const AboutUsGallerySection = () => {
  const { t } = useTranslation();

  const ABOUT_US_IMAGE_LIST = [
    {
      thumbnail: "../../about-us-page-photos/aest/aest.png",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextOne"),
        images: [
          "../../about-us-page-photos/aest/aest1.png",
          "../../about-us-page-photos/aest/aest2.png",
          "../../about-us-page-photos/aest/aest7.png",
          "../../about-us-page-photos/aest/aest3.png",
          "../../about-us-page-photos/aest/aest4.png",
          "../../about-us-page-photos/aest/aest5.png",
          "../../about-us-page-photos/aest/aest6.png",
        ],
      },
    },
    {
      thumbnail: "../../about-us-page-photos/heating/heat.png",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextTwo"),
        images: [
          "../../about-us-page-photos/heating/heat-1.png",
          "../../about-us-page-photos/heating/heat-2.png",
          "../../about-us-page-photos/heating/heat-3.png",
          "../../about-us-page-photos/heating/heat-4.png",
          "../../about-us-page-photos/heating/heat-5.png",
          "../../about-us-page-photos/heating/heat-6.png",
        ],
      },
    },
    {
      thumbnail: "../../about-us-page-photos/env/env.png",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextThree"),
        images: [
          "../../about-us-page-photos/env/env-1.png",
          "../../about-us-page-photos/env/env-2.png",
          "../../about-us-page-photos/env/env-3.png",
          "../../about-us-page-photos/env/env-4.png",
          "../../about-us-page-photos/env/env-5.png",
          "../../about-us-page-photos/env/env-6.png",
        ],
      },
    },
    {
      thumbnail: "../../about-us-page-photos/packaging/packaging.png",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextFour"),
        images: [
          "../../about-us-page-photos/packaging/pac-1.png",
          "../../about-us-page-photos/packaging/pac-2.png",
          "../../about-us-page-photos/packaging/pac-3.png",
          "../../about-us-page-photos/packaging/pac-4.png",
          "../../about-us-page-photos/packaging/pac-5.png",
          "../../about-us-page-photos/packaging/pac-6.png",
        ],
      },
    },
  ];

  return (
    <div
      className="flex flex-col gap-9
        lg:mt-8 lg:mb-40 lg:px-20 lg:gap-8
        md:mt-6 md:mb-[72px] md:px-8 md:gap-6
        xs:mt-8 xs:mb-12 xs:pl-4 xs:gap-4
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
          className="text-[#232427] font-medium
           lg:text-4xl lg:self-center
           md:text-[26px] md:self-center md:font-semibold
           xs:text-2xl xs:self-start xs:font-semibold
          "
        >
          {t("aboutUsPage.gallerySection.title")}
        </p>

        <div className="flex justify-center">
          <p
            className="font-normal text-[#323232]
              lg:text-base
              md:text-base
              xs:text-base
            "
          >
            {t("aboutUsPage.gallerySection.text")}
          </p>
        </div>
      </div>

      <ImageList images={ABOUT_US_IMAGE_LIST} />
    </div>
  );
};
