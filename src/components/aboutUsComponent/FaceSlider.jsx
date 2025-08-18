import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import BtnComponent from '../homeComponents/utils/BtnComponent'


const FaceSlider = () => {
    let [clickedValue, setClickedValue] = useState(0);
    const [index, setIndex] = useState(0);
    const progressRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);

    const next = () => {
        const len = trackRef.current?.children.length ?? 1;
        setIndex((i) => Math.min(i + 1, len - 1));
    };
    const prev = () => setIndex((i) => Math.max(i - 1, 0));

    useEffect(() => {
        const track = trackRef.current;
        const viewport = viewportRef.current;
        if (!track || !viewport) return;

        const slides = Array.from(track.children);
        const clamped = Math.max(0, Math.min(index, slides.length - 1));

        // where the target slide starts inside the track
        const targetOffset = slides[clamped].offsetLeft;

        // don’t allow the track to scroll past the end
        const maxOffset = track.scrollWidth - viewport.clientWidth;
        const x = -Math.min(targetOffset, Math.max(0, maxOffset));

        gsap.to(track, { x, duration: 0.6, ease: "power3.out" });

        // progress based on how far the viewport’s right edge has moved across the track
        const progress = ((Math.min(targetOffset, maxOffset) + viewport.clientWidth) / track.scrollWidth) * 100;
        gsap.to(progressRef.current, { width: `${progress}%`, duration: 0.4 });
    }, [index]);






    return (
        <>
            <section id="faceSlider">
                <div className="wrapper w-full h-auto p-10 bg-bgTwo">
                    <div className="w-full  flex justify-between ">
                        <div className="w-fit  text-5xl font-bold shrink-0">
                            <h1>MEET THE FACES </h1>
                            <h1>OF ZEBRANO</h1>
                        </div>

                        <div className='w-full h-auto'>
                            <div className='w-full h-full flex justify-between'>
                                <div className='flex gap-2 pl-20 pt-2'>
                                    <div onClick={prev} className='bg-bgOne  w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer'><FaAngleLeft /> </div>
                                    <div onClick={next} className='bg-bgOne  w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'><FaAngleRight /></div>
                                </div>
                                <div className='flex items-end'>
                                    <div className='flex items-center gap-1 bg-bgOne px-2 rounded-full mb-4'>

                                        <span  className='text-3xl' onClick={prev}><BsArrowLeftShort /></span>
                                        <span>1.5</span>
                                        <span onClick={next} className='text-3xl'><BsArrowRightShort /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ======slider section====== */}
                    <div className='w-full  flex'>
                        <div className='w-1/3 pt-5 pl-5 lg:pl-10 xl:pl-16 '>
                            <p className='mb-8'>
                                Behind every seamless door is a story and a few perfectionists with sawdust in their hair. Get to know the minds (and hands) that bring Zebrano Studio to life in Meet the Makers
                            </p>
                            <BtnComponent text='Meet the full team' />
                        </div>
                        <div className='w-2/3'>
                            <div ref={viewportRef} className="w-full overflow-hidden">
                                {/* TRACK (slides row)*/}
                                <div
                                    ref={trackRef}
                                    className="flex flex-nowrap gap-10 [&>div]:shrink-0 will-change-transform"
                                >
                                    {/* slides */}
                                    <div className="slideItem w-fit">
                                        <img src="/images/slideImage41.jpg" className="w-[432px] h-auto" alt="" />
                                        <div className="mt-5"><p>1 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    <div className="slideItem w-fit">
                                        <img src="https://i.ibb.co.com/j9vV5rmf/IMG-0986.jpg" className="w-[392px] h-[450px] object-cover" alt="" />
                                        <div className="mt-5"><p> 2 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    <div className="slideItem w-fit">
                                        <img src="https://i.ibb.co.com/ynR8QdW7/8a.jpg" className="w-[420px] h-auto" alt="" />
                                        <div className="mt-5"><p>3 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    <div className="slideItem w-fit">
                                        <img src="/images/slideImage4.jpg" className="w-[432px] h-auto" alt="" />
                                        <div className="mt-5"><p>4 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    <div className="slideItem w-fit">
                                        <img src="/images/slideImage5.jpg" className="w-[412px] h-auto object-cover" alt="" />
                                        <div className="mt-5"><p> 5 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    <div className="slideItem w-fit">
                                        <img src="/images/slideImage1.jpg" className="w-[432px] h-auto" alt="" />
                                        <div className="mt-5"><p>6 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    <div className="slideItem w-fit">
                                        <img src="/images/slideImage2.jpg" className="w-[392px] h-[450px] object-cover" alt="" />
                                        <div className="mt-5"><p>7 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    <div className="slideItem w-fit">
                                        <img src="/images/slideImage3.jpg" className="w-[392px] h-[450px] object-cover" alt="" />
                                        <div className="mt-5"><p>8 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
                                    </div>
                                    {/* ...more if you want... */}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* =====proggress bar======= */}
                    <div className='w-full'>
                        {/* ========= Proggress bar========= */}
                        <div className="w-full h-[2px] bg-gray-300">
                            <div ref={progressRef} className="h-full bg-black" style={{ width: "10%" }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaceSlider