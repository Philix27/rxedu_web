// import Image from 'next/image';
import React from 'react'
import styles from './Landing.module.css'
import {Section, Content, SectionTitle, Img, Linka } from './LandingStyles'

export default function LandingPage() {

    return (
      <div id='home' className={styles.container}> 
        {/* <Image src='/images/dark.jpg' width={700} height={400} /> */}
       <Content>
              <SectionTitle>Rxedu.online</SectionTitle>
           
          <p className={styles.smallText}>
            An educational platform for all Pharmacists and Medical Personnels
          </p> 

         
       </Content>
      </div>
    )
}


