import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Ad from '../components/ad/ad'
import Featured from '../components/featured/featured'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Latest from '../components/latest/latest'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const latestData = [
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Flogan-paul-wrestlemania-38-most-expensive-psa-grade-10-pikachu-illustrator-card-guinness-world-records-00.jpg?w=200&cbr=1&q=90&fit=max',
      title: 'Logan Paul Wore a $5,275,000 USD PSA Grade 10 Pikachu Illustrator Card for WrestleMania 38',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Flogan-paul-wrestlemania-38-most-expensive-psa-grade-10-pikachu-illustrator-card-guinness-world-records-00.jpg?w=200&cbr=1&q=90&fit=max',
      title: 'Logan Paul Wore a $5,275,000 USD PSA Grade 10 Pikachu Illustrator Card for WrestleMania 38',
      link: '/article/logan'
    }
  ]

  const featuredData = [
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don’t Buy a Maserati If You Want to Be Cool',
      link: '/article/logan'
    }
  ]


  return (
    <div>
      <Head>
        <title>The Rose Crib - Home</title>
        <meta name="description" content="The Rose Crib - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='container mx-2xl mx-auto flex flex-col md:mt-8'>
        <div className='md:border-r md:border-l md:border-slate-500'>
          <Hero 
            image='https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fpalace-calvin-klein-ck1-vans-release-details-first-look-00.jpg?464=&cbr=1&q=90' 
            title='Palace Reworks Calvin Klein Denim, Underwear and Fragrance for "CK1 Palace" Collaboration'  
            link='/article/logan-logan'        
          />
        </div>
        <div className='w-[calc(100%-30px)] m-auto grid grid-cols-2 gap-3'>
          {latestData.map((l, index) => (
            <Latest 
              key={index} 
              image={l.image} 
              title={l.title} 
              link={l.link} 
            />
          ))}
        </div>
        <Ad />
        <div className=''>
          <div className='flex flex-row text-zinc-100 border-b m-4 pb-2 items-center border-zinc-500'>
            <h3 className='text-3xl'>Latest</h3>
            <div className='ml-auto'>See all</div>
          </div>
          {featuredData.map((f, index) => (
            <Featured 
              key={index}
              image={f.image}
              title={f.title}
              link=''
            />
          ))}
          </div>
      </main>
    </div>
  )
}

export default Home
