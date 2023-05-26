import React from 'react'

import centerimage from '../assets/center_bg_landing_header.svg'
import leftImage from '../assets/left_bg_landing_header.svg'
import rightImage from '../assets/right_bg_landing_header.svg'

//icons
import { RxDownload } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Extra = () => {
    return (
        <div>
            <img
                className='bottom-0 left-0  absolute w-[2560px] z-0'
                src={centerimage} alt="Center Background Image" />
            <div className='flex flex-row gap-7'>
                <img className='bottom-0 hidden sm:block w-[60%] sm:w-[50%] md:w-[40%] right-0 absolute z-10'
                    src={rightImage} alt="" /><img src="" alt="" />
                <img className='bottom-0 w-[70%] sm:w-[50%] md:w-[40%] left-[] sm:left-[-10%] absolute z-10'
                    src={leftImage} alt="" /><img src="" alt="" />
            </div>
            <div className='flex flex-col gap-4 text-white sm:items-center ml-2 mt-1 z-20'>
                <h1 className='font-bold text-[30px] sm:text-[40px]'>IMAGINE A PLACE...</h1>
                <p className='sm:w-[70%] md:w-[60%] lg:w-[40%] sm:text-center'>...where you can belong to a school club, a gaming group, or a worldwide art community.
                    Where just you and a handful of friends can spend time together.
                    A place that makes it easy to talk every day and hang out more often.</p>
            </div>
            <div className=' mt-3 flex flex-col sm:flex-row gap-4 sm:gap-10 items-start sm:items-center sm:justify-center z-30'>
                <Link to='/download' className='flex flex-row items-center gap-1 bg-white px-6 py-1 z-30 rounded-full hover:text-[#5865f2]'>
                    <RxDownload />
                    Download for Windows
                </Link>
                <Link to='channels' className='text-white px-6 py-1 z-30 rounded-full bg-[#23272a] hover:bg-[#36393f]'>
                    Open Discord in your browser
                </Link>
            </div>
        </div>
    )
}

export default Extra