import React from 'react'
import BtnComponent from '../homeComponents/utils/BtnComponent'
import { Link } from 'react-router-dom'

const AccessibleBeautiful = () => {
    return (
        <>
            <section id="accessibleBeautifull">
                <div className="wrapper w-full h-fit bg-myColorOne text-LightText">
                    {/* ===row one === */}
                    <div className="row1">
                        <div className="w-full flex">
                            <div className=" w-1/2 flex justify-center items-center py-10 px-8">
                                <div className='w-full max-w-80'>
                                    <h1 className='text-4xl font-semibold '>ACCESSIBLE.</h1>
                                    <h1 className='text-4xl font-semibold mb-8 '>BEAUTIFUL.</h1>
                                    <p>I've always felt that good design shouldn't hide behind velvet ropes. At Zebrano, I want everyone to enjoy the same
                                        beautiful doors and details
                                        usually seen only in luxury hotels - right at home."
                                    </p>
                                    <p className='pt-5'><b>Mathijs</b> - Founder and designer, Zebrano Studio</p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src="/images/img3.png" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    {/* ===row two=== */}
                    <div className="row2 w-full h-fit min-h-[530px] flex">
                        <div className="w-1/2 ">
                            <img src="/images/img3.png" alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-1/2 h-full">
                            <div className="content w-full h-full flex justify-center items-center py-16">
                                <div className='w-full h-full  max-w-96 flex flex-col gap-20'>
                                    <p className='text-xl text-center'>We like to keep things close to home. Our doors are made right here in the Netherlands, shaped by makers who know their wood almost as well as their morning coffee. It's a mix of tradition, precision, and a little Dutch stubbornness that refuses to settle for "good enough." The result? Craft that feels local, but looks like it belongs anywhere in the world.</p>
                                    <div className='flex justify-center'>
                                        <BtnComponent text='Discover materials' />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ===row three=== */}
                    <div className='row3 bg-myColorTwo pt-12 px-5 pb-10 text-myColorOne'>
                        <div className="wrapper w-full flex gap-5">
                            {/* ====col one=== */}
                            <div className="w-1/2">
                                <div>
                                    <div className='w-full h-[530px] overflow-hidden'>
                                        <img src="/images/img4.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full flex flex-col items-center text-center p-5'>
                                        <h3 className='text-3xl'>Are you a designer?</h3>
                                        <p className='mb-8'>Our team is ready to help you discover all the possibilities </p>
                                        <Link to="/contact">
                                            <BtnComponent text='Discover materials' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* ====col two=== */}
                            <div className="w-1/2">
                                <div>
                                    <div className="w-full h-[530px] overflow-hidden">
                                        <img src="/images/img4.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full flex flex-col items-center text-center p-5'>
                                        <h3 className='text-3xl'>Are you a designer?</h3>
                                        <p className='mb-8'>Our team is ready to help you discover all the possibilities </p>
                                        <Link to="/contact">
                                            <BtnComponent text='Get in contact' />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccessibleBeautiful