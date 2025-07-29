import React from 'react'
import BtnComponent from '../homeComponents/utils/BtnComponent'

const Conversation = () => {
    return (
        <>
            <section id="conversation" className='w-full h-full p-5 bg-[#F2F0EA]'>
                <div className="conversationWrapper p-14 font-myFont bg-[#E1DBCB] flex justify-center">
                    <div className="w-full max-w-[490px]">
                        <h2 className='text-4xl mb-8 w-full text-center'>Let's Start
                            a<br/> Conversation</h2>
                        <p className='text-sm mb-8 text-center'>We invite you to visit our showroom or schedule a call to discuss how our partnership model makes it easier to build beautifully, with less friction and more trust. When you partner with people who care as much as you do, everything works better.</p>
                        <div className='flex justify-center'>

                            <BtnComponent text='Partner with Casewell' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Conversation