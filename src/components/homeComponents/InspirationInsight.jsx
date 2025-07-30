import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const InspirationInsight = () => {
    let [clickedValue,setClickedValue]=useState(0);
    const progressRef = useRef(null);
    const slideRef = useRef(null);
    const handleIncrement = ()=>{
        setClickedValue(prev => (prev < 3 ? prev + 1 : 3));
    }
    const handleDecrement = ()=>{
        setClickedValue(prev => (prev > 0 ? prev - 1 : 0));
    }
    useEffect(()=>{
        if (clickedValue ==0) {
            
            gsap.to(slideRef.current,{
                xPercent:-20,
                duration:0.5
            })
            gsap.to(progressRef.current,{
                width:"20%",
                duration:0.5
            })
        }
        if (clickedValue ==1) {
            gsap.to(progressRef.current,{
                width:"50%",
                duration:0.5
            })
            gsap.to(slideRef.current,{
                xPercent:-50,
                duration:0.5
            })
        }
        if (clickedValue ==2) {
            gsap.to(progressRef.current,{
                width:'70%',
                duration:0.5
            })
             gsap.to(slideRef.current,{
                xPercent:-70,
                duration:0.5
            })
        }
        if (clickedValue ==3) {
            gsap.to(progressRef.current,{
                width:'100%',
                duration:0.5
            })
            gsap.to(slideRef.current,{
                xPercent:-100,
                duration:0.5
            })
        }
    },[clickedValue]);
    console.log(clickedValue);
    
  return (
    
    <>
    <section id="inspiration">
        <div className="inspirationWrapper p-12">
            <div className="inspirationHeader">
                <h2 className='text-4xl'>Inspiration & Insights</h2>
                <h3 className='text-2xl mt-4'>Crafted from the Finest Wood</h3>
                <p className='w-full max-w-[500px]'>Wood is more than our material — it’s our passion. Every grain tells a story. Every finish is done with love.</p>
            </div>
            {/* ======inspirationSliderWrapper===== */}
            <div className="w-full h-full">
                {/* =====inspiration slider header=== */}
                <div className='w-full flex justify-end'> 
                    <div className='w-fit h-fit bg-white py-1 px-3 rounded-full flex items-center gap-2'>
                        <span onClick={handleDecrement}><FaArrowLeft /></span>
                        <span>1.5</span>
                        <span onClick={handleIncrement}><FaArrowRight /></span>

                    </div>
                </div>
                {/* =======inspiration slider=========== */}
                <div className="w-full h-full  my-5 overflow-hidden">
                    <div className="inspirationSliderWrapper box-border">
                        {/* ====slidesContainer=== */}
                        <div ref={slideRef} className="box-border overflow-hidden w-full h-full py-5 flex gap-10 flex-nowrap [&>div]:shrink-0 relative left-[70%]">
                            <div className="slideItem w-fit h-fit ">
                                <img src="/images/slideImage1.jpg" alt="images" className='w-full max-w-[432px]'/>
                                <div className='mt-5'>
                                    <p>Top Performing Cabinet</p>
                                    <p>Finishes of 2025</p>
                                </div>
                            </div>
                            <div className="slideItem w-fit h-fit">
                                <img src="/images/slideImage2.jpg" alt="images" className='w-full max-w-[392px] h-[450px]'/>
                                <div className='mt-5'>
                                    <p>Top Performing Cabinet</p>
                                    <p>Finishes of 2025</p>
                                </div>
                            </div>
                            <div className="slideItem w-fit h-fit">
                                <img src="/images/slideImage3.jpg" alt="images" className='w-full max-w-[420px]'/>
                                <div className='mt-5'>
                                    <p>Top Performing Cabinet</p>
                                    <p>Finishes of 2025</p>
                                </div>
                            </div>
                            <div className="slideItem w-fit h-fit">
                                <img src="/images/slideImage4.jpg" alt="images" className='w-full max-w-[432px]'/>
                                <div className='mt-5'>
                                    <p>Top Performing Cabinet</p>
                                    <p>Finishes of 2025</p>
                                </div>
                            </div>
                            <div className="slideItem w-full max-w-[412px]">
                                <img src="/images/slideImage5.jpg" alt="images" className='w-full h-full   object-cover'/>
                                <div className='mt-5'>
                                    <p>Top Performing Cabinet</p>
                                    <p>Finishes of 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =========inspiration Proggress bar========= */}
                <div className="w-full h-[2px] bg-gray-300">
                    <div ref={progressRef} className="h-full bg-black" style={{ width: "10%" }}></div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default InspirationInsight