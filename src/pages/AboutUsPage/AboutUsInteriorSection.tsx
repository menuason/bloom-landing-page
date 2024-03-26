import { useTranslation } from "react-i18next";
import InlinePhotoSlider from "../../components/InlinePhotoSlider";

const INTERIOR_PHOTOS_INLINE = [
  {
    thumbnail: "../../about-us-page-photos/interior/interior.png",
    sliderImages: {
      images: [
        "../../about-us-page-photos/interior/interior.png",
        "../../about-us-page-photos/interior/slider-1.png",
        "../../about-us-page-photos/interior/slider-2.png",
        "../../about-us-page-photos/interior/slider-3.png",
      ],
    },
  },
];

export const AboutUsInteriorSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex
        lg:flex-row lg:px-20 lg:mt-[72px] lg:mb-[156px]
        md:flex-col md:gap-6 md:px-8 md:mt-12 md:mb-14
        xs:flex-col xs:gap-6 xs:px-4 xs:mt-6 xs:mb-14
     "
    >
      <div
        className="flex flex-col text-gray-950 justify-center
        lg:gap-8
        md:gap-3
        xs:gap-3
       "
      >
        <p
          className="text-bloomTitle font-medium
           lg:text-4xl lg:self-start lg:leading-[3rem]
           md:text-[26px] md:self-center md:font-semibold
           xs:text-2xl xs:self-start xs:font-semibold
          "
        >
          {t("aboutUsPage.interiorSection.title")}
        </p>
        <div
          className="flex flex-col gap-8 font-normal text-bloomBody
          lg:text-base
          md:text-base
          xs:text-base
         "
        >
          <div className="flex flex-col w-full lg:gap-6 xs:leading-6">
            <div className="flex flex-col">
              <p>{t("aboutUsPage.interiorSection.p1")}</p>
              <p>{t("aboutUsPage.interiorSection.p2")}</p>
            </div>
            <div
              className="hidden
                lg:flex-col lg:block lg:gap-6
                md:flex md:flex-col
               "
            >
              <div className="flex flex-col lg:gap-6 xs:leading-6">
                <p>{t("aboutUsPage.interiorSection.p3")}</p>
                <p>{t("aboutUsPage.interiorSection.p4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 min-w-[50%]">
        <div className="w-full h-full">
          <InlinePhotoSlider images={INTERIOR_PHOTOS_INLINE} />
        </div>
        <div className="hidden lg:hidden md:hidden xs:block xs:text-base text-bloomBody xs:leading-6">
          <p>{t("aboutUsPage.interiorSection.p3")}</p>
          <p>{t("aboutUsPage.interiorSection.p4")}</p>
        </div>
      </div>
    </div>
  );
};
