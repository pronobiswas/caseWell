import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'

const FineerCollection = () => {
  return (
    <>
    <section>
        <div
        style={{ backgroundImage: "url(/images/FineerCollection01.webp)" }}
         className="warpper w-full h-screen flex items-end justify-start p-5 md:p-12 bg-bgTwo">
            <div className="box">
                <h1 className='text-3xl md:text-5xl font-geist'></h1>
                <p className='font-geist'></p>
                <p className='font-geist'></p>
            </div>
            <ButtomHeading heading={"Fineer Collection"} paragraph1={"Wood veneer doors with rich textures, natural grains and architectural precision."} paragraph2={"Explore handcrafted fineer doors in walnut, oak, zebrano and more. Warm, minimal and made for design interiors."}/>
        </div>
    </section>
    </>
  )
}

export default FineerCollection