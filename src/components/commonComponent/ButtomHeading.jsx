import React from 'react'

const ButtomHeading = ({heading = "Heading Text" , paragraph1 = "this is some text", paragraph2 = "" }) => {
  return (
    <>
    <div>
        <h1>{heading}</h1>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
    </div>
    </>
  )
}

export default ButtomHeading