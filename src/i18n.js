import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      
      // =====homepage======
      "homePage": {
        "pageName": "homepage",
        // ---banner---
        "banner": {
          "exclusivity": "Exclusivity, now within reach",
          "luxuryDoors": "Luxury Doors",
          "story": "Doors that tell your story",
          "uniqueDesigns": "Unique Designs",
          "trends": "Doors designed to transcend trends",
          "timeless": "Timeless Quality",

        },
        "WhyPartner": {
          "partnerHeading": {
            "title": "Why Choose Zebrano Studio?",
            "description": "We believe luxury shouldn’t be out of reach. Our doors are crafted with the same precision and materials found in the world’s finest interiors — yet designed to be accessible for every home. From first sketch to final installation, we make it possible to bring high-end design into your everyday life, without compromise."
          },
          "cards1": {
            "title": "Bespoke Design",
            "description": "Tailored shapes, finishes, and materials to match your vision and space."
          },
          "cards2": {
            "title": "Accessible Luxury",
            "description":"Premium craftsmanship and rare materials — made attainable for every project size."
          },
          "cards3": {
            "title": "Easy Configuration",
            "description": "Tailored shapes, finishes, and materials to match your vision and space."
          },
          "cards4": {
            "title": "Precision Craftsmanship",
            "description": "Doors built to last a lifetime, with meticulous attention to detail."
          },
          "cards5": {
            "title": "Endless inspiration",
            "description": "Endless design possibilities to make your space truly unforgettable."
          },
        },
        "ContructorComponent2": {
          "title":"“Passion for Wood. Precision in Design.”",
          "btnTex":"See Collection",
          "data": [
            {
              title: "Tailor-made",
              image: "/images/img1.png",
              heading: "Exclusive wooden doors",
              description: "Zebrano creates tailor-made pivot, sliding, and classic doors crafted from premium wood and finished with exclusive detailing. ",
            },
            {
              title: "Custom details",
              image: "/images/img2.png",
              heading: "Materials With a Story",
              description: "From rare woods to hand-selected stone and artisan glass, each material is chosen for its character, history, and natural beauty",
            },
            {
              title: "Limitless Design",
              image: "/images/img3.png",
              heading: "Design Without Limits",
              description: "We go beyond standard dimensions and finishes, shaping doors that integrate seamlessly into your architecture and reflect your personal style.",
            },
            {
              title: "Conscious craft",
              image: "/images/img4.png",
              heading: "Craftsmanship & Durability",
              description: "We build them so well, you might start showing them off more than your new kitchen.",
            },
          ],
        },
        "Stalen": {},
        "InspirationInsight": ""

      },
      // =====productPage===

      "ProductsPage": {
        "pageName": "Products",
        "Pivot": {
          "pageName": "Pivot Doors"
        },
      }

    }
  },
  nl: {
    translation: {
      // &&&&&&& NL &&&&&&&
      // =====homepage======
      "homePage": {
        "pageName": "homepage",
        // ---banner---
        "banner": {
          "exclusivity": "Exclusiviteit, nu binnen handbereik",
          "luxuryDoors": "Luxe Deuren",
          "story": "Deuren die jouw verhaal vertellen",
          "uniqueDesigns": "Unieke Ontwerpen",
          "trends": "Deuren ontworpen om trends te overstijgen",
          "timeless": "Tijdloze Kwaliteit",

        },
        "WhyPartner": {
          "partnerHeading": {
            "title": "Waarom kiezen voor Zebrano Studio?",
            "description": "Wij geloven dat luxe niet onbereikbaar hoeft te zijn. Onze deuren worden gemaakt met dezelfde precisie en materialen als de mooiste interieurs ter wereld — maar zijn ontworpen om toegankelijk te zijn voor ieder huis. Van de eerste schets tot de laatste installatie maken wij high-end design mogelijk in jouw dagelijks leven, zonder concessies en voor iedereen."
          },
          "cards1": {
            "title": "Maatwerk Ontwerp",
            "description": "Vormen, afwerkingen en materialen volledig afgestemd op jouw visie en ruimte."
          },
          "cards2": {
            "title": "Toegankelijke Luxe",
            "description":"Hoogwaardig vakmanschap en zeldzame materialen — bereikbaar gemaakt voor elk project."
          },
          "cards3": {
            "title": "Eenvoudige Configuratie",
            "description": "Een eenvoudig proces met zorgvuldig geselecteerde opties voor snellere levering en moeiteloze keuzes."
          },
          "cards4": {
            "title": "Precisie Vakmanschap",
            "description": "Deuren die een leven lang meegaan, met oog voor elk detail."
          },
          "cards5": {
            "title": "Eindeloze Inspiratie",
            "description": "Eindeloze ontwerp­mogelijkheden om jouw ruimte onvergetelijk te maken."
          },
        },
        "ContructorComponent2": {
          "title":"“Passie voor Hout. Precisie in Design.”",
          "btnTex":"Bekijk Collectie",
          "data": [
            {
              title: "Maatwerk",
              image: "/images/img1.png",
              heading: "Exclusieve houten deuren",
              description: "Zebrano ontwerpt op maat gemaakte taats-, schuif- en draaideuren, vervaardigd uit hoogwaardige materialen en afgewerkt met exclusieve details. ",
            },
            {
              title: "Unieke details",
              image: "/images/img2.png",
              heading: "Materialen met een verhaal",
              description: "Van zeldzame houtsoorten tot handgeselecteerd steen en ambachtelijk glas — elk materiaal is gekozen om zijn karakter, historie en natuurlijke schoonheid.",
            },
            {
              title: "Grenzeloos Ontwerp",
              image: "/images/img3.png",
              heading: "Ontwerp zonder grenzen",
              description: "Wij gaan verder dan standaardmaten en afwerkingen, en creëren deuren die naadloos aansluiten bij jouw architectuur en persoonlijke stijl.",
            },
            {
              title: "Bewust Vakmanschap",
              image: "/images/img4.png",
              heading: "Vakmanschap & Duurzaamheid",
              description: "We bouwen ze zo goed, dat je ze misschien vaker laat zien dan je nieuwe keuken.",
            },
          ],
        },
        "Stalen": {},
        "InspirationInsight": ""
      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Producten",
        "Pivot": {
          "pageName": "Taatsdeuren"
        },
      }
    }
  },
  de: {
    translation: {
      
      // =====homepage======
      "homePage": {
        "pageName": "homepage",
        // ---banner---
        "banner": {
          "exclusivity": "Exklusivität, jetzt in Reichweite",
          "luxuryDoors": "Luxustüren",
          "story": "Türen, die Ihre Geschichte erzählen",
          "uniqueDesigns": "Einzigartige Designs",
          "trends": "Türen, die Trends überdauern",
          "timeless": "Zeitlose Qualität",

        },
        "WhyPartner": {
          "partnerHeading": {
            "title": "Warum Zebrano Studio wählen?",
            "description": "Wir glauben, dass Luxus nicht unerreichbar sein sollte. Unsere Türen werden mit derselben Präzision und denselben Materialien gefertigt, die in den besten Interieurs der Welt zu finden sind — und dennoch so gestaltet, dass sie für jedes Zuhause zugänglich sind. Vom ersten Entwurf bis zur finalen Montage bringen wir High-End-Design in Ihr tägliches Leben – ohne Kompromisse."
          },
          "cards1": {
            "title": "Maßgeschneidertes Design",
            "description": "Individuelle Formen, Oberflächen und Materialien, die perfekt zu Ihrer Vision und Ihrem Raum passen."
          },
          "cards2": {
            "title": "Zugänglicher Luxus",
            "description":"Erstklassige Handwerkskunst und seltene Materialien — für Projekte jeder Größe zugänglich gemacht."
          },
          "cards3": {
            "title": "Einfache Konfiguration",
            "description": "Ein einfacher Prozess mit kuratierten Optionen für schnellere Lieferung und mühelose Entscheidungen."
          },
          "cards4": {
            "title": "Präzisionshandwerk",
            "description": "Türen, die ein Leben lang halten – mit größter Liebe zum Detail gefertigt."
          },
          "cards5": {
            "title": "Unendliche Inspiration",
            "description": "Unendliche Gestaltungsmöglichkeiten, die Ihre Räume unvergesslich machen."
          },
        },
        "ContructorComponent2": {
          "title":"“Leidenschaft für Holz. Präzision im Design.”",
          "btnTex":"Kollektion ansehen",
          "data": [
            {
              title: "Maßgeschneidert",
              image: "/images/img1.png",
              heading: "Exklusive Holztüren",
              description: "Zebrano fertigt maßgeschneiderte Pivot-, Schiebe- und klassische Türen aus edlem Holz mit exklusiven Details.",
            },
            {
              title: "Individuelle Details",
              image: "/images/img2.png",
              heading: "Materialien mit Geschichte",
              description: "Von seltenen Hölzern bis hin zu handverlesenem Stein und kunstvollem Glas – jedes Material wird wegen seines Charakters, seiner Geschichte und seiner natürlichen Schönheit ausgewählt.",
            },
            {
              title: "Grenzenloses Design",
              image: "/images/img3.png",
              heading: "Design ohne Grenzen",
              description: "Wir gehen über Standardmaße und -oberflächen hinaus und gestalten Türen, die sich nahtlos in Ihre Architektur einfügen und Ihren persönlichen Stil widerspiegeln.",
            },
            {
              title: "Bewusstes Handwerk",
              image: "/images/img4.png",
              heading: "Handwerk & Langlebigkeit",
              description: "Wir bauen sie so gut, dass Sie sie vielleicht öfter präsentieren als Ihre neue Küche.",
            },
          ],
        },
        "Stalen": {
          
        },
        "InspirationInsight": ""

      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Produkte",
        "Pivot": {
          "pageName": "Pivot-Türen"
        },
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;