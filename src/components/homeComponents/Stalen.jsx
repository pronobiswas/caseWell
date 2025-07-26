import React from 'react'

const Stalen = () => {
    return (
        <>
            <section id="stalen" className='w-full h-full py-12 '>
                <div className="stalenWrapper w-full h-[500px] bg-black p-12  text-white flex gap-12">
                    <div className="w-1/4 shrink-0 h-full flex justify-end items-end">
                        <div className='w-full h-fit'>

                            <h2 className='text-2xl '>Type stalen deuren ment glas</h2>
                            <div className='border '>
                                <span>- CONFIGUREER DEUR</span>
                            </div>
                        </div>
                    </div>
                    <div className="stalenCardWrapper 3/4 h-full bg-green-400">

                        <div className="w-full h-full bg-slate-700 flex">
                            {/* stalen card  */}
                            <div className="stalen_card border w-full h-full p-7 ">
                                {/* -------- */}
                                <div className="stalenanim w-full h-40 flex">
                                    <div className="w-1/4 h-8 bg-gray-400"></div>  {/* block one */}

                                    <div className="w-2/4 p-3">
                                        <div className="doorAnim relative w-full h-full bg-green-500">
                                            <div className="circle w-2 h-2 bg-red-500 rounded-full "></div>
                                            <div className="door w-40 h-1 bg-gray-50"></div>
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-8 bg-gray-400"></div>{/* block two */}
                                </div>

                                <div className="text">
                                    <h3 className='text-2xl'>Stalen</h3>
                                    <h3 className='text-2xl'>taastdeuren</h3>
                                    <p className='w-full mt-5 mb-6 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda eum repellat. Et cumque minima quae doloremque fugit hic.</p>
                                    <span>-ontdek NU</span>

                                </div>
                            </div>
                            <div className="stalen_card border border-x-0 w-full h-full p-7 ">
                                <div className="anim w-full h-40 bg-gray-500 "></div>
                                <div className="text">
                                    <h3 className='text-2xl'>Stalen</h3>
                                    <h3 className='text-2xl'>taastdeuren</h3>
                                    <p className='w-full mt-5 mb-6 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda eum repellat. Et cumque minima quae doloremque fugit hic.</p>
                                    <span>-ontdek NU</span>

                                </div>
                            </div>
                            <div className="stalen_card border w-full h-full p-7 ">
                                <div className="anim w-full h-40 bg-gray-500"></div>
                                <div className="text">
                                    <h3 className='text-2xl'>Stalen</h3>
                                    <h3 className='text-2xl'>taastdeuren</h3>
                                    <p className='w-full mt-5 mb-6 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda eum repellat. Et cumque minima quae doloremque fugit hic.</p>
                                    <span>-ontdek NU</span>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Stalen