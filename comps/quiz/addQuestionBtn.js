import styles from "./quizpage.module.css";

export const AddQuestionBtn = ({ setShowModal }) => {
  return (
    <div className={styles.addQuestionButton}>
      <a className="btn" onClick={() => setShowModal(true)}>
        Add Question
      </a>

      {/* <button 
                type="button"
                onClick={() => setShowModal(true)}
                >
                    Add Question
            </button> */}
      {/* </div> */}
    </div>
  );
};
