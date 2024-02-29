import { FC } from "react";

interface MailFilledIconProps{
  color: string;
}

export const MailFilledIcon:FC<MailFilledIconProps> = ({color}) => {
  return (
    <div>
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 16C1.95 16 1.47917 15.8042 1.0875 15.4125C0.695833 15.0208 0.5 14.55 0.5 14V2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0H18.5C19.05 0 19.5208 0.195833 19.9125 0.5875C20.3042 0.979167 20.5 1.45 20.5 2V14C20.5 14.55 20.3042 15.0208 19.9125 15.4125C19.5208 15.8042 19.05 16 18.5 16H2.5ZM10.5 9L18.5 4V2L10.5 7L2.5 2V4L10.5 9Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
