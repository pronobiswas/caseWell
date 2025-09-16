import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // %%%%%%%%% HEADER %%%%%%%%%
      "header": {
        "menu": {
          "products": "products",
          "PivotDoors": "Pivot Doors",
          "SlidingDoors": "Sliding Doors",
          "HingedDoors": "Hinged Doors",
          "FlushToWall": "Flush-to-wall",
          "WallPartition": "Wall Partition",
          "Boiserie": "Boiserie",
          "Materials": "Materials",
          "Collection": "Collection",
          "GlassCollection": "Glass Collection",
          "VeneerCollection": "Veneer Collection",
          "3DCollection": "3D Collection",
          "AtelierCollection": "Atelier Collection",
          "Configurator": "Configurator",
          "Inspiration": "Inspiration",
          "Architects": "Architects",
          "Zebrano": "Zebrano",
          "OurStory": "Our Story",
          "MeetTheMakers": "Meet the Makers",
          "ConsciousCraft": "Conscious Craft",
          "Service": "Service",
          "Contact": "Contact",
          "ConfigureNow": "Configure Now",

        }
      },
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
            "description": "Premium craftsmanship and rare materials — made attainable for every project size."
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
          "title": "“Passion for Wood. Precision in Design.”",
          "btnTex": "See Collection",
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
          "card1": {
            "title": "Door Types",
            "desc": "Explore our diverse range of exclusive wooden doors, each designed to offer distinct advantages in style, functionality, and space utilization. From grand entrances to seamless room transitions, we have the perfect solution for your home.",
            "btnText": "Configure Yours →"
          },
          "card2": {
            "title": "Pivot Doors",
            "desc": "Rotate on a vertical axis, allowing for larger, more dramatic entrances.",
            "btnText": "View Collection"
          },
          "card3": {
            "title": "Sliding Doors",
            "desc": "Our custom sliding doors glide effortlessly along a track, making them perfect for space-saving layouts and modern interior design. Ideal as elegant room dividers, wardrobe solutions, or for creating a smooth flow between spaces.",
            "btnText": "View Collection"
          },
          "card4": {
            "title": "Hinged Doors",
            "desc": "The classic door, swinging open and closed on side-mounted hinges.",
            "btnText": "View Collection"
          },
        },
        "InspirationInsight": {
          "heading": "Inspiration & Insights",
          "title": "Crafted from the Finest Wood",
          "description": "Wood is more than our material — it’s our passion. Every grain tells a story. Every finish is done with love."
        }

      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Products",
        // --banner--
        "banner": {
          "bannerBg": "",
          "title": "Start Your Zebrano Journey",
          "desc": "We offer two ways to get started — choose the path that suits you best.",
          "btnTxt": "See collection",
        },
        // --CabinetaryOption--
        "CabinetaryOption": {
          "option1": {
            "title": "Option 1:",
            "heading": "Explore Our Collections ",
            "desc": " Not sure where to begin? Browse our curated Glass, Veneer, 3D, and Atelier collections to discover the designs, materials, and finishes that inspire you. We’ll guide you toward the perfect fit for your style and space.",
            "btnText": "See collection"
          },
          "option2": {
            "title": "Option 2:",
            "heading": "Configure Your Own",
            "desc": "Already know exactly what you want? Use our configurator to choose your door type, materials, hardware, and details — and we’ll craft it to your specifications.",
            "btnText": "Configure yours"
          },

          "row1": {
            "title": "Choose your door type. ",
            "heading": "Make a statement.",
            "desc": ".Select from our most popular Pivot, Slide, or Hinged designs — pre-sized for standard openings and ready to install. Perfect for quick upgrades or projects on a tight schedule.",
            "btnText": "See collection"
          },
          "row2": {
            "title": "Select your material.",
            "heading": " Make it yours",
            "desc": "From fine veneers to solid woods, textured glass, or natural stone inlays — we’ll craft your chosen design to the exact dimensions of your space for a flawless fit.",
            "btnText": "See collection"
          },
          "row3": {
            "title": "Define Your Grip Style.",
            "heading": "Pick your handle or integrated grip.",
            "desc": "Choose from fully integrated grips, bold contrasting metals, or matching material finishes to make your door as distinctive as your interior.",
            "btnText": "See collection"
          },
          "row4": {
            "title": "Architectural Integration. ",
            "heading": " Seamlessly blend your door into the architecture.",
            "desc": "From room dividers and wall panels to fully integrated frames, we create doors that become part of the wall itself — delivering a unified, continuous design throughout your space.",
            "btnText": "See collection"
          },
        },
        // &&&&&&&&&& pivot doors &&&&&&&&&
        "Pivot": {
          "pageName": "Pivot Doors",
          "banner": {
            "bannerBG": "",
            "heading": "Pivot Doors",
            "subHeading": "A pivot door is a sleek, modern door design that rotates on a central or offset pivot hinge, allowing smooth and unique opening with a contemporary look",
            "btnText": "Configure Now"
          },
          "DoorDescription": {
            "ddesc1": {
              "title": "What is a Pivot Door?",
              "heading": "A Statement in Motion",
              "description": "Forget the ordinary swing — luxury pivot doors rotate from a central point, creating a smooth, weightless movement that feels more like a design experience than just an opening. Oversized or heavy? Not a problem — our custom pivot doors handle it effortlessly.",
              "btnText": "See Collection"
            },
            "ddesc2": {
              "title": "Why Choose Pivot?",
              "heading": "Bold, Seamless, Functional",
              "description": "A pivot door isn’t just an entrance — it’s a statement piece. Perfect for wide openings, modern pivot doors create a sense of arrival while keeping movement effortless and perfectly balanced..",
              "btnText": "Get Inspired"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Material Possibilities",
              "heading": "Crafted Your Way",
              "desc": "From deep walnut to airy glass panels or even stone inlays, our high-end pivot doors can carry just about any look you can imagine. Each one is built with precision to match your style, material preferences, and architectural vision.",
              "btnText": "View Materials"
            },
            "row2": {
              "title": "Hardware & Details",
              "heading": "Invisible Precision",
              "desc": "We hide the clever stuff — concealed pivot hinges, flush handles, and soft-closing systems — so all you see is clean, uninterrupted design in every custom pivot door",
              "btnText": "See Hardware Option"
            },
            "row3": {
              "title": "Integration Options",
              "heading": "From Door to Design Feature",
              "desc": "Pair your pivot door with matching wall panels, custom frames, or integrated shelving for seamless architectural integration throughout your interior.",
              "btnText": "View Materials"
            },
          },
        },
        "SlidingDoor": {
          "pageName": "Sliding Door",
          "banner": {
            "bannerBG": "",
            "heading": "Sliding Door",
            "subHeading": "A slide door operates by gliding horizontally along a track, offering a space-saving and modern solution for both interior and exterior openings.",
            "btnText": "Configure Now"
          },
          "DoorDescription": {
            "desc1": {
              "title": "What is a Sliding Door?",
              "heading": "Space-Saving Elegance",
              "description": "Sliding doors glide along a track instead of swinging open, making them ideal for space-conscious layouts. Our modern sliding doors work beautifully as statement room dividers or sleek wardrobe solutions.",
              "btnText": "See Collection"
            },
            "desc2": {
              "title": "Why Choose Sliding?",
              "heading": "Bold, Seamless, Functional",
              "description": "Perfect for dividing spaces, hiding storage, or creating a seamless flow between rooms, our custom sliding doors offer practical solutions without compromising on design.",
              "btnText": "Get Inspired"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Material Variety",
              "heading": "Your Style, Your Door",
              "desc": "Go transparent, bold, or natural — from frosted glass to warm oak, our luxury sliding doors are a blank canvas for your vision.",
              "btnText": "View Materials"
            },
            "row2": {
              "title": "Hardware Precision",
              "heading": "Smooth & Silent",
              "desc": "Premium tracks and concealed runners ensure your sliding door moves effortlessly and quietly, with lasting durability.",
              "btnText": "See Hardware Option"
            },
            "row3": {
              "title": "Design Integration",
              "heading": "Flow Between Spaces ",
              "desc": "Combine sliding doors with wall panels, frames, or matching finishes for a fully integrated interior design concept.",
              "btnText": "Get in Contact"
            },
          },
        },
        "HingedDoors": {
          "pageName": "Hinged Doors",
          "banner": {
            "bannerBG": "",
            "heading": "Hinged Doors",
            "subHeading": "A hinged door is a traditional door style mounted on side hinges, swinging open and closed to provide easy and reliable access.",
            "btnText": "Configure Now"
          },
          "DoorDescription": {
            "desc1": {
              "title": "What is a Hinged Door?",
              "heading": "Timeless & Versatile",
              "description": "Hinged doors are the classics — side-mounted, easy to use, and endlessly adaptable. Our luxury hinged doors work in any setting, from a minimalist loft to a grand townhouse.",
              "btnText": "See Collection"
            },
            "desc2": {
              "title": "Why Choose Hinged?",
              "heading": "Everyday Luxury",
              "description": "Reliable, stylish, and flexible — custom hinged doors work beautifully in almost any space. From single openings to grand double doors, they bring comfort, function, and elegance in equal measure.",
              "btnText": "Get Inspired"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Material Choices",
              "heading": "Finish It Your Way",
              "desc": "Natural woodgrain, rich veneers, painted panels, or glass inserts — our high-end hinged doors can be tailored to perfectly match your interior style and palette.",
              "btnText": "View Materials"
            },
            "row2": {
              "title": "Hardware Precision",
              "heading": "Make It Distinctive",
              "desc": "Handles that blend in, or handles that steal the spotlight — choose hardware that elevates the look and feel of your custom hinged door.",
              "btnText": "See Hardware Option"
            },
            "row3": {
              "title": "Integration Ideas",
              "heading": "Beyond the Frame",
              "desc": "Match your hinged door with trims, skirting, or wall panels in the same finish for a unified, architecturally cohesive look.",
              "btnText": "Get in Contact"
            },
          },
        },
      },

      // %%%%% FOOTER %%%%%%%
      "footer": {
        "title": "Luxury doors, made accessible.",
        "btnText": "See our collection",
        "Products": "Products",
        "Materials": "Materials",
        "Collection": "Collection",
        "Configuration": "Configuration",
        "Architects": "Architects",
        "Zebrano": "Zebrano",
        "Inspiration": "Inspiration",
        "About": "About",
        "Story": "Story",
        "OurTeam": "Our team",
        "ConsciousCraft": "Conscious Craft",
        "Service": "Service",
        "Contact": "Contact",
        "FAQ": "FAQ",
        "TermsConditions": "Terms & Conditions",
        "PrivacyPolicy": "Privacy policy",
        "footNone": "© 2025 Zebrano Studio. All rights reserved."
      }
    }
  },
  nl: {
    translation: {
      // %%%%%%%%% HEADER %%%%%%%%%
      "header": {
        "menu": {
          "products": "Producten",
          "PivotDoors": "Taatsdeuren",
          "SlidingDoors": "Schuifdeuren",
          "HingedDoors": "Draaideuren",
          "FlushToWall": "Onzichtbare deuren",
          "WallPartition": "Room Divider",
          "Boiserie": "Boiserie",
          "Materials": "Materialen",
          "Collection": "Collectie",
          "GlassCollection": "Glascollectie",
          "VeneerCollection": "Fineercollectie",
          "3DCollection": "3D-collectie",
          "AtelierCollection": "Ateliercollectie",
          "Configurator": "Configurator",
          "Inspiration": "Inspiratie",
          "Architects": "Architecten",
          "Zebrano": "Zebrano",
          "OurStory": "Ons verhaal",
          "MeetTheMakers": "Ontmoet de makers",
          "ConsciousCraft": "Bewust Vakmanschap",
          "Service": "Service",
          "Contact": "Contact",
          "ConfigureNow": "Configureer nu",

        }
      },
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
            "description": "Hoogwaardig vakmanschap en zeldzame materialen — bereikbaar gemaakt voor elk project."
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
          "title": "“Passie voor Hout. Precisie in Design.”",
          "btnTex": "Bekijk Collectie",
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
          "card1": {
            "title": "Deurtypes",
            "desc": "Ontdek ons diverse aanbod exclusieve houten deuren, elk ontworpen met unieke voordelen in stijl, functionaliteit en ruimtegebruik. Van indrukwekkende entrees tot naadloze overgangen: wij hebben een oplossing voor jouw woning.",
            "btnText": "Configureer jouw deur →"
          },
          "card2": {
            "title": "Taatsdeuren",
            "desc": "Een taatsdeur draait niet op traditionele scharnieren aan de zijkant, maar op een scharnierpunt in de vloer en het plafond. Daardoor kan de deur zowel naar binnen als naar buiten openen en ontstaat er een vloeiende, bijna zwevende beweging.",
            "btnText": "View Collection"
          },
          "card3": {
            "title": "Schuifdeuren",
            "desc": "Onze maatwerk schuifdeuren glijden moeiteloos over een rails, ideaal voor ruimtebesparende indelingen en moderne interieurs. Perfect als elegante roomdividers, kastoplossingen of om vloeiende overgangen te creëren.",
            "btnText": "View Collection"
          },
          "card4": {
            "title": "Draaideuren",
            "desc": "De klassieke deur, die opent en sluit op zijscharnieren.",
            "btnText": "View Collection"
          },
        },
        "InspirationInsight": {
          "heading": "Inspiratie & Inzichten",
          "title": "Gemaakt van het mooiste hout",
          "description": "Hout is voor ons meer dan een materiaal — het is onze passie. Elke nerf vertelt een verhaal. Elke afwerking wordt met liefde gedaan."
        }
      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Producten",
        // --banner--
        "banner": {
          "bannerBg": "",
          "title": "Begin jouw Zebrano-reis",
          "desc": "We bieden twee manieren om te starten — kies wat het beste bij jou past.",
          "btnTxt": "See collection",
        },
        // --CabinetaryOption--
        "CabinetaryOption": {
          "option1": {
            "title": "Optie 1:",
            "heading": "Ontdek onze collecties",
            "desc": "Weet je niet waar je moet beginnen? Bekijk onze zorgvuldig samengestelde collecties Glass, Veneer, 3D en Atelier en ontdek de ontwerpen, materialen en afwerkingen die jou inspireren. Wij helpen je bij het vinden van de perfecte match voor jouw stijl en ruimte",
            "btnText": "Bekijk collectie"
          },
          "option2": {
            "title": "Optie 2: ",
            "heading": "Stel je eigen deur samen",
            "desc": "Weet je al precies wat je wilt? Gebruik onze configurator om jouw deurtype, materialen, beslag en details te kiezen — en wij maken het volledig op maat voor jou.",
            "btnText": "Stel samen"
          },
          "row1": {
            "title": "Kies jouw deurtype.",
            "heading": " Maak een statement.",
            "desc": "Kies uit onze populairste taats-, Schuif- of Draaideuren — vooraf op maat voor standaardopeningen en direct te installeren. Perfect voor snelle upgrades of projecten met een strakke planning.",
            "btnText": "Bekijk collectie"
          },
          "row2": {
            "title": "Kies jouw materiaal.",
            "heading": " Maak het eigen.",
            "desc": "Van luxe fineer tot massief hout, getextureerd glas of natuurstenen inlays — wij maken jouw gekozen ontwerp exact op maat voor jouw ruimte, voor een perfect resultaat.",
            "btnText": "Bekijk collectie"
          },
          "row3": {
            "title": "Bepaal jouw greepstijl.",
            "heading": " Kies je handgreep of geïntegreerde greep.",
            "desc": "Kies uit volledig geïntegreerde grepen, opvallende contrasterende metalen of bijpassende materiaalafwerkingen om jouw deur net zo uniek te maken als jouw interieur.",
            "btnText": "Bekijk collectie"
          },
          "row4": {
            "title": "Totale design integratie. ",
            "heading": " Laat je deur naadloos opgaan in de architectuur.",
            "desc": "Van roomdividers en wandpanelen tot volledig geïntegreerde kozijnen — wij maken deuren die deel worden van de wand zelf, en zorgen zo voor een doorlopend en harmonieus design in jouw hele ruimte.",
            "btnText": "Bekijk collectie"
          },
        },
        // &&&&&&& pivot doors &&&&&&
        "Pivot": {
          "pageName": "Taatsdeuren",
          "banner": {
            "bannerBG": "",
            "heading": "Taatsdeuren",
            "subHeading": "aatsdeurEen taatsdeur is een strak, modern deurontwerp dat draait op een centraal of excentrisch taats-scharnier, waardoor een vloeiende en unieke opening ontstaat met een eigentijdse uitstraling.",
            "btnText": "Configureer nu"
          },
          "DoorDescription": {
            "ddesc1": {
              "title": "Wat is een taatsdeur?",
              "heading": " Een statement in beweging",
              "description": "Vergeet de gewone draaideur — luxe taatsdeuren draaien vanuit een centraal punt en creëren een soepele, gewichtloze beweging die meer aanvoelt als een designervaring dan als een simpele opening. Extra groot of zwaar? Geen probleem — onze maatwerk taatsdeuren dragen het moeiteloos.",
              "btnText": "Bekijk collectie"
            },
            "ddesc2": {
              "title": "Waarom kiezen voor taats?",
              "heading": " Gedurfd, naadloos, functioneel",
              "description": "lEen taatsdeur is niet zomaar een entree — het is een statementstuk. Perfect voor brede doorgangen, moderne taatsdeuren creëren een gevoel van aankomst terwijl de beweging moeiteloos en perfect in balans blijft.",
              "btnText": "Laat je inspireren"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materiaal ­mogelijkheden ",
              "heading": " Gemaakt op jouw manier",
              "desc": "Van diep notenhout tot luchtige glazen panelen of zelfs stenen inlays — onze high-end taatsdeuren kunnen vrijwel elke uitstraling aannemen die je voor ogen hebt. Elke deur wordt met precisie vervaardigd, passend bij jouw stijl, materiaalvoorkeuren en architectonische visie.",
              "btnText": "Bekijk materialen"
            },
            "row2": {
              "title": "Beslag & details ",
              "heading": "Onzichtbare precisie",
              "desc": "Wij verbergen de techniek — verdekte taatsscharnieren, vlakke grepen en soft-close systemen — zodat jij alleen een strak, ononderbroken design ziet in elke maatwerk taatsdeur.",
              "btnText": "Bekijk beslagopties"
            },
            "row3": {
              "title": "Integratie­opties ",
              "heading": "Van Deur tot Design Element",
              "desc": "Combineer jouw taatsdeur met bijpassende wandpanelen, maatwerk kozijnen of geïntegreerde kasten voor een naadloze architecturale integratie door heel je interieur.",
              "btnText": "Bekijk materialen"
            },
          },
        },
        "SlidingDoor": {
          "pageName": "Schuifdeur",
          "banner": {
            "bannerBG": "",
            "heading": "Schuifdeur",
            "subHeading": "Een schuifdeur beweegt horizontaal langs een rail en biedt zo een ruimtebesparende en moderne oplossing voor zowel binnen- als buitenopeningen.",
            "btnText": "Configureer nu"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Wat is een schuifdeur?",
              "heading": "Ruimtebesparende elegantie ",
              "description": "Schuifdeuren bewegen langs een rail in plaats van open te zwaaien, waardoor ze ideaal zijn voor ruimtelijke indelingen. Onze moderne schuifdeuren werken prachtig als statement roomdividers of strakke kastoplossingen. ",
              "btnText": "Bekijk collectie"
            },
            "desc2": {
              "title": "Waarom kiezen voor schuif?",
              "heading": "Flexibel & functioneel ",
              "description": "Perfect om ruimtes te verdelen, opbergruimte te verbergen of een vloeiende overgang tussen kamers te creëren — onze maatwerk schuifdeuren bieden praktische oplossingen zonder concessies aan design. ",
              "btnText": " Laat je inspireren"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materiaalvariatie",
              "heading": "Jouw stijl, jouw deur ",
              "desc": "  Kies transparant, gedurfd of natuurlijk — van matglas tot warm eiken, onze luxe schuifdeuren zijn een leeg canvas voor jouw visie.",
              "btnText": "Bekijk materialen"
            },
            "row2": {
              "title": "Beslagprecisie",
              "heading": "Soepel & stil",
              "desc": "Premium rails en verdekte geleiders zorgen ervoor dat jouw schuifdeur moeiteloos en geruisloos beweegt, met blijvende duurzaamheid.",
              "btnText": " Bekijk beslagopties"
            },
            "row3": {
              "title": "Designintegratie",
              "heading": "Vloeiende overgang tussen ruimtes",
              "desc": "Combineer schuifdeuren met wandpanelen, kozijnen of bijpassende afwerkingen voor een volledig geïntegreerd interieurconcept.",
              "btnText": "Neem contact op"
            },
          },
        },
        "HingedDoors": {
          "pageName": "Draaideuren",
          "banner": {
            "bannerBG": "",
            "heading": "Draaideuren",
            "subHeading": "Een draaideur is een traditionele deurstijl die aan zijkantscharnieren is gemonteerd en open- en dichtzwaait voor gemakkelijke en betrouwbare toegang.",
            "btnText": "Configureer nu"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Wat is een draaideur?",
              "heading": "Tijdloos & veelzijdig",
              "description": "Draaideuren zijn de klassiekers — aan de zijkant gemonteerd, eenvoudig in gebruik en eindeloos aanpasbaar. Onze luxe draaideuren passen in elke setting, van een minimalistisch loft tot een statig herenhuis.",
              "btnText": "Bekijk collectie"
            },
            "desc2": {
              "title": "Waarom kiezen voor draaideuren?",
              "heading": "Alledaagse luxe",
              "description": "Betrouwbaar, stijlvol en flexibel — maatwerk draaideuren werken prachtig in bijna elke ruimte. Van enkele doorgangen tot imposante dubbele deuren, ze brengen comfort, functionaliteit en elegantie in gelijke mate.",
              "btnText": "Laat je inspireren"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materiaalkeuzes",
              "heading": "Maak het af op jouw manier",
              "desc": "Natuurlijke houtnerf, luxe fineer, gelakte panelen of glazen inzetstukken — onze high-end draaideuren worden volledig afgestemd op jouw interieurstijl en kleurenpalet.",
              "btnText": "Bekijk materialen"
            },
            "row2": {
              "title": "Beslagprecisie",
              "heading": "Maak het onderscheidend",
              "desc": "Handgrepen die opgaan in het ontwerp, of grepen die de show stelen — kies beslag dat de uitstraling en beleving van jouw maatwerk draaideur naar een hoger niveau tilt.",
              "btnText": "Bekijk beslagopties"
            },
            "row3": {
              "title": "Integratie-ideeën",
              "heading": "Voorbij het kozijn",
              "desc": "Combineer jouw draaideur met lijsten, plinten of wandpanelen in dezelfde afwerking voor een uniform en architectonisch samenhangend geheel.",
              "btnText": "Neem contact op"
            },
          },
        },
      },
      // %%%%% FOOTER %%%%%%%
      "footer": {
        "title": "Luxe deuren, voor iedereen bereikbaar.",
        "btnText": "Bekijk onze collectie",
        "Products": "Producten",
        "Materials": "Materialen",
        "Collection": "Collectie",
        "Configuration": "Configuratie",
        "Architects": "Architecten",
        "Zebrano": "Zebrano",
        "Inspiration": "Inspiratie",
        "About": "Over ons",
        "Story": "Ons verhaal",
        "OurTeam": "Ons team",
        "ConsciousCraft": "Bewust Vakmanschap",
        "Service": "Service",
        "Contact": "Contact",
        "FAQ": "Veelgestelde vragen",
        "TermsConditions": "Algemene Voorwaarden",
        "PrivacyPolicy": "Privacybeleid",
        "footNone": "© 2025 Zebrano Studio. Alle rechten voorbehouden."
      },
    }
  },
  de: {
    translation: {
      // %%%%%%%%% HEADER %%%%%%%%%
      "header": {
        "menu": {
          "products": "Produkte",
          "PivotDoors": "Pivot-Türen",
          "SlidingDoors": "Schiebetüren",
          "HingedDoors": "Drehtüren",
          "FlushToWall": "Wandbündige Türen",
          "WallPartition": "Raumtrennwände",
          "Boiserie": "Boiserie",
          "Materials": "Materialien",
          "Collection": "Kollektion",
          "GlassCollection": "Glaskollektion",
          "VeneerCollection": "Furnierkollektion",
          "3DCollection": "3D-Kollektion",
          "AtelierCollection": "Atelier-Kollektion",
          "Configurator": "Konfigurator",
          "Inspiration": "Inspiration",
          "Architects": "Architekten",
          "Zebrano": "Zebrano",
          "OurStory": "Unsere Geschichte",
          "MeetTheMakers": "Lernen Sie die Macher kennen",
          "ConsciousCraft": "Bewusstes Handwerk",
          "Service": "Service",
          "Contact": "Kontakt",
          "ConfigureNow": "Jetzt konfigurieren",

        }
      },
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
            "description": "Erstklassige Handwerkskunst und seltene Materialien — für Projekte jeder Größe zugänglich gemacht."
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
          "title": "“Leidenschaft für Holz. Präzision im Design.”",
          "btnTex": "Kollektion ansehen",
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
          "card1": {
            "title": "Türtypen",
            "desc": "Entdecken Sie unsere vielfältige Auswahl exklusiver Holztüren, die jeweils besondere Vorteile in Stil, Funktionalität und Raumnutzung bieten. Von repräsentativen Eingängen bis zu nahtlosen Raumübergängen – wir haben die perfekte Lösung für Ihr Zuhause.",
            "btnText": "Konfigurieren Sie Ihre Tür →"
          },
          "card2": {
            "title": "Pivot-Türen",
            "desc": "Eine Pivot-Tür dreht sich nicht wie eine klassische Tür an seitlichen Scharnieren, sondern um einen Drehpunkt im Boden und in der Decke. Dadurch kann sie sowohl nach innen als auch nach außen geöffnet werden und bewegt sich sanft und beinahe schwebend durch den Raum.",
            "btnText": "View Collection"
          },
          "card3": {
            "title": "Schiebetüren",
            "desc": "Unsere maßgefertigten Schiebetüren gleiten mühelos auf einer Schiene und eignen sich ideal für platzsparende Grundrisse und modernes Interieur. Perfekt als elegante Raumteiler, Schranklösungen oder für fließende Übergänge zwischen Räumen.",
            "btnText": "View Collection"
          },
          "card4": {
            "title": "Drehtüren",
            "desc": "Die klassische Tür, die sich auf seitlich montierten Scharnieren öffnet und schließt.",
            "btnText": "View Collection"
          },
        },
        "InspirationInsight": {
          "heading": "Inspiration & Einblicke",
          "title": "Gefertigt aus dem feinsten Holz",
          "description": "Holz ist für uns mehr als nur ein Material — es ist unsere Leidenschaft. Jede Maserung erzählt eine Geschichte. Jede Oberfläche wird mit Liebe vollendet."
        }

      },
      // =====productPage===
      "ProductsPage": {
        "pageName": "Produkte",
        // --banner--
        "banner": {
          "bannerBg": "",
          "title": "Starten Sie Ihre Zebrano-Reise",
          "desc": "Wir bieten zwei Möglichkeiten, um zu beginnen – wählen Sie den Weg, der am besten zu Ihnen passt.",
          "btnTxt": "See collection",
        },
        // --CabinetaryOption--
        "CabinetaryOption": {
          "option1": {
            "title": "Option 1:",
            "heading": "Entdecken Sie unsere Kollektionen",
            "desc": "Sie wissen nicht, wo Sie anfangen sollen? Stöbern Sie durch unsere kuratierten Glass-, Veneer-, 3D- und Atelier-Kollektionen, um die Designs, Materialien und Oberflächen zu entdecken, die Sie inspirieren. Wir begleiten Sie bei der Wahl, die perfekt zu Ihrem Stil und Raum passt.",
            "btnText": "Kollektion ansehen"
          },
          "option2": {
            "title": "Option 2:",
            "heading": "Konfigurieren Sie Ihre eigene Tür",
            "desc": "Sie wissen schon genau, was Sie wollen? Nutzen Sie unseren Konfigurator, um Türtyp, Materialien, Beschläge und Details auszuwählen – und wir fertigen sie nach Ihren Vorgaben.",
            "btnText": "Jetzt konfigurieren"
          },
          "row1": {
            "title": "Wählen Sie Ihren Türtyp.",
            "heading": " Setzen Sie ein Statement.",
            "desc": "Wählen Sie aus unseren beliebtesten Pivot-, Schiebe- oder Drehtüren – vorgefertigt für Standardöffnungen und sofort installierbar. Perfekt für schnelle Upgrades oder Projekte mit engem Zeitplan.",
            "btnText": "Kollektion ansehen"
          },
          "row2": {
            "title": "Wählen Sie Ihr Material.",
            "heading": "Machen Sie es zu Ihrem eigenen.",
            "desc": "Von edlen Furnieren über Massivholz und strukturiertes Glas bis hin zu Natursteineinlagen – wir fertigen Ihr gewähltes Design exakt nach den Maßen Ihres Raums für eine makellose Passform.",
            "btnText": "Kollektion ansehen"
          },
          "row3": {
            "title": "Bestimmen Sie Ihren Griffstil.",
            "heading": " Wählen Sie Ihren Griff oder integrierten Griff.",
            "desc": "Wählen Sie zwischen vollständig integrierten Griffen, markanten kontrastierenden Metallen oder passenden Materialoberflächen, um Ihre Tür so einzigartig zu machen wie Ihr Interieur.",
            "btnText": "Kollektion ansehen"
          },
          "row4": {
            "title": "Architektonische Integration.",
            "heading": "Lassen Sie Ihre Tür nahtlos in die Architektur übergehen.",
            "desc": "Von Raumteilern und Wandverkleidungen bis hin zu vollständig integrierten Rahmen – wir schaffen Türen, die Teil der Wand selbst werden und ein einheitliches, durchgängiges Design in Ihrem gesamten Raum ermöglichen.",
            "btnText": "Kollektion ansehen"
          },
        },
        // &&&&&&& PIVOT DOOR &&&&&&&&
        "Pivot": {
          "pageName": "Pivot-Türen",
          "banner": {
            "bannerBG": "",
            "heading": "Pivot-Türen",
            "subHeading": "Pivot-TürEine Pivot-Tür ist ein elegantes, modernes Türdesign, das sich um ein zentrales oder versetztes Pivot-Scharnier dreht und so ein sanftes und einzigartiges Öffnen mit zeitgemäßem Look ermöglicht.",
            "btnText": "Jetzt konfigurieren"
          },
          "DoorDescription": {
            "ddesc1": {
              "title": "Was ist eine Pivot-Tür? ",
              "heading": "Ein Statement in Bewegung",
              "description": "Vergessen Sie die gewöhnliche Schwingtür – luxuriöse Pivot-Türen drehen sich um einen zentralen Punkt und schaffen eine sanfte, schwerelose Bewegung, die sich mehr wie ein Design-Erlebnis anfühlt als nur wie ein Öffnen. Überdimensioniert oder schwer? Kein Problem – unsere maßgefertigten Pivot-Türen bewältigen das mühelos.",
              "btnText": "Kollektion ansehen"
            },
            "ddesc2": {
              "title": "Warum Pivot wählen?",
              "heading": " Mutig, nahtlos, funktional",
              "description": "Eine Pivot-Tür ist nicht nur ein Eingang – sie ist ein Statement. Perfekt für breite Öffnungen schaffen moderne Pivot-Türen ein Gefühl von Ankunft, während die Bewegung mühelos und perfekt ausbalanciert bleibt.",
              "btnText": "Inspiration finden"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Material ­möglichkeiten ",
              "heading": "Mach Ihren Wünschen Gefertigt",
              "desc": "gefertigtVon tiefem Nussbaum über leichte Glaspaneele bis hin zu Steineinlagen – unsere High-End-Pivot-Türen können nahezu jeden Look tragen, den Sie sich vorstellen. Jede einzelne wird präzise gefertigt, abgestimmt auf Ihren Stil, Ihre Materialvorlieben und Ihre architektonische Vision.",
              "btnText": "Materialien ansehen"
            },
            "row2": {
              "title": "Beschläge & Details",
              "heading": "unsichtbare Präzision",
              "desc": "Wir verstecken die Technik – verdeckte Pivot-Scharniere, flächenbündige Griffe und Soft-Close-Systeme – sodass Sie nur reines, ununterbrochenes Design in jeder maßgefertigten Pivot-Tür sehen.",
              "btnText": "Beschlagoptionen ansehen"
            },
            "row3": {
              "title": "Integrations­optionen",
              "heading": "von der Tür zum Designelement",
              "desc": "Kombinieren Sie Ihre Pivot-Tür mit passenden Wandpaneelen, maßgefertigten Rahmen oder integrierten Regalen für eine nahtlose architektonische Integration in Ihrem gesamten Interieur.",
              "btnText": "Materialien ansehen"
            },
          },
        },
        "SlidingDoor": {
          "pageName": "Schiebetür",
          "banner": {
            "bannerBG": "",
            "heading": "Schiebetür",
            "subHeading": "Eine Schiebetür bewegt sich horizontal entlang einer Schiene und bietet so eine platzsparende und moderne Lösung für Innen- und Außenöffnungen.",
            "btnText": "Jetzt konfigurieren"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Was ist eine Schiebetür?",
              "heading": "Platzsparende Eleganz",
              "description": "  Schiebetüren gleiten entlang einer Schiene statt aufzuschwingen, was sie ideal für platzbewusste Grundrisse macht. Unsere modernen Schiebetüren eignen sich hervorragend als markante Raumteiler oder elegante Schranklösungen.",
              "btnText": "Kollektion ansehen"
            },
            "desc2": {
              "title": "Warum Schiebetür wählen?",
              "heading": "Flexibel & funktional ",
              "description": "Perfekt zum Trennen von Räumen, Verbergen von Stauraum oder für einen nahtlosen Übergang zwischen Räumen – unsere maßgefertigten Schiebetüren bieten praktische Lösungen ohne Kompromisse im Design.",
              "btnText": " Inspiration finden"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materialvielfalt",
              "heading": "Ihr Stil, Ihre Tür",
              "desc": "Transparent, markant oder natürlich – von satiniertem Glas bis zu warmem Eichenholz, unsere luxuriösen Schiebetüren sind eine leere Leinwand für Ihre Ideen. ",
              "btnText": "Materialien ansehen"
            },
            "row2": {
              "title": "Beschlagspräzision",
              "heading": "Sanft & leise ",
              "desc": "Hochwertige Schienen und verdeckte Laufrollen gewährleisten, dass sich Ihre Schiebetür mühelos und geräuschlos bewegt – mit dauerhafter Haltbarkeit.",
              "btnText": "Beschlagoptionen ansehen"
            },
            "row3": {
              "title": "Designintegration",
              "heading": "Fließender Übergang zwischen",
              "desc": "RäumenKombinieren Sie Schiebetüren mit Wandpaneelen, Rahmen oder passenden Oberflächen für ein vollständig integriertes Interior-Design-Konzept.",
              "btnText": "Kontakt aufnehmen"
            },
          },
        },
        "HingedDoors": {
          "pageName": "Drehtüren",
          "banner": {
            "bannerBG": "",
            "heading": "Drehtüren",
            "subHeading": "Eine Drehtür ist ein traditioneller Türstil, der an Seitenschanieren montiert ist und sich zum einfachen und zuverlässigen Zugang öffnen und schließen lässt.",
            "btnText": "Jetzt konfigurieren"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Was ist eine Drehtür?",
              "heading": "Zeitlos & vielseitig",
              "description": "Drehtüren sind die Klassiker – seitlich montiert, einfach zu bedienen und unbegrenzt anpassbar. Unsere luxuriösen Drehtüren passen in jedes Ambiente, vom minimalistischen Loft bis zum stattlichen Stadthaus.",
              "btnText": "Kollektion ansehen"
            },
            "desc2": {
              "title": "Warum Drehtüren wählen?",
              "heading": "Alltäglicher Luxus",
              "description": "Zuverlässig, stilvoll und flexibel – maßgefertigte Drehtüren funktionieren wunderbar in fast jedem Raum. Von einzelnen Öffnungen bis zu eindrucksvollen Doppeltüren vereinen sie Komfort, Funktion und Eleganz in gleichem Maße.",
              "btnText": "Inspiration finden"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materialauswahl",
              "heading": "Gestalten Sie es nach Ihrem Geschmack",
              "desc": "Natürliche Holzmaserung, edle Furniere, lackierte Paneele oder Glaseinsätze – unsere hochwertigen Drehtüren werden perfekt auf Ihren Einrichtungsstil und Ihre Farbpalette abgestimmt.",
              "btnText": "Materialien ansehen"
            },
            "row2": {
              "title": "Beschlagspräzision",
              "heading": "Machen Sie es unverwechselbar",
              "desc": "Griffe, die sich dezent einfügen, oder Griffe, die ins Auge fallen – wählen Sie Beschläge, die das Aussehen und Gefühl Ihrer maßgefertigten Drehtür aufwerten.",
              "btnText": "Beschlagoptionen ansehen"
            },
            "row3": {
              "title": "Integrationsideen",
              "heading": "Über den Rahmen hinaus",
              "desc": "Kombinieren Sie Ihre Drehtür mit Leisten, Sockeln oder Wandpaneelen in derselben Ausführung für ein einheitliches, architektonisch stimmiges Erscheinungsbild.",
              "btnText": "Kontakt aufnehmen"
            },
          },
        },
      },
      // %%%%% FOOTER %%%%%%%
      // %%%%% FOOTER %%%%%%%
      "footer": {
        "title": "Luxustüren, für alle zugänglich.",
        "btnText": "Kollektion ansehen",
        "Products": "Produkte",
        "Materials": "Materialien",
        "Collection": "Kollektion",
        "Configuration": "Konfiguration",
        "Architects": "Architekten",
        "Zebrano": "Zebrano",
        "Inspiration": "Inspiration",
        "About": "Über uns",
        "Story": "Unsere Geschichte",
        "OurTeam": "Unsere Geschichte",
        "ConsciousCraft": "Bewusstes Handwerk",
        "Service": "Service",
        "Contact": "Kontakt",
        "FAQ": "Häufige Fragen",
        "TermsConditions": "Allgemeine Geschäftsbedingungen",
        "PrivacyPolicy": "Datenschutzerklärung",
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