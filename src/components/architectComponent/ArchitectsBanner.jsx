import React, { useEffect, useRef } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import BtnComponent from '../homeComponents/utils/BtnComponent'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const ArchitectsBanner = () => {
  const bannerHeadingRef = useRef(null);

  useEffect(() => {
    if (bannerHeadingRef.current) {
      const splitHeader = new SplitText(bannerHeadingRef.current, {
        type: "words, chars, lines"
      });
      gsap.from(splitHeader.lines, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power4.out"
      });
      return () => {
        splitHeader.revert(); 
      };
    }
  }, []);

  return (
    <div className="architectsBanner">
      <section id="architects" className='w-full h-screen bg-[url("/images/architecBanner.jpg")] bg-cover font-geist'>
        <div className="architectsWrapper w-full h-full flex items-end p-12 text-white">
          <div className="architectsContent">
            <h2 ref={bannerHeadingRef} className='text-3xl md:text-5xl mb-8 leading-10 text-textLight'>
              Join the story of <br /> Zebrano Studio
            </h2>
            <BtnComponent text="join now" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArchitectsBanner;
