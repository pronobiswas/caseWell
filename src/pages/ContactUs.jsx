import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import emailjs from "@emailjs/browser";

import { FiArrowUpRight } from "react-icons/fi";
import { use } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);

const ContactUs = () => {

  const headingRef = useRef();
  const textRef = useRef();
  const text2Ref = useRef();

  const formRef = useRef();
  const thanksYouRef = useRef();
  const mesegeBoxRef = useRef();
  const checkSvgRef = useRef();
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactReason: "",
    consumer: "",
    messagetxt: "",
  });

  // ====collect data ======
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  // ======validate form ======
  const validateForm = (formData) => {
    const { fullName, email, phone, contactReason, consumer, messagetxt } = formData;
    if (!fullName || !email || !phone || !contactReason || !consumer || !messagetxt) {
      alert("All fields are required.");
      return false;
    }
    return true;
  };

  // ======send mail======
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm(formData)) {
      return;
    }
    setThankYouMessage(true);
    setTimeout(() => {
      setThankYouMessage(false);
    }, 3000);


    return;
    emailjs
      .sendForm("service_mw2tclf", "template_ntdsj6g", formRef.current, {
        publicKey: "zSJ4uoM7Xx-2HB2xZ",
      })
      .then(
        (res) => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          if (res.status === 200) {
            setThankYouMessage(true);
            gsap.set(thanksYouRef.current, { autoAlpha: 1, y: 0, position: "fixed" });
            setTimeout(() => {
              setThankYouMessage(false);
            }, 3000);
          }
        },
        (err) => {
          console.log("FAILED...", err.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };
  // ==========animation=========
  useEffect(() => {
    const headingSplit = new SplitText(headingRef.current, {
      type: "lines,words,chars",
      linesClass: "split-line block overflow-hidden",
    });
    gsap.from(headingSplit.words, {
      opacity: 1,
      y: 60,
      stagger: {
        from: "center",
        each: 0.03,
        amount: 0.5,
        ease: "power2.inOut",
      },
      duration: 1,
      ease: "power3.out",
    });

    const textSplit = new SplitText(textRef.current, {
      type: "lines,words",
      linesClass: "split-line block overflow-hidden ",
    });
    const text2Split = new SplitText(text2Ref.current, {
      type: "lines,words",
      linesClass: "split-line block overflow-hidden ",
    });
    gsap.from(textSplit.words, {
      y: 50,
      //   stagger: 0.05,
      stagger: {
        from: "edge",
        each: 0.03,
        amount: 0.5,
        ease: "power2.inOut",
      },
      duration: 1,
      ease: "power3.out",
    });
    
  }, []);


    useEffect(() => {
      if(!checkSvgRef.current) return;
      const circle = checkSvgRef.current.querySelector("circle");
    const path = checkSvgRef.current.querySelector("path");
    gsap.from(mesegeBoxRef.current, {
      opacity: 0.5,
      y: -200,
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const circleLength = circle.getTotalLength();
    gsap.set(circle, {
      strokeDasharray: circleLength,
      strokeDashoffset: circleLength,
      fill: "transparent",
    });
    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.to(circle, { strokeDashoffset: 0, duration: 1.2 })
      .to(path, { strokeDashoffset: 0, duration: 0.8 }, "-=0.6");
    
  }, [thankYouMessage]);


  return (
    <>
      <section id="contactUs" className="w-full h-full bg-bgOne p-5 py-36">
        <div className="contactUsWrapper flex justify-center">
          <div className="formwrapper w-full max-w-3xl font-Poppins text-myCollorOne">
            <h1
              ref={headingRef}
              className="text-5xl text-center mb-6 font-Montserrat text-myColorOne"
            >
              Contact Us
            </h1>
            <p ref={textRef} className="text-center ">
              At Zebrano Studio, we started with a simple idea: to bring
              luxurious, tailor-made doors within reach — without limits. Every
              home deserves a touch of design, and every space should tell a
              story .
            </p>
            <p ref={text2Ref} className="pt-5 text-center">
              Whether you're dreaming big, working on a unique project, or just
              curious about the possibilities — we’d love to hear from you. Use
              the form below to get in touch, especially if you have special
              requests or ideas beyond the ordinary.
            </p>
            <div className="w-full max-w-xl mx-auto pt-5">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="flex flex-col gap-5">
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="fullName"
                      className="text-sm mb-1 text-gray-500"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="p-2"
                      onInput={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm mb-1 text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="p-2"
                      onInput={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-sm mb-1 text-gray-500"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="p-2"
                      onInput={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="contactReason"
                      className="text-sm mb-1 text-gray-500"
                    >
                      Contact reason
                    </label>
                    <select
                      name="contactReason"
                      id="contactReason"
                      className="p-2"
                      onInput={handleInputChange}
                    >
                      <option value="I'm interested in the Trade Partner Program ">
                        I’d like a quote for a special custom door{" "}
                      </option>
                      <option value=" I’d like a quote for cabinetry">
                        {" "}
                        I’d like to partner with Zebrano Studio as a designer{" "}
                      </option>
                      <option value="I have a general question">
                        I have a general question{" "}
                      </option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      className="text-sm mb-1 text-gray-500"
                      htmlFor="consumer"
                    >
                      Consumer
                    </label>
                    <select name="consumer" id="consumer" className="p-2" onInput={handleInputChange}>
                      <option value="Business">Business</option>
                      <option value="Private Customer">Private Customer</option>
                    </select>
                  </div>

                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="messagetxt"
                      className="text-sm mb-1 text-gray-500"
                    >
                      Message
                    </label>
                    <textarea
                      name="messagetxt"
                      onInput={handleInputChange}
                      id="messagetxt"
                      cols="75"
                      rows="5"
                    ></textarea>
                  </div>
                  {/* ======submit===== */}
                  <div className="flex justify-center pt-3 relative">
                    <button
                      type="submit"
                      className="border border-gray-500 rounded-full w-fit h-fit flex items-center gap-2 py-2 px-3 group transition-all duration-500 ease-in-out cursor-pointer hover:bg-bgTwo"
                    >
                      <span>Submit</span>
                      <div className="w-[13px] h-[12px] relative  overflow-hidden">
                        <div className="">
                          <span className="absolute top-0 left-0 group-hover:left-[10px] group-hover:-top-[10px] transition-all duration-500 ease-in-out">
                            <FiArrowUpRight />
                          </span>
                          <span className="absolute top-[10px] -left-[10px] opacity-1 group-hover:opacity-100 group-hover:left-0 group-hover:top-0 transition-all duration-500 ease-in-out">
                            <FiArrowUpRight />
                          </span>
                        </div>
                      </div>
                    </button>


                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {thankYouMessage && (
          <div id="thankYouWrapper" className="w-full h-screen fixed top-60 left-0 z-40  flex items-center justify-center bg-[#00000000]">
            <div ref={mesegeBoxRef} className="bg-white p-5 rounded shadow-md ">
              {/* ------ Thank You Message ------ */}
              <div className="flex items-center gap-5">
                
                <svg ref={checkSvgRef} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="36.5" fill="#D9D9D9" fill-opacity="0.31" stroke="green" stroke-width="7" />
                  <path d="M23 40L35 50.5L57.5 29" stroke="green" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div>
                  <h2 className="text-lg font-semibold">Thank You!</h2>
                  <p>Your message has been sent successfully.</p>
                </div>

              </div>
              {/* ------ Thank You Message ------ */}
              <div className="py-5">
                <p>We will reach out to you within 48 hours.</p>
              </div>
              <button
                onClick={() => setThankYouMessage(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hidden"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ContactUs;
