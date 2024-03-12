import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageSlider } from "./ImageSlider";
import { SeeMoreIcon } from "../assets/icons/seeMore/seeMore";

interface SliderImage {
  title?: string;
  images: string[];
}

export interface Image {
  thumbnail?: string;
  hoverImg?: string;
  sliderImg?: string;
  sliderImages?: SliderImage;
}

interface ImageListProps {
  images: Image[];
  className?: string;
}

export const ImageList: FC<ImageListProps> = ({ images, className }) => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleDialogClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleNext = () => {
    if (selectedImage && selectedImage.sliderImages) {
      setCurrentIndex((prevIndex) =>
        prevIndex === selectedImage.sliderImages!.images.length - 1
          ? 0
          : prevIndex + 1,
      );
      setSelectedImage({
        ...selectedImage,
        sliderImg: selectedImage.sliderImages.images[currentIndex === selectedImage.sliderImages.images.length - 1 ? 0
          : currentIndex + 1],
      });
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
      setSelectedImage(
        images[currentIndex === images.length - 1 ? 0 : currentIndex + 1],
      );
    }
  };

  const handleBack = () => {
    if (selectedImage && selectedImage.sliderImages) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0
          ? selectedImage.sliderImages!.images.length - 1
          : prevIndex - 1,
      );
      setSelectedImage({
        ...selectedImage,
        sliderImg: selectedImage.sliderImages.images[currentIndex === 0 ? selectedImage.sliderImages.images.length - 1
          : currentIndex - 1],
      });
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      );
      setSelectedImage(
        images[currentIndex === 0 ? images.length - 1 : currentIndex - 1],
      );
    }
  };

  return (
    <>
      <div style={{ width: "100%" }} className="flex gap-4 cursor-pointer
        lg:w-full lg:h-full
        md:w-full md:h-full
        xs:w-[350px] xs:h-[210px] xs:overflow-x-auto xs:overflow-y-hidden
      "
      >
        {images.map((image, index) =>
          image.hoverImg ? (
            (
              <div key={index} className="relative xs:shrink-0 md:shrink">
                <img
                  src={image.thumbnail}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover transition-opacity opacity-100 hover:opacity-0 absolute inset-0 cursor-pointer z-60"
                  onClick={() => handleImageClick(image, index)}
                />
                <img
                  src={image?.hoverImg}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleImageClick(image, index)}
                />
              </div>
            )) : (
            <div key={index} className="relative xs:shrink-0 md:shrink">
              <img
                src={image.thumbnail}
                alt={`Image ${index}`}
                className={`${className} w-full h-full object-cover cursor-pointer`}
                onClick={!image.sliderImages?.title ? () => handleImageClick(image, index) : undefined}
              />
              {
                image.sliderImages?.title && (
                  <div className="w-full bg-[#23242759] cursor-auto text-white flex items-start justify-center flex-col absolute bottom-0 left-0 opacity-1
                   lg:h-1/5 lg:px-4
                   md:h-1/4 md:px-2
                   xs:h-1/4 xs:px-2
                  "
                  >
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <h4 className="lg:text-lg md:text-sm xs:text-xs">
                          {image.sliderImages?.title}
                        </h4>
                        <p className="font-light text-xs">
                          {t("aboutUsPage.gallerySection.more")}
                        </p>
                      </div>
                      <SeeMoreIcon
                        height={16}
                        width={16}
                        className="cursor-pointer"
                        onClick={() => handleImageClick(image, index)}
                      />
                    </div>
                  </div>
                )
              }
            </div>
          ),
        )}
        <ImageSlider
          image={selectedImage}
          onClose={handleDialogClose}
          onBack={handleBack}
          onNext={handleNext}
        />
      </div>
    </>
  );
};
