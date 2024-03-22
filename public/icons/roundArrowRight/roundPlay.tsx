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
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <circle cx="36" cy="36" r="36" fill="white" fillOpacity="0.35" />
        <g filter="url(#filter0_d_2632_6738)">
          <path
            d="M30 46.8L46.8 36L30 25.2V46.8ZM36 60C32.68 60 29.56 59.37 26.64 58.11C23.72 56.85 21.18 55.14 19.02 52.98C16.86 50.82 15.15 48.28 13.89 45.36C12.63 42.44 12 39.32 12 36C12 32.68 12.63 29.56 13.89 26.64C15.15 23.72 16.86 21.18 19.02 19.02C21.18 16.86 23.72 15.15 26.64 13.89C29.56 12.63 32.68 12 36 12C39.32 12 42.44 12.63 45.36 13.89C48.28 15.15 50.82 16.86 52.98 19.02C55.14 21.18 56.85 23.72 58.11 26.64C59.37 29.56 60 32.68 60 36C60 39.32 59.37 42.44 58.11 45.36C56.85 48.28 55.14 50.82 52.98 52.98C50.82 55.14 48.28 56.85 45.36 58.11C42.44 59.37 39.32 60 36 60Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2632_6738"
            x="3.3"
            y="3.3"
            width="65.4"
            height="65.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4.35" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.634701 0 0 0 0 0.581242 0 0 0 0 0.479187 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2632_6738"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2632_6738"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
