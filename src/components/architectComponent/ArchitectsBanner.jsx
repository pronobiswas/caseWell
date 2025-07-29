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
      // Create split text
      const splitHeader = new SplitText(bannerHeadingRef.current, {
        type: "words, chars, lines"
      });

      // Animate the lines
      gsap.from(splitHeader.lines, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        delay: 3,
        stagger: 0.05,
        ease: "power4.out"
      });

      // Optional cleanup
      return () => {
        splitHeader.revert(); // revert DOM changes by SplitText
      };
    }
  }, []);

  return (
    <div className="architectsBanner">
      <section id="architects" className='w-full h-screen bg-[url("/images/architecBanner.jpg")] bg-cover font-myFont'>
        <div className="architectsWrapper w-full h-full flex items-end p-12 text-white">
          <div className="architectsContent">
            <h2 ref={bannerHeadingRef} className='text-4xl mb-8'>
              Join the Casewell <br /> Trade Program
            </h2>
            <BtnComponent text="join now" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArchitectsBanner;
