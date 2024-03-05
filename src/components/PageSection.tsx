import { ReactNode, FC, PropsWithChildren } from "react";
interface PageSection {
  image: string;
  isImageFirst: boolean;
  children: ReactNode;
  imageClassName?: string;
  isMissionPageSmallSize?: boolean
}

export const PageSection: FC<PropsWithChildren<PageSection>> = ({
  isImageFirst,
  image,
  imageClassName,
  children,
  isMissionPageSmallSize,
}) => {
  return (
    <div className={`flex
      lg:flex-row lg:gap-[72px] lg:px-20 lg:mt-[72px] lg:mb-[124px]
      ${isMissionPageSmallSize ? 'md:flex-col-reverse' : 'md:flex-col'} md:gap-6 md:px-8 md:mt-12 md:mb-6
      ${isMissionPageSmallSize ? 'xs:flex-col-reverse' : 'xs:flex-col'} xs:gap-6 xs:px-4 xs:mt-6 xs:mb-6
    `}
    >
      {isImageFirst ? (
        <>
          <img
            alt="Bloom House"
            src={image}
            className={imageClassName}
          />
          {children}
        </>
      ) : (
        <>
          {children}
          <img
            alt="Bloom House"
            src={image}
            className={imageClassName}
          />
        </>
      )}
    </div>
  );
};
