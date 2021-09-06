import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import card1Img from '../images/card1.png'
import card2Img from '../images/card2.png'
import card3Img from '../images/card3.png'
import card4Img from '../images/card4.png'

import styles from './blog.module.scss'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Movimento Compre e Confie</title>
      </Head>
      
      <Header/>

      <main className={styles.container}>
        <h2>Fique de olho</h2>
        <div className={styles.content}>
          <Card 
            image={card1Img} 
            title="Aumente suas vendas" 
            description="Aumente suas vendas e sua reputação online com o maior selo de confiança do mercado."
          />

          <Card 
            image={card4Img} 
            title="Nós confiamos em dados!" 
            description="Através dos dados transacionais totais e reais de milhares de varejistas brasileiros, oferecendo relatórios e análises."
          />
          
          <Card 
            image={card2Img} 
            title="Benefícios gratuitos para o seu e-commerce" 
            description="SELO: Aumente suas vendas, mostre que sua loja é segura para compras. REPUTAÇÃO:
            Nota obtida pela avaliação dos consumidores"
          />

          <Card 
            image={card3Img} 
            title="Entenda o processo de pesquisa" 
            description="É por meio das pesquisas de satisfação que o Movimento Compre & Confie analisa e mensura a reputação das lojas participantes."
          />

        </div>
      </main>
    </>
  )
}

export default Blog
