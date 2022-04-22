import React from 'react';
import { FaBars, FaSearch } from "react-icons/fa";
import Link from 'next/link';
import SideBar from '../sidebar/sidebar';

const Header = () => {
    const headerData = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Events',
            link: '/events'
        },
        {
            name: 'Artists',
            link: '/artists'
        },
        {
            name: 'Businesses',
            link: '/businesses'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]


    return (
        <nav className='border-b border-slate-500'>
            <div  className='mx-2xl mx-auto flex flex-row bg-zinc-900 text-white container items-center px-4 py-4'>
                <SideBar />
                <div className='uppercase text-xl font-bold justify-center items-center flex p-2'>
                    <Link href="/" passHref>
                        <a>
                            The Rose Crib
                        </a>
                    </Link>
                </div>
                <div className='ml-auto text-2xl'>
                    <FaSearch />
                </div>
                {headerData.map((h, index) => (
                    <div className='hidden md:flex lg:flex justify-center items-center p-2 uppercase text-xs hover:text-gray-400' key={index}>
                        <Link href={h.link}>
                            {h.name}
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Header;