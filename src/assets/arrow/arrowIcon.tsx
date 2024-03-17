import { FC, useEffect, useState } from "react";

interface ArrowIconProps {
  width?: number;
  height?: number;
  color: string;
  className?: string;
}
export const ArrowIcon: FC<ArrowIconProps> = ({
  width,
  height,
  color,
  className,
}) => {
  const [iconSize, setIconSize] = useState({ width: 14, height: 24 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 800) {
        setIconSize({ width: 8, height: 12 });
      } else {
        setIconSize({ width: 12, height: 24 });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={className}>
      <svg
        width={width ? width : iconSize.width}
        height={height ? height : iconSize.height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 18.5L12.6 17.05L16.15 13.5H4V11.5H16.15L12.6 7.95L14 6.5L20 12.5L14 18.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
