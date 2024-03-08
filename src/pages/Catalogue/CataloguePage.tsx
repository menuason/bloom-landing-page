import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CatalogueFilter from "./CatalogueFilter";
import CatalogueFlowersList from "./CatalogueFlowersList";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";

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
    color: "cream",
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
    color: "yellow",
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

  const [selectedFlowers, setSelectedFlowers] = useState(catalogueFlowers);

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setselectedBrands] = useState<string[]>([]);

  const filterColors = (checked: string | boolean, label: string) => {
    if (checked) {
      setSelectedColors((prevColors) => {
        return prevColors.includes(label)
          ? prevColors.filter((color) => color !== label)
          : [...prevColors, label];
      });
    } else {
      setSelectedColors(selectedColors.filter((color) => color !== label));
    }
  };

  const filterBrands = (checked: string | boolean, label: string) => {
    if (checked) {
      setselectedBrands((prevBrands) => {
        return prevBrands.includes(label)
          ? prevBrands.filter((brand) => brand !== label)
          : [...prevBrands, label];
      });
    } else {
      setselectedBrands(selectedBrands.filter((brand) => brand !== label));
    }
  };

  const handleChange = (
    checked: string | boolean,
    label: string,
    filterType: "color" | "brand"
  ) => {
    filterType === "color"
      ? filterColors(checked, label)
      : filterBrands(checked, label);
  };

  const filterFlowers = () => {
    const newCatalogueFlowers = catalogueFlowers.filter((flower) => {
      const colorMatch =
        selectedColors.length === 0 || selectedColors.includes(flower.color);
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(flower.brand);
      return colorMatch && brandMatch;
    });

    setSelectedFlowers(newCatalogueFlowers);
  };

  useEffect(() => {
    filterFlowers();
  }, [selectedColors, selectedBrands]);

  return (
    <>
      <PageDescriptionHeader
        image="src/assets/catalogue-page-photos/catalogue.png"
        title={t("cataloguePage.catalogue.title")}
        navOne={t("cataloguePage.catalogue.nav2")}
      />

      <div className="min-h-[100vh] flex lg:gap-[72px] lg:px-20 lg:mt-[72px] mb-20 lg:mb-[156px] md:mb-24 xs:mb-14">
        <div className="flex flex-col gap-3">
          <p className="font-light md:text-base md:text- xs:text-sm">
            {t("cataloguePage.filterHeader.showing")} |{" "}
            {catalogueFlowers.length + " "}
            {t("cataloguePage.filterHeader.items")}
          </p>

          <CatalogueFilter
            colors={colors}
            brands={brands}
            onChange={(checked, label, filterType) =>
              handleChange(checked, label, filterType)
            }
          />
        </div>

        <CatalogueFlowersList flowers={selectedFlowers} />
      </div>
    </>
  );
};

export default CataloguePage;
