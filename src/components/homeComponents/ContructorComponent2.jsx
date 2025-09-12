import React, { useContext, useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import { Link } from "react-router-dom";
// import { LanguageContext } from "../../rootLayout/RootLayout";

const data = [
  {
    title: "Tailor-made",
    image: "/images/img1.png",
    heading: "Exclusive wooden doors",
    headingDU: "Exclusieve houten deuren",
    description:
      "Zebrano creates tailor-made pivot, sliding, and classic doors crafted from premium wood and finished with exclusive detailing. ",
    descriptionDU:
      "Zebrano maakt op maat gemaakte draaideuren, schuifdeuren en klassieke deuren, vervaardigd uit hoogwaardig hout en afgewerkt met exclusieve details.",
  },
  {
    title: "Custom details",
    image: "/images/img2.png",
    heading: "Materials With a Story",
    headingDU: "Materialen met een verhaal",
    description:
      "From rare woods to hand-selected stone and artisan glass, each material is chosen for its character, history, and natural beauty",
    descriptionDU:
      "Van zeldzame houtsoorten tot met de hand geselecteerde stenen en ambachtelijk glas: elk materiaal wordt gekozen vanwege zijn karakter, geschiedenis en natuurlijke schoonheid.",
  },
  {
    title: "Limitless Design",
    image: "/images/img3.png",
    heading: "Design Without Limits",
    headingDU: "Ontwerp zonder grenzen",
    description:
      "We go beyond standard dimensions and finishes, shaping doors that integrate seamlessly into your architecture and reflect your personal style.",
    descriptionDU:
      "Wij gaan verder dan standaardafmetingen en afwerkingen en ontwerpen deuren die naadloos aansluiten op uw architectuur en uw persoonlijke stijl weerspiegelen.",
  },
  {
    title: "Conscious craft",
    image: "/images/img4.png",
    heading: "Craftsmanship & Durability",
    headingDU: "Vakmanschap & Duurzaamheid",
    description:
      "We build them so well, you might start showing them off more than your new kitchen.",
    descriptionDU:
      "We hebben ze zo goed gebouwd dat u ze misschien wel vaker zult laten zien dan uw nieuwe keuken.",
  },
];

const ContructorComponent2 = () => {
  // const context = useContext(LanguageContext);
  const changelanguase =  true;
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const progressRefs = useRef([]);
  const boxRef = useRef(null);

  const currentIndexRef = useRef(0);
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const animateContent = (index) => {
    const { heading, headingDU, description, descriptionDU, image } =
      data[index];

    gsap.to(boxRef.current, {
      opacity: 0.5,
      y: 0,
      duration: 0.3,
      onComplete: () => {
        headingRef.current.innerHTML = changelanguase ? heading : headingDU;
        descRef.current.innerHTML = changelanguase
          ? description
          : descriptionDU;
        gsap.fromTo(
          boxRef.current,
          { opacity: 0.5, y: 0 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      },
    });

    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      onComplete: () => {
        imgRef.current.src = image;
        gsap.to(imgRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
        });
      },
    });
  };

  const animateProgress = (index) => {
    gsap.killTweensOf(progressRefs.current);
    progressRefs.current.forEach((ref) => {
      gsap.set(ref, { width: "0%" });
    });
    gsap.to(progressRefs.current[index], {
      width: "100%",
      duration: 5,
      ease: "linear",
    });
  };

  const goToSlide = (index, userTriggered = false) => {
    if (isAnimatingRef.current && !userTriggered) return;
    isAnimatingRef.current = true;
    currentIndexRef.current = index;

    animateContent(index);
    animateProgress(index);

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % data.length;
      goToSlide(nextIndex);
    }, 7500);
  };

  const handleClick = (index) => {
    clearInterval(intervalRef.current);
    goToSlide(index, true);
    setTimeout(startAutoSlide, 200);
  };

  useEffect(() => {
    // Initialize with correct language
    headingRef.current.innerHTML = changelanguase
      ? data[0].heading
      : data[0].headingDU;
    descRef.current.innerHTML = changelanguase
      ? data[0].description
      : data[0].descriptionDU;
    animateProgress(0);
    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
      gsap.killTweensOf(progressRefs.current);
    };
  }, [changelanguase]);

  return (
    <div
      id="constructor"
      className="w-full h-full lg:h-[calc(100vh-100px)] p-5 md:p-12 bg-myColorTwo font-poppins"
    >
      <div className="constructorWrapper w-full h-full flex flex-col lg:flex-row gap-5">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 p-8 lg:p-12 bg-myColorThree rounded-3xl">
          <div className="w-full h-full flex flex-col ">
            <p className="text-myColorOne ">
              {changelanguase
                ? "“Passion for Wood. Precision in Design.”"
                : "“Passie voor hout. Precisie in design.”"}
            </p>
            <div className="box1" ref={boxRef}>
              <h2
                ref={headingRef}
                className="constructHeading text-2xl md:text-4xl 2xl:text-5xl my-3 md:my-6 text-gray-900 leading-tight font-Montserrat"
              />
              <p
                ref={descRef}
                className="constructDescription mb-4 2xl:md:mb-8 max-w-md text-gray-700 text-sm md:text-lg leading-relaxed"
              />

              <Link to={"/collection"}>
                <div className="w-fit border border-gray-800 px-6 py-3 bg-myColorOne text-myColorTwo cursor-pointer rounded-full flex items-center gap-3 hover:bg-myColorTwo hover:text-myColorOne transition-all duration-300">
                  <span className="font-medium">See collection</span>
                  <BsArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
            {/* Progress Section */}
            <div className="w-full mt-3 2xl:mt-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="progressBox py-1 2xl:py-4 cursor-pointer rounded-lg px-2 transition-colors duration-300"
                  onClick={() => handleClick(index)}
                >
                  <div className="w-full flex justify-between items-center mb-2 2xl:mb-3">
                    <h3 className="text-base md:text-2xl 2xl:text-3xl text-neutral-700 font-medium">
                      {item.title}
                    </h3>
                    <span className="text-3xl text-neutral-600 font-light">+</span>
                  </div>
                  <div className="progressbar w-full h-[1px] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      ref={(el) => (progressRefs.current[index] = el)}
                      className="h-full bg-gray-800 rounded-full"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 h-60 md:h-[500px] lg:h-full rounded-3xl lg:rounded-[80px] overflow-hidden">
          <img
            ref={imgRef}
            src={data[0].image}
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContructorComponent2;
