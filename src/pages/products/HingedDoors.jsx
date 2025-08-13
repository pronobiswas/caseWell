import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);



import ButtomHeading from '../../components/commonComponent/ButtomHeading'
import BtnComponent from '../../components/homeComponents/utils/BtnComponent'
import HingedDoorDescription from '../../components/cabinetryComponent/HingedDoorDescription';
import HingedMeterialAndDesign from '../../components/cabinetryComponent/HingedMeterialAndDesign';

const HingedDoors = () => {
    const HingedBanner = useRef(null);
    useEffect(()=>{
        const svg = HingedBanner.current.querySelector('svg');
        const path = HingedBanner.current.querySelectorAll('path');
    },[]);
    return (
        <>
            <section ref={HingedBanner}>
                <div className="wrapper w-full h-screen flex items-end bg-colorOne text-white p-5 md:p-12 ">
                    <div className='w-1/2 flex flex-col gap-5 '>
                        <ButtomHeading heading='Hinged Doors' paragraph1='A hinged door is a traditional door style mounted on side hinges, swinging open and closed to provide easy and reliable access.' color='white'/>
                        <BtnComponent text='Configure Now' />
                    </div>
                    <div className='w-1/2 '>
                        <span>
                            <svg width="100%" height="auto" viewBox="0 0 827 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M611.048 81.5V578.7L544.371 601.4" stroke="#706F6F" stroke-width="0.75" stroke-miterlimit="10" />
                                <path d="M236.831 189.198L215.949 181.398V700.598L236.831 708.198" stroke="#706F6F" stroke-width="0.75" stroke-miterlimit="10" />
                                <path d="M215.949 181.399L590.373 73.6992L611.048 81.4992L236.831 189.199V707.999C236.831 708.299 237.141 708.499 237.451 708.399L328.731 677.499V238.399L544.372 174.699V601.499" stroke="#706F6F" stroke-width="0.75" stroke-miterlimit="10" />
                                <path d="M611.048 81.5V578.7L544.371 601.4" stroke="#706F6F" stroke-width="0.75" stroke-miterlimit="10" />
                                <path d="M236.831 189.198L215.949 181.398V700.598L236.831 708.198" stroke="#706F6F" stroke-width="0.75" stroke-miterlimit="10" />
                                <path d="M215.949 181.399L590.373 73.6992L611.048 81.4992L236.831 189.199V707.999C236.831 708.299 237.141 708.499 237.451 708.399L328.731 677.499V238.399L544.372 174.699V601.499" stroke="#706F6F" stroke-width="0.75" stroke-miterlimit="10" />
                                <path d="M413.086 726.299L544.165 602.699C544.165 602.699 544.165 602.699 544.165 602.599L544.269 174.799C544.269 174.699 544.165 174.699 544.062 174.699L413.086 296.199" stroke="#4A4A49" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M403.887 291.299V721.599C403.887 721.599 403.887 721.699 403.99 721.699L413.19 726.299" stroke="#4A4A49" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M413.086 726.3V296.3C413.086 296.3 413.086 296.2 412.983 296.2L403.886 291.6C403.783 291.6 403.783 291.5 403.886 291.4L523.594 180.7L544.269 174.6" stroke="#4A4A49" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M413.086 726.299L544.165 602.699C544.165 602.699 544.165 602.699 544.165 602.599L544.269 174.799C544.269 174.699 544.165 174.699 544.062 174.699L413.086 296.199" stroke="#4A4A49" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M403.887 291.299V721.599C403.887 721.599 403.887 721.699 403.99 721.699L413.19 726.299" stroke="#4A4A49" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M413.086 726.3V296.3C413.086 296.3 413.086 296.2 412.983 296.2L403.886 291.6C403.783 291.6 403.783 291.5 403.886 291.4L523.594 180.7L544.269 174.6" stroke="#4A4A49" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M562.669 595.2L544.165 602.7L544.371 174.6L328.835 238.9V677.2L310.641 683.3V224.6L562.669 150V595.2Z" stroke="#4A4A49" stroke-width="4" stroke-miterlimit="10" />
                            </svg>

                        </span>
                    </div>
                    
                </div>
            </section>
            <HingedDoorDescription/>
            <HingedMeterialAndDesign/>
        </>
    )
}

export default HingedDoors