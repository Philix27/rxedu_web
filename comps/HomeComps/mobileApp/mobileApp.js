import React from 'react'
import styles from './mobileApp.module.css'
// import Image from 'next/image'
import Link from 'next/link'
import { Section, SectionTitle, SectionText } from '../../../styles';




export default function MobileApp() {



    return (
        <Section id="mobileApp">
            {/* <SectionTitle>Mobile App</SectionTitle> */}
            
            <div className={styles.content}>
                <div className={styles.ceo}>
                    {/* <Image src="/pp.jpg" width={500} height={500}/> */}
                <img className={styles.img} src="/images/project/rxedd.jpg" alt=""/>
                </div>
                <div className={styles.sideContent}>
                    <h3>Download Mobile App</h3>
                    <SectionText>
                         Download the mobile app to get the most out of this platform.
                        More convinence and you can easily save your progress as you learn.
                    </SectionText>      
                </div>
            </div>
          
        </Section>
    )
}
