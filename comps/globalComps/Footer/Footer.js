import React from 'react'
import styles from './Footer.module.css'
import { Section, Linka } from './footerStyles';
import { FaWhatsapp } from 'react-icons/fa'
import {
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillPhone,
    // AiFillTwitter
} from 'react-icons/ai'

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
                        <Linka href="#contact" >Contact</Linka>
                    </li>
                    <li>
                        <Linka href="#projects" >Projects</Linka>
                    </li>
                    <li>
                        <Linka href="#about" >About</Linka>
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
                        <Linka  target="_blank" href="mailto:philixbob@gmail.com">
                            <AiOutlineMail size={15} />
                            <span className={styles.contact_list}>Email</span>
                        </Linka>
                    </li>
                    <li>
                        <Linka
                            target="_blank"
                            href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website.">
                            <FaWhatsapp size={15} />
                            <span className={styles.contact_list}>Whatsapp</span>
                        </Linka>
                    </li>
                    <li>
                        <Linka
                            href="tel:+2348108850572">
                            <AiFillPhone size={15} />
                            <span className={styles.contact_list}>Call me </span>
                        </Linka>
                    </li>
                   
                </ul>
            </div>
            <div>
                <ul >
                     <li className={styles.list_headers}>Socials</li>
                   
                    <li>
                        <Linka target="_blank" href="https://linkedin.com/in/eligbue-felix-362372124">
                            <AiFillLinkedin size={15} /> 
                            <span className={styles.contact_list}>Linkedin</span>
                            
                        </Linka>
                    </li>
                    <li>
                        <Linka target="_blank" href="https://facebook.com/eligbue.felix.7">
                          <AiFillFacebook size={ 15}/>  
                            <span className={styles.contact_list}>Facebook</span>

                        </Linka>
                    </li>
                    <li>
                        <Linka target="_blank" href="https://twitter.com/eligbue_felix">
                         <AiFillTwitterSquare />   
                            <span className={styles.contact_list}>Twitter</span>

                        </Linka>
                    </li>
                    <li>
                        <Linka  target="_blank" href="https://github.com/Philix27">
                            <AiFillGithub size={15} />  
                            <span className={styles.contact_list}>Github</span>
                        </Linka>
                    </li>
                   
                </ul>
            </div>
           
        </Section>
    )
}
