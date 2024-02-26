import { useState } from "react";
import { ImageDialog } from "./ImageDialog";

const images = [
  {
    thumbnail: "src/assets/packaging-page-photos/pic-1.png",
    hoverImg: "src/assets/packaging-page-photos/pic1-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-1-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-2.png",
    hoverImg: "src/assets/packaging-page-photos/pic2-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-2-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-3.png",
    hoverImg: "src/assets/packaging-page-photos/pic3-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-3-dialog.png",
  },
  {
    thumbnail: "src/assets/packaging-page-photos/pic-4.png",
    hoverImg: "src/assets/packaging-page-photos/pic4-2.png",
    dialogImg: "src/assets/packaging-page-photos/pic-4-dialog.png",
  },
];

interface Image {
  thumbnail: string;
  hoverImg: string;
  dialogImg: string;
}

export const ImageList = () => {
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
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]);
  };

  return (
    <div className="flex justify-center gap-4 cursor-pointer">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image.thumbnail}
            alt={`Image ${index}`}
            className="w-full h-auto cursor-pointer group-hover:hidden"
            onClick={() => handleImageClick(image, index)}
          />
          <img
            src={image.hoverImg}
            alt={`Image ${index}`}
            className="w-full h-auto hidden group-hover:block"
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
