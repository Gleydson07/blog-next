import Image from 'next/image'
import styles from "./styles.module.scss"

interface CardProps{
  image: StaticImageData;
  title: string;
  description: string;
}

export function Card({image, title, description}: CardProps){
  return (
    <div className={styles.container}>
      <Image src={image} alt="image default"/>
      <div>
        <p>{title}</p>
        <span>
          {description}
        </span>
      </div>
    </div>
  )
}