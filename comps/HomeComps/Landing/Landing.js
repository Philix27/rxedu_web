// import Image from 'next/image';
import React from 'react'
import styles from './Landing.module.css'

export default function LandingPage() {

    return (
      <div id='home' className={styles.container}> 
       <div className='landingStyles'>
              <div className='sectionTitle'>Rxedu.online</div>
          <p className='smallText'>
            An educational platform for all Pharmacists and Medical Personnels
          </p> 
       </div>
      </div>
    )
}


