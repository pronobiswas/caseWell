import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { gsap } from "gsap";
import '../../index.css'
import TestPage from '../../pages/PreLoader';
import { CiGlobe } from 'react-icons/ci';

const HeaderNew = () => {
    const location = useLocation();
    console.log(location);
    
    const isBlack = location.pathname === '/terms';
    const isBlack1 = location.pathname === '/privacy-Policy';
    const isBlack2 = location.pathname === '/contact';
    const isBlack3 = location.pathname === '/aboutus';
    const isBlack4 = location.pathname === '/aboutus/theMakers';

    const nav2Ref = useRef(null);
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);

    const productDropdownRef = useRef(null);
    const productImgRef = useRef(null);
    const zebranoDropdownRef = useRef(null);
    const zebranoImgRef = useRef(null);


    const [isClicked, setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);

    const productsImgArr = [
        "/images/img1.png",
        "/images/img2.png",
        "/images/img3.png",
        "/images/img4.png",
        "/images/img1.png",
        "/images/img2.png",
    ]
    const zebranoImgArr= [
        "/images/timelineImg1.png",
        "/images/timelineImg2.png",
        "/images/timelineImg3.png",
        "/images/timelineImg4.png",
    ]
    const collectionImgArr= [
        "/images/timelineImg1.png",
        "/images/timelineImg2.png",
        "/images/timelineImg3.png",
        "/images/timelineImg4.png",
    ]
   
    // ====scroll to top autometicly==========
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    // ======loader header======

    // useEffect(() => {

    //     const hasVisited = localStorage.getItem("hasVisited");

    //     if (hasVisited) {
    //         setLoading(false);
    //     } else {
    //         localStorage.setItem("hasVisited", "true");
    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 20000);
    //     }
    //     const handleBeforeUnload = () => {
    //         localStorage.removeItem("hasVisited");
    //     };

    //     window.addEventListener("beforeunload", handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener("beforeunload", handleBeforeUnload);
    //     };
    // }, []);



    console.log('everyThing going on the right way');
    

    // ======change image on hover========
    useEffect(()=>{

        if (!productDropdownRef?.current || !productImgRef?.current) return;
        const list = productDropdownRef.current.querySelectorAll(".linkItem");
        list.forEach((elm,idx)=>{
            elm.addEventListener('mouseenter',()=>{
                productImgRef.current.src = productsImgArr[idx]
            })
        });
         if (!zebranoDropdownRef?.current || !zebranoImgRef?.current) return;
        const zebranoList = zebranoDropdownRef.current.querySelectorAll(".linkItem");
        zebranoList.forEach((elm,idx)=>{
            elm.addEventListener('mouseenter',()=>{
                zebranoImgRef.current.src = zebranoImgArr[idx]
            })
        });

    },[]);
    // ====expand dropdown mmenu======
    const expandDropdown = () => {
        setIsClicked(prev => !prev);
    }
    // =====expand menu=======
    useEffect(() => {
        gsap.to(dropdownRef.current, {
            opacity: isClicked ? 1 : 0,
            width: isClicked ? "100%" : 0,
            duration: 1,
            ease: "power1.in"
        });
    }, [isClicked])
    // =======colapse mobile menu when click link========
    useEffect(() => {
        if (!dropdownRef.current) return;
        const navlink = dropdownRef.current.querySelectorAll('.navLinkItem');
        navlink.forEach((item) => {
            item.addEventListener('click', () => {
                setIsClicked(false);
                gsap.to(dropdownRef.current, {
                    width: isClicked ? "100%" : 0,
                    duration: 1,
                    ease: "power1.in"
                });
            })
        });
    }, []);
// ======animate mobile menu button========
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
            <header className='w-full  fixed top-0 left-0 z-50 bg-bgTwo'>
                <nav className=" hidden lg:block p-5">
                    <div className={`navWrapper w-full flex justify-between items-center ${isBlack || isBlack1 || isBlack2 || isBlack3 || isBlack4 ? 'text-black' : 'text-white'}`}>

                        {/* ======logo====== */}
                        <div className="log w-fit">
                            <Link to="/" >
                                <strong>
                                    <svg width="147" height="52" viewBox="0 0 147 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3191 23.3556H20.8585V25.957H8.75V23.6184L17.2631 10.2965H8.75V7.695H20.8585V10.0337L12.3191 23.3556Z" fill="white" />
                                        <path d="M29.8186 10.1125V15.4727H36.1637V17.9165H29.8186V23.5134H36.9568V25.957H26.8047V7.66879H36.9568V10.1125H29.8186Z" fill="white" />
                                        <mask id="mask0_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_200_4)">
                                            <path d="M52.7959 22.7777C53.3776 22.2873 53.6685 21.6042 53.6685 20.7279C53.6685 19.8346 53.3598 19.1251 52.7431 18.5997C52.1259 18.0741 51.3064 17.8113 50.2843 17.8113H46.3186V23.5134H50.39C51.4121 23.5134 52.2144 23.2683 52.7959 22.7777ZM46.3186 15.3677H50.0464C51.0333 15.3677 51.8045 15.1442 52.3597 14.6977C52.9149 14.251 53.1925 13.6071 53.1925 12.7663C53.1925 11.943 52.9149 11.2993 52.3597 10.835C51.8045 10.3711 51.0333 10.1386 50.0464 10.1386H46.3186V15.3677ZM55.6513 18.1267C56.3386 18.9851 56.6823 19.9573 56.6823 21.0433C56.6823 21.9719 56.4398 22.8084 55.9553 23.5526C55.4703 24.2975 54.7697 24.8841 53.8534 25.3132C52.9368 25.7427 51.8706 25.957 50.6544 25.957H43.3047V7.695H50.3108C51.5621 7.695 52.6372 7.90513 53.5362 8.32571C54.4351 8.74606 55.1134 9.31105 55.5719 10.0203C56.0301 10.7299 56.2593 11.5227 56.2593 12.3986C56.2593 13.4495 55.9771 14.3256 55.4132 15.0262C54.849 15.7269 54.0914 16.2437 53.1397 16.5763C54.1265 16.7516 54.9639 17.2686 55.6513 18.1267Z" fill="white" />
                                        </g>
                                        <mask id="mask1_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask1_200_4)">
                                            <path d="M65.6154 16.261H68.9467C70.0744 16.261 70.925 15.981 71.4979 15.4204C72.0704 14.8599 72.3571 14.1065 72.3571 13.1604C72.3571 12.2146 72.0751 11.4748 71.5112 10.94C70.9468 10.406 70.0922 10.1387 68.9467 10.1387H65.6154V16.261ZM72.1457 25.957L67.9156 18.6523H65.6154V25.957H62.6016V7.695H68.9467C70.3566 7.695 71.5508 7.94055 72.5289 8.4307C73.5072 8.92132 74.2384 9.57824 74.7234 10.4015C75.2079 11.2251 75.4504 12.1448 75.4504 13.1604C75.4504 14.3519 75.1022 15.4334 74.406 16.4057C73.7096 17.3778 72.6389 18.0392 71.1939 18.3895L75.7413 25.957H72.1457Z" fill="white" />
                                        </g>
                                        <mask id="mask2_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask2_200_4)">
                                            <path d="M92.1905 19.7821L89.2029 11.2949L86.189 19.7821H92.1905ZM93.0364 22.2257H85.343L84.021 25.957H80.875L87.458 7.6688H90.9478L97.5309 25.957H94.3584L93.0364 22.2257Z" fill="white" />
                                        </g>
                                        <mask id="mask3_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask3_200_4)">
                                            <path d="M118.127 25.957H115.114L106.045 12.3196V25.957H103.031V7.66887H106.045L115.114 21.2799V7.66887H118.127V25.957Z" fill="white" />
                                        </g>
                                        <mask id="mask4_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask4_200_4)">
                                            <path d="M35.6623 45.3152C34.8727 44.9721 34.2526 44.4851 33.8016 43.8547C33.3503 43.2242 33.125 42.4887 33.125 41.6481H35.7046C35.7608 42.2786 36.0112 42.7972 36.4551 43.2033C36.8991 43.6098 37.5229 43.8126 38.3263 43.8126C39.158 43.8126 39.8063 43.6131 40.2716 43.2137C40.7368 42.8144 40.9693 42.2997 40.9693 41.6693C40.9693 41.179 40.8247 40.7797 40.5359 40.4714C40.2468 40.1634 39.8873 39.9249 39.4576 39.7569C39.0275 39.5888 38.432 39.407 37.6709 39.2105C36.7123 38.9584 35.9335 38.7028 35.3346 38.4434C34.7352 38.1845 34.2245 37.7816 33.8016 37.2351C33.3788 36.6889 33.1674 35.9605 33.1674 35.0498C33.1674 34.2092 33.3788 33.4737 33.8016 32.8432C34.2245 32.2128 34.8165 31.7293 35.5776 31.3932C36.3389 31.057 37.2195 30.8888 38.2206 30.8888C39.6442 30.8888 40.8106 31.2428 41.72 31.9501C42.6291 32.6577 43.133 33.628 43.2317 34.8606H40.5676C40.5253 34.3282 40.2716 33.8728 39.8063 33.4946C39.3414 33.1164 38.7281 32.9272 37.967 32.9272C37.2761 32.9272 36.7123 33.1026 36.2755 33.4525C35.8384 33.8028 35.6199 34.3073 35.6199 34.9656C35.6199 35.4142 35.7574 35.782 36.0323 36.0689C36.3071 36.3562 36.656 36.5838 37.079 36.7518C37.5018 36.9199 38.0795 37.1021 38.8127 37.2981C39.7853 37.5645 40.5782 37.8309 41.1914 38.0968C41.8045 38.363 42.3259 38.7729 42.7559 39.3261C43.1858 39.8798 43.4008 40.6186 43.4008 41.5431C43.4008 42.2858 43.2001 42.9862 42.7983 43.6445C42.3964 44.3033 41.8115 44.8319 41.0434 45.2311C40.2749 45.6304 39.3694 45.8301 38.3263 45.8301C37.3395 45.8301 36.4514 45.6587 35.6623 45.3152Z" fill="white" />
                                        </g>
                                        <mask id="mask5_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask5_200_4)">
                                            <path d="M57.8641 31.0786V33.0329H53.9525V45.6836H51.542V33.0329H47.6094V31.0786H57.8641Z" fill="white" />
                                        </g>
                                        <mask id="mask6_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask6_200_4)">
                                            <path d="M64.8009 31.078V40.3873C64.8009 41.4943 65.0932 42.3279 65.6784 42.8881C66.2632 43.4486 67.0771 43.7287 68.1205 43.7287C69.1777 43.7287 69.9986 43.4486 70.5838 42.8881C71.1686 42.3279 71.4611 41.4943 71.4611 40.3873V31.078H73.8716V40.3452C73.8716 41.5363 73.6106 42.5449 73.0893 43.3714C72.5677 44.1982 71.87 44.8145 70.9962 45.2206C70.1219 45.6272 69.1566 45.8301 68.0994 45.8301C67.0422 45.8301 66.0802 45.6272 65.2132 45.2206C64.3464 44.8145 63.6593 44.1982 63.1517 43.3714C62.6443 42.5449 62.3906 41.5363 62.3906 40.3452V31.078H64.8009Z" fill="white" />
                                        </g>
                                        <mask id="mask7_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask7_200_4)">
                                            <path d="M87.863 42.3422C88.7792 41.4177 89.2373 40.1147 89.2373 38.4336C89.2373 36.7387 88.7792 35.4148 87.863 34.4618C86.9464 33.5093 85.6286 33.0329 83.9091 33.0329H81.5199V43.7293H83.9091C85.6286 43.7293 86.9464 43.2669 87.863 42.3422ZM88.0216 31.9717C89.1983 32.5672 90.1074 33.4217 90.749 34.5354C91.3903 35.6492 91.7112 36.9488 91.7112 38.4336C91.7112 39.9187 91.3903 41.2075 90.749 42.3003C90.1074 43.3929 89.1983 44.2302 88.0216 44.8113C86.8444 45.393 85.4738 45.6836 83.9091 45.6836H79.1094V31.0786H83.9091C85.4738 31.0786 86.8444 31.3763 88.0216 31.9717Z" fill="white" />
                                        </g>
                                        <mask id="mask8_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask8_200_4)">
                                            <path d="M98.629 45.6836H96.2188V31.0786H98.629V45.6836Z" fill="white" />
                                        </g>
                                        <mask id="mask9_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask9_200_4)">
                                            <path d="M113.216 43.0877C113.977 42.6463 114.573 42.0159 115.003 41.1965C115.433 40.3768 115.648 39.4279 115.648 38.3488C115.648 37.2702 115.433 36.3246 115.003 35.5119C114.573 34.6996 113.977 34.0762 113.216 33.6417C112.455 33.2077 111.588 32.9902 110.615 32.9902C109.643 32.9902 108.776 33.2077 108.015 33.6417C107.253 34.0762 106.658 34.6996 106.228 35.5119C105.798 36.3246 105.583 37.2702 105.583 38.3488C105.583 39.4279 105.798 40.3768 106.228 41.1965C106.658 42.0159 107.253 42.6463 108.015 43.0877C108.776 43.5289 109.643 43.7495 110.615 43.7495C111.588 43.7495 112.455 43.5289 113.216 43.0877ZM106.841 44.8739C105.692 44.2365 104.783 43.3471 104.114 42.2051C103.444 41.0635 103.109 39.778 103.109 38.3488C103.109 36.9199 103.444 35.6381 104.114 34.5033C104.783 33.3686 105.692 32.4826 106.841 31.8451C107.99 31.2077 109.248 30.8887 110.615 30.8887C111.997 30.8887 113.262 31.2077 114.411 31.8451C115.559 32.4826 116.465 33.3686 117.128 34.5033C117.79 35.6381 118.121 36.9199 118.121 38.3488C118.121 39.778 117.79 41.0635 117.128 42.2051C116.465 43.3471 115.559 44.2365 114.411 44.8739C113.262 45.5116 111.997 45.8301 110.615 45.8301C109.248 45.8301 107.99 45.5116 106.841 44.8739Z" fill="white" />
                                        </g>
                                        <mask id="mask10_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask10_200_4)">
                                            <path d="M131.101 17.4517L131.592 17.4653C131.631 17.4664 131.668 17.4901 131.676 17.5244C131.683 17.551 131.673 17.5759 131.654 17.592C131.639 17.6048 131.619 17.6121 131.596 17.6112L131.101 17.5933C131.071 17.5921 131.047 17.6136 131.047 17.6411C131.047 17.7476 130.965 17.8388 130.852 17.8475C130.715 17.8583 130.599 17.754 130.599 17.6305V17.2104C130.599 17.0968 130.698 16.9971 130.82 16.9975C130.882 16.9977 130.939 17.0211 130.979 17.0592C131.021 17.0976 131.047 17.1504 131.047 17.2089V17.4004C131.047 17.4279 131.071 17.4508 131.101 17.4517ZM126.37 10.48H135.351L130.08 11.5828V22.412L135.343 23.513H126.37V10.48ZM123.727 26.1406H139.404V7.85239H123.727V26.1406Z" fill="white" />
                                        </g>
                                    </svg>
                                </strong>
                            </Link>
                        </div>

                        {/* =======menu======= */}
                        <div className="menu w-fit flex gap-5 items-center ">
                            <ul className='flex gap-3 lg:gap-6 [&>li]:cursor-pointer text-xl'>

                                <li className="menuItem relative group transition-all duration-300 ">
                                    <Link to='/products'>
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Products</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Products</span>
                                        </div>
                                    </Link>

                                    <div className="dropdownMenu w-min h-auto  bg-[#00000000]  absolute top-7 left-0 pt-5 opacity-0  pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-30 ">

                                        <div  className="dropdounWrapper p-5 bg-white text-black flex flex-col gap-3 shadow-md z-20">
                                            <div className='w-full flex z-30'>
                                                <div ref={productDropdownRef} className='w-40 flex flex-col gap-2'>
                                                    <Link to="/products/PivotDoor" >
                                                        <div className='linkItem'>
                                                            <span className='m-0'>Pivot Doors</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/SlideDoor" >
                                                        <div className='linkItem '>
                                                            <span>Sliding Doors</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/HingedDoors" >
                                                        <div className='linkItem '>
                                                            <span>Hinged Doors</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/flushTowall" >
                                                        <div className='linkItem '>
                                                            <span>Flush-to-wall</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/wallPartition" >
                                                        <div className='linkItem '>
                                                            <span>Wall Partiton</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/biosirie" >
                                                        <div className='linkItem '>
                                                            <span>Biosirie</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/material" >
                                                        <div className='linkItem '>
                                                            <span>Materials</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className='w-56 h-64'>
                                                    <img ref={productImgRef} src="/images/img1.png" alt="png" className='w-full h-full object-cover'/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                {/* ------collections------- */}
                                <li className="menuItem relative group ">
                                    <Link to='/collection'>
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Collection</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Collection</span>
                                        </div>
                                    </Link>
                                    <div className="dropdownMenu w-[500px] h-auto   bg-[#00000000] absolute top-4 right-0 pt-5 opacity-0  pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-30 ">

                                        <div className="dropdounWrapper p-5 bg-white flex flex-col gap-3 shadow-md">
                                            <Link to='/collections/GlassCollection'>
                                                <div className='dropdownMenuItem '>

                                                    <div className='w-full flex'>
                                                        <div className='w-2/3 [&>p]:text-xs text-colorOne'>
                                                            <span className='mt-0'>Glass Collection</span>
                                                            <p className='mt-2 mb-1'>Design doors made of glass – combining transparency, elegance and modern functionality.</p>
                                                            <p>Discover our collection of luxury glass doors, including pivot and sliding models. Made with safety glass and refined finishes for a timeless, open feel.</p>
                                                        </div>
                                                        <div className='w-1/3' >
                                                            <img src="/images/glassCollection01.webp" alt="" className='w-full h-full object-cover' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>
                                            <Link to='/collections/FineerCollection'>
                                                <div className='dropdownMenuItem '>
                                                    <div className='w-full flex'>

                                                        <div className='w-2/3 [&>p]:text-xs text-colorOne'>
                                                            <span>Fineer Collection</span>
                                                            <p className='mt-2 mb-1'>Wood veneer doors with rich textures, natural grains and architectural precision.</p>
                                                            <p>Explore handcrafted fineer doors in walnut, oak, zebrano and more. Warm, minimal and made for design interiors.</p>
                                                        </div>
                                                        <div className='w-1/3'>
                                                            <img src="/images/FineerCollection01.webp" alt="webp" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to='/collections/ThreeDCollection'>
                                                <div className='dropdownMenuItem '>
                                                    <div className='w-full flex'>
                                                        <div className='w-2/3 [&>p]:text-xs text-colorOne'>
                                                            <span>3D Collection</span>
                                                            <p className='mt-2 mb-1'>Textured doors with depth – sculptural surfaces that make a statement.</p>
                                                            <p>Our 3D panel doors combine bold patterns with refined materials. Ideal for feature walls and spaces that need artistic dimension.</p>

                                                        </div>
                                                        <div className='w-1/3 flex'>
                                                            <img src="/images/threeDCollections.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/collections/AtelierCollection" >
                                                <div className='dropdownMenuItem '>
                                                    <div className='w-full flex'>
                                                        <div className='w-2/3 [&>p]:text-xs text-colorOne'>
                                                            <span>Atelier Collection</span>
                                                            <p className='mt-2 mb-1'>Work with Zebrano Studio to create bespoke doors from glass, wood, stone or metal. Tailored to your architecture, taste and imagination.</p>
                                                            <p>Work with Zebrano Studio to create bespoke doors from glass, wood, stone or metal. Tailored to your architecture, taste and imagination.</p>
                                                        </div>
                                                        <div className='w-1/3 '>
                                                            <img src="/images/AtelierCollection.jpg" alt="" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </li>
                                {/* ------inspiration---------- */}
                                <li className="menuItem relative group">
                                    <Link to='/inspiration'>
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Inspiration</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Inspiration</span>
                                        </div>
                                    </Link>
                                </li>
                                {/* ------architects---------- */}
                                <li className="menuItem relative group">
                                    <Link to="/architects">
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Architects</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Architects</span>
                                        </div>
                                    </Link>
                                </li>
                                {/* ------aboutus---------- */}
                                <li className="menuItem relative group ">
                                    <Link to="/aboutus">
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Zebrano</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Zebrano</span>
                                        </div>
                                    </Link>
                                    <div className="dropdownMenu w-min h-auto  bg-[#00000000]  absolute top-4 left-0 pt-5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-30 ">

                                        <div  className="dropdounWrapper p-5 bg-white text-black flex flex-col gap-3 shadow-md z-20">
                                            <div className='w-full flex z-30'>
                                                <div ref={zebranoDropdownRef} className='w-40 flex flex-col gap-2'>
                                                    <Link to="/aboutus/ourStory" >
                                                        <div className='linkItem'>
                                                            <span className='m-0'>Our story</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/aboutus/theMakers" >
                                                        <div className='linkItem '>
                                                            <span>Meet the makers</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/aboutus/ConsciousNcrafts" >
                                                        <div className='linkItem '>
                                                            <span>Concious Craft</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="/aboutus/services" >
                                                        <div className='linkItem '>
                                                            <span>service</span>
                                                        </div>
                                                    </Link>
                                                    
                                                </div>
                                                <div className='w-56 h-64'>
                                                    <img ref={zebranoImgRef} src="/images/img1.png" alt="png" className='w-full h-full object-cover'/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                {/* ------contact us--------- */}
                                <li className="menuItem relative group ">
                                    <Link to="/contact">
                                        <div className="navLink w-full h-7  relative flex flex-col overflow-hidden z-20 ">
                                            <span className='group-hover:translate-y-[-22px] transition-all duration-300'>Contact</span>
                                            <span className='group-hover:translate-y-[-28px] transition-all duration-300'>Contact</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* ======button====== */}
                        <div className='flex  items-center gap-6'>
                            <div className='flex items-center gap-1 text-xl'>
                                <CiGlobe />
                                <span>En</span>
                            </div>
                            <div className="configaretor w-fit h-fit py-2 px-3 border bg-transparent text-white hover:bg-white hover:text-black  cursor-pointer rounded-full z-30">
                                Configure Now
                            </div>
                        </div>
                    </div>
                </nav>
                {/* ===mobile menu=== */}
                <nav ref={nav2Ref} className='block lg:hidden'>
                    <div className="navWrapper w-full p-5  bg-[#00000002] flex items-center justify-between relative z-50">
                        <div className="logo text-3xl text-white">
                            <Link to="/">
                                <span>
                                    <svg width="147" height="52" viewBox="0 0 147 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3191 23.3556H20.8585V25.957H8.75V23.6184L17.2631 10.2965H8.75V7.695H20.8585V10.0337L12.3191 23.3556Z" fill="white" />
                                        <path d="M29.8186 10.1125V15.4727H36.1637V17.9165H29.8186V23.5134H36.9568V25.957H26.8047V7.66879H36.9568V10.1125H29.8186Z" fill="white" />
                                        <mask id="mask0_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_200_4)">
                                            <path d="M52.7959 22.7777C53.3776 22.2873 53.6685 21.6042 53.6685 20.7279C53.6685 19.8346 53.3598 19.1251 52.7431 18.5997C52.1259 18.0741 51.3064 17.8113 50.2843 17.8113H46.3186V23.5134H50.39C51.4121 23.5134 52.2144 23.2683 52.7959 22.7777ZM46.3186 15.3677H50.0464C51.0333 15.3677 51.8045 15.1442 52.3597 14.6977C52.9149 14.251 53.1925 13.6071 53.1925 12.7663C53.1925 11.943 52.9149 11.2993 52.3597 10.835C51.8045 10.3711 51.0333 10.1386 50.0464 10.1386H46.3186V15.3677ZM55.6513 18.1267C56.3386 18.9851 56.6823 19.9573 56.6823 21.0433C56.6823 21.9719 56.4398 22.8084 55.9553 23.5526C55.4703 24.2975 54.7697 24.8841 53.8534 25.3132C52.9368 25.7427 51.8706 25.957 50.6544 25.957H43.3047V7.695H50.3108C51.5621 7.695 52.6372 7.90513 53.5362 8.32571C54.4351 8.74606 55.1134 9.31105 55.5719 10.0203C56.0301 10.7299 56.2593 11.5227 56.2593 12.3986C56.2593 13.4495 55.9771 14.3256 55.4132 15.0262C54.849 15.7269 54.0914 16.2437 53.1397 16.5763C54.1265 16.7516 54.9639 17.2686 55.6513 18.1267Z" fill="white" />
                                        </g>
                                        <mask id="mask1_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask1_200_4)">
                                            <path d="M65.6154 16.261H68.9467C70.0744 16.261 70.925 15.981 71.4979 15.4204C72.0704 14.8599 72.3571 14.1065 72.3571 13.1604C72.3571 12.2146 72.0751 11.4748 71.5112 10.94C70.9468 10.406 70.0922 10.1387 68.9467 10.1387H65.6154V16.261ZM72.1457 25.957L67.9156 18.6523H65.6154V25.957H62.6016V7.695H68.9467C70.3566 7.695 71.5508 7.94055 72.5289 8.4307C73.5072 8.92132 74.2384 9.57824 74.7234 10.4015C75.2079 11.2251 75.4504 12.1448 75.4504 13.1604C75.4504 14.3519 75.1022 15.4334 74.406 16.4057C73.7096 17.3778 72.6389 18.0392 71.1939 18.3895L75.7413 25.957H72.1457Z" fill="white" />
                                        </g>
                                        <mask id="mask2_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask2_200_4)">
                                            <path d="M92.1905 19.7821L89.2029 11.2949L86.189 19.7821H92.1905ZM93.0364 22.2257H85.343L84.021 25.957H80.875L87.458 7.6688H90.9478L97.5309 25.957H94.3584L93.0364 22.2257Z" fill="white" />
                                        </g>
                                        <mask id="mask3_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask3_200_4)">
                                            <path d="M118.127 25.957H115.114L106.045 12.3196V25.957H103.031V7.66887H106.045L115.114 21.2799V7.66887H118.127V25.957Z" fill="white" />
                                        </g>
                                        <mask id="mask4_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask4_200_4)">
                                            <path d="M35.6623 45.3152C34.8727 44.9721 34.2526 44.4851 33.8016 43.8547C33.3503 43.2242 33.125 42.4887 33.125 41.6481H35.7046C35.7608 42.2786 36.0112 42.7972 36.4551 43.2033C36.8991 43.6098 37.5229 43.8126 38.3263 43.8126C39.158 43.8126 39.8063 43.6131 40.2716 43.2137C40.7368 42.8144 40.9693 42.2997 40.9693 41.6693C40.9693 41.179 40.8247 40.7797 40.5359 40.4714C40.2468 40.1634 39.8873 39.9249 39.4576 39.7569C39.0275 39.5888 38.432 39.407 37.6709 39.2105C36.7123 38.9584 35.9335 38.7028 35.3346 38.4434C34.7352 38.1845 34.2245 37.7816 33.8016 37.2351C33.3788 36.6889 33.1674 35.9605 33.1674 35.0498C33.1674 34.2092 33.3788 33.4737 33.8016 32.8432C34.2245 32.2128 34.8165 31.7293 35.5776 31.3932C36.3389 31.057 37.2195 30.8888 38.2206 30.8888C39.6442 30.8888 40.8106 31.2428 41.72 31.9501C42.6291 32.6577 43.133 33.628 43.2317 34.8606H40.5676C40.5253 34.3282 40.2716 33.8728 39.8063 33.4946C39.3414 33.1164 38.7281 32.9272 37.967 32.9272C37.2761 32.9272 36.7123 33.1026 36.2755 33.4525C35.8384 33.8028 35.6199 34.3073 35.6199 34.9656C35.6199 35.4142 35.7574 35.782 36.0323 36.0689C36.3071 36.3562 36.656 36.5838 37.079 36.7518C37.5018 36.9199 38.0795 37.1021 38.8127 37.2981C39.7853 37.5645 40.5782 37.8309 41.1914 38.0968C41.8045 38.363 42.3259 38.7729 42.7559 39.3261C43.1858 39.8798 43.4008 40.6186 43.4008 41.5431C43.4008 42.2858 43.2001 42.9862 42.7983 43.6445C42.3964 44.3033 41.8115 44.8319 41.0434 45.2311C40.2749 45.6304 39.3694 45.8301 38.3263 45.8301C37.3395 45.8301 36.4514 45.6587 35.6623 45.3152Z" fill="white" />
                                        </g>
                                        <mask id="mask5_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask5_200_4)">
                                            <path d="M57.8641 31.0786V33.0329H53.9525V45.6836H51.542V33.0329H47.6094V31.0786H57.8641Z" fill="white" />
                                        </g>
                                        <mask id="mask6_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask6_200_4)">
                                            <path d="M64.8009 31.078V40.3873C64.8009 41.4943 65.0932 42.3279 65.6784 42.8881C66.2632 43.4486 67.0771 43.7287 68.1205 43.7287C69.1777 43.7287 69.9986 43.4486 70.5838 42.8881C71.1686 42.3279 71.4611 41.4943 71.4611 40.3873V31.078H73.8716V40.3452C73.8716 41.5363 73.6106 42.5449 73.0893 43.3714C72.5677 44.1982 71.87 44.8145 70.9962 45.2206C70.1219 45.6272 69.1566 45.8301 68.0994 45.8301C67.0422 45.8301 66.0802 45.6272 65.2132 45.2206C64.3464 44.8145 63.6593 44.1982 63.1517 43.3714C62.6443 42.5449 62.3906 41.5363 62.3906 40.3452V31.078H64.8009Z" fill="white" />
                                        </g>
                                        <mask id="mask7_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask7_200_4)">
                                            <path d="M87.863 42.3422C88.7792 41.4177 89.2373 40.1147 89.2373 38.4336C89.2373 36.7387 88.7792 35.4148 87.863 34.4618C86.9464 33.5093 85.6286 33.0329 83.9091 33.0329H81.5199V43.7293H83.9091C85.6286 43.7293 86.9464 43.2669 87.863 42.3422ZM88.0216 31.9717C89.1983 32.5672 90.1074 33.4217 90.749 34.5354C91.3903 35.6492 91.7112 36.9488 91.7112 38.4336C91.7112 39.9187 91.3903 41.2075 90.749 42.3003C90.1074 43.3929 89.1983 44.2302 88.0216 44.8113C86.8444 45.393 85.4738 45.6836 83.9091 45.6836H79.1094V31.0786H83.9091C85.4738 31.0786 86.8444 31.3763 88.0216 31.9717Z" fill="white" />
                                        </g>
                                        <mask id="mask8_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask8_200_4)">
                                            <path d="M98.629 45.6836H96.2188V31.0786H98.629V45.6836Z" fill="white" />
                                        </g>
                                        <mask id="mask9_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask9_200_4)">
                                            <path d="M113.216 43.0877C113.977 42.6463 114.573 42.0159 115.003 41.1965C115.433 40.3768 115.648 39.4279 115.648 38.3488C115.648 37.2702 115.433 36.3246 115.003 35.5119C114.573 34.6996 113.977 34.0762 113.216 33.6417C112.455 33.2077 111.588 32.9902 110.615 32.9902C109.643 32.9902 108.776 33.2077 108.015 33.6417C107.253 34.0762 106.658 34.6996 106.228 35.5119C105.798 36.3246 105.583 37.2702 105.583 38.3488C105.583 39.4279 105.798 40.3768 106.228 41.1965C106.658 42.0159 107.253 42.6463 108.015 43.0877C108.776 43.5289 109.643 43.7495 110.615 43.7495C111.588 43.7495 112.455 43.5289 113.216 43.0877ZM106.841 44.8739C105.692 44.2365 104.783 43.3471 104.114 42.2051C103.444 41.0635 103.109 39.778 103.109 38.3488C103.109 36.9199 103.444 35.6381 104.114 34.5033C104.783 33.3686 105.692 32.4826 106.841 31.8451C107.99 31.2077 109.248 30.8887 110.615 30.8887C111.997 30.8887 113.262 31.2077 114.411 31.8451C115.559 32.4826 116.465 33.3686 117.128 34.5033C117.79 35.6381 118.121 36.9199 118.121 38.3488C118.121 39.778 117.79 41.0635 117.128 42.2051C116.465 43.3471 115.559 44.2365 114.411 44.8739C113.262 45.5116 111.997 45.8301 110.615 45.8301C109.248 45.8301 107.99 45.5116 106.841 44.8739Z" fill="white" />
                                        </g>
                                        <mask id="mask10_200_4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="147" height="52">
                                            <path d="M0 6.16245e-06H147V52H0V6.16245e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask10_200_4)">
                                            <path d="M131.101 17.4517L131.592 17.4653C131.631 17.4664 131.668 17.4901 131.676 17.5244C131.683 17.551 131.673 17.5759 131.654 17.592C131.639 17.6048 131.619 17.6121 131.596 17.6112L131.101 17.5933C131.071 17.5921 131.047 17.6136 131.047 17.6411C131.047 17.7476 130.965 17.8388 130.852 17.8475C130.715 17.8583 130.599 17.754 130.599 17.6305V17.2104C130.599 17.0968 130.698 16.9971 130.82 16.9975C130.882 16.9977 130.939 17.0211 130.979 17.0592C131.021 17.0976 131.047 17.1504 131.047 17.2089V17.4004C131.047 17.4279 131.071 17.4508 131.101 17.4517ZM126.37 10.48H135.351L130.08 11.5828V22.412L135.343 23.513H126.37V10.48ZM123.727 26.1406H139.404V7.85239H123.727V26.1406Z" fill="white" />
                                        </g>
                                    </svg>
                                </span>
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


                        <div ref={dropdownRef} className="absolute top-[75px] right-0 w-60 h-[calc(100vh-75px)]  overflow-hidden opacity-0 ">
                            <div className='w-full h-full bg-[#00000083] backdrop-blur-sm flex justify-center items-center '>
                                <ul className='w-fit flex flex-col  gap-6 [&>li]:text-2xl [&>li]:font-myFont [&>li]:cursor-pointer [&>li]:text-white '>

                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <Link to="/products" >
                                            <div className="gggg">
                                                <div className='red w-fit '>
                                                    Products
                                                </div>
                                                <div className='blue w-fit '>
                                                    Products
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <Link to="/collection" >
                                            <div className="gggg">
                                                <div className='red w-fit '>
                                                    Collection
                                                </div>
                                                <div className='blue w-fit '>
                                                    Collection
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <Link to="/inspiration" >
                                            <div className="gggg">
                                                <div className='red w-fit '>
                                                    Inspiration
                                                </div>
                                                <div className='blue w-fit '>
                                                    Inspiration
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <Link to="/architects" >
                                            <div className="gggg">
                                                <div className='red w-fit '>
                                                    Architects
                                                </div>
                                                <div className='blue w-fit '>
                                                    Architects
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <Link to="/aboutus" >
                                            <div className="gggg">
                                                <div className='red w-fit '>
                                                    About Us
                                                </div>
                                                <div className='blue w-fit '>
                                                    About Us
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='navLinkItem w-fit px-5 relative'>
                                        <Link to="/contact" >
                                            <div className="gggg">
                                                <div className='red w-fit '>
                                                    Contact
                                                </div>
                                                <div className='blue w-fit '>
                                                    Contact
                                                </div>
                                            </div>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div>
                {
                    loading ?
                        <section id="loader">
                            <TestPage />
                        </section>
                        :
                        ""
                }

                

            </div>
        </>
    )
}

export default HeaderNew