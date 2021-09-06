
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgMCC from '../../images/mcc.png'
import styles from "./styles.module.scss"

export function Header(){
  return (
    <div className={styles.container}>
      <header>
        <Image src={imgMCC} alt="logo MCC"/>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
    </div>
  )
}