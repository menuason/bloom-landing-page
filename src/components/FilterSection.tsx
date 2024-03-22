import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CatalogueFilter from "../pages/Catalogue/CatalogueFilter";
import CatalogueFlowersList from "../pages/Catalogue/CatalogueFlowersList";
import { CatalogueFlower } from "../pages/Catalogue/CataloguePage";
import Pagination from "../pages/Catalogue/Pagination";
import { FilterIcon } from "../../public/icons/filter/filterIcon";

export const catalogueFlowers: CatalogueFlower[] = [
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Esmara.png",
    name: "Esmara",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "t0cu",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Stilo.png",
    name: "Stilo",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "az4t",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Cotton Candy.png",
    name: "Cotton Candy",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "5a5c",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Dune.png",
    name: "Dune",
    color: "Orange",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "3352",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Mandala.png",
    name: "Mandala",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "bcd3",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Haribo.png",
    name: "Haribo",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "bws4",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Pole Star.png",
    name: "Pole Star",
    color: "White",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "3k4a",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Ruble.png",
    name: "Ruble",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "0348",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Mammut.png",
    name: "Mammut",
    color: "Yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "0y44",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Elan.png",
    name: "Elan",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "w569",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/CafeDelMar.png",
    name: "Cafe del Mar",
    color: "Cream",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ubbg",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Forza.png",
    name: "Forza",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "91fv",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Melrose.png",
    name: "Melrose",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "gemb",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Inferno.png",
    name: "Inferno",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "65l2",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Olympic Gold.png",
    name: "Olympic Gold",
    color: "Yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "b42p",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Hamptons.png",
    name: "Hamptons",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "7ltr",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Mocktail.png",
    name: "Mocktail",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "qsxs",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Mondello.png",
    name: "Mondello",
    color: "Orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "n7h7",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/SilkyTears.png",
    name: "Silky Tears",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "c4qn",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Dinamic.png",
    name: "Dinamic",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "euxu",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Melrose-2.png",
    name: "Melrose",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "8pfv",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Contigo.png",
    name: "Contigo",
    color: "Orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "829l",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Briliance.png",
    name: "Briliance",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "q0ct",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Ankur.png",
    name: "Ankur",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "xa6a",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Amarone.png",
    name: "Amarone",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "hiwa",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Bayandere.png",
    name: "Bayandere",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "fpgt",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Bubblgum.png",
    name: "Bubblgum",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ainy",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Intense.png",
    name: "Intense",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "gyja",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/SnowKing.png",
    name: "Snow King",
    color: "White",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "x0rz",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/WakeUp.png",
    name: "Wake Up",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "n7fm",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Mozart-2.png",
    name: "Mozart",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ncpx",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/ToroRosso.png",
    name: "Toro Rosso",
    color: "Red",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "2qtz",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Rosalin.png",
    name: "Rosalin",
    color: "Pink",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "o4wj",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Marimba.png",
    name: "Marimba",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "zljo",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Mozart.png",
    name: "Mozart",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "1dmb",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Highlight.png",
    name: "Highlight",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "120m",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Romesco.png",
    name: "Romesco",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "3yv4",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Cubanita.png",
    name: "Cubanita",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "zot5",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Pantanal.png",
    name: "Pantanal",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ktz3",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Alcantara.png",
    name: "Alcantara",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ic73",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Soap.png",
    name: "Soap",
    color: "Cream",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "g8cw",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Montella.png",
    name: "Montella",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "0gox",
  },
  {
    image: "../../catalogue-page-photos/catalogue-flowers/Mariatta.png",
    name: "Mariatta",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "xbbu",
  },
];

export interface Colors {
  [language: string]: {
    names: string[];
    displayNames: string[];
  };
}

const colors: Colors = {
  en: {
    names: ["White", "Cream", "Yellow", "Orange", "Red", "Pink", "Bicolor"],
    displayNames: [
      "White",
      "Cream",
      "Yellow",
      "Orange",
      "Red",
      "Pink",
      "Bicolor",
    ],
  },
  ru: {
    names: ["White", "Cream", "Yellow", "Orange", "Red", "Pink", "Bicolor"],
    displayNames: [
      "Белый",
      "Kремовый",
      "Желтый",
      "Апельсиновый",
      "Красный",
      "Розовый",
      "Двухцветный",
    ],
  },
  hy: {
    names: ["White", "Cream", "Yellow", "Orange", "Red", "Pink", "Bicolor"],
    displayNames: [
      "Սպիտակ",
      "Կրեմ",
      "Դեղին",
      "Նարնջագույն",
      "Կարմիր",
      "Վարդագույն",
      "Երկգույն",
    ],
  },
};

const brands = Array.from(new Set(catalogueFlowers.map((item) => item.brand)));

export const FilterSection = () => {
  const { t } = useTranslation();
  const [width, setWidth] = useState<number>(window.innerWidth);

  const [selectedFlowers, setSelectedFlowers] = useState(catalogueFlowers);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [showFilter, setShowFilter] = useState(false);

  const handleToggle = () => {
    setShowFilter(!showFilter);

    if (!showFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

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
      setSelectedBrands((prevBrands) => {
        return prevBrands.includes(label)
          ? prevBrands.filter((brand) => brand !== label)
          : [...prevBrands, label];
      });
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== label));
    }
  };

  const handleChange = (
    checked: string | boolean,
    label: string,
    filterType: "color" | "brand",
  ) => {
    filterType === "color"
      ? filterColors(checked, label)
      : filterBrands(checked, label);

    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setCurrentPage(page);
  };

  const filterFlowers = useCallback(() => {
    const newCatalogueFlowers = catalogueFlowers.filter((flower) => {
      const colorMatch =
        selectedColors.length === 0 || selectedColors.includes(flower.color);
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(flower.brand);
      return colorMatch && brandMatch;
    });

    setSelectedFlowers(newCatalogueFlowers);
  }, [selectedColors, selectedBrands]);

  useEffect(() => {
    filterFlowers();
  }, [filterFlowers, setCurrentPage]);

  const isMobile = width < 1000;
  useEffect(() => {
    filterFlowers();
  }, [filterFlowers, selectedColors, selectedBrands, setCurrentPage]);

  const updateScreenSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div
      className="
        flex mb-20 justify-start
        lg:gap-[72px] lg:px-20 lg:mt-10 lg:flex lg:mb-[156px] lg:flex-row
        md:mb-24 md:px-8 md:mt-8 md:flex-col
        xs:mb-14 xs:flex-col xs:px-4 xs:mt-8
      "
    >
      <button
        className="lg:hidden md:flex xs:flex flex border-none hover:outline-none hover:border-none"
        onClick={handleToggle}
      >
        <div className="flex gap-3 items-center">
          <FilterIcon />
          <span>Filters</span>
        </div>
      </button>

      <div
        className={`fixed flex items-center justify-start overflow-hidden
        ${
          showFilter &&
          "bg-black bg-opacity-50 z-10 inset-0 w-full h-full animate-fade-right animate-once animate-duration-300 overflow-hidden"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`overflow-hidden flex flex-col gap-3 absolute top-0 left-0 h-full bg-white
             ${showFilter ? "w-[337px] py-8 px-4 overflow-hidden" : "w-0 p-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-3">
            <p className="font-normal md:text-base md:text-base xs:text-base">
              <span className="text-bloomBody">{t("cataloguePage.filterHeader.showing")}</span> |
              <span className="text-bloomBody">{catalogueFlowers.length + " "}</span>
              <span className="text-bloomBody">{t("cataloguePage.filterHeader.items")}</span>
            </p>

            <CatalogueFilter
              colors={colors}
              brands={brands}
              onChange={(checked, label, filterType) =>
                handleChange(checked, label, filterType)
              }
            />
          </div>
        </div>
      </div>

      <div
        className="
          lg:flex
          md:hidden
          xs:hidden
          flex flex-col gap-2 max-w-70
          sticky
          top-[120px]
          max-h-[100vh]
        "
      >
        <p className="font-normal md:text-base xs:text-base">
          <span className="text-bloomBody">{t("cataloguePage.filterHeader.showing")}</span> |
          <span className="text-bloomBody">{catalogueFlowers.length + " "}</span>
          <span className="text-bloomBody">{t("cataloguePage.filterHeader.items")}</span>
        </p>

        <CatalogueFilter
          colors={colors}
          brands={brands}
          onChange={(checked, label, filterType) =>
            handleChange(checked, label, filterType)
          }
        />
      </div>

      <CatalogueFlowersList
        flowers={selectedFlowers}
        currentPage={currentPage}
        itemsPerPage={isMobile ? 12 : selectedFlowers.length}
        pagination={
          isMobile ? (
            <Pagination
              itemsPerPage={12}
              totalItems={selectedFlowers.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          ) : undefined
        }
      />
    </div>
  );
};
