import React from 'react'

const PaymentProcess = () => {
  return (
    <>
      <div className='py-5 px-0 xl:px-32 font-Poppins'>

        <div>
          <h2 className='text-4xl mb-5'>Payment Terms</h2>
          <p className='mb-4 pl-5'>At Zebrano Studio, every piece is crafted to order.</p>
          <p className='mb-3 pl-5'>To keep things simple and transparent, we work with two payments <b>Deposit:</b> A downpayment of <b>35%</b> is required to confirm your order and secure materials and production. The remaining <b>65%</b> is payable before delivery and installation.</p>
          <p className='mb-1 pl-5'>You are always free to pay the full amount upfront if you prefer.</p>
          <p className='pl-5'>For large or complex orders, payment terms will be agreed on a case-by-case basis.</p>
        </div>
        <div className='pt-5'>
          <h3 className="text-2xl mb-4 mt-8 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Payment Methods</h3>
          <p className='pl-5'>All payments are processed securely through Mollie. We accept iDEAL, major credit and debit cards, Apple Pay, Bancontact, PayPal, Klarna, and Sofort.</p>
        </div>
        <div>
          <h3 className="text-2xl mb-4 mt-8 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Custom Orders & Service</h3>
          <p className='mb-2 pl-5'>Because every Zebrano Studio product is made to measure, the right of withdrawal does not apply. Deposits are non-refundable once production has begun.</p>
          <p className='pl-5'>Our team is always available for service or support — we will do our best to help wherever we can.</p>
        </div>
      </div>
    </>
  )
}

export default PaymentProcess