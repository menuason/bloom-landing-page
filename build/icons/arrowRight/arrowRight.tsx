import { FC, useEffect, useState } from "react";

interface ArrowRightIconProps {
  width?: number;
  height?: number;
  color: string;
  className?: string;
}
export const ArrowRightIcon:FC<ArrowRightIconProps> = ({ width, height, color, className }) => {
  const [iconSize, setIconSize] = useState({ width: 14, height: 24 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 800) {
        setIconSize({ width: 8, height: 12 });
      }  else {
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
      <svg width={width ? width : iconSize.width} height={height ? height :  iconSize.height} viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.79984 8L0.666504 1.86667L2.53317 0L10.5332 8L2.53317 16L0.666504 14.1333L6.79984 8Z" fill={color} />
      </svg>
    </div>
  );
};
