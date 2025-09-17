import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import BtnComponent from "../homeComponents/utils/BtnComponent";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(SplitText);

const ArchitectsBanner = () => {
  const { t } = useTranslation();
    // let x = {t("ProductsPage.Pivot.pageName")}
  const bannerHeadingRef = useRef(null);

  useEffect(() => {
    if (bannerHeadingRef.current) {
      const splitHeader = new SplitText(bannerHeadingRef.current, {
        type: "words, chars, lines",
      });
      gsap.from(splitHeader.lines, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power4.out",
      });
      return () => {
        splitHeader.revert();
      };
    }
  }, []);

  return (
    <div className="architectsBanner bg-myColorTwo">
      <section
        id="architects"
        className='w-full h-screen bg-[url("/images/architecBanner.jpg")] bg-cover font-Poppins'
      >
        <div className="architectsWrapper w-full h-full flex items-end p-5 md:p-12 text-white">
          <div className="architectsContent">
            <h2
              ref={bannerHeadingRef}
              className="w-full max-w-md text-3xl md:text-5xl mb-8 leading-10 text-textLight"
            >
              {t("Architects.ArchitectsBanner.title")}
            </h2>
            <BtnComponent text={t("Architects.ArchitectsBanner.btnText")}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchitectsBanner;
