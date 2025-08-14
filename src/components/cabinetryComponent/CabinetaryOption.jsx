import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

const CabinetaryOption = () => {
    const cabinetaryOptionMain = useRef(null);
    const optionOneRef = useRef(null);
    const optionTwoRef = useRef(null);
    const optionThreeRef = useRef(null);
    const optionFourRef = useRef(null);
    // =====option one ref anim=========
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
    // =====animate images======
    useEffect(() => {
        if (!cabinetaryOptionMain.current) return;

        const ctx = gsap.context(() => {
            const cabinetaryImages = cabinetaryOptionMain.current.querySelectorAll('.cabinetaryImage');
            console.log(cabinetaryImages);
            cabinetaryImages.forEach((images) => {
                gsap.from(images, {
                    scale: 1.3,
                    ease: "power2.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: images,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                });
            });



        }, cabinetaryOptionMain);

        return () => ctx.revert();
    }, []);
    // =====animate text======
    useEffect(() => {
        if (!cabinetaryOptionMain.current) return;

        const ctx = gsap.context(() => {
            const cabinetaryOptionContent = cabinetaryOptionMain.current.querySelectorAll('.cabinetaryOptionContent');
            console.log(cabinetaryOptionContent);
            cabinetaryOptionContent.forEach((textBox) => {
                gsap.from(textBox, {
                    opacity: 0,
                    y: 100,
                    ease: "power2.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: textBox,
                        start: "top 90%",
                        end: "top 50%",
                        scrub: true,
                    },
                });
            });



        }, cabinetaryOptionMain);

        return () => ctx.revert();
    }, []);



    return (
        <>
            <section ref={cabinetaryOptionMain} id="cabinetaryOpton" className='w-full h-full bg-bgOne text-black font-geist'>
                <div className="cabineteryOptionWrapper p-5 flex flex-col gap-5">
                    {/* --------cabinetary option one-------- */}
                    <div ref={optionOneRef} className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5">

                        <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-bgTwo">
                            <span>Option 1 :</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-Montserrat text-3xl'>Explore Our Collections</h3>

                                <p>Not sure where to begin? Browse our curated Glass, Veneer, 3D, and Atelier collections to discover the designs, materials, and finishes that inspire you. We’ll guide you toward the perfect fit for your style and space.</p>
                                <Link to="/collection" >
                                    <BtnComponent text='See collection' />
                                </Link>
                            </div>
                        </div>
                        <div className="optionOneCol w-full md:w-1/2 bg-white px-8 py-32">
                            <span>Option 2:</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-geist text-3xl'>Configure Your Own</h3>
                                <p>Already know exactly what you want? Use our configurator to choose your door type, materials, hardware, and details — and we’ll craft it to your specifications.</p>
                                <Link to='/configurator' >
                                    <BtnComponent text='Configure yours' />
                                </Link>
                            </div>
                        </div>

                    </div>
                    {/* --------cabinetary option two-------- */}
                    <div ref={optionTwoRef} className="cabinetaryOptionTwo w-full h-full flex flex-col gap-5 md:flex-row md:items-center">

                        <div className="w-full md:w-1/2">
                            <div className='w-full h-[562px] overflow-hidden'>
                                <img src="/images/cabinetary1.jpg" alt="image" className='cabinetaryImage w-full h-full object-fill' />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2  p-8">
                            <div className='cabinetaryOptionContent flex flex-col gap-5 font-geist'>
                                <span>Choose your door type.</span>
                                <h3 className='font-Montserrat text-3xl'>Make a statement.</h3>
                                <p>Select from our most popular Pivot, Slide, or Hinged designs — pre-sized for standard openings and ready to install. Perfect for quick upgrades or projects on a tight schedule.</p>
                                <Link to="/collection">
                                    <BtnComponent text='See collection' />
                                </Link>
                            </div>
                        </div>

                    </div>
                    {/* --------cabinetary option three-------- */}
                    <div ref={optionThreeRef} className="cabinetaryOptionThree w-full h-full flex flex-col gap-5 md:flex-row md:items-center">

                        <div className="w-full md:w-1/2 p-8 order-2 md:order-1 ">
                            <div className='cabinetaryOptionContent flex flex-col gap-5'>
                                <span>Select your material. </span>
                                <h3 className='font-Montserrat text-3xl font-semibold'>Make it yours.</h3>
                                <p>From fine veneers to solid woods, textured glass, or natural stone inlays — we’ll craft your chosen design to the exact dimensions of your space for a flawless fit.</p>
                                <Link to="/collection">
                                    <BtnComponent text='See collection' />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <div className='w-full h-[562px] overflow-hidden'>
                                <img src="/images/cabinetary2.jpg" alt="image" className='cabinetaryImage w-full h-full object-fill' />
                            </div>
                        </div>

                    </div>
                    {/* --------cabinetary option four-------- */}
                    <div ref={optionFourRef} className="cabinetaryOptionFour w-full h-full flex flex-col gap-5 md:flex-row md:items-center">

                        <div className="w-full md:w-1/2">
                            <div className='w-full h-[562px] overflow-hidden'>
                                <img src="/images/cabinetary3.jpg" alt="image" className='cabinetaryImage w-full h-full object-fill' />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2  p-8">
                            <div className='cabinetaryOptionContent flex flex-col gap-5'>
                                <span>Define Your Grip Style </span>
                                <h3 className='font-Montserrat font-semibold text-3xl'>Pick your handle or integrated grip.</h3>
                                <p>Choose from fully integrated grips, bold contrasting metals, or matching material finishes to make your door as distinctive as your interior. </p>
                                <Link to="/collection">
                                    <BtnComponent text='See collection' />
                                </Link>
                            </div>
                        </div>

                    </div>
                    {/* --------cabinetary option five-------- */}
                    <div className="cabinetaryOptionFour w-full h-full flex flex-col gap-5 md:flex-row md:items-center">

                        <div className="w-full md:w-1/2  p-8 order-2 md:order-1 ">
                            <div className='cabinetaryOptionContent flex flex-col gap-5 '>
                                <span>Architectural Integration</span>
                                <h3 className='font-Montserrat font-semibold text-3xl'>Seamlessly blend your door into the architecture.</h3>
                                <p>From room dividers and wall panels to fully integrated frames, we create doors that become part of the wall itself — delivering a unified, continuous design throughout your space.</p>
                                <Link to="/collection">
                                    <BtnComponent text='See collection' />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <div className='w-full h-[562px] overflow-hidden'>
                                <img src="/images/cabinetary4.jpg" alt="image" className='cabinetaryImage w-full h-full object-fill' />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default CabinetaryOption