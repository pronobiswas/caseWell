import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
    
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const ZebranoBanner = (
    {
        headingOne="Making luxury Interiors",
        headingTwo="Accessible to ",
        headingThree="EveryOne",
        zebranoText = "At Zebrano Studio,we believe great design should be within everyone's reach. From bespoke doors to fully itegrade wall features, our mission is to bring luxury craftsmanship and architectural beauty into every type of home - from city apartment to countryside villas."

    }
) => {
    const headingOneRef = useRef(null);
    const headingTwoRef = useRef(null);
    const headingThreeRef = useRef(null);
    const subheadingRef = useRef(null);
        useEffect(() => {
            const ctx = gsap.context(() => {
              const subheadingSplit = new SplitText(subheadingRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line overflow-hidden block',
                wordsClass: 'words overflow-hidden block',
              });
              gsap.from(subheadingSplit.words, {
                y: 100,
                opacity: 0,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.05,
              });
               const headingOneSplit = new SplitText(headingOneRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line  block',
                wordsClass: 'words  block',
              });
              const headingTwoSplit = new SplitText(headingTwoRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line block',
                wordsClass: 'words  block',
              });
              const headingThreeSplit = new SplitText(headingThreeRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line block',
                wordsClass: 'words  block',
              });

              let tl= gsap.timeline()
              tl.from(headingOneSplit.chars,{
                rotateX:270,
                duration:.5,
                stagger:0.05
              })
              .from(headingTwoSplit.chars,{
                rotateX:270,
                duration:.5,
                stagger:0.05
              })
              .from(headingThreeSplit.chars,{
                rotateX:270,
                duration:.5,
                stagger:0.05
              })
        
            });
        
        
            return () => ctx.revert();
          }, []);
  return (
    <>
    <section id="zebranoBanner">
        <div className="wrapper w-full h-auto p-5 py-20 md:p-10 md:pt-32 md:py-20 lg:pb-10 lg:pt-32 xl:pt-40 2xl:pb-20">
            <h1 ref={headingOneRef} className='text-5xl md:text-6xl font-Montserrat font-bold lg:text-[6vw] text-colorOne'>{headingOne}</h1>
            <div className='w-full flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                <h1 ref={headingTwoRef} className='text-5xl md:text-6xl font-Montserrat font-bold lg:text-[6vw] text-colorOne'>{headingTwo}</h1>
                <h1 ref={headingThreeRef} className='text-5xl md:text-6xl font-Montserrat font-bold lg:text-[6vw] text-colorOne'>{headingThree}</h1>
                </div>
                <div className="w-full md:w-1/2">
                <p className='text-6xl font-bold text-colorOne '>"</p>
                <p ref={subheadingRef} className='text-base text-right text-colorOne md:text-2xl'> {zebranoText} </p>
                <p className='text-6xl font-bold text-right'>"</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ZebranoBanner