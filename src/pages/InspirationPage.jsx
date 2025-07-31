import React from 'react'
import InspirationHeader from '../components/InspirationComponent/InspirationHeader'
import InspirationGalary from '../components/InspirationComponent/InspirationGalary'

const InspirationPage = () => {
  return (
    <>
    <div id="inspirationPage" className='w-full h-full bg-[#202A30] py-36 px-12'>
        <InspirationHeader/>
        <InspirationGalary/>
    </div>
    </>
  )
}

export default InspirationPage