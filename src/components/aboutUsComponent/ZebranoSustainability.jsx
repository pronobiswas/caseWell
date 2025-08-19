import React, { useEffect, useRef } from 'react'
import BtnComponent from '../homeComponents/utils/BtnComponent'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ZebranoSustainability = () => {
    const headingOneRef = useRef(null);
        const ZebranoSustainabilityRef = useRef(null);
        const headingTwoRef = useRef(null);
        const pragraphRef = useRef(null);
        const imgRef = useRef(null);
        useEffect(() => {
            const ctx = gsap.context(() => {
    
                const paragraphSplit = new SplitText(pragraphRef.current, {
                    type: 'lines,words,chars',
                    linesClass: 'line overflow-hidden block',
                    wordsClass: 'words overflow-hidden block',
                });
                const headingOneSplit = new SplitText(headingOneRef.current, {
                    type: 'lines,words,chars',
                    linesClass: 'line  block',
                    wordsClass: 'words  block',
                });
                const headingTwoSplit = new SplitText(headingTwoRef.current, {
                    type: 'lines,chars',
                    linesClass: 'line block',
                });
    
                gsap.from(imgRef.current,{
                    opacity:0.6,
                    scale:1.3,
                    scrollTrigger: {
                        trigger: ZebranoSustainabilityRef.current,
                        start: "top 70%",
                        end: "+=200",
                        scrub: true,
                    }
                })
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ZebranoSustainabilityRef.current,
                        start: "top 70%",
                        end: "+=400",
                        scrub: true,
                    }
                })
                tl.from(headingOneSplit.chars, {
                    rotateX: 360,
                    duration: 5,
                    stagger: 0.05
                })
                    .from(headingTwoSplit.chars, {
                        rotateX: 360,
                        duration: 10,
                        stagger: 0.1
                    })
                    .from(paragraphSplit.chars, {
                        rotateX: 270,
                        duration: 2,
                        ease: 'power4.out',
                        stagger: 0.05,
                    });
            });
            return () => ctx.revert();
        }, []);
  return (
    <>
    <section ref={ZebranoSustainabilityRef} id="ZebranoSustainability">
        <div className="wrapper w-full flex " >
            <div className="w-1/2 bg-bgOne flex items-center">
            <div className='w-full h-auto p-5 md:p-10 lg:p-14'>
                <p ref={headingOneRef} className='text-xl mb-2'>Sustainability</p>
                <h2 ref={headingTwoRef} className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 '>Craftsmanship that cares</h2>
                <p ref={pragraphRef} className='tex-base mb-8'>We choose sustainable materials, work with responsible suppliers, and build pieces meant to last for decades. Because great design should never come at the planet's expense</p>
                <BtnComponent text="See More" />
            </div>
            </div>
            <div className="w-1/2">
            <div className="imgBox w-full h-auto overflow-hidden">
                <img ref={imgRef} src="/images/img1.png" alt="picture" />
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ZebranoSustainability