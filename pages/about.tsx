import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/featured/featured'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Latest from '../components/latest/latest'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  


  return (
    <div>
      <Head>
        <title>The Rose Crib - About</title>
        <meta name="description" content="The Rose Crib - About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='container mx-2xl mx-auto flex flex-row gap-3 mt-8'>
        About
      </main>
    </div>
  )
}

export default About;