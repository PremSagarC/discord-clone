import React from 'react'
import { Link } from 'react-router-dom'

import firstInfo from '../assets/invite_only_landing.svg'
import secondInfo from '../assets/hanging_out_easy_landing.svg'
import thirdInfo from '../assets/fandom_landing.svg'
import fourthInfo from '../assets/just_chiling_landing.svg'
import tinyStars from '../assets/tiny_stars_landing.svg'
import { RxDownload } from 'react-icons/rx'

const New = () => {

  return (
    <div>
      {/* First Info */}
      <div className="w-[100%] bg-white">
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-between
         h-[60vh] m-auto relative w-[100%] md:w-[60%]'>
          <img src={firstInfo} alt="" className='w-[70%] sm:w-[50%] md:w-[70%]' />
          <div className='m-4'>
            <h1 className='font-bold text-[24px] sm:text-[28px] md:text-[34px] text-[#23272a]'>
              Create an invite-only place where you belong
            </h1>
            <p className='text-[15px] font-light mt-3'>
              Discord servers are organized into topic-based
              channels where you can collaborate, share, and
              just talk about your day without clogging up a group chat.
            </p>
          </div>
        </div>
      </div>

      {/* Second Info */}
      <div className='w-[100%] bg-[#f6f6f6] h-[50vh]'>
        <div className='flex flex-col-reverse sm:flex-row gap-3 sm:gap-6 items-center justify-center
        relative m-auto w-[100%] md:w-[60%]'>
          <div className=' m-4'>
            <h1 className='font-bold text-[24px] sm:text-[34px] text-[#23272a]'>
              Where hanging out is easy
            </h1>
            <p className='text-[15px] font-light mt-3'>
              Grab a seat in a voice channel when you’re free.
              Friends in your server can see you’re around and
              instantly pop in to talk without having to call.
            </p>
          </div>
          <img src={secondInfo} alt="" className='w-[70%] sm:w-[50%] md:w-[70%]' />
        </div>
      </div>

      {/* Third Info */}
      <div className='1-[100%] bg-white'>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center
        h-[60vh] relative m-auto w-[100%] md:w-[60%]'>
          <img src={thirdInfo} alt="" className='w-[70%] sm:w-[50%] md:w-[70%]' />
          <div className=' m-4'>
            <h1 className='font-bold text-[24px] sm:text-[34px] text-[#23272a]'>
              From few to a fandom
            </h1>
            <p className='text-[15px] font-light mt-3'>
              Get any community running with moderation tools and
              custom member access. Give members special powers,
              set up private channels, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Info */}
      <div className='bg-[#f6f6f6] pb-[80px]'>
        <div className='flex flex-col gap-3 sm:gap-6 items-center justify-center
       relative m-auto w-[100%] md:w-[60%]'>
          <div className='m-4 text-center'>
            <h1 className='font-bold text-[24px] sm:text-[34px] text-[#23272a]'>
              RELIABLE TECH FOR STAYING CLOSE
            </h1>
            <p className='text-[15px] font-light mt-3'>
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games,
              or gather up and have a drawing session with screen share.
            </p>
          </div>
          <img src={fourthInfo} alt="" className='w-[100%] sm:w-[90%] md:w-[90%]' />
        </div>

        <div className='flex flex-col gap-3 items-center relative m-2'>
          <img src={tinyStars} alt="" className='w-[60%] sm:w-[35%] absolute top-[-10px]' />
          <p>
            Ready to start your journey?
          </p>
          <a href='/download'
            className='flex items-center gap-2 justify-center rounded-full w-[100%] sm:w-[35%] bg-[#404eed] text-white py-1
            hover:bg-red
            '>
            <RxDownload />
            Download for Windows
          </a>
        </div>
      </div>
    </div>
  )
}

export default New