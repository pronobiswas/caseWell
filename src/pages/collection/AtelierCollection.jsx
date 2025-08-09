import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'

const AtelierCollection = () => {
  return (
    <>
    <section>
        <div className="wrapper w-full h-screen flex items-end justify-start p-5 md:p-12 bg-bgTwo">
            <div className="box">
                <h1 className='text-3xl md:text-5xl font-myFont'>Atelier Collection</h1>
                <p className='font-myFont'>Fully custom doors, designed and made in our studio – without limits.</p>
                <p className='font-myFont' >Work with Zebrano Studio to create bespoke doors from glass, wood, stone or metal. Tailored to your architecture, taste and imagination.</p>
                <ButtomHeading heading = {"Atelier Collection"} paragraph1={"paragraph1"} />
            </div>

        </div>
    </section>
    </>
  )
}

export default AtelierCollection