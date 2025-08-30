import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
    
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const ConfiguratorPage = () => {
  const textRef = useRef();
  useEffect(() => {
          const ctx = gsap.context(() => {
            
      
            const textSplit = new SplitText(textRef.current, {
              type: 'lines, words, chars',
              linesClass: 'line overflow-hidden block pb-1',
            });
            const tl = gsap.timeline({repeat: -1});
            tl.from(textSplit.chars, {
              y: 100,
              opacity: 0,
              duration: 2,
              ease: 'power4.out',
              stagger: 0.05,
            })
            .to(textSplit.chars, {
              rotateY: 90,
              opacity: 1,
              duration: 2,
              ease: 'power4.out',
              stagger: 0.05,
            })
            .to(textSplit.chars, {
              rotateY: 0,
              opacity: 1,
              duration: 2,
              ease: 'power4.out',
              stagger: 0.05,
            })
            .to(textSplit.chars, {
              y: -110,
              opacity: 0,
              duration: 2,
              ease: 'power4.out',
              stagger: {
                amount: 0.5,
                from: "end",
                grid: "auto",
                each: 0.1
              },
            })
            

          });

          return () => ctx.revert();
        }, []);
  return (
    <>
    <section id="configurator">
        <div className="wrapper w-full h-screen bg-colorOne flex justify-center items-center">
            <h1 ref={textRef} className='text-[5vw] font-semibold '> “Coming Soon”</h1>
        </div>
    </section>
    </>
  )
}

export default ConfiguratorPage