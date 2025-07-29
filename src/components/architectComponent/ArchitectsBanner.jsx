
import React, { useEffect, useRef } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import BtnComponent from '../homeComponents/utils/BtnComponent'

const ArchitectsBanner = () => {
  // let buttonRef = useRef(null);
  // let iconListRef = useRef(null);
  // useEffect(() => {
  //   const handleMouseEnter = () => {
  //     iconListRef.current.style.transform = ' translate(12px , -12px)';
  //     iconListRef.current.style.transition = 'transform 0.3s ease-in-out';
  //   };

  //   const handleMouseLeave = () => {
  //     iconListRef.current.style.transform = 'translate(0 , 0)';
  //   };

  //   if (buttonRef.current) {
  //     buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
  //     buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
  //   }

  //   return () => {
  //     if (buttonRef.current) {
  //       buttonRef.current.removeEventListener('mouseenter', handleMouseEnter);
  //       buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
  //     }
  //   };
  // }, []);
  return (
    <>
      <div className="architectsBanner">
        <section id="architects" className='w-full h-screen bg-[url("/images/architecBanner.jpg")] bg-cover font-myFont'>
          <div className="architectsWrapperw-full h-full flex items-end p-12 text-white">
            <div className="architectsContent">
              <h2 className='text-4xl'>Join the Casewell</h2>
              <h2 className='text-4xl mb-8'>Trade Program</h2>

              {/* <div ref={buttonRef} className='pro_btn w-fit flex items-center gap-2 border py-2 px-5 bg-white text-black cursor-pointer rounded-full'>
                <span>Join now</span>
                <div className="icon w-[15px] h-[15px] overflow-hidden">
                  <div ref={iconListRef} className='pro_icon_wrapper relative'>
                    <span><MdArrowOutward /></span>
                    <span className='absolute top-[12px] left-[-12px]'><MdArrowOutward /></span>
                  </div>
                </div>
              </div> */}
              <BtnComponent text="join now" />

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ArchitectsBanner