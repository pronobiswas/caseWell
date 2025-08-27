import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from "../homeComponents/utils/BtnComponent";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const SlideDoorDescription = () => {
  const optionOneRef = useRef(null);
  useEffect(() => {
    if (!optionOneRef.current) return;

    const ctx = gsap.context(() => {
      const optionOneCols =
        optionOneRef.current.querySelectorAll(".optionOneCol");

      gsap.from(optionOneCols, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: optionOneRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      });
    }, optionOneRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section>
        <div className="wrapper w-full bg-colorOne text-LightText font-Poppins">
          <div
            ref={optionOneRef}
            className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5"
          >
            <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-myColorThree text-myColorOne">
              <span>What is a Sliding Door?</span>
              <div className="flex flex-col gap-14 mt-5">
                <h3 className="font-Montserrat text-3xl">
                  Space-Saving Elegance
                </h3>

                <p>
                  Sliding doors glide along a track instead of swinging open,
                  making them ideal for space-conscious layouts. Our modern
                  sliding doors work beautifully as statement room dividers or
                  sleek wardrobe solutions.
                </p>
                <Link to="/collection">
                  <BtnComponent text="See Collection" />
                </Link>
              </div>
            </div>

            <div className="optionOneCol w-full md:w-1/2  px-8 py-32">
              <span>Why Choose Sliding?</span>
              <div className="flex flex-col gap-14 mt-5">
                <h3 className="font-Montserrat text-3xl">
                  Flexible & Functional
                </h3>

                <p>
                  Perfect for dividing spaces, hiding storage, or creating a
                  seamless flow between rooms, our custom sliding doors offer
                  practical solutions without compromising on design. Button:
                  Get Inspired → Inspiration page.
                </p>
                <Link to="/inspiration">
                  <BtnComponent text="Get Inspired" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlideDoorDescription;
