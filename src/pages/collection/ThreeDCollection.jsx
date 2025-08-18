import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'

const ThreeDCollection = () => {
  return (
    <>
    <section>
        <div
        style={{ backgroundImage: "url(/images/threeDCollections.webp)" }}
         className="wrapper w-full h-screen flex items-end justify-start p-5 md:p-12">
            <ButtomHeading heading={"3D Collection"} paragraph1={"Textured doors with depth – sculptural surfaces that make a statement."} paragraph2={"Our 3D panel doors combine bold patterns with refined materials. Ideal for feature walls and spaces that need artistic dimension."}/>
        </div>
    </section>
    </>
  )
}

export default ThreeDCollection
