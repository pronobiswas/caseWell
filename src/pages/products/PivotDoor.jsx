import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'
import BtnComponent from '../../components/homeComponents/utils/BtnComponent'
import DoorDescription from '../../components/cabinetryComponent/DoorDescription'
import MaterialAndDesign from '../../components/cabinetryComponent/MaterialAndDesign'

const PivotDoor = () => {
    return (
        <>
            <section>
                <div className="wrapper w-full h-screen flex items-end bg-[url('/images/PivotDoor.png')] bg-cover p-5 md:p-12">
                    <div className='flex flex-col gap-5'>

                        <ButtomHeading heading='PivotDoor' paragraph1='A pivot door is a sleek, modern door design that rotates on a central or offset pivot hinge, allowing smooth and unique opening with a contemporary look.' color='white' />
                        <BtnComponent text='Configure Now' />
                    </div>
                </div>
            </section>
            <div>
                <DoorDescription/>
                <MaterialAndDesign/>
            </div>
        </>
    )
}

export default PivotDoor