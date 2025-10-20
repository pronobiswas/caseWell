import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const InspirationInsight = () => {
  const { t } = useTranslation();
  const [clickedValue, setClickedValue] = useState(0);
  const progressRef = useRef(null);
  const slideRef = useRef(null);
  const slidesCount = 5; // total number of slides

  const handleIncrement = () => {
    setClickedValue((prev) => (prev < slidesCount - 1 ? prev + 1 : slidesCount - 1));
  };

  const handleDecrement = () => {
    setClickedValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const slideItems = slideRef.current.querySelectorAll(".slideItem");
    const slideWidth = slideItems[0].offsetWidth + 40; // 40 = gap-10 (10 * 4px)
    const totalWidth = slideWidth * slidesCount;
    const progressPercent = ((clickedValue + 1) / slidesCount) * 100;

    // Slide animation
    gsap.to(slideRef.current, {
      x: -slideWidth * clickedValue,
      duration: 0.2,
      ease: "power1.inOut",
    });

    // Progress bar animation
    gsap.to(progressRef.current, {
      width: `${progressPercent}%`,
      duration: 0.2,
      ease: "power1.inOut",
    });
  }, [clickedValue]);

  return (
    <section id="inspiration" className="py-10 px-5 md:px-12">
      <div className="inspirationWrapper">
        {/* ===== HEADER ===== */}
        <div className="inspirationHeader mb-8">
          <h2 className="text-3xl md:text-4xl text-myColorOne font-Montserrat">
            {t("homePage.InspirationInsight.heading")}
          </h2>
          <h3 className="text-xl md:text-2xl mt-4 font-Montserrat text-myColorOne">
            {t("homePage.InspirationInsight.title")}
          </h3>
          <p className="max-w-[500px] text-sm md:text-base font-Poppins text-myColorOne">
            {t("homePage.InspirationInsight.description")}
          </p>
        </div>

        {/* ===== CONTROLS ===== */}
        <div className="flex justify-end mb-4">
          <div className="bg-myColorThree py-1 px-3 rounded-full flex items-center gap-2 text-white cursor-pointer">
            <FaArrowLeft onClick={handleDecrement} />
            <span>{clickedValue + 1}</span>
            <FaArrowRight onClick={handleIncrement} />
          </div>
        </div>

        {/* ===== SLIDER ===== */}
        <div className="overflow-hidden w-full">
          <div ref={slideRef} className="flex gap-10 transition-all duration-500">
            {[
              "/images/slideImage1.jpg",
              "/images/slideImage2.jpg",
              "/images/slideImage3.jpg",
              "/images/slideImage4.jpg",
              "/images/slideImage5.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="slideItem w-fit flex-shrink-0 flex flex-col items-start"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full max-w-[400px] md:max-w-[450px] h-auto object-cover rounded-lg"
                />
                <div className="mt-3">
                  <p className="font-Poppins text-myColorOne">
                    Top Performing Cabinet
                  </p>
                  <p className="font-Poppins text-myColorOne">
                    Finishes of 2025
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PROGRESS BAR ===== */}
        <div className="w-full h-[3px] bg-myColorThree mt-5 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-myColorOne w-[20%] rounded-full"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default InspirationInsight;
