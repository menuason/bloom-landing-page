import { FC, useState } from "react";
import { ArrowLeftIcon } from "../assets/icons/arrowLeft/arrowLeft";
import { ArrowRightIcon } from "../assets/icons/arrowRight/arrowRight";
import { Image, ImageList } from "./ImageList";

const INTERIOR_PHOTOS = [
  {
    thumbnail: "src/assets/about-us-page-photos/interior/interior-1.png",
    sliderImages: {
      images: [
        "src/assets/about-us-page-photos/interior/interior-1.png",
        "src/assets/about-us-page-photos/interior/interior-2.png",
        "src/assets/about-us-page-photos/interior/interior-3.png",
        "src/assets/about-us-page-photos/interior/interior-4.png",
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
    <div className="flex gap-4 lg:w-full xs:justify-center md:justify-center relative">
      <button onClick={handleNext}>
        <ArrowLeftIcon color="black" width={8} height={12} />
      </button>
      <img
        src={imagesArray[currentPhotoIndex]}
        alt={`Photo ${currentPhotoIndex + 1}`}
        className="w-full lg:w-full xs:w-[204px] md:w-[340px]"
      />
      <div className="hidden lg:block w-full h-full absolute inset-0 m-auto w-[90%] left-6 right-6">
        <ImageList images={INTERIOR_PHOTOS} className="opacity-0" />
      </div>

      <button onClick={handleBack}>
        <ArrowRightIcon color="black" width={8} height={12} />
      </button>
    </div>
  );
};

export default InlinePhotoSlider;