import React, { useEffect, useRef } from "react";

const Stalen = () => {
    const StalenCard1 = useRef(null);
    const StalenCard2 = useRef(null);
    const StalenCard3 = useRef(null);
    const dorOne = useRef(null);
    const dorTwo = useRef(null);
    const dorThree = useRef(null);
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
                dorTwo.current.style.transform = "translateX(70%) scaleX(0.8)";
                dorTwo.current.style.transition = "transform 1s ease-in-out";
            }
        };
        const resetDoor = () => {
            if (dorTwo.current) {
                dorTwo.current.style.transform = "translateX(0%)";
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

    useEffect(() => {
        const handleMouseEnter = () => {
            if (dorThree.current) {
                dorThree.current.classList.add("amimateDoorThree"); // ensure correct class name
            }
        };

        const handleMouseLeave = () => {
            if (dorThree.current) {
                dorThree.current.classList.remove("amimateDoorThree");
            }
        };

        const card = StalenCard3.current;

        if (card) {
            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (card) {
                card.removeEventListener("mouseenter", handleMouseEnter);
                card.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);


    return (
        <>
            <section id="stalen" className="w-full h-full py-12 ">
                <div className="stalenWrapper w-full h-full  bg-black p-12  text-white flex flex-col lg:flex-row items-end gap-12">

                    <div className="w-full lg:w-1/4 h-full bg-[#c4c3c325] shrink-0 min-h-[342px] p-8 flex justify-end items-end">
                        <div className="w-full h-fit flex flex-col items-end gap-6">
                            <h2 className=" md:max-w-56 text-2xl text-right">Type stalen deuren ment glas</h2>
                            <div className="w-fit border border-yellow-600 px-4 py-1">
                                <span className="text-yellow-600">- CONFIGUREER DEUR</span>
                            </div>
                        </div>
                    </div>
                    <div className="stalenCardWrapper w-full lg:w-3/4 h-full">
                        <div className="w-full h-full flex flex-wrap md:flex-nowrap gap-0 cursor-pointer">
                            {/* stalen card 1 */}
                            {/* ================== */}
                            <div
                                ref={StalenCard1}
                                className="stalen_card w-full h-full p-7 border border-yellow-900"
                            >
                                {/* -------- */}
                                <div className="stalenanim w-full h-20 flex gap-0">
                                    <div className="w-1/4 h-8 bg-gray-300 rounded-md"></div>
                                    {/* block one */}
                                    <div className="w-2/4 p-3">
                                        <div className="doorAnim relative w-full h-2">
                                            <div
                                                ref={dorOne}
                                                className="door w-[100%] h-1 bg-gray-300 absolute top-0 left-0"
                                            ></div>
                                            <div className="circle w-2 h-2 bg-gray-300 rounded-full absolute top-[-2px] left-[-7px]"></div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-8 bg-gray-300 rounded-md"></div>
                                    {/* block two */}
                                </div>

                                <div className="text">
                                    <h3 className="text-2xl">Stalen</h3>
                                    <h3 className="text-2xl text-yellow-600">taastdeuren</h3>
                                    <p className="w-full mt-5 mb-6 ">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                        assumenda eum repellat. Et cumque minima quae doloremque
                                        fugit hic.
                                    </p>
                                    <span className="text-yellow-600">-ontdek NU</span>
                                </div>
                            </div>
                            {/* stalen card 2  */}
                            {/* ================== */}
                            <div
                                ref={StalenCard2}
                                className="stalen_card w-full h-full p-7 border border-yellow-900 lg:backdrop:border-x-0"
                            >
                                <div className="anim w-full h-20  relative flex ">
                                    <div className="w-8 h-8 bg-gray-300"></div>
                                    <div className="w-full h-8 flex flex-col justify-between items-end border-r-[8px] border-r-gray-300">
                                        <div className="line1 w-1/2 h-2 bg-gray-300"></div>
                                        <div className="line1 w-1/2 h-2 bg-gray-300"></div>
                                    </div>
                                    <div
                                        ref={dorTwo}
                                        className="w-3/5 h-2 bg-gray-300 absolute top-3 left-[0%]"
                                    ></div>
                                </div>

                                <div className="text">
                                    <h3 className="text-2xl">Stalen</h3>
                                    <h3 className="text-2xl text-yellow-600">taastdeuren</h3>
                                    <p className="w-full mt-5 mb-6 ">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                        assumenda eum repellat. Et cumque minima quae doloremque
                                        fugit hic.
                                    </p>
                                    <span className="text-yellow-600">-ontdek NU</span>
                                </div>
                            </div>
                            {/* stalen card 3 */}
                            {/* ================== */}
                            <div
                                ref={StalenCard3}
                                className="stalen_card w-full h-full p-7 border border-yellow-900"
                            >
                                {/* -------- */}
                                <div className="stalenanim w-full h-20 flex gap-0">
                                    {/* block one */}
                                    <div className="w-1/4 h-8 bg-gray-400"></div>
                                    <div className="w-2/4 p-3">
                                        <div className="doorAnim relative w-full h-2 ">
                                            <div
                                                ref={dorThree}
                                                className="door w-[100%] h-1 bg-gray-50 absolute top-0 left-0"
                                            ></div>
                                            <div className="circle w-2 h-2 bg-gray-50 rounded-full absolute top-[-2px] left-[-5px]"></div>
                                        </div>
                                    </div>
                                    {/* block two */}
                                    <div className="w-1/4 h-8 bg-gray-400"></div>
                                </div>

                                <div className="text">
                                    <h3 className="text-2xl">Stalen</h3>
                                    <h3 className="text-2xl text-yellow-600">taastdeuren</h3>
                                    <p className="w-full mt-5 mb-6 leading-6">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                        assumenda eum repellat. Et cumque minima quae doloremque
                                        fugit hic.
                                    </p>
                                    <span className="text-yellow-600 font-semibold">-ontdek NU</span>
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
