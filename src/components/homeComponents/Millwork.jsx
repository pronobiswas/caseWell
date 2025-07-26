import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Millwork = () => {
    const millwork = React.useRef(null);
    console.log(millwork);


    
    useEffect(() => {
        const handleLoad = () => {
            const millworkItem = millwork.current.querySelectorAll('.millworkItem');
           
            

            if ( !millworkItem) return;

            gsap.from(millworkItem, {
                y: 100,
                opacity: 0,
                ease: "power2.out",
                duration: 1,
                stagger:0.5,
                scrollTrigger: {
                    trigger: "#millwork",
                    start: "top 50%",
                    end: "+=1800",
                    scrub: true,
                },
            });
            

            ScrollTrigger.refresh();
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);
    return (
        <>
            <section ref={millwork} id="millwork">
                <div className="container border-white border-t-2 py-20">
                    <h2 className='text-4xl'>Cabinetry & Millwork That Fits the Way You Work</h2>
                    <div className="millworkWrapper flex mt-20 gap-20">

                        <div className="w-1/2 flex flex-col gap-40">
                            <div className="millworkItem">
                                <div className="millworkImagebBox w-4/5 flex justify-center">
                                    <img src="https://framerusercontent.com/images/sgVlUrrqaNkwE790L0I8IfBcSM.png?scale-down-to=1024" alt="png" className='aspect-[4/4] object-cover' />
                                </div>
                                <div className="millworkContent ">
                                    <h3 className='text-3xl'>Ready-to-Fit Cabinetry</h3>
                                    <p>Fast-moving flat-pack or assembled cabinets for tight timelines and pro-grade results.</p>
                                    <div className="flex w-fit h-fit bg-white rounded-full py-2 px-5">
                                        <span>Explore Our Cabinet Line</span>
                                        <span>icon</span>
                                    </div>
                                </div>
                            </div>

                            <div className="millworkItem">
                                <div className="millworkImagebBox w-full aspect-[5/3]">
                                    <img src="https://framerusercontent.com/images/6PXUeof02qL5foBPVQS29FtSHg.png?scale-down-to=1024" alt="png" className='w-full h-full object-cover' />
                                </div>
                                <div className="millworkContent w-80">
                                    <h3 className='text-3xl'>Ready-to-Fit Cabinetry</h3>
                                    <p>Fast-moving flat-pack or assembled cabinets for tight timelines and pro-grade results.</p>
                                    <div className="flex w-fit h-fit bg-white rounded-full py-2 px-5">
                                        <span>Explore Our Cabinet Line</span>
                                        <span>icon</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 pt-56 flex flex-col gap-32">
                            <div className="millworkItem">
                                <div className="millworkImagebBox">
                                    <img src="https://framerusercontent.com/images/STowJxkLsEYUUN7hD3uWk3q7s.png?scale-down-to=2048" alt="png" className='' />

                                </div>
                                <div className="millworkContent w-80">
                                    <h3 className='text-3xl'>Ready-to-Fit Cabinetry</h3>
                                    <p>Fast-moving flat-pack or assembled cabinets for tight timelines and pro-grade results.</p>
                                    <div className="flex w-fit h-fit bg-white rounded-full py-2 px-5">
                                        <span>Explore Our Cabinet Line</span>
                                        <span>icon</span>
                                    </div>
                                </div>
                            </div>
                            <div className="millworkItem pl-20">
                                <div className="millworkImagebBox">
                                    <img src="https://framerusercontent.com/images/MGb47MURnSziIJAlgBiAIpSnlA.png" alt="png" className='' />
                                </div>

                                <div className="millworkContent w-80">
                                    <h3 className='text-3xl'>Ready-to-Fit Cabinetry</h3>
                                    <p>Fast-moving flat-pack or assembled cabinets for tight timelines and pro-grade results.</p>
                                    <div className="flex w-fit h-fit bg-white rounded-full py-2 px-5">
                                        <span>Explore Our Cabinet Line</span>
                                        <span>icon</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Millwork