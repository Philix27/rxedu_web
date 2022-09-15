import React from 'react'
import styles from './Footer.module.css'
import { FaWhatsapp } from 'react-icons/fa'
import {
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillPhone,
} from 'react-icons/ai'

export default function Footer() {
    return (
        // <div id="footer" className='footer_section'>
        <div id="footer" className={styles.wrapper}>
        <div className={styles.container}  >
        {/* <div className="container"  > */}
            <div>
                <ul >
                    <li className={styles.list_headers}>Navigators</li>
                    <li>
                        <a className={styles.Linka} href="#home" >Home</a>
                    </li>
                    <li>
                        <a className={styles.Linka}  href="#contact" >Contact</a>
                    </li>
                    <li>
                        <a className={styles.Linka} href="#projects" >Projects</a>
                    </li>
                    <li>
                        <a className={styles.Linka} href="#about" >About</a>
                    </li>
                     
                  
                </ul>
            </div>
            <div>
                <ul >
                    <li className={styles.list_headers}>Contacts</li>
                     <li>
                        <a className={styles.Linka} target="_blank" href="/docs/res.pdf" download="philix_cv">
                            {/* <AiFillGithub size={15} />   */}
                            <span className={styles.contact_list}>Resume</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka} target="_blank" href="mailto:philixbob@gmail.com">
                            <AiOutlineMail size={15} />
                            <span className={styles.contact_list}>Email</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka}
                            target="_blank"
                            href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website.">
                            <FaWhatsapp size={15} />
                            <span className={styles.contact_list}>Whatsapp</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka}
                            href="tel:+2348108850572">
                            <AiFillPhone size={15} />
                            <span className={styles.contact_list}>Phone </span>
                        </a>
                    </li>
                   
                </ul>
            </div>
            <div>
                <ul >
                     <li className={styles.list_headers}>Socials</li>
                   
                    <li>
                        <a className={styles.Linka} target="_blank" href="https://linkedin.com/in/eligbue-felix-362372124">
                            <AiFillLinkedin size={15} /> 
                            <span className={styles.contact_list}>Linkedin</span>
                            
                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka} target="_blank" href="https://facebook.com/eligbue.felix.7">
                          <AiFillFacebook size={ 15}/>  
                            <span className={styles.contact_list}>Facebook</span>

                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka} target="_blank" href="https://twitter.com/eligbue_felix">
                         <AiFillTwitterSquare />   
                            <span className={styles.contact_list}>Twitter</span>

                        </a>
                    </li>
                    <li>
                        <a className={styles.Linka} target="_blank" href="https://github.com/Philix27">
                            <AiFillGithub size={15} />  
                            <span className={styles.contact_list}>Github</span>
                        </a>
                    </li>
                   
                </ul>
            </div>
           
            </div >
            <div className={styles.copyright}>
                {/* <p>Copyright &copy;.</p> */}
                <p>2022 Copyright &copy; All Rights Reserved</p>
            </div>
            </div>
    )
}
