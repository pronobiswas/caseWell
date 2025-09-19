import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger , SplitText);

const ConsciousNCraftTimeline = () => {
  const { t, i18n } = useTranslation();
    const timelineRef = useRef(null);
      const bottomText = useRef(null);
        useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      const cards = timelineRef.current.querySelectorAll('.timeleineTxtCol');

      cards.forEach((card) => {
        const cardHeight = card.offsetHeight;
        gsap.to(card, {
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80',
            end: '+=220',
            scrub: true,
            pin: true,
            pinSpacing: 0,
          },
        }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!bottomText.current) return;

    const ctx = gsap.context(() => {
      const paragraph = bottomText.current.querySelector('p');
      const splitParagraph = new SplitText(paragraph, {
                type: 'lines , words , chars',
                linesClass: 'line block overflow-hidden'
            })

      
        gsap.from(splitParagraph.words, {
          y:50,
          duration:1,
          stagger:1,

          scrollTrigger: {
            trigger: paragraph,
            start: 'top 95%',
            end: '+=200',
            scrub: true,
          },
        })
        
    }, timelineRef);

    return () => ctx.revert();
  }, [i18n.language]);
  return (
    <>
    <section ref={timelineRef} id="aboutTimeline" className='bg-bgOne'>
        <div className="timelineWrapper relative w-full h-full p-5 flex flex-col gap-5 lg:gap-20 2xl:gap-5">
          {/* ====timeline progress====== */}
          <div className="timelineProgress w-[1px] h-full min-h-screen bg-violet-200 absolute top-0 left-8"></div>
          {/* =========timeline row===1=== */}
          <div className="timelineRow flex flex-col lg:flex-row">
            <div className="timeleineTxtCol w-full lg:w-1/2 2xl:w-2/3  flex gap-5 mb-[200px] lg:mb-0">
              <div className="indicator w-fit h-fit border border-violet-200 rounded-full py-5 px-1 bg-white z-10">01</div>
              <div className='textContiner w-full flex justify-center'>
                <div className=' textbox w-full lg:w-3/4'>
                  <h4 className='text-2xl  font-semibold'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row1.title")}
                  </h4>
                  <p className='mt-5'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row1.desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="timeleineImgCol w-full lg:w-1/2 2xl:w-1/3 pl-10 lg:p-0">
              <div className="imageWrapper">
                <img src="/images/timelineImg1.png" alt="images" className='w-full h-full object-cover aspect-[3/2] '/>
              </div>
            </div>
          </div>
          {/* =========timeline row===2=== */}
          <div className="timelineRow flex flex-col lg:flex-row">

            <div className="timeleineTxtCol w-full lg:w-1/2 2xl:w-2/3  flex gap-5 mb-[200px] lg:mb-0">
              <div className="indicator w-fit h-fit border border-violet-200 rounded-full py-5 px-1 bg-white z-10">02</div>
              <div className='textContiner w-full flex justify-center'>
                <div className=' textbox w-full lg:w-3/4'>
                  <h4 className='text-2xl  font-semibold'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row2.title")}
                  </h4>
                  <p className='mt-5'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row2.desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="timeleineImgCol w-full lg:w-1/2 2xl:w-1/3 pl-10 lg:p-0">
              <div className="imageWrapper">
                <img src="/images/timelineImg2.png" alt="images" className='w-full h-full object-cover aspect-[3/2] '/>
              </div>
            </div>

          </div>
          {/* =========timeline row===3=== */}
          <div className="timelineRow flex flex-col lg:flex-row">

            <div className="timeleineTxtCol w-full lg:w-1/2 2xl:w-2/3  flex gap-5 mb-[200px] lg:mb-0">
              <div className="indicator w-fit h-fit border border-violet-200 rounded-full py-5 px-1 bg-white z-10">03</div>
              <div className='textContiner w-full flex justify-center'>
                <div className=' textbox w-full lg:w-3/4'>
                  <h4 className='text-2xl  font-semibold'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row3.title")}
                  </h4>
                  <p className='mt-5'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row3.desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="timeleineImgCol w-full lg:w-1/2 2xl:w-1/3 pl-10 lg:p-0">
              <div className="imageWrapper">
                <img src="/images/timelineImg3.png" alt="images" className='w-full h-full object-cover aspect-[3/2] '/>
              </div>
            </div>

          </div>
          {/* =========timeline row===4=== */}
          <div className="timelineRow flex flex-col lg:flex-row">

            <div className="timeleineTxtCol w-full lg:w-1/2 2xl:w-2/3  flex gap-5 mb-[200px] lg:mb-0">
              <div className="indicator w-fit h-fit border border-violet-200 rounded-full py-5 px-1 bg-white z-10">04</div>
              <div className='textContiner w-full flex justify-center'>
                <div className=' textbox w-full lg:w-3/4'>
                  <h4 className='text-2xl  font-semibold'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row4.title")}
                  </h4>
                  <p className='mt-5'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row4.desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="timeleineImgCol w-full lg:w-1/2 2xl:w-1/3 pl-10 lg:p-0">
              <div className="imageWrapper">
                <img src="/images/timelineImg4.png" alt="images" className='w-full h-full object-cover aspect-[3/2] '/>
              </div>
            </div>

          </div>
          {/* =========timeline row===5=== */}
          <div className="timelineRow flex flex-col lg:flex-row">

            <div className="timeleineTxtCol w-full lg:w-1/2 2xl:w-2/3  flex gap-5 mb-[200px] lg:mb-0">
              <div className="indicator w-fit h-fit border border-violet-200 rounded-full py-5 px-1 bg-white z-10">05</div>
              <div className='textContiner w-full flex justify-center'>
                <div className=' textbox w-full lg:w-3/4'>
                  <h4 className='text-2xl  font-semibold'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row5.title")}
                  </h4>
                  <p className='mt-5'>
                    {t("ConsciousNcrafts.ConsciousNCraftTimeline.row5.desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="timeleineImgCol w-full lg:w-1/2 2xl:w-1/3 pl-10 lg:p-0">
              <div className="imageWrapper">
                <img src="/images/timelineImg5.png" alt="images" className='w-full h-full object-cover aspect-[3/2] '/>
              </div>
            </div>

          </div>
          
          

        </div>
        <div key={i18n.language} ref={bottomText} className='w-full h-full  p-5 md:p-12 lg:p-20'>
          <p className='text-center text-xl text-stone-600 font-Poppins md:text-3xl lg:text-4xl xl:text-5xl'>{t("ConsciousNcrafts.additionalText")}</p>
        </div>
        <div className='w-full flex justify-center gap-10 py-8'>
          <BtnComponent text={t("ConsciousNcrafts.btnText1")} bg="bgTwo"/>
          <BtnComponent text={t("ConsciousNcrafts.btnText2")} bg="bgTwo"/>
        </div>
      </section>
    </>
  )
}

export default ConsciousNCraftTimeline