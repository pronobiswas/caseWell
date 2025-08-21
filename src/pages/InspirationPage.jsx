import React from 'react'
import InspirationHeader from '../components/InspirationComponent/InspirationHeader'
import InspirationGalary from '../components/InspirationComponent/InspirationGalary'

const InspirationPage = () => {
  return (
    <>
    <div id="inspirationPage" className='w-full h-full bg-[url("/images/bg01.png")] bg-cover bg-center p-5 pt-40 lg:py-36 lg:px-12'>
        <InspirationHeader/>
        <InspirationGalary/>
    </div>
    </>
  )
}

export default InspirationPage