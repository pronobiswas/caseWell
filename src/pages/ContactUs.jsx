import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { FiArrowUpRight } from 'react-icons/fi'

// gsap.registerPlugin(SplitText);

const ContactUs = () => {
    const headingRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const headingSplit = new SplitText(headingRef.current, {
            type: "lines,words,chars",
            linesClass: "split-line block overflow-hidden"
        });
        gsap.from(headingSplit.words, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
        });

        
        const textSplit = new SplitText(textRef.current, { 
            type: "lines,words,chars" ,
            linesClass: "split-line block overflow-hidden",
        });
        gsap.from(textSplit.words, {
            opacity: 0,
            y: 20,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out",
        });
    }, []);


    
    return (
        <>
            <section id="contactUs" className='w-full h-full bg-bgOne p-5 py-36'>
                <div className="contactUsWrapper flex justify-center">
                    <div className="formwrapper w-full max-w-3xl font-workFont">
                        <h1 ref={headingRef} className='text-5xl text-center mb-6 font-myFont'>Contact Us</h1>
                        <p ref={textRef} className='text-center '>We built Casewell because trade professionals deserve a supplier who champions their success, not competes for their clients. You keep relationships, earn the margins you deserve, and focus on what you do best.</p>
                        <div className='w-full max-w-xl mx-auto pt-5'>

                            <form action="">
                                <div className='flex flex-col gap-5'>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="fullName" className='text-sm mb-1 text-gray-500'>Name</label>
                                        <input type="text" id='fullName' name='fullName' className='p-2' />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="email" className='text-sm mb-1 text-gray-500'>Email</label>
                                        <input type="email" id='email' name='email' className='p-2' />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="phone" className='text-sm mb-1 text-gray-500'>Phone Number</label>
                                        <input type="text" name='phone' id='phone' className='p-2' />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="contactReson" className='text-sm mb-1 text-gray-500'>Contact reason</label>
                                        <select name="contactReson" id="contactReson" className='p-2'>
                                            <option value="I'm interested in the Trade Partner Program ">I'm interested in the Trade Partner Program </option>
                                            <option value=" I’d like a quote for cabinetry"> I’d like a quote for cabinetry</option>
                                            <option value="I have a general question">I have a general question</option>
                                        </select>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="messagetxt" className='text-sm mb-1 text-gray-500'>Message</label>
                                        <textarea name="messagetxt" id="messagetxt" cols="75" rows='5'></textarea>
                                    </div>
                                    <div className='flex justify-center pt-3'>
                                        <div className='border border-gray-500 rounded-full w-fit h-fit flex items-center gap-2 py-2 px-3 group transition-all duration-500 ease-in-out cursor-pointer hover:bg-bgTwo'>
                                            <span>Submit</span>
                                            <div className='w-[13px] h-[12px] relative  overflow-hidden'>
                                                <div className=''>
                                                    <span className='absolute top-0 left-0 group-hover:left-[10px] group-hover:-top-[10px] transition-all duration-500 ease-in-out'><FiArrowUpRight /></span>
                                                    <span className='absolute top-[10px] -left-[10px] opacity-1 group-hover:opacity-100 group-hover:left-0 group-hover:top-0 transition-all duration-500 ease-in-out'>
                                                        <FiArrowUpRight />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs