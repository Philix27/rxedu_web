import { Section, SectionTitle, SectionText } from '../../styles';
import QuizCategory from '../quiz/quiz_category'
import styles from './quizpage.module.css'


export default function QuizComp() {
  return (
    < >
      <div className={styles.sectionHeader}>

        <SectionTitle>Quiz Categories</SectionTitle>
      </div>
        <QuizCategory />
     
     </>
    
  )
}

