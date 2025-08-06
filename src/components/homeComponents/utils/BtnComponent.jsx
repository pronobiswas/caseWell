import React, { useEffect, useRef } from 'react'
import { MdArrowOutward } from 'react-icons/md'

const BtnComponent = ({ text = "", bg="white" }) => {
      let buttonRef = useRef(null);
      let iconListRef = useRef(null);
      useEffect(() => {
        const handleMouseEnter = () => {
          iconListRef.current.style.transform = ' translate(12px , -12px)';
          iconListRef.current.style.transition = 'transform 0.3s ease-in-out';
        };
    
        const handleMouseLeave = () => {
          iconListRef.current.style.transform = 'translate(0 , 0)';
        };
    
        if (buttonRef.current) {
          buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
          buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
        }
    
        return () => {
          if (buttonRef.current) {
            buttonRef.current.removeEventListener('mouseenter', handleMouseEnter);
            buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
          }
        };
      }, []);
    return (
        <div>
          <div ref={buttonRef} className={`pro_btn w-fit flex items-center gap-2 border py-3 px-5 bg-${bg} text-black cursor-pointer rounded-full`}>
                <span>{text}</span>
                <div className="icon w-[15px] h-[15px] overflow-hidden">
                    <div ref={iconListRef} className='pro_icon_wrapper relative'>
                        <span><MdArrowOutward /></span>
                        <span className='absolute top-[12px] left-[-12px]'><MdArrowOutward /></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BtnComponent