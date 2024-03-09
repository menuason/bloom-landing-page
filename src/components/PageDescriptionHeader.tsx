import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../assets/icons/arrowRight/arrowRight";

interface PageDescriptionHeaderProps {
  image: string;
  title: string;
  navOne: string;
  navTwo?: string;
  navTwoLink?: string;
}

export const PageDescriptionHeader: FC<PageDescriptionHeaderProps> = ({ image, title, navOne, navTwo, navTwoLink }) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <img
        src={image}
        alt="Bloom House"
        className="w-full lg:h-full xs:h-[102px]"
      />
      <div className="absolute inset-0 p-0 m-0 w-fit h-fit text-center text-white flex flex-col m-auto
         lg:gap-2 md:gap-1
       "
      >
        <h2 className="font-medium
          lg:text-4xl lg:mt-6 md:mt-5 md:text-xl xs:text-xl
         "
        >
          {title}
        </h2>
        <div className="flex items-center gap-3 justify-center font-light">
          <a href="/">
            <p className="cursor-pointer hover:text-[#C0C0C0]">{t("systemPage.system.nav1")}</p>
          </a>
          <ArrowRightIcon color="white" width={8} height={12} />
          {
            navTwoLink ? (
              <>
                <a href={`${navTwoLink}`}>
                  <p className="cursor-pointer hover:text-[#C0C0C0]">{navOne}</p>
                </a>
                <ArrowRightIcon color="white" width={8} height={12} />
                {navTwo}
              </>
            ) : (
              <span>{navOne}</span>
            )}
        </div>
      </div>
    </div>
  );
};
