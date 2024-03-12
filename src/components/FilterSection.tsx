import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterIcon } from "../assets/icons/filter/filterIcon";
import CatalogueFilter from "../pages/Catalogue/CatalogueFilter";
import CatalogueFlowersList from "../pages/Catalogue/CatalogueFlowersList";
import { CatalogueFlower } from "../pages/Catalogue/CataloguePage";
import Pagination from "../pages/Catalogue/Pagination";

const catalogueFlowers: CatalogueFlower[] = [
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Alcantara.svg",
    name: "Alcantara",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ic73",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Amarone.svg",
    name: "Amarone",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "hiwa",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Ankur.svg",
    name: "Ankur",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "xa6a",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Bayandere.svg",
    name: "Bayandere",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "fpgt",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Briliance.svg",
    name: "Briliance",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "q0ct",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Bubblgum.svg",
    name: "Bubblgum",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ainy",
  },
  {
    image:
      "/src/assets/catalogue-page-photos/catalogue-flowers/Cafe del Mar.svg",
    name: "Cafe del Mar",
    color: "Cream",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ubbg",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Contigo.svg",
    name: "Contigo",
    color: "Orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "829l",
  },
  {
    image:
      "/src/assets/catalogue-page-photos/catalogue-flowers/Cotton Candy.svg",
    name: "Cotton Candy",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "5a5c",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Cubanita.svg",
    name: "Cubanita",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "zot5",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Dinamic.svg",
    name: "Dinamic",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "euxu",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Dune.svg",
    name: "Dune",
    color: "Orange",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "3352",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Elan.svg",
    name: "Elan",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "w569",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Esmara.svg",
    name: "Esmara",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "t0cu",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Forza.svg",
    name: "Forza",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "91fv",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Hamptons.svg",
    name: "Hamptons",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "7ltr",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Haribo.svg",
    name: "Haribo",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "bws4",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Highlight.svg",
    name: "Highlight",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "120m",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Inferno.svg",
    name: "Inferno",
    color: "Red",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "65l2",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Intense.svg",
    name: "Intense",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "gyja",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Mammut.svg",
    name: "Mammut",
    color: "Yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "0y44",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Mandala.svg",
    name: "Mandala",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "bcd3",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Mariatta.svg",
    name: "Mariatta",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "xbbu",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Marimba.svg",
    name: "Marimba",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "zljo",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Melrose-2.svg",
    name: "Melrose",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "8pfv",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Melrose.svg",
    name: "Melrose",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "gemb",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Mocktail.svg",
    name: "Mocktail",
    color: "Bicolor",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "qsxs",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Mondello.svg",
    name: "Mondello",
    color: "Orange",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "n7h7",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Montella.svg",
    name: "Montella",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "0gox",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Mozart-2.svg",
    name: "Mozart",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ncpx",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Mozart.svg",
    name: "Mozart",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "1dmb",
  },
  {
    image:
      "/src/assets/catalogue-page-photos/catalogue-flowers/Olympic Gold.svg",
    name: "Olympic Gold",
    color: "Yellow",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "b42p",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Pantanal.svg",
    name: "Pantanal",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "ktz3",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Pole Star.svg",
    name: "Pole Star",
    color: "White",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "3k4a",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Romesco.svg",
    name: "Romesco",
    color: "Bicolor",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "3yv4",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Rosalin.svg",
    name: "Rosalin",
    color: "Pink",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "o4wj",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Ruble.svg",
    name: "Ruble",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "0348",
  },
  {
    image:
      "/src/assets/catalogue-page-photos/catalogue-flowers/Silky Tears.svg",
    name: "Silky Tears",
    color: "Pink",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "c4qn",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Snow King.svg",
    name: "Snow King",
    color: "White",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "x0rz",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Soap.svg",
    name: "Soap",
    color: "Cream",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "g8cw",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Stilo.svg",
    name: "Stilo",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "az4t",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Toro Rosso.svg",
    name: "Toro Rosso",
    color: "Red",
    brand: "By Schreurs",
    size: "12.5-13 cm",
    id: "2qtz",
  },
  {
    image: "/src/assets/catalogue-page-photos/catalogue-flowers/Wake Up.svg",
    name: "Wake Up",
    color: "Yellow",
    brand: "By Hilverda Florist",
    size: "12.5-13 cm",
    id: "n7fm",
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
    displayNames: ["White", "Cream", "Yellow", "Orange", "Red", "Pink", "Bicolor"],
  },
  ru: {
    names: ["White", "Cream", "Yellow", "Orange", "Red", "Pink", "Bicolor"],
    displayNames: ["Белый", "Kремовый", "Желтый", "Апельсиновый", "Красный", "Розовый", "Двухцветный"],
  },
  hy: {
    names: ["White", "Cream", "Yellow", "Orange", "Red", "Pink", "Bicolor"],
    displayNames: ["Սպիտակ", "Կրեմ", "Դեղին", "Նարնջագույն", "Կարմիր", "Վարդագույն", "Երկգույն"],
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
      flex mb-20
      lg:gap-[72px] lg:px-20 lg:mt-[72px] lg:flex lg:mb-[156px] lg:flex-row
      md:mb-24 md:px-8 md:flex-col
      xs:mb-14 xs:flex-col xs:px-8 xs:py-6">
      <button
        className="lg:hidden md:flex xs:flex flex border-none hover:outline-none hover:border-none "
        onClick={handleToggle}
      >
        <div className="flex gap-3 items-center">
          <FilterIcon />
          <span>Filters</span>
        </div>
      </button>

      <div
        className={`fixed flex items-center justify-center overflow-hidden 
        ${showFilter && "bg-black bg-opacity-50 z-10 inset-0 w-full h-full"}`}
        onClick={handleToggle}
      >
        <div
          className={
            `overflow-hidden flex flex-col gap-3 absolute top-0 left-0 h-full  bg-white transform transition-transform ease-in-out duration-400
             ${showFilter ? "w-[337px] py-8 px-4" : "w-0 p-0" }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-3 ">
            <p className="font-normal md:text-base md:text- xs:text-sm">
              {t("cataloguePage.filterHeader.showing")} |
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
        </div>
      </div>


      <div
        className="
            lg:flex
            md:hidden
            xs:hidden
            flex flex-col gap-2 max-w-70"
      >
        <p className="font-normal md:text-base xs:text-sm">
          {t("cataloguePage.filterHeader.showing")} |
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
