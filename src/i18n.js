import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // %%%%%%%%% HEADER %%%%%%%%%
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
        "Stalen": {
          "card1":{
            "title":"Door Types",
            "desc":"Explore our diverse range of exclusive wooden doors, each designed to offer distinct advantages in style, functionality, and space utilization. From grand entrances to seamless room transitions, we have the perfect solution for your home.",
            "btnText": "Configure Yours →"
          },
          "card2":{
            "title":"Pivot Doors",
            "desc":"Rotate on a vertical axis, allowing for larger, more dramatic entrances.",
            "btnText": "View Collection"
          },
          "card3":{
            "title":"Sliding Doors",
            "desc":"Our custom sliding doors glide effortlessly along a track, making them perfect for space-saving layouts and modern interior design. Ideal as elegant room dividers, wardrobe solutions, or for creating a smooth flow between spaces.",
            "btnText": "View Collection"
          },
          "card4":{
            "title":"Hinged Doors",
            "desc":"The classic door, swinging open and closed on side-mounted hinges.",
            "btnText": "View Collection"
          },
        },
        "InspirationInsight": {
          "heading":"Inspiration & Insights",
          "title" : "Crafted from the Finest Wood",
          "description" : "Wood is more than our material — it’s our passion. Every grain tells a story. Every finish is done with love."
        }

      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Products",
        // --banner--
        "banner": {
          "bannerBg":"",
          "title":"Start Your Zebrano Journey",
          "desc":"We offer two ways to get started — choose the path that suits you best.",
          "btnTxt":"See collection",
        },
        // --CabinetaryOption--
        "CabinetaryOption":{
          "option1":{
            "title":"Option 1:",
            "heading":"Explore Our Collections ",
            "desc":" Not sure where to begin? Browse our curated Glass, Veneer, 3D, and Atelier collections to discover the designs, materials, and finishes that inspire you. We’ll guide you toward the perfect fit for your style and space.",
            "btnText":"See collection"
          },
          "option2":{
            "title":"Option 2:",
            "heading":"Configure Your Own",
            "desc":"Already know exactly what you want? Use our configurator to choose your door type, materials, hardware, and details — and we’ll craft it to your specifications.",
            "btnText":"Configure yours"
          },

          "row1":{
            "title":"Choose your door type. ",
            "heading":"Make a statement.",
            "desc":".Select from our most popular Pivot, Slide, or Hinged designs — pre-sized for standard openings and ready to install. Perfect for quick upgrades or projects on a tight schedule.",
            "btnText":"See collection"
          },
          "row2":{
            "title":"Select your material.",
            "heading":" Make it yours",
            "desc":"From fine veneers to solid woods, textured glass, or natural stone inlays — we’ll craft your chosen design to the exact dimensions of your space for a flawless fit.",
            "btnText":"See collection"
          },
          "row3":{
            "title":"Define Your Grip Style.",
            "heading":"Pick your handle or integrated grip.",
            "desc":"Choose from fully integrated grips, bold contrasting metals, or matching material finishes to make your door as distinctive as your interior.",
            "btnText":"See collection"
          },
          "row4":{
            "title":"Architectural Integration. ",
            "heading":" Seamlessly blend your door into the architecture.",
            "desc":"From room dividers and wall panels to fully integrated frames, we create doors that become part of the wall itself — delivering a unified, continuous design throughout your space.",
            "btnText":"See collection"
          },
        },
        // &&&&&&&&&& sub pages &&&&&&&&&
        "Pivot": {
          "pageName": "Pivot Doors"
        },
      },

      // %%%%% FOOTER %%%%%%%
      "footer": {
        "title":"Luxury doors, made accessible.",
        "btnText" : "See our collection",
        "Products" : "Products",
        "Materials" : "Materials",
        "Collection" : "Collection",
        "Configuration" : "Configuration",
        "Architects" : "Architects",
        "Zebrano" : "Zebrano",
        "Inspiration" : "Inspiration",
        "About" : "About",
        "Story" : "Story",
        "OurTeam" : "Our team",
        "ConsciousCraft" : "Conscious Craft",
        "Service" : "Service",
        "Contact" : "Contact",
        "FAQ" : "FAQ",
        "TermsConditions":"Terms & Conditions",
        "PrivacyPolicy" : "Privacy policy",
        "footNone": "© 2025 Zebrano Studio. All rights reserved."
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
        "Stalen": {
          "card1":{
            "title":"Deurtypes",
            "desc":"Ontdek ons diverse aanbod exclusieve houten deuren, elk ontworpen met unieke voordelen in stijl, functionaliteit en ruimtegebruik. Van indrukwekkende entrees tot naadloze overgangen: wij hebben een oplossing voor jouw woning.",
            "btnText": "Configureer jouw deur →"
          },
          "card2":{
            "title":"Taatsdeuren",
            "desc":"Een taatsdeur draait niet op traditionele scharnieren aan de zijkant, maar op een scharnierpunt in de vloer en het plafond. Daardoor kan de deur zowel naar binnen als naar buiten openen en ontstaat er een vloeiende, bijna zwevende beweging.",
            "btnText": "View Collection"
          },
          "card3":{
            "title":"Schuifdeuren",
            "desc":"Onze maatwerk schuifdeuren glijden moeiteloos over een rails, ideaal voor ruimtebesparende indelingen en moderne interieurs. Perfect als elegante roomdividers, kastoplossingen of om vloeiende overgangen te creëren.",
            "btnText": "View Collection"
          },
          "card4":{
            "title":"Draaideuren",
            "desc":"De klassieke deur, die opent en sluit op zijscharnieren.",
            "btnText": "View Collection"
          },
        },
        "InspirationInsight": {
          "heading":"Inspiratie & Inzichten",
          "title" : "Gemaakt van het mooiste hout",
          "description" : "Hout is voor ons meer dan een materiaal — het is onze passie. Elke nerf vertelt een verhaal. Elke afwerking wordt met liefde gedaan."
        }
      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Producten",
        // --banner--
        "banner": {
          "bannerBg":"",
          "title":"Begin jouw Zebrano-reis",
          "desc":"We bieden twee manieren om te starten — kies wat het beste bij jou past.",
          "btnTxt":"See collection",
        },
        // --CabinetaryOption--
        "CabinetaryOption":{
          "option1":{
            "title":"Optie 1:",
            "heading":"Ontdek onze collecties",
            "desc":"Weet je niet waar je moet beginnen? Bekijk onze zorgvuldig samengestelde collecties Glass, Veneer, 3D en Atelier en ontdek de ontwerpen, materialen en afwerkingen die jou inspireren. Wij helpen je bij het vinden van de perfecte match voor jouw stijl en ruimte",
            "btnText":"Bekijk collectie"
          },
          "option2":{
            "title":"Optie 2: ",
            "heading":"Stel je eigen deur samen",
            "desc":"Weet je al precies wat je wilt? Gebruik onze configurator om jouw deurtype, materialen, beslag en details te kiezen — en wij maken het volledig op maat voor jou.",
            "btnText":"Stel samen"
          },
          "row1":{
            "title":"Kies jouw deurtype.",
            "heading":" Maak een statement.",
            "desc":"Kies uit onze populairste taats-, Schuif- of Draaideuren — vooraf op maat voor standaardopeningen en direct te installeren. Perfect voor snelle upgrades of projecten met een strakke planning.",
            "btnText":"Bekijk collectie"
          },
          "row2":{
            "title":"Kies jouw materiaal.",
            "heading":" Maak het eigen.",
            "desc":"Van luxe fineer tot massief hout, getextureerd glas of natuurstenen inlays — wij maken jouw gekozen ontwerp exact op maat voor jouw ruimte, voor een perfect resultaat.",
            "btnText":"Bekijk collectie"
          },
          "row3":{
            "title":"Bepaal jouw greepstijl.",
            "heading":" Kies je handgreep of geïntegreerde greep.",
            "desc":"Kies uit volledig geïntegreerde grepen, opvallende contrasterende metalen of bijpassende materiaalafwerkingen om jouw deur net zo uniek te maken als jouw interieur.",
            "btnText":"Bekijk collectie"
          },
          "row4":{
            "title":"Totale design integratie. ",
            "heading":" Laat je deur naadloos opgaan in de architectuur.",
            "desc":"Van roomdividers en wandpanelen tot volledig geïntegreerde kozijnen — wij maken deuren die deel worden van de wand zelf, en zorgen zo voor een doorlopend en harmonieus design in jouw hele ruimte.",
            "btnText":"Bekijk collectie"
          },
        },
        "Pivot": {
          "pageName": "Taatsdeuren"
        },
      },
      // %%%%% FOOTER %%%%%%%
      "footer": {
        "title":"Luxe deuren, voor iedereen bereikbaar.",
        "btnText" : "Bekijk onze collectie",
        "Products" : "Producten",
        "Materials" : "Materialen",
        "Collection" : "Collectie",
        "Configuration" : "Configuratie",
        "Architects" : "Architecten",
        "Zebrano" : "Zebrano",
        "Inspiration" : "Inspiratie",
        "About" : "Over ons",
        "Story" : "Ons verhaal",
        "OurTeam" : "Ons team",
        "ConsciousCraft" : "Bewust Vakmanschap",
        "Service" : "Service",
        "Contact" : "Contact",
        "FAQ" : "Veelgestelde vragen",
        "TermsConditions":"Algemene Voorwaarden",
        "PrivacyPolicy" : "Privacybeleid",
        "footNone": "© 2025 Zebrano Studio. Alle rechten voorbehouden."
      },
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
          "card1":{
            "title":"Türtypen",
            "desc":"Entdecken Sie unsere vielfältige Auswahl exklusiver Holztüren, die jeweils besondere Vorteile in Stil, Funktionalität und Raumnutzung bieten. Von repräsentativen Eingängen bis zu nahtlosen Raumübergängen – wir haben die perfekte Lösung für Ihr Zuhause.",
            "btnText": "Konfigurieren Sie Ihre Tür →"
          },
          "card2":{
            "title":"Pivot-Türen",
            "desc":"Eine Pivot-Tür dreht sich nicht wie eine klassische Tür an seitlichen Scharnieren, sondern um einen Drehpunkt im Boden und in der Decke. Dadurch kann sie sowohl nach innen als auch nach außen geöffnet werden und bewegt sich sanft und beinahe schwebend durch den Raum.",
            "btnText": "View Collection"
          },
          "card3":{
            "title":"Schiebetüren",
            "desc":"Unsere maßgefertigten Schiebetüren gleiten mühelos auf einer Schiene und eignen sich ideal für platzsparende Grundrisse und modernes Interieur. Perfekt als elegante Raumteiler, Schranklösungen oder für fließende Übergänge zwischen Räumen.",
            "btnText": "View Collection"
          },
          "card4":{
            "title":"Drehtüren",
            "desc":"Die klassische Tür, die sich auf seitlich montierten Scharnieren öffnet und schließt.",
            "btnText": "View Collection"
          },
        },
        "InspirationInsight": {
          "heading":"Inspiration & Einblicke",
          "title" : "Gefertigt aus dem feinsten Holz",
          "description" : "Holz ist für uns mehr als nur ein Material — es ist unsere Leidenschaft. Jede Maserung erzählt eine Geschichte. Jede Oberfläche wird mit Liebe vollendet."
        }

      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Produkte",
        // --banner--
        "banner": {
          "bannerBg":"",
          "title":"Starten Sie Ihre Zebrano-Reise",
          "desc":"Wir bieten zwei Möglichkeiten, um zu beginnen – wählen Sie den Weg, der am besten zu Ihnen passt.",
          "btnTxt":"See collection",
        },
        // --CabinetaryOption--
        "CabinetaryOption":{
          "option1":{
            "title":"Option 1:",
            "heading":"Entdecken Sie unsere Kollektionen",
            "desc":"Sie wissen nicht, wo Sie anfangen sollen? Stöbern Sie durch unsere kuratierten Glass-, Veneer-, 3D- und Atelier-Kollektionen, um die Designs, Materialien und Oberflächen zu entdecken, die Sie inspirieren. Wir begleiten Sie bei der Wahl, die perfekt zu Ihrem Stil und Raum passt.",
            "btnText":"Kollektion ansehen"
          },
          "option2":{
            "title":"Option 2:",
            "heading":"Konfigurieren Sie Ihre eigene Tür",
            "desc":"Sie wissen schon genau, was Sie wollen? Nutzen Sie unseren Konfigurator, um Türtyp, Materialien, Beschläge und Details auszuwählen – und wir fertigen sie nach Ihren Vorgaben.",
            "btnText":"Jetzt konfigurieren"
          },
          "row1":{
            "title":"Wählen Sie Ihren Türtyp.",
            "heading":" Setzen Sie ein Statement.",
            "desc":"Wählen Sie aus unseren beliebtesten Pivot-, Schiebe- oder Drehtüren – vorgefertigt für Standardöffnungen und sofort installierbar. Perfekt für schnelle Upgrades oder Projekte mit engem Zeitplan.",
            "btnText":"Kollektion ansehen"
          },
          "row2":{
            "title":"Wählen Sie Ihr Material.",
            "heading":"Machen Sie es zu Ihrem eigenen.",
            "desc":"Von edlen Furnieren über Massivholz und strukturiertes Glas bis hin zu Natursteineinlagen – wir fertigen Ihr gewähltes Design exakt nach den Maßen Ihres Raums für eine makellose Passform.",
            "btnText":"Kollektion ansehen"
          },
          "row3":{
            "title":"Bestimmen Sie Ihren Griffstil.",
            "heading":" Wählen Sie Ihren Griff oder integrierten Griff.",
            "desc":"Wählen Sie zwischen vollständig integrierten Griffen, markanten kontrastierenden Metallen oder passenden Materialoberflächen, um Ihre Tür so einzigartig zu machen wie Ihr Interieur.",
            "btnText":"Kollektion ansehen"
          },
          "row4":{
            "title":"Architektonische Integration.",
            "heading":"Lassen Sie Ihre Tür nahtlos in die Architektur übergehen.",
            "desc":"Von Raumteilern und Wandverkleidungen bis hin zu vollständig integrierten Rahmen – wir schaffen Türen, die Teil der Wand selbst werden und ein einheitliches, durchgängiges Design in Ihrem gesamten Raum ermöglichen.",
            "btnText":"Kollektion ansehen"
          },
        },
        // &&& PIVOT DOOR &&&&
        "Pivot": {
          "pageName": "Pivot-Türen"
        },
      },
      // %%%%% FOOTER %%%%%%%
      // %%%%% FOOTER %%%%%%%
      "footer": {
        "title":"Luxustüren, für alle zugänglich.",
        "btnText" : "Kollektion ansehen",
        "Products" : "Produkte",
        "Materials" : "Materialien",
        "Collection" : "Kollektion",
        "Configuration" : "Konfiguration",
        "Architects" : "Architekten",
        "Zebrano" : "Zebrano",
        "Inspiration" : "Inspiration",
        "About" : "Über uns",
        "Story" : "Unsere Geschichte",
        "OurTeam" : "Unsere Geschichte",
        "ConsciousCraft" : "Bewusstes Handwerk",
        "Service" : "Service",
        "Contact" : "Kontakt",
        "FAQ" : "Häufige Fragen",
        "TermsConditions":"Allgemeine Geschäftsbedingungen",
        "PrivacyPolicy" : "Datenschutzerklärung",
        "footNone": "© 2025 Zebrano Studio. Alle rechten voorbehouden."
      },
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