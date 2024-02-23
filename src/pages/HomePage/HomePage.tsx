import { AboutBloomHouse, Assortment, WhyChooseUs } from ".";

const HomePage = () => {
  const videoContainerHeight = "calc(100vh - 80px)";

  return (
    <div className="mb-[156px]">
      <div style={{ height: videoContainerHeight }} className="relative">
        Your browser does not support the video tag.
      </div>
      <Assortment />
      <AboutBloomHouse />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
