import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import TypeingText from '../commonComponent/TypeingText';
import { useTranslation } from "react-i18next";
// i18n.language

gsap.registerPlugin(SplitText);

const MakerBanner = () => {
  const { t, i18n } = useTranslation();
  const typedText = t('MeetTheMakers.banner.typedText', { returnObjects: true });
  const headingOneRef = useRef(null);
    const headingTwoRef = useRef(null);
    const headingThreeRef = useRef(null);
    const subheadingRef = useRef(null);
     // =====spiral effect=======
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
      // const headingOneSplit = new SplitText(headingOneRef.current, {
      //   type: 'lines,words,chars',
      //   linesClass: 'line  block',
      //   wordsClass: 'words  block',
      // });
      // const headingTwoSplit = new SplitText(headingTwoRef.current, {
      //   type: 'lines,words,chars',
      //   linesClass: 'line block',
      //   wordsClass: 'words  block',
      // });
      // const headingThreeSplit = new SplitText(headingThreeRef.current, {
      //   type: 'lines,words,chars',
      //   linesClass: 'line block',
      //   wordsClass: 'words  block',
      // });

      // let tl = gsap.timeline()
      // tl.from(headingOneSplit.chars, {
      //   rotateX: 270,
      //   duration: .5,
      //   stagger: 0.05
      // })
      //   .from(headingTwoSplit.chars, {
      //     rotateX: 270,
      //     duration: .5,
      //     stagger: 0.05
      //   })
      //   .from(headingThreeSplit.chars, {
      //     rotateX: 270,
      //     duration: .5,
      //     stagger: 0.05
      //   })

    });


    return () => ctx.revert();
  }, []);

  return (
    <section id="zebranoBanner">
        <div className="wrapper bg-myColorTwo w-full h-auto  p-5 py-20 md:p-10 md:pt-32 md:py-20 lg:pb-10 lg:pt-32 2xl:pb-20">
          <div className='w-full flex gap-5'>
            <h1 ref={headingOneRef} className='text-5xl md:text-6xl font-Montserrat font-bold lg:text-[6vw] text-colorOne'>{t("MeetTheMakers.banner.heading1")}</h1>
            <TypeingText texts= {typedText} />
          </div>

          <div className='w-full flex flex-col md:flex-row gap-10 md:gap-1'>
            <div className='w-full md:w-1/2'>
              <h1 ref={headingTwoRef} className='w-fit text-5xl md:text-6xl font-Montserrat font-bold lg:text-[6vw] text-colorOne'>{t("MeetTheMakers.banner.heading2")}</h1>
              <h1 ref={headingThreeRef} className='w-fit text-5xl md:text-6xl font-Montserrat font-bold lg:text-[6vw] text-colorOne'>{t("MeetTheMakers.banner.heading3")}</h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className='text-6xl font-bold text-colorOne leading-3 md:leading-normal '>"</p>
              <p ref={subheadingRef} className='text-base text-right text-colorOne md:text-2xl'>
                {t("MeetTheMakers.banner.desc")}
              </p>
              <p className='text-6xl font-bold text-right'>"</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MakerBanner