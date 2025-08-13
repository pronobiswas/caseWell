import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';

import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const SlideMeterialAndDesign = () => {
    const secRef = useRef(null);

    useEffect(() => {
        if (!secRef.current) return;
        const headings = secRef.current.querySelectorAll('.slideDescHeading');
        const pivotDesc = secRef.current.querySelectorAll('.pivotDesc');
        const titles = secRef.current.querySelectorAll('.slideTitle');
        const slideDoorImage = secRef.current.querySelectorAll('.slideDoorImage');

        const ctx = gsap.context(() => {

            headings.forEach((heading) => {

                const headingWord = new SplitText(heading, {
                    type: 'lines,words',
                    linesClass: 'line overflow-hidden block',
                    wordsClass: 'words overflow-hidden block',
                });
                gsap.from(headingWord.words, {
                    y: 103,
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 95%",
                        end: "top 60%",
                        scrub: true,
                    },
                });
            });

            pivotDesc.forEach((heading) => {
                const headingWord = new SplitText(heading, {
                    type: 'lines,words',
                    linesClass: 'line overflow-hidden block',
                    wordsClass: 'words overflow-hidden block',
                });
                gsap.from(headingWord.words, {
                    y: 103,
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 95%",
                        end: "top 60%",
                        scrub: true,
                    },
                });
            });
            titles.forEach((title) => {
                const titleSplit = new SplitText(title, {
                    type: 'lines,words',
                    linesClass: 'line overflow-hidden block',
                    wordsClass: 'words overflow-hidden block',
                });
                gsap.from(titleSplit.words, {
                    y: 103,
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 95%",
                        end: "top 60%",
                        scrub: true,
                    },
                });
            });

            slideDoorImage.forEach((img) => {
                gsap.from(img, {
                    scale: 1.3,
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 90%",
                        end: "top 40%",
                        scrub: true,
                    },
                });
            });

        }, secRef);
        return () => ctx.revert();
    }, []);
    return (
        <>

            <section ref={secRef}>

                <div className="wrapper w-full h-[560px] bg-colorOne text-white font-geist flex gap-10 p-5">
                    <div className="w-1/2 h-full">
                        <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
                            <span className='slideTitle'>Material Variety</span>
                            <h3 className="slideDescHeading text-4xl font-Montserrat"> Your Style, Your Door</h3>
                            <p className='pivotDesc'>
                                Go transparent, bold, or natural — from frosted glass to warm oak, our luxury sliding doors are a blank canvas for your vision.
                            </p>
                            <BtnComponent text="View Materials" />
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <div className="w-full h-full relative overflow-hidden">
                            <img
                                src="/images/slideTransparent.jpg"
                                alt="sample image"
                                className="slideDoorImage w-full h-full object-fill"
                            />
                        </div>
                    </div>
                </div>

                <div className="wrapper w-full h-[560px] bg-colorOne text-white flex gap-10 p-5">
                    <div className="w-1/2 h-full">
                        <div className="w-full h-full relative overflow-hidden">
                            <img
                                src="/images/slideWodden.jpg"
                                alt="sample image"
                                className="slideDoorImage w-full h-full object-fill"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
                            <span className='slideTitle' >Hardware Precision</span>
                            <h3 className="slideDescHeading text-4xl font-Montserrat">Smooth & Silent</h3>
                            <p className='pivotDesc'>
                                Premium tracks and concealed runners ensure your sliding door moves effortlessly and quietly, with lasting durability. 
                            </p>
                            <BtnComponent text="See Hardware Options" />
                        </div>
                    </div>
                </div>

                <div className="wrapper w-full h-[560px] bg-colorOne text-white flex gap-10 p-5">
                    <div className="w-1/2 h-full">
                        <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
                            <span className='slideTitle' >Design Integration</span>
                            <h3 className="slideDescHeading text-4xl font-Montserrat">Flow Between Spaces</h3>
                            <p className='pivotDesc'>
                               Combine sliding doors with wall panels, frames, or matching finishes for a fully integrated interior design concept. 
                            </p>
                            <Link to="/contact" >
                                <BtnComponent text="Get in Contact" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <div className="w-full h-full relative overflow-hidden">
                            <img
                                src="/images/pivotdoors1.jpg"
                                alt="sample image"
                                className="slideDoorImage w-full h-full object-fill"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SlideMeterialAndDesign