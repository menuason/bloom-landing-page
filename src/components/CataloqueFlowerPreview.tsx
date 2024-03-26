import * as Dialog from "@radix-ui/react-dialog";
import { FC, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import { CatalogueFlower } from "../pages/Catalogue/CataloguePage";
import { CloseIcon } from "../../public/icons/close/close";
import { ArrowLeftIcon } from "../../public/icons/arrowLeft/arrowLeft";
import { ArrowRightIcon } from "../../public/icons/arrowRight/arrowRight";

interface DialogDemoProps {
  id: string;
  flowers: CatalogueFlower[];
}

const FlowerPreview: FC<PropsWithChildren<DialogDemoProps>> = ({
  children,
  id,
  flowers,
}) => {
  const previewContentSize = "calc(100% - 50px)";
  const { t } = useTranslation();

  const [selectedFlowerInd, setSelectedFlowerInd] = useState(0);
  const [selectedFlower, setSelectedFlower] = useState<CatalogueFlower>();

  const handleSelectFlower = () => {
    const a = flowers.findIndex((item) => item.id === id);
    setSelectedFlowerInd(a);
    const selectedFlower = flowers[a];
    setSelectedFlower(selectedFlower);
  };

  const handleNext = () => {
    const nextInd =
      selectedFlowerInd === flowers.length - 1 ? 0 : selectedFlowerInd + 1;
    setSelectedFlowerInd(nextInd);
    setSelectedFlower(flowers[nextInd]);
  };

  const handleBack = () => {
    const prevInd = (selectedFlowerInd - 1 + flowers.length) % flowers.length;
    setSelectedFlowerInd(prevInd);
    setSelectedFlower(flowers[prevInd]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      handleBack();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="flex flex-col items-center"
        onClick={handleSelectFlower}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/[0.3] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white
            lg:h-[554px] lg:w-[1024px] lg:p-9
            md:h-[802px] md:w-[656px] md:p-9
            xs:w-[328px] xs:p-2 xs:mt-6
          "
        >
          <Dialog.Close asChild>
            <div className="flex justify-end -mr-4">
              <button  className="lg:px-4 lg:h-12 lg:rounded lg:hover:bg-black/[.04] xs:p-3 xs:mx-2">
                <CloseIcon color="black" />
              </button>
            </div>
          </Dialog.Close>

          <div
            className={`flex justify-center lg:gap-8 md:gap-4 items-center h-[${previewContentSize}]`}
          >
            <button
              autoFocus
              onClick={handleBack}
              onKeyDown={handleKeyDown}
              className="lg:px-2 lg:h-12 lg:rounded lg:hover:bg-black/[.06]"
            >
              <ArrowLeftIcon
                color="black"
                width={11}
                height={16}
                className="m-2"
              />
            </button>

            <div
              className="flex items-center
              lg:flex-row lg:gap-10
              md:flex-col md:gap-8
              xs:flex-col xs:gap-4 xs:p-2
             "
            >
              <div
                className="flex
                 lg:w-[385px] lg:h-[385px]
                 md:w-[386px] md:h-[386px]
                 xs:w-[236px] xs:h-[236px]
               "
              >
                <img
                  src={selectedFlower?.image}
                  alt={`Flower ${selectedFlower?.name}`}
                  className="w-full"
                />
              </div>

              <div className="flex flex-col py-3 gap-1 lg:w-[385px] md:w-[480px] xs:w-[250px]">
                <div className="lg:text-base md:text-base xs:text-sm flex gap-2 py-3 px-4 bg-[#F6F6F7]">
                  <span className="font-normal min-w-16 text-bloomBody">
                    {t("cataloguePage.previewItems.name")}:
                  </span>
                  <span className="font-medium text-bloomTitle">{selectedFlower?.name}</span>
                </div>
                <div className="lg:text-base md:text-base xs:text-sm flex gap-2 py-3 px-4">
                  <span className="font-normal min-w-16 text-bloomBody">
                    {t("cataloguePage.filterType.colour")}:
                  </span>
                  <span className="font-medium text-bloomTitle">
                    {t(`cataloguePage.filterType.colourType.${selectedFlower?.color}`)}
                  </span>
                </div>
                <div className="lg:text-base md:text-base xs:text-sm flex gap-2 py-3 px-4 bg-[#F6F6F7]">
                  <span className="font-normal min-w-16 text-bloomBody">
                    {t("cataloguePage.previewItems.brand")}:
                  </span>
                  <span className="font-medium text-bloomTitle">{selectedFlower?.brand}</span>
                </div>
                <div className="lg:text-base md:text-base xs:text-sm flex gap-2 py-3 px-4">
                  <span className="font-normal min-w-16 text-bloomBody">
                    {t("cataloguePage.previewItems.size")}:
                  </span>
                  <span className="font-medium text-bloomTitle">{selectedFlower?.size}</span>
                </div>
              </div>
            </div>
            <button
              autoFocus
              onClick={handleNext}
              onKeyDown={handleKeyDown}
              className="lg:px-2 lg:h-12 lg:rounded lg:hover:bg-black/[.06]"
            >
              <ArrowRightIcon
                color="black"
                width={11}
                height={16}
                className="m-2"
              />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FlowerPreview;
