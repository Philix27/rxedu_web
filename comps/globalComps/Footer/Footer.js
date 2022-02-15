import React from 'react'
import styles from './Footer.module.css'
import { Section, Linka } from './footerStyles';
import { AiOutlineMail } from 'react-icons/ai'
import { IoLogoGoogle } from 'react-icons/io'

export default function Footer() {
    return (
        <Section>
            <div>
                <ul >
                    <li className={styles.list_headers}>Navigators</li>
                    <li>
                        <Linka href="#home" >Home</Linka>
                    </li>
                    <li>
                        <Linka href="#courses" >Projects</Linka>
                    </li>
                    <li>
                        <Linka href="#objective" >About</Linka>
                    </li>
                     
                  
                </ul>
            </div>
            <div>
                <ul >
                    <li className={styles.list_headers}>Contacts</li>
                     <li>
                        <Linka  target="_blank" href="/docs/res.pdf" download="philix_cv">
                            {/* <AiFillGithub size={15} />   */}
                            <span className={styles.contact_list}>Resume</span>
                        </Linka>
                    </li>
                    <li>
                        <Linka  target="_blank" href="mailto:rxedu.online@gmail.com">
                            <AiOutlineMail size={15} />
                            <span className={styles.contact_list}>Email</span>
                        </Linka>
                    </li>
                    <li>
                        <Linka
                            target="_blank"
                            href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website.">
                            <IoLogoGoogle size={15} />
                            <span className={styles.contact_list}>Playstore</span>
                        </Linka>
                    </li>
                   
                   
                </ul>
            </div>
          
           
        </Section>
    )
}
