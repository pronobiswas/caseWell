import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const CommonMetarialNDesign = (
    {
        title1="Material Possibilities",
        heading1="Crafted Your Way",
        desc1="From deep walnut to airy glass panels or even stone inlays, our high-end pivot doors can carry just about any look you can imagine. Each one is built with precision to match your style, material preferences, and architectural vision.",
        imageUrl1="/images/pivotdoors1.jpg",
        title2="Hardware & Details",
        heading2="Invisible Precision",
        desc2="We hide the clever stuff — concealed pivot hinges, flush handles, and soft-closing systems — so all you see is clean, uninterrupted design in every custom pivot door",
        imageUrl2="/images/pivotdoors1.jpg",
        title3="Integration Options",
        heading3="From Door to Design Feature",
        desc3="Pair your pivot door with matching wall panels, custom frames, or integrated shelving for seamless architectural integration throughout your interior.",
        imageUrl3="/images/pivotdoors1.jpg",

    }
) => {
    const secRef = useRef(null);
        const imgRef = useRef(null);
        const headingRef = useRef(null);
        const descRef = useRef(null);
    
        useEffect(() => {
            if (!secRef.current) return;
            const headings = secRef.current.querySelectorAll('.pivotDescHeading');
            const pivotDesc = secRef.current.querySelectorAll('.pivotDesc');
            const titles = secRef.current.querySelectorAll('.title');
            const pivotImg = secRef.current.querySelectorAll('.pivotImg');
    
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
    
                pivotImg.forEach((img) => {
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

            <div className="wrapper w-full h-[560px] bg-colorOne text-white flex gap-10 p-5">
                <div className="w-1/2 h-full">
                    <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
                        <span className='title'>{title1}</span>
                        <h3 className="pivotDescHeading text-4xl font-Montserrat">{heading1}</h3>
                        <p className='pivotDesc'>
                            {desc1}
                        </p>
                        <BtnComponent text="View Materials" />
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="w-full h-full relative overflow-hidden">
                        <img
                            src={imageUrl1}
                            alt="sample image"
                            className="pivotImg w-full h-full object-fill"
                        />
                    </div>
                </div>
            </div>

            <div className="wrapper w-full h-[560px] bg-colorOne text-white flex gap-10 p-5">
                <div className="w-1/2 h-full">
                    <div className="w-full h-full relative overflow-hidden">
                        <img
                            src={imageUrl2}
                            alt="sample image"
                            className="pivotImg w-full h-full object-fill"
                        />
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
                        <span className='title'>{title2}</span>
                        <h3 className="pivotDescHeading text-4xl font-Montserrat">{heading2}</h3>
                        <p className='pivotDesc'>
                            {desc2}
                        </p>
                        <BtnComponent text="See Hardware Options" />
                    </div>
                </div>
            </div>

            <div className="wrapper w-full h-[560px] bg-colorOne text-white flex gap-10 p-5">
                <div className="w-1/2 h-full">
                    <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
                        <span className='title' >{title3}</span>
                        <h3 className="pivotDescHeading text-4xl font-Montserrat">{heading3}</h3>
                        <p className='pivotDesc'>
                            {desc3}
                        </p>
                        <Link to="/contact" >
                            <BtnComponent text="View Materials" />
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="w-full h-full relative overflow-hidden">
                        {/* ✅ ref added here */}
                        <img
                            src={imageUrl3}
                            alt="sample image"
                            className="pivotImg w-full h-full object-fill"
                        />
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default CommonMetarialNDesign