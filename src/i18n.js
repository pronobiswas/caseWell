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
        "FlushToWall": {
          "pageName": "Flush-to-Wall",
          "banner": {
            "bannerBG": "",
            "heading": "Flush-to-Wall Doors (Seamless Series)",
            "subHeading": "Flush-to-wall doors — also called hidden doors, concealed frame doors, or invisible doors — are the ultimate in minimalist architecture. At Zebrano Studio, we craft these doors to sit perfectly level with your wall, so the frame and hinges completely disappear. The result? A clean, uninterrupted surface that enhances the beauty of your interior without visual clutter.",
            "btnText": "See Collection"
          },
          "DoorDescription": {
            "desc1": {
              "title": "What is a Flush-to-Wall Door?",
              "heading": "The Art of Disappearing ",
              "description": "  Flush-to-wall doors, also called hidden or invisible doors, sit perfectly level with your wall — no visible frame, hinges, or trim. They blend seamlessly into your architecture for a clean, uninterrupted surface. ",
              "btnText": "See Collection"
            },
            "desc2": {
              "title": "Why Choose Flush-to-Wall?",
              "heading": "Minimalism. Elevated",
              "description": "These doors are ideal for interiors where design continuity is key. Whether painted to match the wall or finished as a bold statement, flush-to-wall doors keep the focus on the space, not the hardware.",
              "btnText": "Get Inspired"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Material Possibilities",
              "heading": "Made for Your Space",
              "desc": " From premium veneers to smooth lacquer, textured glass, or stone inlays, every flush-to-wall door is custom-built to match your dimensions and design vision.",
              "btnText": "View Materials"
            },
            "row2": {
              "title": "Hardware & Details",
              "heading": "Hidden Technology",
              "desc": "Concealed hinges, magnetic locks, and precision frames are engineered for flawless function — all while staying out of sight.",
              "btnText": "See Hardware Option"
            },
            "row3": {
              "title": "Integration Options",
              "heading": "One Continuous Surface ",
              "desc": "Combine your flush-to-wall door with matching wall panels or integrated shelving for a seamless architectural feature that flows from one surface to the next.",
              "btnText": "View Materials"
            },
          },
        },
        "WallPartitions": {
          "pageName": "Room Dividers & Wall Partitions",
          "banner": {
            "bannerBG": "",
            "heading": "Room Dividers & Wall Partitions",
            "subHeading": "Our custom room dividers are designed to shape spaces without sacrificing light, flow, or style. Whether fixed, sliding, folding, or glass, each wall partition is crafted to match your doors and finishes for a unified, high-end look. Perfect for open-plan living, offices, or hospitality spaces, they add privacy, structure, and elegance — all tailor-made to your dimensions and interior vision.",
            "btnText": "See Collection"
          },
          "DoorDescription": {
            "desc1": {
              "title": "What is a Room Divider?",
              "heading": "Style in Every Division ",
              "description": " Room dividers are custom-built, non-load-bearing panels that define spaces while maintaining your design vision. Whether solid, glass, or mixed-material, they add structure without closing off light or flow.",
              "btnText": "See Collection"
            },
            "desc2": {
              "title": "Why Choose Room Dividers?",
              "heading": "Flexible, Functional, Beautiful ",
              "description": "Perfect for open-plan living, room dividers offer privacy, sound control, and style — all while integrating perfectly with your existing finishes.",
              "btnText": "Get Inspired"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Material Possibilities",
              "heading": "Designed Around You ",
              "desc": "Choose from wood, veneer, lacquer, frosted glass, clear glass, or combinations to create a partition that matches your doors and interior style.",
              "btnText": "View Materials"
            },
            "row2": {
              "title": "Hardware & Details",
              "heading": "Movement Made Easy ",
              "desc": "For sliding or folding partitions, we use precision tracks and soft-closing systems to ensure smooth operation without compromising design.",
              "btnText": "See Hardware Option"
            },
            "row3": {
              "title": "Integration Options",
              "heading": "Unified Interiors ",
              "desc": " Coordinate your partitions with Zebrano doors, wall paneling, or flush-to-wall systems for a continuous, harmonious look throughout your space.",
              "btnText": "Get in Contact"
            },
          },
        },
        "Boiserie": {
          "pageName": "Boiserie",
          "banner": {
            "bannerBG": "",
            "heading": "Boiserie Wall Paneling",
            "subHeading": "Boiserie is decorative wall paneling that transforms plain walls into architectural features. At Zebrano Studio, our custom boiserie ranges from classic, ornate styles to sleek, minimal cladding — all designed to match your doors and interiors for a cohesive, high-end look.",
            "btnText": "See Collection"
          },
          "DoorDescription": {
            "desc1": {
              "title": "What is Boiserie?",
              "heading": "From Classic to Contemporary   ",
              "description": "Originally a hallmark of French architecture, boiserie brings elegance and depth to interiors. Today, it can be tailored to suit modern minimalism, timeless tradition, or bold design statements.",
              "btnText": "See Collection"
            },
            "desc2": {
              "title": "Why Choose Boiserie?",
              "heading": "Architectural Continuity",
              "description": " Boiserie adds texture, rhythm, and luxury to walls. It can frame doors, integrate with flush-to-wall systems, or stand alone as a striking feature, creating seamless design continuity throughout your space.",
              "btnText": "Get Inspired"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Material Possibilities",
              "heading": "Designed to Match",
              "desc": " From fine wood veneers to lacquered panels, textiles, or stone accents — our boiserie is always custom-built to harmonize with your interior style and dimensions.",
              "btnText": "View Materials"
            },
            "row2": {
              "title": "Hardware & Details",
              "heading": "Precision in Every Line  ",
              "desc": " Invisible mounting systems and seamless detailing ensure that your boiserie feels like part of the architecture itself, not an addition.",
              "btnText": "See Hardware Option"
            },
            "row3": {
              "title": "Integration Options",
              "heading": "Walls That Tell a Story",
              "desc": "Combine boiserie with Zebrano doors, partitions, or flush-to-wall systems for a unified architectural concept that turns walls into design statements.",
              "btnText": "Get in Contact"
            },
          },
        },
        "Materials": {
          "pageName": "Materials",
          "banner": {
            "bannerBG": "",
            "heading": "Materials That Shape Our Designs",
            "subHeading": "At Zebrano Studio, every detail begins with the right material. From timeless woods and luxurious veneers to glass, stone, and metals — we combine craftsmanship with innovation. Each choice defines the character, durability, and beauty of your interior.",
            "btnText": "See Collection"
          },
        },
      },
      // ====contactPage====
      "contact": {
        "pageName": "Contact Us",
        "header": {
          "heading": "Contact Us",
          "text1": "At Zebrano Studio, we started with a simple idea: to bring luxurious, tailor-made doors within reach — without limits. Every home deserves a touch of design, and every space should tell a story.",
          "text2": "Whether you're dreaming big, working on a unique project, or just curious about the possibilities — we’d love to hear from you. Use the form below to get in touch, especially if you have special requests or ideas beyond the ordinary.",
        },
        "form": {
          "label": {
            "Name": "Name",
            "Email": "Email",
            "PhoneNumber": "Phone Number",
            "ContactReason": "Contact reason",
            "Consumer": "Consumer",
            "Message": "Message",
          },
          "select": {
            "optionOne": {
              "option1": "I’d like a quote for a special custom door"
            },
            "optionTwo": {
              "option1": "Business"
            },
          },
          "Submit": "Submit"
        }
      },
      // =====Inspiration====
      "Inspiration": {
        "pageName": "Inspiration",
        "banner": {
          "heading": "Explore our work",
          "description": "Our Zebrano Studio doors are designed to elevate your space, offering the bespoke luxury usually reserved for architectural masterpieces. See how we make exclusivity accessible.",
          "titleOne": "More than 1000 configurations",
          "titleTwo": "Recommended by interior designers",
        },
        "btnText": "See more",
      },
      // =====Architects=======
      "Architects": {
        "pageName": "Inspiration",
        "ArchitectsBanner": {
          "title": "Join the story of Zebrano Studio",
          "btnText": "Join now",
        },
        "PartnerSupport": {
          "partnerHeading": {
            "title": "Partner-First Support.",
            "desc": "We built Zebrano because trade professionals deserve a supplier who champions their success, not competes for their clients. You keep relationships, earn the margins you deserve, and focus on what you do best.",
            "btnText": "Partner with Zebrano",
          },
          "professionalDemand": {
            "heading": "Are you a designer who truly dares to think differently?",
            "textOne": "Do you sometimes feel your creativity is held back by what’s possible — whether it’s materials, finishes, or production limits? You’re not alone. We get it.",
            "textTwo": "At Zebrano, we believe great design should never be limited by execution. That’s why we offer you unlimited possibilities to explore, experiment, and bring your boldest ideas to life — with our full support every step of the way.",
            "textThree": "If you’re ready to work with a partner who values your vision as much as you do, and who’s committed to making the impossible possible, then you’ve come to the right place."
          },
        },
        "Conversation": {
          "title": "Let’s break boundaries together. Join our Partner Program and start creating without limits.",
          "heading": "Let’s Get in Touch and Start a Conversation. ",
          "desc": "We’d love to hear about your ideas, projects, or questions. No pressure — just a friendly chat to explore how we can create something amazing together. Reach out anytime!",
          "btnText": "Partner with Zebrano",
        },
        "CasewellPartner": {
          "heading": "What you get as a Zebrano Partner:",
          "subHeading": "",
          "card": {
            "title1": "True Wholesale Pricing",
            "desc1": "We provide genuine wholesale pricing to all our partners, empowering you to grow your business profitably and competitively. Because when you succeed, we succeed.",
            "title2": "Unlimited Design Possibilities",
            "desc2": "Go wild with your ideas. Whether it’s unique shapes, mixed materials, or custom finishes, we don’t set limits — you dream it, we make it happen.",
            "title3": "Full In-House Design Support",
            "desc3": "Enjoy direct access to our expert design team who guide you every step of the way. We reduce your workload and stress, so you can focus on what you do best — designing amazing spaces.",
            "title4": "Security & Reliability Through Open Communication",
            "desc4": "At Zebrano, communication is our foundation. We keep you informed, involved, and supported throughout the process, so you experience complete peace of mind on every project.",
            "title5": "Full-Service Support",
            "desc5": "We’re not just a materials provider — we’re your backend support team. You get the benefits of design guidance, showroom access, and fulfillment coordination as if you had it all in-house, but without the overhead. That means less stress, fewer errors, and more time to focus on what you do best.",
          },
        },

      },
      // ==== zebrano/aboutus =====
      "Zebrano": {
        "pageName": "Zebrano",
        "ZebranoBanner": {
          "headingOne": "Making luxury",
          "headingTwo": " accessible to",
          "headingThree": "everyone",
          "zebranoText": "At Zebrano Studio, we believe great design should be within everyone's reach. From bespoke doors to fully integrated wall features, our mission is to bring luxury craftsmanship and architectural beauty into every type of home – from city apartments to countryside villas.",
          "texts": ["design", "doors", "interior"]
        },
        "ZebranoJourney": {
          "title": "From one door to endless possibilities",
          "heading": "The Zebrano Studio Journey",
          "desc": "What began as a single custom door project has evolved into a full collection of pivot, sliding, hinged, and flush-to-wall designs that redefine how interiors feel. Inspired by luxury hotels and architectural details, we've made it our mission to create doors and wall features that combine premium materials with personal design freedom.",
          "btnText": "See More",
        },
        "DraggableSlider": {
          "heading": "Meet the faces behind Zebrano Studio",
          "title": "Our Team",
          "description": "Behind every seamless door is a story and a few perfectionists with sawdust in their hair. Get to know the minds (and hands) that bring Zebrano Studio to life in Meet the Makers.",
          "person": {
            "Robbert": {
              "name": "Robbert",
              "designation": "Interim Finance",
              "details": "Coming from a finance consulting background with a dose of creativity, Robbert decided to combine his talents to help Zebrano grow. As one of the brothers who started the Zebrano journey, he bridges strategy and design, ensuring every business decision aligns with our creative vision.",
            },

            "Mathijs": {
              "name": "Mathijs",
              "designation": "Owner & Woodworker",
              "details": "With more than 15 years of experience in construction management and large-scale projects, Mathijs built a reputation for precision and leadership. From a young age, his passion for woodworking was evident, and over time he transitioned from running a midsize construction company to founding Zebrano Studio — where craftsmanship meets luxury design. Quote: “From wood grains to grand designs — every detail tells a story.” ",
            },

            "Rick": {
              "name": "Rick",
              "designation": "Wood Specialist",
              "details": "Rick is our true specialist in wood. Trained in carpentry and woodworking, he knows every detail about the craft — from selecting the right species to cutting with millimeter precision. His deep knowledge ensures that each Zebrano piece is not only beautiful, but technically flawless.",
            },

            "Dave": {
              "name": "Dave ",
              "designation": "Marketing & Sales",
              "details": "Dave brings a creative commercial edge to Zebrano Studio. With experience in brand storytelling and customer relations, he ensures that our vision reaches both homeowners and architects. He is the link between our workshop and the world, making sure every client feels guided and inspired throughout the process.",
            },

            "Peter": {
              "name": "Peter",
              "designation": "Woodworker",
              "details": "Peter represents the heart of our workshop. Skilled in both modern techniques and traditional joinery, he brings an artisan’s patience and precision to every door. Known for his steady hands and meticulous eye, Peter ensures that every piece leaving the studio carries the Zebrano standard.",
            },
          },
        },
        "Sustainability": {
          "title": "Sustainability",
          "heading": "Craftsmanship that cares",
          "desc": "We choose sustainable materials, work with responsible suppliers, and build pieces meant to last for decades. Because great design should never come at the planet's expense.",
          "btnText": "See More",
        },
        "ServicesThasFitYourNeed": {
          "title": "Service that fits your needs",
          "desc": "Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details – so you feel confident from the first conversation to the final installation.",
          "btn": "Service",
          "FAQ": {
            "heading": "Got questions? You'll find plenty of answers in our FAQ, including:",
            "faqs": [
              {
                question: "What are standard production lead times?",
                answer: `– Doors (pivot/sliding/hinged) 6–8 weeks; Flush-to-Wall 8–10 weeks; Wall partitions 6–8 weeks; Boiserie 8–10 weeks.`,
              },
              {
                question: "How customisable are your doors?",
                answer: "– Sizes, finishes, glass types, edge details, hardware sets, and options (e.g., soft-close, pivot closer, seals) are configurable. Ultra-custom builds move to a quote path.",
              },
              {
                question: "Do you supply hardware?",
                answer: "– Yes—hinges, pivots, sliders, handles, and seals as specified; third-party hardware by agreement after compatibility checks.",
              },
              {
                question: "What warranty do you offer?",
                answer: "– 2-year warranty on doors/materials (manufacturing defects/structural integrity) and 6-month warranty on installation workmanship (when performed by Zebrano).",
              },
              {
                question: "Do you install as well?",
                answer: "– Yes—optional installation in NL. Includes fitting Zebrano frames/leafs/hardware, alignment, clearances, and functional checks; excludes structural works, electricals, plastering/painting, and third-party materials.",
              },
            ]
          }
        },
      },
      // ======OurStory==========
      "OurStory": {
        "OurStoryBanner": {
          "heading": "A journey through Southeast Asia",
          "desc": "In 2015, as two brothers backpacking through Southeast Asia, we were struck by the craftsmanship we encountered everywhere. From bustling markets to serene temples, wood was transformed into objects of remarkable beauty — from intricate carvings to refined furniture. The natural elegance of the material, combined with the dedication of local artisans, planted the first seed of what would later become Zebrano Studio.",
          "btnText": "",
        },
        "AboutUsTimeline": {},
      },
      // ====Meet the Makers=====
      "MeetTheMakers" : {
        "banner" : {
          "heading1":"Created by our",
          "heading2":"perfected in",
          "heading3":"production.",
          "desc" : "Real hands. Real sawdust. Unreal results. From first sketch to final fit, we design, prototype, and build under one roof – so every millimeter adds up and every door feels effortlessly right.",
          "typedText" : ["designers","people","makers"],
        },
        "AccessibleBeautiful" : {
          "row1":{
            "title1" : "ACCESSIBLE .",
            "title2" : "BEAUTIFUL .",
            "desc" : `"I've always felt that good design shouldn't hide behind velvet ropes. At Zebrano, I want everyone to enjoy the same beautiful doors and details usually seen only in luxury hotels – right at home." `,
            "name" : "Mathijs",
            "designetion" : "– Founder and Designer, Zebrano Studio",
          },
          "row2" : {
            "title" : "We like to keep things close to home.",
            "desc" : `Our doors are made right here in the Netherlands, shaped by makers who know their wood almost as well as their morning coffee. It's a mix of tradition, precision, and a little Dutch stubbornness that refuses to settle for "good enough." The result? Craft that feels local, but looks like it belongs anywhere in the world.`,
            "btnText" : "Discover materials",
          },
          "row3" : {
            "title1" : "Are you a designer? ",
            "title2" : "Need advice?",
            "desc1" : "Our team is ready to help you discover all the possibilities.",
            "desc2" : "Our team is ready to help you discover all the possibilities.",
            "btnText1" : "Discover materials",
            "btnText2" : "Get in contact",
          },
        },
      },
      // ========ConsciousNcrafts=========
      "ConsciousNcrafts": {
        "ConsciousNcraftsBanner": {
          "heading": "Conscious Craft",
          "desc": "Simple principles that guide how we work with care, respect, and purpose.",
          "btnText": "Get Started",
        },
        "ConsciousNCraftTimeline": {
          "row1": {
            "title": "Working with Nature, Not Against It",
            "desc": "We believe that working with natural materials comes with a responsibility. Wood is not just a resource to us — it's a living story of time, climate, and place. That’s why we only work with suppliers who share our values: FSC-certified wood, sustainably managed forests, and a focus on regeneration over depletion.",
            "imgSrc": "",
          },

          "row2": {
            "title": "Respect for the Material",
            "desc": "Each piece of wood is unique — its grain, its texture, its imperfections. We design around that individuality, not in spite of it. Instead of forcing uniformity, we let the material speak. This reduces waste and honors the beauty of natural variation. We don’t over-process. We don’t over-paint. We bring out what’s already there.",
            "imgSrc": "",
          },
          "row3": {
            "title": "Design with Longevity in Mind",
            "desc": "Fast furniture and temporary design aren’t part of our philosophy. We create doors meant to last a lifetime — not just in function, but in relevance. Timeless design and high-quality craftsmanship mean fewer replacements, fewer resources wasted, and a lighter impact on the planet over time.",
            "imgSrc": "",
          },
          "row4": {
            "title": "Craftsmanship as a Sustainable Act",
            "desc": "Sustainability isn’t only in the materials — it’s in the way we make. By producing locally, reducing transport footprints, and building in small series instead of mass production, we stay close to our process and in control of our impact. Every decision we make is weighed not just for efficiency, but for ethics.",
            "imgSrc": "",
          },
          "row5": {
            "title": "Pride in Every Detail",
            "desc": "We’re proud of what we make — not just because it looks good, but because it feels good to stand behind something honest. A door is not just a functional object. It’s the first touchpoint of a home. And we believe that when it’s made with care, from a material as noble as wood, it deserves that extra bit of reverence.",
            "imgSrc": "",
          },
        },
        "additionalText": "At Zebrano Studio, we don't just make standard doors; we create true works of art that tell a story and last a lifetime. Ready to realize your dream door? We'd love to help you!",
        "btnText1": "Collection",
        "btnText2": "Configure your own",
      },
      // ======privecyPolicy=========
      "privecyPolicy": {
        "header": {
          "heading": "Privacy Policy for Zebrano Studio",
          "EffectiveDate": "Effective Date :",
          "date": "29 July 2025",
          "desc": `Alright, we know it's not the most thrilling read, but this stuff is super important (and mandatory!). At Zebrano Studio, we're all about beautiful wooden doors, not complicated legal jargon. However, protecting your privacy is a big deal to us. So, while it might be a bit "boring," we want to be crystal clear about how we handle your personal data. Rest assured, we comply with all the rules and regulations, including the General Data Protection Regulation (GDPR) (EU) 2016/679 and applicable Dutch privacy legislation. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you visit our website and use our services.`,
          "whoWeAre": {
            "heading": "Types of Personal Data We Collect",
            "desc": "We may collect the following types of personal data:",
            "title": "Zebrano Studio",
            "address": "Herikebrink 37 7544ER Enschede",
            "country": "The Netherlands",
            "email": "Info@zebranostudio.com",
            "phone": "+31 6 42 99 70 18",
          },
        },
        "TypesOfPersonalData": {
          "title": "Types of Personal Data We Collect",
          "desc": "We may collect the following types of personal data:",
          "row1": {
            "text1": "Contact Information:",
            "text2": "Name, email address, phone number, postal address (for quotes, orders, and delivery).",
          },
          "row2": {
            "text1": "Communication Data:",
            "text2": "Information you provide when you contact us via email, phone, contact forms, or social media.",
          },
          "row3": {
            "text1": "Order and Transaction Data: ",
            "text2": "Details about products and services you have purchased from us, payment information (though we typically use third-party payment processors who handle payment details directly).",
          },
          "row4": {
            "text1": "Website Usage Data: ",
            "text2": " Information about how you use our website, including your IP address, browser type, operating system, referral sources, pages viewed, and the duration of your visit. This is typically collected through cookies and similar technologies.",
          },
          "row5": {
            "text1": "Marketing Preferences: ",
            "text2": "Your preferences regarding receiving marketing communications from us.",
          },
        },
        "HowWeCollect": {
          "title": "How We Collect Your Personal Data",
          "desc": "We collect personal data through various methods:",
          "row1": {
            "text1": "Directly from You: ",
            "text2": "When you fill out contact forms, request a quote, place an order, subscribe to our newsletter, or communicate with us directly.",
          },
          "row2": {
            "text1": "Automatically",
            "text2": "Through cookies and similar technologies when you browse our website.",
          },
        },
        "Purposes": {
          "heading": "Purposes and Legal Basis for Processing Your Personal Data",
          "desc": "We process your personal data for the following purposes and based on the specified legal grounds under GDPR:",
          "ToProvide": {
            "title": "To Provide Services and Fulfill Contracts:",
            "text1": "Processing your inquiries and providing quotes.",
            "text2": "Processing and fulfilling your orders for doors and other products.",
            "text3": "Managing deliveries and installations.",
            "text4": "Providing customer support.",
            "text5": "Legal Basis: Performance of a contract or to take steps at your request prior to entering into a contract (GDPR Art. 6(1)(b)).",
          },
          "ToCommunicate": {
            "title": "To Communicate with You:",
            "text1": "Responding to your questions and requests.",
            "text2": "Sending important service-related updates (e.g., order status).",
            "text3": "Legal Basis: Performance of a contract (Art. 6(1)(b)) or legitimate interest (Art. 6(1)(f)) in effective communication.",
          },
          "ForMarketing": {
            "title": "For Marketing Purposes:",
            "text1": "Sending you newsletters, promotions, and information about our products and services that may be of interest to you, where you have opted in.",
            "text2": "Legal Basis: Your consent (GDPR Art. 6(1)(a)). You can withdraw your consent at any time.",
          },
          "ToImprove": {
            "title": "To Improve Our Website and Services:",
            "text1": "Analyzing website usage to understand user behavior and improve website functionality and user experience.",
            "text2": "Developing new products and services.",
            "text3": "Legal Basis: Legitimate interest (GDPR Art. 6(1)(f)) in improving our business and offerings.",
          },
          "ForLegal": {
            "title": "For Legal Compliance and Protection:",
            "text1": "Complying with legal obligations (e.g., tax, accounting).",
            "text2": "Protecting our rights, property, or safety, and that of our customers or others.",
            "text3": "Preventing fraud and ensuring security.",
            "text4": "Legal Basis: Legal obligation (GDPR Art. 6(1)(c)) or legitimate interest (Art. 6(1)(f)) in protecting our business.",
          },
          "CookiePolicy": "Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and for marketing purposes. You can manage your cookie preferences through your browser settings. For more detailed information, please refer to our separate Cookie Policy.",

        },
        "Sharing": {
          "title": "Sharing Your Personal Data",
          "desc": "We will not sell, rent, or lease your personal data to third parties. We may share your personal data with:",
          "row1": {
            "text1": "Service Providers: ",
            "text2": "Third-party companies that perform services on our behalf, such as payment processing, website hosting, analytics, marketing, and delivery services. These providers are contractually obligated to protect your data and only use it for the purposes for which it was provided.",
          },
          "row2": {
            "text1": "Legal Requirements:",
            "text2": "If required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency).",
          },
          "row3": {
            "text1": "Business Transfers:",
            "text2": "In connection with a merger, acquisition, or sale of all or a portion of our assets, your personal data may be transferred as part of that transaction.",
          },
        },
        "International": {
          "title": "International Data Transfers",
          "desc": "As Zebrano Studio operates within the EU, your personal data will primarily be processed within the European Economic Area (EEA). If we transfer personal data to countries outside the EEA, we will ensure that appropriate safeguards are in place (e.g., Standard Contractual Clauses) to protect your data in accordance with GDPR.",
        },
        "DataRetention": {
          "title": "Data Retention",
          "desc": "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. The retention period depends on the type of data and the purpose for which it was collected.",
        },
        "DataSecurity": {
          "title": "Data Security",
          "desc": "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include data encryption, access controls, and regular security assessments.",
        },
        "GDPR": {
          "title": "Your Data Protection Rights (GDPR)",
          "desc": "Under the GDPR, you have the following rights regarding your personal data:",
          "row1": {
            "text1": "Right to Access (Art. 15 GDPR):",
            "text2": "You have the right to request a copy of the personal data we hold about you.",
          },
          "row2": {
            "text1": "Right to Rectification (Art. 16 GDPR):",
            "text2": "You have the right to request that we correct any inaccurate or incomplete personal data.",
          },
          "row3": {
            "text1": `Right to Erasure ("Right to Be Forgotten") (Art. 17 GDPR): `,
            "text2": "You have the right to request the deletion of your personal data under certain circumstances.",
          },
          "row4": {
            "text1": "Right to Restriction of Processing (Art. 18 GDPR): ",
            "text2": " You have the right to request that we restrict the processing of your personal data under certain conditions.",
          },
          "row5": {
            "text1": "Right to Data Portability (Art. 20 GDPR):",
            "text2": "You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit it to another controller.",
          },
          "row6": {
            "text1": "Right to Object (Art. 21 GDPR):",
            "text2": "You have the right to object to the processing of your personal data in certain situations, particularly when processing is based on legitimate interests or for direct marketing.",
          },
          "row7": {
            "text1": "Rights in Relation to Automated Decision-Making and Profiling (Art. 22 GDPR):",
            "text2": "You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.",
          },
          "row8": {
            "text1": "Right to Withdraw Consent:",
            "text2": "If we are processing your personal data based on your consent, you have the right to withdraw that consent at any time. This will not affect the lawfulness of processing based on consent before its withdrawal.",
          },
          "ToExercise": "To exercise any of these rights, please contact us using the contact details provided in Section 1. We will respond to your request within one month.",
        },
        "ChildrenPrivacy": {
          "title": "Children's Privacy",
          "desc": "Our website and services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children under 16. If we become aware that we have inadvertently collected personal data from a child under 16, we will take steps to delete such information as soon as possible.",
        },
        "ChangesTo": {
          "title": "Changes to This Privacy Policy",
          "desc": 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website with a revised "Effective Date." We encourage you to review this Privacy Policy periodically.',
        },
        "ContactUs": {
          "title": "Contact Us",
          "desc": "If you have any questions about this privacy policy or about how we handle data, or if you wish to exercise any of your rights, please contact us at: Zebrano Studio, Netherlands, info@zebranostudio.com",
          'address': {
            "name": "Zebrano Studio",
            "city": "Herikebrink 37 7544ER Enschede",
            "country": "The Netherlands",
            "email": "Info@zebranostudio.com ",
            "phone": "+31 6 42 99 70 18",
          }
        },
        "RightToLodge": {
          "title": "Right to Lodge a Complaint",
          "desc": "If you believe that your data protection rights have been violated, you have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens - AP):",
        },
      },
      // =====TermsAndConditions======
      "TermsAndConditions": {
        "heading": {
          "title": "Designed to fit. Terms that do, too.",
          "desc": "Here you’ll find the essentials: how we plan, when we deliver, what we guarantee, and how to keep your Zebrano piece flawless for years. Clear agreements, smooth projects.",
        },
        "Definitions": {
          "title": "Definitions",
          "desc": "",
          "ZebranoStudio": {
            "title": "Zebrano Studio: ",
            "desc": "the private limited company Zebrano Studio, with its registered office in the Netherlands, email info@zebranostudio.com.",
          },
          "Customer": {
            "title": "Customer:",
            "desc": " the party who enters into, intends to enter into, or for whom Zebrano Studio makes an offer or performs a delivery or service.",
          },
          "BusinessCustomer": {
            "title": "Business Customer:",
            "desc": "the customer acting in the course of a profession or business.",
          },
          "Consumer": {
            "title": "Consumer:",
            "desc": "the customer not acting in the course of a profession or business.",
          },
          "CustomMadeGoods": {
            "title": "Custom-Made Goods:",
            "desc": "products made according to the customer’s specifications, not prefabricated, produced based on the customer’s chosen shape, size/dimensions, colour, and material type, or clearly intended for a specific person.",
          },
        },
        "Applicability": {
          "title": "Applicability",
          "text1": "1. These terms apply to all offers, quotations, agreements, services, and acts. In case of conflict between the contents of the agreement and these general terms, the provisions of the agreement prevail.",
          "text2": "2. If there is ambiguity about the interpretation of one or more provisions of these terms or a situation is not covered, the provision or situation shall be assessed “in the spirit” of these terms.",
          "text3": "3. If Zebrano Studio does not always demand strict compliance with these terms, this does not mean that the provisions do not apply, nor that Zebrano Studio waives the right to demand strict compliance in other cases.",
        },
        "OfferQuotation" : {
          "title" : "Offer / Quotation",
          "text1" : "1. Offers and quotations from Zebrano Studio are without obligation unless expressly stated otherwise.",
          "text2" : "2. Any errors—such as incorrect price indications and calculation or clerical mistakes—on Zebrano Studio’s website, in advertisements, offers and quotations, publications, order confirmations, or other documents are not binding.",
        },
        "TheAgreement" : {
          "title" : "The Agreement",

          "text1" : "1. The agreement is concluded when the customer accepts Zebrano Studio’s offer. The purchase is established upon signing the order confirmation.",

          "text2" : "2. The order confirmation is leading in principle. The customer must carefully check it for omissions and inaccuracies and report these to Zebrano Studio in time, at least within 3 days of receipt of the order confirmation.",

          "text3" : "3. Offers and promotions are temporary. After the closing date of an offer or promotional period, the customer can no longer make use of it. Price reductions after the agreement is concluded—for example due to offers, promotions, or discounts on showroom models—do not entitle the customer to a price reduction.",

          "text4" : "4. Special promotional terms may apply to offers and promotions.",

          "text5" : "5. Amendments to the agreement and deviations from these general terms are only valid if agreed in writing between the customer and Zebrano Studio.",

          "text6" : "6. If changes to the agreement lead to an increase or decrease in costs, the resulting change in the purchase price must be agreed in writing.",

          "text7" : "7. If it appears that (further) performance of the agreement by Zebrano Studio is not possible due to force majeure, Zebrano Studio may suspend or dissolve the agreement without being liable for damages. This does not prevent the parties from making mutual proposals to amend the agreement in such a way that proper and complete performance is possible.",

          "text8" : "8. In the event of the customer’s bankruptcy, suspension of payments, or attachment of assets, Zebrano Studio may dissolve the agreement in whole or in part without notice of default.",
        },
        "RightOfWithdrawal":{
          "title":"Right of Withdrawal / Termination of the Agreement",
          "text1":"1. Most products manufactured and/or supplied by Zebrano Studio are custom-made and not prefabricated, including at least products made in Zebrano Studio’s factory, such as tables, coffee tables, side tables, bar tables, garden tables, cabinets, TV units, upholstered furniture, and made-to-measure wall shelves. The right of withdrawal does not apply to these products. They cannot be returned.",
          "text2":"2. If the customer wishes to terminate the agreement without a breach having occurred and Zebrano Studio agrees, the agreement may be terminated by mutual consent. In that case, Zebrano Studio is entitled to compensation for damage, including loss suffered and lost profit. Unless agreed otherwise, the compensation amounts to 30% of the purchase price, or 50% if at the time of termination by mutual consent the customer has already been informed that (partial) delivery can take place.",
          "text3":"3. If Zebrano Studio collects the product from the consumer at the consumer’s request, the consumer bears the costs. These are €95.00 including VAT for addresses within the Benelux. At the time of collection, the product must be properly packaged and ready behind the first threshold. If not, the product will not be taken.",
          "text4":"4. The purchase amount will be refunded after Zebrano Studio has inspected the product and found it to be complete, unused, and undamaged.",
        },
        "IntellectualProperty" : {
          "title" : "Intellectual Property",
          "text1" : "1. Unless agreed otherwise in writing, Zebrano Studio retains the copyrights and all intellectual property rights to offers made, and to designs, images, drawings, (prototype) models, and the like provided by it. The customer may not reproduce, publish, exploit, or exhibit material belonging to Zebrano Studio on which intellectual property rights rest without Zebrano Studio’s permission.",
        },
        "DeliveryTime" : {
          "title" : "Delivery Time",
          "text1" : "1. The delivery time and/or execution period is determined by Zebrano Studio approximately.",

          "text2" : "2. In determining the delivery time and/or execution period, Zebrano Studio assumes it can perform the assignment under the circumstances known to it at that time.",

          "text3" : "3. The delivery time and/or execution period commences when agreement has been reached on all commercial and technical details, all necessary information is in Zebrano Studio’s possession and, insofar as agreed, the down payment has been received.",

          "text4" : "4. If the anticipated delivery time and/or execution period is exceeded, Zebrano Studio will be granted an additional reasonable period to still deliver.",

          "text5" : "5. Exceeding the delivery time and/or execution period never entitles the customer to damages from Zebrano Studio.",
        },
        "TransportAndDamage" : {
          "title" : "Transport and Damage upon Delivery",
          "text1" : "1. Unless agreed otherwise, the agreement includes transport of the products by Zebrano Studio, which bears the risk of damage and loss during transport. If the products are delivered by a professional carrier, Zebrano Studio will ensure adequate insurance.",
          "text2" : "2. Zebrano Studio is not liable for damage occurring from the first door/threshold of the delivery address onwards. We are, however, happy to help place the product inside.",
          "text3" : "3. If damage is found upon delivery, the customer must report this to Zebrano Studio within two working days of delivery; otherwise, the customer is deemed to have received the delivered products without damage.",
        },
        "Delivery" : {
          "title" : "Delivery",
          "text1":"1. The customer must ensure that the place of delivery is easily accessible and that everything within their power is done to enable a smooth delivery. The customer must also ensure that the place of delivery can be properly secured.",

          "text2":"2. The customer shall inform Zebrano Studio, prior to entering into the agreement, of special circumstances at the delivery location that make the use of aids—such as a (removal) lift or crane—necessary. The customer must also ensure that required approvals (permits, etc.) and information essential to the work (e.g., accessibility of the delivery location) are provided to Zebrano Studio in time.",

          "text3":"3. In the event of incorrect or incomplete information from the customer, the (additional) costs for using special aids are borne by the customer.",

          "text4":"4. If a (removal) lift or crane is needed, Zebrano Studio will arrange for its availability at the time of delivery. The costs are for the customer and must be paid to Zebrano Studio prior to delivery.",

          "text5":"5. If the customer wishes to arrange a (removal) lift or crane themselves, Zebrano Studio will deliver the products free of charge on the ground floor without assembly. The customer remains responsible for moving and/or transporting products via the lift or crane, loading and unloading the products, and assembling them, as well as for any damage resulting therefrom.",

          "text6":"6. If the delivery location is not accessible at the time of delivery—for example because the product dimensions are too large to reach that place—this is at the customer’s expense and risk. In that case Zebrano Studio will deliver the products unassembled on the ground floor.",

          "text7":"7. If the products offered for delivery are not accepted, other than due to defective delivery, Zebrano Studio will make a second delivery within a reasonable period.",

          "text8":"8. If it appears upon delivery by Zebrano Studio that immediate delivery cannot take place due to circumstances for the customer’s account and risk as described in this article, and the customer requests a second delivery, Zebrano Studio may charge additional freight, delivery, and storage costs to the customer.",

          "text9":"9. If the customer wishes to postpone the delivery date, this must be communicated to Zebrano Studio no later than 20 working days prior to the scheduled delivery date. A later request will be assessed for feasibility and storage costs will be charged to the customer. Storage costs are €25 per week from the original delivery date. For changes within 3 working days prior to the scheduled delivery date, we charge €75 change fees to the customer, separate from the storage costs mentioned.",
        },
        "StorageOfProducts":{
          "title" : "Storage of Products",
          "text1" : "1. After refusal or after a second delivery, Zebrano Studio may charge storage costs and any further damages and costs to the customer.",
          "text2" : "2. If a second delivery is also not accepted, Zebrano Studio will demand performance of the agreement, granting the customer a period of up to 30 days to still take delivery of the products. If the products are not taken within this period, Zebrano Studio may dissolve the agreement, with the customer owing compensation for the damage suffered by Zebrano Studio.",
        },
        "Payment" : {
          "title" : "Payment",
          "text1" : "1. Payment is made in euros. Zebrano Studio’s prices state whether they are inclusive or exclusive of VAT.",
          "text2" : "2. When entering into an agreement with a consumer, Zebrano Studio may request a down payment of up to 30% of the purchase price. For agreements with a business customer, Zebrano Studio may, before delivering or continuing performance, require payment of the full purchase price or security for the customer’s payment obligations.",
          "text3" : "3. Unless agreed otherwise, the net (remaining) purchase price must be paid before delivery.",
          "text4" : "4. If Zebrano Studio performs a delivery under an agreement in parts, it is entitled to demand payment for each partial delivery. The customer will receive a partial invoice for each delivery.",
          "text5" : "5. The consumer owes statutory interest pursuant to Article 6:119 of the Dutch Civil Code over the period in which they are in default of paying the purchase price. The business customer owes statutory commercial interest (Article 6:119a DCC) over the period of default.",
          "text6" : "6. Without prejudice to paragraph 5, after default occurs Zebrano Studio will send the consumer a payment reminder, demanding payment within 14 days from the day after the reminder. The consumer will be informed that extrajudicial collection costs will be due if payment remains outstanding, stating the amount of such costs.",
          "text7" : "7. Zebrano Studio is entitled to proceed to collection of the amount due without further notice of default and may engage third parties for collection. In that case, the customer also owes extrajudicial collection costs, determined in accordance with the Dutch Act on Standardisation of Extrajudicial Collection Costs and the related decree.",
          "text8" : "8. In the event of complaints, the customer is only entitled to suspend payment of that part of the amount due which is reasonably proportionate to the nature and seriousness of the complaint. This does not release the customer from the obligation to pay the remainder within the agreed term.",
          "text9" : "9. Zebrano Studio remains the owner of the products until the customer has paid the total amount due under the agreement. The customer must handle the products with care and may not transfer them to third parties, pledge them, loan them, or remove them (or have them removed) from the location where they were delivered until the purchase price and any interest and costs have been paid in full.",
        },
        "Warranty" : {
          "title" : "Warranty",
          "text1" : "1. Unless agreed otherwise in writing, Zebrano Studio warrants the soundness of the delivered products for a period of 2 years after delivery.",

          "text2" : "2. For custom-made products, minor deviations in dimensions are permitted. Zebrano Studio may deviate by 2% from the agreed dimensions, unless expressly agreed otherwise.",

          "text3" : "3. The customer must in all cases give Zebrano Studio the opportunity to remedy any defect. Zebrano Studio’s liability is limited to repair free of charge of a defective product or replacement of that product or a part thereof, at Zebrano Studio’s discretion.",

          "text4" : "4. No warranty is given if defects are the result of normal wear and tear, improper use, lack of or incorrect maintenance or installation, (dis)assembly, modification, or repair by the customer or third parties. No warranty is given on products that were not new at the time of delivery, showroom models, products or parts covered by a manufacturer’s warranty, or product-specific characteristics including the natural behaviour of wood (see also below).",

          "text5" : "5. All wooden parts are subject to a limited warranty covering manufacturing defects only. The natural behaviour of wood is excluded as it is not a defect in the product or production but a characteristic of the material. “Behaviour of wood” includes expansion, shrinkage, cracking, and/or warping. The wood used by Zebrano Studio is sawn and dried to a moisture content of approximately 8%–12%, making the product suitable for use in a heated room. Wood remains a natural product and absorbs/releases moisture. The extent to which this occurs depends, among other things, on temperature differences and humidity. Wood will work less if the humidity remains at a near-constant level; we recommend 50%–60% humidity, typically 10% lower in winter and 10% higher in summer.",

          "text6" : "6. The file “Wood Variations and Tips” forms part of these general terms and will be provided to the customer by email.",

          "text7" : "7. If All-in-house has been purchased at the time of purchase, the customer applies the associated care products to the product themselves. This is not performed by Zebrano Studio.",

          "text8" : "8. Zebrano Studio is not responsible for differing expectations of the customer regarding the upholstery of seating furniture in materials other than those present in our showrooms.",

          "text9" : "9. Zebrano Studio’s repair voucher covers the repair of (dry) cracks in wooden furniture manufactured by Zebrano Studio. Other (repair) services are subject to different rates to be determined by Zebrano Studio.",
        },
        "Liability" : {
          "title" : "Liability",
          "text1" : "1. The risk of damage rests with Zebrano Studio until delivery to the customer at the first door/threshold of the delivery address, unless expressly agreed otherwise.",
          "text2" : "2. Zebrano Studio is not liable for damage to walls, frames, floors, or other goods caused by delivery and/or assembly of our products.",
          "text3" : "3. The risk of damage rests with Zebrano Studio until delivery to the customer at the first door/threshold of the delivery address, unless expressly agreed otherwise.",
          "text4" : "4. Zebrano Studio is not liable for damage to walls, frames, floors, or other goods caused by delivery and/or assembly of our products.",
          "text5" : "5. Zebrano Studio is not liable for direct or indirect damage resulting from defects in the delivered products or otherwise, nor for delays in delivery, except in cases of intent or gross negligence on Zebrano Studio’s part.",
          "text6" : "6. If the customer installs, assembles, etc., products themselves or has this done by a third party, the customer and/or third party is responsible for correct installation, assembly, etc., and everything that goes with it. In such cases, if something goes wrong during installation/assembly or if there are imperfections in the result, Zebrano Studio is not responsible or liable.",
          "text7" : "If Zebrano Studio is liable, it shall never be obliged to compensate any damage of whatever nature and by whatever cause exceeding the total amount of the transaction between the customer and Zebrano Studio.",
          "text8" : "If Zebrano Studio cannot rely on any exclusion of liability, its liability is limited to the amount covered by its liability insurance."
        },
        "Complaints" : {
          "title" : "Complaints",
          "text1" : "Complaints regarding the quality of delivered products or materials or the performance of the work can only be asserted by the customer by submitting them to Zebrano Studio within 2 working days after delivery of the products. If submission within this period is reasonably not possible, the period of 2 working days applies from the moment the defect was discovered or reasonably could have been discovered. The complaint must contain a clear and complete description of the grievances and observed defects.",
          "text2" : "The previous paragraph does not affect the shorter period provided in Article 9.",
          "text3" : "When the customer wishes to carry out or prevent certain work against the advice of Zebrano Studio, every complaint in this respect is excluded, unless otherwise agreed in writing.",
        },
        "ApplicableLaw" : {
          "title" : "Applicable law",
          "text" : "“All agreements to which these terms and conditions apply are subject to Dutch law.”"
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
        "FlushToWall": {
          "pageName": "Flush-to-Wall",
          "banner": {
            "bannerBG": "",
            "heading": "Wandvlakke deuren (Seamless Series)",
            "subHeading": "Wandvlakke deuren — ook wel verborgen deuren, deuren met een verdekt kozijn of onzichtbare deuren genoemd — zijn het toppunt van minimalistische architectuur. Bij Zebrano Studio maken we deze deuren zo dat ze exact gelijklopen met je wand, waardoor het kozijn en de scharnieren volledig verdwijnen. Het resultaat? Een strakke, ononderbroken afwerking die de schoonheid van je interieur benadrukt zonder visuele ruis.",
            "btnText": "Bekijk collectie"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Wat is een wandvlakke deur?",
              "heading": "De kunst van verdwijnen",
              "description": "Wandvlakke deuren, ook wel verborgen of onzichtbare deuren genoemd, lopen exact gelijk met je wand — zonder zichtbaar kozijn, scharnieren of lijsten. Ze gaan naadloos op in je architectuur voor een strakke, ononderbroken afwerking.",
              "btnText": "Bekijk collectie"
            },
            "desc2": {
              "title": "Waarom kiezen voor wandvlakke deuren?",
              "heading": "Minimalisme. Verheven",
              "description": "Deze deuren zijn ideaal voor interieurs waar ontwerpcontinuïteit centraal staat. Of ze nu worden meegeschilderd in de kleur van de muur of juist afgewerkt als krachtig statement — wandvlakke deuren houden de aandacht op de ruimte, niet op het beslag.",
              "btnText": "Laat je inspireren"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materiaal­mogelijkheden",
              "heading": "Gemaakt voor jouw ruimte",
              "desc": "Van luxe fineer tot gladde lak, getextureerd glas of stenen inlays — elke wandvlakke deur wordt volledig op maat gemaakt, passend bij jouw afmetingen en designvisie.",
              "btnText": "Bekijk materialen"
            },
            "row2": {
              "title": "Beslag & details",
              "heading": "Verborgen technologie",
              "desc": " Verborgen scharnieren, magneetsloten en precisiekozijnen zijn ontworpen voor een perfecte werking — en blijven volledig uit het zicht.",
              "btnText": "Bekijk beslagopties"
            },
            "row3": {
              "title": "Integratie­opties",
              "heading": "Eén doorlopend oppervlak ",
              "desc": "Combineer je wandvlakke deur met bijpassende wandpanelen of geïntegreerde kasten voor een architectonisch geheel dat van het ene oppervlak in het andere overgaat.",
              "btnText": "Bekijk materialen"
            },
          },
        },
        "WallPartitions": {
          "pageName": "Roomdividers & scheidingswanden",
          "banner": {
            "bannerBG": "",
            "heading": "Roomdividers & scheidingswanden",
            "subHeading": "Onze maatwerk roomdividers zijn ontworpen om ruimtes vorm te geven zonder licht, doorstroming of stijl op te offeren. Vast, schuivend, vouwbaar of in glas — elke scheidingswand wordt afgestemd op je deuren en afwerkingen voor een uniform, high-end geheel. Perfect voor open woonruimtes, kantoren of hospitality, ze voegen privacy, structuur en elegantie toe — allemaal op maat gemaakt naar jouw afmetingen en interieurvisie.",
            "btnText": "Bekijk collectie"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Wat is een roomdivider?",
              "heading": "Stijl in elke verdeling ",
              "description": "Roomdividers zijn op maat gemaakte, niet-dragende panelen die ruimtes afbakenen zonder je ontwerpvisie te verliezen. Massief, glas of een mix van materialen — ze voegen structuur toe zonder licht of doorstroming te blokkeren.",
              "btnText": "Bekijk collectie"
            },
            "desc2": {
              "title": "Waarom kiezen voor roomdividers?",
              "heading": "Flexibel, functioneel, stijlvol ",
              "description": " Ideaal voor open woonruimtes — roomdividers bieden privacy, akoestische controle en stijl, terwijl ze perfect aansluiten bij je bestaande afwerkingen.",
              "btnText": "Laat je inspireren"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materiaal­mogelijkheden",
              "heading": "Beweging eenvoudig gemaakt",
              "desc": "Kies uit hout, fineer, lak, matglas, helder glas of combinaties om een wand te creëren die aansluit bij je deuren en interieurstijl.",
              "btnText": "Bekijk materialen"
            },
            "row2": {
              "title": "Beslag & details",
              "heading": "Movement Made Easy ",
              "desc": "Voor schuivende of vouwbare wanden gebruiken we precisierails en soft-close systemen voor een soepele werking zonder concessies aan het design.",
              "btnText": "Bekijk beslagopties"
            },
            "row3": {
              "title": "Geheel in harmonie",
              "heading": "Unified Interiors ",
              "desc": "Combineer je scheidingswanden met Zebrano deuren, wandpanelen of wandvlakke systemen voor een doorlopend, harmonieus interieur.",
              "btnText": "Neem contact op"
            },
          },
        },
        "Boiserie": {
          "pageName": "Boiserie Wandpanelen",
          "banner": {
            "bannerBG": "",
            "heading": "Boiserie Wandpanelen",
            "subHeading": "Boiserie is decoratieve wandbekleding die vlakke muren verandert in architectonische elementen. Bij Zebrano Studio varieert onze maatwerk boiserie van klassieke, sierlijke stijlen tot strakke, minimalistische bekleding — allemaal ontworpen om perfect aan te sluiten bij je deuren en interieur voor een samenhangende, high-end uitstraling.",
            "btnText": "Bekijk collectie"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Wat is boiserie?",
              "heading": "Van klassiek tot modern",
              "description": "Oorspronkelijk een kenmerk van de Franse architectuur, brengt boiserie elegantie en diepte in interieurs. Tegenwoordig kan het volledig worden afgestemd op modern minimalisme, tijdloze traditie of gedurfde designstatements.",
              "btnText": "Bekijk collectie"
            },
            "desc2": {
              "title": "Waarom kiezen voor boiserie?",
              "heading": "Architectonische continuïteit",
              "description": "Boiserie voegt textuur, ritme en luxe toe aan muren. Het kan deuren omlijsten, geïntegreerd worden met wandvlakke systemen of zelfstandig fungeren als opvallend element — voor een naadloze designcontinuïteit in je hele ruimte.",
              "btnText": "Laat je inspireren"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materiaal­mogelijkheden",
              "heading": "Ontworpen om te matchen",
              "desc": " Van luxe houtfineer tot gelakte panelen, textiel of stenen accenten — onze boiserie wordt altijd op maat gemaakt om te harmoniseren met jouw interieurstijl en afmetingen.",
              "btnText": "Bekijk materialen"
            },
            "row2": {
              "title": "Beslag & details",
              "heading": "Precisie in elke lijn",
              "desc": " Onzichtbare montagesystemen en naadloze details zorgen ervoor dat je boiserie voelt als een integraal onderdeel van de architectuur — niet als een toevoeging.",
              "btnText": "Bekijk beslagopties"
            },
            "row3": {
              "title": "Integratie­opties",
              "heading": "Muren die een verhaal vertellen ",
              "desc": " Combineer boiserie met Zebrano deuren, scheidingswanden of wandvlakke systemen voor een samenhangend architectonisch concept dat muren verandert in designstatements.",
              "btnText": "Neem contact op"
            },
          },
        },
        "Materials": {
          "pageName": "Materialen",
          "banner": {
            "bannerBG": "",
            "heading": "Materialen die onze ontwerpen vormen",
            "subHeading": "Bij Zebrano Studio begint elk detail met het juiste materiaal. Van tijdloze houtsoorten en luxe fineer tot glas, steen en metaal — wij combineren vakmanschap met innovatie. Elke keuze bepaalt het karakter, de duurzaamheid en de schoonheid van je interieur.",
            "btnText": "Bekijk collectie"
          },
        },
      },
      // ====contactPage====
      "contact": {
        "pageName": "Contact Us",
        "header": {
          "heading": "Neem contact met ons op",
          "text1": "Bij Zebrano Studio begonnen we met een simpel idee: luxe, maatwerkdeuren bereikbaar maken — zonder grenzen. Elk huis verdient een vleugje design, en elke ruimte zou een verhaal moeten vertellen.",
          "text2": "Of je nu groots droomt, werkt aan een uniek project of gewoon nieuwsgierig bent naar de mogelijkheden — we horen graag van je. Gebruik het formulier hieronder om contact op te nemen, zeker als je speciale wensen hebt of ideeën die verder gaan dan gewoon."
        },
        "form": {
          "label": {
            "Name": "Naam",
            "Email": "E-mail",
            "PhoneNumber": "Telefoonnummer",
            "ContactReason": "Reden van contact",
            "Consumer": "Particulier",
            "Message": "Bericht",
          },
          "select": {
            "optionOne": {
              "option1": "Ik wil graag een offerte voor een speciale maatwerkdeur"
            },
            "optionTwo": {
              "option1": "Zakelijk"
            },
          },
          "Submit": "Versturen"
        }
      },
      // =====Inspiration====
      "Inspiration": {
        "pageName": "Inspiration",
        "banner": {
          "heading": "Ontdek onze trots",
          "description": "Bij Zebrano Studio maken we deuren die niet alleen functioneel zijn, maar jouw ruimte echt laten spreken. Met ons maatwerk brengen we de luxe die je vaak alleen in iconische gebouwen ziet, gewoon bij jou thuis. Zo wordt exclusiviteit iets dat je dagelijks kunt ervaren.",
          "titleOne": "Meer dan 10000 configuraties",
          "titleTwo": "Aanbevolen door interieurontwerpers",
        },
        "btnText": "Bekijk meer",
      },
      // =====Architects=======
      "Architects": {
        "pageName": "Inspiration",
        "ArchitectsBanner": {
          "title": "Word onderdeel van het verhaal van Zebrano Studio",
          "btnText": "Meld je nu aan",
        },
        "PartnerSupport": {
          "partnerHeading": {
            "title": "Partner-First Support.",
            "desc": " Wij hebben Zebrano opgericht omdat vakmensen een leverancier verdienen die hun succes ondersteunt, niet met hun klanten concurreert. Jij behoudt de relaties, verdient de marges die je verdient en focust op wat jij het beste doet.",
            "btnText": "Werk samen met Zebrano",
          },
          "professionalDemand": {
            "heading": "Ben jij een ontwerper die écht durft anders te denken?",
            "textOne": "Heb je soms het gevoel dat je creativiteit wordt beperkt door wat mogelijk is — of het nu gaat om materialen, afwerkingen of productiegrenzen? Je bent niet de enige. Wij begrijpen dat.",
            "textTwo": "Bij Zebrano geloven we dat goed design nooit beperkt mag worden door de uitvoering. Daarom bieden we je onbeperkte mogelijkheden om te ontdekken, te experimenteren en je meest gedurfde ideeën tot leven te brengen — met onze volledige steun in elke stap.",
            "textThree": "Als je klaar bent om samen te werken met een partner die jouw visie net zo waardeert als jijzelf, en die zich inzet om het onmogelijke mogelijk te maken, dan ben je hier aan het juiste adres."
          },
        },
        "Conversation": {
          "title": "Laten we samen grenzen doorbreken. Word lid van ons Partnerprogramma en ontwerp zonder beperkingen.",
          "heading": "Laten we het gesprek starten.",
          "desc": " We horen graag meer over jouw ideeën, projecten of vragen. Geen druk — gewoon een prettig gesprek om te ontdekken hoe we samen iets bijzonders kunnen maken. Neem gerust contact op!",
          "btnText": "Partner with Zebrano",
        },
        "CasewellPartner": {
          "heading": "Wat je krijgt als Zebrano Partner:",
          "subHeading": "",
          "card": {
            "title1": "Echte groothandelsprijzen",
            "desc1": "Bij ons krijg je altijd eerlijke groothandelsprijzen. Zo kun jij je bedrijf winstgevend en concurrerend laten groeien. Want als jij groeit, groeien wij met je mee.",

            "title2": "Onbeperkte ontwerpvrijheid",
            "desc2": "Laat je creativiteit de vrije loop. Of het nu gaat om unieke vormen, bijzondere materiaalcombinaties of een speciale afwerking — wij zetten geen grenzen. Jij droomt het, wij maken het mogelijk.",

            "title3": "Directe designondersteuning",
            "desc3": "Je krijgt rechtstreeks toegang tot ons designteam. Samen denken we mee en begeleiden we je in elke stap. Zo nemen we werk en zorgen uit handen, zodat jij je kunt focussen op waar je het beste in bent: inspirerende ruimtes ontwerpen.",

            "title4": "Zekerheid door open communicatie",
            "desc4": "Goede communicatie is onze basis. We houden je op de hoogte, betrekken je in het proces en zorgen dat je je gesteund voelt. Zo werk je met volle gemoedsrust aan ieder project.",

            "title5": "Volledige ondersteuning",
            "desc5": "Wij zijn meer dan een leverancier van materialen — we zijn jouw supportteam achter de schermen. Je profiteert van designadvies, toegang tot onze showroom en coördinatie van de uitvoering. Alles alsof je een eigen team in huis hebt, maar zonder de vaste lasten. Minder stress, minder fouten, meer tijd om te doen wat jij het liefst doet.",
          },
        },

      },
      // ==== zebrano/aboutus =====
      "Zebrano": {
        "pageName": "Zebrano",
        "ZebranoBanner": {
          "headingOne": "Wij maken Luxe ",
          "headingTwo": "bereikbaar voor",
          "headingThree": "iedereen",
          "zebranoText": "Bij Zebrano Studio vinden we dat luxe design voor iedereen bereikbaar moet zijn. Van maatwerkdeuren tot volledig geïntegreerde wandoplossingen: onze missie is om vakmanschap en stijlvolle vormgeving in elk huis te brengen — van stadsappartement tot landelijke villa.",
          "texts": ["design", "deuren", "interieur"]
        },
        "ZebranoJourney": {
          "title": "Van één deur naar eindeloze mogelijkheden",
          "heading": "De reis van Zebrano Studio",
          "desc": "Wat begon als een enkel maatwerkdeurproject is uitgegroeid tot een volledige collectie pivot-, schuif-, draai- en wandvlakdeuren die de beleving van interieurs opnieuw definiëren. Geïnspireerd door luxe hotels en architectonische details, hebben we het onze missie gemaakt om deuren en wandoplossingen te creëren die premium materialen combineren met persoonlijke ontwerpvrijheid.",
          "btnText": "Bekijk meer",
        },
        "DraggableSlider": {
          "heading": "Ontmoet de mensen van Zebrano Studio",
          "title": "Ons Team",
          "description": "Achter elke naadloze deur schuilt een verhaal — en een paar perfectionisten met zaagsel in hun haar. Maak kennis met de mensen (en handen) die Zebrano Studio tot leven brengen.",
          "person": {
            "Robbert": {
              "name": "Robbert",
              "designation": "Interim Finance",
              "details": "Met een achtergrond in financiële consultancy en een flinke dosis creativiteit besloot Robbert zijn talenten te combineren om Zebrano te laten groeien. Als een van de broers die de Zebrano-reis begonnen, slaat hij de brug tussen strategie en design en zorgt hij dat elke zakelijke beslissing aansluit bij onze creatieve visie.",
            },

            "Mathijs": {
              "name": "Mathijs",
              "designation": "Eigenaar & Houtbewerker",
              "details": "Met meer dan 15 jaar ervaring in bouwmanagement en grootschalige projecten heeft Mathijs een reputatie opgebouwd in precisie en leiderschap. Al op jonge leeftijd was zijn passie voor houtbewerking duidelijk. Na verloop van tijd maakte hij de overstap van het leiden van een middelgroot bouwbedrijf naar de oprichting van Zebrano Studio — waar vakmanschap en luxe design samenkomen. Quote: “Van houtnerf tot groot ontwerp — elk detail vertelt een verhaal.”",
            },

            "Rick": {
              "name": "Rick",
              "designation": "Houtspecialist",
              "details": "Rick is onze echte specialist in hout. Opgeleid in timmerwerk en houtbewerking kent hij elk detail van het vak — van het kiezen van de juiste houtsoort tot het zagen op millimeterprecisie. Zijn diepe kennis zorgt ervoor dat elk Zebrano-stuk niet alleen mooi is, maar ook technisch perfect.",
            },

            "Dave": {
              "name": "Dave ",
              "designation": " Marketing & Sales",
              "details": "Dave brengt een creatieve commerciële insteek naar Zebrano Studio. Met ervaring in merkverhalen en klantrelaties zorgt hij ervoor dat onze visie zowel huiseigenaren als architecten bereikt. Hij is de schakel tussen onze werkplaats en de wereld en zorgt dat elke klant zich begeleid en geïnspireerd voelt tijdens het hele proces."
            },

            "Peter": {
              "name": "Peter",
              "designation": "Houtbewerker",
              "details": "Peter vertegenwoordigt het hart van onze werkplaats. Bekwaam in zowel moderne technieken als traditioneel vakwerk brengt hij het geduld en de precisie van een ambachtsman in elke deur. Bekend om zijn vaste hand en scherp oog zorgt Peter ervoor dat elk stuk dat het atelier verlaat voldoet aan de Zebrano-standaard.",
            },
          },
        },
        "Sustainability": {
          "title": "Duurzaamheid",
          "heading": "Vakmanschap met zorg",
          "desc": "Wij kiezen duurzame materialen, werken met verantwoorde leveranciers en maken stukken die tientallen jaren meegaan. Want goed design mag nooit ten koste gaan van de planeet.",
          "btnText": "Lees meer",
        },
        "ServicesThasFitYourNeed": {
          "title": "Service die bij jouw wensen past",
          "desc": "Of je nu één maatwerkdeur bestelt of meerdere elementen in je interieur wilt integreren, wij maken het proces eenvoudig en inspirerend. Ons team begeleidt je bij keuzes, planningen en praktische details – zodat je je zeker voelt van het eerste gesprek tot de laatste installatie.",
          "btn": "Service",
          "FAQ": {
            "heading": "Vragen? Je vindt veel antwoorden in onze FAQ, waaronder:",
            "faqs": [
              {
                question: "Wat zijn de standaard levertijden?",
                answer: ` - Deuren (pivot/schuif/draaideur) 6–8 weken; Flush-to-Wall 8–10 weken; Scheidingswanden 6–8 weken; Boiserie 8–10 weken.`,
              },
              {
                question: "Hoeveel maatwerk is er mogelijk?",
                answer: " – Afmetingen, afwerkingen, glassoorten, randdetails, beslagsets en opties (bijv. soft-close, pivotsluiter, afdichtingen) zijn configureerbaar. Ultiem maatwerk gaat via een offerte.",
              },
              {
                question: "Leveren jullie ook beslag?",
                answer: " – Ja, scharnieren, pivots, schuifrails, grepen en afdichtingen volgens specificatie; externe hardware na compatibiliteitscontrole en afspraak.",
              },
              {
                question: "Welke garantie bieden jullie?",
                answer: " – 2 jaar garantie op deuren/materialen (fabricagefouten/constructieveiligheid) en 6 maanden garantie op montage (indien uitgevoerd door Zebrano).",
              },
              {
                question: "Installeren jullie ook?",
                answer: " – Ja, optionele installatie in NL. Inclusief plaatsing van Zebrano kozijnen/deurbladen/beslag, afstelling, speling en functionele checks; exclusief constructiewerk, elektra, stuc/ schilderwerk en derden-materialen.",
              },
            ]
          }
        },
      },
      // ======OurStory==========
      "OurStory": {
        "OurStoryBanner": {
          "heading": "",
          "desc": "",
          "btnText": "",
        },
        "AboutUsTimeline": {},
      },
      // ====Meet the Makers=====
      "MeetTheMakers" : {
        "banner" : {
          "heading1":"Gemaakt door onze",
          "heading2":"geperfectioneerd in",
          "heading3":" de productie.",
          "desc" : "Echte handen. Echt zaagsel. Onwerkelijke resultaten. Van eerste schets tot perfecte pasvorm: wij ontwerpen, prototypen en bouwen onder één dak – zodat elke millimeter klopt en elke deur moeiteloos goed voelt.",
          "typedText" : ["ontwerpers","mensen","makers"],
        },
        "AccessibleBeautiful" : {
          "row1":{
            "title1" : "TOEGANKELIJK .",
            "title2" : "MOOI .",
            "desc" : `"Ik heb altijd gevonden dat goed design niet verstopt hoeft te worden achter fluwelen touwen. Bij Zebrano wil ik dat iedereen kan genieten van dezelfde prachtige deuren en details die je normaal alleen in luxe hotels ziet – gewoon thuis."`,
            "name" : "Mathijs",
            "designetion" : "– oprichter en ontwerper, Zebrano Studio",
          },
          "row2" : {
            "title" : "Wij houden dingen graag dichtbij huis.",
            "desc" : `Onze deuren worden hier in Nederland gemaakt, door makers die hun hout bijna net zo goed kennen als hun ochtendkoffie. Het is een mix van traditie, precisie en een beetje Nederlandse koppigheid die weigert genoegen te nemen met ‘goed genoeg’. Het resultaat? Vakmanschap dat lokaal voelt, maar overal ter wereld thuishoort.`,
            "btnText" : "Ontdek materialen",
          },
          "row3" : {
            "title1" : "Ben jij ontwerper?",
            "title2" : "Advies nodig?",
            "desc1" : "Ons team staat klaar om je alle mogelijkheden te laten ontdekken.",
            "desc2" : "Ons team staat klaar om je alle mogelijkheden te laten ontdekken.",
            "btnText1" : "Ontdek materialen",
            "btnText2" : "Neem contact op",
          },
        },
      },
      // ========ConsciousNcrafts=========
      "ConsciousNcrafts": {
        "ConsciousNcraftsBanner": {
          "heading": "Bewust vakmanschap",
          "desc": "Eenvoudige principes die ons werk sturen: met zorg, respect en een duidelijk doel.",
          "btnText": "Get Started",
        },
        "ConsciousNCraftTimeline": {
          "row1": {
            "title": "Werken mét de natuur, niet ertegen",
            "desc": "Wij geloven dat werken met natuurlijke materialen verantwoordelijkheid met zich meebrengt. Voor ons is hout niet zomaar een grondstof — het is een levend verhaal van tijd, klimaat en plek. Daarom werken wij alleen met leveranciers die onze waarden delen: FSC-gecertificeerd hout, duurzaam beheerde bossen en een focus op regeneratie in plaats van uitputting.",
            "imgSrc": "",
          },

          "row2": {
            "title": "Respect voor het materiaal",
            "desc": "Elk stuk hout is uniek — de nerf, de structuur, de imperfecties. Wij ontwerpen rondom die eigenheid, niet ertegenin. In plaats van uniformiteit af te dwingen, laten we het materiaal spreken. Dat vermindert verspilling en eert de schoonheid van natuurlijke variatie. We verwerken niet te veel. We schilderen niet te veel. We brengen naar voren wat er al is.",
            "imgSrc": "",
          },
          "row3": {
            "title": "Ontwerpen met oog voor de lange termijn",
            "desc": "Wegwerpmeubels en tijdelijk design passen niet bij onze filosofie. Wij maken deuren die een leven lang meegaan — niet alleen in functie, maar ook in uitstraling. Tijdloos design en hoogwaardig vakmanschap zorgen voor minder vervanging, minder verspilling en een kleinere impact op de planeet.",
            "imgSrc": "",
          },
          "row4": {
            "title": "Vakmanschap als duurzame daad",
            "desc": "Duurzaamheid zit niet alleen in de materialen — maar ook in de manier waarop we werken. Door lokaal te produceren, transport te beperken en in kleine series te bouwen in plaats van massaproductie, blijven we dicht bij het proces en houden we grip op onze impact. Elke beslissing die we nemen, weegt niet alleen efficiëntie, maar ook ethiek mee.",
            "imgSrc": "",
          },
          "row5": {
            "title": "Trots in elk detail",
            "desc": "Wij zijn trots op wat we maken — niet alleen omdat het er goed uitziet, maar omdat het goed voelt om achter iets echts te staan. Een deur is niet zomaar een functioneel object. Het is het eerste contactpunt van een huis. En wij geloven dat wanneer het met zorg is gemaakt, van een materiaal zo edel als hout, het die extra waardering verdient.",
            "imgSrc": "",
          },
        },
        "additionalText": "Bij Zebrano Studio maken we niet zomaar standaarddeuren; we creëren echte kunstwerken die een verhaal vertellen en een leven lang meegaan. Klaar om jouw droomdeur te realiseren? Wij helpen je graag!",
        "btnText1": "Collectie",
        "btnText2": "Configureer je eigen deur",
      },
      // ======privecyPolicy=========
      "privecyPolicy": {
        "header": {
          "heading": "Privacyverklaring van Zebrano Studio",
          "EffectiveDate": "Ingangsdatum :",
          "date": "29 juli 2025",
          "desc": `Oké, we weten dat dit niet de spannendste tekst is om te lezen, maar het is wél belangrijk (en verplicht!). Bij Zebrano Studio draait het bij ons om prachtige houten deuren, niet om ingewikkeld juridisch taalgebruik. Toch vinden we het beschermen van jouw privacy ontzettend belangrijk. Dus, ook al is het misschien een beetje “saai”, we willen heel duidelijk zijn over hoe wij met jouw persoonsgegevens omgaan. Je kunt erop vertrouwen dat wij voldoen aan alle regels en wetgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG) (EU) 2016/679 en de toepasselijke Nederlandse privacywetgeving. Deze privacyverklaring legt uit hoe wij persoonsgegevens verzamelen, gebruiken, delen en beschermen wanneer je onze website bezoekt en onze diensten gebruikt.`,
          "whoWeAre": {
            "heading": "Welke persoonsgegevens wij verzamelen",
            "desc": "Wij kunnen de volgende soorten persoonsgegevens verzamelen:",
            "title": "Zebrano Studio",
            "address": "Herikebrink 37 7544ER Enschede",
            "country": "The Netherlands",
            "email": "Info@zebranostudio.com",
            "phone": "+31 6 42 99 70 18",
          },
        },
        "TypesOfPersonalData": {
          "title": "Welke persoonsgegevens wij verzamelen",
          "desc": "Wij kunnen de volgende soorten persoonsgegevens verzamelen:",
          "row1": {
            "text1": "Contactgegevens:",
            "text2": "Naam, e-mailadres, telefoonnummer, postadres (voor offertes, bestellingen en levering).",
          },
          "row2": {
            "text1": "Communicatiegegevens:",
            "text2": " Informatie die je verstrekt wanneer je contact met ons opneemt via e-mail, telefoon, contactformulieren of sociale media.",
          },
          "row3": {
            "text1": "Bestel- en transactiegegevens:",
            "text2": "Gegevens over producten en diensten die je bij ons hebt gekocht, betalingsinformatie (wij werken doorgaans met externe betaalproviders die de betaalgegevens direct verwerken).",
          },
          "row4": {
            "text1": "Website-gebruiksgegevens:",
            "text2": " Informatie over hoe je onze website gebruikt, zoals je IP-adres, browsertype, besturingssysteem, herkomst, bezochte pagina’s en de duur van je bezoek. Dit wordt meestal verzameld via cookies en vergelijkbare technologieën.",
          },
          "row5": {
            "text1": "Marketingvoorkeuren:",
            "text2": "Jouw voorkeuren met betrekking tot het ontvangen van marketingcommunicatie van ons.",
          },
        },
        "HowWeCollect": {
          "title": "Hoe wij jouw persoonsgegevens verzamelen",
          "desc": "Wij verzamelen persoonsgegevens op verschillende manieren:",
          "row1": {
            "text1": "Rechtstreeks van jou:",
            "text2": "Wanneer je contactformulieren invult, een offerte aanvraagt, een bestelling plaatst, je aanmeldt voor onze nieuwsbrief of direct met ons communiceert.",
          },
          "row2": {
            "text1": "Automatisch:",
            "text2": "Via cookies en vergelijkbare technologieën wanneer je onze website bezoekt.",
          },
        },
        "Purposes": {
          "heading": "Doeleinden en rechtsgrond voor het verwerken van jouw persoonsgegevens",
          "desc": "Wij verwerken jouw persoonsgegevens voor de volgende doeleinden en op basis van de genoemde rechtsgronden onder de AVG:",
          "ToProvide": {
            "title": "Voor het leveren van diensten en het uitvoeren van overeenkomsten:",
            "text1": " Het verwerken van jouw aanvragen en het opstellen van offertes.",
            "text2": "Het verwerken en uitvoeren van bestellingen van deuren en andere producten.",
            "text3": "Het organiseren van leveringen en installaties. ",
            "text4": "Het bieden van klantenservice.",
            "text5": "Rechtsgrond: uitvoering van een overeenkomst of om op jouw verzoek maatregelen te nemen vóór het sluiten van een overeenkomst (AVG art. 6(1)(b)).",
          },
          "ToCommunicate": {
            "title": "Voor communicatie met jou:",
            "text1": " Het beantwoorden van vragen en verzoeken.",
            "text2": "Het verzenden van belangrijke service-gerelateerde updates (bijv. bestelstatus).",
            "text3": "Rechtsgrond: uitvoering van een overeenkomst (art. 6(1)(b)) of gerechtvaardigd belang (art. 6(1)(f)) bij effectieve communicatie.",
          },
          "ForMarketing": {
            "title": "Voor marketingdoeleinden:",
            "text1": "Het verzenden van nieuwsbrieven, promoties en informatie over onze producten en diensten die voor jou interessant kunnen zijn, mits je hiervoor toestemming hebt gegeven. ",
            "text2": " Rechtsgrond: jouw toestemming (AVG art. 6(1)(a)). Je kunt jouw toestemming op elk moment intrekken.",
          },
          "ToImprove": {
            "title": "Voor verbetering van onze website en diensten:",
            "text1": " Het analyseren van websitegebruik om gebruikersgedrag te begrijpen en functionaliteit en ervaring te verbeteren.",
            "text2": " Het ontwikkelen van nieuwe producten en diensten.",
            "text3": " Rechtsgrond: gerechtvaardigd belang (AVG art. 6(1)(f)) bij het verbeteren van ons bedrijf en ons aanbod.",
          },
          "ForLegal": {
            "title": "Voor wettelijke naleving en bescherming: ",
            "text1": "Het voldoen aan wettelijke verplichtingen (bijv. belasting, boekhouding).",
            "text2": "Het beschermen van onze rechten, eigendommen of veiligheid, en die van onze klanten of anderen.",
            "text3": " Het voorkomen van fraude en het waarborgen van beveiliging.",
            "text4": "Rechtsgrond: wettelijke verplichting (AVG art. 6(1)(c)) of gerechtvaardigd belang (art. 6(1)(f)) bij bescherming van ons bedrijf.",
          },
          "CookiePolicy": "Onze website maakt gebruik van cookies en vergelijkbare technologieën om je surfervaring te verbeteren, websiteverkeer te analyseren en voor marketingdoeleinden. Je kunt je cookievoorkeuren beheren via je browserinstellingen. Voor meer gedetailleerde informatie verwijzen wij naar ons aparte Cookiebeleid.",
        },
        "Sharing": {
          "title": "Het delen van jouw persoonsgegevens",
          "desc": "Wij verkopen, verhuren of leasen jouw persoonsgegevens niet aan derden. We kunnen jouw persoonsgegevens delen met:",
          "row1": {
            "text1": "Dienstverleners:  ",
            "text2": "Derde partijen die diensten voor ons uitvoeren, zoals betalingsverwerking, webhosting, analyse, marketing en bezorgdiensten. Deze partijen zijn contractueel verplicht jouw gegevens te beschermen en alleen te gebruiken voor de doeleinden waarvoor ze zijn verstrekt.",
          },
          "row2": {
            "text1": "Wettelijke vereisten: ",
            "text2": "Indien dit wettelijk verplicht is of op verzoek van bevoegde autoriteiten (bijv. een gerechtelijk bevel of overheidsinstantie).",
          },
          "row3": {
            "text1": "Bedrijfsoverdrachten:",
            "text2": "In het kader van een fusie, overname of verkoop van (een deel van) onze activa kunnen jouw persoonsgegevens worden overgedragen als onderdeel van die transactie.",
          },
        },
        "International": {
          "title": "Internationale gegevensoverdracht",
          "desc": "Omdat Zebrano Studio binnen de EU opereert, worden jouw persoonsgegevens in principe verwerkt binnen de Europese Economische Ruimte (EER). Indien wij persoonsgegevens overdragen naar landen buiten de EER, zorgen wij voor passende waarborgen (bijv. standaardcontractbepalingen) om jouw gegevens te beschermen conform de AVG.",
        },
        "DataRetention": {
          "title": "Bewaartermijn van gegevens",
          "desc": "Wij bewaren jouw persoonsgegevens alleen zo lang als nodig is om de doeleinden te vervullen waarvoor ze zijn verzameld, inclusief het voldoen aan wettelijke, boekhoudkundige of rapportageverplichtingen. De bewaartermijn hangt af van het type gegevens en het doel waarvoor deze zijn verzameld.",
        },
        "DataSecurity": {
          "title": "Gegevensbeveiliging",
          "desc": "Wij nemen passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen ongeoorloofde toegang, wijziging, openbaarmaking of vernietiging. Deze maatregelen omvatten gegevensversleuteling, toegangsbeheer en regelmatige veiligheidscontroles.",
        },
        "GDPR": {
          "title": "Jouw privacyrechten (AVG)",
          "desc": "Onder de AVG heb je de volgende rechten met betrekking tot jouw persoonsgegevens:",
          "row1": {
            "text1": "Recht op inzage (art. 15 AVG):",
            "text2": " Je hebt het recht een kopie op te vragen van de persoonsgegevens die wij van jou bewaren.",
          },
          "row2": {
            "text1": "Recht op rectificatie (art. 16 AVG): ",
            "text2": "Je hebt het recht ons te verzoeken onjuiste of onvolledige persoonsgegevens te corrigeren.",
          },
          "row3": {
            "text1": `Recht op gegevenswissing ("recht om vergeten te worden") (art. 17 AVG): `,
            "text2": "Je hebt het recht ons te verzoeken jouw persoonsgegevens te verwijderen onder bepaalde omstandigheden.",
          },
          "row4": {
            "text1": "Recht op beperking van verwerking (art. 18 AVG): ",
            "text2": "  Je hebt het recht ons te verzoeken de verwerking van jouw persoonsgegevens te beperken onder bepaalde voorwaarden",
          },
          "row5": {
            "text1": "Recht op overdraagbaarheid (art. 20 AVG): ",
            "text2": "Je hebt het recht jouw persoonsgegevens te ontvangen in een gestructureerd, gangbaar en machineleesbaar formaat en deze door te geven aan een andere verwerkingsverantwoordelijke.",
          },
          "row6": {
            "text1": "Recht van bezwaar (art. 21 AVG): ",
            "text2": " Je hebt het recht bezwaar te maken tegen de verwerking van jouw persoonsgegevens in bepaalde situaties, met name wanneer de verwerking plaatsvindt op basis van gerechtvaardigd belang of voor direct marketing.",
          },
          "row7": {
            "text1": "Rechten met betrekking tot geautomatiseerde besluitvorming en profilering (art. 22 AVG): ",
            "text2": "Je hebt het recht niet te worden onderworpen aan een besluit dat uitsluitend gebaseerd is op geautomatiseerde verwerking, inclusief profilering, dat rechtsgevolgen voor jou heeft of jou op vergelijkbare wijze aanzienlijk treft.",
          },
          "row8": {
            "text1": "Recht om toestemming in te trekken: ",
            "text2": "Als wij jouw persoonsgegevens verwerken op basis van jouw toestemming, heb je het recht die toestemming op elk moment in te trekken. Dit heeft geen invloed op de rechtmatigheid van de verwerking vóór de intrekking.",
          },
          "ToExercise": "Om een van deze rechten uit te oefenen, kun je contact met ons opnemen via de contactgegevens vermeld in sectie 1. Wij reageren binnen één maand op jouw verzoek."
        },
        "ChildrenPrivacy": {
          "title": "Privacy van kinderen",
          "desc": "Onze website en diensten zijn niet gericht op personen jonger dan 16 jaar. Wij verzamelen niet bewust persoonsgegevens van kinderen onder de 16. Als wij erachter komen dat wij per ongeluk persoonsgegevens van een kind onder de 16 hebben verzameld, zullen wij die zo snel mogelijk verwijderen.",
        },
        "ChangesTo": {
          "title": "Wijzigingen in deze privacyverklaring",
          "desc": 'Wij kunnen deze privacyverklaring van tijd tot tijd bijwerken om wijzigingen in onze praktijken weer te geven of om andere operationele, juridische of regelgevende redenen. Bij belangrijke wijzigingen stellen wij je hiervan op de hoogte door de nieuwe privacyverklaring op onze website te plaatsen met een aangepaste "ingangsdatum". We raden je aan deze verklaring regelmatig te bekijken.',
        },
        "ContactUs": {
          "title": "Contact opnemen",
          "desc": "Als je vragen hebt over deze privacyverklaring of over hoe wij met gegevens omgaan, of als je een van jouw rechten wilt uitoefenen, neem dan contact met ons op: Zebrano Studio, Nederland, info@zebranostudio.com",
          'address': {
            "name": "Zebrano Studio",
            "city": "Herikebrink 37 7544ER Enschede",
            "country": "The Netherlands",
            "email": "Info@zebranostudio.com ",
            "phone": "+31 6 42 99 70 18",
          }
        },
        "RightToLodge": {
          "title": "Recht om een klacht in te dienen",
          "desc": "Als je van mening bent dat jouw privacyrechten zijn geschonden, heb je het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP).",
        },
      },
      // =====TermsAndConditions======
      "TermsAndConditions": {
        "heading": {
          "title": "Ontworpen om te passen. Voorwaarden die dat ook doen.",
          "desc": "Hier vind je de essentie: hoe wij plannen, wanneer wij leveren, wat wij garanderen en hoe je jouw Zebrano-stuk jarenlang perfect houdt. Duidelijke afspraken, soepel verloop.",
        },
        "Definitions": {
          "title": "Definities",
          "desc": "",
          "ZebranoStudio": {
            "title": "Zebrano Studio:",
            "desc": "de besloten vennootschap Zebrano Studio, statutair gevestigd in Nederland, e-mail info@zebranostudio.com.",
          },
          "Customer": {
            "title": "Klant:",
            "desc": "de partij die een overeenkomst aangaat of wil aangaan met Zebrano Studio, of voor wie Zebrano Studio een aanbod doet of een ",
          },
          "BusinessCustomer": {
            "title": "Zakelijke klant: ",
            "desc": "de klant die handelt in de uitoefening van een beroep of bedrijf.",
          },
          "Consumer": {
            "title": "Consument:",
            "desc": "de klant die niet handelt in de uitoefening van een beroep of bedrijf.",
          },
          "CustomMadeGoods": {
            "title": "Maatwerkproducten:",
            "desc": " producten die volgens de specificaties van de klant worden gemaakt, niet vooraf gefabriceerd, geproduceerd op basis van de door de klant gekozen vorm, afmetingen, kleur en materiaalsoort, of duidelijk bestemd voor een specifieke persoon.",
          },
        },
        "Applicability": {
          "title": "Toepasselijkheid",
          "text1": "1. Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes, overeenkomsten, diensten en handelingen. In geval van tegenstrijdigheid tussen de inhoud van de overeenkomst en deze algemene voorwaarden, prevaleren de bepalingen van de overeenkomst.",
          "text2": "2. Indien er onduidelijkheid bestaat over de uitleg van één of meer bepalingen van deze voorwaarden of indien een situatie niet is geregeld, wordt de bepaling of situatie beoordeeld “in de geest” van deze voorwaarden.",
          "text3": "3. Indien Zebrano Studio niet steeds strikte naleving van deze voorwaarden verlangt, betekent dit niet dat de bepalingen niet van toepassing zijn, noch dat Zebrano Studio het recht verliest om in andere gevallen wel strikte naleving te eisen.",
        },
        "OfferQuotation" : {
          "title" : "Aanbod / Offerte",
          "text1" : "1. Aanbiedingen en offertes van Zebrano Studio zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.",
          "text2" : "2. Eventuele fouten – zoals onjuiste prijsvermeldingen en reken- of schrijffouten – op de website van Zebrano Studio, in advertenties, offertes, publicaties, orderbevestigingen of andere documenten zijn niet bindend.",
        },
        "TheAgreement" : {
          "title" : "De overeenkomst",

          "text1" : "1. De overeenkomst komt tot stand wanneer de klant het aanbod van Zebrano Studio accepteert. De koop is definitief bij ondertekening van de orderbevestiging.",

          "text2" : "2. De orderbevestiging is in principe leidend. De klant dient deze zorgvuldig te controleren op omissies en onjuistheden en deze tijdig, uiterlijk binnen 3 dagen na ontvangst, aan Zebrano Studio te melden.",

          "text3" : "3. Aanbiedingen en acties zijn tijdelijk. Na afloop van de looptijd kan de klant er geen gebruik meer van maken. Prijsverlagingen na het sluiten van de overeenkomst – bijvoorbeeld door acties of kortingen op showroommodellen – geven de klant geen recht op een lagere prijs.",

          "text4" : "4. Voor aanbiedingen en acties kunnen bijzondere voorwaarden gelden.",

          "text5" : "5. Wijzigingen van de overeenkomst en afwijkingen van deze algemene voorwaarden zijn alleen geldig indien schriftelijk overeengekomen tussen de klant en Zebrano Studio.",

          "text6" : "6. Indien wijzigingen in de overeenkomst leiden tot een verhoging of verlaging van de kosten, dient de aanpassing van de koopprijs schriftelijk te worden overeengekomen.",

          "text7" : "7. Indien blijkt dat (verdere) uitvoering van de overeenkomst door Zebrano Studio niet mogelijk is wegens overmacht, kan Zebrano Studio de overeenkomst opschorten of ontbinden zonder aansprakelijk te zijn voor schade. Dit laat onverlet dat partijen elkaar voorstellen kunnen doen om de overeenkomst zodanig te wijzigen dat juiste en volledige uitvoering alsnog mogelijk is.",
          
          "text8" : "8. In geval van faillissement, surseance van betaling of beslaglegging van de klant, kan Zebrano Studio de overeenkomst geheel of gedeeltelijk ontbinden zonder ingebrekestelling.",
        },
        "RightOfWithdrawal":{
          "title":"Herroepingsrecht / Beëindiging van de overeenkomst",
          "text1":"1. De meeste producten die door Zebrano Studio worden vervaardigd en/of geleverd zijn maatwerk en niet prefab. Dit omvat in ieder geval producten die in de fabriek van Zebrano Studio worden gemaakt, zoals tafels, salontafels, bijzettafels, bartafels, tuintafels, kasten, tv-meubels, gestoffeerde meubels en op maat gemaakte wandplanken. Het herroepingsrecht is op deze producten niet van toepassing. Ze kunnen niet worden geretourneerd.",

          "text2":"2. Indien de klant de overeenkomst wenst te beëindigen zonder dat er sprake is van een tekortkoming en Zebrano Studio hiermee instemt, kan de overeenkomst met wederzijds goedvinden worden beëindigd. In dat geval heeft Zebrano Studio recht op schadevergoeding, waaronder geleden verlies en gederfde winst. Tenzij anders overeengekomen bedraagt de vergoeding 30% van de koopprijs, of 50% indien de klant op het moment van beëindiging reeds op de hoogte was gesteld dat (gedeeltelijke) levering kan plaatsvinden.",

          "text3":"3. Indien Zebrano Studio op verzoek van de consument het product ophaalt, zijn de kosten voor de consument. Deze bedragen €95,00 inclusief btw voor adressen binnen de Benelux. Het product moet bij ophaling deugdelijk verpakt en gereed staan achter de eerste drempel. Indien dit niet het geval is, wordt het product niet meegenomen.",

          "text4":"4. Het aankoopbedrag wordt terugbetaald nadat Zebrano Studio het product heeft geïnspecteerd en heeft vastgesteld dat het volledig, ongebruikt en onbeschadigd is.",
        },
         "IntellectualProperty" : {
          "title" : "Intellectueel eigendom",
          "text1" : "1. Tenzij schriftelijk anders overeengekomen, behoudt Zebrano Studio de auteursrechten en alle intellectuele eigendomsrechten op door haar gedane aanbiedingen en op door haar verstrekte ontwerpen, afbeeldingen, tekeningen, (prototype) modellen en dergelijke. De klant mag zonder toestemming van Zebrano Studio geen materiaal waarop intellectuele eigendomsrechten rusten verveelvoudigen, openbaar maken, exploiteren of tentoonstellen.",
        },
        "DeliveryTime" : {
          "title" : "Levertijd",
          "text1" : "1. De levertijd en/of uitvoeringstermijn wordt door Zebrano Studio bij benadering vastgesteld.",

          "text2" : "2. Bij het vaststellen van de levertijd en/of uitvoeringstermijn gaat Zebrano Studio uit van de omstandigheden die haar op dat moment bekend zijn.",

          "text3" : "3. De levertijd en/of uitvoeringstermijn gaat in zodra overeenstemming is bereikt over alle commerciële en technische details, alle noodzakelijke informatie in het bezit is van Zebrano Studio en, voor zover overeengekomen, de aanbetaling is ontvangen.",

          "text4" : "4. Indien de verwachte levertijd en/of uitvoeringstermijn wordt overschreden, krijgt Zebrano Studio een aanvullende redelijke termijn om alsnog te leveren.",

          "text5" : "5. Het overschrijden van de levertijd en/of uitvoeringstermijn geeft de klant nooit recht op schadevergoeding door Zebrano Studio.",
        },
        "TransportAndDamage" : {
          "title" : "Transport en schade bij levering",
          "text1" : "1. Tenzij anders overeengekomen omvat de overeenkomst het transport van de producten door Zebrano Studio, die het risico van schade en verlies tijdens transport draagt. Indien de producten door een professionele vervoerder worden geleverd, zorgt Zebrano Studio voor een passende verzekering.",
          "text2" : "2. Zebrano Studio is niet aansprakelijk voor schade die ontstaat vanaf de eerste deur/drempel van het afleveradres. Wij helpen echter graag met het plaatsen van het product binnen.",
          "text3" : "3. Indien bij levering schade wordt geconstateerd, dient de klant dit binnen twee werkdagen na levering aan Zebrano Studio te melden; anders wordt de klant geacht de geleverde producten zonder schade te hebben ontvangen.",
        },
        "Delivery" : {
          "title" : "Levering",
          "text1":"1. De klant moet ervoor zorgen dat de plaats van levering goed bereikbaar is en dat alles binnen zijn macht wordt gedaan om een vlotte levering mogelijk te maken. De klant moet er tevens voor zorgen dat de plaats van levering deugdelijk kan worden beveiligd.",

          "text2":"2. De klant dient Zebrano Studio vóór het aangaan van de overeenkomst te informeren over bijzondere omstandigheden op de plaats van levering die het gebruik van hulpmiddelen – zoals een (verhuis)lift of kraan – noodzakelijk maken. Ook moet de klant ervoor zorgen dat vereiste toestemmingen (vergunningen e.d.) en essentiële informatie (bijv. bereikbaarheid van de locatie) tijdig aan Zebrano Studio worden verstrekt.",

          "text3":"3. Bij onjuiste of onvolledige informatie van de klant zijn de (extra) kosten voor het gebruik van speciale hulpmiddelen voor rekening van de klant.",

          "text4":"4. Indien een (verhuis)lift of kraan nodig is, zorgt Zebrano Studio voor de beschikbaarheid hiervan op het moment van levering. De kosten zijn voor de klant en moeten vóór levering aan Zebrano Studio worden voldaan.",

          "text5":"5. Indien de klant zelf een (verhuis)lift of kraan wenst te regelen, levert Zebrano Studio de producten kosteloos op de begane grond, zonder montage. De klant blijft verantwoordelijk voor het verplaatsen en/of vervoeren van de producten via lift of kraan, het laden en lossen, en de montage, evenals voor eventuele daaruit voortvloeiende schade.",

          "text6":"6. Indien de plaats van levering op het moment van levering niet toegankelijk is – bijvoorbeeld omdat de productafmetingen te groot zijn om die plaats te bereiken – is dit voor rekening en risico van de klant. In dat geval levert Zebrano Studio de producten ongemonteerd op de begane grond.",

          "text7":"7. Indien de aangeboden producten niet worden geaccepteerd, anders dan wegens een gebrekkige levering, zal Zebrano Studio binnen een redelijke termijn een tweede levering doen.",

          "text8":"8. Indien bij levering door Zebrano Studio blijkt dat onmiddellijke levering niet kan plaatsvinden door omstandigheden die voor rekening en risico van de klant komen zoals beschreven in dit artikel, en de klant een tweede levering verzoekt, kan Zebrano Studio extra vracht-, leverings- en opslagkosten aan de klant in rekening brengen.",

          "text9":"9. Indien de klant de leverdatum wil uitstellen, moet dit uiterlijk 20 werkdagen vóór de geplande leverdatum aan Zebrano Studio worden doorgegeven. Een later verzoek wordt beoordeeld op haalbaarheid en er worden opslagkosten aan de klant in rekening gebracht. De opslagkosten bedragen €25 per week vanaf de oorspronkelijke leverdatum. Voor wijzigingen binnen 3 werkdagen vóór de geplande leverdatum rekenen wij €75 wijzigingskosten aan de klant, naast de genoemde opslagkosten.",
        },
        "StorageOfProducts":{
          "title" : "Opslag van producten",
          "text1" : "1. Na weigering of na een tweede levering kan Zebrano Studio opslagkosten en eventuele verdere schade en kosten aan de klant in rekening brengen.",
          "text2" : "2. Indien een tweede levering eveneens niet wordt geaccepteerd, zal Zebrano Studio nakoming van de overeenkomst eisen en de klant een termijn van maximaal 30 dagen geven om de producten alsnog af te nemen. Indien de producten binnen deze termijn niet worden afgenomen, kan Zebrano Studio de overeenkomst ontbinden, waarbij de klant schadevergoeding verschuldigd is voor de geleden schade.",
        },
        "Payment" : {
          "title" : "Betaling",
          "text1" : "1. Betaling geschiedt in euro’s. Bij de prijzen van Zebrano Studio wordt aangegeven of deze inclusief of exclusief btw zijn.",

          "text2" : "2. Bij een overeenkomst met een consument kan Zebrano Studio een aanbetaling van maximaal 30% van de koopprijs vragen. Bij overeenkomsten met zakelijke klanten kan Zebrano Studio, vóór levering of voortzetting van de uitvoering, betaling van de volledige koopprijs of zekerheid voor de betalingsverplichtingen verlangen.",

          "text3" : "3. Tenzij anders overeengekomen, dient de netto (resterende) koopprijs vóór levering te worden betaald.",

          "text4" : "4. Indien Zebrano Studio een levering in gedeelten uitvoert, heeft zij het recht betaling te vragen voor iedere deellevering. De klant ontvangt voor elke levering een deelfactuur.",

          "text5" : "5. De consument is wettelijke rente verschuldigd conform artikel 6:119 BW over de periode waarin hij in verzuim is met betaling van de koopprijs. De zakelijke klant is wettelijke handelsrente verschuldigd (artikel 6:119a BW) over de periode van verzuim.",

          "text6" : "6. Onverminderd het bepaalde in lid 5 stuurt Zebrano Studio de consument na intreden van verzuim een betalingsherinnering, waarbij betaling binnen 14 dagen na de dag van de herinnering wordt gevorderd. De consument wordt erop gewezen dat buitengerechtelijke incassokosten verschuldigd zijn indien betaling uitblijft, met vermelding van de hoogte van die kosten.",

          "text7" : "7. Zebrano Studio is gerechtigd tot invordering van het verschuldigde bedrag over te gaan zonder verdere ingebrekestelling en kan hiervoor derden inschakelen. In dat geval is de klant tevens buitengerechtelijke incassokosten verschuldigd, vastgesteld conform de Wet normering buitengerechtelijke incassokosten en het daarbij behorende besluit.",

          "text8" : "8. Bij klachten is de klant slechts gerechtigd betaling van dat deel van het verschuldigde bedrag op te schorten dat redelijkerwijs in verhouding staat tot de aard en ernst van de klacht. Dit ontslaat de klant niet van de verplichting het overige binnen de overeengekomen termijn te betalen.",

          "text9" : "9. Zebrano Studio blijft eigenaar van de producten totdat de klant het volledige verschuldigde bedrag uit de overeenkomst heeft betaald. De klant moet de producten zorgvuldig behandelen en mag deze niet aan derden overdragen, verpanden, uitlenen of (laten) verwijderen van de plaats van levering totdat de koopprijs en eventuele rente en kosten volledig zijn voldaan.",
        },
        "Warranty" : {
          "title" : "Garantie",
          "text1" : "1. Tenzij schriftelijk anders overeengekomen, garandeert Zebrano Studio de deugdelijkheid van de geleverde producten gedurende een periode van 2 jaar na levering.",

          "text2" : "2. Bij maatwerkproducten zijn kleine afwijkingen in afmetingen toegestaan. Zebrano Studio mag tot 2% afwijken van de overeengekomen afmetingen, tenzij uitdrukkelijk anders overeengekomen.",

          "text3" : "3. De klant moet Zebrano Studio in alle gevallen de gelegenheid geven een gebrek te herstellen. De aansprakelijkheid van Zebrano Studio is beperkt tot kosteloos herstel van een gebrekkig product of vervanging daarvan of van een onderdeel, naar keuze van Zebrano Studio.",

          "text4" : "4. Geen garantie wordt verleend indien gebreken het gevolg zijn van normale slijtage, onoordeelkundig gebruik, gebrek aan of onjuist onderhoud of installatie, (de)montage, wijziging of reparatie door de klant of derden. Geen garantie wordt verleend op producten die bij levering niet nieuw waren, showroommodellen, producten of onderdelen die onder een fabrieksgarantie vallen, of productspecifieke eigenschappen waaronder het natuurlijke gedrag van hout (zie hieronder).",

          "text5" : "5. Op alle houten onderdelen geldt een beperkte garantie die uitsluitend fabricagefouten dekt. Het natuurlijke gedrag van hout is uitgesloten, aangezien dit geen gebrek is in het product of de productie, maar een eigenschap van het materiaal. “Gedrag van hout” omvat uitzetting, krimp, scheuren en/of kromtrekken. Het door Zebrano Studio gebruikte hout is gezaagd en gedroogd tot een vochtgehalte van circa 8%–12%, waardoor het geschikt is voor gebruik in een verwarmde ruimte. Hout blijft een natuurproduct en neemt vocht op of geeft het af. De mate waarin dit gebeurt, hangt onder meer af van temperatuurverschillen en luchtvochtigheid. Hout werkt minder als de luchtvochtigheid nagenoeg constant blijft; wij adviseren een luchtvochtigheid van 50%–60%, doorgaans 10% lager in de winter en 10% hoger in de zomer.",

          "text6" : "6. Het document “Houtvariaties en tips” maakt deel uit van deze algemene voorwaarden en wordt per e-mail aan de klant verstrekt.",

          "text7" : "7. Indien bij aankoop het All-in-house pakket is afgenomen, dient de klant zelf de bijbehorende onderhoudsproducten op het product toe te passen. Dit wordt niet uitgevoerd door Zebrano Studio.",

          "text8" : "8. Zebrano Studio is niet verantwoordelijk voor afwijkende verwachtingen van de klant over de bekleding van zitmeubelen in andere materialen dan die welke aanwezig zijn in onze showrooms.",

          "text9" : "9. De reparatiebon van Zebrano Studio dekt de reparatie van (droge) scheuren in houten meubels die door Zebrano Studio zijn vervaardigd. Andere (reparatie)diensten vallen onder verschillende tarieven die door Zebrano Studio worden vastgesteld.",
        },
        "Liability" : {
          "title" : "Aansprakelijkheid",
          "text1" : "1. Het risico van schade berust bij Zebrano Studio tot aan levering aan de klant bij de eerste deur/drempel van het afleveradres, tenzij uitdrukkelijk anders overeengekomen.",
          "text2" : "2. Zebrano Studio is niet aansprakelijk voor schade aan muren, kozijnen, vloeren of andere goederen veroorzaakt door levering en/of montage van onze producten.",
          "text3" : "3. Het risico van schade berust bij Zebrano Studio tot aan de levering aan de klant bij de eerste deur/drempel van het afleveradres, tenzij uitdrukkelijk anders is overeengekomen.",
          "text4" : "4. Zebrano Studio is niet aansprakelijk voor schade aan muren, kozijnen, vloeren of andere goederen die is veroorzaakt door de levering en/of montage van onze producten.",
          "text5" : "5. Zebrano Studio is niet aansprakelijk voor directe of indirecte schade als gevolg van gebreken in de geleverde producten of anderszins, noch voor vertragingen in de levering, behalve in gevallen van opzet of grove nalatigheid aan de zijde van Zebrano Studio.",
          "text6" : "6. Indien de klant zelf producten installeert, monteert, enz., of dit laat doen door een derde partij, is de klant en/of derde partij verantwoordelijk voor de juiste installatie, montage, enz. en alles wat daarbij hoort. In dergelijke gevallen is Zebrano Studio niet verantwoordelijk of aansprakelijk indien er iets misgaat tijdens de installatie/montage of indien er onvolkomenheden in het resultaat optreden.",
          "text7" : "Indien Zebrano Studio aansprakelijk is, is zij nooit verplicht enige schade, van welke aard en door welke oorzaak dan ook, te vergoeden die het totale bedrag van de transactie tussen de klant en Zebrano Studio te boven gaat.",
          "text8" : "Indien Zebrano Studio zich niet kan beroepen op enige uitsluiting van aansprakelijkheid, is haar aansprakelijkheid beperkt tot het bedrag dat door haar aansprakelijkheidsverzekering wordt gedekt."
        },
        "Complaints" : {
          "title" : "Complaints",
          "text1" : "Klachten over de kwaliteit van de geleverde producten of materialen of de uitvoering van het werk kunnen door de klant slechts worden ingediend bij Zebrano Studio binnen 2 werkdagen na levering van de producten. Indien indiening binnen deze termijn redelijkerwijs niet mogelijk is, geldt de termijn van 2 werkdagen vanaf het moment dat het gebrek werd ontdekt of redelijkerwijs kon worden ontdekt. De klacht dient een duidelijke en volledige omschrijving van de bezwaren en geconstateerde gebreken te bevatten.",
          "text2" : "Het vorige lid laat de kortere termijn genoemd in artikel 9 onverlet.",
          "text3" : "Wanneer de afnemer tegen het advies van Zebrano Studio in bepaalde werkzaamheden wil (doen) verrichten of beletten, is, tenzij schriftelijk vastgelegd, elke klacht hierop uitgesloten.",
        },
        "ApplicableLaw" : {
          "title" : "Applicable law",
          "text" : " “Op alle overeenkomsten waarop deze voorwaarden van toepassing zijn, is Nederlands recht van toepassing.” "
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
        "FlushToWall": {
          "pageName": "Flush-to-Wall",
          "banner": {
            "bannerBG": "",
            "heading": "Bündig mit der Wand Türen (Seamless Series)",
            "subHeading": "Wandbündige Türen — auch verdeckte Türen, Türen mit unsichtbarem Rahmen oder unsichtbare Türen genannt — sind das Nonplusultra minimalistischer Architektur. Bei Zebrano Studio fertigen wir diese Türen so, dass sie perfekt bündig mit Ihrer Wand abschließen, sodass Rahmen und Scharniere vollständig verschwinden. Das Ergebnis? Eine saubere, ununterbrochene Fläche, die die Schönheit Ihres Interieurs ohne visuelle Ablenkung unterstreicht.",
            "btnText": "Kollektion ansehen"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Was ist eine wandbündige Tür?",
              "heading": "Die Kunst des Verschwindens",
              "description": "Wandbündige Türen, auch verdeckte oder unsichtbare Türen genannt, schließen perfekt mit Ihrer Wand ab – ohne sichtbare Rahmen, Scharniere oder Leisten. Sie verschmelzen nahtlos mit Ihrer Architektur und schaffen eine saubere, ununterbrochene Oberfläche.",
              "btnText": "Kollektion ansehen"
            },
            "desc2": {
              "title": "Warum wandbündige Türen wählen?",
              "heading": "Minimalismus. Neu definiert ",
              "description": "Diese Türen sind ideal für Innenräume, in denen Designkontinuität entscheidend ist. Ob in Wandfarbe gestrichen oder als mutiges Statement gestaltet – wandbündige Türen lenken die Aufmerksamkeit auf den Raum, nicht auf die Beschläge.",
              "btnText": "Inspiration finden"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materialmöglichkeiten",
              "heading": "Für Ihren Raum gefertigt ",
              "desc": " Von edlem Furnier über glatten Lack bis hin zu strukturiertem Glas oder Steineinlagen – jede wandbündige Tür wird maßgefertigt, abgestimmt auf Ihre Maße und Ihre Designvision.",
              "btnText": "Materialien ansehen"
            },
            "row2": {
              "title": "Beschläge & Details",
              "heading": "Verborgene Technik",
              "desc": " Verdeckte Scharniere, Magnetschlösser und Präzisionsrahmen sind für eine einwandfreie Funktion konzipiert – und bleiben dabei unsichtbar.",
              "btnText": "Beschlagoptionen ansehen"
            },
            "row3": {
              "title": "Integrationsmöglichkeiten",
              "heading": "Eine durchgehende Fläche",
              "desc": "Kombinieren Sie Ihre wandbündige Tür mit passenden Wandpaneelen oder integrierten Regalen für ein architektonisches Element, das von einer Fläche nahtlos in die nächste übergeht.",
              "btnText": "Materialien ansehen"
            },
          },
        },
        "WallPartitions": {
          "pageName": "Raumteiler & Trennwände",
          "banner": {
            "bannerBG": "",
            "heading": "Raumteiler & Trennwände",
            "subHeading": "Unsere maßgefertigten Raumteiler sind dafür konzipiert, Räume zu gestalten, ohne Licht, Fluss oder Stil zu beeinträchtigen. Ob feststehend, schiebbar, faltbar oder aus Glas – jede Trennwand wird passend zu Ihren Türen und Oberflächen gefertigt, für ein einheitliches High-End-Design. Ideal für offene Wohnräume, Büros oder Hospitality-Bereiche – sie verleihen Privatsphäre, Struktur und Eleganz, maßgeschneidert auf Ihre Dimensionen und Ihre Interior-Vision.",
            "btnText": "Kollektion ansehen"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Was ist ein Raumteiler?",
              "heading": "Stil in jeder Unterteilung",
              "description": "Raumteiler sind maßgefertigte, nichttragende Paneele, die Räume definieren und gleichzeitig Ihre Designvision bewahren. Ob massiv, aus Glas oder Materialkombination – sie fügen Struktur hinzu, ohne Licht oder Fluss zu unterbrechen.",
              "btnText": "Kollektion ansehen"
            },
            "desc2": {
              "title": "Warum Raumteiler wählen?",
              "heading": "Flexibel, funktional, schön",
              "description": "Ideal für offene Wohnkonzepte – Raumteiler bieten Privatsphäre, Schallschutz und Stil, und integrieren sich perfekt in Ihre bestehenden Oberflächen.",
              "btnText": "Inspiration finden"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materialmöglichkeiten",
              "heading": "Um Sie herum gestaltet ",
              "desc": "Wählen Sie zwischen Holz, Furnier, Lack, Milchglas, Klarglas oder Kombinationen, um eine Trennwand zu schaffen, die zu Ihren Türen und Ihrem Einrichtungsstil passt.",
              "btnText": "Materialien ansehen"
            },
            "row2": {
              "title": "Beschläge & Details",
              "heading": "Bewegung leicht gemacht",
              "desc": "Für Schiebe- oder Faltwände verwenden wir Präzisionsschienen und Soft-Close-Systeme, die eine reibungslose Funktion gewährleisten – ohne das Design zu beeinträchtigen.",
              "btnText": "Beschlagoptionen ansehen"
            },
            "row3": {
              "title": "Integrationsmöglichkeiten",
              "heading": "Einheitliches Interieur",
              "desc": "Koordinieren Sie Ihre Trennwände mit Zebrano-Türen, Wandverkleidungen oder wandbündigen Systemen für ein durchgehendes, harmonisches Gesamtbild.",
              "btnText": "Kontakt aufnehmen"
            },
          },
        },
        "Boiserie": {
          "pageName": "Boiserie Wandverkleidung",
          "banner": {
            "bannerBG": "",
            "heading": "Boiserie Wall Paneling",
            "subHeading": "Boiserie ist dekorative Wandverkleidung, die schlichte Wände in architektonische Highlights verwandelt. Bei Zebrano Studio reicht unsere maßgefertigte Boiserie von klassischen, verzierten Stilen bis hin zu schlichter, minimalistischer Verkleidung – alles abgestimmt auf Ihre Türen und Ihr Interieur für ein harmonisches High-End-Ambiente.",
            "btnText": "Kollektion ansehen"
          },
          "DoorDescription": {
            "desc1": {
              "title": "Was ist Boiserie?",
              "heading": "Von klassisch bis modern ",
              "description": "Ursprünglich ein Merkmal der französischen Architektur, verleiht Boiserie Innenräumen Eleganz und Tiefe. Heute kann sie ganz auf modernes Minimalismus, zeitlose Tradition oder mutige Designstatements zugeschnitten werden.",
              "btnText": "Kollektion ansehen"
            },
            "desc2": {
              "title": "Warum Boiserie wählen?",
              "heading": "Architektonische Kontinuität",
              "description": " Boiserie verleiht Wänden Textur, Rhythmus und Luxus. Sie kann Türen einrahmen, in wandbündige Systeme integriert werden oder als markantes Element für sich stehen – und sorgt so für nahtlose Designkontinuität in Ihrem gesamten Raum.",
              "btnText": "Inspiration finden"
            },
          },
          "MaterialAndDesign": {
            "row1": {
              "title": "Materialmöglichkeiten",
              "heading": "Passend gestaltet",
              "desc": "Von edlem Holzfurnier über lackierte Paneele, Textilien oder Steinelemente – unsere Boiserie wird stets maßgefertigt, um mit Ihrem Einrichtungsstil und Ihren Maßen zu harmonieren.",
              "btnText": "Materialien ansehen"
            },
            "row2": {
              "title": "Beschläge & Details",
              "heading": "Präzision in jeder Linie ",
              "desc": "Unsichtbare Montagesysteme und nahtlose Details lassen Ihre Boiserie wie einen integralen Bestandteil der Architektur wirken – nicht wie ein Zusatz",
              "btnText": "Beschlagoptionen ansehen"
            },
            "row3": {
              "title": "Integrationsmöglichkeiten",
              "heading": "Wände, die eine Geschichte erzählen",
              "desc": "Kombinieren Sie Boiserie mit Zebrano-Türen, Trennwänden oder wandbündigen Systemen für ein einheitliches architektonisches Konzept, das Wände zu Designstatements macht.",
              "btnText": "Kontakt aufnehmen"
            },
          },
        },
        "Materials": {
          "pageName": "Materialien",
          "banner": {
            "bannerBG": "",
            "heading": "Materialien, die unsere Designs prägen",
            "subHeading": "Bei Zebrano Studio beginnt jedes Detail mit dem richtigen Material. Von zeitlosen Hölzern und edlen Furnieren bis hin zu Glas, Stein und Metall – wir verbinden Handwerkskunst mit Innovation. Jede Wahl definiert den Charakter, die Langlebigkeit und die Schönheit Ihres Interieurs.",
            "btnText": "Kollektion ansehen"
          },
        },
      },
      // ====contactPage====
      "contact": {
        "pageName": "Kontaktieren Sie uns",
        "header": {
          "heading": "Kontaktieren Sie uns",
          "text1": "Bei Zebrano Studio begannen wir mit einer einfachen Idee: luxuriöse, maßgeschneiderte Türen zugänglich zu machen – ohne Grenzen. Jedes Zuhause verdient einen Hauch von Design, und jeder Raum sollte eine Geschichte erzählen.",
          "text2": "Ob Sie groß träumen, an einem einzigartigen Projekt arbeiten oder einfach nur neugierig auf die Möglichkeiten sind – wir würden uns freuen, von Ihnen zu hören. Nutzen Sie das Formular unten, besonders wenn Sie spezielle Wünsche oder außergewöhnliche Ideen haben.",
        },
        "form": {
          "label": {
            "Name": "Name",
            "Email": "E-Mail",
            "PhoneNumber": "Telefonnummer",
            "ContactReason": "Grund der Kontaktaufnahme",
            "Consumer": "Privatkunde",
            "Message": "Nachricht",
          },
          "select": {
            "optionOne": {
              "option1": "Ich hätte gern ein Angebot für eine spezielle Maßanfertigung"
            },
            "optionTwo": {
              "option1": "Geschäftskunde"
            },
          },
          "Submit": "Absenden"
        }
      },
      // =====Inspiration====
      "Inspiration": {
        "pageName": "Inspiration",
        "banner": {
          "heading": "Entdecken Sie unsere Arbeit",
          "description": "Unsere Zebrano Studio Türen sind darauf ausgelegt, Ihren Raum aufzuwerten, und bieten die maßgeschneiderte Luxusqualität, die normalerweise architektonischen Meisterwerken vorbehalten ist. Erleben Sie, wie wir Exklusivität zugänglich machen.",
          "titleOne": "Mehr als 1000 Konfigurationen",
          "titleTwo": "Empfohlen von Innenarchitekten",
        },
        "btnText": "Mehr ansehen",
      },
      // =====Architects=======
      "Architects": {
        "pageName": "Inspiration",
        "ArchitectsBanner": {
          "title": "Werden Sie Teil der Geschichte von Zebrano Studio",
          "btnText": "Jetzt beitreten",
        },
        "PartnerSupport": {
          "partnerHeading": {
            "title": "Partner-First Support.",
            "desc": "Wir haben Zebrano gegründet, weil Fachleute einen Lieferanten verdienen, der ihren Erfolg unterstützt, statt um ihre Kunden zu konkurrieren. Sie behalten die Beziehungen, sichern sich die verdienten Margen und konzentrieren sich auf das, was Sie am besten können.",
            "btnText": "Werden Sie Partner von Zebrano",
          },
          "professionalDemand": {
            "heading": "Sind Sie ein Designer, der wirklich den Mut hat, anders zu denken?",
            "textOne": "Haben Sie manchmal das Gefühl, dass Ihre Kreativität durch das Mögliche eingeschränkt wird – sei es durch Materialien, Oberflächen oder Produktionsgrenzen? Sie sind nicht allein. Wir verstehen das.",
            "textTwo": "Bei Zebrano glauben wir, dass großartiges Design niemals durch die Umsetzung begrenzt werden sollte. Deshalb bieten wir Ihnen unbegrenzte Möglichkeiten, zu erkunden, zu experimentieren und Ihre kühnsten Ideen zum Leben zu erwecken – mit unserer vollen Unterstützung bei jedem Schritt.",
            "textThree": "Wenn Sie bereit sind, mit einem Partner zusammenzuarbeiten, der Ihre Vision genauso wertschätzt wie Sie selbst und der sich dafür einsetzt, das Unmögliche möglich zu machen, dann sind Sie hier genau richtig."
          },
        },
        "Conversation": {
          "title": "Lassen Sie uns gemeinsam Grenzen überschreiten. Treten Sie unserem Partnerprogramm bei und gestalten Sie ohne Grenzen.",
          "heading": "Lassen Sie uns ins Gespräch kommen. ",
          "desc": "Wir würden gerne mehr über Ihre Ideen, Projekte oder Fragen erfahren. Kein Druck – nur ein freundliches Gespräch, um herauszufinden, wie wir gemeinsam etwas Besonderes schaffen können. Melden Sie sich jederzeit!",
          "btnText": "Partner with Zebrano",
        },
        "CasewellPartner": {
          "heading": "Was Sie als Zebrano-Partner erhalten:",
          "subHeading": "",
          "card": {
            "title1": "Echte Großhandelspreise",
            "desc1": "Wir bieten allen unseren Partnern echte Großhandelspreise, damit Sie Ihr Geschäft profitabel und wettbewerbsfähig ausbauen können. Denn wenn Sie erfolgreich sind, sind wir es auch.",

            "title2": "Unbegrenzte Designmöglichkeiten",
            "desc2": "Lassen Sie Ihrer Kreativität freien Lauf. Ob einzigartige Formen, Materialkombinationen oder spezielle Oberflächen – wir setzen keine Grenzen. Sie träumen es, wir machen es möglich.",

            "title3": "Umfassende interne Designunterstützung",
            "desc3": "Sie erhalten direkten Zugang zu unserem Designteam, das Sie in jedem Schritt begleitet. So entlasten wir Sie und reduzieren Stress, damit Sie sich auf das konzentrieren können, was Sie am besten können: großartige Räume gestalten.",

            "title4": "Sicherheit & Verlässlichkeit durch offene Kommunikation",
            "desc4": "Bei Zebrano ist Kommunikation unser Fundament. Wir halten Sie informiert, beziehen Sie in den Prozess ein und unterstützen Sie jederzeit, sodass Sie bei jedem Projekt völlige Sicherheit haben.",

            "title5": "Umfassender Service-Support",
            "desc5": "Wir sind mehr als nur ein Materiallieferant – wir sind Ihr Supportteam im Hintergrund. Sie profitieren von Designberatung, Zugang zu unserem Showroom und Koordination der Abwicklung – als hätten Sie ein eigenes Team im Haus, jedoch ohne die Fixkosten. Weniger Stress, weniger Fehler, mehr Zeit für das, was Sie am liebsten tun.",
          },
        },

      },
      // ==== zebrano/aboutus =====
      "Zebrano": {
        "pageName": "Zebrano",
        "ZebranoBanner": {
          "headingOne": "Wir machen Luxus",
          "headingTwo": " für alle",
          "headingThree": "zugänglich",
          "zebranoText": "Bei Zebrano Studio glauben wir, dass großartiges Design für jeden zugänglich sein sollte. Von maßgeschneiderten Türen bis hin zu vollständig integrierten Wandlösungen – unsere Mission ist es, luxuriöse Handwerkskunst und architektonische Schönheit in jedes Zuhause zu bringen – vom Stadtapartment bis zur Landhausvilla.",
          "texts": ["design", "Türen", "Interieur"]
        },
        "ZebranoJourney": {
          "title": "Von einer Tür zu unendlichen Möglichkeiten",
          "heading": "Die Reise von Zebrano Studio",
          "desc": "Was als ein einziges maßgefertigtes Türprojekt begann, hat sich zu einer vollständigen Kollektion von Pivot-, Schiebe-, Dreh- und wandbündigen Türen entwickelt, die das Raumgefühl völlig neu definieren. Inspiriert von Luxushotels und architektonischen Details ist es unsere Mission, Türen und Wandlösungen zu schaffen, die hochwertige Materialien mit persönlicher Gestaltungsfreiheit vereinen.",
          "btnText": "Mehr erfahren",
        },
        "DraggableSlider": {
          "heading": "Lernen Sie die Gesichter hinter Zebrano Studio kennen",
          "title": "Unser Team",
          "description": "Hinter jeder nahtlosen Tür steckt eine Geschichte – und ein paar Perfektionisten mit Sägespänen im Haar. Lernen Sie die Köpfe (und Hände) kennen, die Zebrano Studio zum Leben erwecken.",
          "person": {
            "Robbert": {
              "name": "Robbert",
              "designation": "Interim Finance",
              "details": "Aus der Finanzberatung kommend und mit einer Portion Kreativität ausgestattet, entschied sich Robbert, seine Talente zu verbinden, um Zebrano wachsen zu lassen. Als einer der Brüder, die die Zebrano-Reise begonnen haben, schlägt er die Brücke zwischen Strategie und Design und stellt sicher, dass jede geschäftliche Entscheidung mit unserer kreativen Vision übereinstimmt.",
            },

            "Mathijs": {
              "name": "Mathijs",
              "designation": "Eigentümer & Holzhandwerker",
              "details": "Mit mehr als 15 Jahren Erfahrung im Baumanagement und in Großprojekten hat sich Mathijs einen Ruf für Präzision und Führungsstärke erarbeitet. Schon in jungen Jahren war seine Leidenschaft für Holzarbeiten deutlich zu erkennen. Im Laufe der Zeit wechselte er von der Leitung eines mittelständischen Bauunternehmens zur Gründung von Zebrano Studio – wo Handwerkskunst auf luxuriöses Design trifft. Zitat: „Von Holzmaserungen bis zu großen Designs – jedes Detail erzählt eine Geschichte.“",
            },

            "Rick": {
              "name": "Rick",
              "designation": "Holzspezialist",
              "details": "Rick ist unser wahrer Holzspezialist. Ausgebildet in Zimmerei und Holzverarbeitung kennt er jedes Detail des Handwerks – von der Auswahl der richtigen Holzarten bis hin zum millimetergenauen Zuschnitt. Sein tiefes Wissen stellt sicher, dass jedes Zebrano-Stück nicht nur schön, sondern auch technisch makellos ist.",
            },

            "Dave": {
              "name": "Dave ",
              "designation": "Marketing & Vertrieb",
              "details": "Dave bringt eine kreative, kommerzielle Note ins Zebrano Studio. Mit Erfahrung im Markenstorytelling und in der Kundenbetreuung sorgt er dafür, dass unsere Vision sowohl Hausbesitzer als auch Architekten erreicht. Er ist die Verbindung zwischen unserer Werkstatt und der Welt und stellt sicher, dass sich jeder Kunde während des gesamten Prozesses begleitet und inspiriert fühlt.",
            },

            "Peter": {
              "name": "Peter",
              "designation": "Holzhandwerker",
              "details": "Peter verkörpert das Herz unserer Werkstatt. Versiert in modernen Techniken ebenso wie in traditioneller Handwerkskunst, bringt er Geduld und Präzisio",
            },
          },
        },
        "Sustainability": {
          "title": "Nachhaltigkeit",
          "heading": "Handwerk mit Verantwortung",
          "desc": "Wir wählen nachhaltige Materialien, arbeiten mit verantwortungsbewussten Lieferanten und fertigen Stücke, die jahrzehntelang halten. Denn großartiges Design darf niemals auf Kosten des Planeten gehen.",
          "btnText": "Mehr erfahren",
        },
        "ServicesThasFitYourNeed": {
          "title": "Service, die zu Ihren Bedürfnissen passt",
          "desc": "Ob Sie eine einzelne maßgefertigte Tür bestellen oder mehrere Elemente in Ihr Interieur integrieren möchten – wir machen den Prozess einfach und inspirierend. Unser Team begleitet Sie bei Entscheidungen, Zeitplänen und praktischen Details – damit Sie sich vom ersten Gespräch bis zur finalen Montage sicher fühlen.",
          "btn": "Service",
          "FAQ": {
            "heading": "Fragen? Viele Antworten finden Sie in unseren FAQ, unter anderem:",

            "faqs": [
              {
                question: "Wie lang sind die Standard-Lieferzeiten?",
                answer: ` – Türen (Pivot/Schiebe/Dreh) 6–8 Wochen; Wandbündig 8–10 Wochen; Raumtrennwände 6–8 Wochen; Boiserie 8–10 Wochen.`,
              },
              {
                question: "Wie individuell sind Ihre Türen anpassbar?",
                answer: " – Größen, Oberflächen, Glasarten, Kantendetails, Beschlagsätze und Optionen (z. B. Soft-Close, Pivot-Schließer, Dichtungen) sind konfigurierbar. Extrem maßgeschneiderte Projekte laufen über ein Angebot.",
              },
              {
                question: "Liefern Sie auch Beschläge?",
                answer: " – Ja, Scharniere, Pivot-Beschläge, Schieber, Griffe und Dichtungen gemäß Spezifikation; Fremdbeschläge nach Absprache und Kompatibilitätsprüfung.",
              },
              {
                question: "Welche Garantie bieten Sie?",
                answer: " – 2 Jahre Garantie auf Türen/Materialien (Fertigungsfehler/Strukturintegrität) und 6 Monate Garantie auf Montage (wenn von Zebrano durchgeführt).",
              },
              {
                question: "Bieten Sie auch Montage an?",
                answer: "– Ja, optionale Montage in NL. Beinhaltet den Einbau von Zebrano-Rahmen/Blättern/Beschlägen, Ausrichtung, Abstände und Funktionsprüfungen; ausgenommen sind Bauarbeiten, Elektrik, Verputzen/Streichen und Fremdmaterialien.",
              },
            ]


          }
        },
      },
      // ======OurStory==========
      "OurStory": {
        "OurStoryBanner": {
          "heading": "",
          "desc": "",
          "btnText": "",
        },
        "AboutUsTimeline": {},
      },
      // ====Meet the Makers=====
      "MeetTheMakers" : {
        "banner" : {
          "heading1":"Gemacht von unseren",
          "heading2":"perfektioniert in",
          "heading3":"der Produktion.",
          "desc" : "Echte Hände. Echter Holzstaub. Unglaubliche Ergebnisse. Vom ersten Entwurf bis zur finalen Passform – wir entwerfen, entwickeln Prototypen und fertigen unter einem Dach, damit jeder Millimeter stimmt und jede Tür mühelos perfekt wirkt.",
          "typedText" : ["Designern","Menschen","Machern"],
        },
        "AccessibleBeautiful" : {
          "row1":{
            "title1" : "ZUGÄNGLICH .",
            "title2" : "SCHÖN .",
            "desc" : `“Ich war schon immer der Meinung, dass gutes Design sich nicht hinter Samtseilen verstecken sollte. Bei Zebrano möchte ich, dass jeder dieselben wunderschönen Türen und Details genießen kann, die man sonst nur in Luxushotels sieht – direkt zu Hause.„`,
            "name" : "Mathijs",
            "designetion" : "–  Gründer und Designer, Zebrano Studio",
          },
          "row2" : {
            "title" : "Wir halten die Dinge gerne nah am Zuhause.",
            "desc" : `Unsere Türen werden hier in den Niederlanden gefertigt, von Machern, die ihr Holz fast so gut kennen wie ihren Morgenkaffee. Es ist eine Mischung aus Tradition, Präzision und ein wenig niederländischer Sturheit, die sich nicht mit „gut genug“ zufriedengibt. Das Ergebnis? Handwerk, das lokal verwurzelt ist, aber überall auf der Welt passt.`,
            "btnText" : "Materialien entdecken",
          },
          "row3" : {
            "title1" : "Sind Sie Designer? ",
            "title2" : "Brauchen Sie Beratung?",
            "desc1" : "Unser Team hilft Ihnen gerne, alle Möglichkeiten zu entdecken.",
            "desc2" : "Unser Team ist bereit, Ihnen alle Möglichkeiten zu zeigen.",
            "btnText1" : "Materialien entdecken",
            "btnText2" : "Kontakt aufnehmen",
          },
        },
      },
      // ========ConsciousNcrafts=========
      "ConsciousNcrafts": {
        "ConsciousNcraftsBanner": {
          "heading": "Bewusstes Handwerk",
          "desc": "Einfache Prinzipien, die unser Arbeiten leiten – mit Sorgfalt, Respekt und Verantwortung.",
          "btnText": "Get Started",
        },
        "ConsciousNCraftTimeline": {
          "row1": {
            "title": "Mit der Natur arbeiten, nicht gegen sie",
            "desc": "Wir glauben, dass die Arbeit mit natürlichen Materialien Verantwortung bedeutet. Holz ist für uns nicht nur ein Rohstoff – es ist eine lebendige Geschichte von Zeit, Klima und Herkunft. Deshalb arbeiten wir ausschließlich mit Lieferanten, die unsere Werte teilen: FSC-zertifiziertes Holz, nachhaltig bewirtschaftete Wälder und ein Fokus auf Regeneration statt Ausbeutung.",
            "imgSrc": "",
          },

          "row2": {
            "title": "Respekt vor dem Material",
            "desc": "Jedes Stück Holz ist einzigartig – seine Maserung, seine Struktur, seine Unvollkommenheiten. Wir entwerfen um diese Individualität herum, nicht dagegen. Anstatt Einheitlichkeit zu erzwingen, lassen wir das Material sprechen. Das reduziert Abfall und würdigt die Schönheit der natürlichen Vielfalt. Wir überarbeiten nicht. Wir überlackieren nicht. Wir heben hervor, was bereits da ist.",
            "imgSrc": "",
          },
          "row3": {
            "title": "Gestaltung mit Blick auf Langlebigkeit",
            "desc": "Schnelllebige Möbel und kurzlebiges Design gehören nicht zu unserer Philosophie. Wir schaffen Türen, die ein Leben lang halten – nicht nur in der Funktion, sondern auch in der Relevanz. Zeitloses Design und hochwertige Handwerkskunst bedeuten weniger Ersatz, weniger Ressourcenverschwendung und eine geringere Belastung für den Planeten.",
            "imgSrc": "",
          },
          "row4": {
            "title": "Handwerk als nachhaltiger Akt",
            "desc": "Nachhaltigkeit liegt nicht nur in den Materialien – sondern auch in der Art, wie wir arbeiten. Durch lokale Produktion, weniger Transport und kleine Serien statt Massenproduktion bleiben wir nah am Prozess und behalten unsere Auswirkungen im Blick. Jede Entscheidung, die wir treffen, wird nicht nur nach Effizienz, sondern auch nach Ethik bewertet.",
            "imgSrc": "",
          },
          "row5": {
            "title": "Stolz in jedem Detail",
            "desc": "Wir sind stolz auf das, was wir machen – nicht nur, weil es gut aussieht, sondern weil es sich gut anfühlt, hinter etwas Ehrlichem zu stehen. Eine Tür ist nicht einfach nur ein funktionales Objekt. Sie ist der erste Berührungspunkt eines Zuhauses. Und wir glauben, dass wenn sie mit Sorgfalt aus einem so edlen Material wie Holz gefertigt ist, sie diese besondere Wertschätzung verdient.",
            "imgSrc": "",
          },
        },
        "additionalText": "Bei Zebrano Studio fertigen wir nicht einfach Standardtüren; wir schaffen wahre Kunstwerke, die eine Geschichte erzählen und ein Leben lang halten. Bereit für Ihre Traumtür? Wir helfen Ihnen gerne!",
        "btnText1": "Kollektion",
        "btnText2": "Gestalten Sie Ihre eigene",
      },
      // ======privecyPolicy=========
      "privecyPolicy": {
        "header": {
          "heading": "Datenschutzerklärung von Zebrano Studio",
          "EffectiveDate": "Gültigkeitsdatum :",
          "date": "29 Juli 2025",
          "desc": `Zugegeben, dies ist nicht die spannendste Lektüre, aber sie ist sehr wichtig (und vorgeschrieben!). Bei Zebrano Studio geht es uns um wunderschöne Holztüren, nicht um komplizierten Juristenjargon. Dennoch ist der Schutz Ihrer Privatsphäre für uns von großer Bedeutung. Deshalb möchten wir – auch wenn es vielleicht etwas „langweilig“ wirkt – völlig transparent machen, wie wir mit Ihren personenbezogenen Daten umgehen. Seien Sie sicher: Wir halten uns an alle Vorschriften, einschließlich der Datenschutz-Grundverordnung (DSGVO) (EU) 2016/679 sowie anwendbarer niederländischer Datenschutzgesetze. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erfassen, verwenden, weitergeben und schützen, wenn Sie unsere Website besuchen und unsere Dienste nutzen.`,
          "whoWeAre": {
            "heading": "Welche personenbezogenen Daten wir erheben",
            "desc": "Wir können die folgenden Arten personenbezogener Daten erheben:",
            "title": "Zebrano Studio",
            "address": "Herikebrink 37 7544ER Enschede",
            "country": "The Netherlands",
            "email": "Info@zebranostudio.com",
            "phone": "+31 6 42 99 70 18",
          },
        },
        "TypesOfPersonalData": {
          "title": "Welche personenbezogenen Daten wir erheben",
          "desc": "Wir können die folgenden Arten personenbezogener Daten erheben:",
          "row1": {
            "text1": "Kontaktdaten:",
            "text2": "Name, E-Mail-Adresse, Telefonnummer, Postanschrift (für Angebote, Bestellungen und Lieferungen).",
          },
          "row2": {
            "text1": "Kommunikationsdaten: ",
            "text2": " Informationen, die Sie angeben, wenn Sie uns per E-Mail, Telefon, Kontaktformular oder über soziale Medien kontaktieren.",
          },
          "row3": {
            "text1": "Bestell- und Transaktionsdaten: ",
            "text2": "Angaben zu Produkten und Dienstleistungen, die Sie bei uns gekauft haben, Zahlungsinformationen (in der Regel über Drittanbieter, die die Zahlungsdetails direkt verarbeiten).",
          },
          "row4": {
            "text1": "Nutzungsdaten der Website:",
            "text2": "Informationen darüber, wie Sie unsere Website nutzen, einschließlich Ihrer IP-Adresse, Browsertyp, Betriebssystem, Herkunft, aufgerufene Seiten und Dauer Ihres Besuchs. Dies wird in der Regel durch Cookies und ähnliche Technologien erhoben.",
          },
          "row5": {
            "text1": "Marketingpräferenzen:",
            "text2": "Ihre Präferenzen in Bezug auf den Erhalt von Marketingkommunikation von uns.",
          },
        },
        "HowWeCollect": {
          "title": "Wie wir Ihre personenbezogenen Daten erheben",
          "desc": "Wir erheben personenbezogene Daten auf verschiedene Arten:",
          "row1": {
            "text1": "Direkt von Ihnen:",
            "text2": "Wenn Sie Kontaktformulare ausfüllen, ein Angebot anfordern, eine Bestellung aufgeben, unseren Newsletter abonnieren oder direkt mit uns kommunizieren.",
          },
          "row2": {
            "text1": "Automatisch:",
            "text2": "Durch Cookies und ähnliche Technologien, wenn Sie unsere Website besuchen.",
          },
        },
        "Purposes": {
          "heading": "Zwecke und Rechtsgrundlagen für die Verarbeitung Ihrer personenbezogenen Daten",
          "desc": "Wir verarbeiten Ihre personenbezogenen Daten für die folgenden Zwecke und auf den im Rahmen der DSGVO angegebenen Rechtsgrundlagen:",
          "ToProvide": {
            "title": "Zur Erbringung von Dienstleistungen und zur Vertragserfüllung:",
            "text1": "  Bearbeitung Ihrer Anfragen und Erstellung von Angeboten.",
            "text2": "Bearbeitung und Erfüllung Ihrer Bestellungen für Türen und andere Produkte.",
            "text3": "Organisation von Lieferungen und Montagen.",
            "text4": "Bereitstellung von Kundensupport.",
            "text5": " Rechtsgrundlage: Erfüllung eines Vertrags oder Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage (DSGVO Art. 6(1)(b)).",
          },
          "ToCommunicate": {
            "title": "Zur Kommunikation mit Ihnen: ",
            "text1": "Beantwortung Ihrer Fragen und Anfragen.",
            "text2": "Versand wichtiger servicebezogener Mitteilungen (z. B. Bestellstatus). ",
            "text3": "Rechtsgrundlage: Vertragserfüllung (Art. 6(1)(b)) oder berechtigtes Interesse (Art. 6(1)(f)) an effektiver Kommunikation.",
          },
          "ForMarketing": {
            "title": "Für Marketingzwecke:",
            "text1": " Versand von Newslettern, Angeboten und Informationen über unsere Produkte und Dienstleistungen, die für Sie von Interesse sein könnten, sofern Sie zugestimmt haben.",
            "text2": "Rechtsgrundlage: Ihre Einwilligung (DSGVO Art. 6(1)(a)). Sie können Ihre Einwilligung jederzeit widerrufen.",
          },
          "ToImprove": {
            "title": "Zur Verbesserung unserer Website und Dienstleistungen:",
            "text1": "Analyse der Websitenutzung, um das Nutzerverhalten zu verstehen und die Funktionalität und Erfahrung zu verbessern.",
            "text2": "Entwicklung neuer Produkte und Dienstleistungen.",
            "text3": "Rechtsgrundlage: Berechtigtes Interesse (DSGVO Art. 6(1)(f)) an der Verbesserung unseres Unternehmens und unserer Angebote.",
          },
          "ForLegal": {
            "title": "Zur rechtlichen Einhaltung und zum Schutz:",
            "text1": "Erfüllung gesetzlicher Verpflichtungen (z. B. Steuern, Buchhaltung).",
            "text2": " Schutz unserer Rechte, unseres Eigentums oder unserer Sicherheit sowie der unserer Kunden oder anderer Personen. ",
            "text3": " Verhinderung von Betrug und Gewährleistung der Sicherheit.",
            "text4": "Rechtsgrundlage: Gesetzliche Verpflichtung (DSGVO Art. 6(1)(c)) oder berechtigtes Interesse (Art. 6(1)(f)) am Schutz unseres Unternehmens.",
          },
          "CookiePolicy": "Unsere Website verwendet Cookies und ähnliche Technologien, um Ihr Surferlebnis zu verbessern, den Website-Verkehr zu analysieren und für Marketingzwecke. Sie können Ihre Cookie-Einstellungen über Ihre Browsereinstellungen verwalten. Für weitere Details verweisen wir auf unsere separate Cookie-Richtlinie.",
        },
        "Sharing": {
          "title": "Weitergabe Ihrer personenbezogenen Daten",
          "desc": "Wir verkaufen, vermieten oder verleasen Ihre personenbezogenen Daten nicht an Dritte. Wir können Ihre Daten weitergeben an:",
          "row1": {
            "text1": "Dienstleister:  ",
            "text2": " Drittunternehmen, die in unserem Auftrag Dienstleistungen erbringen, wie z. B. Zahlungsabwicklung, Webhosting, Analysen, Marketing und Lieferdienste. Diese Anbieter sind vertraglich verpflichtet, Ihre Daten zu schützen und nur für die vorgesehenen Zwecke zu verwenden.",
          },
          "row2": {
            "text1": "Gesetzliche Anforderungen:",
            "text2": "Wenn dies gesetzlich vorgeschrieben ist oder auf gültige Anfragen von Behörden (z. B. Gerichtsbeschluss oder Regierungsbehörde) erfolgt.",
          },
          "row3": {
            "text1": "Unternehmensübertragungen: ",
            "text2": "Im Zusammenhang mit einer Fusion, Übernahme oder dem Verkauf von (einem Teil) unseres Vermögens können Ihre personenbezogenen Daten als Teil dieser Transaktion übertragen werden.",
          },
        },
        "International": {
          "title": "Internationale Datenübermittlungen",
          "desc": "Da Zebrano Studio innerhalb der EU tätig ist, werden Ihre personenbezogenen Daten in der Regel innerhalb des Europäischen Wirtschaftsraums (EWR) verarbeitet. Wenn wir personenbezogene Daten in Länder außerhalb des EWR übertragen, stellen wir sicher, dass geeignete Schutzmaßnahmen (z. B. Standardvertragsklauseln) vorhanden sind, um Ihre Daten gemäß DSGVO zu schützen.",
        },
        "DataRetention": {
          "title": "Datenspeicherung",
          "desc": "Wir speichern Ihre personenbezogenen Daten nur so lange, wie es erforderlich ist, um die Zwecke zu erfüllen, für die sie erhoben wurden, einschließlich zur Erfüllung gesetzlicher, buchhalterischer oder berichtspflichtiger Anforderungen. Die Aufbewahrungsdauer hängt von der Art der Daten und dem Zweck ab, für den sie erhoben wurden.",
        },
        "DataSecurity": {
          "title": "Datensicherheit",
          "desc": "Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen. Diese Maßnahmen umfassen Datenverschlüsselung, Zugangskontrollen und regelmäßige Sicherheitsüberprüfungen.",
        },
        "GDPR": {
          "title": "Ihre Datenschutzrechte (DSGVO)",
          "desc": "Nach der DSGVO haben Sie die folgenden Rechte in Bezug auf Ihre personenbezogenen Daten:",
          "row1": {
            "text1": "Auskunftsrecht (Art. 15 DSGVO): ",
            "text2": " Sie haben das Recht, eine Kopie der personenbezogenen Daten anzufordern, die wir über Sie gespeichert haben.",
          },
          "row2": {
            "text1": "Recht auf Berichtigung (Art. 16 DSGVO): ",
            "text2": "Sie haben das Recht, die Berichtigung unrichtiger oder unvollständiger personenbezogener Daten zu verlangen.",
          },
          "row3": {
            "text1": `Recht auf Löschung („Recht auf Vergessenwerden“) (Art. 17 DSGVO): `,
            "text2": "Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten unter bestimmten Umständen zu verlangen.",
          },
          "row4": {
            "text1": "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): ",
            "text2": "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten unter bestimmten Bedingungen zu verlangen.",
          },
          "row5": {
            "text1": "Recht auf Datenübertragbarkeit (Art. 20 DSGVO):",
            "text2": "Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und sie an einen anderen Verantwortlichen zu übermitteln.",
          },
          "row6": {
            "text1": "Widerspruchsrecht (Art. 21 DSGVO):",
            "text2": " Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten in bestimmten Situationen zu widersprechen, insbesondere wenn die Verarbeitung auf berechtigten Interessen beruht oder für Direktwerbung erfolgt.",
          },
          "row7": {
            "text1": "Rechte im Zusammenhang mit automatisierten Entscheidungen und Profiling (Art. 22 DSGVO):",
            "text2": "Sie haben das Recht, nicht einer Entscheidung unterworfen zu werden, die ausschließlich auf automatisierter Verarbeitung – einschließlich Profiling – beruht und die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt.",
          },
          "row8": {
            "text1": "Recht auf Widerruf der Einwilligung: ",
            "text2": "Wenn wir Ihre personenbezogenen Daten auf Grundlage Ihrer Einwilligung verarbeiten, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der Verarbeitung vor dem Widerruf bleibt davon unberührt.",
          },
          "ToExercise": "Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter den in Abschnitt 1 angegebenen Kontaktdaten. Wir werden Ihre Anfrage innerhalb eines Monats beantworten.",
        },
        "ChildrenPrivacy": {
          "title": "Datenschutz von Kindern",
          "desc": "Unsere Website und Dienstleistungen richten sich nicht an Personen unter 16 Jahren. Wir erheben nicht wissentlich personenbezogene Daten von Kindern unter 16 Jahren. Sollten wir feststellen, dass wir unbeabsichtigt Daten eines Kindes unter 16 Jahren erhoben haben, werden wir diese so schnell wie möglich löschen.",
        },
        "ChangesTo": {
          "title": "Änderungen dieser Datenschutzerklärung",
          "desc": 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen zu berücksichtigen. Über wesentliche Änderungen informieren wir Sie, indem wir die neue Datenschutzerklärung mit einem aktualisierten „Gültigkeitsdatum“ auf unserer Website veröffentlichen. Wir empfehlen Ihnen, diese Erklärung regelmäßig zu prüfen.',
        },
        "ContactUs": {
          "title": "Kontakt",
          "desc": "Wenn Sie Fragen zu dieser Datenschutzerklärung oder zu unserem Umgang mit Daten haben oder eines Ihrer Rechte ausüben möchten, kontaktieren Sie uns bitte unter: Zebrano Studio, Niederlande, info@zebranostudio.com",
          'address': {
            "name": "Zebrano Studio",
            "city": "Herikebrink 37 7544ER Enschede",
            "country": "The Netherlands",
            "email": "Info@zebranostudio.com ",
            "phone": "+31 6 42 99 70 18",
          }
        },
        "RightToLodge": {
          "title": "Recht auf Beschwerde",
          "desc": "Wenn Sie der Meinung sind, dass Ihre Datenschutzrechte verletzt wurden, haben Sie das Recht, eine Beschwerde bei der niederländischen Datenschutzbehörde (Autoriteit Persoonsgegevens – AP) einzureichen.",
        },
      },
      // =====TermsAndConditions======
      "TermsAndConditions": {
        "heading": {
          "title": "Entworfen, um zu passen. Bedingungen, die es auch tun.",
          "desc": "Hier finden Sie das Wesentliche: wie wir planen, wann wir liefern, was wir garantieren und wie Sie Ihr Zebrano-Stück über Jahre hinweg makellos halten. Klare Vereinbarungen, reibungslose Projekte.",
        },
        "Definitions": {
          "title": "Begriffsbestimmungen",
          "desc": "",
          "ZebranoStudio": {
            "title": "Zebrano Studio: ",
            "desc": " die Gesellschaft mit beschränkter Haftung Zebrano Studio, mit Sitz in den Niederlanden, E-Mail info@zebranostudio.com.",
          },
          "Customer": {
            "title": "Kunde:",
            "desc": "  die Partei, die mit Zebrano Studio einen Vertrag abschließt oder abzuschließen beabsichtigt oder für die Zebrano Studio ein Angebot erstellt oder eine Lieferung oder Dienstleistung erbringt.",
          },
          "BusinessCustomer": {
            "title": "Geschäftskunde:",
            "desc": " der Kunde, der im Rahmen eines Berufs oder Gewerbes handelt.",
          },
          "Consumer": {
            "title": "Verbraucher:",
            "desc": "der Kunde, der nicht im Rahmen eines Berufs oder Gewerbes handelt.",
          },
          "CustomMadeGoods": {
            "title": "Maßgefertigte Waren:",
            "desc": "Produkte, die nach den Spezifikationen des Kunden hergestellt werden, nicht vorgefertigt, basierend auf der vom Kunden gewählten Form, Größe/Abmessungen, Farbe und Materialart oder eindeutig für eine bestimmte Person bestimmt.",
          },
        },
        "Applicability": {
          "title": "Anwendbarkeit",
          "text1": "1. Diese Bedingungen gelten für alle Angebote, Kostenvoranschläge, Vereinbarungen, Dienstleistungen und Handlungen. Im Falle eines Widerspruchs zwischen dem Inhalt der Vereinbarung und diesen allgemeinen Bedingungen haben die Bestimmungen der Vereinbarung Vorrang.",
          "text2": "2. Wenn Unklarheiten über die Auslegung einer oder mehrerer Bestimmungen dieser Bedingungen bestehen oder eine Situation nicht geregelt ist, wird die Bestimmung oder Situation „im Geiste“ dieser Bedingungen beurteilt.",
          "text3": "3. Wenn Zebrano Studio nicht immer auf die strikte Einhaltung dieser Bedingungen besteht, bedeutet dies nicht, dass die Bestimmungen nicht gelten oder dass Zebrano Studio auf das Recht verzichtet, in anderen Fällen die strikte Einhaltung zu verlangen.",
        },
        "OfferQuotation" : {
          "title" : "Angebot / Kostenvoranschlag",
          "text1" : "1. Angebote und Kostenvoranschläge von Zebrano Studio sind unverbindlich, sofern nicht ausdrücklich anders angegeben.",
          "text2" : "2. Etwaige Fehler – wie falsche Preisangaben sowie Rechen- oder Schreibfehler – auf der Website von Zebrano Studio, in Anzeigen, Angeboten, Veröffentlichungen, Auftragsbestätigungen oder anderen Dokumenten sind nicht verbindlich.",
        },
        "TheAgreement" : {
          "title" : "Die Vereinbarung",

          "text1" : "1. Die Vereinbarung kommt zustande, wenn der Kunde das Angebot von Zebrano Studio annimmt. Der Kaufvertrag wird mit der Unterzeichnung der Auftragsbestätigung geschlossen.",

          "text2" : "2. Die Auftragsbestätigung ist grundsätzlich maßgeblich. Der Kunde muss diese sorgfältig auf Auslassungen und Unrichtigkeiten prüfen und Zebrano Studio rechtzeitig, spätestens innerhalb von 3 Tagen nach Erhalt, informieren.",

          "text3" : "3. Angebote und Aktionen sind zeitlich begrenzt. Nach Ablauf der Frist kann der Kunde sie nicht mehr in Anspruch nehmen. Preissenkungen nach Vertragsschluss – etwa durch Aktionen oder Rabatte auf Ausstellungsstücke – berechtigen den Kunden nicht zu einer Preisreduzierung.",

          "text4" : "4. Für Angebote und Aktionen können besondere Bedingungen gelten.",

          "text5" : "5. Änderungen der Vereinbarung und Abweichungen von diesen allgemeinen Bedingungen sind nur gültig, wenn sie schriftlich zwischen dem Kunden und Zebrano Studio vereinbart wurden.",

          "text6" : "6. Wenn Änderungen der Vereinbarung zu einer Erhöhung oder Senkung der Kosten führen, muss die entsprechende Änderung des Kaufpreises schriftlich vereinbart werden.",

          "text7" : "7. Wenn sich herausstellt, dass eine (weitere) Erfüllung der Vereinbarung durch Zebrano Studio aufgrund höherer Gewalt nicht möglich ist, kann Zebrano Studio die Vereinbarung aussetzen oder auflösen, ohne für Schäden haftbar zu sein. Dies hindert die Parteien nicht daran, Vorschläge zur Anpassung der Vereinbarung zu machen, sodass eine ordnungsgemäße und vollständige Erfüllung möglich wird.",
          
          "text8" : "8. Im Falle der Insolvenz, Zahlungsaussetzung oder Pfändung von Vermögenswerten des Kunden kann Zebrano Studio die Vereinbarung ganz oder teilweise ohne Mahnung auflösen.",
        },
        "RightOfWithdrawal":{
          "title":"Widerrufsrecht / Beendigung der Vereinbarung",
          "text1":"1. Die meisten von Zebrano Studio hergestellten und/oder gelieferten Produkte sind maßgefertigt und nicht vorgefertigt. Dazu gehören mindestens Produkte, die in der Fabrik von Zebrano Studio hergestellt werden, wie Tische, Couchtische, Beistelltische, Bartische, Gartentische, Schränke, TV-Möbel, Polstermöbel und maßgefertigte Wandregale. Für diese Produkte gilt kein Widerrufsrecht. Sie können nicht zurückgegeben werden.",

          "text2":"2. Möchte der Kunde die Vereinbarung ohne Vertragsverletzung beenden und stimmt Zebrano Studio dem zu, kann die Vereinbarung einvernehmlich aufgehoben werden. In diesem Fall hat Zebrano Studio Anspruch auf Schadenersatz, einschließlich erlittenem Verlust und entgangenem Gewinn. Sofern nicht anders vereinbart, beträgt die Entschädigung 30 % des Kaufpreises oder 50 %, wenn der Kunde zum Zeitpunkt der Beendigung bereits darüber informiert war, dass (teilweise) geliefert werden kann.",

          "text3":"3. Holt Zebrano Studio das Produkt auf Wunsch des Verbrauchers ab, trägt der Verbraucher die Kosten. Diese betragen 95,00 € einschließlich MwSt. für Adressen innerhalb der Benelux. Zum Zeitpunkt der Abholung muss das Produkt ordnungsgemäß verpackt und hinter der ersten Schwelle bereitstehen. Andernfalls wird das Produkt nicht mitgenommen.",

          "text4":"4. Der Kaufbetrag wird zurückerstattet, nachdem Zebrano Studio das Produkt geprüft und festgestellt hat, dass es vollständig, unbenutzt und unbeschädigt ist.",
        },
         "IntellectualProperty" : {
          "title" : "Geistiges Eigentum",
          "text1" : "1. Sofern nicht schriftlich anders vereinbart, behält Zebrano Studio die Urheberrechte und alle geistigen Eigentumsrechte an Angeboten sowie an bereitgestellten Entwürfen, Abbildungen, Zeichnungen, (Prototyp-)Modellen und Ähnlichem. Der Kunde darf ohne Zustimmung von Zebrano Studio kein Material, das dem geistigen Eigentum unterliegt, vervielfältigen, veröffentlichen, verwerten oder ausstellen.",
        },
        "DeliveryTime" : {
          "title" : "Lieferzeit",
          "text1" : "1. Die Lieferzeit und/oder Ausführungsfrist wird von Zebrano Studio ungefähr bestimmt.",

          "text2" : "2. Bei der Festlegung der Lieferzeit und/oder Ausführungsfrist geht Zebrano Studio von den zu diesem Zeitpunkt bekannten Umständen aus.",

          "text3" : "3. Die Lieferzeit und/oder Ausführungsfrist beginnt, sobald eine Einigung über alle kaufmännischen und technischen Details erzielt wurde, alle erforderlichen Informationen Zebrano Studio vorliegen und, soweit vereinbart, die Anzahlung eingegangen ist.",

          "text4" : "4. Wird die voraussichtliche Lieferzeit und/oder Ausführungsfrist überschritten, erhält Zebrano Studio eine zusätzliche angemessene Frist zur Lieferung.",

          "text5" : "5. Eine Überschreitung der Lieferzeit und/oder Ausführungsfrist berechtigt den Kunden niemals zu Schadensersatz von Zebrano Studio.",
        },
        "TransportAndDamage" : {
          "title" : "Transport und Schäden bei Lieferung",
          "text1" : "1. Sofern nicht anders vereinbart, umfasst die Vereinbarung den Transport der Produkte durch Zebrano Studio, das das Risiko von Schäden und Verlusten während des Transports trägt. Werden die Produkte durch einen professionellen Spediteur geliefert, sorgt Zebrano Studio für eine angemessene Versicherung.",
          "text2" : "2. Zebrano Studio haftet nicht für Schäden, die ab der ersten Tür/Schwelle der Lieferadresse entstehen. Wir helfen jedoch gerne beim Platzieren des Produkts im Inneren.",
          "text3" : "3. Wird bei der Lieferung ein Schaden festgestellt, muss der Kunde dies Zebrano Studio innerhalb von zwei Werktagen nach der Lieferung melden; andernfalls gilt die Ware als ohne Schaden erhalten.",
        },
        "Delivery" : {
          "title" : "Lieferung",
          "text1":"1. Der Kunde muss sicherstellen, dass der Lieferort leicht zugänglich ist und alles in seiner Macht Stehende tun, um eine reibungslose Lieferung zu ermöglichen. Der Kunde muss außerdem sicherstellen, dass der Lieferort ordnungsgemäß gesichert werden kann.",

          "text2":"2. Der Kunde hat Zebrano Studio vor Abschluss der Vereinbarung über besondere Umstände am Lieferort zu informieren, die den Einsatz von Hilfsmitteln – wie z. B. eines (Umzugs-)Lifts oder Krans – erforderlich machen. Der Kunde muss außerdem sicherstellen, dass erforderliche Genehmigungen (z. B. Bewilligungen) und wesentliche Informationen (z. B. Erreichbarkeit des Lieferorts) rechtzeitig an Zebrano Studio übermittelt werden.",

          "text3":"3. Bei falschen oder unvollständigen Angaben des Kunden trägt der Kunde die (zusätzlichen) Kosten für den Einsatz spezieller Hilfsmittel.",

          "text4":"4. Ist ein (Umzugs-)Lift oder Kran erforderlich, sorgt Zebrano Studio zum Zeitpunkt der Lieferung für dessen Verfügbarkeit. Die Kosten trägt der Kunde und müssen vor der Lieferung an Zebrano Studio gezahlt werden.",

          "text5":"5. Möchte der Kunde selbst einen (Umzugs-)Lift oder Kran organisieren, liefert Zebrano Studio die Produkte kostenlos im Erdgeschoss ohne Montage. Der Kunde bleibt verantwortlich für den Transport der Produkte per Lift oder Kran, für Be- und Entladen sowie für die Montage und alle daraus entstehenden Schäden.",

          "text6":"6. Ist der Lieferort zum Zeitpunkt der Lieferung nicht zugänglich – etwa weil die Produktabmessungen zu groß sind, um diesen Ort zu erreichen – geht dies zu Lasten und auf Risiko des Kunden. In diesem Fall liefert Zebrano Studio die Produkte unmontiert im Erdgeschoss.",

          "text7":"7. Werden die angebotenen Produkte nicht angenommen, außer aufgrund einer mangelhaften Lieferung, führt Zebrano Studio innerhalb einer angemessenen Frist eine zweite Lieferung durch.",

          "text8":"8. Stellt sich bei der Lieferung durch Zebrano Studio heraus, dass eine sofortige Lieferung aufgrund von Umständen, die zu Lasten und auf Risiko des Kunden gehen, nicht möglich ist, und verlangt der Kunde eine zweite Lieferung, kann Zebrano Studio zusätzliche Fracht-, Liefer- und Lagerkosten berechnen.",

          "text9":"9. Möchte der Kunde den Liefertermin verschieben, muss dies Zebrano Studio spätestens 20 Arbeitstage vor dem geplanten Liefertermin mitgeteilt werden. Ein späterer Antrag wird auf Durchführbarkeit geprüft, und dem Kunden werden Lagerkosten berechnet. Die Lagerkosten betragen 25 € pro Woche ab dem ursprünglichen Liefertermin. Für Änderungen innerhalb von 3 Arbeitstagen vor dem geplanten Liefertermin berechnen wir dem Kunden 75 € Änderungsgebühren zusätzlich zu den genannten Lagerkosten.",
        },
        "StorageOfProducts":{
          "title" : "Lagerung von Produkten",
          "text1" : "1. Nach einer Verweigerung oder nach einer zweiten Lieferung kann Zebrano Studio dem Kunden Lagerkosten sowie weitere Schäden und Kosten in Rechnung stellen.",
          "text2" : "2. Wird auch eine zweite Lieferung nicht angenommen, verlangt Zebrano Studio die Erfüllung des Vertrags und gewährt dem Kunden eine Frist von bis zu 30 Tagen, um die Produkte dennoch abzunehmen. Erfolgt die Abnahme innerhalb dieser Frist nicht, kann Zebrano Studio die Vereinbarung auflösen, wobei der Kunde zum Ersatz des entstandenen Schadens verpflichtet ist.",
        },
        "Payment" : {
          "title" : "Zahlung",
          "text1" : "1. Die Zahlung erfolgt in Euro. Die Preise von Zebrano Studio geben an, ob sie inklusive oder exklusive Mehrwertsteuer sind.",
          "text2" : "2. Bei Verträgen mit Verbrauchern kann Zebrano Studio eine Anzahlung von bis zu 30 % des Kaufpreises verlangen. Bei Verträgen mit Geschäftskunden kann Zebrano Studio vor Lieferung oder Fortsetzung der Leistung die Zahlung des gesamten Kaufpreises oder eine Sicherheit für die Zahlungsverpflichtungen verlangen.",

          "text3" : "3. Sofern nicht anders vereinbart, ist der Nettokaufpreis (Restbetrag) vor Lieferung zu zahlen.",

          "text4" : "4. Führt Zebrano Studio eine Lieferung in Teilen aus, ist sie berechtigt, für jede Teillieferung eine Zahlung zu verlangen. Der Kunde erhält für jede Lieferung eine Teilrechnung.",
          "text5" : "5. Der Verbraucher schuldet gemäß Artikel 6:119 BW gesetzliche Zinsen für den Zeitraum, in dem er mit der Zahlung des Kaufpreises in Verzug ist. Der Geschäftskunde schuldet gemäß Artikel 6:119a BW gesetzliche Handelszinsen für den Verzugszeitraum.",

          "text6" : "6. Unbeschadet Absatz 5 sendet Zebrano Studio dem Verbraucher nach Eintritt des Verzugs eine Zahlungsaufforderung und fordert die Zahlung innerhalb von 14 Tagen ab dem Tag nach der Mahnung. Der Verbraucher wird darüber informiert, dass im Falle der Nichtzahlung außergerichtliche Inkassokosten anfallen, unter Angabe der Höhe dieser Kosten.",

          "text7" : "7. Zebrano Studio ist berechtigt, den geschuldeten Betrag ohne weitere Mahnung einzutreiben und hierfür Dritte einzuschalten. In diesem Fall schuldet der Kunde auch außergerichtliche Inkassokosten, die gemäß dem niederländischen Gesetz zur Normierung außergerichtlicher Inkassokosten und der dazugehörigen Verordnung festgelegt werden.",

          "text8" : "8. Im Falle von Reklamationen ist der Kunde nur berechtigt, die Zahlung desjenigen Teils des geschuldeten Betrags auszusetzen, der in einem angemessenen Verhältnis zur Art und Schwere der Beschwerde steht. Dies entbindet den Kunden nicht von der Verpflichtung, den Restbetrag innerhalb der vereinbarten Frist zu zahlen.",

          "text9" : "9. Zebrano Studio bleibt Eigentümer der Produkte, bis der Kunde den gesamten aufgrund der Vereinbarung geschuldeten Betrag bezahlt hat. Der Kunde muss die Produkte sorgfältig behandeln und darf sie nicht an Dritte übertragen, verpfänden, verleihen oder vom Lieferort entfernen (lassen), bis der Kaufpreis sowie etwaige Zinsen und Kosten vollständig beglichen sind.",
        },
        "Warranty" : {
          "title" : "Garantie",
          "text1" : "1. Sofern nicht schriftlich anders vereinbart, gewährleistet Zebrano Studio die ordnungsgemäße Beschaffenheit der gelieferten Produkte für einen Zeitraum von 2 Jahren nach Lieferung.",

          "text2" : "2. Bei maßgefertigten Produkten sind geringfügige Abweichungen in den Maßen zulässig. Zebrano Studio darf bis zu 2 % von den vereinbarten Abmessungen abweichen, sofern nicht ausdrücklich etwas anderes vereinbart wurde.",

          "text3" : "3. Der Kunde muss Zebrano Studio in jedem Fall die Möglichkeit geben, einen Mangel zu beheben. Die Haftung von Zebrano Studio ist auf die kostenlose Reparatur eines mangelhaften Produkts oder den Ersatz dieses Produkts oder eines Teils davon nach Wahl von Zebrano Studio beschränkt.",

          "text4" : "4. Es wird keine Garantie gewährt, wenn Mängel auf normale Abnutzung, unsachgemäßen Gebrauch, mangelnde oder fehlerhafte Wartung oder Installation, (De-)Montage, Änderung oder Reparatur durch den Kunden oder Dritte zurückzuführen sind. Es wird keine Garantie auf Produkte gewährt, die bei Lieferung nicht neu waren, Ausstellungsmodelle, Produkte oder Teile, die unter eine Herstellergarantie fallen, oder produktspezifische Eigenschaften, einschließlich des natürlichen Verhaltens von Holz (siehe unten).",

          "text5" : "5. Für alle Holzteile gilt eine eingeschränkte Garantie, die nur Herstellungsfehler abdeckt. Das natürliche Verhalten von Holz ist ausgeschlossen, da es sich hierbei nicht um einen Mangel des Produkts oder der Produktion handelt, sondern um eine Eigenschaft des Materials. „Holzverhalten“ umfasst Ausdehnung, Schrumpfung, Risse und/oder Verformungen. Das von Zebrano Studio verwendete Holz ist auf einen Feuchtigkeitsgehalt von ca. 8 %–12 % gesägt und getrocknet, wodurch es für den Einsatz in beheizten Räumen geeignet ist. Holz bleibt ein Naturprodukt und nimmt Feuchtigkeit auf oder gibt sie ab. Das Ausmaß hängt unter anderem von Temperaturunterschieden und Luftfeuchtigkeit ab. Holz arbeitet weniger, wenn die Luftfeuchtigkeit nahezu konstant bleibt; wir empfehlen 50 %–60 % Luftfeuchtigkeit, typischerweise 10 % niedriger im Winter und 10 % höher im Sommer.",

          "text6" : "6. Die Datei „Holzvariationen und Tipps“ ist Bestandteil dieser Allgemeinen Geschäftsbedingungen und wird dem Kunden per E-Mail zur Verfügung gestellt.",

          "text7" : "7. Wurde beim Kauf das All-in-house-Paket erworben, muss der Kunde die entsprechenden Pflegeprodukte selbst auf das Produkt anwenden. Dies wird nicht von Zebrano Studio durchgeführt.",

          "text8" : "8. Zebrano Studio ist nicht verantwortlich für abweichende Erwartungen des Kunden hinsichtlich der Polsterung von Sitzmöbeln in anderen Materialien als denjenigen, die in unseren Ausstellungsräumen vorhanden sind.",

          "text9" : "9. Der Reparaturgutschein von Zebrano Studio deckt die Reparatur von (trockenen) Rissen in von Zebrano Studio hergestellten Holzmöbeln ab. Andere (Reparatur-)Leistungen unterliegen unterschiedlichen von Zebrano Studio festzulegenden Tarifen.",
        },
        "Liability" : {
          "title" : "Haftung",
          "text1" : "1. Das Risiko von Schäden liegt bei Zebrano Studio bis zur Lieferung an den Kunden an der ersten Tür/Schwelle der Lieferadresse, sofern nicht ausdrücklich etwas anderes vereinbart wurde.",
          "text2" : "2. Zebrano Studio haftet nicht für Schäden an Wänden, Rahmen, Bö",
          "text3" : "3.Das Risiko von Schäden liegt bei Zebrano Studio bis zur Lieferung an den Kunden an der ersten Tür/Schwelle der Lieferadresse, sofern nicht ausdrücklich etwas anderes vereinbart wurde.",
          "text4" : "4. Zebrano Studio haftet nicht für Schäden an Wänden, Rahmen, Böden oder anderen Gegenständen, die durch die Lieferung und/oder Montage unserer Produkte verursacht werden.",
          "text5" : "5. Zebrano Studio haftet nicht für direkte oder indirekte Schäden, die durch Mängel an den gelieferten Produkten oder anderweitig entstehen, noch für Lieferverzögerungen, außer in Fällen von Vorsatz oder grober Fahrlässigkeit seitens Zebrano Studio.",
          "text6" : "6. Wenn der Kunde Produkte selbst installiert, montiert usw. oder dies durch einen Dritten durchführen lässt, ist der Kunde und/oder der Dritte für die ordnungsgemäße Installation, Montage usw. sowie alles, was damit zusammenhängt, verantwortlich. In solchen Fällen ist Zebrano Studio nicht verantwortlich oder haftbar, wenn während der Installation/Montage etwas schiefgeht oder wenn es Unvollkommenheiten im Ergebnis gibt.",
          "text7" : "Sollte Zebrano Studio haftbar sein, ist sie niemals verpflichtet, Schäden jeglicher Art und aus jeglichem Grund zu ersetzen, die den Gesamtbetrag der Transaktion zwischen dem Kunden und Zebrano Studio übersteigen.",
          "text8" : "Wenn Zebrano Studio sich nicht auf einen Haftungsausschluss berufen kann, ist ihre Haftung auf den Betrag beschränkt, der durch ihre Haftpflichtversicherung gedeckt ist."
        },
        "Complaints" : {
          "title" : "Complaints",
          "text1" : "Beschwerden über die Qualität der gelieferten Produkte oder Materialien oder die Ausführung der Arbeiten können vom Kunden nur innerhalb von 2 Werktagen nach Lieferung der Produkte bei Zebrano Studio eingereicht werden. Ist eine Einreichung innerhalb dieser Frist vernünftigerweise nicht möglich, gilt die Frist von 2 Werktagen ab dem Zeitpunkt, an dem der Mangel entdeckt wurde oder vernünftigerweise hätte entdeckt werden können. Die Beschwerde muss eine klare und vollständige Beschreibung der Beanstandungen und festgestellten Mängel enthalten.",
          "text2" : "Der vorherige Absatz lässt die in Artikel 9 genannte kürzere Frist unberührt.",
          "text3" : "Wenn der Kunde entgegen dem Rat von Zebrano Studio bestimmte Arbeiten durchführen oder verhindern möchte, ist jede diesbezügliche Beschwerde ausgeschlossen, sofern nicht schriftlich etwas anderes vereinbart wurde.",
        },
        "ApplicableLaw" : {
          "title" : "Applicable law",
          "text" : `“Auf alle Vereinbarungen, auf die diese Bedingungen Anwendung finden, ist niederländisches Recht anwendbar.”`
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