import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';


gsap.registerPlugin(SplitText);

const AboutUsBanner = () => {

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
                stagger: 0.05,

            });
            gsap.from(buttonRef.current,{
                yPercent:100,
                opacity:0,
                duration:0.5,
            })


        });

        return () => ctx.revert(); // clean up
    }, []);
    return (
        <>
            <section id="aboutUsBanner">
                <div className="abooutUsBannerWrapper w-full h-screen bg-[url('/images/aboutUsBanner.png')] bg-cover bg-center flex items-end p-12">
                    <div className='w-fit h-fit flex flex-col gap-6 text-white'>
                        <h1 ref={headingRef} className='font-myFont text-5xl'>See how it works</h1>
                        <p ref={paragraphRef} className='text-xl w-72'>
                            This gallery showcases kitchens that reflect the aesthetic
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

export default AboutUsBanner