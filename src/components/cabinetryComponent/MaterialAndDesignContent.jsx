import React from 'react'
import BtnComponent from '../homeComponents/utils/BtnComponent'

const MaterialAndDesignContent = () => {
    return (
        <>
            <section id='materialContent' className='w-full h-auto bg-myColorOne text-white'>
                <div className="wrapper">
                    {/* ===wood=== */}
                    <div className="wood w-full h-[500px] flex">
                        <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full max-w-sm">
                                <h1 className='text-5xl font-Montserrat font-semibold mb-5'>Wood.</h1>
                                <p className='mb-8'>Natural hardwoods like oak, walnut, and zebrano form the base of our collections. Each wood type is carefully selected for strength, grain, and finish.</p>
                                <BtnComponent text='View meterial' />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full h-full max-h-[500px]">
                                <img src="/images/wood2.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    {/* ===Veneer==== */}
                    <div className="wood w-full h-[500px] flex">
                        <div className="w-1/2">
                            <div className="w-full h-full max-h-[500px]">
                                <img src="/images/veneer.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full max-w-sm">
                                <h1 className='text-5xl font-Montserrat font-semibold mb-5'>Veneer.</h1>
                                <p className='mb-8'>A refined layer of real wood, allowing unique textures and rare species to come to life with consistency and elegance.</p>
                                <BtnComponent text='View meterial' />
                            </div>
                        </div>
                    </div>
                    {/* ====Glass===== */}
                    <div className="wood w-full h-[500px] flex">
                        <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full max-w-sm">
                                <h1 className='text-5xl font-Montserrat font-semibold mb-5'>Glass.</h1>
                                <p className='mb-8'>Clear, tinted, or structured glass to open spaces with light and transparency — from privacy glass to statement glass doors.</p>
                                <BtnComponent text='View meterial' />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full h-full max-h-[500px]">
                                <img src="/images/glass0.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    {/* ====Metal=== */}
                    <div className="wood w-full h-[500px] flex">
                        <div className="w-1/2">
                            <div className="w-full h-full max-h-[500px]">
                                <img src="/images/metalsmixed.avif" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full max-w-sm">
                                <h1 className='text-5xl font-Montserrat font-semibold mb-5'>Metal.</h1>
                                <p className='mb-8'>Aluminium, bronze, or steel accents create contrast and precision, used in frames, hinges, and detailing.</p>
                                <BtnComponent text='View meterial' />
                            </div>
                        </div>
                    </div>
                    {/* ====Stone ===== */}
                    <div className="wood w-full h-[500px] flex">
                        <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full max-w-sm">
                                <h1 className='text-5xl font-Montserrat font-semibold mb-5'>Stone & Ceramics.</h1>
                                <p className='mb-8'>Marble, travertine, or ceramic stone panels add a sense of permanence and luxury to our designs.</p>
                                <BtnComponent text='View meterial' />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full h-full max-h-[500px]">
                                <img src="/images/R.jpeg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    {/* ====Handles & Hardware=== */}
                    <div className="wood w-full h-[500px] flex">
                        <div className="w-1/2">
                            <div className="w-full h-full max-h-[500px]">
                                <img src="/images/OIP.webp" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full max-w-sm">
                                <h1 className='text-5xl font-Montserrat font-semibold mb-5'>Handles & Hardware.</h1>
                                <p className='mb-8'>Minimal recessed grips, bold handles, and custom hardware — both functional and sculptural.</p>
                                <BtnComponent text='View meterial' />
                            </div>
                        </div>
                    </div>
                    {/* ====Finishes & Oils===== */}
                    <div className="wood w-full h-[500px] flex">
                        <div className="w-1/2 flex items-center justify-center">
                            <div className="w-full max-w-sm">
                                <h1 className='text-5xl font-Montserrat font-semibold mb-5'>Finishes & Oils.</h1>
                                <p className='mb-8'>From matte oils to deep stains, each finish is chosen to protect and enhance natural character.</p>
                                <BtnComponent text='View meterial' />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full h-full max-h-[500px]">
                                <img src="/images/oilandFinishes.jpeg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    {/* ====Sustainability & Durability====== */}
                    <div className="w-full h-full flex p-5 py-12">
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <div className='w-full max-w-96'>
                                <h3 className='text-5xl font-Montserrat font-semibold mb-12'>Sustainability & Durability</h3>
                                <h5 className='text-2xl mb-2'>Sustainable Choices</h5>
                                <p>We source responsibly — FSC-certified wood, durable finishes, and recyclable glass & metal.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                        <div className='w-full max-w-96'>
                            <h3 className='text-5xl mb-10'>Built to Last</h3>
                            <p className='mb-8'>Every material is chosen not just for its look, but for its longevity. A Zebrano product is made to live with you for decades.</p>
                            <BtnComponent text='Configure Now'/>
                        </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default MaterialAndDesignContent