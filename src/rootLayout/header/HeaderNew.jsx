import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { gsap } from "gsap";
import '../../index.css'

const HeaderNew = () => {
    const location = useLocation();
    const isBlack = location.pathname === '/terms';
    const isBlack1 = location.pathname === '/privacy-Policy';
    const isBlack2 = location.pathname === '/contact';

    const nav2Ref = useRef(null);
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);


    const [isClicked, setIsClicked] = useState(false);

    const expandDropdown = () => {
        setIsClicked(prev => !prev);

    }
    useEffect(() => {
        gsap.to(dropdownRef.current, {
            width: isClicked ? "100%" : 0,
            duration: 1,
            ease: "power1.in"
        });
    }, [isClicked])

    useEffect(() => {
        if (!iconRef.current) return;

        const horizontalLines = iconRef.current.querySelectorAll('.horizontalLine');
        const crossLines = iconRef.current.querySelectorAll('.crosLine');

        if (isClicked) {
            gsap.to(horizontalLines, {
                strokeDashoffset: 100,
                duration: 0.3,
                stagger: 0.1,
                ease: "power2.in"
            });
            gsap.to(crossLines, {
                strokeDashoffset: 0,
                duration: 0.3,
                delay: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        } else {
            gsap.to(crossLines, {
                strokeDashoffset: 100,
                duration: 0.3,
                stagger: 0.1,
                ease: "power2.in"
            });
            gsap.to(horizontalLines, {
                strokeDashoffset: 0,
                duration: 0.3,
                delay: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }, [isClicked]);







    return (
        <>
            <header className='w-full  absolute'>
                <nav className=" hidden lg:block p-5">
                    <div className={`navWrapper w-full flex justify-between items-center ${isBlack || isBlack1 || isBlack2 ? 'text-black' : 'text-white'}`}>

                        {/* ======logo====== */}
                        <div className="log w-fit">
                            <strong>Zebrano Studio</strong>
                        </div>
                        {/* =======menu======= */}
                        <div className="menu w-fit flex gap-5 items-center">
                            <ul className='flex gap-3 lg:gap-6 [&>li]:cursor-pointer text-xl'>

                                <li className="menuItem relative group transition-all duration-300">
                                    <Link to='/products'>
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Products</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Products</span>
                                        </div>
                                    </Link>

                                    <div className="dropdownMenu w-52  bg-[#e1dbcb48] absolute top-8 right-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-30 ">

                                        <div className="dropdounWrapper flex flex-col gap-3 shadow-md">
                                            <Link to="/products/PivotDoor" >
                                                <div className='dropdownMenuItem '>
                                                    <span className='mt-0'>Pivot Doors</span>
                                                    <p>Lorem, ipsum dolor ipsum dolor.</p>
                                                </div>
                                            </Link>
                                            <Link to="/products/SlideDoor" >
                                                <div className='dropdownMenuItem '>
                                                    <span>Sliding Doors</span>
                                                    <p>Lorem, ipsum dolor ipsum dolor.</p>
                                                </div>
                                            </Link>
                                            <Link to="/products/HingedDoors" >
                                                <div className='dropdownMenuItem '>
                                                    <span>Hinged Doors</span>
                                                    <p>Lorem, ipsum dolor ipsum dolor.</p>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </li>
                                <li className="menuItem relative group">
                                    <Link to='/'>
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Collection</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Collection</span>
                                        </div>
                                    </Link>
                                    <div className="dropdownMenu w-52  bg-[#e1dbcb48] absolute top-8 right-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-30 ">

                                        <div className="dropdounWrapper flex flex-col gap-3 shadow-md">
                                            <Link to='/collections/GlassCollection'>
                                                <div className='dropdownMenuItem '>
                                                    <span className='mt-0'>Glass Collection</span>
                                                    <p>Lorem, ipsum dolor ipsum dolor.</p>
                                                </div>
                                            </Link>
                                            <Link to='/collections/FineerCollection'>
                                                <div className='dropdownMenuItem '>
                                                    <span>Veneer Collection</span>
                                                    <p>Lorem, ipsum dolor ipsum dolor.</p>
                                                </div>
                                            </Link>
                                            <Link to='/collections/ThreeDCollection'>
                                                <div className='dropdownMenuItem '>
                                                    <span>3D Collection</span>
                                                    <p>Lorem, ipsum dolor ipsum dolor.</p>
                                                </div>
                                            </Link>
                                            <Link to="/collections/AtelierCollection" >
                                                <div className='dropdownMenuItem '>
                                                    <span>Atelier Collection</span>
                                                    <p>Lorem, ipsum dolor ipsum dolor.</p>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </li>
                                <li className="menuItem relative group">
                                    <Link to='/inspiration'>
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Inspiration</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Inspiration</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="menuItem relative group">
                                    <Link to="/architects">
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Architects</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Architects</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="menuItem relative group ">
                                    <Link to="/aboutus">
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>About us</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>About us</span>
                                        </div>
                                    </Link>
                                    <div className="dropdownMenu w-52  bg-[#e1dbcb48] absolute top-8 right-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-30 rounded-[10px]">

                                        <div className="dropdounWrapper flex flex-col gap-1 shadow-md">
                                            <div className='dropdownMenuItem '>
                                                <span className='mt-0'>Our story</span>
                                            </div>
                                            <div className='dropdownMenuItem '>
                                                <span>Meet the makers</span>
                                            </div>
                                            <div className='dropdownMenuItem '>
                                                <span>Conscious crafts</span>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li className="menuItem relative group ">
                                    <Link to="/contact">
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Contact</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Contact</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                            <div className="configaretor w-fit h-fit py-2 px-3 border bg-transparent text-white hover:bg-white hover:text-black  cursor-pointer rounded-full z-30">
                                configure now
                            </div>
                        </div>
                    </div>
                </nav>
                {/* ===mobile menu=== */}
                <nav ref={nav2Ref} className='block lg:hidden'>
                    <div className="navWrapper w-full p-5  bg-[#0000006e] flex items-center justify-between relative z-50">
                        <div className="logo text-3xl text-white">
                            <Link to="/">
                                <span>Zebrano Studio</span>
                            </Link>
                        </div>
                        <div className="menuBar">


                            <span onClick={expandDropdown}>
                                <svg id='menuIcon' ref={iconRef} width="50" height="35" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="50" height="45" fill="transparent" />
                                    <line className='horizontalLine' x1="2.5" y1="12.5" x2="47.5" y2="12.5" stroke="white" stroke-width="3" stroke-linecap="round" />
                                    <line className='horizontalLine' x1="2.53092" y1="31.5316" x2="47.5316" y2="32.4691" stroke="white" stroke-width="3" stroke-linecap="round" />
                                    <line className='crosLine' x1="1.9144" y1="2.12114" x2="47.8731" y2="42.8825" stroke="white" stroke-width="3" stroke-linecap="round" />
                                    <line className='crosLine' x1="2.11638" y1="42.8819" x2="47.8819" y2="1.88362" stroke="white" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </span>

                        </div>


                        <div ref={dropdownRef} className="absolute top-[75px] right-0 w-60 h-[calc(100vh-75px)]  overflow-hidden ">
                            <div className='w-full h-full bg-[#00000083] backdrop-blur-sm flex justify-center items-center '>
                                <ul className='w-fit flex flex-col  gap-5 [&>li]:text-xl [&>li]:cursor-pointer [&>li]:text-white'>

                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <div className="gggg">
                                            <div className='red w-fit '>
                                                products
                                            </div>
                                            <div className='blue w-fit '>
                                                products
                                            </div>
                                        </div>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <div className="gggg">
                                            <div className='red w-fit '>
                                                Collection
                                            </div>
                                            <div className='blue w-fit '>
                                                Collection
                                            </div>
                                        </div>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <div className="gggg">
                                            <div className='red w-fit '>
                                                Inspiration
                                            </div>
                                            <div className='blue w-fit '>
                                                Inspiration
                                            </div>
                                        </div>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <div className="gggg">
                                            <div className='red w-fit '>
                                                Architects
                                            </div>
                                            <div className='blue w-fit '>
                                                Architects
                                            </div>
                                        </div>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <div className="gggg">
                                            <div className='red w-fit '>
                                                About Us
                                            </div>
                                            <div className='blue w-fit '>
                                                About Us
                                            </div>
                                        </div>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <div className="gggg">
                                            <div className='red w-fit '>
                                                Contact
                                            </div>
                                            <div className='blue w-fit '>
                                                Contact
                                            </div>
                                        </div>
                                    </li>
 
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderNew