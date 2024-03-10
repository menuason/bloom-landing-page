import * as Dialog from "@radix-ui/react-dialog";
import { CatalogueFlower } from "../pages/Catalogue/CataloguePage";
import { FC, PropsWithChildren, useState } from "react";
import { CloseIcon } from "../assets/icons/close/close";
import { ArrowLeftIcon } from "../assets/icons/arrowLeft/arrowLeft";
import { ArrowRightIcon } from "../assets/icons/arrowRight/arrowRight";
import { useTranslation } from "react-i18next";

interface DialogDemoProps {
  id: string;
  flowers: CatalogueFlower[];
}

const FlowerPreview: FC<PropsWithChildren<DialogDemoProps>> = ({ children, id, flowers }) => {
  const previewContentSize = "calc(100% - 50px)";
  const { t } = useTranslation();

  const [selectedFlowerInd, setSelectedFlowerInd] = useState(flowers.findIndex((item) => item.id === id));

  const selectedFlower = flowers[selectedFlowerInd];
  const { name, color, brand, size } = selectedFlower;

  const handleNext = () => {
    const nextInd = selectedFlowerInd === flowers.length - 1 ? 0 : selectedFlowerInd + 1;
    setSelectedFlowerInd(nextInd);
  };

  const handleBack = () => {
    const prevInd = (selectedFlowerInd - 1 + flowers.length) % flowers.length;
    setSelectedFlowerInd(prevInd);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="bg-black/[0.3] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] bg-white
            lg:h-[554px] lg:w-[1024px] lg:p-9
            md:h-[802px] md:w-[656px] md:p-9
            xs:p-6 xs:mb-[52px]
          "
        >
          <Dialog.Close asChild>
            <div className="flex justify-end">
              <button>
                <CloseIcon color="black" className="m-2" />
              </button>
            </div>
          </Dialog.Close>

          <div className="flex justify-between items-center" style={{ height: previewContentSize }}>
            <button
              onClick={handleBack}
            >
              <ArrowLeftIcon color="black" width={11} height={16} className="m-2" />
            </button>

            <div className="flex items-center
              lg:flex-row lg:gap-10
              md:flex-col md:gap-8
              xs:flex-col xs:gap-[52px] xs:p-2
             "
            >
              <div className="flex
                 lg:w-[385px] lg:h-[385px]
                 md:w-[386px] md:h-[386px]
               "
              >
                <img
                  src={selectedFlower.image}
                  alt={`Flower ${selectedFlower.name}`}
                  className="w-full"
                />
              </div>

              <div className="flex flex-col py-3 gap-1 lg:w-[385px] md:w-[480px] xs:w-[250px]">
                <div className="text-base flex gap-2 py-3 px-4 bg-[#F6F6F7]">
                  <span className="font-normal min-w-16">{t("cataloguePage.previewItems.name")}:</span>
                  <span className="font-medium">{name}</span>
                </div>
                <div className="text-base flex gap-2 py-3 px-4">
                  <span className="font-normal min-w-16">{t("cataloguePage.filterType.colour")}:</span>
                  <span className="font-medium">{t(`cataloguePage.filterType.colourType.${color}`)}</span>
                </div>
                <div className="text-base flex gap-2 py-3 px-4 bg-[#F6F6F7]">
                  <span className="font-normal min-w-16">{t("cataloguePage.previewItems.brand")}:</span>
                  <span className="font-medium">{brand}</span>
                </div>
                <div className="text-base flex gap-2 py-3 px-4">
                  <span className="font-normal min-w-16">{t("cataloguePage.previewItems.size")}:</span>
                  <span className="font-medium">{size}</span>
                </div>
              </div>
            </div>
            <button onClick={handleNext}>
              <ArrowRightIcon color="black" width={11} height={16} className="m-2" />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FlowerPreview;
