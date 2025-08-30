import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';
gsap.registerPlugin(ScrollTrigger , SplitText);

const ConsciousNCraftTimeline = () => {
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
  }, []);
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
                  <h4 className='text-2xl  font-semibold'> Working with Nature, Not Against It</h4>
                  <p className='mt-5'>We believe that working with natural materials comes with a responsibility. Wood is not just a resource to us — it's a living story of time, climate, and place. That’s why we only work with suppliers who share our values: FSC-certified wood, sustainably managed forests, and a focus on regeneration over depletion.</p>
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
                  <h4 className='text-2xl  font-semibold'>2. Respect for the Material</h4>
                  <p className='mt-5'>Each piece of wood is unique — its grain, its texture, its imperfections. We design around that individuality, not in spite of it. Instead of forcing uniformity, we let the material speak. This reduces waste and honors the beauty of natural variation. We don’t over-process. We don’t over-paint. We bring out what’s already there.</p>
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
                  <h4 className='text-2xl  font-semibold'>3. Design with Longevity in Mind</h4>
                  <p className='mt-5'>Fast furniture and temporary design aren’t part of our philosophy. We create doors meant to last a lifetime — not just in function, but in relevance. Timeless design and high-quality craftsmanship mean fewer replacements, fewer resources wasted, and a lighter impact on the planet over time.</p>
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
                  <h4 className='text-2xl  font-semibold'>Craftsmanship as a Sustainable Act</h4>
                  <p className='mt-5'>Sustainability isn’t only in the materials — it’s in the way we make. By producing locally, reducing transport footprints, and building in small series instead of mass production, we stay close to our process and in control of our impact. Every decision we make is weighed not just for efficiency, but for ethics.</p>
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
                  <h4 className='text-2xl  font-semibold'>Pride in Every Detail</h4>
                  <p className='mt-5'>We’re proud of what we make — not just because it looks good, but because it feels good to stand behind something honest. A door is not just a functional object. It’s the first touchpoint of a home. And we believe that when it’s made with care, from a material as noble as wood, it deserves that extra bit of reverence.</p>
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
        <div ref={bottomText} className='w-full md:w-3/4 h-full  p-5 md:p-12 lg:p-20'>
          <p className='text-xl text-stone-600 font-bold md:text-3xl lg:text-4xl xl:text-5xl'>At Zebrano Studio, we don't just make standard doors; we create true works of art that tell a story and last a lifetime. Ready to realize your dream door? We'd love to help you!</p>
        </div>
        <div className='w-full flex justify-center gap-10 py-8'>
          <BtnComponent text="Collection" bg="bgTwo"/>
          <BtnComponent text="Configure your own" bg="bgTwo"/>
        </div>
      </section>
    </>
  )
}

export default ConsciousNCraftTimeline