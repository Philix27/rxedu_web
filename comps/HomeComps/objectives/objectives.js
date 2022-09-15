import React from 'react'
import styles from './styles.module.css'


export default function Objectives() {

    return (
        <div className='section' id="objectives">
            <div className='sectionTitle'>Objectives</div>
            <div className={styles.content}>
               
                <div >
                    <div className='sectionJumbotron'>
                       An Educaational platform for Pharmacists preparing for various exams.
                       Contains MCQs, and related materials need to ace pharmaceutical exams.
                    </div>      
                </div>
                <div >
                    <div className='sectionJumbotron'>
                       Covers both undergraduate and post graduate courses. 
                    </div>      
                </div>
            </div>           
        </div>
    )
}
