import React, { useEffect, useRef } from 'react';
import '../../index.css'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQSection from '../commonComponent/FAQSection';
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { Link } from 'react-router-dom';
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
            question: "What are standard production lead times?",
            answer: `– Doors (pivot/sliding/hinged) 6–8 weeks; Flush-to-Wall 8–10 weeks; Wall partitions 6–8 weeks; Boiserie 8–10 weeks.`,
        },
        {
            question: "How customisable are your doors?",
            answer: "– Sizes, finishes, glass types, edge details, hardware sets, and options (e.g., soft-close, pivot closer, seals) are configurable. Ultra-custom builds move to a quote path.",
        },
        {
            question: "Do you supply hardware?",
            answer: "– Yes—hinges, pivots, sliders, handles, and seals as specified; third-party hardware by agreement after compatibility checks.",
        },
        {
            question: "What warranty do you offer?",
            answer: "– 2-year warranty on doors/materials (manufacturing defects/structural integrity) and 6-month warranty on installation workmanship (when performed by Zebrano).",
        },
        {
            question: "Do you install as well?",
            answer: "– Yes—optional installation in NL. Includes fitting Zebrano frames/leafs/hardware, alignment, clearances, and functional checks; excludes structural works, electricals, plastering/painting, and third-party materials.",
        },
    ]
    return (
        <>
            <section ref={zebranoServiceRef} id="servicesThatsFit">
                <div className="wrapper w-full p-5 md:10 lg:p-14 text-myColorOne">
                    <div className="w-full">
                        <div className='w-full md:w-1/2'>
                            <h2 ref={headingRef} className='text-3xl lg:text-5xl'>“Service that fits your needs”</h2>
                            <p
                                ref={textRef}
                                // style={{
                                //     background: "linear-gradient(90deg, #002304, #002304, #006025)",
                                //     WebkitBackgroundClip: "text",
                                //     WebkitTextFillColor: "transparent",
                                //     backgroundSize: "200% auto",
                                // }}
                                className=' text-base lg:text-xl mt-8 mb-5'>
                                Whether you're ordering a single custom door or exploring ways to integrate multiple elements into your interior, we make the process simple and inspiring. Our team is here to guide you through choices, timelines, and practical details - so you feel confident from the first conversation to the final installation.
                            </p>
                        </div>
                        <Link to="/aboutus/services">
                            <BtnComponent text=' Service'/>
                        </Link>

                    </div>
                    <div className="w-full h-auto flex justify-end">
                        <div className="faqWrapper w-full md:w-2/3">
                            <FAQSection title={title} faqs={faqs} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesThasFitYourNeed