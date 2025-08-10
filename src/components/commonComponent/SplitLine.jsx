import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
    
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const SplitLine = () => {
    const subheadingRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
          
    
          const subheadingSplitLine = new SplitText(subheadingRef.current, {
            type: 'lines',
            linesClass: 'line overflow-hidden block',
          });
          const subheadingSplitWord = new SplitText(subheadingRef.current, {
            type: 'words',
            wordsClass: 'line overflow-hidden block',
          });
          gsap.from(subheadingSplitWord.words, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'power4.out',
            stagger: 0.05,
          });
    
        });
    
    
        return () => ctx.revert();
      }, []);
  return (
    <div>
        <p ref={subheadingRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate dolor voluptatum provident dolore voluptates in eveniet laudantium quisquam quod nemo, excepturi veniam dignissimos, similique est cumque perspiciatis, nulla modi.</p>
    </div>
  )
}

export default SplitLine