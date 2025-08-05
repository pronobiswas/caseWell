import React, { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../../App.css";
import "../../index.css";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(SplitText, ScrollTrigger);
const Header = () => {
  const location = useLocation();
  const isBlack = location.pathname === '/terms';
  const isBlack1 = location.pathname === '/privacy-Policy';
  const isBlack2 = location.pathname === '/contact';
  const [isClicked, setIsClicked] = useState(false);
  let [scrollTop, setScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const dropDownMenu = useRef(null);
  const pro_line = useRef(null);
  const rotateDown = useRef(null);
  const rotateUp = useRef(null);
  const menuWrapperRef = useRef(null);
  const menuRef = useRef(null);
  const navmenu2 = useRef(null);

  const progressRef = useRef(null);
  const numberRef = useRef(null);

  // =========scroll effect==========
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollTop(currentScrollY);

      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // ======nav2 menu scrolling======
  //   useEffect(() => {
  //   if (!navmenu2.current) return;


  //   ScrollTrigger.create({
  //     trigger: navmenu2.current,
  //     start: "top top",
  //     end: () => document.body.scrollHeight, 
  //     pin: true,
  //     pinSpacing: true, 
  //   });

  //   if (scrollTop > 100 && isScrollingDown) {
  //     navmenu2.current.classList.remove("hidden");
  //     gsap.to(navmenu2.current, {
  //       y: 0,
  //       duration: 0.01,
  //     });
  //   } else {
  //     navmenu2.current.classList.add("hidden");
  //     gsap.to(navmenu2.current, {
  //       y: -80,
  //       duration: 0.05,
  //     });
  //   }
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, [ scrollTop]);




  useEffect(() => {
    const menuItems = menuWrapperRef.current.querySelectorAll(".menu_item");
    const addressTexts = menuWrapperRef.current.querySelectorAll(".menuWrapper p");
    const menu1Item = menuRef.current.querySelectorAll('li');
    gsap.to(dropDownMenu.current, {
      yPercent: isClicked ? 110 : 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    if (isClicked) {
      gsap.fromTo(
        menuItems,
        { y: 0, opacity: 0 },
        {
          y: 30,
          opacity: 1,
          delay: 0.7,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      gsap.to(pro_line.current, {
        height: window.innerHeight - 80,
        duration: 1,
      });

      // Clean up previous splits if any
      const split = new SplitText(addressTexts, { type: "lines" });

      gsap.from(split.lines, {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuItems, {
        y: 0,
        opacity: 0,
        duration: 1,
      });

      gsap.to(pro_line.current, {
        height: 20,
        duration: 1,
      });

      gsap.to(addressTexts, {
        y: 0,
        duration: 1,
      });
    }
    // ==clicked menu1 items==
    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        setIsClicked(false);
        gsap.to(dropDownMenu.current, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    });

  }, [isClicked]);

  function handleMenuBtn() {
    setIsClicked((prev) => !prev);
  }

  useEffect(() => {
    let obj = { value: 0 };

    const tl = gsap.timeline();

    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    });

    tl.to(obj, {
      value: 100,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        numberRef.current.textContent = `${Math.round(obj.value)}%`;
      },
    }, 0);
    tl.to("#loader", {
      yPercent: -100,
      duration: 1,
      ease: "power2.out",
    });
  }, []);



  return (
    <>
      <header className="w-full z-40">
        <nav id="nav1" className="p-5 bg-[#00000000] absolute top-0 left-0 w-full z-50">
          <div className="navwrapper flex items-center justify-between p-2">
            <div className="logo font-semibold text-3xl text-white"><Link to={'/'}>casewell</Link></div>
            <div className="menu1">
              <ul ref={menuRef} className={`menu1Lis ${isBlack || isBlack1 || isBlack2 ? 'text-black' : 'text-white'}  font-semibold `}>
                <li className="menu1item ">
                  <div className="menu1LinkWrapper">
                    <span>How It Works</span><span>How It Works</span>
                  </div>
                </li>
                <li className="menu1item ">
                  <Link to="cabinetary">
                    <div className="menu1LinkWrapper">
                      <span>Cabinetary</span><span>Cabinetary</span>
                    </div>
                  </Link>
                </li>
                <li className="menu1item ">
                  <Link to="inspiration">
                    <div className="menu1LinkWrapper">
                      <span>Inspiration</span><span>Inspiration</span>
                    </div>
                  </Link>
                </li>
                <li className="menu1item ">
                  <Link to="/architects">
                    <div className="menu1LinkWrapper">
                      <span>Architects</span><span>Architects</span>
                    </div>
                  </Link>
                </li>
                <li className="menu1item ">
                  <Link to="/aboutus">
                    <div className="menu1LinkWrapper">
                      <span>About Us</span><span>About Us</span>
                    </div>
                  </Link>
                </li>
                <li className="menu1item ">
                  <Link to="/contact">
                    <div className="menu1LinkWrapper">
                      <span>Contact us</span><span>Contact us</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* ==nav2== */}
        <nav
          id="navTwo"
          ref={navmenu2}
          className={`w-full bg-blue-500 py-4 absolute top-0 z-50 hidden ${isClicked ? "border-b border-gray-300" : ""
            }`}
        >
          <div className="container flex justify-between">
            <div className="logo w-40 text-3xl font-bold text-white">CASEWELL</div>
            <div className="menu">
              <div
                onClick={handleMenuBtn}
                className="border py-2 px-4 rounded-full flex items-center gap-3 hover:cursor-pointer text-white"
              >
                <div className="w-12 h-6 overflow-hidden">
                  {isClicked ? <span>Close</span> : <span>Menu</span>}
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    ref={rotateDown}
                    className={`w-5 h-[2px] bg-white ${isClicked ? "rotate-45 origin-top-left" : ""
                      }`}
                  ></div>
                  <div
                    ref={rotateUp}
                    className={`w-5 h-[2px] bg-white ${isClicked ? "-rotate-45 origin-bottom-left" : ""
                      }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Dropdown Menu */}
      <div
        ref={dropDownMenu}

        className="w-full h-screen bg-gray-800 absolute left-0 top-100 py-20 z-30 opacity-0 translate-y-[-110%]"
      >
        <div ref={menuWrapperRef} className="menuWrapper flex">
          {/* Address Section */}
          <div className="w-1/2 h-full p-12 lg:py-20 lg:px-36 border-l text-white">
            <div className="mb-12">
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">(+351) 212 071 122</p>
              </div>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">info@wallnut.pt</p>
              </div>
            </div>
            <div className="mb-12">
              <strong>Lisbon</strong>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">Rua Nova do Almada 59, 3.º</p>
              </div>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">1200-288 Lisboa</p>
              </div>
            </div>
            <div className="mb-12">
              <strong>São Paulo</strong>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">Av. Paulista, 1374, 11.º Andar - 104</p>
              </div>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">01310-100 São Paulo, Brazil</p>
              </div>
            </div>

            <div>
              <ul className="w-full flex text-4xl gap-5">
                <li><FaInstagram /></li>
                <li><FaFacebookSquare /></li>
                <li><CiLinkedin /></li>
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <div ref={pro_line} className="pro_line w-[2px] bg-gray-500 h-5"></div>

          {/* Menu Items */}
          <div className="w-1/2 h-full px-12">
            <ul className="text-white text-[5vw] flex flex-col">
              <li className="menu_item"><Link to="/">Home</Link></li>
              <li className="menu_item"><Link to="/architects">Architects</Link></li>
              <li className="menu_item">Services</li>
              <li className="menu_item"><Link to="/cabinetary">Cabinetary</Link> </li>
              <li className="menu_item">About</li>
              <li className="menu_item">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ==loader== */}
      <div id="loader" className="fixed top-0 left-0 w-full h-screen bg-white z-40">
        <div className="loaderWrapper container w-full h-full flex justify-end items-end">

          <div className="loaderRow h-fit w-full">
            <div ref={numberRef} className="incrementNumBox text-[15vw]">
              0%
            </div>
            <div className="incrementProggressBar w-full h-1">
              <div ref={progressRef} className="incrementProgress w-full h-1 bg-black" style={{ width: "0%" }}></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
