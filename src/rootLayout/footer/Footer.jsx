import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import BtnComponent from '../../components/homeComponents/utils/BtnComponent'
import { Link } from 'react-router-dom';
import { IoMailUnread } from 'react-icons/io5';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaHeadphones, FaSquarePhone } from 'react-icons/fa6';

const Footer = () => {
  const footerRef = useRef(null)



  return (
    <>
      <footer ref={footerRef} id="footer" className='w-full h-full p-4 bg-[#F2F0EA]'>
        <div className="footerWrapper pt-12 pb-0 px-12 rounded-[50px] bg-[#E1DBCB]">
          {/* ======footer row one===== */}
          <div className="footerRow flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h2 className='text-5xl font-myFont mb-8 '>You don’t need <br /> another kitchen brand.</h2>
              <BtnComponent text=' Become a  Partner' />

            </div>
            {/* ====================== */}
            <div>
              <address className='flex flex-col gap-2'>
                <h4 className='text-2xl mb-5'>Contact Info</h4>
                <p>
                  <b>Email:</b>
                  <a href="mailto:Info@zebranostudio.com" className='hover:underline'>Info@zebranostudio.com</a>
                </p>
                <p>
                  <b>Whatsapp: </b>
                  <a href="tel:+31642997018" className='hover:underline'>+31642997018</a>
                </p>
                <p>
                  <b>Telephone: </b>
                  <a href="tel:+31642997018" className='hover:underline'>+31642997018</a>
                </p>
                <p>
                  <b>company number: </b>
                  <a href="tel:60942037" className='hover:underline'>60942037</a>
                </p>
              </address>
            </div>
            {/* ====================== */}
            <div>
              <div className='flex flex-wrap gap-6'>
                <ul className='flex flex-col gap-4 [&>li]:cursor-pointer'>
                  <li>How It Works</li>
                  <li>Cabinetry</li>
                  <li>Inspiration</li>
                  <li>Trade Partners</li>
                  <li>Contact us</li>
                </ul>
                <ul className='flex flex-col gap-4 [&>li]:cursor-pointer'>
                  <li><Link to='/terms'>Terms & Conditions</Link></li>
                  <li><Link to='/privacy-Policy'>Privacy Policy</Link></li>
                </ul>
              </div>
              {/* ---social icons---- */}
              <div className='flex gap-5 text-4xl py-5'>
                <a href="mailto:Info@zebranostudio.com" title='Info@zebranostudio.com'>
                  <IoMailUnread />
                </a>
                <a href="https://wa.me/31642997018" title='+31642997018'>
                  <FaWhatsappSquare />
                </a>
                <a href="tel:+31642997018" title='+31642997018'>
                  <FaSquarePhone />
                </a>
                <a href="60942037" title='60942037'>
                  <FaHeadphones />
                </a>
              </div>
            </div>

          </div>
          {/* ======footer row two===== */}
          <div className="footerRow">
            <h1 className='text-center text-[14vw] text-[#fdeddf] font-myFont'>Zebrano </h1>
            
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
