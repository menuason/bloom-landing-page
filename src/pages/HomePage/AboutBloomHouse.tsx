import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from '../../assets/icons/arrowRight/arrowRight';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { getImageUrl } from '../../firebase.ts';

export const AboutBloomHouse = () => {
  const { t, i18n } = useTranslation();
  const [img, setImg] = useState('');

  getImageUrl('home-page/5P4A3419.png').then((url) => setImg(url));

  return (
    <>
      <div
        className="flex
          lg:flex-row lg:gap-[72px] lg:px-20 lg:mt-[72px] lg:mb-[124px]
          md:flex-col md:gap-6 md:px-8 md:mt-12 md:mb-6
          xs:flex-col xs:gap-6 xs:px-4 xs:mt-6 xs:mb-6
        "
      >
        <div
          className="flex flex-col text-gray-950 justify-center
          lg:gap-6 lg:text-start
          md:gap-4 md:text-center
          xs:gap-4 xs:text-start
         "
        >
          <p
            className="text-gray-950 items-center font-medium w-full
            lg:text-3xl
            md:text-2xl
            xs:text-2xl
           "
          >
            {t('homePage.aboutBloomHouse.aboutBloomHouseTitle')}
          </p>
          <div className="flex flex-col gap-8">
            <div
              className="font-normal
            lg:text-base lg:text-start
            md:text-sm md:text-center
            xs:text-sm xs:text-start
           "
            >
              <div className="lg:flex md:hidden xs:hidden">
                {t('homePage.aboutBloomHouse.aboutBloomHouseDescription')}
              </div>

              <p className="lg:hidden md:block xs:block">
                {t('homePage.aboutBloomHouse.aboutBloomHouseDescriptionOne')}
              </p>
            </div>
            <Button
              link={`/about-us/${i18n.language}`}
              endIcon={<ArrowRightIcon color="black" width={12} height={12} />}
              type="outlined"
              className="lg:flex lg:mx-0 md:mx-auto md:h-[46px]md:hidden xs:hidden"
            >
              {t('homePage.aboutBloomHouse.aboutBloomHouseButton')}
            </Button>
          </div>
        </div>

        <img
          alt="Bloom House"
          // src="/src/assets/home-page-photos/5P4A3419.png"
          src={img}
        />

        <div
          className="flex flex-col
          lg:hidden md:flex
          md:gap-6 md:text-center
          xs:flex xs:gap-4 xs:text-start"
        >
          <p
            className="text-sm
           lg:hidden
           md:block md:text-center
           xs:block xs:text-start"
          >
            {t('homePage.aboutBloomHouse.aboutBloomHouseDescriptionTwo')}
          </p>
          <Button
            link={`/about-us/${i18n.language}`}
            endIcon={<ArrowRightIcon color="black" width={12} height={12} />}
            type="outlined"
            className="lg:mx-auto lg:hidden md:mx-auto md:flex md:self-center xs:flex xs:self-start"
          >
            {t('homePage.aboutBloomHouse.aboutBloomHouseButton')}
          </Button>
        </div>
      </div>
    </>
  );
};
