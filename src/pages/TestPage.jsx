import React, { useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";

const data = [
  {
    title: "Architects",
    image: "/images/img1.png",
    heading: "Architects",
    description:
      "We can assist in bringing your technical and custom designs to life with precision, care, and a supply process you can count on.",
  },
  {
    title: "Custom Home Builders",
    image: "/images/img2.png",
    heading: "Custom Home Builders",
    description:
      "Build homes your clients will love — with curated styles, efficient fulfillment, and cost-conscious options that protect your bottom line.",
  },
  {
    title: "Interior Designers",
    image: "/images/img3.png",
    heading: "Interior Designers",
    description:
      "Let us help bring your creative vision to life. From product selection to install coordination, we’re your behind-the-scenes partner in beautiful, buildable design.",
  },
  {
    title: "Contractors & Installers",
    image: "/images/img4.png",
    heading: "Contractors & Installers",
    description:
      "We can be your go-to supply team — dependable products, clear communication, and responsive support to keep your projects on track.",
  },
];

const TestPage = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const progressRefs = useRef([]);
  const boxRef = useRef(null);

  const currentIndexRef = useRef(0);
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const animateContent = (index) => {
    const { heading, description, image } = data[index];

    gsap.to(boxRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      onComplete: () => {
        headingRef.current.innerHTML = heading;
        descRef.current.innerHTML = description;
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: -30 },
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
    // Clear previous animations
    gsap.killTweensOf(progressRefs.current);

    // Reset all
    progressRefs.current.forEach((ref, i) => {
      gsap.set(ref, { width: "0%" });
    });

    // Animate selected
    gsap.to(progressRefs.current[index], {
      width: "100%",
      duration: 4,
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
    }, 4500);
  };

  const handleClick = (index) => {
    clearInterval(intervalRef.current);
    goToSlide(index, true);
    setTimeout(startAutoSlide, 200);
  };

  useEffect(() => {
    // Initialize
    headingRef.current.innerHTML = data[0].heading;
    descRef.current.innerHTML = data[0].description;
    animateProgress(0);
    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
      gsap.killTweensOf(progressRefs.current);
    };
  }, []);

  return (
    <div id="constructor" className="w-full h-screen p-12 bg-[#F2F0EA] font-myFont">
      <div className="constructorWrapper w-full h-full flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 p-8 lg:p-12 bg-[#E1DBCB] rounded-3xl">
          <div className="w-full h-full flex flex-col justify-between">
            <p className="text-gray-700 mb-4">You're in the right place if you're a...</p>
            <div className="box1" ref={boxRef}>
              <h2
                ref={headingRef}
                className="constructHeading text-4xl lg:text-5xl font-bold mt-6 mb-6 text-gray-900 leading-tight"
              />
              <p
                ref={descRef}
                className="constructDescription mb-8 max-w-md text-gray-700 text-lg leading-relaxed"
              />
              <div className="w-fit border-2 border-gray-800 px-6 py-3 bg-amber-50 cursor-pointer rounded-full flex items-center gap-3 hover:bg-amber-100 transition-all duration-300">
                <span className="font-medium">See Contractor Service</span>
                <BsArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Progress Section */}
            <div className="w-full mt-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="progressBox py-4 cursor-pointer rounded-lg px-2 transition-colors duration-300"
                  onClick={() => handleClick(index)}
                >
                  <div className="w-full flex justify-between items-center mb-3">
                    <h3 className="text-2xl lg:text-3xl text-neutral-700 font-medium">{item.title}</h3>
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
        <div className="w-full lg:w-1/2 order-1 lg:order-2 h-full rounded-3xl lg:rounded-[80px] overflow-hidden">
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

export default TestPage;
