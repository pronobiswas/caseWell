import React from 'react'
import BtnComponent from '../homeComponents/utils/BtnComponent'

const CabinetryBanner = () => {
  return (
    <>
    <section id="cabineteryBanner" className='w-full h-screen bg-[url("/images/cabinetryBanner.jpg")]'>
        <div className="cabinetryBannerWarper w-full h-full flex items-end p-12">
            <div className="cabinetryBannerContent text-white ">
                <h1 className='text-5xl font-myFont'>Start Your Cabinetry Journey</h1>
                <p className='w-full max-w-72 mt-8 mb-6'>We offer two ways to get started choose the option that fits you best.</p>
                <BtnComponent text='Start a project'/>
            </div>
        </div>
    </section>
    </>
  )
}

export default CabinetryBanner