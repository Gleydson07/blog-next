import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'

import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Movimento Compre e Confie</title>
      </Head>
      
      <Header/>

    </>
  )
}

export default Home
