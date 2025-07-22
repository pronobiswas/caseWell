import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Banner = () => {
  return (
    <>
    <section id="banner" className="w-full h-screen bg-[url('/banner.png')] bg-cover">
        <div className="bannerWrapper w-full h-full flex items-end p-10">
          <div className="pro_row flex flex-col gap-6 items-start">
            <h2 className='text-white text-5xl'>Your Invitation to True Partnership</h2>
            <h6 className='text-xl text-white w-80'>Refit delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.</h6>
            
            <div className='w-fit h-fit flex items-center gap-3 border px-5 py-2 rounded-full text-white cursor-pointer'>
              <span>Work With Us</span>
              <div>
                <span><GoArrowUpRight /></span>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Banner