import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import CatalogueFilter from "./CatalogueFilter";
import CatalogueFlowersList from "./CatalogueFlowersList";

export interface CatalogueFlower {
  image: string;
  name: string;
  color: string;
  brand: string;
  size: string;
}

const catalogueFlowers: CatalogueFlower[] = [
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Alcantara.png",
    name: "Alcantara",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Amarone.png",
    name: "Amarone",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Ankur.png",
    name: "Ankur",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Bayandere.png",
    name: "Bayandere",
    color: "bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Briliance.png",
    name: "Briliance",
    color: "yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Bubblgum.png",
    name: "Bubblgum",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image:
      "src/assets/catalogue-page-photos/catalogue-flowers/Cafe del Mar.png",
    name: "Cafe del Mar",
    color: "salmon",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Contigo.png",
    name: "Contigo",
    color: "orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image:
      "src/assets/catalogue-page-photos/catalogue-flowers/Cotton Candy.png",
    name: "Cotton Candy",
    color: "bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Cubanita.png",
    name: "Cubanita",
    color: "bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Dinamic.png",
    name: "Dinamic",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Dune.png",
    name: "Dune",
    color: "orange",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Elan.png",
    name: "Elan",
    color: "bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Esmara.png",
    name: "Esmara",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Forza.png",
    name: "Forza",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Hamptons.png",
    name: "Hamptons",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Haribo.png",
    name: "Haribo",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Highlight.png",
    name: "Highlight",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Inferno.png",
    name: "Inferno",
    color: "red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Intense.png",
    name: "Intense",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mammut.png",
    name: "Mammut",
    color: "yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mandala.png",
    name: "Mandala",
    color: "bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mariatta.png",
    name: "Mariatta",
    color: "bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Marimba.png",
    name: "Marimba",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Melrose-2.png",
    name: "Melrose",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Melrose.png",
    name: "Melrose",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mocktail.png",
    name: "Mocktail",
    color: "bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mondello.png",
    name: "Mondello",
    color: "orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Montella.png",
    name: "Montella",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mozart-2.png",
    name: "Mozart",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mozart.png",
    name: "Mozart",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image:
      "src/assets/catalogue-page-photos/catalogue-flowers/Olympic Gold.png",
    name: "Olympic Gold",
    color: "yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Pantanal.png",
    name: "Pantanal",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Pole Star.png",
    name: "Pole Star",
    color: "white",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Romesco.png",
    name: "Romesco",
    color: "bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Rosalin.png",
    name: "Rosalin",
    color: "purple",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Ruble.png",
    name: "Ruble",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Silky Tears.png",
    name: "Silky Tears",
    color: "purple",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Snow King.png",
    name: "Snow King",
    color: "white",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Soap.png",
    name: "Soap",
    color: "cream",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Stilo.png",
    name: "Stilo",
    color: "cataloguePage.filterType.colourType.yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Toro Rosso.png",
    name: "Toro Rosso",
    color: "red",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Wake Up.png",
    name: "Wake Up",
    color: "yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
];

const colors = Array.from(new Set(catalogueFlowers.map((item) => item.color)));
const brands = Array.from(new Set(catalogueFlowers.map((item) => item.brand)));

const CataloguePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <img
          src="src/assets/catalogue-page-photos/catalogue.png"
          alt="Bloom House"
          className="w-full lg:h-full xs:h-[102px]"
        />
        <div
          className="absolute inset-0 p-0 w-fit h-fit text-center text-white flex flex-col m-auto
            lg:gap-2 md:gap-1
          "
        >
          <h2
            className="font-medium
            lg:text-4xl lg:mt-6
            md:mt-5 md:text-xl
            xs:text-xl
          "
          >
            {t("cataloguePage.catalogue.title")}
          </h2>
          <div className="flex items-center gap-3 justify-center font-light">
            <a href="/">
              <p className="cursor-pointer hover:text-[#C0C0C0]">
                {t("cataloguePage.catalogue.nav1")}
              </p>
            </a>
            <ArrowRightIcon width={8} height={12} color="white" />
            <p className="cursor-pointer hover:text-[#C0C0C0]">
              {t("cataloguePage.catalogue.nav2")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:gap-[72px] lg:px-20 lg:mt-[72px]">
        <div className="flex flex-col gap-3">
          <p className="font-light md:text-base md:text- xs:text-sm">
            {t("cataloguePage.filterHeader.showing")} | 43{" "}
            {t("cataloguePage.filterHeader.items")}
          </p>

          <CatalogueFilter colors={colors} brands={brands} />
        </div>

        <CatalogueFlowersList flowers={catalogueFlowers}/>
      </div>
    </>
  );
};

export default CataloguePage;