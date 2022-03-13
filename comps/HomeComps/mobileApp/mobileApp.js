import React from 'react'
import styles from './mobileApp.module.css'


export default function MobileApp() {

    return (
        <div className='section' id="mobileApp">
            <div className={styles.content}>
                <div className={styles.ceo}>
                    {/* <Image src="/pp.jpg" width={500} height={500}/> */}
                <img className={styles.img} src="/images/project/rxedd.jpg" alt=""/>
                </div>
                <div className={styles.sideContent}>
                    <h3>Download Mobile App</h3>
                    <div className='sectionText'>
                         Download the mobile app to get the most out of this platform.
                        More convinence and you can easily save your progress as you learn.
                    </div>    
                    
                    <div className={styles.btn}>
                        <a href='https://play.google.com/store/apps/details?id=com.philix.rxedu'
                            download="philix_cv">Download App</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
