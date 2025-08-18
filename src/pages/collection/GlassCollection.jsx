import React from 'react'
import ButtomHeading from '../../components/commonComponent/ButtomHeading'

const GlassCollection = () => {
  return (
    <>
      <section>
        <main
          style={{ backgroundImage: "url(/images/glassCollection01.webp)" }}
          className="w-full h-screen p-5 md:p-12 flex items-end justify-start bg-cover bg-center"
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-geist"></h1>
            <p className="font-geist"></p>
            <p className="font-geist"></p>
          </div>
          <ButtomHeading
            heading="Glass Collection"
            paragraph1="Design doors made of glass – combining transparency, elegance and modern functionality."
            paragraph2="Discover our collection of luxury glass doors, including pivot and sliding models. Made with safety glass and refined finishes for a timeless, open feel."
          />
        </main>

      </section>
    </>
  )
}

export default GlassCollection