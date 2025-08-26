import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BtnComponent from "./utils/BtnComponent";

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
                <div className="stalenWrapper w-full h-full  bg-myColorOne p-12  text-myColorTwo flex flex-col lg:flex-row items-end gap-12 ">

                    <div className="w-full lg:w-1/4 h-full  shrink-0 min-h-[342px] p-8 flex justify-end items-end bg-[#0c290136] shadow-inner shadow-[#01500163] border border-[#003800]">
                        <div className="w-full h-fit flex flex-col  gap-6 ">
                            <h2 className=" md:max-w-56 text-2xl text-textLight font-NoeDisplayBold ">Door Types</h2>
                            <p className="text-textLight font-Poppins">Explore our diverse range of exclusive wooden doors, each designed to offer distinct advantages in style, functionality, and space utilization. From grand entrances to seamless room transitions, we have the perfect solution for your home.</p>
                            <div className="w-fit border border-textLight px-4 py-1">
                                <span className="text-textLight font-Poppins">Configure Yours →</span>
                            </div>
                        </div>
                    </div>

                    <div className="stalenCardWrapper w-full lg:w-3/4 h-full ">
                        <div className="w-full h-full flex flex-wrap md:flex-nowrap gap-5 cursor-pointer">
                            {/* Pivot Doors */}
                            {/* ================== */}
                            <div
                                ref={StalenCard1}
                                className="stalen_card w-full h-auto p-7 border border-textLight rounded-3xl shadow-inner shadow-[#ffffff6c]"
                            >
                                {/* -------- */}
                                <div className="stalenanim w-full h-20 flex gap-0">
                                    <div className="w-1/4 h-8 bg-myColorTwo rounded-md"></div>
                                    {/* block one */}
                                    <div className="w-2/4 p-3">
                                        <div className="doorAnim relative w-full h-2">
                                            <div
                                                ref={dorOne}
                                                className="door w-[100%] h-1 bg-myColorTwo absolute top-0 left-0"
                                            ></div>
                                            <div className="circle w-2 h-2 bg-myColorTwo rounded-full absolute top-[-2px] left-[-7px]"></div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-8 bg-myColorTwo rounded-md"></div>
                                    {/* block two */}
                                </div>

                                <div className=" w-full h-[calc(100%-80px)] flex flex-col justify-between ">
                                    <div className="w-full h-auto">
                                        <h3 className="text-2xl text-textLight font-NoeDisplayBold">Pivot Doors</h3>
                                        <p className="w-full mt-5 mb-6 text-textLight font-Poppins">
                                            Rotate on a vertical axis, allowing for larger, more dramatic entrances.
                                        </p>
                                    </div>

                                    <div className="w-full h-auto">
                                        <Link to="/collection" >
                                            <BtnComponent text="View Collection" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* slide door  */}
                            {/* ================== */}
                            <div
                                ref={StalenCard2}
                                className="stalen_card w-full h-full p-7 border border-textLight rounded-3xl shadow-inner shadow-[#ffffff6c]"
                            >
                                <div className="anim w-full h-20  relative flex ">
                                    <div className="w-8 h-8 bg-myColorTwo"></div>
                                    <div className="w-full h-8 flex flex-col justify-between items-end border-r-[8px] border-myColorTwo">
                                        <div className="line1 w-1/2 h-2 bg-myColorTwo"></div>
                                        <div className="line1 w-1/2 h-2 bg-myColorTwo"></div>
                                    </div>
                                    <div
                                        ref={dorTwo}
                                        className="w-3/5 h-2 bg-myColorTwo absolute top-3 left-[0%]"
                                    ></div>
                                </div>

                                <div className="text w-full h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl text-textLight  font-NoeDisplayBold">Slide Doors</h3>
                                        <p className="w-full mt-5 mb-6 text-textLight font-Poppins">
                                            Our custom sliding doors glide effortlessly along a track, making them perfect for space-saving layouts and modern interior design. Ideal as elegant room dividers, wardrobe solutions, or for creating a smooth flow between spaces.
                                        </p>
                                    </div>
                                    <div className="w-full h-auto">
                                        <Link to="/collection" >
                                            <BtnComponent text="View Collection" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Classic Hinged Doors */}
                            {/* ================== */}
                            <div
                                ref={StalenCard3}
                                className="stalen_card w-full h-auto p-7 border border-myColorTwo rounded-3xl shadow-inner shadow-[#ffffff6c]"
                            >
                                {/* -------- */}
                                <div className="stalenanim w-full h-20 flex gap-0">
                                    {/* block one */}
                                    <div className="w-1/4 h-8 bg-myColorTwo"></div>
                                    <div className="w-2/4 p-3">
                                        <div className="doorAnim relative w-full h-2 ">
                                            <div
                                                ref={dorThree}
                                                className="door w-[100%] h-1 bg-myColorTwo absolute top-0 left-0"
                                            ></div>
                                            <div className="circle w-2 h-2 bg-myColorTwo rounded-full absolute top-[-2px] left-[-5px]"></div>
                                        </div>
                                    </div>
                                    {/* block two */}
                                    <div className="w-1/4 h-8 bg-myColorTwo"></div>
                                </div>

                                <div className="text w-full h-[calc(100%-80px)] flex  flex-col justify-between">
                                    <div>

                                        <h3 className="text-2xl text-textLight font-NoeDisplayBold">Classic Hinged Doors</h3>
                                        <p className="w-full mt-5 mb-6 leading-6 text-textLight font-Poppins">
                                            The classic door, swinging open and closed on side-mounted hinges.
                                        </p>
                                    </div>

                                    <div className="w-full h-auto">
                                        <Link to="/collection" >
                                            <BtnComponent text="View Collection" />
                                        </Link>
                                    </div>
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
