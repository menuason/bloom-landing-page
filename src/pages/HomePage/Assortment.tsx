const flowersArr = [
  {
    src: "src/assets/flowers/5P4A3263.png",
    name: "Mondello",
    author: "By Schreurs",
  },
  {
    src: "src/assets/flowers/5P4A3265.png",
    name: "Snow King",
    author: "By HiverdaFlorist",
  },
  {
    src: "src/assets/flowers/5P4A3260.png",
    name: "Mariatta",
    author: "By Schreurs",
  },
  {
    key: 4,
    src: "src/assets/flowers/5P4A3269.png",
    name: "Briliance",
    author: "By HiverdaFlorist",
  },
];

export const Assortment = () => {
  return (
    <div className="flex flex-col items-center gap-1 m-[72px]">
      <h1 className=" font-normal text-5xl text-gray-950">
        Our Unique Assortment
      </h1>

      <h6 className="w-8/12 text-center font-light text-base text-gray-950">
        Discover gerberas that stand out for their uniqueness. Each petal is
        meticulously groomed, and every flower narrates a story of color and
        elegance.
      </h6>
      <div className="flex flex-row gap-4 mt-9 ">
        {flowersArr.map((item, index) => {
          return (
            <div key={index} className="relative bg-[#23242759] h-full">
              <img src={item.src} />
              <div className="absolute bottom-0 left-0 px-4 bg-[#23242759] text-white flex items-start justify-center flex-col h-1/5 opacity-1 w-full">
                <h4 className="text-lg font-medium">{item.name}</h4>
                <p className="font-extralight text-xs">{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
