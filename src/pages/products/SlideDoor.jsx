import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'
import BtnComponent from '../../components/homeComponents/utils/BtnComponent'
import SlideDoorDescription from '../../components/cabinetryComponent/SlideDoorDescription'
import SlideMeterialAndDesign from '../../components/cabinetryComponent/SlideMeterialAndDesign'

const SlideDoor = () => {
  return (
    <>
        <section>
                <div className="wrapper w-full h-screen flex items-end bg-[url('/images/slideDoor.jpg')] bg-cover p-5 md:p-12">
                    <div className='flex flex-col gap-5'>

                        <ButtomHeading heading='Slide Door' paragraph1='A slide door operates by gliding horizontally along a track, offering a space-saving and modern solution for both interior and exterior openings.'color='#1544B2' />
                        <BtnComponent text='Configure Now' />
                    </div>
                </div>
            </section>
            <SlideDoorDescription/>
            <SlideMeterialAndDesign/>
    </>
  )
}

export default SlideDoor