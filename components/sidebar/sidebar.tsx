import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaWindowClose, FaRegWindowClose, FaFacebook, FaTwitch, FaTwitter, FaInstagram } from 'react-icons/fa';

const SideBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSideMenu = () => {
        setShowSidebar(!showSidebar)
    }

    const navItems = [
        {
            name: 'Latest',
            link: '/latest',
            subNav: []
        },
        {
            name: 'Sections',
            link: '',
            subNav: [
                {
                    name: 'Artists', //Talking about artisits
                    link: 'category/artists',
                    subNav: []
                },
                {
                    name: 'Businesses', //Talking about business
                    link: 'category/businesses',
                    subNav: []
                },
                {
                    name: 'Events', //Talking about events
                    link: 'category/events',
                    subNav: []
                },
                {
                    name: 'Music', //Talking about music
                    link: 'category/music',
                    subNav: []
                },
                {
                    name: 'Wellness', //Talking about wellness
                    link: 'category/wellness',
                    subNav: []
                },
                {
                    name: 'Tech', //Talking about tech NFTS, etc
                    link: 'category/tech',
                    subNav: []
                }
            ]
        },
        {
            name: 'Videos',
            link: '/videos',
            subNav: []
        },
        {
            name: 'Brands',
            link: '/brands',
            subNav: [
                {
                    name: 'Art of Digging',
                    link: 'https://artofdigging.com',
                    subNav: []
                },
                {
                    name: 'Femmifesting',
                    link: 'https://femmifesting.com',
                    subNav: []
                }
            ]
        },
        {
            name: 'Stream',
            link: '/stream',
            subNav: []
        },
        {
            name: 'Shop',
            link: '/shop',
            subNav: []
        },
        {
            name: 'About',
            link: '/about',
            subNav: []
        },
        {
            name: 'Contact',
            link: '/contact',
            subNav: []
        }
    ]

    return (
        <div className='md:hidden lg:hidden text-zinc-100'>
            <div className='text-3xl text-center'>
                <FaBars onClick={toggleSideMenu}/>
            </div>
            
            <aside className={`transform fixed w-screen z-50 bg-zinc-900 left-0 top-0 h-full ease-in-out duration-300 ${!showSidebar ? "-translate-x-full" : "translate-x-0"}`}>
                <div className='flex flex-row p-4 justify-center items-center border-b border-zinc-500'>
                    <h3 className='text-3xl'>THE ROSE CRIB</h3>

                    <FaRegWindowClose onClick={toggleSideMenu} className="ml-auto text-3xl"/>
                </div>

                {navItems.map((item, index) => {
                    return (
                        <div key={index} className='text-lg py-4 uppercase border-b border-zinc-500 mx-4'>
                            <Link href={item.link} passHref>
                                <a onClick={toggleSideMenu}>
                                    {item.name}
                                </a>
                            </Link>

                            {item.subNav.length > 0 && <div className='grid grid-cols-2 gap-4 mt-4 capitalize opacity-40'>
                                {item.subNav.map( (item2, index2) => {
                                    return (
                                        <Link href={item2.link} key={index}>
                                            {item2.name}
                                        </Link>
                                    )
                                })}
                            </div>}
                        </div>
                    )
                })}

                <div className='m-4'>
                    <div className='text-xl'>Follow The Rose Crib</div>
                    <div className='flex flex-row text-3xl mt-2'>
                        <FaTwitter className='mr-4'/>
                        <FaTwitch className='mr-4'/>
                        <FaInstagram className='mr-4'/>
                    </div>
                </div>

                <div className='m-4 bottom-0 fixed'>
                    <div className='text-lg'>&copy; 2022 The Rose Crib</div>
                </div>
               
            </aside>
        </div>
    )
}

export default SideBar;
