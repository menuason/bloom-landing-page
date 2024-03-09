import { FC } from "react";

interface ArrowLeftIconProps {
  width: number;
  height: number;
  color: string;
  className?: string;
}

export const ArrowLeftIcon: FC<ArrowLeftIconProps> = ({ width, height, color, className }) => {
  return (
    <div className={className}>
      <svg width={width} height={height} viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.6665 16L0.666504 8L8.6665 0L10.5332 1.86667L4.39984 8L10.5332 14.1333L8.6665 16Z" fill={color} />
      </svg>
    </div>
  );
};
