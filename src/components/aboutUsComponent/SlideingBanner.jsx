import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const SlideingBanner = () => {
    const [index, setIndex] = useState(0);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const headingRef = useRef(null);
    const intervalRef = useRef(null);
    const controlerRef = useRef(null);

    const slides = [
        {
            img: "/images/img1.png",
            title: "Zebrano Heading 1",
            descText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci dolor eveniet aliquid doloremque vitae quasi officiis, cumque error corporis minima ducimus ratione eligendi quo accusantium consequuntur aspernatur vel saepe?",
        },
        {
            img: "/images/img2.png",
            title: "Zebrano Heading 2",
            descText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci dolor eveniet aliquid doloremque vitae quasi officiis, cumque error corporis minima ducimus ratione eligendi quo accusantium consequuntur aspernatur vel saepe?",
        },
        {
            img: "/images/img3.png",
            title: "Zebrano Heading 3",
            descText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci dolor eveniet aliquid doloremque vitae quasi officiis, cumque error corporis minima ducimus ratione eligendi quo accusantium consequuntur aspernatur vel saepe?",
        },
    ];

    useEffect(() => {
        gsap.killTweensOf(imageRef.current);
        gsap.killTweensOf(textRef.current);
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, xPercent: 0, scale: 1.05 },
            { opacity: 1, xPercent: 0, scale: 1, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
            headingRef.current,
            { opacity: 0.5, x: 50, y: 50 },
            { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out", delay: 0.1 }
        );
        gsap.fromTo(
            textRef.current,
            { opacity: 0.5, x: 50, y: 50 },
            { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out", delay: 0.1 }
        );

        

        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [index]);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };
    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    
    

    return (
        <section id="slideingBanner">
            <div className="warpper w-full">
                <div className="relative w-screen h-[calc(100vh-100px)] bg-myColorThree overflow-hidden">
                    {/* ===Background Image=== */}
                    <img
                        ref={imageRef}
                        src={slides[index].img}
                        alt="slide"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />

                    {/* ===Text Overlay====  */}
                    <div
                        className="w-1/2 lg:w-1/3 flex flex-col items-end absolute bottom-0 right-0 text-LightText"
                    >
                        <div className="w-fit p-5 bg-myColorTwo rounded-tl-xl">
                            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl text-right text-myColorOne font-semibold  ">{slides[index].title}</h2>
                        </div>
                        <div className="border p-5 bg-myColorTwo rounded-tl-xl">
                            <p ref={textRef} className="text-sm lg:text-base text-right text-myColorOne">{slides[index].descText}</p>
                        </div>
                    </div>

                    {/* ===Controls=== */}
                    <div ref={controlerRef} className="w-fit absolute bottom-0 flex gap-8 items-center p-6 text-white text-3xl">
                        <button
                            onClick={prevSlide}
                            className="bg-black/40 p-3 rounded-full"
                        >
                            <FiArrowLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-black/40 p-3 rounded-full"
                        >
                            <FiArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlideingBanner;
