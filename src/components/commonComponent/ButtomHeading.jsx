import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const ButtomHeading = ({
  heading = "Heading Text",
  paragraph1 = "This is some text",
  paragraph2 = "",
  color = "white"
}) => {
  const textCon = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const subheadin2gRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading into lines
      const headingSplit = new SplitText(headingRef.current, {
        type: 'lines',
        linesClass: 'line overflow-hidden block',
      });


      gsap.from(headingSplit.lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.05,
      });

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
      if (subheadin2gRef.current) {

        const subheading2SplitLine = new SplitText(subheadin2gRef.current, {
          type: 'lines',
          linesClass: 'line overflow-hidden block',
        });
        const subheading2SplitWord = new SplitText(subheadin2gRef.current, {
          type: 'words',
          wordsClass: 'line overflow-hidden block',
        });
        gsap.from(subheading2SplitWord.words, {
          y: 100,
          opacity: 0,
          duration: 2,
          ease: 'power4.out',
          stagger: 0.05,
        });
      }

    });


    return () => ctx.revert();
  }, []);

  return (
    <div ref={textCon} className={`text-${color} w-full max-w-xl`}>
      <h1 ref={headingRef} className="split text-3xl font-geist md:text-5xl text-textLight">{heading}</h1>
      <p ref={subheadingRef} className="split text-xl font-geist mt-5 text-textLight">{paragraph1}</p>
      {paragraph2 && (
        <p ref={subheadin2gRef} className="split text-base font-geist text-textLight">{paragraph2}</p>
      )}
    </div>
  );
};

export default ButtomHeading;
