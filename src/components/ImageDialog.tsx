import { FC } from "react";
import { ArrowLeftIcon } from "../assets/icons/arrowLeft/arrowLeft";
import { CloseIcon } from "../assets/icons/close/close";
import { ArrowRightIcon } from "../assets/icons/arrowRight/arrowRight";

interface Image {
  thumbnail: string;
  hoverImg: string;
  dialogImg: string;
}

interface ImageDialogProps {
  image: Image | null;
  onClose: () => void;
  onNext: () => void;
  onBack: () => void;
}

export const ImageDialog: FC<ImageDialogProps> = ({ image, onClose, onNext, onBack }) => {
  return (
    image && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto">
          <img src={image.dialogImg} alt="Selected" className="w-full" />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-10">
            <button onClick={onBack}>
              <ArrowLeftIcon />
            </button>
          </div>
          <div className="absolute top-0 right-0 p-10">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-10">
            <button onClick={onNext}>
              <ArrowRightIcon width={11} height={16} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};
