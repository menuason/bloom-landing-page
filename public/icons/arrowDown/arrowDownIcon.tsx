import { FC, useState } from "react";

interface ArrowDownIconProps {
  className?: string;
}

export const ArrowDownIcon: FC<ArrowDownIconProps> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8.37461L0 2.37461L1.4 0.974609L6 5.57461L10.6 0.974609L12 2.37461L6 8.37461Z"
              fill={isHovered ? "#7E7E7E" : "#1F2023"}
        />
      </svg>
    </div>
  );
};

