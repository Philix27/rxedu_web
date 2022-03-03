// import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import styles from './styles.module.css'
import { productsList } from './constants';
import {  GridContainer, HeaderThree,  TitleContent, } from './styles';
import { Section, SectionTitle, SectionText } from '../../../styles';


export default function Packages() {
    return (
        <Section id="products">
       
          <SectionTitle>Packages</SectionTitle>
        
             <GridContainer>
      {productsList.map(({
    title,
        description,
    url,
    icon,
    id,
  }) => (
        <motion.div
          key={id}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "tween", }}>
          
          {icon}
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
          </TitleContent>
          
          <div style={{padding: "0px 20px"}}>
            <SectionText>{description}</SectionText>
          </div>       
       </motion.div>
      ))}
    </GridContainer>
            <br/>
            <br/>
            <br/>
         
         </Section>
    )
}
