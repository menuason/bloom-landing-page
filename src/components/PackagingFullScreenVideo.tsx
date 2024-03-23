import { FC, PropsWithChildren, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseIcon } from '../../public/icons/close/close';

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
    body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    const body = document.body;
    body.style.overflow = 'auto';
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
              <div>
                <CloseIcon color="white" />
              </div>
            </Dialog.Close>
          </div>

          <div className="bg-black bg-opacity-75 absolute inset-0"></div>
          <video
            src={'https://firebasestorage.googleapis.com/v0/b/bloom-test-ec336.appspot.com/o/Bloom%20House%20Video.mp4?alt=media&token=0b7feb1f-d683-4606-9f15-09f1615fe651'}
            autoPlay={true}
            loop
            muted
            controls
            style={{ position: 'absolute' }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
