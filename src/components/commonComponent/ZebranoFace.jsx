import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BtnComponent from "../homeComponents/utils/BtnComponent";

const ZebranoFace = () => {
    const [index, setIndex] = useState(0);
    const progressRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const nameRef = useRef(null);
    const designetionRef = useRef(null);
    const descriptionRef = useRef(null);

    // Team Data
    const facesArray = [
        {
            name: "Mathijs",
            designastion: "Owner and woodworker",
            description:
                "Necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/images/img1.png",
        },
        {
            name: "Robbert",
            designastion: "Designer",
            description:
                "Consequatur, esse iure eum velit porro libero voluptatum. Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos!",
            image: "/images/img2.png",
        },
        {
            name: "Rick",
            designastion: "Woodworker",
            description:
                "Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos! Consequatur, esse iure eum velit porro libero voluptatum.",
            image: "/images/img3.png",
        },
        {
            name: "Mathijs",
            designastion: "Owner and woodworker",
            description:
                "Voluptate aliquam dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ex voluptates beatae reprehenderit.",
            image: "/images/img4.png",
        },
        {
            name: "Robbert",
            designastion: "Designer",
            description:
                "Velit porro libero voluptatum. Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos!",
            image: "/images/img2.png",
        },
        {
            name: "Rick",
            designastion: "Woodworker",
            description:
                "Necessitatibus illo, ipsam laboriosam ex voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, esse iure eum velit porro libero voluptatum.",
            image: "/images/img3.png",
        },
    ];

    /** Next / Prev Controls */
    const next = () => {
        setIndex((prev) => Math.min(prev + 1, facesArray.length - 1));
    };

    const prev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    /** Animate slider on index change */
    useEffect(() => {
        const track = trackRef.current;
        const viewport = viewportRef.current;
        if (!track || !viewport) return;

        const slides = Array.from(track.children);
        const clamped = Math.max(0, Math.min(index, slides.length - 1));
        const targetOffset = slides[clamped].offsetLeft;
        const maxOffset = track.scrollWidth - viewport.clientWidth;

        const x = -Math.min(targetOffset, maxOffset);
        gsap.to(track, { x, duration: 0.6, ease: "power3.out" });

    }, [index]);

    const handleCardClick = (i) => {
        console.log(i);

        if (nameRef.current) nameRef.current.innerHTML = facesArray[i].name;
        if (designetionRef.current) designetionRef.current.innerHTML = facesArray[i].designastion;
        if (descriptionRef.current) descriptionRef.current.innerHTML = facesArray[i].description;
    };







    return (
        <section id="zebranoFace">
            <div className="wrapper w-full h-auto p-10 pb-0 bg-bgOne text-colorOne">
                {/* ==== Header ==== */}
                <div className="w-full flex justify-between items-start">
                    <div className="w-fit  shrink-0 pl-5 lg:pl-10 xl:pl-16">
                        <h1 ref={nameRef} className="text-5xl font-Montserrat font-bold text-colorOne leading-normal">{facesArray[index].name}</h1>
                        <h1 ref={designetionRef} className="text-2xl ">{facesArray[index].designastion}</h1>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col justify-between w-full h-auto">
                        <div className="flex items-center justify-end py-5">

                            <div className="flex items-end">
                                <div className="flex items-center gap-1 bg-bgOne px-2 rounded-full">
                                    <span className="text-3xl cursor-pointer" onClick={prev}>
                                        <BsArrowLeftShort />
                                    </span>
                                    <span>
                                        {index + 1} / {facesArray.length}
                                    </span>
                                    <span className="text-3xl cursor-pointer" onClick={next}>
                                        <BsArrowRightShort />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==== Slider Section ==== */}
                <div className="w-full flex">
                    {/* Description */}
                    <div className="w-1/3 pt-5 pl-5 lg:pl-10 xl:pl-16 flex flex-col justify-center gap-10">
                        <p ref={descriptionRef} className="w-full max-w-80">{facesArray[index].description}</p>
                        <BtnComponent text="Meet the full team" />
                    </div>

                    {/* Slider */}
                    <div className="w-2/3 mb-5">
                        <div ref={viewportRef} className="w-full overflow-hidden">
                            <div
                                ref={trackRef}
                                className="flex flex-nowrap gap-10 [&>div]:shrink-0 will-change-transform"
                            >
                                {facesArray.map((person, i) => (
                                    <div key={i} onClick={() => handleCardClick(i)} className="slideItem w-80 h-80 cursor-pointer">
                                        <figure>
                                            <img
                                                src={person.image}
                                                className="w-full h-full object-cover"
                                                alt={person.name}
                                            />
                                        </figure>
                                        <figcaption className="mt-5">
                                            <p className="font-semibold">{person.name}</p>
                                            <p className="text-sm text-gray-400">
                                                {person.designastion}
                                            </p>
                                        </figcaption>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default ZebranoFace;
