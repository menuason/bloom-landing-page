import { useTranslation } from "react-i18next";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { FilterSection } from "../../components/FilterSection";
// import { useState } from 'react';
import { getImageUrl } from '../../firebase.ts';
import { useState } from 'react';

export interface CatalogueFlower {
  image: string;
  name: string;
  color: string;
  brand: string;
  size: string;
  id: string;
}

const CataloguePage = () => {
  const { t } = useTranslation();

  const [img, setImg] = useState("");

  getImageUrl("catalogue.png").then((url) => setImg(url))

  return (
    <>
      <PageDescriptionHeader
        // image="/src/assets/catalogue-page-photos/catalogue.png"
        image={img}
        title={t("cataloguePage.catalogue.title")}
        navOne={t("cataloguePage.catalogue.nav2")}
      />

      <FilterSection />
    </>
  );
};

export default CataloguePage;
