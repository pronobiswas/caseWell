import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoaderComponent = () => {
     const progressRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    let obj = { value: 0 }; // for number animation

    const tl = gsap.timeline();

    tl.to(progressRef.current, {
      width: "100%",
      duration: 3,
      ease: "power2.out",
    });

    tl.to(obj, {
      value: 100,
      duration: 3,
      ease: "power2.out",
      onUpdate: () => {
        numberRef.current.textContent = `${Math.round(obj.value)}%`;
      },
    }, 0); // start both animations together
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-20 px-4">
      <div className="relative h-8 bg-gray-300 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-full bg-blue-500"
          style={{ width: "0%" }}
        ></div>
        <div
          ref={numberRef}
          className="absolute inset-0 flex justify-center items-center text-white font-bold"
        >
          0%
        </div>
      </div>
    </div>
  )
}

export default LoaderComponent