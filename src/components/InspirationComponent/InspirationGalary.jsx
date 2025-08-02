import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const InspirationGalary = () => {
    return (
        <>
            <section id="inspirationGalary">
                <div className="inspirationGalaryWarapper w-full py-10 flex flex-col gap-8 md:flex-row lg:gap-20 lg:py-20 justify-between">

                    <div className="col1 w-full md:w-1/2 flex flex-col gap-10">

                        <div className="photoWrapper group ">
                            <div className="iamgeBox w-full h-[450px] overflow-hidden">
                                <img src="/images/inspirationImg/Work1.jpg" alt="image" className='w-full h-full object-cover group-hover:scale-105 duration-700 ease-in-out' />
                            </div>
                            <div className="textWrapper pt-5 w-full text-white flex justify-between">
                                <div className='flex items-center gap-2'>
                                    <span>072.UMAY</span>
                                    <span className='block w-2 h-2 bg-yellow-300 rounded-full '></span>
                                    <span className='text-gray-400'>Wellness Complex</span>
                                </div>

                                <div className='inspirationSeeMore flex items-center gap-2'>
                                    <div className='relative overflow-hidden'>
                                        <span className='inline-block -translate-y-5 group-hover:translate-y-0 duration-300 ease-in-out   '>See more</span>
                                    </div>
                                    <div className='p-2 border border-transparent rounded-full group-hover:border-amber-300 overflow-hidden'>
                                        <span className='text-yellow-300 block -translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out '><FaArrowRight /></span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="photoWrapper group ">
                            <div className="iamgeBox w-full  h-[450px] overflow-hidden">
                                <img src="/images/inspirationImg/Work3.jpg" alt="image" className='w-full h-full object-cover group-hover:scale-105 duration-700 ease-in-out' />
                            </div>
                            <div className="textWrapper pt-5 w-full text-white flex justify-between">
                                <div className='flex items-center gap-2'>
                                    <span>072.UMAY</span>
                                    <span className='block w-2 h-2 bg-yellow-300 rounded-full '></span>
                                    <span className='text-gray-400'>Wellness Complex</span>
                                </div>

                                <div className='inspirationSeeMore flex items-center gap-2'>
                                    <div className='relative overflow-hidden'>
                                        <span className='inline-block -translate-y-5 group-hover:translate-y-0 duration-300 ease-in-out   '>See more</span>
                                    </div>
                                    <div className='p-2 border border-transparent rounded-full group-hover:border-amber-300 overflow-hidden'>
                                        <span className='text-yellow-300 block -translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out '><FaArrowRight /></span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col2 w-full md:w-1/2 py-24 flex flex-col gap-10">

                        <div className="photoWrapper group ">
                            <div className="iamgeBox w-full overflow-hidden  h-[450px]">
                                <img src="/images/inspirationImg/Work2.jpg" alt="image" className='w-full h-full object-cover group-hover:scale-105 duration-700 ease-in-out' />
                            </div>
                            <div className="textWrapper pt-5 w-full text-white flex justify-between">
                                <div className='flex items-center gap-2'>
                                    <span>072.UMAY</span>
                                    <span className='block w-2 h-2 bg-yellow-300 rounded-full '></span>
                                    <span className='text-gray-400'>Wellness Complex</span>
                                </div>

                                <div className='inspirationSeeMore flex items-center gap-2'>
                                    <div className='relative overflow-hidden'>
                                        <span className='inline-block -translate-y-5 group-hover:translate-y-0 duration-300 ease-in-out   '>See more</span>
                                    </div>
                                    <div className='p-2 border border-transparent rounded-full group-hover:border-amber-300 overflow-hidden'>
                                        <span className='text-yellow-300 block -translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out '><FaArrowRight /></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="photoWrapper group ">
                            <div className="iamgeBox w-full  h-[450px] overflow-hidden">
                                <img src="/images/inspirationImg/Work4.jpg" alt="image" className='w-full h-full object-cover group-hover:scale-105 duration-700 ease-in-out' />
                            </div>
                            <div className="textWrapper pt-5 w-full text-white flex justify-between">
                                <div className='flex items-center gap-2'>
                                    <span>072.UMAY</span>
                                    <span className='block w-2 h-2 bg-yellow-300 rounded-full '></span>
                                    <span className='text-gray-400'>Wellness Complex</span>
                                </div>

                                <div className='inspirationSeeMore flex items-center gap-2'>
                                    <div className='relative overflow-hidden'>
                                        <span className='inline-block -translate-y-5 group-hover:translate-y-0 duration-300 ease-in-out   '>See more</span>
                                    </div>
                                    <div className='p-2 border border-transparent rounded-full group-hover:border-amber-300 overflow-hidden'>
                                        <span className='text-yellow-300 block -translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out '><FaArrowRight /></span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default InspirationGalary