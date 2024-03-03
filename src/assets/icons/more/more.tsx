import { FC } from "react";

interface MoreIconProps {
  onClick?: () => void;
  className?: string;
}

export const MoreIcon: FC<MoreIconProps> = ({ onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666687 19.3337V11.3337H3.33335V16.667H8.66669V19.3337H0.666687ZM16.6667 8.66699V3.33366H11.3334V0.666992H19.3334V8.66699H16.6667Z" fill="white"/>
      </svg>
    </div>
  );
};
