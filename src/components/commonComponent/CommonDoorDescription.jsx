import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CommonDoorDescription = ({ 
    titleOne = "What is a Pivot Door?", 
    titleTwo = "Why Choose Pivot?", 
    headingOne = "A Statement in Motion", 
    headingTwo = "Bold, Seamless, Functional", 
    descriptionOne = "Forget the ordinary swing — luxury pivot doors rotate from a central point, creating a smooth, weightless movement that feels more like a design experience than just an opening. Oversized or heavy? Not a problem — our custom pivot doors handle it effortlessly.", 
    descriptionTwo = "A pivot door isn’t just an entrance — it’s a statement piece. Perfect for wide openings, modern pivot doors create a sense of arrival while keeping movement effortless and perfectly balanced.." }) => {
    const optionOneRef = useRef(null);
    useEffect(() => {
        if (!optionOneRef.current) return;

        const ctx = gsap.context(() => {
            const optionOneCols = optionOneRef.current.querySelectorAll('.optionOneCol');

            gsap.from(optionOneCols, {
                y: 100,
                opacity: 0,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: optionOneRef.current,
                    start: "top 70%",
                    end: "top 40%",
                    scrub: true,
                },
            });
        }, optionOneRef);

        return () => ctx.revert();
    }, []);
    return (
        <>
            <section>
                <div className="wrapper w-full bg-colorOne text-white font-geist">
                    <div ref={optionOneRef} className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5">

                        <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-colorTwo">
                            <span>{titleOne}</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-Montserrat text-3xl'>{headingOne}</h3>

                                <p>{descriptionOne}</p>
                                <Link to="/collection" >
                                    <BtnComponent text='See Collection' />
                                </Link>
                            </div>
                        </div>

                        <div className="optionOneCol w-full md:w-1/2  px-8 py-32">
                            <span>{titleTwo}</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-Montserrat text-3xl'>{headingTwo}</h3>

                                <p>{descriptionTwo}</p>
                                <Link to="/inspiration" >
                                    <BtnComponent text='Get Inspired' />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default CommonDoorDescription