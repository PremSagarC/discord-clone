import React, { useState } from 'react'

import NoOnlineFriend from '../assets/no_online_friends.svg'
import AddFriendimage from '../assets/add_friend_icon.svg'

const ThirdPart = () => {

  const [show, setShow] = useState(true)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row gap-3' style={{ borderBottom: '1px solid black' }}>
        <div className='flex flex-row items-center gap-2 hover:bg-[#36393f] p-1 ml-3 mr-3 cursor-pointer text-gray-400 hover:text-white'>
          <div></div>
          <div className='w-[12px] h-[12px]'>
            <svg aria-hidden="false" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
          </div>
          Friends

          <div className='flex flex-row items-center gap-6 hover:bg-[#36393f] p-1 ml-3 mr-3 '>
            <p className='cursor-pointer text-gray-400 hover:text-white'>Online</p>
            <p className='cursor-pointer text-gray-400 hover:text-white'>All</p>
            <p className='cursor-pointer text-gray-400 hover:text-white'>Pending</p>
            <p className='cursor-pointer text-gray-400 hover:text-white'>Blocked</p>
          </div>
        </div>

        <div onClick={() => setShow(!show)} className='cursor-pointer'>
          {show ?
            <div className='text-white text-[15px] bg-[#3ba55d] m-3 px-2 rounded-md active active:bg-transparent active:text-[#3ba55d]'>
              Add Friend
            </div> :
            <div className='text-[#3ba55d] text-[15px] bg-transparent m-3 px-2 rounded-md '>
              Add Friend
            </div>
          }

        </div>
      </div>

      <div className='flex flex-row'>
        {show ?
          <div className='flex-[2] h-[93vh] flex flex-col items-center justify-center'
            style={{ borderRight: '1px solid rgb(78, 78, 78)' }}>
            <img src={NoOnlineFriend} alt="" className='w-[60%]' />
            <p className='mt-4 text-gray-500'>No one's around to play with Wumpus</p>
          </div>

          :
          <div className='flex-[2] h-[93vh] flex flex-col'
            style={{ borderRight: '1px solid rgb(78, 78, 78)' }}>
            <div className='ml-4 mt-3'>
              <p className='flex-start font-semibold text-white'>Add Friend</p>
              <p className='text-gray-400 text-[12px]'>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
              <div style={{ border: '1px solid #000000' }}
                className='mt-3 flex flex-row items-center justify-between text-[12px] bg-[#2f3136] w-[98%] rounded-md'>
                <input type="text" placeholder='Enter a Username#0000' className='bg-transparent pl-4' />
                <button className='bg-[#404eed] font-medium text-white px-7 py-2 m-2 rounded-md '>
                  Send Friend Request
                </button>
              </div>
            </div>
            <div className='relative flex-[2] h-[93vh] flex flex-col items-center justify-center'>
              <img src={AddFriendimage} alt="" className='w-[60%]' />
              <p className='mt-4 text-gray-500'>Wumpus is waiting on friends. You don't have to tough!</p>
            </div>
          </div>
        }

        <div className='flex-[1]'>
          <div className='flex flex-col gap-4'>
            <p className='flex-start m-3 font-semibold text-white'>
              Active Now
            </p>
            <div className='text-center '>
              <p className='font-semibold text-white'>It's quiet for now...</p>
              <p className='text-gray-400 text-[12px] mx-4 mt-2'>
                When a friend starts an activity - like playing a game or hanging out on voice - we'll show it here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPart