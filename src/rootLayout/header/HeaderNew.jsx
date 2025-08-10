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

    const [isClicked, setIsClicked] = useState(false);

    const expandDropdown = () => {
        setIsClicked(prev => !prev);
        const horizontalBar = nav2Ref.current.querySelectorAll('.horizontalBar');
        const crossBar = nav2Ref.current.querySelectorAll('.crossBar');
        gsap.to(horizontalBar,{
            width: isClicked ? 0 : 30,
            duration:0.5,
            stagger:0.09
        })
        gsap.to(crossBar,{
            width: isClicked ? 30 : 0,
            duration:0.5,
            stagger:0.09
        })

    }
    useEffect(() => {
        gsap.to(dropdownRef.current, {
            height: isClicked ? "auto" : 0,
            duration: 0.5,
            ease: "power1.out"
        });
    }, [isClicked])
    console.log(isClicked);
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
                            <div onClick={expandDropdown} className="bar w-[30px] h-6 flex flex-col justify-between bg-slate-500 relative">
                                <div className={`horizontalBar w-full h-1 bg-white origin-top-left `}></div>
                                <div className={`horizontalBar w-full h-1 bg-white origin-bottom-left `}></div>

                                <div className="crossBar absolute top-1 left-0 w-1 h-0 bg-white rotate-[-55deg] origin-top-left"></div>
                                <div className="crossBar absolute top-1 right-0 w-1 h-0  bg-white rotate-[55deg] origin-top-right"></div>
                            </div>
                        </div>

                        <div ref={dropdownRef} className="absolute top-20 right-0 w-60 h-0 overflow-hidden ">
                            <div className='w-full h-full bg-black '>
                                <ul className='w-full flex flex-col  gap-5 [&>li]:text-xl [&>li]:cursor-pointer [&>li]:text-white'>
                                    <li>Products</li>
                                    <li>Collection</li>
                                    <li>Inspiration</li>
                                    <li>Architects</li>
                                    <li>About Us</li>
                                    <li>Contact</li>
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