import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';
gsap.registerPlugin(ScrollTrigger,SplitText);

const PartnerSupport = () => {
    const partnerSupportRef = useRef(null);
    const partnerHeading = useRef(null);
    const partnerHeading2Ref = useRef(null);
    const partnerDes = useRef(null);
    const imgRef = useRef(null);
    

    
  useEffect(() => {
    const splitDesc = new SplitText(partnerDes.current, { type: "words" });
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(partnerHeading.current, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: partnerSupportRef.current,
          start: "top 80%",
          end: "+=100",
          scrub: true,
        },
      });

      // Paragraph animation
      if (partnerDes.current) {
        const splitDesc = new SplitText(partnerDes.current, { type: "words" });

        gsap.from(splitDesc.words, {
          x: 30,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: partnerSupportRef.current,
            start: "top 60%",
            end: "+=200",
            scrub: true,
          },
        });
      }
      const spltitHeading2 = new SplitText(partnerHeading2Ref.current,{
        type:"lines , words , chars",
        linesClass:"lines block overflow-hidden"
      })
      gsap.from(spltitHeading2.words, {
        y: 30,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: partnerHeading2Ref.current,
            start: "top 80%",
            end: "+=200",
            scrub: true,
          }
      })
      gsap.from(imgRef.current,{
          scale: 1.3,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            end: "+=300",
            scrub: true,
          }
      })
    }, partnerSupportRef);

    return () => {
      ctx.revert(); // Clean up animations and ScrollTriggers
    };
  }, []);

    return (
        <>
            <section ref={partnerSupportRef} id="partnerSupport" className='w-full h-full bg-[#F2F0EA]'>
                <div className="partnerSupportWrapper p-5 md:p-14 font-myFont">

                    <div className="partnerHeader w-full h-full flex pb-12">
                        <div className='w-full md:w-1/2'>
                            <h2 ref={partnerHeading} className=' text-2xl'>Partner-First Support.</h2>
                        </div>

                        <div className='w-full md:w-1/2'>
                            <p ref={partnerDes} className='text-sm mb-8'>
                                We built Casewell because trade professionals deserve a supplier who champions their success, not competes for their clients. You keep relationships, earn the margins you deserve, and focus on what you do best.
                            </p>
                            <BtnComponent text='Partner with casewell' />
                        </div>
                    </div>

                    <div className="professionalDemand border border-gray-300 border-x-0 pt-14 pb-16">
                        <div className="demandWrapper flex flex-col md:flex-row gap-14">
                            <div className='w-full md:w-1/2  flex flex-col gap-5 justify-center'>
                                <h2 ref={partnerHeading2Ref} className='text-3xl md:text-5xl w-full'>Are you a designer who truly dares to think differently?</h2>
                                <p>Do you sometimes feel your creativity is held back by what’s possible — whether it’s materials, finishes, or production limits? You’re not alone. We get it.</p>
                                <p>
                                    At Zebrano, we believe great design should never be limited by execution. That’s why we offer you unlimited possibilities to explore, experiment, and bring your boldest ideas to life — with our full support every step of the way.
                                </p>
                                <p>
                                  If you’re ready to work with a partner who values your vision as much as you do, and who’s committed to making the impossible possible, then you’ve come to the right place.
                                </p>
                            </div>
                            <div className='w-full md:w-1/2 '>
                                <div className="imageWrapper w-full h-[556px] overflow-hidden">
                                    <img ref={imgRef} src="/images/profession1.jpg" alt="profession" className='w-full h-full object-cover'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default PartnerSupport