import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';


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
                    opacity:0,
                    y:100,
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
            <section ref={cabinetaryOptionMain} id="cabinetaryOpton" className='w-full h-full bg-bgOne'>
                <div className="cabineteryOptionWrapper p-5 flex flex-col gap-5">
                    {/* --------cabinetary option one-------- */}
                    <div ref={optionOneRef} className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5">

                        <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-bgTwo">
                            <span>Option 1 :</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-myFont text-3xl'>Not Sure Where to Begin?</h3>

                                <p>Answer a few quick questions, and we’ll guide you toward the best-fit option — whether it’s fast and efficient Ready-to-Fit cabinets, the flexibility of Made-to-Measure, or a fully integrated Custom or Bespoke millwork solution.</p>
                                <BtnComponent text='See Contractor Services' />
                            </div>
                        </div>
                        <div className="optionOneCol w-full md:w-1/2 bg-white px-8 py-32">
                            <span>Option 2:</span>
                            <div className='flex flex-col gap-14 mt-5'>
                                <h3 className='font-myFont text-3xl'>Already Know What You Need?</h3>
                                <p>Answer a few quick questions, and we’ll guide you toward the best-fit option — whether it’s fast and efficient Ready-to-Fit cabinets, the flexibility of Made-to-Measure, or a fully integrated Custom or Bespoke millwork solution.</p>
                                <BtnComponent text='See Contractor Services' />
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
                            <div className='cabinetaryOptionContent flex flex-col gap-5'>
                                <span>Ready-to-Fit</span>
                                <h3 className='font-myFont text-3xl'>Standard Sizes. Streamlined Ordering. Fast Delivery</h3>
                                <p>Pre-configured cabinet sizes with a curated selection of finishes and door styles. Ideal for trade professionals and confident DIYers looking for simplicity and speed. Cabinets are ordered online and ship flat-packed, ready to assemble.Perfect for rental properties, secondary units, budget-conscious renovations, or fast-moving installs.</p>
                                <BtnComponent text='See Contractor Services' />
                            </div>
                        </div>

                    </div>
                    {/* --------cabinetary option three-------- */}
                    <div ref={optionThreeRef} className="cabinetaryOptionThree w-full h-full flex flex-col gap-5 md:flex-row md:items-center">

                        <div className="w-full md:w-1/2 p-8 order-2 md:order-1 ">
                            <div className='cabinetaryOptionContent flex flex-col gap-5'>
                            <span>Made-to-Measure</span>
                                <h3 className='font-myFont text-3xl'>Slight Adjustments. Guided Design. Site-Verified Precision</h3>
                                <p>This semi-custom option allows for minor adjustments to cabinet dimensions and layout within our standard framework. Includes a design consultation and site measurement to ensure everything fits your space. A service fee applies.Perfect for homeowners or professionals needing flexibility without the cost of full custom cabinetry.</p>
                                <BtnComponent text='See Contractor Services' />
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
                            <span>Custom Cabinetry</span>
                                <h3 className='font-myFont text-3xl'>Expanded Design Options. Trade-Led Projects. Integrated Material Planning</h3>
                                <p>Available exclusively to trade professionals. If you’re a homeowner, we’ll connect you with a qualified designer or contractor to lead the process. We supply only.Perfect for design-led kitchens requiring tailored planning and collaborative execution.</p>
                                <BtnComponent text='See Contractor Services' />
                            </div>
                        </div>

                    </div>
                    {/* --------cabinetary option five-------- */}
                    <div className="cabinetaryOptionFour w-full h-full flex flex-col gap-5 md:flex-row md:items-center">

                        <div className="w-full md:w-1/2  p-8 order-2 md:order-1 ">
                            <div className='cabinetaryOptionContent flex flex-col gap-5 '>
                                <span>Bespoke Millwork</span>
                                <h3 className='font-myFont text-3xl'>Architectural Detail. High-Touch Craftsmanship. Elevated Design Execution</h3>
                                <p>Our most advanced cabinetry and millwork tier, tailored to architectural and luxury residential projects. We collaborate with your design or architectural team to support full elevations, renderings, and integrated millwork execution.Perfect for luxury homes, architect-driven projects, and builds with exacting design intent.</p>
                                <BtnComponent text='See Contractor Services' />
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