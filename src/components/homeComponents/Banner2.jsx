import React, { useContext, useEffect, useRef, useState } from "react";
import "../../index.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { LanguageContext } from "../../rootLayout/RootLayout";

gsap.registerPlugin(SplitText);

const Banner2 = () => {
  const { changelanguase } = useContext(LanguageContext);
  const bannerRef = useRef(null);
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
  ];
  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    if (bannerRef.current) {
      bannerRef.current.classList.add("animBG");
    }

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (!bannerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bannerRef.current, {
        backgroundSize: "100% 100%",
        duration: 2,
        ease: "power1.inOut",
        // yoyo: true,
        // repeat: -1,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, [bgIndex]);

  useEffect(() => {
    const headings = bannerRef.current.querySelectorAll(".banner_heading h1");
    const subheadings = bannerRef.current.querySelectorAll(
      ".banner_subHeading h4"
    );

    gsap.to(".rowOverlay", {
      width: "0%",
      delay: 2,
      duration: 1,
    });

    headings.forEach((heading) => {
      const split = new SplitText(heading, { type: "words" });
      gsap.from(split.words, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out",
        stagger: 0.1,
      });
    });
    subheadings.forEach((subheeading) => {
      const split = new SplitText(subheeading, { type: "words" });
      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      });
    });
  }, []);
  return (
    <>
      <div
        id="banner"
        className="w-full bg-black"
        style={{
          backgroundImage: `url(${images[bgIndex]})`,
        }}
        ref={bannerRef}
      >
        <div className="bannerWarpper w-full h-screen">
          {/* ==bannerRow== */}
          <div className="proRow w-full h-1/4 border-b border-b-gray-400 relative">
            <div
              className="rowOverlay w-5 h-full bg-colorOne absolute top-0 left-0"
              style={{ width: "100%" }}
            ></div>
          </div>
          {/* ==bannerRow== */}
          <div className="proRow w-full h-1/4 border-b border-b-myColorThree py-5 px-20 relative">
            <div
              className="rowOverlay w-5 h-full bg-colorOne absolute top-0 right-0"
              style={{ width: "100%" }}
            ></div>
            <div className="banner_subHeading relative overflow-hidden">
              <h4 className="text-right text-2xl text-LightText font-Poppins">
                {changelanguase? 
                "Exclusivity, now within reach"
                :
                "Exclusiviteit, nu binnen handbereik"
                }
              </h4>
            </div>
            <div className="banner_heading relative overflow-hidden">
              <h1 className="text-[6vw] font-Montserrat text-lightText text-left">
                {changelanguase? 
                "Luxury Doors"
                :
                "Luxe deuren"
                }
              </h1>
            </div>
          </div>
          {/* ==bannerRow== */}
          <div className="proRow w-full h-1/4 border-b border-b-gray-400 py-5 px-20 relative">
            <div
              className="rowOverlay w-5 h-full bg-colorOne absolute top-0 left-0"
              style={{ width: "100%" }}
            ></div>
            <div className="banner_subHeading relative overflow-hidden">
              {/* --heading 4-- */}
              <h4 className="text-left text-2xl text-LightText font-Poppins">
                
                {changelanguase?
                "Doors that tell your story"
              :
              "Deuren die uw verhaal vertellen"}
              </h4>
            </div>
            <div className="banner_heading relative overflow-hidden">
              <h1 className="text-[6vw] text-right text-textLight font-Montserrat">
                {changelanguase?"Unique Designs":"Unieke ontwerpen"}
              </h1>
            </div>
          </div>
          {/* ==bannerRow== */}
          <div className="proRow w-full h-1/4 border-b border-b-gray-700 py-5 px-20 relative">
            <div
              className="rowOverlay w-5 h-full bg-colorOne absolute top-0 right-0"
              style={{ width: "100%" }}
            ></div>
            <div className="banner_subHeading relative overflow-hidden">
              <h4 className="text-right text-2xl text-LightText font-Poppins">
                {changelanguase?"Doors designed to transcend trends":"Deuren ontworpen om trends te overstijgen"}
              </h4>
            </div>
            <div className="banner_heading relative overflow-hidden">
              <h1 className="text-[6vw]  text-textLight font-Montserrat">
                {changelanguase?"Timeless Quality":"Tijdloze kwaliteit"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
