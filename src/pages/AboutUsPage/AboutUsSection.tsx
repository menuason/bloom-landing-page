import { useTranslation } from "react-i18next";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { PageSection } from "../../components/PageSection";
import { Button } from "../../components/Button";
import { ArrowIcon } from "../../assets/arrow/arrowIcon";

// import { getDownloadURL } from 'firebase/storage';
// import { imageRef } from "../../firebase";
// import { useState } from 'react';

export const AboutUsSection = () => {
  const { t, i18n } = useTranslation();
  // const [imageUrl, setImageUrl] = useState("");

  // getDownloadURL(imageRef);
  // .then((url) => {
  //   console.log(url);
  //   setImageUrl(url);
  //   // Use the image URL in your Vite project
  //   // const imgElement = document.createElement("img");
  //   // imgElement.src = url;
  //   // document.body.appendChild(imgElement);
  // })
  // .catch((error) => {
  //   console.error("Error getting download URL:", error);
  // });

  return (
    <>
      <PageDescriptionHeader
        image="/src/assets/about-us-page-photos/aboutUs.png"
        title={t("aboutUsPage.about.title")}
        navOne={t("aboutUsPage.about.nav2")}
      />
      <PageSection
        isImageFirst
        imageClassName="w-full"
        image="/src/assets/about-us-page-photos/mainPic1.png"
      >
        <div
          className="flex flex-col text-gray-950 justify-center
          lg:gap-8
          md:gap-3
          xs:gap-3
         "
        >
          <p
            className="text-4xl text-gray-950 font-medium
             lg:text-3xl lg:self-start
             md:text-2xl md:self-center
             xs:text-2xl xs:self-start
           "
          >
            {t("aboutUsPage.mainContent.title")}
          </p>
          <div className="flex flex-col gap-8">
            <div
              className="flex flex-col font-normal
              lg:text-base lg:gap-6
              md:text-sm
              xs:text-sm
             "
            >
              <p>{t("aboutUsPage.mainContent.text.p1")}</p>
              <p>{t("aboutUsPage.mainContent.text.p2")}</p>
              <p>{t("aboutUsPage.mainContent.text.p3")}</p>
              <p>{t("aboutUsPage.mainContent.text.p4")}</p>
              <p>{t("aboutUsPage.mainContent.text.p5")}</p>
            </div>

            <Button
              link={`/mission-and-vision/${i18n.language}`}
              type="outlined"
              endIcon={<ArrowIcon color="black" width={24} height={24} />}
            >
              {t("aboutUsPage.mainContent.button")}
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
};
