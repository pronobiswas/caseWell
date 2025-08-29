import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { Link } from 'react-router-dom';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const AccessibleBeautiful = () => {
    const beautifulRef = useRef(null);
    const rowOneRef = useRef(null);
    const rowTwoRef = useRef(null);
    const rowThreeRef = useRef(null);
    const headingOneRef = useRef(null);
    const headingtwoRef = useRef(null);
    const subheadingOneRef = useRef(null);
    const subheadingtwoRef = useRef(null);
    const paragraphOneRef = useRef(null);
    const paragraphtwoRef = useRef(null);
    const paragraphThreeRef = useRef(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            const images = beautifulRef.current.querySelectorAll('img');
            images.forEach((img) => {
                gsap.from(img, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 90%',
                        end: 'top 70%',
                        scrub: true,
                    }
                });
            });
        }, beautifulRef);

        return () => ctx.revert();
    }, [])

    // =========split text=====
    useEffect(() => {
        const ctx = gsap.context(() => {

            const headingOneSplit = new SplitText(headingOneRef.current, {
                type: 'lines, words, chars',
                linesClass: 'line overflow-hidden block',
            });
            const headingTwoSplit = new SplitText(headingtwoRef.current, {
                type: 'lines, words, chars',
                linesClass: 'line overflow-hidden block',
            });

            const paragraphOneSplit = new SplitText(paragraphOneRef.current, {
                type: 'lines, words, chars',
                linesClass: 'line overflow-hidden block',
            });
            const paragraphTwoSplit = new SplitText(paragraphtwoRef.current, {
                type: 'lines, words, chars',
                linesClass: 'line overflow-hidden block',
            });
            const paragraphThreeSplit = new SplitText(paragraphThreeRef.current, {
                type: 'lines, words, chars',
                linesClass: 'line overflow-hidden block',
            });
            const tl = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: rowOneRef.current,
                        start: 'top 85%',
                        end: '+=400',
                        scrub: true,
                    }
                }
            );
            tl.from(headingOneSplit.chars, {
                // y: 100,
                rotateX: 270,
                opacity: 0,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.05,

            });
            tl.from(headingTwoSplit.chars, {
                // y: 100,
                rotateX: 270,
                opacity: 0,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.05,

            });
            tl.from(paragraphOneSplit.chars, {
                // y: 100,
                rotateX: 270,
                opacity: 0,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.05,

            });
            tl.from(paragraphTwoSplit.chars, {
                y: 100,
                opacity: 0,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.00,
            });

            gsap.from(paragraphThreeSplit.chars, {
                rotateX: 270,
                opacity: 0,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.05,
                scrollTrigger: {
                    trigger: rowTwoRef.current,
                    start: 'top 80%',
                    end: 'top 60%',
                    scrub: true,
                }
            });


            const allTitle = rowThreeRef.current.querySelectorAll('h3');
            const allsubTitle = rowThreeRef.current.querySelectorAll('p');

            allTitle.forEach((title) => {
                const titleSplit = new SplitText(title, {
                    type: 'lines, words, chars',
                    linesClass: 'line overflow-hidden block',
                });
                gsap.from(titleSplit.chars, {
                    rotateX: 270,
                    opacity: 0,
                    duration: 2,
                    ease: 'power4.out',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: rowThreeRef.current,
                        start: 'top 25%',
                        end: '+=200',
                        scrub: true,
                    }
                });
            });

            allsubTitle.forEach((subTitle) => {
                const subTitleSplit = new SplitText(subTitle, {
                    type: 'lines, words, chars',
                    linesClass: 'line overflow-hidden block',
                });
                gsap.from(subTitleSplit.chars, {
                    rotateX: 270,
                    opacity: 0,
                    duration: 2,
                    ease: 'power4.out',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: rowThreeRef.current,
                        start: 'top 30%',
                        end: '+=200',
                        scrub: true,
                    }
                });
            });


            return () => {
                headingOneSplit.revert();
                headingTwoSplit.revert();
                paragraphOneSplit.revert();
                paragraphTwoSplit.revert();
            };
        });

        return () => ctx.revert();
    }, []);
    // ====return html content=======
    return (
        <>
            <section ref={beautifulRef} id="accessibleBeautifull">
                <div className="wrapper w-full h-fit bg-myColorOne text-LightText">
                    {/* ===row one === */}
                    <div ref={rowOneRef} className="row1">
                        <div className="w-full flex">
                            <div className=" w-1/2 flex justify-center items-center py-10 px-8">
                                <div className='w-full max-w-80'>
                                    <h1 ref={headingOneRef} className='text-4xl font-semibold '>ACCESSIBLE.</h1>
                                    <h1 ref={headingtwoRef} className='text-4xl font-semibold mb-8 '>BEAUTIFUL.</h1>
                                    <p ref={paragraphOneRef}>I've always felt that good design shouldn't hide behind velvet ropes. At Zebrano, I want everyone to enjoy the same
                                        beautiful doors and details
                                        usually seen only in luxury hotels - right at home."
                                    </p >
                                    <p ref={paragraphtwoRef} className='pt-5'><b>Mathijs</b> - Founder and designer, Zebrano Studio</p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src="/images/img3.png" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    {/* ===row two=== */}
                    <div ref={rowTwoRef} className="row2 w-full h-fit min-h-[500px] flex">
                        <div className="w-1/2 ">
                            <img src="/images/img3.png" alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-1/2 h-full">
                            <div className="content w-full h-full flex justify-center items-center py-16">
                                <div className='w-full h-full  max-w-96 flex flex-col gap-20'>
                                    <p ref={paragraphThreeRef} className='text-xl text-center'>We like to keep things close to home. Our doors are made right here in the Netherlands, shaped by makers who know their wood almost as well as their morning coffee. It's a mix of tradition, precision, and a little Dutch stubbornness that refuses to settle for "good enough." The result? Craft that feels local, but looks like it belongs anywhere in the world.</p>
                                    <div className='flex justify-center'>
                                        <BtnComponent text='Discover materials' />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ===row three=== */}
                    <div ref={rowThreeRef} className='row3 bg-myColorTwo pt-12 px-5 pb-10 text-myColorOne'>
                        <div className="wrapper w-full flex gap-5">
                            {/* ====col one=== */}
                            <div className="w-1/2">
                                <div>
                                    <div className='w-full h-[530px] overflow-hidden'>
                                        <img src="/images/img4.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full flex flex-col items-center text-center p-5'>
                                        <h3 ref={subheadingOneRef} className='text-3xl'>Are you a designer?</h3>
                                        <p className='mb-8'>Our team is ready to help you discover all the possibilities </p>
                                        <Link to="/products/material">
                                            <BtnComponent text='Discover materials' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* ====col two=== */}
                            <div className="w-1/2">
                                <div>
                                    <div className="w-full h-[530px] overflow-hidden">
                                        <img src="/images/img4.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full flex flex-col items-center text-center p-5'>
                                        <h3 ref={subheadingtwoRef} className='text-3xl'>Need advice?</h3>
                                        <p className='mb-8'>Our team is ready to help you discover all the possibilities </p>
                                        <Link to="/contact">
                                            <BtnComponent text='Get in contact' />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccessibleBeautiful