import Image from 'next/image';
import React from 'react'
import styles from './Landing.module.css'
import {Content, SectionTitle, Img, Linka } from './LandingStyles'
import { Section } from '../../../styles';
export default function CourseLanding({title, subtitle, bgImg}) {

    return (
      <Section > 
        <SectionTitle>Pharmacology Topics</SectionTitle>
        <div className={styles.imgWrapper}>
        <Image  src='/images/dark.jpg'  objectFit='cover' layout='fill' />

        </div>
      </Section>
    )
}


