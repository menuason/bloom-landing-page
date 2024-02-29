import { MailFilledIcon } from "../../assets/icons/mail/mail-filled";
import { LocationFilledIcon } from "../../assets/icons/location/location-filled";
import { PhoneFilledIcon } from "../../assets/icons/phone/phone-filled";
import { TelegramIcon } from "../../assets/icons/telegram/telegram";
import { WhatsappIcon } from "../../assets/icons/whatsapp/whatsapp";

const CONTACT_US_ICONS = [
  {
    icon: <PhoneFilledIcon color={"black"} />,
    name: "phone",
    link: { tel1: "tel:+374 77103567", tel2: "tel:+374 77103567" },
  },
  {
    icon: <TelegramIcon />,
    name: "telegram",
    link: {
      tel1: "https://t.me/+37477103567",
      tel2: "https://t.me/+9107103567",
    },
  },
  {
    icon: <WhatsappIcon />,
    name: "whatsapp",
    link: {
      tel1: "https://wa.me/+37477103567",
      tel2: "https://wa.me/+9107103567",
    },
  },
];

export const GetInTouchSection = () => {
  return (
    <div
      className="flex flex-col gap-8
      lg:pl-[104px] lg:mb-[137px]
    "
    >
      <p className="w-[186px] text-2xl font-light">
        Get in Touch with Bloom House
      </p>

      <div
        className="flex
        lg:flex-col lg:gap-11
        md:flex-row md:gap-20
        xs:flex-col xs:gap-6
      "
      >
        <div
          className="flex flex-col justify-center
           lg:gap-8
           md:gap-4
           xs:gap-6
        "
        >
          <div className="font-medium text-lg w-fit border-b border-black">
            <p>Call us</p>
          </div>
          {CONTACT_US_ICONS.map((item) => (
            <div className="flex gap-4 items-center tracking-wider">
              {item.icon}
              <a href={item.link.tel1}>
                <span>+374 77103567</span>
              </a>
              <span className="text-sm/[16px] font-thin leading-6">|</span>
              <a href={item.link.tel2}>
                <span>+910 7103567</span>
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <div className="font-medium text-lg w-fit border-b border-black">
            <p>Information</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center tracking-wider">
              <MailFilledIcon color={"black"} />
              <a href="mailto:bloomhouse.arm@gmail.com">
                <span className="text-base leading-6">
                  bloomhouse.arm@gmail.com
                </span>
              </a>
            </div>

            <div className="flex gap-4 items-start tracking-wider w-[300px]">
              <LocationFilledIcon color={"black"} />
              <a
                href="https://maps.google.com?q=Marmarashen+village+Yerevan-Ararat+highway+136/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base leading-6">
                  Marmarashen village Yerevan-Ararat highway 136/1
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
