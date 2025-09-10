import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';
gsap.registerPlugin(SplitText);


const OurStoryBanner = () => {
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const splitHeading = new SplitText(headingRef.current, {
                type: 'lines , words , chars',
                linesClass: 'line block overflow-hidden'
            })
            const splitParagraph = new SplitText(paragraphRef.current, {
                type: 'lines , words , chars',
                linesClass: 'line block overflow-hidden'
            })
            gsap.from(splitHeading.words, {
                yPercent: 100,
                duration: 0.5,
                stagger: 0.1,

            });
            gsap.from(splitParagraph.words, {
                yPercent: 100,
                duration: 0.5,
                stagger: 0.01,

            });
            gsap.from(buttonRef.current, {
                yPercent: 100,
                opacity: 0,
                delay: 0.8,
                duration: 0.5,
            })


        });

        return () => ctx.revert();
    }, []);
    return (
        <>
            <section id="ConsciousNcraftsBanner">
                <div className="Wrapper w-full h-screen bg-[url('/images/aboutUsBanner.png')] bg-cover bg-center flex items-end p-5 md:p-12">
                    <div className='w-full max-w-[700px] h-fit flex flex-col gap-6 text-LightText  '>
                        <h1 ref={headingRef} className='font-Montserrat font-semibold text-2xl md:text-5xl'>Zebrano Studio - Exclusivity for Everyone (and a little different from the rest!)</h1>
                        <p ref={paragraphRef} className='text-sm md:text-xl '>
                            Hey there! Welcome to Zebrano Studio. Our story is one of dreams, a good dose of passion for wood, and the conviction that luxury doors aren't just for architects and millionaires. We believe everyone deserves a piece of that exclusivity in their home. Curious how we went from a wild idea to Zebrano Studio? Read on, in 5 lighthearted steps!
                        </p>
                        <div ref={buttonRef} className='w-fit'>
                            <BtnComponent text='Get Started' />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStoryBanner