import React from 'react'
import { Link } from 'react-router-dom'

const FallbackPage = () => {
  return (
    <>
    <section id="fallbackPage">
    <div className='w-full h-screen flex justify-center items-center'>
        <div>
            <Link to="/">
            <span>Back to home</span>
            </Link>
        </div>
    </div>
    </section>
    </>
  )
}

export default FallbackPage