import { FC, PropsWithChildren, ReactNode } from "react";

interface PageSection {
  image: string;
  isImageFirst: boolean;
  children: ReactNode;
  imageClassName?: string;
  isPageSmallSize?: boolean;
}

export const PageSection: FC<PropsWithChildren<PageSection>> = ({
  isImageFirst,
  image,
  imageClassName,
  children,
  isPageSmallSize,
}) => {
  return (
    <div className={`flex
      lg:flex-row lg:gap-[72px] lg:px-20 lg:mt-[72px] lg:mb-[156px] 
      ${isPageSmallSize ? "md:flex-col-reverse" : "md:flex-col"} md:gap-6 md:px-8 md:mt-12 md:mb-6
      ${isPageSmallSize ? "xs:flex-col-reverse" : "xs:flex-col"} xs:gap-6 xs:px-4 xs:mt-6 xs:mb-6
    `}
    >
      {isImageFirst ? (
        <>
          <div className="lg:flex lg:w-1/2 lg:justify-between">
            <img
              alt="Bloom House"
              src={image}
              className={imageClassName}
            />
          </div>
          {children}
        </>
      ) : (
        <>
          {children}
          <div className="lg:flex lg:w-1/2 lg:justify-between">
            <img
              alt="Bloom House"
              src={image}
              className={imageClassName}
            />
          </div>
        </>
      )}
    </div>
  );
};
