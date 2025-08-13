import React from 'react'
import BtnComponent from '../homeComponents/utils/BtnComponent'
import { Link } from 'react-router-dom'

const CabinetryBanner = () => {
  return (
    <>
    <section id="cabineteryBanner" className='w-full h-screen bg-[url("/images/cabinetryBanner.jpg")]'>
        <div className="cabinetryBannerWarper w-full h-full flex items-end p-12">
            <div className="cabinetryBannerContent text-white ">
                <h1 className='text-5xl font-Montserrat'>Start Your Zebrano Journey</h1>
                <p className='w-full max-w-80 text-xl mt-8 mb-6 font-geist'>We offer two ways to get started — choose the path that suits you best.</p>
                <Link to="/collection" >
                <BtnComponent text='See collection'/>
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default CabinetryBanner