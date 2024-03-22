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
  onKeydown: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export const ImageSlider: FC<ImageSliderProps> = ({
  image,
  onClose,
  onNext,
  onBack,
  onKeydown,
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
          <div
            onClick={onBack}
            className="flex items-center absolute my-auto top-1/2 left-0 transform -translate-y-1/2 rounded hover:bg-white/[.07] cursor-pointer
              lg:m-6 lg:p-4
              md:p-4
              xs:p-2
             "
          >
            <button autoFocus onKeyDown={onKeydown}>
              <ArrowLeftIcon color="white" width={11} height={16} />
            </button>
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 right-0 cursor-pointer rounded hover:bg-white/[.09]
              lg:m-6 lg:py-3 px-4
              md:p-4
              xs:p-2
            "
          >
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div
            onClick={onNext}
            className="flex items-center absolute my-auto top-1/2 right-0 transform -translate-y-1/2 rounded hover:bg-white/[.07] cursor-pointer
              lg:m-6 lg:p-4
              md:p-4
              xs:p-2
            "
          >
            <button autoFocus onKeyDown={onKeydown}>
              <ArrowRightIcon color="white" width={11} height={16} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};
