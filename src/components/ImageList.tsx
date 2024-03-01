import { FC, useState } from "react";
import { ImageDialog } from "./ImageDialog";

interface Image {
  thumbnail: string;
  hoverImg: string;
  dialogImg: string;
}

interface ImageListProps {
  images: Image[];
}

export const ImageList: FC<ImageListProps> = ({ images }) => {
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
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(
      images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedImage(
      images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]
    );
  };

  return (
    <div className="flex gap-4 cursor-pointer
        lg:w-full lg:h-full
        md:w-full md:h-full
        xs:w-[350px] xs:h-[210px] xs:overflow-x-auto xs:overflow-y-hidden
      "
    >
      {images.map((image, index) => (
        <div key={index} className="relative xs:shrink-0 md:shrink">
          <img
            src={image.thumbnail}
            alt={`Image ${index}`}
            className="w-full h-full object-cover transition-opacity opacity-100 hover:opacity-0 absolute inset-0 cursor-pointer"
            onClick={() => handleImageClick(image, index)}
          />
          <img
            src={image.hoverImg}
            alt={`Image ${index}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => handleImageClick(image, index)}
          />
        </div>
      ))}
      <ImageDialog
        image={selectedImage}
        onClose={handleDialogClose}
        onBack={handleBack}
        onNext={handleNext}
      />
    </div>
  );
};
