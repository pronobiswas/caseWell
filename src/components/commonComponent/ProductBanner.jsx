import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useTranslation } from "react-i18next";
import BtnComponent from "../homeComponents/utils/BtnComponent";
gsap.registerPlugin(SplitText);

const ProductBanner = ({
  url = "/images/BoiserieBG.jpeg",
  heading = "Flush to wall",
  text = "We offer two ways to get started — choose the path that suits you best.",
  link = "",
}) => {
  const { t } = useTranslation();
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingSplitLine = new SplitText(headingRef.current, {
        type: "lines,words,chars",
        linesClass: "line overflow-hidden block",
      });
      const subheadingSplit = new SplitText(textRef.current, {
        type: "lines,words,chars",
        linesClass: "line overflow-hidden block",
      });
      gsap.from(headingSplitLine.chars, {
        // y: 100,
        // opacity: 0,
        rotateX: 180,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
      });
      gsap.from(subheadingSplit.words, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="cabineteryBanner"
        className="w-full h-screen font-Poppins text-LightText"
        style={{
          backgroundImage: `linear-gradient(rgba(13,41,0,0.3), rgba(13,41,0,0.3)), url(${url})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="cabinetryBannerWarper w-full h-full flex items-end p-5 md:p-12 z-0">
          <div className="cabinetryBannerContent  ">
            <h1
              ref={headingRef}
              className="text-5xl font-Montserrat text-textLight font-bold"
            >
              {heading}
            </h1>
            <p
              ref={textRef}
              className="w-full max-w-2xl text-base md:text-xl mt-8 mb-6 text-textLight font-Poppins "
            >
              {text}
            </p>
            <Link to="/collection">
              <BtnComponent text={t("ProductsPage.WallPartitions.banner.btnText")} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBanner;
