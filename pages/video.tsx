import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/featured/featured'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Latest from '../components/latest/latest'
import styles from '../styles/Home.module.css'

const Videos: NextPage = () => {
  const latestData = [
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Flogan-paul-wrestlemania-38-most-expensive-psa-grade-10-pikachu-illustrator-card-guinness-world-records-00.jpg?w=200&cbr=1&q=90&fit=max',
      title: 'Logan Paul Wore a $5,275,000 USD PSA Grade 10 Pikachu Illustrator Card for WrestleMania 38',
      link: '/'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Flogan-paul-wrestlemania-38-most-expensive-psa-grade-10-pikachu-illustrator-card-guinness-world-records-00.jpg?w=200&cbr=1&q=90&fit=max',
      title: 'Logan Paul Wore a $5,275,000 USD PSA Grade 10 Pikachu Illustrator Card for WrestleMania 38',
      link: '/'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Flogan-paul-wrestlemania-38-most-expensive-psa-grade-10-pikachu-illustrator-card-guinness-world-records-00.jpg?w=200&cbr=1&q=90&fit=max',
      title: 'Logan Paul Wore a $5,275,000 USD PSA Grade 10 Pikachu Illustrator Card for WrestleMania 38',
      link: '/'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Flogan-paul-wrestlemania-38-most-expensive-psa-grade-10-pikachu-illustrator-card-guinness-world-records-00.jpg?w=200&cbr=1&q=90&fit=max',
      title: 'Logan Paul Wore a $5,275,000 USD PSA Grade 10 Pikachu Illustrator Card for WrestleMania 38',
      link: '/'
    }
  ]

  const featuredData = [
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don???t Buy a Maserati If You Want to Be Cool'
    },
    {
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fmaserati-collaborations-davide-grasso-klaus-busse-interview-main.jpg?464=&cbr=1&q=90',
      title: 'Don???t Buy a Maserati If You Want to Be Cool'
    }
  ]


  return (
    <div>
      <Head>
        <title>The Rose Crib - Events</title>
        <meta name="description" content="The Rose Crib - Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative flex h-screen overflow-hidden">
        <Header />
        <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source
            src="https://media.graphassets.com/zZrAmWZaS3STUb1yYNQK"
            type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    </header>
    </div>
  )
}

export default Videos;
