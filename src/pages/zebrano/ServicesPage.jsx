import React from 'react'
import ServiceBanner from '../../components/aboutUsComponent/secviceComponent/ServiceBanner'
import ServiceTab from '../../components/aboutUsComponent/secviceComponent/ServiceTab'

const ServicesPage = () => {
  return (
    <>
    <div className='w-full bg-bgOne'>
        <ServiceBanner/>
        <ServiceTab/>
    </div>
    </>
  )
}

export default ServicesPage