import React, { useEffect, useRef } from 'react'
import BtnComponent from '../homeComponents/utils/BtnComponent'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ZebranoSustainability = () => {
    const { t, i18n } = useTranslation();
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
                        start: "top 80%",
                        end: "+=200",
                        scrub: true,
                    }
                })
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ZebranoSustainabilityRef.current,
                        start: "top 85%",
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
        }, [i18n.language]);
  return (
    <>
    <section key={i18n.language} ref={ZebranoSustainabilityRef} id="ZebranoSustainability">
        <div className="wrapper w-full flex flex-col md:flex-row bg-myColorOne textLightText py-5 md:pr-5" >
            <div className="w-full md:w-1/2  flex items-center">
            <div className='w-full h-auto p-5 md:p-10 lg:p-14'>
                <p ref={headingOneRef} className='text-xl mb-2 font-Poppins text-LightText'>
                    {t("Zebrano.Sustainability.title")}
                </p>
                <h2 ref={headingTwoRef} className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-LightText font-Montserrat'>{t("Zebrano.Sustainability.heading")}</h2>
                <p ref={pragraphRef} className='text-base mb-8 text-LightText'>
                    {t("Zebrano.Sustainability.desc")}
                </p>
                <BtnComponent text={t("Zebrano.Sustainability.btnText")} />
            </div>
            </div>
            <div className="w-full md:w-1/2">
            <div className="imgBox w-full h-[500px] overflow-hidden">
                <img ref={imgRef} src="/images/img1.png" alt="picture" className='w-full h-full object-fill' />
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ZebranoSustainability