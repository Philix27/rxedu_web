import React from 'react'
import styles from './Footer.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLogoGoogle } from 'react-icons/io'

export default function Footer() {
    return (
        <div className={styles.section}>
            <div>
                <ul >
                    <li className={styles.list_headers}>Navigators</li>
                    <li>
                        <a className={styles.linka} href="#home" >Home</a>
                    </li>
                    <li>
                        <a className={styles.linka} href="#courses" >Projects</a>
                    </li>
                    <li>
                        <a className={styles.linka} href="#objective" >About</a>
                    </li>
                     
                  
                </ul>
            </div>
            <div>
                <ul >
                    <li className={styles.list_headers}>Contacts</li>
                     <li>
                        <a className={styles.linka} target="_blank" href="/docs/res.pdf" download="philix_cv">
                            {/* <AiFillGithub size={15} />   */}
                            <span className={styles.contact_list}>Resume</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.linka}  target="_blank" href="mailto:rxedu.online@gmail.com">
                            <AiOutlineMail size={15} />
                            <span className={styles.contact_list}>Email</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.linka}
                            target="_blank"
                            href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website.">
                            <IoLogoGoogle size={15} />
                            <span className={styles.contact_list}>Playstore</span>
                        </a>
                    </li>
                   
                   
                </ul>
            </div>
          
           
        </div>
    )
}
