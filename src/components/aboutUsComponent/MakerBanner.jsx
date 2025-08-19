import React from 'react'

const MakerBanner = () => {
  return (
    <>
    <section id="makerBAnner">
        <div className="wrpper w-full h-[calc(100vh-200px)] pr-5 md:pr-10 lg:pr-14  bg-[url('/images/img3.png')] bg-[length:100%_100%] bg-center flex justify-end items-end">
            <div className='w-fit h-fit flex flex-col items-end '>
                <h1 className='text-6xl text-colorOne bg-bgOne font-bold text-right w-fit p-5 rounded-t-xl'>Heading text</h1>
                <div className='w-full max-w-xl bg-bgOne p-5 rounded-tl-xl'>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, esse iure eum velit porro libero voluptatum. Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos!</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MakerBanner