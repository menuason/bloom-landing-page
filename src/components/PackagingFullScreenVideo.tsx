import { FC, PropsWithChildren, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ReactPlayer from "react-player";
import { CloseIcon } from "../../public/icons/close/close";

export const PackagingFullScreenVideo: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;

    return () => {
      body.style.overflow = originalOverflow;
    };
  }, []);

  const handleOpen = () => {
    const body = document.body;
    body.style.overflow = "hidden";
  };

  const handleClose = () => {
    const body = document.body;
    body.style.overflow = "auto";
  };

  return (
    <Dialog.Root onOpenChange={(open) => (open ? handleOpen() : handleClose())}>
      <Dialog.Trigger>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="fixed inset-0 flex items-center justify-center w-full h-full z-10">
          <div className="absolute z-20 lg:top-8 lg:right-16 md:top-16 md:right-8 xs:top-16 xs:right-6">
            <Dialog.Close asChild>
              <button>
                <CloseIcon color="white" />
              </button>
            </Dialog.Close>
          </div>

          <div className="bg-black bg-opacity-75 absolute inset-0"></div>

          <ReactPlayer
            url="https://firebasestorage.googleapis.com/v0/b/bloom-test-ec336.appspot.com/o/packaging-page%2FBloom%20House%20Packaging.mp4?alt=media&token=67d9613d-cbe7-4311-b184-4450e4106837"
            width="100%"
            height="100%"
            controls
            playing
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  loop: true,
                  muted: true,
                },
              },
            }}
            style={{ position: "absolute", top: 0, left: 0 }}
          />

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
