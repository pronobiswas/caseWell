import React from 'react'
import BtnComponent from '../../components/homeComponents/utils/BtnComponent'

const Footer = () => {
  return (
    <>
      <footer id="footer" className='w-full h-full p-4 bg-[#F2F0EA]'>
        <div className="footerWrapper pt-12 pb-0 px-12 rounded-[50px] bg-[#E1DBCB]">
          {/* ======footer row one===== */}
          <div className="footerRow flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h2 className='text-5xl font-myFont mb-8 '>You don’t need <br /> another kitchen brand.</h2>
              <BtnComponent text=' Become a  Partner' />
            </div>
            <div className='flex gap-6'>
              <ul className='flex flex-col gap-4 [&>li]:cursor-pointer'>
                <li>How It Works</li>
                <li>Cabinetry</li>
                <li>Inspiration</li>
                <li>Trade Partners</li>
                <li>Contact us</li>
              </ul>
              <ul className='flex flex-col gap-4 [&>li]:cursor-pointer'>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          {/* ======footer row two===== */}
          <div className="footerRow">
            <h1 className='text-center text-[14vw] text-[#fdeddf] font-myFont'>casewell</h1>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
