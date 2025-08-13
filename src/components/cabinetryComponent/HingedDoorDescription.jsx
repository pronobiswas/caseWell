import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const HingedDoorDescription = () => {
    const hingedOptionOneRef = useRef(null);
        useEffect(() => {
            if (!hingedOptionOneRef.current) return;
    
            const ctx = gsap.context(() => {
                const optionOneCols = hingedOptionOneRef.current.querySelectorAll('.optionOneCol');
    
                gsap.from(optionOneCols, {
                    y: 100,
                    opacity: 0,
                    ease: "power2.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: hingedOptionOneRef.current,
                        start: "top 70%",
                        end: "top 40%",
                        scrub: true,
                    },
                });
            }, hingedOptionOneRef);
    
            return () => ctx.revert();
        }, []);
    return (
        <>
            <section>
                <div className="wrapper w-full bg-colorOne text-white font-geist">
                    <div ref={hingedOptionOneRef} className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5">

                        <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-colorTwo">
                            <span>What is a Hinged Door?</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-Montserrat text-3xl'>Timeless & Versatile</h3>

                                <p>Hinged doors are the classics — side-mounted, easy to use, and endlessly adaptable. Our luxury hinged doors work in any setting, from a minimalist loft to a grand townhouse</p>
                                <Link to="/collection" >
                                    <BtnComponent text='See Collection' />
                                </Link>
                            </div>
                        </div>

                        <div className="optionOneCol w-full md:w-1/2  px-8 py-32">
                            <span>Why Choose Hinged?</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-Montserrat text-3xl'>Everyday Luxury</h3>

                                <p>Reliable, stylish, and flexible — custom hinged doors work beautifully in almost any space. From single openings to grand double doors, they bring comfort, function, and elegance in equal measure.</p>
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

export default HingedDoorDescription