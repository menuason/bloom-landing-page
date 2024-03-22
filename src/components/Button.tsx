import { FC, PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  link?: string;
  children?: ReactNode;
  className?: string;
  onButtonClick?: () => void;
  type: "outlined" | "filled";
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  link,
  startIcon,
  endIcon,
  children,
  onButtonClick,
  className,
  type = "outlined",
}) => {
  const getButtonClasses = (): string => {
    let buttonClass =
      "flex gap-3 items-center px-4 font-medium text-bloomTitle" +
      " lg:h-[46px] lg:py-3 lg:text-base lg:self-start " +
      " md:h-[46px] md:py-3 md:text-sm md:self-center " +
      " xs:text-base xs:py-2 xs:self-start ";

    if (type === "outlined") {
      buttonClass += "border border-bloomBlack text-bloomBlack ";
    } else if (type === "filled") {
      buttonClass += "bg-[#232427] text-center text-white";
    }
    return `${buttonClass} ${className || ""}`;
  };

  return (
    <>
      {link ? (
        <Link to={link} className="contents">
          <button className={getButtonClasses()} onClick={onButtonClick}>
            {startIcon}
            {children}
            {endIcon}
          </button>
        </Link>
      ) : (
        <button className={getButtonClasses()} onClick={onButtonClick}>
          {startIcon}
          {children}
          {endIcon}
        </button>
      )}
    </>
  );
};
