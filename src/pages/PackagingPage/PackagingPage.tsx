import roundArrowRight from "../../assets/icons/roundArrowRight/roundArrowRight.svg";
import { ImageList } from "./ImagesList";
import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";

const PackagingPage = () => {
  return (
    <>
      <div className="relative">
        <img src="src/assets/packaging-page-photos/453.png" alt="Bloom House" />
        <img
          src="src/assets/packaging-page-photos/opacityLayer.png"
          className="absolute top-0 left-0 right-0 bottom-0"
          alt="Bloom House"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-[886px] text-center text-white flex flex-col gap-2 m-auto justify-center">
          <h2 className="lg:text-4xl font-semibold mt-6">Packaging</h2>
          <div className="flex items-center gap-3 justify-center font-extraligh">
            <a href="/">
              <p className="cursor-pointer hover:text-[#C0C0C0]">Home</p>
            </a>
            <ArrowRightIcon />
            Packaging
          </div>
        </div>
      </div>

      <div className="flex gap-20 px-20 mt-[72px] my-[124px]">
        <img
          className="h-[420px]"
          alt="Bloom House"
          src="src/assets/packaging-page-photos/5P4A34438.png"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-950">
          <p className="text-4xl text-gray-950">About Packaging</p>
          <div className="text-base">
            <p>
              Our commitment to quality begins with the careful selection of
              each gerbera and then extends to competent and careful packaging.
            </p>
            <p>
              We emphasize the packaging process to ensure the safe delivery of
              gerberas. From picking plants in a greenhouse, loading a car to air cargo.
            </p>
            <p>
              Effective packaging not only protects plants, but also preserves
              their freshness and appearance. Well-designed packaging is
              essential to maintaining the quality of gerberas, ensuring that
              the flowers arrive in excellent condition.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-base">
            <p>
              You can see how we pack our gerberas to ensure their safe
              transportation.
            </p>
            <button className="flex text-base h-14 w-fit px-6 gap-3 items-center bg-[#1F2023] text-white">
              <img src={roundArrowRight} alt="" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9 mt-8 mb-40">
        <div className="flex flex-col items-center gap-2 text-gray-950 justify-center">
          <p className="text-4xl">Packaging Gallery </p>
          <p className="font-light text-[#323232]">
            We present to you a small part of our packaged gerberas.
          </p>
        </div>
        <ImageList />
      </div>
    </>
  );
};

export default PackagingPage;
