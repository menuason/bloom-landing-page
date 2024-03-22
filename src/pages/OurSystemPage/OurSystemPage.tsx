import { ImageList } from "../../components/ImageList";
import { useTranslation } from "react-i18next";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { PageSection } from "../../components/PageSection";

const OUR_SYSTEM_IMAGE_LIST = [
  {
    thumbnail: "../../our-system-page-photos/pic-1.png",
    hoverImg: "../../our-system-page-photos/pic1-2.png",
    sliderImg: "../../our-system-page-photos/pic-1-dialog.png",
  },
  {
    thumbnail: "../../our-system-page-photos/pic-2.png",
    hoverImg: "../../our-system-page-photos/pic2-2.png",
    sliderImg: "../../our-system-page-photos/pic-2-dialog.png",
  },
  {
    thumbnail: "../../our-system-page-photos/pic-3.png",
    hoverImg: "../../our-system-page-photos/pic3-2.png",
    sliderImg: "../../our-system-page-photos/pic-3-dialog.png",
  },
  {
    thumbnail: "../../our-system-page-photos/pic-4.png",
    hoverImg: "../../our-system-page-photos/pic4-2.png",
    sliderImg: "../../our-system-page-photos/pic-4-dialog.png",
  },
];

const OurSystemPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageDescriptionHeader
        image="../../our-system-page-photos/system.png"
        title={t("systemPage.system.title")}
        navOne={t("systemPage.system.nav2")}
      />

      <PageSection
        isImageFirst
        image="../../our-system-page-photos/mainPic.png"
      >
        <div
          className="flex flex-col text-gray-950 justify-center
          lg:gap-6 lg:w-1/2
          md:gap-3
          xs:gap-3
         "
        >
          <p
            className="text-4xl text-bloomTitle items-center font-medium
             lg:text-4xl lg:self-start
             md:text-2xl md:self-center md:font-semibold
             xs:text-2xl xs:self-start xs:font-semibold
            "
          >
            {t("systemPage.mainContent.title")}
          </p>
          <div
            className="font-normal text-bloomBody
              lg:text-base
              md:text-sm
              xs:text-base xs:leading-6
            "
          >
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
      </PageSection>

      <div
        className="flex flex-col gap-9
          lg:mt-8 lg:mb-[156px] lg:px-20 lg:gap-8
          md:mt-6 md:mb-[72px] md:px-8 md:gap-6
          xs:mt-6 xs:mb-14 xs:pl-4 xs:gap-4
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
            className="font-medium text-bloomTitle
             lg:text-4xl lg:self-center
             md:text-2xl md:self-center
             xs:text-2xl  xs:self-start
            "
          >
            {t("systemPage.gallerySection.title")}
          </p>
          <p
            className="font-normal text-bloomBody
              lg:text-base
              md:text-sm
              xs:text-base
            "
          >
            {t("systemPage.gallerySection.text")}
          </p>
        </div>
        <ImageList images={OUR_SYSTEM_IMAGE_LIST} />
      </div>
    </>
  );
};

export default OurSystemPage;
