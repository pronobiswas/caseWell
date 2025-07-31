import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const InspirationGalary = () => {
    return (
        <>
            <section id="inspirationGalary">
                <div className="inspirationGalaryWarapper w-full flex gap-5 justify-between">
                    <div className="col1 w-full md:w-1/2">

                        <div className="photoWrapper">
                            <div className="iamgeBox w-full overflow-hidden">
                                <img src="/images/slideImage1.jpg" alt="image" className='w-full h-full object-cover' />
                            </div>
                            <div className="textWrapper w-full text-white flex justify-between">
                                <div className='flex items-center gap-2'>
                                    <span>072.UMAY</span>
                                    <span className='block w-2 h-2 bg-yellow-300 rounded-full '></span>
                                    <span>Wellness Complex</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span>See more</span>
                                    <div className='p-2 border rounded-full'><FaArrowRight /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col2 w-full md:w-1/2">

                        <div className="photoWrapper">
                            <div className="iamgeBox w-full">
                                <img src="/images/slideImage1.jpg" alt="image" className='w-full h-full object-cover' />
                            </div>
                            <div className="textWrapper w-full text-white flex justify-between">
                                <div className='flex items-center gap-2'>
                                    <span>072.UMAY</span>
                                    <span className='block w-2 h-2 bg-yellow-300 rounded-full '></span>
                                    <span>Wellness Complex</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span>See more</span>
                                    <div className='p-2 border rounded-full'><FaArrowRight /></div>
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