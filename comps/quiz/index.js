import QuizCategory from '../quiz/quiz_category'
import styles from './quizpage.module.css'


export default function Quiz() {
  return (
    < >
      <div className={styles.sectionHeader}>
        <div className='sectionTitle'>Quiz Categories</div>
        <br />
        <br />
        <div className='sectionTitle'>General Pharmacology</div>
      </div>
        <QuizCategory apiCategory='mcq' />
      <div className={styles.sectionHeader}>
        <div className='sectionTitle'>PEP Past Questions</div>
      </div>
        <QuizCategory apiCategory='mcq_pep' />
      <div className={styles.sectionHeader}>
        <div className='sectionTitle'>Clinical Pharmacy</div>
      </div>
        <QuizCategory apiCategory='mcq'/>
     </>
    
  )
}

