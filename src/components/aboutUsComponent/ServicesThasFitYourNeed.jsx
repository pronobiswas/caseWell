import React, { useEffect, useRef } from 'react';
import '../../index.css'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQSection from '../commonComponent/FAQSection';
import BtnComponent from '../homeComponents/utils/BtnComponent';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ServicesThasFitYourNeed = () => {
    const zebranoServiceRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const paragraphSplit = new SplitText(textRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line overflow-hidden block',
                wordsClass: 'words overflow-hidden block',
            });
            const headingSplit = new SplitText(headingRef.current, {
                type: 'lines,words,chars',
                linesClass: 'line  block',
                wordsClass: 'words  block',
            });
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: zebranoServiceRef.current,
                    start: "top 85%",
                    end: "+=400",
                    scrub: true,
                },
            })
            tl.from(headingSplit.chars, {
                rotateX: 360,
                duration: 5,
                stagger: 0.05,
                
            });
             tl.from(paragraphSplit.chars, {
                rotateX: 270,
                duration: 2,
                ease: "linear",
                stagger:0.1,
            });


        });
        return () => ctx.revert();
    }, []);

    const title = "Got questions? You'll find plenty of answers in our FAQ,including:";
    const faqs = [
        {
            question: "Got questions? You'll find plenty of answers in our FAQ, including:",
            answer: "Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details - so you feel confident from the first conversation to the final installation.",
        },
        {
            question: "Got questions? You'll find plenty of answers in our FAQ, including:",
            answer: "Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details - so you feel confident from the first conversation to the final installation.",
        },
        {
            question: "Got questions? You'll find plenty of answers in our FAQ, including:",
            answer: "Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details - so you feel confident from the first conversation to the final installation.",
        },
        {
            question: "Got questions? You'll find plenty of answers in our FAQ, including:",
            answer: "Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details - so you feel confident from the first conversation to the final installation.",
        },
        {
            question: "Got questions? You'll find plenty of answers in our FAQ, including:",
            answer: "Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details - so you feel confident from the first conversation to the final installation.",
        },
    ]
    return (
        <>
            <section ref={zebranoServiceRef} id="servicesThatsFit">
                <div className="wrapper w-full p-5 md:10 lg:p-14 flex gap-10 lg:gap-20 xl:gap-28 text-colorOne">
                    <div className="w-1/2 flex flex-col justify-between">
                        <div>
                            <h2 ref={headingRef} className='text-3xl lg:text-5xl'>Service That Fits Your Needs</h2>
                            <p
                                ref={textRef}
                                // style={{
                                //     background: "linear-gradient(90deg, #002304, #002304, #006025)",
                                //     WebkitBackgroundClip: "text",
                                //     WebkitTextFillColor: "transparent",
                                //     backgroundSize: "200% auto",
                                // }}
                                className=' text-base lg:text-xl mt-8'>
                                Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details - so you feel confident from the first conversation to the final installation.
                            </p>
                        </div>
                        <BtnComponent text='Services'/>

                    </div>
                    <div className="w-1/2 h-auto ">
                        <div className="faqWrapper">
                            <FAQSection title={title} faqs={faqs} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesThasFitYourNeed