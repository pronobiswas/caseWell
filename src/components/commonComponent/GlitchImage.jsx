import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const GlitchSlider = ({
  images = ["/images/img1.png", "/images/img2.png", "/images/img3.png"],
  width = "100%",
  height = "100%",
  delay = 3, // seconds per slide
}) => {
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const layers = containerRef.current.querySelectorAll(".glitch-layer");

    // Continuous glitch effect
    const glitchTimeline = gsap.timeline({ repeat: -1 });
    layers.forEach((layer, i) => {
      glitchTimeline.to(
        layer,
        {
          filter: "blur(2px) brightness(1.2)",
          duration: 0.1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        },
        i * 0.05
      );
    });

    // Image slide interval
    const slideInterval = setInterval(() => {
      const prevIndex = currentIndex;
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      // Animate crossfade with GSAP
      gsap.to(layers[prevIndex], {
        opacity: 0.3,
        filter: "blur(3px) brightness(0.7)",
        duration: 1,
      });
      gsap.to(layers[nextIndex], {
        opacity: 1,
        filter: "blur(0px) brightness(1)",
        duration: 1,
      });
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [currentIndex, images.length]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: width,
            height: height,
            overflow: "hidden",
            imageRendering: "pixelated",
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="glitch-layer"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: index === 0 ? 1 : 0.3,
                filter:
                  index === 0
                    ? "blur(0px) brightness(1)"
                    : "blur(3px) brightness(0.7)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlitchSlider;
