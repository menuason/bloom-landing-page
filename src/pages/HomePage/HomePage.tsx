import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AboutBloomHouse, Assortment, WhyChooseUs } from '.';
import { RoundedArrowDownIcon } from '../../assets/icons/roundedArrowDown/roundedArrowDown';
import { PlayIcon } from '../../assets/icons/roundArrowRight/play';
import { getImageUrl } from '../../firebase.ts';

const HomePage = () => {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const [thumbnail, setThumbnail] = useState('');

  getImageUrl('home-page/thumbnail.png').then((url) => setThumbnail(url));

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const toggleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex flex-col gap-4 lg:mb-[156px] md:mb-24 xs:mb-14 pt-20">
      <div className="min-h-[212px]">
        {isVideoPlaying ? (
          <div className="lg:h-full md:h-full xs:h-auto">
            <video
              className="w-full md:h-screen object-cover"
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              onClick={toggleVideoPlay}
            >
              <source
                src="https://firebasestorage.googleapis.com/v0/b/bloom-test-ec336.appspot.com/o/home-page%2FBloom%20House.mp4?alt=media&token=972a318b-397f-4e87-ab65-bc55521a08a8" type="video/mp4"
              />
              {t('homePage.videoNotSupported')}
            </video>
          </div>
        ) : (
          <>
            <div className="relative w-full lg:block md:block xs:hidden">
              <video
                className="w-full md:h-screen object-cover"
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/bloom-test-ec336.appspot.com/o/home-page%2FBloom%20House.mp4?alt=media&token=972a318b-397f-4e87-ab65-bc55521a08a8"
                  type="video/mp4" />
                {t('homePage.videoNotSupported')}
              </video>

              <div
                className="lg:block md:block xs:hidden absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer">
                <RoundedArrowDownIcon onClick={scrollDown} />
              </div>
            </div>

            <div className="relative lg:hidden md:hidden xs:block">
              <img
                alt="Bloom House"
                src={thumbnail}
                className="w-full h-full"
              />

              <PlayIcon
                width={60}
                height={60}
                color="white"
                className="flex items-center justify-center bg-black/[.2] w-full h-full lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={toggleVideoPlay}
              />
            </div>
          </>
        )}
      </div>

      <Assortment />
      <AboutBloomHouse />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
