import Image from 'next/image';
import React from 'react'
import styles from './Landing.module.css'

export default function CourseLanding({ title, subtitle, bgImg }) {
  return (
    <div className='section'>
      <div className={styles.imgWrapper}>
        <Image src='/images/dark.jpg'
          objectFit='cover'
          layout='responsive'
          height="300"
          width="440px" />
      </div>
    </div>
  );
}


