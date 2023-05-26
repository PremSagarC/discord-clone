import React from 'react'

import discordLogo from '../assets/discord_main_logo.svg'
import loginBg from '../assets/login_bg.svg'

import { Link } from 'react-router-dom'

const RegisterInput = () => {
    return (
        <div>
            <div className='sm:hidden w-[100%] overflow-hidden flex flex-col items-center justify-center pt-[80px]'>
                <img src={discordLogo} alt="" className='w-[35%]' />
                <div className='flex-start w-[100%] mt-[100px] ml-10'>
                    <p className='font-semibold text-white text-[20px] text-center mb-5'>Create an account</p>
                    <div className='mt-2'>
                        <p className='font-semibold text-[13px] text-[#b9bbbe]'>EMAIL</p>
                        <input className='w-[92%] h-8 mt-2 bg-[#2f3136] p-2 text-white border-black-500 outline-none' type="email" />
                    </div>
                    <div className='mt-4'>
                        <p className='font-semibold text-[13px] text-[#b9bbbe]'>USERNAME</p>
                        <input className='w-[92%] h-8 mt-2 bg-[#2f3136] p-2 text-white border-neutral-800 outline-none' type="text" />
                    </div>
                    <div className='mt-4'>
                        <p className='font-semibold text-[13px] text-[#b9bbbe]'>PASSWORD</p>
                        <input className='w-[92%] h-8 mt-2 bg-[#2f3136] p-2 text-white border-neutral-800 outline-none' type="password" />
                    </div>

                    <button className='mt-8 bg-[#5865f2] text-white font-semibold w-[90%] h-9'>
                        Continue
                    </button>
                    <div className='flex mt-4 text-[12px]'>
                        <Link to='/login' className='ml-2 text-blue-400'>
                            Already have account?
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className='hidden relative sm:block h-[100vh]'>
                <img src={loginBg} alt="" className='w-[180rem] object-cover z-0' />
                <div className='bg-[#36393f] absolute z-40 w-[40%] sm:top-[20%] sm:left-[28%] lg:top-[25%] lg:left-[30%] flex items- justify-center rounded-md'>
                    <div className='flex-start mt-[20px] ml-7 mb-5 w-[100%] '>
                        <p className='font-semibold text-white text-[20px] text-center '>Create an account</p>
                        <div className='mt-2'>
                            <p className='font-semibold text-[13px] text-[#b9bbbe]'>EMAIL</p>
                            <input className='w-[92%] h-7 mt-2 bg-[#2f3136] p-2 text-white border-black-500 outline-none' type="email" />
                        </div>
                        <div className='mt-4'>
                            <p className='font-semibold text-[13px] text-[#b9bbbe]'>USERNAME</p>
                            <input className='w-[92%] h-7 mt-2 bg-[#2f3136] p-2 text-white border-neutral-800 outline-none' type="text" />
                        </div>
                        <div className='mt-4'>
                            <p className='font-semibold text-[13px] text-[#b9bbbe]'>PASSWORD</p>
                            <input className='w-[92%] h-7 mt-2 bg-[#2f3136] p-2 text-white border-neutral-800 outline-none' type="password" />
                        </div>

                        <button className='mt-8 bg-[#5865f2] text-white font-semibold w-[90%] h-9'>
                            Continue
                        </button>
                        <div className='flex mt-4 text-[12px]'>
                            <Link to='/login' className='ml-2 text-blue-400'>
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterInput