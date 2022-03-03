import styles from './quizpage.module.css'


    const QuestSection = ({ quest, index, length }) => {
        const { question, options, category, explain, answer_index } = quest;
        // const option = options.toList;
        return (
            <div className="section">
                <div className={styles.questNum}>
                    <h2 className={styles.title}>{index} / {length }</h2>
                    <h2 className={styles.question}>{question}</h2>
                </div>
                    {options.map((option, i) => {
                       return ( <div key={i} className={styles.card}>          
                            <p className={styles.indexNumber}>{i + 1}.</p>
                            <p className={styles.subtitle}>{ option}</p>
                        </div>)
                    })}
                
                   

                {/* </div> */}
            </div>
        );
    }

    export default QuestSection;

