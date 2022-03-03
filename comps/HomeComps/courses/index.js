// import Image from 'next/image';

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import styles from './projects.module.css'
import { projects } from './constants';
import {   GridContainer, HeaderThree,  TitleContent, Img } from './projectsStyles';
import { Section, SectionTitle, SectionText } from '../../../styles';


export default function Projects() {
    return (
        <Section id="courses">
          <SectionTitle>Courses</SectionTitle>
        
             <GridContainer>
      {projects.map(({
    title,
    description,
    image,
    tags,
    source,
    visit,
    id,
  }) => (
        <motion.div
          key={id}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "spring", stiffness:"110"}}> 
          {/* transition={{duration: 1.7, delay: 1, type: "tween", }}> */}
          {/* <Image src={image} width={500} height={300}/> */}
          <Link href={visit} target="_blank"><Img src={image} /></Link>
        {/* <BlogCard> */}
        <TitleContent>
          <HeaderThree >{title}</HeaderThree>
        </TitleContent>
          <div style={{padding: "0px 20px"}}>
            <SectionText>{description}</SectionText>
            {/* <CardInfo>{description}</CardInfo> */}
        </div>
       
       {/* </BlogCard> */}
       </motion.div>
      ))}
    </GridContainer>
            <br/>
            <br/>
            <br/>
            {/* <div className={styles.cards}>
              
                <div className={styles.card}>
                <FaGithub className={styles.icon} />
                  <h1 className={styles.title}>Why Philix?</h1>
                    <p className={styles.subtitle}>
                   From classy clothing to matching accessories, we’ve got you. 
                        In a world of boring male fashion, join hands 
                      
                </p>
                </div>
            </div> */}
            {/* </div> */}
         </Section>
    )
}