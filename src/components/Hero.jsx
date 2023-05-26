import React from 'react'
import Navbar from './Navbar'

import Extra from './Extra'
import New from './Info'
import Footer from './Footer'

const Hero = () => {
    return (
        <>
            <div className='h-[30rem] relative bg-[#404eed]'>
                <Navbar />
                <Extra />
            </div>
            <New />
            <Footer />
        </>

    )
}

export default Hero