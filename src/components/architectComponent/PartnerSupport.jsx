import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from '../homeComponents/utils/BtnComponent';
gsap.registerPlugin(ScrollTrigger,SplitText);

const PartnerSupport = () => {
    const partnerSupportRef = React.useRef(null);
    const partnerHeading = React.useRef(null);
    const partnerDes = React.useRef(null);
    

    
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
    }, partnerSupportRef);

    return () => {
      ctx.revert(); // Clean up animations and ScrollTriggers
    };
  }, []);

    return (
        <>
            <section ref={partnerSupportRef} id="partnerSupport" className='w-full h-full bg-[#F2F0EA]'>
                <div className="partnerSupportWrapper p-14 font-myFont">

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
                            <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                                <h2 className='text-5xl w-full'>For Professionals Who Demand Better</h2>
                                <p>Precious time is wasted chasing cabinet suppliers who treat you like a retail customer. You battle spreadsheets, multiple vendors, and endless follow-ups while clients expect perfection.</p>
                                <p>
                                    At Casewell, we believe great work starts with the right partners. We supply cabinetry and millwork for people who care about their craft, about clients, about doing things right.
                                </p>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <div className="imageWrapper w-full h-[556px]">
                                    <img src="/images/profession1.jpg" alt="profession" className='w-full h-full object-cover'/>
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