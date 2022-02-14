import React from 'react'
import styles from './About.module.css'
import { Section, SectionTitle, SectionText, SectionJumbotron } from '../../../styles';




export default function Objectives() {



    return (
        <Section id="objectives">
            <SectionTitle>Objectives</SectionTitle>
            <div className={styles.content}>
               
                <div >
                    <SectionJumbotron>
                       An Educaational platform for Pharmacists preparing for various exams.
                       Contains MCQs, and related materials need to ace pharmaceutical exams.
                    </SectionJumbotron>      
                </div>
                <div >
                    <SectionJumbotron>
                       Covers both undergraduate and post graduate courses. 
                    </SectionJumbotron>      
                </div>
            </div>           
        </Section>
    )
}
