import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'

const GlassCollection = () => {
  return (
    <>
        <section>
            <main className='w-full h-screen bg-bgTwo p-5 md:p-12 flex items-end justify-start'>
                <div>
                    <h1 className='text-3x md:text-5xl font-myFont'></h1>
                    <p className='font-myFont'></p>
                    <p className='font-myFont' > </p>
                </div>
                <ButtomHeading heading={"Glass Collection"} paragraph1={"Design doors made of glass – combining transparency, elegance and modern functionality."} paragraph2={"Discover our collection of luxury glass doors, including pivot and sliding models. Made with safety glass and refined finishes for a timeless, open feel."}/>
            </main>
        </section>
    </>
  )
}

export default GlassCollection