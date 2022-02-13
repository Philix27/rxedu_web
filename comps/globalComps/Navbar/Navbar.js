import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {
    return (
        <>    
        <div className={styles.nav}>

           <input type="checkbox" id="check" className={styles.check} />
            <div className={styles.bars}>
                <label htmlFor="check" >
                <FaBars />
                </label>
            </div>

           <div className={styles.nav_start}>
           <img className={styles.logo} src="/images/logo.png" width={75} height={25}/>
           {/* <Image className={styles.logo} src="/images/logo.png" width={90} height={45}/> */}
               <div className={styles.nav_bg} >
                
                <ul className={styles.nav_start_list}>       
                        <li className={styles.nav_start_list_item}>
                            <div className={styles.bars_close}>
                                <label htmlFor="check" >
                                <FaTimes />
                                </label>
                            </div>
                        </li>
                        <li className={styles.nav_start_list_item}><Link href="/"><a className={styles.link}>Home</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="#about"><a className={styles.link}>About</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="/project"><a className={styles.link}>Projects</a></Link></li>
                        {/* <li className={styles.nav_start_list_item}><Link href="/products"><a className={styles.link}>Products</a></Link></li> */}
                        <li className={styles.nav_start_list_item}><Link href="#blogs"><a className={styles.link}>Blogs</a></Link></li>
                        {/* <li className={styles.nav_start_list_item}><Link href="/blog"><a className={styles.link}>Blog</a></Link></li> */}
                        {/* <li className={styles.nav_start_list_item}><Link href="/products"><a className={styles.link}>Services</a></Link></li> */}
                        {/* <li className={styles.nav_start_list_item}><Link href="/edu"><a className={styles.link}>Education</a></Link></li> */}
                        {/* <li className={styles.nav_start_list_item}> <Link href="/contact_us"><a className={styles.link}>Contact Us</a></Link></li> */}
                        {/* <li className={styles.nav_start_list_item}> <Link href="/fb"><a className={styles.link}>Testop</a></Link></li> */}
                        
                    </ul>
               </div>

           </div>
          
        </div>
        </>
    )
}
