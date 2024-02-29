import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import OurSystemPageTranslation from "./system";
import PackagingPageTranslation from "./packaging";
import FooterTranslation from "./footer";
import HeaderTranslation from "./header";

const resources = {
  en: {
    translation: {
      header: HeaderTranslation.en,
      homePage: {
        videoNotSupported: "Your browser does not support the video tag.",
        assortment: {
          assortmentSectionTitle: "Our Unique Assortment",
          assortmentSectionDescription:
            "Discover gerberas that stand out for their uniqueness. Each petal ismeticulously groomed, and every flower narrates a story of color andelegance.",
        },
        flowers: {
          mondello: {
            name: "Mondello",
            author: "By Schreurs",
          },
          snowKing: {
            name: "Snow King",
            author: "By HiverdaFlorist",
          },
          mariatta: {
            name: "Mariatta",
            author: "By Schreurs",
          },
          briliance: {
            name: "Briliance",
            author: "By HiverdaFlorist",
          },
        },
        aboutBloomHouse: {
          aboutBloomHouseTitle: "About Bloom House",
          aboutBloomHouseDescriptionBulletOne:
            "Bloom House is a gerbera greenhouse farm established in 2022 withthe unique mission of cultivating the best gerberas, sourcing theirseedlings directly from Holland.",
          aboutBloomHouseDescriptionBulletTwo:
            "We pay great attention to the careful sorting and packaging of eachgerbera.",
          aboutBloomHouseDescriptionBulletThree:
            "Each flower undergoes careful selection and careful packaging, ensuring that it reaches its destination in perfect condition.",
          aboutBloomHouseDescriptionBulletFour:
            "In the greenhouse industry, we aim to set an example by setting new standards that reiterate our commitment to creating a harmonious balance of quality and beauty.",
          aboutBloomHouseButton: "Read More",
        },
        whyChooseUs: {
          whyChooseUsTitle: "Why choose us?",
          whyChooseDescription:
            "Our greenhouses are meticulously crafted to provide the optimal environment for year-round gerbera cultivation, ensuring a constant bloom of vibrant colors and exquisite blossoms.",
          reasons: {
            icons: {
              seedling: "Best Seedlings",
              cultivation: "Precision Cultivation",
              temperature: "Temperature Control",
            },
            numbers: {
              oneTitle: "Best Seedlings",
              oneDescription:
                "Our commitment to using the best Dutch seedlings ensures the quality, luster, and longevity of our gerberas.",
              twoTitle: "Precision Cultivation",
              twoDescription:
                "Every stage of gerbera cultivation is meticulously managed to ensure optimal growth and excellent flowering.",
              threeTitle: "Temperature Control",
              threeDescription:
                "The perfect temperature for gerberas is ensured through our advanced control systems, ensuring they thrive in a comfortable and conducive environment.",
            },
          },
        },
      },
      systemPage: OurSystemPageTranslation.en,
      packagingPage: PackagingPageTranslation.en,
      footer: FooterTranslation.en,
    },
  },
  hy: {
    translation: {
      header: HeaderTranslation.hy,
      homePage: {
        videoNotSupported: "Ձեր զննարկիչը չի աջակցում տեսանյութի պիտակը:",
        assortment: {
          assortmentSectionTitle: "Մեր Յուրահատուկ Տեսականին",
          assortmentSectionDescription:
            "Բացահայտեք հերբերաները, որոնք աչքի են ընկնում իրենց յուրահատկությամբ: Յուրաքանչյուր ծաղկաթերթը մանրակրկիտ խնամված է, և յուրաքանչյուր ծաղիկ պատմում է գույնի ու էլեգանտության մասին:",
        },
        flowers: {
          mondello: {
            name: "Mondello",
            author: "By Schreurs",
          },
          snowKing: {
            name: "snowKing",
            author: "By HiverdaFlorist",
          },
          mariatta: {
            name: "Mariatta",
            author: "By Schreurs",
          },
          briliance: {
            name: "Briliance",
            author: "By HiverdaFlorist",
          },
        },
        aboutBloomHouse: {
          aboutBloomHouseTitle: "Bloom House-ի Մասին",
          aboutBloomHouseDescriptionBulletOne:
            "Bloom House-ը հերբերաների ջերմոցային տնտեսություն է, որը հիմնադրվել է 2022 թվականին՝ լավագույն հերբերաները մշակելու եզակի առաքելությամբ՝ սածիլները ձեռք բերելով անմիջապես Հոլանդիայից:",
          aboutBloomHouseDescriptionBulletTwo:
            "Մենք մեծ ուշադրություն ենք դարձնում յուրաքանչյուր հերբերայի մանրակրկիտ տեսակավորմանն ու փաթեթավորմանը։",
          aboutBloomHouseDescriptionBulletThree:
            "Յուրաքանչյուր ծաղիկ ենթարկվում է մանրակրկիտ ընտրության և մանրակրկիտ փաթեթավորման՝ ապահովելով, որ այն հասնի իր նպատակակետին կատարյալ վիճակում:",
          aboutBloomHouseDescriptionBulletFour:
            "Ջերմոցային արդյունաբերության մեջ մենք նպատակ ունենք օրինակ ծառայել՝ սահմանելով նոր չափանիշներ, որոնք վերահաստատում են որակի և գեղեցկության ներդաշնակ հավասարակշռություն ստեղծելու մեր հանձնառությունը:",
          aboutBloomHouseButton: "Կարդալ ավելին",
        },
        whyChooseUs: {
          whyChooseUsTitle: "Ինչու՞ Ընտրել Մեզ",
          whyChooseDescription:
            "Մեր ջերմոցները մանրակրկիտ մշակված են՝ ապահովելու օպտիմալ միջավայր հերբերայի ամբողջ տարվա մշակման համար՝ ապահովելով վառ գույների և նրբագեղ ծաղիկների մշտական ծաղկում:",
          reasons: {
            icons: {
              seedling: "Լավագույն Սածիլները",
              cultivation: "Ճշգրիտ Մշակում",
              temperature: "Ջերմաստիճանի Վերահսկում",
            },
            numbers: {
              oneTitle: "Լավագույն Սածիլները",
              oneDescription:
                "Հոլանդական լավագույն սածիլները օգտագործելու մեր հանձնառությունն ապահովում է մեր հերբերաների որակը, փայլը և երկարակեցությունը:",
              twoTitle: "Ճշգրիտ Մշակում",
              twoDescription:
                "Գերբերայի աճեցման յուրաքանչյուր փուլ մանրակրկիտ կերպով իրականացվում է օպտիմալ աճ և գերազանց ծաղկում ապահովելու համար:",
              threeTitle: "Ջերմաստիճանի Վերահսկում",
              threeDescription:
                "Գերբերաների համար կատարյալ ջերմաստիճանը ապահովվում է առաջադեմ կառավարման համակարգերի միջոցով՝ ապահովելով նրանց բարգավաճումը հարմարավետ միջավայրում:",
            },
          },
        },
      },
      systemPage: OurSystemPageTranslation.hy,
      packagingPage: PackagingPageTranslation.hy,
      footer: FooterTranslation.hy,
    },
  },
  ru: {
    translation: {
      header: HeaderTranslation.ru,
      homePage: {
        videoNotSupported: "Ваш браузер не поддерживает видео тег.",
        assortment: {
          assortmentSectionTitle: "Наш уникальный ассортимент",
          assortmentSectionDescription:
            "Откройте для себя герберы, которые выделяются своей уникальностью. Каждый лепесток тщательно ухожен, и каждый цветок рассказывает историю цвета и элегантности.",
        },
        flowers: {
          mondello: {
            name: "Mondello",
            author: "By Schreurs",
          },
          snowKing: {
            name: "snowKing",
            author: "By HiverdaFlorist",
          },
          mariatta: {
            name: "Mariatta",
            author: "By Schreurs",
          },
          briliance: {
            name: "Briliance",
            author: "By HiverdaFlorist",
          },
        },
        aboutBloomHouse: {
          aboutBloomHouseTitle: "О Bloom House",
          aboutBloomHouseDescriptionBulletOne:
            "Bloom House — это тепличная ферма по выращиванию гербер, основанная в 2022 году с уникальной миссией по выращиванию лучших гербер, закупая саженцы непосредственно из Голландии.",
          aboutBloomHouseDescriptionBulletTwo:
            "Мы уделяем большое внимание тщательной сортировке и упаковке каждой герберы.",
          aboutBloomHouseDescriptionBulletThree:
            "Каждый цветок проходит тщательный отбор и тщательную упаковку, благодаря чему он доставляется по назначению в идеальном состоянии.",
          aboutBloomHouseDescriptionBulletFour:
            "В тепличной отрасли мы стремимся подать пример, устанавливая новые стандарты, которые подтверждают нашу приверженность созданию гармоничного баланса качества и красоты.",
          aboutBloomHouseButton: "Читать Далее",
        },
        whyChooseUs: {
          whyChooseUsTitle: "Почему выбрали нас?",
          whyChooseDescription:
            "Наши теплицы тщательно спроектированы, чтобы обеспечить оптимальные условия для круглогодичного выращивания гербер, гарантируя постоянное цветение ярких цветов и изысканных цветов.",
          reasons: {
            icons: {
              seedling: "Лучшие Саженцы",
              cultivation: "Точная Обработка",
              temperature: "Контроль Температуры",
            },
            numbers: {
              oneTitle: "Лучшие Саженцы",
              oneDescription:
                "Наше стремление использовать лучшие голландские саженцы обеспечивает качество, блеск и долговечность наших гербер.",
              twoTitle: "Точная Обработка",
              twoDescription:
                "Каждый этап выращивания герберы тщательно контролируется, чтобы обеспечить оптимальный рост и превосходное цветение.",
              threeTitle: "Контроль Температуры",
              threeDescription:
                "Идеальная температура для гербер обеспечивается с помощью наших передовых систем управления, гарантирующих, что они процветают в комфортной и благоприятной среде.",
            },
          },
        },
      },
      systemPage: OurSystemPageTranslation.ru,
      packagingPage: PackagingPageTranslation.ru,
      footer: FooterTranslation.ru,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
