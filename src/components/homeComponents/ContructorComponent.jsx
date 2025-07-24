import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { LuArrowUpRight } from "react-icons/lu";

const ContructorComponent = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to(".proggress1", {
      width: "100%",
      duration: 5,
      onComplete: () => {
        gsap.to(".proggress1", {
          width: 0,
          duration: 0.5,
        });
        gsap.to(imgRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            imgRef.current.src = "/images/img2.png";
            gsap.to(imgRef.current, {
              scale: 1,
              opacity: 1,
              duration: 1,
            });
          },
        });
        document.querySelector(".constructHeading").innerHTML =
          "Custom Home Builders";
        document.querySelector(".constructDescription").innerHTML =
          "Build homes your clients will love — with curated styles, efficient fulfillment, and cost-conscious options that protect your bottom line.";

        gsap.from(".box1", {
          opacity: 0,
          y: 100,
          duration: 0.1,
          onComplete: () => {
            gsap.to(".box1", {
              opacity: 1,
              y: 0,
              duration: 0.7,
            });
          },
        });
      },
    })
      // prrogress two
      .to(".proggress2", {
        width: "100%",
        delay: 0,
        duration: 5,
        onComplete: () => {
          gsap.to(".proggress2", {
            width: 0,
            duration: 0.5,
          });
          gsap.to(imgRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              imgRef.current.src = "/images/img3.png";
              gsap.to(imgRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1,
              });
            },
          });
          document.querySelector(".constructHeading").innerHTML =
            "Interior Designers";
          document.querySelector(".constructDescription").innerHTML =
            "Let us help bring your creative vision to life. From product selection to install coordination, we’re your behind-the-scenes partner in beautiful, buildable design.";
          gsap.from(".box1", {
            opacity: 0,
            y: 100,
            duration: 0.1,
            onComplete: () => {
              gsap.to(".box1", {
                opacity: 1,
                y: 0,
                duration: 0.7,
              });
            },
          });
        },
      })
      // prrogress three
      .to(".proggress3", {
        width: "100%",
        duration: 5,
        onComplete: () => {
          gsap.to(".proggress3", {
            width: 0,
            duration: 0.1,
          });
          gsap.to(imgRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              imgRef.current.src = "/images/img4.png";
              gsap.to(imgRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1,
              });
            },
          });
          document.querySelector(".constructHeading").innerHTML =
            "Contractors & Installers";
          document.querySelector(".constructDescription").innerHTML =
            "We can be your go-to supply team — dependable products, clear communication, and responsive support to keep your projects on track.";
          gsap.from(".box1", {
            opacity: 0,
            y: 100,
            duration: 0.1,
            onComplete: () => {
              gsap.to(".box1", {
                opacity: 1,
                y: 0,
                duration: 0.7,
              });
            },
          });
        },
      })
      .to(".proggress4", {
        width: "100%",
        duration: 5,
        onComplete: () => {
          gsap.to(".proggress4", {
            width: 0,
            duration: 0.1,
          });
          gsap.to(imgRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              imgRef.current.src = "/images/img1.png";
              gsap.to(imgRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1,
              });
            },
          });
          document.querySelector(".constructHeading").innerHTML = "Architects";
          document.querySelector(".constructDescription").innerHTML =
            "We can assist in bringing your technical and custom designs to life with precision, care, and a supply process you can count on.";
          gsap.from(".box1", {
            opacity: 0,
            y: 100,
            duration: 0.1,
            onComplete: () => {
              gsap.to(".box1", {
                opacity: 1,
                y: 0,
                duration: 0.7,
              });
            },
          });
        },
      });
  }, []);



  return (
    <>
      <div id="contuctor " className="w-full h-screen px-2 py-12 ">
        <div className="contuctorWrapper w-full h-full flex flex-col lg:flex-row gap-8">
          {/* ===content section=== */}
          <div className="w-full lg:w-1/2 h-full order-2 lg:order-1 p-12 bg-[#E1DBCB]">
            <div className="w-full h-full flex flex-col justify-between">
              {/* ==heading container== */}
              <div id="constructorHeadingContainer" className="box1">
                <p>You’re in the right place if you’re a...</p>
                <h2
                  ref={headingRef}
                  className="constructHeading text-5xl mt-6 mb-10"
                >
                  Custom Home Builders
                </h2>
                <p ref={descRef} className="constructDescription mb-7 max-w-96">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi magnam eius ullam illo tenetur consequatur totam.
                  Voluptates fuga nam distinctio inventore consectetur ipsum!
                  Fuga ipsa molestias minus culpa facilis ad?
                </p>

                <div className="w-fit border px-5 py-2 bg-amber-50 cursor-pointer rounded-full flex items-center gap-3">
                  <span>See Contractor Service</span>
                  <span>
                    <LuArrowUpRight />
                  </span>
                </div>
              </div>
              {/* ===progress container=== */}
              <div className="w-full">
                <div className="proggressBox py-2">
                  <div className="w-full flex justify-between mb-2">
                    <h3 className="text-3xl text-neutral-600">Architects</h3>
                    <span className="text-4xl text-neutral-600">+</span>
                  </div>
                  <div className="proggressbar w-full h-[1px] bg-slate-200">
                    <div
                      className="proggress1 h-full bg-black"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="proggressBox py-2">
                  <div className="w-full flex justify-between mb-2">
                    <h3 className="text-3xl text-neutral-600">Custom Home Builders</h3>
                    <span className="text-4xl text-neutral-600">+</span>
                  </div>
                  <div className="proggressbar w-full h-[1px] bg-slate-200">
                    <div
                      className="proggress2 h-full bg-black"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="proggressBox py-2">
                  <div className="w-full flex justify-between mb-2">
                    <h3 className="text-3xl text-neutral-600">Interior Designers</h3>
                    <span className="text-4xl text-neutral-600">+</span>
                  </div>
                  <div className="proggressbar w-full h-[1px] bg-slate-300">
                    <div
                      className="proggress3 h-full bg-black"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="proggressBox py-2">
                  <div className="w-full flex justify-between mb-2">
                    <h3 className="text-3xl text-neutral-600">Contractors & Installers</h3>
                    <span className="text-4xl text-neutral-600">+</span>
                  </div>
                  <div className="proggressbar w-full h-[1px] bg-slate-300">
                    <div
                      className="proggress4 h-full bg-black"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ==image section== */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 h-full rounded-[80px] overflow-hidden">
            <img
              ref={imgRef}
              src="/images/img1.png"
              alt="png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContructorComponent;
