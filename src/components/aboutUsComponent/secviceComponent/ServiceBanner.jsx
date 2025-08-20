import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const ServiceBanner = () => {
    const headingRef = useRef(null);
    const subHeadingRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {


            const headingSplit = new SplitText(headingRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line overflow-hidden block',
            });
            const subheadingSplit = new SplitText(subHeadingRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line overflow-hidden block',
            });
            gsap.from(headingSplit.chars, {
                yPercent: 100,
                scale:0.1,
                duration: 1.5,
                ease: 'power4.out',
                stagger: {
                    each: 0.05,
                    from: 'center',
                    grid: 'auto',
                    ease: 'steps(120)',
                }
            });
            gsap.from(subheadingSplit.chars, {
                rotateX: 270,
                opacity: 0,
                duration: 1.5,
                ease: 'power4.out',
                stagger: {
                    each: 0.01,
                    from: 'center',
                    grid: 'auto',
                    ease: 'steps(120)',
                }
            });


        });


        return () => ctx.revert();
    }, []);

    return (
        <>
            <section id="serviceBanner">
                <div className="wrapper w-full h-fit pt-48 pb-20 px-5 md:px-10 lg:px-14 flex flex-col items-center gap-10 bg-bgTwo">

                    <h1 ref={headingRef} className='text-[6vw] text-center text-bold font-serif'>Service & Terms</h1>
                    <p ref={subHeadingRef} className='text-xl text-center w-full max-w-4xl'>
                        Real hands. Real sawdust. Unreal results.
                        From first sketch to final fit, we design, prototype, and build under one
                        ro0f — 5o every millimetre lines up and every door feels effortlessly right.
                    </p>
                </div>
            </section>

        </>
    )
}

export default ServiceBanner