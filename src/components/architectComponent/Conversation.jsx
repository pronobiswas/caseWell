import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from "../homeComponents/utils/BtnComponent";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Conversation = () => {
  const conversationRef = useRef(null);
  const bigTextRef = useRef(null);
  const headingTextRef = useRef(null);
  const paragraphTextRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    const splitBigText = new SplitText(bigTextRef.current, {
      type: "lines,words,chars",
      linesClass: "lines block overflow_hidden",
    });

    const chars = gsap.utils.toArray(splitBigText.chars);
    const shuffledchars = gsap.utils.shuffle([...chars]);

    const spltitHeading2 = new SplitText(headingTextRef.current, {
      type: "lines , words , chars",
      linesClass: "lines block overflow-hidden",
    });
    const spltitparagraphText = new SplitText(paragraphTextRef.current, {
      type: "lines , words , chars",
      linesClass: "lines block overflow-hidden",
    });

    const ctx = gsap.context(() => {
      shuffledchars.forEach((chars) => {
        const randomX = gsap.utils.random(-50, 50);
        const randomY = gsap.utils.random(-50, 50);

        gsap.from(chars, {
          x: randomX,
          y: randomY,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bigTextRef.current,
            start: "top 80%",
            end: "+=100",
            scrub: true,
          },
        });
      });

      gsap.from(spltitHeading2.words, {
        y: 100,
        ease: "power2.out",
        duration: 1,
        stagger: 0.01,
        scrollTrigger: {
          trigger: headingTextRef.current,
          start: "top 95%",
          end: "+=200",
          scrub: true,
        },
      });
      // =====handle paragraph Text=====
      gsap.from(spltitparagraphText.chars, {
        x: 100,
        ease: "power2.out",
        duration: 1,
        stagger: 0.01,
        scrollTrigger: {
          trigger: headingTextRef.current,
          start: "top 85%",
          end: "+=200",
          scrub: true,
        },
      });
      // =====handle button=======
      gsap.from(btnRef.current, {
        scale: 0.5,
        ease: "power2.out",
        duration: 1,
        stagger: 0.01,
        scrollTrigger: {
          trigger: conversationRef.current,
          start: "top 35%",
          end: "+=200",
          scrub: true,
        },
      });
    }, conversationRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={conversationRef}
        id="conversation"
        className="w-full h-full bg-[#F2F0EA]"
      >
        <h3
          ref={bigTextRef}
          className="text-4xl xl:text-5xl text-center w-full max-w-4xl xl:max-w-5xl mx-auto pt-14 pb-20 text-stone-600"
        >
          Let’s break boundaries together. Join our Partner Program and start
          creating without limits.
        </h3>
        <div className="conversationWrapper p-32 font-Poppins bg-[#E1DBCB] flex justify-center">
          <div className="w-full flex flex-col items-center">
            <h2
              ref={headingTextRef}
              className="text-4xl mb-8 w-full text-center"
            >
              Let’s Get in Touch and Start a Conversation
            </h2>
            <div className="w-full max-w-xl">
              <p ref={paragraphTextRef} className="text-base mb-8 text-center">
                We’d love to hear about your ideas, projects, or questions. No
                pressure—just a friendly chat to explore how we can create
                something amazing together. Reach out anytime!
              </p>
            </div>
            <div ref={btnRef} className="flex justify-center">
              <BtnComponent text="Partner with Zebrano" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conversation;
