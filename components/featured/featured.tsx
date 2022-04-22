import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface FeaturedProps {
    image: string;
    title: string;
    link: string;
}

const Featured = ({ image, title, link }: FeaturedProps) => {
    return (
        <div className='flex flex-col mb-4 mx-4 border-b border-zinc-500 pb-2'>
            <div className='basis-full mb-1 border border-zinc-500' >  
                <Link href={link}>
                    <a>
                        <img src={image} alt={title}/>
                    </a>
                </Link>
            </div>
            <h2 className=' text-zinc-100 basis-full hover:text-gray-400 text-2xl' >
                <Link href={link}>
                    {title}
                </Link>
            </h2>
            <div className='text-lg text-zinc-500'>
                Presented by Adaptia
            </div>

            <div className='text-lg text-zinc-500 flex flex-row'>
                <div className='mr-2'>
                    NFT
                </div>
                <div>
                    Apr 14, 2022
                </div>
            </div>
        </div>
    )
}

export default Featured;