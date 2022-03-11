// import Image from 'next/image';
import React from 'react'
import styles from './Landing.module.css'
import {Section, Content, SectionTitle, Img, Linka, SmallText } from './LandingStyles'

export default function LandingPage() {

    return (
      <div id='home' className={styles.container}> 
       <Content>
              <SectionTitle>Rxedu.online</SectionTitle>
          <SmallText>
            An educational platform for all Pharmacists and Medical Personnels
          </SmallText> 
       </Content>
      </div>
    )
}


