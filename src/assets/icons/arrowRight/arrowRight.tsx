import { FC } from "react";

interface ArrowRightIconProps {
  width: number;
  height: number;
  color: string;
}
export const ArrowRightIcon:FC<ArrowRightIconProps> = ({ width, height, color }) => {
  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.79984 8L0.666504 1.86667L2.53317 0L10.5332 8L2.53317 16L0.666504 14.1333L6.79984 8Z" fill={color} />
      </svg>
    </div>
  );
};
