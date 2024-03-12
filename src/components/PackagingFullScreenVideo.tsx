import { FC, PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseIcon } from "../assets/icons/close/close";
import ReactPlayer from "react-player";

export const PackagingFullScreenVideo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog.Root>
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
            url="/src/assets/videos/Bloom House Packaging.mp4"
            width="100%"
            height="100%"
            controls
            playing
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  loop: true,
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