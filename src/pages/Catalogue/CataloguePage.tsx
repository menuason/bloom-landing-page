import { useTranslation } from "react-i18next";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { FilterSection } from "../../components/FilterSection";

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

  return (
    <>
      <PageDescriptionHeader
        image="../../catalogue-page-photos/catalogue.png"
        title={t("cataloguePage.catalogue.title")}
        navOne={t("cataloguePage.catalogue.nav2")}
      />

      <FilterSection />
    </>
  );
};

export default CataloguePage;
