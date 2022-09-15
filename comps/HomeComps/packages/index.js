// import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import {motion} from 'framer-motion'
import styles from './styles.module.css'
import { productsList } from './constants';


export default function Packages() {
  return (
      <div className='packages'>
        <div className='section' id="products">
          <div className='sectionTitle'>Packages</div>
             <div className="gridContainer">
      {productsList.map(({title,description, url,icon,id}, index) => (
        <Link href={`${url}`} key={index}>
          <a>
        <motion.div
          key={index}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "tween", }}>
          
          {icon}
            <h3 className='headerThree'>{title}</h3>
          
          <div style={{padding: "0px 20px"}}>
            <div className='sectionText'>{description}</div>
          </div>       
            </motion.div>
            </a>
          </Link>
      ))}
    </div>
            <br/>
            <br/>
         
      </div>
      </div>
    )
}
