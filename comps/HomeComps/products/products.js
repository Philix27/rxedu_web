// import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import styles from './products.module.css'
import { productsList } from './productsConstants';
import {  BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './productsStyles';
import { Section, SectionTitle, SectionText } from '../../../styles';


export default function Products() {
    return (
        <Section id="products">
       
          <SectionTitle>Structures</SectionTitle>
        
             <GridContainer>
      {productsList.map(({
    title,
    description,
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
