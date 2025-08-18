import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'

const AtelierCollection = () => {
  return (
    <>
    <section>
        <div
        style={{ backgroundImage: "url(/images/AtelierCollection.jpg)" }}
         className="wrapper w-full h-screen flex items-end justify-start p-5 md:p-12 bg-bgTwo">
            <div className="box">
                <ButtomHeading heading = {"Atelier Collection"} paragraph1={"Fully custom doors, designed and made in our studio – without limits."} paragraph2={'Work with Zebrano Studio to create bespoke doors from glass, wood, stone or metal. Tailored to your architecture, taste and imagination.'} />
            </div>

        </div>
    </section>
    </>
  )
}

export default AtelierCollection