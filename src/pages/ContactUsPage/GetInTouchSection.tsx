import { useTranslation } from 'react-i18next';
import { PhoneFilledIcon } from '../../../public/icons/phone/phone-filled';
import { TelegramIcon } from '../../../public/icons/telegram/telegram';
import { WhatsappIcon } from '../../../public/icons/whatsapp/whatsapp';
import { MailFilledIcon } from '../../../public/icons/mail/mail-filled';
import { LocationFilledIcon } from '../../../public/icons/location/location-filled';

const CONTACT_US_ICONS = [
  {
    icon: <PhoneFilledIcon color={'black'} />,
    name: 'phone',
    link: { tel1: 'tel:+374 77103567', tel2: 'tel:+374 77103567' },
  },
  {
    icon: <TelegramIcon />,
    name: 'telegram',
    link: {
      tel1: 'https://t.me/+37477103567',
      tel2: 'https://t.me/+9107103567',
    },
  },
  {
    icon: <WhatsappIcon />,
    name: 'whatsapp',
    link: {
      tel1: 'https://wa.me/+37477103567',
      tel2: 'https://wa.me/+9107103567',
    },
  },
];

export const GetInTouchSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col gap-8 lg:mb-[137px] md:px-4 xs:self-center md:w-full"
    >
      <p className="lg:w-[200px] md:w-full xs:w-[200px] text-2xl font-medium text-bloomTitle xs:items-center">
        {t('contactUsPage.mainContent.title')}
      </p>

      <div
        className="flex w-full min-w-[320px]
        lg:flex-col lg:gap-12 lg:items-start
        md:flex-row md:gap-10 md:justify-between
        xs:flex-col xs:gap-6 xs:items-center
      "
      >
        <div
          className="flex flex-col justify-center
           lg:gap-6
           md:gap-4
           xs:gap-6
        "
        >
          <div className="font-medium text-lg w-fit border-b border-bloomBody text-bloomBody">
            <p>{t('contactUsPage.mainContent.subTitleOne')}</p>
          </div>
          {CONTACT_US_ICONS.map((item) => (
            <div
              key={item.name}
              className="flex gap-4 items-center tracking-wider text-bloomBody"
            >
              {item.icon}
              <div className="flex gap-1 items-center tracking-wider">
                <a href={item.link.tel1}>
                  <span>+374 77103567</span>
                </a>
                <span className="text-sm/[16px] font-thin leading-6">|</span>
                <a href={item.link.tel2}>
                  <span>+7 910 7103567</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:gap-6 md:gap-4 xs:gap-6">
          <div className="font-medium text-lg w-fit border-b border-bloomBody text-bloomBody">
            <p>{t('contactUsPage.mainContent.subTitleTwo')}</p>
          </div>

          <div className="flex flex-col gap-6 text-bloomBody">
            <div className="flex gap-4 items-center tracking-wider">
              <MailFilledIcon color={'black'} />
              <a href="mailto:info@bloomhouse.am">
                <span className="text-base leading-6">info@bloomhouse.am</span>
              </a>
            </div>

            <div className="flex gap-4 items-start tracking-wider w-[300px]">
              <LocationFilledIcon color={'black'} />
              <a
                href="https://maps.google.com?q=Marmarashen+village+Yerevan-Ararat+highway+136/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base leading-6">
                  {t('contactUsPage.mainContent.address')}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
