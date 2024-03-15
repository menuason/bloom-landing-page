import { useTranslation } from "react-i18next";
import { ImageList } from "../../components/ImageList";

export const AboutUsGallerySection = () => {
  const { t } = useTranslation();

  const ABOUT_US_IMAGE_LIST = [
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest.png?alt=media&token=d0d7e0ec-d32a-4716-9d9b-1b2fb3c25afa",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextOne"),
        images: [
          `https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest1.png?alt=media&token=81a16df2-0cd0-43a5-8ab8-f1aed82bd20a`,
          `https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest2.png?alt=media&token=3ae7a484-99bd-4ff6-819e-f9dede87b2c9`,
          `https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest3.png?alt=media&token=1638a863-f6c2-4a17-845d-3eafe2e2166c`,
          `https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest4.png?alt=media&token=c7088fb6-48e4-4c24-a0dd-55b03b9c4e6e`,
          `https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest5.png?alt=media&token=9a58477d-b8f9-467b-8cf5-a777593485c8`,
          `https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest6.png?alt=media&token=b8cede76-9009-4048-8084-c81aa2965293`,
          `https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Faest%2Faest7.png?alt=media&token=25130920-4b2e-456c-9b1d-0f0d8c16e46e`,
        ],
      },
    },
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fheating%2Fheat.png?alt=media&token=64919802-8bc4-423e-b716-ccebd5d3c21e",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextTwo"),
        images: [
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fheating%2Fheat-1.png?alt=media&token=7fb9642f-2c90-402b-86c7-abe3b6000b00",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fheating%2Fheat-2.png?alt=media&token=81aa3b95-da80-4d84-bf60-b9bf2bd8c221",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fheating%2Fheat-3.png?alt=media&token=c0b2223b-a289-4f05-ac2b-602be3460e80",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fheating%2Fheat-4.png?alt=media&token=2d751a0d-9426-47bf-859f-dd8debb78caa",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fheating%2Fheat-5.png?alt=media&token=46dd7cb9-a447-4e81-98de-ba29ce0fcaf5",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fheating%2Fheat-6.png?alt=media&token=73bb35e1-5335-4b4a-9e3b-4190731e7739",
        ],
      },
    },
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fenv%2Fenv.png?alt=media&token=dffdd80f-55e7-46fe-8cf2-c137ea9315a4",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextThree"),
        images: [
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fenv%2Fenv-1.png?alt=media&token=52ae9a8c-eabb-465d-99da-5a2b08219a37",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fenv%2Fenv-2.png?alt=media&token=55f6c890-e09b-46c0-858f-1df0666a10c2",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fenv%2Fenv-3.png?alt=media&token=f6173926-ab21-4f4a-9ba5-08f74b81067c",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fenv%2Fenv-4.png?alt=media&token=bc1f0251-fdc3-480d-9f95-c1070c010350",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fenv%2Fenv-5.png?alt=media&token=87b91a24-6fe7-489d-a625-9b682c2f48a3",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fenv%2Fenv-6.png?alt=media&token=2a194f7e-62b5-46f8-8028-8aa61c131cf5",
        ],
      },
    },
    {
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fpackaging%2Fpac-3.png?alt=media&token=d709bac8-6a79-4d0b-95b8-2aa4cec1da2e",
      sliderImages: {
        title: t("aboutUsPage.gallerySection.imgTextFour"),
        images: [
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fpackaging%2Fpac-1.png?alt=media&token=97f47137-1a10-4b3b-b29c-17b2a0791c95",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fpackaging%2Fpac-2.png?alt=media&token=d51baf96-49ab-40a5-bfab-04371ef38ab4",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fpackaging%2Fpac-3.png?alt=media&token=d709bac8-6a79-4d0b-95b8-2aa4cec1da2e",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fpackaging%2Fpac-4.png?alt=media&token=627cac8b-2126-42ac-99fe-657b14599e62",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fpackaging%2Fpac-5.png?alt=media&token=bcaf9ad3-b055-426c-8a7d-a6cd1c71b54c",
          "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Fpackaging%2Fpac-6.png?alt=media&token=fcb8d52c-00c1-45d9-82bd-7132493cd94c",
        ],
      },
    },
  ];

  return (
    <div
      className="flex flex-col gap-9
        lg:mt-8 lg:mb-40 lg:px-20 lg:gap-8
        md:mt-6 md:mb-[72px] md:px-8 md:gap-6
        xs:mt-6 xs:mb-6 xs:pl-4 xs:gap-4
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
          {t("aboutUsPage.gallerySection.title")}
        </p>

        <div className="flex justify-center">
          <p
            className="font-normal text-[#323232]
              lg:text-base
              md:text-sm
              xs:text-sm
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
