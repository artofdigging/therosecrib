import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface HeroProps {
    image: string;
    title: string;
    link: string;
}

const Hero = ({ image, title, link }: HeroProps ) => {
    return (
        <div className='text-zinc-100 text-3xl md:ml-4 md:mr-4 flex flex-col'>
            <div className='basis-full'>
                <Link href={link} passHref>
                    <a>
                        <img  src={image} alt={title} />
                    </a>
                </Link>                
            </div>

            <h2 className='hover:text-gray-400 basis-full bg-zinc-900 text-xl text-center -mt-10 w-[calc(100%-30px)] m-auto px-4 py-4'>
                <Link href={link}>
                    {title}
                </Link>
            </h2>
        </div>
    )   
}

export default Hero;