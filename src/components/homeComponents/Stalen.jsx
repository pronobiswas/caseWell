import React, { useEffect, useRef } from "react";

const Stalen = () => {
  const StalenCard1 = useRef(null);
  const StalenCard2 = useRef(null);
  const dorOne = useRef(null);
  const dorTwo = useRef(null);
  console.log(dorOne);
  useEffect(() => {
    const animateDoor = () => {
      if (dorOne.current) {
        dorOne.current.style.transform = "rotate(30deg)";
        dorOne.current.style.transformOrigin = "left center";
        dorOne.current.style.transition = "transform 1s ease-in-out";
      }
    };

    const resetDoor = () => {
      if (dorOne.current) {
        dorOne.current.style.transform = "translateX(0)";
      }
    };

    const handleMouseEnter = () => {
      animateDoor();
    };

    const handleMouseLeave = () => {
      resetDoor();
    };

    if (StalenCard1.current) {
      StalenCard1.current.addEventListener("mouseenter", handleMouseEnter);
      StalenCard1.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (StalenCard1.current) {
        StalenCard1.current.removeEventListener("mouseenter", handleMouseEnter);
        StalenCard1.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const animateDoor = () => {
      if (dorTwo.current) {
        dorTwo.current.style.transform = "translateX(-45%)";
        // dorTwo.current.style.transformOrigin = "left center";
        dorTwo.current.style.transition = "transform 1s ease-in-out";
      }
    };

    const resetDoor = () => {
      if (dorTwo.current) {
        dorTwo.current.style.transform = "translateX(0)";
      }
    };

    const handleMouseEnter = () => {
      animateDoor();
    };

    const handleMouseLeave = () => {
      resetDoor();
    };

    if (StalenCard2.current) {
      StalenCard2.current.addEventListener("mouseenter", handleMouseEnter);
      StalenCard2.current.addEventListener("mouseleave", handleMouseLeave);
    }
    if (StalenCard2.current) {
      StalenCard2.current.addEventListener("mouseenter", handleMouseEnter);
      StalenCard2.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (StalenCard2.current) {
        StalenCard2.current.removeEventListener("mouseenter", handleMouseEnter);
        StalenCard2.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <section id="stalen" className="w-full h-full py-12 ">
        <div className="stalenWrapper w-full h-[500px] bg-black p-12  text-white flex gap-12">
          <div className="w-1/4 shrink-0 h-full flex justify-end items-end">
            <div className="w-full h-fit">
              <h2 className="text-2xl ">Type stalen deuren ment glas</h2>
              <div className="border ">
                <span>- CONFIGUREER DEUR</span>
              </div>
            </div>
          </div>
          <div className="stalenCardWrapper 3/4 h-full bg-green-400">
            <div className="w-full h-full bg-slate-700 flex">
              {/* stalen card  */}
              <div
                ref={StalenCard1}
                className="stalen_card border w-full h-full p-7 "
              >
                {/* -------- */}
                <div className="stalenanim w-full h-20 flex gap-0">
                  <div className="w-1/4 h-8 bg-gray-400"></div>
                  {/* block one */}
                  <div className="w-2/4 p-3">
                    <div className="doorAnim relative w-full h-2 bg-green-500">
                      <div
                        ref={dorOne}
                        className="door w-40 h-1 bg-gray-50 absolute top-0 left-0"
                      ></div>
                      <div className="circle w-2 h-2 bg-red-500 rounded-full absolute top-0 left-0"></div>
                    </div>
                  </div>
                  <div className="w-1/4 h-8 bg-gray-400"></div>
                  {/* block two */}
                </div>

                <div className="text">
                  <h3 className="text-2xl">Stalen</h3>
                  <h3 className="text-2xl">taastdeuren</h3>
                  <p className="w-full mt-5 mb-6 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    assumenda eum repellat. Et cumque minima quae doloremque
                    fugit hic.
                  </p>
                  <span>-ontdek NU</span>
                </div>
              </div>
              {/* stalen card 2  */}
              {/* ================== */}
              <div
                ref={StalenCard2}
                className="stalen_card border border-x-0 w-full h-full p-7 "
              >
                <div className="anim w-full h-12 bg-gray-500 relative flex ">
                  <div className="w-8 h-8 bg-gray-300"></div>
                  <div className="w-full h-8 bg-green-400 flex flex-col justify-between items-end border-r-[8px] border-r-yellow-700">
                    <div className="line1 w-1/2 h-2 bg-yellow-700"></div>
                    <div className="line1 w-1/2 h-2 bg-yellow-700"></div>
                  </div>
                  <div
                    ref={dorTwo}
                    className="w-3/5 h-2 bg-gray-300 absolute top-3 left-[35%]"
                  ></div>
                </div>

                <div className="text">
                  <h3 className="text-2xl">Stalen</h3>
                  <h3 className="text-2xl">taastdeuren</h3>
                  <p className="w-full mt-5 mb-6 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    assumenda eum repellat. Et cumque minima quae doloremque
                    fugit hic.
                  </p>
                  <span>-ontdek NU</span>
                </div>
              </div>
              <div className="stalen_card border w-full h-full p-7 ">
                <div className="anim w-full h-40 bg-gray-500"></div>
                <div className="text">
                  <h3 className="text-2xl">Stalen</h3>
                  <h3 className="text-2xl">taastdeuren</h3>
                  <p className="w-full mt-5 mb-6 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    assumenda eum repellat. Et cumque minima quae doloremque
                    fugit hic.
                  </p>
                  <span>-ontdek NU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stalen;
