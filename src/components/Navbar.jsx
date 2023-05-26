import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import discordLogo from '../assets/discord_main_logo.svg'

//import Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className='flex justify-between mx-[10px] items-center md:justify-evenly py-3'>
            <Link to='/' className='object-contain'>
                <img src={discordLogo} alt="discord logo" className='w-[75%] mx-4' />
            </Link>
            <div className={`sm:flex md:flex lg:flex space-x-6 items-center z-40
            ${open ? 'p-5 gap-6 mt-1 text-black flex flex-col absolute right-0 top-10 bg-white rounded-sm '
                    :
                    'right-[200px] hidden'}
            `}>
                <a className='link' href="/download">Download</a>
                <a className='link' href="">Nitro</a>
                <a className='link' href="">Safety</a>
                <a className='link' href="">Support</a>
                <a className='link' href="">Blog</a>
                <a className='link' href="">Careers</a>
                <a className='sm:hidden md:hidden lg:hidden bg-[#5865f2] p-2 rounded-full text-white
                w-[100%] text-center
                '
                    href="/login">
                    Login
                </a>
            </div>
            <div className='flex space-x-4'>
                <Link to='/login' className='bg-white p-2 rounded-full text-[10px] md:text-xs px-4
                hover:text-[#5865f2] outline-none hidden sm:block md:block lg:block
                '>
                    Login
                </Link>
            </div>
            <div className='sm:hidden md:hidden lg:hidden'>
                <button onClick={() => setOpen(!open)}
                    className='text-white sm:hidden md:hidden lg:hidden outline-none'>
                    {open ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
        </header>
    )
}

export default Navbar