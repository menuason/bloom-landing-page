import { FC } from "react";
import { Image } from "./ImageList";
import { ArrowLeftIcon } from "../../public/icons/arrowLeft/arrowLeft";
import { CloseIcon } from "../../public/icons/close/close";
import { ArrowRightIcon } from "../../public/icons/arrowRight/arrowRight";

interface ImageSliderProps {
  image: Image | null;
  onClose?: () => void;
  onNext: () => void;
  onBack: () => void;
}

export const ImageSlider: FC<ImageSliderProps> = ({
  image,
  onClose,
  onNext,
  onBack,
}) => {
  return (
    image && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center cursor-auto z-20">
        <div className="flex h-full max-w-3xl w-full mx-auto">
          <img
            src={image.sliderImg || image?.sliderImages?.images?.[0]}
            alt="Selected"
            className="w-full cursor-auto self-center"
          />
          <div className="absolute my-auto top-1/2 left-0 transform -translate-y-1/2 lg:p-10 md:p-4 xs:p-2 ">
            <button autoFocus onClick={onBack} onKeyDown={onBack}>
              <ArrowLeftIcon color="white" width={11} height={16} />
            </button>
          </div>
          <div className="absolute top-0 right-0 lg:p-10 md:p-4 xs:p-2">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="absolute my-auto top-1/2 right-0 transform -translate-y-1/2 lg:p-10 md:p-4 xs:p-2">
            <button autoFocus onClick={onNext} onKeyDown={onNext}>
              <ArrowRightIcon color="white" width={11} height={16} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};
