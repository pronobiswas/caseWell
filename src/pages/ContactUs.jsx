import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import emailjs from '@emailjs/browser';

import { FiArrowUpRight } from 'react-icons/fi'
import { use } from 'react';

gsap.registerPlugin(SplitText);

const ContactUs = () => {
    const headingRef = useRef();
    const textRef = useRef();
    const text2Ref = useRef();

    const formRef = useRef();

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
            type: "lines,words" ,
            linesClass: "split-line block overflow-hidden",
        });
        const text2Split = new SplitText(text2Ref.current, { 
            type: "lines,words" ,
            linesClass: "split-line block overflow-hidden",
        });
        gsap.from(textSplit.words, {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.5,
            ease: "power3.out",
        });
        gsap.from(text2Split.words, {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.5,
            ease: "power3.out",
        });
    }, []);

    const sendEmail = (e) => {
    e.preventDefault();
    let formData = new FormData(formRef.current);

    emailjs
      .sendForm('service_mgaa7q8', 'template_j467516', formRef.current, {
        publicKey: 'hGXnZ_IzZesvJopYp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        },
      );
  };


    
    return (
        <>
            <section id="contactUs" className='w-full h-full bg-bgOne p-5 py-36'>
                <div className="contactUsWrapper flex justify-center">
                    <div className="formwrapper w-full max-w-3xl font-workFont">
                        <h1 ref={headingRef} className='text-5xl text-center mb-6 font-geist'>Contact Us</h1>
                        <p ref={textRef} className='text-center '>At Zebrano Studio, we started with a simple idea: to bring luxurious, tailor-made doors within reach — without limits. Every home deserves a touch of design, and every space should tell a story .</p>
                        <p ref={text2Ref} className='pt-5'>
                            Whether you're dreaming big, working on a unique project, or just curious about the possibilities — we’d love to hear from you. Use the form below to get in touch, especially if you have special requests or ideas beyond the ordinary. 
                        </p>
                        <div className='w-full max-w-xl mx-auto pt-5'>

                            <form ref={formRef} onSubmit={sendEmail}>
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
                                            <option value="I'm interested in the Trade Partner Program ">I’d like a quote for a special custom door </option>
                                            <option value=" I’d like a quote for cabinetry"> I’d like to partner with Zebrano Studio as a designer </option>
                                            <option value="I have a general question">I have a general question </option>
                                        </select>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label className='text-sm mb-1 text-gray-500'  htmlFor="consumer">Consumer</label>
                                        <select name="consumer" id="consumer" className='p-2'>
                                            <option value="Business">Business</option>
                                            <option value="Private Customer">Private Customer</option>
                                        </select>
                                    </div>
                                    
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="messagetxt" className='text-sm mb-1 text-gray-500'>Message</label>
                                        <textarea name="messagetxt" id="messagetxt" cols="75" rows='5'></textarea>
                                    </div>
                                    {/* ======submit===== */}
                                    <div  className='flex justify-center pt-3'>
                                        <button type='submit' className='border border-gray-500 rounded-full w-fit h-fit flex items-center gap-2 py-2 px-3 group transition-all duration-500 ease-in-out cursor-pointer hover:bg-bgTwo'>
                                            <span>Submit</span>
                                            <div className='w-[13px] h-[12px] relative  overflow-hidden'>
                                                <div className=''>
                                                    <span className='absolute top-0 left-0 group-hover:left-[10px] group-hover:-top-[10px] transition-all duration-500 ease-in-out'><FiArrowUpRight /></span>
                                                    <span className='absolute top-[10px] -left-[10px] opacity-1 group-hover:opacity-100 group-hover:left-0 group-hover:top-0 transition-all duration-500 ease-in-out'>
                                                        <FiArrowUpRight />
                                                    </span>
                                                </div>
                                            </div>
                                        </button >
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