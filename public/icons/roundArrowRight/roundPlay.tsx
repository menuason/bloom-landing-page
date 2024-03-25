import { FC } from "react";

interface RoundPlayIconProps {
  className?: string;
  color: string;
  onClick?: () => void;
}

export const RoundPlayIcon: FC<RoundPlayIconProps> = ({
  className,
  onClick,
}) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2632_6758)">
          <path
            opacity="0.35"
            d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z"
            fill="white"
          />
          <path
            d="M26.6665 52.3333V19.6666L52.3332 36L26.6665 52.3333Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2632_6758">
            <rect width="72" height="72" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
