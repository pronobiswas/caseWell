import React from 'react'
import { BsLayoutWtf } from 'react-icons/bs'
import { FaRegMessage } from 'react-icons/fa6'
import { LuArrowRight } from 'react-icons/lu'
import { RxArrowTopRight } from 'react-icons/rx'

const WhyPartner = () => {
  return (
    <>
    <section id="whyPartner">
        <div className="partnerWrapper w-full h-screen p-16 flex flex-col justify-between">
          <div className="partnerHeading flex justify-between">
            <h3 className='text-3xl'>Why Partner with Casewell?</h3>
            <p className='w-64 text-right'>
              We built the cabinet supply model that should've existed all along, one that supports your success without getting in your way.
            </p>
          </div>
            <div className="partnerContentWrapper flex flex-wrap gap-6">

              <div className="box w-80 py-5 border flex flex-col gap-6 ">
                <div className="iconbox text-6xl">
                  <FaRegMessage />
                </div>
                <div className="text">
                  <h6>Complete Project Support</h6>
                  <p>Design help, showroom access, and fulfillment — all included.</p>
                </div>
                <div className="link flex items-center gap-3">
                  <span>Read more</span> <span><RxArrowTopRight /></span>
                </div>
              </div>

              <div className="box w-80 py-5 border flex flex-col gap-6  ">
                <div className="iconbox text-6xl">
                  <LuArrowRight />
                </div>
                <div className="text">
                  <h6>Complete Project Support</h6>
                  <p>Design help, showroom access, and fulfillment — all included.</p>
                </div>
                <div className="link flex items-center gap-3">
                  <span>Read more</span> <span><RxArrowTopRight /></span>
                </div>
              </div>

              <div className="box w-80 py-5 border ">
                <div className="iconbox text-6xl">
                  <BsLayoutWtf />
                </div>
                <div className="text">
                  <h6>Complete Project Support</h6>
                  <p>Design help, showroom access, and fulfillment — all included.</p>
                </div>
                <div className="link flex items-center gap-3">
                  <span>Read more</span> <span><RxArrowTopRight /></span>
                </div>
              </div>

              <div className="box w-80 py-5 border ">
                <div className="iconbox w-16 h-16 border">

                </div>
                <div className="text">
                  <h6>Complete Project Support</h6>
                  <p>Design help, showroom access, and fulfillment — all included.</p>
                </div>
                <div className="link flex items-center gap-3">
                  <span>Read more</span> <span><RxArrowTopRight /></span>
                </div>
              </div>

              <div className="box w-80 py-5 border ">
                <div className="iconbox w-16 h-16 border">

                </div>
                <div className="text">
                  <h6>Complete Project Support</h6>
                  <p>Design help, showroom access, and fulfillment — all included.</p>
                </div>
                <div className="link flex items-center gap-3">
                  <span>Read more</span> <span><RxArrowTopRight /></span>
                </div>
              </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default WhyPartner