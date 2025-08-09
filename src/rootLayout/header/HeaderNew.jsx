import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../index.css'

const HeaderNew = () => {
    const location = useLocation();
    const isBlack = location.pathname === '/terms';
    const isBlack1 = location.pathname === '/privacy-Policy';
    const isBlack2 = location.pathname === '/contact';
    return (
        <>
            <header className='w-full p-5 absolute'>
                <nav className={`w-full flex justify-between items-center ${isBlack || isBlack1 ||isBlack2 ? 'text-black' : 'text-white' }`}>
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
                                        <div className='dropdownMenuItem '>
                                            <span className='mt-0'>Pivot Doors</span>
                                            <p>Lorem, ipsum dolor ipsum dolor.</p>
                                        </div>
                                        <div className='dropdownMenuItem '>
                                            <span>Sliding Doors</span>
                                            <p>Lorem, ipsum dolor ipsum dolor.</p>
                                        </div>
                                        <div className='dropdownMenuItem '>
                                            <span>Hinged Doors</span>
                                            <p>Lorem, ipsum dolor ipsum dolor.</p>
                                        </div>
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



                </nav>
            </header>
        </>
    )
}

export default HeaderNew