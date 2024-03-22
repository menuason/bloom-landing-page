import { PageSection } from "../../components/PageSection";
import { useTranslation } from "react-i18next";

export const ValuesSection = () => {
  const { t } = useTranslation();

  const CORE_VALUES = [
    {
      value: t("missionAndVisionPage.values.valueOne"),
      description: t("missionAndVisionPage.values.p1"),
    },
    {
      value: t("missionAndVisionPage.values.valueTwo"),
      description: t("missionAndVisionPage.values.p2"),
    },
    {
      value: t("missionAndVisionPage.values.valueThree"),
      description: t("missionAndVisionPage.values.p3"),
    },
    {
      value: t("missionAndVisionPage.values.valueFour"),
      description: t("missionAndVisionPage.values.p4"),
    },
  ]

  return (
    <PageSection
      isPageSmallSize
      isImageFirst={false}
      image="../../mission-and-vision-photos/value.png"
    >
      <div className="flex flex-col text-gray-950 justify-center
        lg:gap-6 lg:w-1/2
        md:gap-3
        xs:gap-3
       "
      >
        <p className="text-4xl text-bloomTitle font-medium
           lg:text-4xl lg:text-start
           md:text-2xl md:text-center md:font-semibold
           xs:text-2xl xs:text-start xs:font-semibold
         "
        >
          {t("missionAndVisionPage.values.title")}
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col font-normal text-bloomBody
            lg:text-base
            md:text-sm
            xs:text-base xs:leading-6
           "
          >

            {
              CORE_VALUES.map((item) => (
                <div key={item.value} className="flex border-b border-[#B0B4C0] outline-none py-6 first:pt-0 last:border-0">
                  <div className="px-2 text-xl">•</div>
                  <div>
                    <b>{item.value}</b>
                    {item.description}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </PageSection>
  )
}
