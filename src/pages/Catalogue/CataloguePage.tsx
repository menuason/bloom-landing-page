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
  id: string;
}

const catalogueFlowers: CatalogueFlower[] = [
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Alcantara.svg",
    "name": "Alcantara",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "ic73"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Amarone.svg",
    "name": "Amarone",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "hiwa"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Ankur.svg",
    "name": "Ankur",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "xa6a"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Bayandere.svg",
    "name": "Bayandere",
    "color": "Bicolor",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "fpgt"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Briliance.svg",
    "name": "Briliance",
    "color": "Yellow",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "q0ct"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Bubblgum.svg",
    "name": "Bubblgum",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "ainy"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Cafe del Mar.svg",
    "name": "Cafe del Mar",
    "color": "Cream",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "ubbg"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Contigo.svg",
    "name": "Contigo",
    "color": "Orange",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "829l"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Cotton Candy.svg",
    "name": "Cotton Candy",
    "color": "Bicolor",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "5a5c"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Cubanita.svg",
    "name": "Cubanita",
    "color": "Bicolor",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "zot5"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Dinamic.svg",
    "name": "Dinamic",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "euxu"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Dune.svg",
    "name": "Dune",
    "color": "Orange",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "3352"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Elan.svg",
    "name": "Elan",
    "color": "Bicolor",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "w569"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Esmara.svg",
    "name": "Esmara",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "t0cu"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Forza.svg",
    "name": "Forza",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "91fv"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Hamptons.svg",
    "name": "Hamptons",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "7ltr"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Haribo.svg",
    "name": "Haribo",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "bws4"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Highlight.svg",
    "name": "Highlight",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "120m"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Inferno.svg",
    "name": "Inferno",
    "color": "Red",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "65l2"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Intense.svg",
    "name": "Intense",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "gyja"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Mammut.svg",
    "name": "Mammut",
    "color": "Yellow",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "0y44"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Mandala.svg",
    "name": "Mandala",
    "color": "Bicolor",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "bcd3"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Mariatta.svg",
    "name": "Mariatta",
    "color": "Bicolor",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "xbbu"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Marimba.svg",
    "name": "Marimba",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "zljo"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Melrose-2.svg",
    "name": "Melrose",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "8pfv"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Melrose.svg",
    "name": "Melrose",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "gemb"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Mocktail.svg",
    "name": "Mocktail",
    "color": "Bicolor",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "qsxs"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Mondello.svg",
    "name": "Mondello",
    "color": "Orange",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "n7h7"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Montella.svg",
    "name": "Montella",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "0gox"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Mozart-2.svg",
    "name": "Mozart",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "ncpx"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Mozart.svg",
    "name": "Mozart",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "1dmb"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Olympic Gold.svg",
    "name": "Olympic Gold",
    "color": "Yellow",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "b42p"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Pantanal.svg",
    "name": "Pantanal",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "ktz3"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Pole Star.svg",
    "name": "Pole Star",
    "color": "White",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "3k4a"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Romesco.svg",
    "name": "Romesco",
    "color": "Bicolor",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "3yv4"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Rosalin.svg",
    "name": "Rosalin",
    "color": "Purple",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "o4wj"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Ruble.svg",
    "name": "Ruble",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "0348"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Silky Tears.svg",
    "name": "Silky Tears",
    "color": "Purple",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "c4qn"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Snow King.svg",
    "name": "Snow King",
    "color": "White",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "x0rz"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Soap.svg",
    "name": "Soap",
    "color": "Cream",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "g8cw"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Stilo.svg",
    "name": "Stilo",
    "color": "Yellow",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "az4t"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Toro Rosso.svg",
    "name": "Toro Rosso",
    "color": "Red",
    "brand": "By Schreurs",
    "size": "12.5-13 cm",
    "id": "2qtz"
  },
  {
    "image": "src/assets/catalogue-page-photos/catalogue-flowers/Wake Up.svg",
    "name": "Wake Up",
    "color": "Yellow",
    "brand": "By Hilverda Florist",
    "size": "12.5-13 cm",
    "id": "n7fm"
  }
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
