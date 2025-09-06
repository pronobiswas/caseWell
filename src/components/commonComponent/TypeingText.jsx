import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const TypeingText = ({
    texts = ["interior", "design", "doors"]
}) => {
    const text2Ref = useRef(null);
    useEffect(() => {
        
        let current = 0;
        let ctx = gsap.context(() => {
            function animateText(index) {
                text2Ref.current.innerHTML = texts[index];
                const split = new SplitText(text2Ref.current, {
                    type: "lines,words,chars",
                    linesClass: "line  relative block",
                    wordsClass: "words  block",
                });
                const tl = gsap.timeline();
                tl.from(split.chars, {
                    opacity: 0,
                    duration: 0.3,
                    stagger: 0.3,
                })
                    .to(split.chars, {
                        opacity: 0,
                        duration: 0.3,
                        stagger: 0.3,
                        onComplete: () => {
                            split.revert();
                            current = (index + 1) % texts.length;
                            animateText(current);
                        }
                    });
            }
            animateText(current);
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="w-fit">
                <h1 ref={text2Ref} className="text-5xl md:text-6xl font-Montserrat font-bold lg:text-[6vw] text-colorOne">interiors</h1>
            </div>
        </>
    )
}

export default TypeingText