import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface LatestProps {
    image: string;
    title: string;
    link: string;
}

const Latest = ({ image, title, link }: LatestProps) => {
    return (
        <div className='mx-auto flex flex-col'>
            <div className=''>
                <Link href={link} passHref>
                    <a>
                        <img src={image} alt={title} />
                    </a>
                </Link>
            </div>
            <h2 className='text-zinc-100 text-sm text-center hover:text-gray-400'>
                <Link href={link}>
                    {title}
                </Link>
            </h2>
        </div>
    )
}

export default Latest;