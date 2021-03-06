import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import {motion} from 'framer-motion'


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
                    <motion.div
                        className={styles.nav_bg}
                        initial={{ x: "-50vw",  }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{duration: 1.7, delay: 1, type: "tween", }} >
                
                <ul className={styles.nav_start_list}>       
                        <li className={styles.nav_start_list_item}>
                            <div className={styles.bars_close}>
                                <label htmlFor="check" >
                                <FaTimes />
                                </label>
                            </div>
                        </li>
                        <li className={styles.nav_start_list_item}><Link href="/"><a className={styles.link}>Home</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="#courses"><a className={styles.link}>Courses</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="#team"><a className={styles.link}>Team</a></Link></li>
                        {/* <li className={styles.nav_start_list_item}><Link href="/products"><a className={styles.link}>Products</a></Link></li> */}
                        {/* <li className={styles.nav_start_list_item}><Link href="#blogs"><a className={styles.link}>Blogs</a></Link></li> */}
                        {/* <li className={styles.nav_start_list_item}><Link href="/blog"><a className={styles.link}>Blog</a></Link></li> */}
                        {/* <li className={styles.nav_start_list_item}><Link href="/products"><a className={styles.link}>Services</a></Link></li> */}
                    </ul>
               </motion.div>

           </div>
          
        </div>
        </>
    )
}
