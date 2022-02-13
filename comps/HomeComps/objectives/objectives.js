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
                        I am a dedicated developer who aims at making my community
                        and the world a better place through the use of Technology.

                    </SectionJumbotron>      
                </div>
                <div >
                    <SectionJumbotron>
                        An Educaational App for Pharmacists preparing for various exams.
                        Contains MCQs, and related materials need to ace pharmaceutical exams.
                    </SectionJumbotron>      
                </div>
            </div>           
        </Section>
    )
}
