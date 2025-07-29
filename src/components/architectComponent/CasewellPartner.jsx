import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { PiChatCenteredThin } from 'react-icons/pi'

gsap.registerPlugin(ScrollTrigger, SplitText);
const CasewellPartner = () => {
    const casewellPartner = useRef(null);
    const partnerHeading = useRef(null);
    const partnerDescription = useRef(null);
    useEffect(() => {
  const handleLoad = () => {
    const heading = partnerHeading.current;
    const split = new SplitText(partnerDescription.current, { type: "words" });
    const words = split.words;
    const cards = casewellPartner.current?.querySelectorAll(".casewellcoll");

    if (!heading || !cards) return;

    gsap.from(heading, {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: casewellPartner.current,
        start: "top 80%",
        end: "+=100",
        scrub: true,
        markers: true,
      },
    });
    gsap.from(words, {
    x: 30,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: casewellPartner.current,
      start: "top 60%",
      end: "+=200",
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
            <section ref={casewellPartner} id="casewellPartner" className='w-full h-full bg-[#F2F0EA]'>
                <div className="casewellPartnerWrapper p-14 font-myFont">
                    <div className="casewellpartnerHeader flex mb-24">
                        <div className='w-full md:w-1/2'>
                            <h2 ref={partnerHeading} className='text-5xl'>What you get as a Casewell partner</h2>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-end'>
                            <p ref={partnerDescription} className='text-sm mb-8 w-full lg:max-w-72 text-right'>
                                We built Casewell by starting with how you actually work, not how suppliers traditionally operate.
                            </p>
                        </div>
                    </div>
                    {/* ================================= */}
                    <div className="casewellContent flex flex-col gap-8 md:gap-14">
                        <div className="casewellrow flex flex-col md:flex-row gap-8">
                            <div className="casewellcoll w-full md:w-1/2 flex flex-col gap-7">
                                <div className="iconWrapper text-8xl">
                                    <span>
                                        <svg width="71" height="62" viewBox="0 0 71 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M70 1V50.6262H24.7188L14.4766 60V50.6262H1V1H70Z" stroke="black" />
                                        </svg>

                                    </span>
                                </div>
                                <h3 className='text-3xl'>Full-Service Support</h3>
                                <p>We’re not just a materials provider — we’re your backend support team. You get the benefits of design guidance, showroom access, and fulfillment coordination as if you had it all in-house, but without the overhead. That means less stress, fewer errors, and more time to focus on what you do best.</p>
                            </div>
                            <div className="casewellcoll w-full md:w-1/2 flex flex-col gap-7">
                                <div className="iconWrapper text-8xl">
                                    <span>
                                        <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5 1H1V45.5H30.5V1Z" stroke="black" />
                                            <path d="M63.5 1H34.5V21.5H63.5V1Z" stroke="black" />
                                            <path d="M63.5 64.5V25.5H34.5V64.5H63.5Z" stroke="black" />
                                            <path d="M1 48.5V64.5H30.5V48.5H1Z" stroke="black" />
                                        </svg>
                                    </span>
                                </div>
                                <h3 className='text-3xl'>Full-Service Support</h3>
                                <p>We’re not just a materials provider — we’re your backend support team. You get the benefits of design guidance, showroom access, and fulfillment coordination as if you had it all in-house, but without the overhead. That means less stress, fewer errors, and more time to focus on what you do best.</p>
                            </div>

                        </div>
                        <div className="casewellrow flex flex-col md:flex-row gap-8">
                            <div className="casewellcoll w-full md:w-1/2 flex flex-col gap-7">
                                <div className="iconWrapper text-8xl">
                                    <span>
                                        <svg width="65" height="76" viewBox="0 0 65 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.6992 72.8213C15.6253 68.714 0.500196 58.7404 0.5 37.9707V32.4385C0.5 26.9896 0.500038 22.8087 0.660156 19.7617C0.740768 18.2276 0.864907 16.908 1.06738 15.8193C1.26344 14.7654 1.56698 13.7265 2.12598 12.9014C2.68993 12.0689 3.53604 11.4271 4.42773 10.8906C5.34916 10.3362 6.50579 9.78656 7.87109 9.21191C10.582 8.07088 14.375 6.72452 19.3174 4.97168L19.3184 4.97266L19.3203 4.97168L21.7451 4.11133C24.1604 3.25424 26.1558 2.32586 27.8584 1.64355C29.5854 0.951487 31.0382 0.5 32.5 0.5C33.9618 0.5 35.4146 0.951486 37.1416 1.64355C38.8442 2.32586 40.8396 3.25424 43.2549 4.11133L45.6797 4.97168C50.6235 6.72496 54.4175 8.0707 57.1289 9.21191C58.3234 9.71473 59.3585 10.1982 60.2158 10.6826L60.5723 10.8906C61.4641 11.4271 62.31 12.069 62.874 12.9014C63.433 13.7266 63.7366 14.7654 63.9326 15.8193C64.1351 16.908 64.2593 18.2276 64.3398 19.7617C64.5 22.8089 64.5 26.9902 64.5 32.4395V37.9707C64.4998 58.0926 50.3036 68.0816 41.167 72.4199L40.3008 72.8213L40.21 72.8623H40.209C39.072 73.3773 38.0433 73.8419 36.8662 74.1543C36.1809 74.3361 35.4354 74.7108 34.7617 74.9844C34.0521 75.2726 33.321 75.5 32.5 75.5C31.679 75.5 30.9479 75.2726 30.2383 74.9844C29.5646 74.7108 28.8191 74.3361 28.1338 74.1543C26.9567 73.8419 25.9283 73.3773 24.791 72.8623H24.79L24.6992 72.8213ZM27.9648 44.3281L20.3037 38.4766L20 38.874L19.6963 39.2705L27.7021 45.3857L28.0459 45.6484L28.3555 45.3457L48.8496 25.2539L48.1504 24.5391L27.9648 44.3281Z" stroke="black" />
                                        </svg>

                                    </span>
                                </div>
                                <h3 className='text-3xl'>Full-Service Support</h3>
                                <p>We’re not just a materials provider — we’re your backend support team. You get the benefits of design guidance, showroom access, and fulfillment coordination as if you had it all in-house, but without the overhead. That means less stress, fewer errors, and more time to focus on what you do best.</p>
                            </div>
                            <div className="casewellcoll w-full md:w-1/2 flex flex-col gap-7">
                                <div className="iconWrapper text-8xl">
                                    <span>
                                        <svg width="74" height="43" viewBox="0 0 74 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.7305 0.5C33.4605 0.500166 42.96 9.90713 42.96 21.5C42.96 33.0929 33.4605 42.4998 21.7305 42.5C10.0003 42.5 0.5 33.093 0.5 21.5C0.5 9.90703 10.0003 0.5 21.7305 0.5Z" stroke="black" />
                                            <path d="M52.2695 0.5C63.9995 0.500166 73.499 9.90713 73.499 21.5C73.499 33.0929 63.9995 42.4998 52.2695 42.5C40.5394 42.5 31.0391 33.093 31.0391 21.5C31.0391 9.90703 40.5394 0.5 52.2695 0.5Z" stroke="black" />
                                        </svg>


                                    </span>
                                </div>
                                <h3 className='text-3xl'>Full-Service Support</h3>
                                <p>We’re not just a materials provider — we’re your backend support team. You get the benefits of design guidance, showroom access, and fulfillment coordination as if you had it all in-house, but without the overhead. That means less stress, fewer errors, and more time to focus on what you do best.</p>
                            </div>

                        </div>
                        <div className="casewellrow flex flex-col md:flex-row gap-8">
                            <div className="casewellcoll w-full  flex flex-col gap-7">
                                <div className="iconWrapper text-8xl">
                                    <span>
                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 31H63.5M63.5 31L30.4973 1M63.5 31L30.4973 63" stroke="black" />
                                        </svg>

                                    </span>
                                </div>
                                <h3 className='text-3xl'>Full-Service Support</h3>
                                <p>We’re not just a materials provider — we’re your backend support team. You get the benefits of design guidance, showroom access, and fulfillment coordination as if you had it all in-house, but without the overhead. That means less stress, fewer errors, and more time to focus on what you do best.</p>
                            </div>

                        </div>
                    </div>
                    {/* ================================= */}
                </div>
            </section>
        </>
    )
}

export default CasewellPartner