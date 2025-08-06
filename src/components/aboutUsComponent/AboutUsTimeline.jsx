import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';
gsap.registerPlugin(ScrollTrigger , SplitText);

const AboutUsTimeline = () => {
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
            start: 'top top',
            end: '+=200',
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
                  <h4 className='text-2xl font-myFont font-semibold'>The Asian Spark</h4>
                  <p className='mt-5'>Imagine this: two brothers, Mathijs and Robbert (that's us!), traveling through beautiful Southeast Asia. Amidst the bustling markets and serene temples, something caught our eye: everywhere we looked, we saw the most amazing handcrafted wooden items. From small figurines to impressive furniture – the attention to detail and the natural beauty of the wood were truly captivating. It was like a lightbulb went off: "Wow, this is it! We have to do something with this!"</p>
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
                  <h4 className='text-2xl font-myFont font-semibold'>From Bookmarks to Beach Paddles (with a Wooden Twist)</h4>
                  <p className='mt-5'>We've always been creative and handy, even as little kids. So, once we were back home, we immediately felt the urge to start working with wood ourselves. We started small, with super cool exclusive wooden bookmarks and unique tapas boards. But soon our projects became more ambitious: how about handcrafted beach paddles made from special wood types like the striped Zebrano, the deep red Purpleheart, or the exotic Palm wood? Each piece of wood had its own story and unique grain, and we loved making them speak.</p>
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
                  <h4 className='text-2xl font-myFont font-semibold'>Our Annual Wood Pilgrimage and The Big Door of 2020</h4>
                  <p className='mt-5'>A visit to the fine wood trade show wasn't just an errand for us, but an annual pilgrimage! A place where we could wander among the most beautiful planks and find inspiration. And then came the moment: new doors were needed. Buy them? No way! We could do that much better ourselves, right? And so it happened: in 2020, our very first self-made door saw the light of day. Crafted from Zebrano, our absolute favorite wood type. That distinctive grain and beautiful aesthetic... we were instantly sold!</p>
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
                  <h4 className='text-2xl font-myFont font-semibold'>And Then There Was... Zebrano Studio!</h4>
                  <p className='mt-5'>That first Zebrano door was more than just a door; it was a statement. Proof of our love for the craft and our vision. And the reactions? They were overwhelming! People were just as enthusiastic as we were about the unique beauty and quality. It was clear: we had to do more with this. And so, very naturally, our company was born and named after that special wood that inspired us so much: Zebrano Studio.</p>
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
                  <h4 className='text-2xl font-myFont font-semibold'>Luxury Doors? Just for Everyone!</h4>
                  <p className='mt-5'>Our dream? Simple: to make that luxury and exclusivity, which you normally only encounter in chic hotels, top restaurants, or those amazing villas designed by top architects, accessible to everyone. We believe your home deserves that same grandeur and uniqueness, without you having to spend a fortune on an architect. At Zebrano Studio, we do things a little differently from the rest, and we bring that unparalleled quality and aesthetic directly to your doorstep.</p>
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

export default AboutUsTimeline