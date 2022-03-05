import styles from './quizpage.module.css'


export const AddQuestionBtn = ({setShowModal}) => {
    
    return (
        <div className={styles.addQuestionButton}>
            <button className="btn"
                type="button"
                onClick={() => setShowModal(true)}
            >Add Question</button>

        </div>
    )
}
