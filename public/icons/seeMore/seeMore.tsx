import { FC, useState } from "react";

interface SeeMoreIconProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const SeeMoreIcon: FC<SeeMoreIconProps> = ({ className, width, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSize = isHovered ? 24 : (width || 20);

  return (
    <div className={className} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666664 19.3337V11.3337H3.33333V16.667H8.66666V19.3337H0.666664ZM16.6667 8.66699V3.33366H11.3333V0.666992H19.3333V8.66699H16.6667Z" fill="white"/>
      </svg>
    </div>
  );
};


