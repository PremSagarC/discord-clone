import React from 'react'

import discordLogo from '../assets/discord_main_logo.svg'
import loginBg from '../assets/login_bg.svg'
import qrCode from '../assets/qr_code.png'

import { Link } from 'react-router-dom'

const LoginRegister = () => {
    return (
        <div>
            <div className='sm:hidden w-[100%] overflow-hidden flex flex-col items-center justify-center pt-[80px]'>
                <img src={discordLogo} alt="" className='w-[35%]' />
                <div className='flex-start w-[100%] mt-[100px] ml-10'>
                    <p className='font-semibold text-white text-[20px]'>Welcome back!</p>
                    <p className='text-[#72767d] '>We're so excited to see you again</p>
                    <div className='mt-2'>
                        <p className='font-semibold text-[13px] text-[#b9bbbe]'>EMAIL</p>
                        <input className='w-[92%] h-8 mt-2 bg-[#2f3136] p-2 text-white border-black-500 outline-none' type="email" />
                    </div>
                    <div className='mt-4'>
                        <p className='font-semibold text-[13px] text-[#b9bbbe]'>PASSWORD</p>
                        <input className='w-[92%] h-8 mt-2 bg-[#2f3136] p-2 text-white border-neutral-800 outline-none' type="password" />
                    </div>

                    <p className='text-[12px] mt-5 text-blue-400'>Forgot your password?</p>
                    <button className='mt-8 bg-[#5865f2] text-white font-semibold w-[90%] h-9'>
                        Login
                    </button>
                    <div className='flex mt-4 text-[12px]'>
                        <p className='text-[#72767d]'>Need an account? </p>
                        <Link to='/register' className='ml-2 text-blue-400'>
                            Register
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop Version */}
            <div className='hidden relative sm:block h-[100vh]'>
                <img src={loginBg} alt="" className='w-[180rem] object-cover z-0' />
                <div className='bg-[#36393f] absolute z-40 sm:top-[20%] sm:left-[13%] lg:top-[25%] lg:left-[30%] flex items-center rounded-md'>
                    <div className='flex-start w-[100%] mt-[20px] ml-7 mb-5 '>
                        <p className='font-semibold text-white text-[20px]'>Welcome back!</p>
                        <p className='text-[#72767d] text-[12px]'>We're so excited to see you again</p>
                        <div className='mt-2'>
                            <p className='font-semibold text-[13px] text-[#b9bbbe]'>EMAIL</p>
                            <input className='w-[92%] h-7 mt-2 bg-[#2f3136] p-2 text-white border-black-500 outline-none' type="email" />
                        </div>
                        <div className='mt-4'>
                            <p className='font-semibold text-[13px] text-[#b9bbbe]'>PASSWORD</p>
                            <input className='w-[92%] h-7 mt-2 bg-[#2f3136] p-2 text-white border-neutral-800 outline-none' type="password" />
                        </div>

                        <p className='text-[12px] mt-5 text-blue-400'>Forgot your password?</p>
                        <button className='mt-8 bg-[#5865f2] text-white font-semibold w-[90%] h-9'>
                            Login
                        </button>
                        <div className='flex mt-4 text-[12px]'>
                            <p className='text-[#72767d]'>Need an account? </p>
                            <Link to='/register' className='ml-2 text-blue-400'>
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center flex-col pr-14'>
                        <img src={qrCode} alt="" className='w-[70%] p-2 bg-white rounded-md' />
                        <div className='flex items-center flex-col text-center w-[120%] '>
                            <p className='text-white font-regular text-[16px] mt-3'>Log in with QR Code</p>
                            <p className='text-[#72767d] text-[10px]'>Scan this with the
                                <span className='ml-1 mr-1 font-semibold text-[#b9bbbe]'>Discord mobile app</span>
                                to log in instantly
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginRegister