import { Section, SectionTitle, SectionSubTitle, SectionText } from '../../styles';
import QuizCategory from '../quiz/quiz_category'
import styles from './quizpage.module.css'


export default function Quiz() {
  return (
    < >
      <div className={styles.sectionHeader}>
        <SectionTitle>Quiz Categories</SectionTitle>
        <br />
        <br />
        <br />
        <SectionSubTitle>General Pharmacology</SectionSubTitle>
      </div>
        <QuizCategory apiCategory='mcq' />
      <div className={styles.sectionHeader}>
        <SectionSubTitle>PEP Past Questions</SectionSubTitle>
      </div>
        <QuizCategory apiCategory='mcq_pep' />
      <div className={styles.sectionHeader}>
        <SectionSubTitle>Clinical Pharmacy</SectionSubTitle>
      </div>
        <QuizCategory apiCategory='mcq'/>
     </>
    
  )
}

