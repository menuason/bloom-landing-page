import { FC, useState } from "react";
import { Image, ImageList } from "./ImageList";
import { ArrowLeftIcon } from "../../public/icons/arrowLeft/arrowLeft";
import { ArrowRightIcon } from "../../public/icons/arrowRight/arrowRight";

const INTERIOR_PHOTOS = [
  {
    thumbnail: "../../about-us-page-photos/interior/interior.png",
    sliderImages: {
      images: [
        "../../about-us-page-photos/interior/interior-1.png",
        "../../about-us-page-photos/interior/interior-2.png",
        "../../about-us-page-photos/interior/interior-3.png",
        "../../about-us-page-photos/interior/interior-4.png",

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
      <div className="flex items-center">
        <button
          onClick={handleNext}
          className="lg:mx-2 lg:px-4 lg:h-12 lg:rounded lg:hover:bg-black/[.06] md:px-5 xs:px-5"
        >
          <ArrowLeftIcon color="black" />
        </button>
      </div>

      <div className="relative max-w-[600px]">
        <img
          src={imagesArray[currentPhotoIndex]}
          alt={`Photo ${currentPhotoIndex + 1}`}
          className="w-full lg:w-full xs:w-[204px] md:w-[340px]"
        />

        <div className="w-full h-full absolute m-auto top-0">
          <ImageList
            isForInlineSlider
            images={INTERIOR_PHOTOS}
            className="opacity-0"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={handleBack}
          className="lg:mx-2 lg:px-4 lg:h-12 lg:rounded lg:hover:bg-black/[.06] md:px-5 xs:px-5"
        >
          <ArrowRightIcon color="black" />
        </button>
      </div>
    </div>
  );
};

export default InlinePhotoSlider;
