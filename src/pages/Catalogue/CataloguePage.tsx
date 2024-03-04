import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import CatalogueFilter from "./CatalogueFilter";

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
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Amarone.png",
    name: "Amarone",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Ankur.png",
    name: "Ankur",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Bayandere.png",
    name: "Bayandere",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Briliance.png",
    name: "Briliance",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Bubblgum.png",
    name: "Bubblgum",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image:
      "src/assets/catalogue-page-photos/catalogue-flowers/Cafe del Mar.png",
    name: "Cafe del Mar",
    color: "Salmon",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Contigo.png",
    name: "Contigo",
    color: "Orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image:
      "src/assets/catalogue-page-photos/catalogue-flowers/Cotton Candy.png",
    name: "Cotton Candy",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Cubanita.png",
    name: "Cubanita",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Dinamic.png",
    name: "Dinamic",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Dune.png",
    name: "Dune",
    color: "Orange",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Elan.png",
    name: "Elan",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Esmara.png",
    name: "Esmara",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Forza.png",
    name: "Forza",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Hamptons.png",
    name: "Hamptons",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Haribo.png",
    name: "Haribo",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Highlight.png",
    name: "Highlight",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Inferno.png",
    name: "Inferno",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Intense.png",
    name: "Intense",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mammut.png",
    name: "Mammut",
    color: "Yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mandala.png",
    name: "Mandala",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mariatta.png",
    name: "Mariatta",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Marimba.png",
    name: "Marimba",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Melrose-2.png",
    name: "Melrose",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Melrose.png",
    name: "Melrose",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mocktail.png",
    name: "Mocktail",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mondello.png",
    name: "Mondello",
    color: "Orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Montella.png",
    name: "Montella",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mozart-2.png",
    name: "Mozart",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Mozart.png",
    name: "Mozart",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image:
      "src/assets/catalogue-page-photos/catalogue-flowers/Olympic Gold.png",
    name: "Olympic Gold",
    color: "Yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Pantanal.png",
    name: "Pantanal",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Pole Star.png",
    name: "Pole Star",
    color: "White",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Romesco.png",
    name: "Romesco",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Rosalin.png",
    name: "Rosalin",
    color: "Pink",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Ruble.png",
    name: "Ruble",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Silky Tears.png",
    name: "Silky Tears",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Snow King.png",
    name: "Snow King",
    color: "White",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Soap.png",
    name: "Soap",
    color: "Cream",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Stilo.png",
    name: "Stilo",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Toro Rosso.png",
    name: "Toro Rosso",
    color: "Red",
    brand: "By Schreurs",
    size: "12.5-13 cm",
  },
  {
    image: "src/assets/catalogue-page-photos/catalogue-flowers/Wake Up.png",
    name: "Wake Up",
    color: "Yellow",
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
            <ArrowRightIcon width={8} height={12} />
            <p className="cursor-pointer hover:text-[#C0C0C0]">
              {t("cataloguePage.catalogue.nav2")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:gap-[72px] lg:px-20 lg:mt-[72px]">
        <div className="flex flex-col gap-3">
          <p className="font-light md:text-base md:text- xs:text-sm">
            Showing | 43 Items
          </p>
          <CatalogueFilter colors={colors} brands={brands} />
        </div>

        <div>here will be the List</div>
      </div>
    </>
  );
};

export default CataloguePage;
