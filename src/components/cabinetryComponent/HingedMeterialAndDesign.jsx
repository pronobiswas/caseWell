import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from "../homeComponents/utils/BtnComponent";

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const HingedMeterialAndDesign = () => {
  const hingedsecRef = useRef(null);

  useEffect(() => {
    if (!hingedsecRef.current) return;
    const headings =
      hingedsecRef.current.querySelectorAll(".hingedDescHeading");
    const hingedDesc = hingedsecRef.current.querySelectorAll(".hingedDesc");
    const titles = hingedsecRef.current.querySelectorAll(".hingedTitle");
    const slideDoorImage =
      hingedsecRef.current.querySelectorAll(".slideDoorImage");

    const ctx = gsap.context(() => {
      headings.forEach((heading) => {
        const headingWord = new SplitText(heading, {
          type: "lines,words",
          linesClass: "line overflow-hidden block",
          wordsClass: "words overflow-hidden block",
        });
        gsap.from(headingWord.words, {
          y: 103,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        });
      });

      hingedDesc.forEach((heading) => {
        const headingWord = new SplitText(heading, {
          type: "lines,words",
          linesClass: "line overflow-hidden block",
          wordsClass: "words overflow-hidden block",
        });
        gsap.from(headingWord.words, {
          y: 103,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        });
      });
      titles.forEach((title) => {
        const titleSplit = new SplitText(title, {
          type: "lines,words",
          linesClass: "line overflow-hidden block",
          wordsClass: "words overflow-hidden block",
        });
        gsap.from(titleSplit.words, {
          y: 103,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        });
      });

      slideDoorImage.forEach((img) => {
        gsap.from(img, {
          scale: 1.3,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        });
      });
    }, hingedsecRef);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section ref={hingedsecRef}>
        <div className="wrapper w-full h-[560px] bg-colorOne text-LightText font-Poppins flex gap-10 p-5">
          <div className="w-1/2 h-full">
            <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
              <span className="hingedTitle">Material Choices</span>
              <h3 className="hingedDescHeading text-4xl font-Montserrat">
                Finish It Your Way
              </h3>
              <p className="hingedDesc">
                Natural woodgrain, rich veneers, painted panels, or glass
                inserts — our high-end hinged doors can be tailored to perfectly
                match your interior style and palette.
              </p>
              <BtnComponent text="View Materials" />
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="/images/slideTransparent.jpg"
                alt="sample image"
                className="slideDoorImage w-full h-full object-fill"
              />
            </div>
          </div>
        </div>

        <div className="wrapper w-full h-[560px] bg-myColorOne text-LightText font-Poppins flex gap-10 p-5">
          <div className="w-1/2 h-full">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="/images/slideWodden.jpg"
                alt="sample image"
                className="slideDoorImage w-full h-full object-fill"
              />
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
              <span className="hingedTitle">Hardware Precision</span>
              <h3 className="hingedDescHeading text-4xl font-Montserrat">
                Make It Distinctive
              </h3>
              <p className="hingedDesc">
                Handles that blend in, or handles that steal the spotlight —
                choose hardware that elevates the look and feel of your custom
                hinged door.
              </p>
              <BtnComponent text="See Hardware Options" />
            </div>
          </div>
        </div>

        <div className="wrapper w-full h-[560px] bg-myColorOne text-LightText font-Poppins flex gap-10 p-5">
          <div className="w-1/2 h-full">
            <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
              <span className="hingedTitle">Integration Ideas</span>
              <h3 className="hingedDescHeading text-4xl font-Montserrat">
                {" "}
                Beyond the Frame
              </h3>
              <p className="hingedDesc">
                Match your hinged door with trims, skirting, or wall panels in
                the same finish for a unified, architecturally cohesive look
              </p>
              <Link to="/contact">
                <BtnComponent text="Get in Contact" />
              </Link>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="/images/pivotdoors1.jpg"
                alt="sample image"
                className="slideDoorImage w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HingedMeterialAndDesign;
