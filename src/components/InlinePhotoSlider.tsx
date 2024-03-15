import { FC, useState } from "react";
import { ArrowLeftIcon } from "../assets/icons/arrowLeft/arrowLeft";
import { ArrowRightIcon } from "../assets/icons/arrowRight/arrowRight";
import { Image, ImageList } from "./ImageList";

const INTERIOR_PHOTOS = [
  {
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Finterior%2Finterior-1.png?alt=media&token=0123189a-bb7d-4942-a69c-297a0890d500",
    sliderImages: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Finterior%2Finterior-1.png?alt=media&token=0123189a-bb7d-4942-a69c-297a0890d500",
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Finterior%2Finterior-2.png?alt=media&token=67c84f54-4ac7-4b44-94ab-a709ffa72c76",
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Finterior%2Finterior-3.png?alt=media&token=fc888687-9b18-4781-bcc8-59ccd0b9c2de",
        "https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUsPhotos%2Finterior%2Finterior-4.png?alt=media&token=efaf2884-5b65-462d-ac48-a0ebddfc4e12",
      ],
    },
  },
];

interface PhotoSliderProps {
  images: Image[];
}

const InlinePhotoSlider: FC<PhotoSliderProps> = ({ images }) => {
  const { sliderImages } = images[0];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const imagesArray = sliderImages?.images || [];

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
  };

  const handleBack = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + imagesArray.length) % imagesArray.length,
    );
  };

  return (
    <div className="flex lg:w-full xs:justify-center md:justify-center relative">
      <button onClick={handleNext} className="z-10 p-5">
        <ArrowLeftIcon color="black" />
      </button>
      <img
        src={imagesArray[currentPhotoIndex]}
        alt={`Photo ${currentPhotoIndex + 1}`}
        className="w-full lg:w-full xs:w-[204px] md:w-[340px]"
      />
      <div className="w-full h-full absolute m-auto">
        <ImageList images={INTERIOR_PHOTOS} className="opacity-0" />
      </div>

      <button onClick={handleBack}  className="z-10 p-5">
        <ArrowRightIcon color="black" />
      </button>
    </div>
  );
};

export default InlinePhotoSlider;
