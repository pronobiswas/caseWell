import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
// i18n.language

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const AccessibleBeautiful = () => {
    const { t, i18n } = useTranslation();
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
    }, [i18n.language])

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
                    trigger: paragraphThreeRef.current,
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
    }, [i18n.language]);
    // ====return html content=======
    return (
        <>
            <section key={i18n.language} ref={beautifulRef} id="accessibleBeautifull">
                <div className="wrapper w-full h-fit bg-myColorOne text-LightText">
                    {/* ===row one === */}
                    <div ref={rowOneRef} className="row1">
                        <div className="w-full flex flex-col md:flex-row">
                            <div className=" w-full md:w-1/2 flex justify-center items-center py-10 px-8">
                                <div className='w-full max-w-80'>
                                    <h1 ref={headingOneRef} className='text-4xl font-semibold '>
                                        {t("MeetTheMakers.AccessibleBeautiful.row1.title1")}
                                    </h1>
                                    <h1 ref={headingtwoRef} className='text-4xl font-semibold mb-8 '>{t("MeetTheMakers.AccessibleBeautiful.row1.title2")}</h1>
                                    <p ref={paragraphOneRef}>
                                        {t("MeetTheMakers.AccessibleBeautiful.row1.desc")}
                                    </p >
                                    <p ref={paragraphtwoRef} className='pt-5'>
                                        <b>{t("MeetTheMakers.AccessibleBeautiful.row1.name")}</b>
                                        {t("MeetTheMakers.AccessibleBeautiful.row1.designetion")}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img src="/images/img3.png" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    {/* ===row two=== */}
                    <div ref={rowTwoRef} className="row2 w-full h-fit min-h-[500px] flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <img src="/images/img3.png" alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-full md:w-1/2 h-full order-1 md:order-2">
                            <div className="content w-full h-full flex justify-center items-center py-16">
                                <div className='w-full h-full  max-w-md flex flex-col gap-14'>
                                    <h3 className='text-4xl font-semibold text-center'>{t("MeetTheMakers.AccessibleBeautiful.row2.title")}</h3>
                                    <p ref={paragraphThreeRef} className=' text-center'> 
                                        {t("MeetTheMakers.AccessibleBeautiful.row2.desc")}
                                        </p>
                                    <div className='flex justify-center'>
                                        <BtnComponent text={t("MeetTheMakers.AccessibleBeautiful.row2.btnText")} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===row three=== */}
                    <div ref={rowThreeRef} className='row3 bg-myColorTwo pt-12 px-1 md:px-5 pb-10 text-myColorOne'>
                        <div className="wrapper w-full flex gap-1 md:gap-5">
                            {/* ====col one=== */}
                            <div className="w-1/2">
                                <div>
                                    <div className='w-full h-[530px] overflow-hidden'>
                                        <img src="/images/img4.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full flex flex-col items-center text-center p-5'>
                                        <h3 ref={subheadingOneRef} className='text-2xl md:text-3xl'>
                                            {t("MeetTheMakers.AccessibleBeautiful.row3.title1")}
                                        </h3>
                                        <p className='mb-8 mt-2 text-sm md:text-base'>
                                            {t("MeetTheMakers.AccessibleBeautiful.row3.desc1")}
                                        </p>
                                        <Link to="/products/material">
                                            <BtnComponent text={t("MeetTheMakers.AccessibleBeautiful.row3.btnText1")} />
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
                                        <h3 ref={subheadingtwoRef} className='text-2xl md:text-3xl'>
                                            {t("MeetTheMakers.AccessibleBeautiful.row3.title2")}
                                        </h3>
                                        <p className='mb-8 mt-2 text-sm md:text-base'>
                                            {t("MeetTheMakers.AccessibleBeautiful.row3.desc2")}
                                        </p>
                                        <Link to="/contact">
                                            <BtnComponent text={t("MeetTheMakers.AccessibleBeautiful.row3.btnText2")} />
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