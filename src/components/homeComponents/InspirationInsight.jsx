import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const InspirationInsight = () => {
  const { t } = useTranslation();
  let [clickedValue, setClickedValue] = useState(0);
  const progressRef = useRef(null);
  const slideRef = useRef(null);
  const handleIncrement = () => {
    setClickedValue((prev) => (prev < 3 ? prev + 1 : 3));
  };
  const handleDecrement = () => {
    setClickedValue((prev) => (prev > 0 ? prev - 1 : 0));
  };
  useEffect(() => {
    if (clickedValue == 0) {
      gsap.to(slideRef.current, {
        xPercent: -20,
        duration: 0.5,
      });
      gsap.to(progressRef.current, {
        width: "20%",
        duration: 0.5,
      });
    }
    if (clickedValue == 1) {
      gsap.to(progressRef.current, {
        width: "50%",
        duration: 0.5,
      });
      gsap.to(slideRef.current, {
        xPercent: -50,
        duration: 0.5,
      });
    }
    if (clickedValue == 2) {
      gsap.to(progressRef.current, {
        width: "70%",
        duration: 0.5,
      });
      gsap.to(slideRef.current, {
        xPercent: -70,
        duration: 0.5,
      });
    }
    if (clickedValue == 3) {
      gsap.to(progressRef.current, {
        width: "100%",
        duration: 0.5,
      });
      gsap.to(slideRef.current, {
        xPercent: -100,
        duration: 0.5,
      });
    }
  }, [clickedValue]);

  return (
    <>
      <section id="inspiration">
        <div className="inspirationWrapper p-5 md:p-12">
          <div className="inspirationHeader">
            <h2 className="text-4xl text-myColorOne font-Montserrat">
              {t("homePage.InspirationInsight.heading")}
            </h2>
            <h3 className="text-2xl mt-5 mb-1 font-Montserrat text-myColorOne">
              {t("homePage.InspirationInsight.title")}
            </h3>
            <p className="w-full max-w-[500px] text-sm font-Poppins text-myColorOne">
              {t("homePage.InspirationInsight.description")}
            </p>
          </div>
          {/* ======inspirationSliderWrapper===== */}
          <div className="w-full h-full overflow-hidden">
            {/* =====inspiration slider header=== */}
            <div className="w-full flex justify-end">
              <div className=" bg-myColorThree py-1 px-3 rounded-full flex items-center gap-2">
                <span onClick={handleDecrement}>
                  <FaArrowLeft />
                </span>
                <span>{clickedValue + 1}</span>
                <span onClick={handleIncrement}>
                  <FaArrowRight />
                </span>
              </div>
            </div>
            {/* =======inspiration slider=========== */}
            <div className="w-fit h-full  my-5 overflow-hidden">
              <div className="inspirationSliderWrapper box-border">
                {/* ====slidesContainer=== */}
                <div
                  ref={slideRef}
                  className="box-border w-full h-full py-5 flex gap-10 flex-nowrap [&>div]:shrink-0 relative left-[70%]"
                >
                  <div className="slideItem w-fit h-fit ">
                    <img
                      src="/images/slideImage1.jpg"
                      alt="images"
                      className="w-full max-w-[432px]"
                    />
                    <div className="mt-5 ">
                      <p className="font-Poppins text-myColorOne">
                        Top Performing Cabinet
                      </p>
                      <p className="font-Poppins text-myColorOne">
                        Finishes of 2025
                      </p>
                    </div>
                  </div>
                  <div className="slideItem w-fit h-fit">
                    <img
                      src="/images/slideImage2.jpg"
                      alt="images"
                      className="w-full max-w-[392px] h-[450px]"
                    />
                    <div className="mt-5">
                      <p className="font-Poppins text-myColorOne">
                        Top Performing Cabinet
                      </p>
                      <p className="font-Poppins text-myColorOne">
                        Finishes of 2025
                      </p>
                    </div>
                  </div>
                  <div className="slideItem w-fit h-fit">
                    <img
                      src="/images/slideImage3.jpg"
                      alt="images"
                      className="w-full max-w-[420px]"
                    />
                    <div className="mt-5">
                      <p className="font-Poppins text-myColorOne">
                        Top Performing Cabinet
                      </p>
                      <p className="font-Poppins text-myColorOne">
                        Finishes of 2025
                      </p>
                    </div>
                  </div>
                  <div className="slideItem w-fit h-fit">
                    <img
                      src="/images/slideImage4.jpg"
                      alt="images"
                      className="w-full max-w-[432px]"
                    />
                    <div className="mt-5">
                      <p className="font-Poppins text-myColorOne">
                        Top Performing Cabinet
                      </p>
                      <p className="font-Poppins text-myColorOne">
                        Finishes of 2025
                      </p>
                    </div>
                  </div>
                  <div className="slideItem w-full max-w-[412px]">
                    <img
                      src="/images/slideImage5.jpg"
                      alt="images"
                      className="w-full h-full   object-cover"
                    />
                    <div className="mt-5">
                      <p className="font-Poppins text-myColorOne">
                        Top Performing Cabinet
                      </p>
                      <p className="font-Poppins text-myColorOne">
                        Finishes of 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =========inspiration Proggress bar========= */}
            <div className="w-full h-[2px] bg-myColorThree">
              <div
                ref={progressRef}
                className="h-full bg-myColorOne"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InspirationInsight;
