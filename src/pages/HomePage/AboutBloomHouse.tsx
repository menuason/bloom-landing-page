import arrowRight from "../../assets/icons/arrowRight/arrowRight.svg";

export const AboutBloomHouse = () => {
  return (
    <div className="flex flex-row gap-16 px-20">
      <div className="flex flex-col justify-center gap-6">
        <h1 className=" font-normal text-5xl text-gray-950">
          About Bloom House
        </h1>
        <div>
          <p className="font-light text-base text-gray-950">
            Bloom House is a gerbera greenhouse farm established in 2022 with
            the unique mission of cultivating the best gerberas, sourcing their
            seedlings directly from Holland.
          </p>
          <p className="font-light text-base text-gray-950">
            We pay great attention to the careful sorting and packaging of each
            gerbera.
          </p>
          <p className="font-light text-base text-gray-950">
            Each flower undergoes careful selection and careful packaging,
            ensuring that it reaches its destination in perfect condition.
          </p>
          <p className="font-light text-base text-gray-950">
            In the greenhouse industry, we aim to set an example by setting new
            standards that reiterate our commitment to creating a harmonious
            balance of quality and beauty.
          </p>
        </div>
        <button className="h-14 w-40 mt-8 px-4 rounded-none bg-black text-white flex items-center justify-center gap-3">
          Read More
          <img src={arrowRight} />
        </button>
      </div>
      <img src="src/assets/home-page-photos/5P4A3419.png" />
    </div>
  );
};
