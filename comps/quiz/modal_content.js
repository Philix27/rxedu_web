import styles from './quizpage.module.css'
import React,  {useState} from 'react';

                        
export const ModalContent = (
    {
        setQues,
        ques,
        title,
        setShowModal,
        showModal,
        postArticle
    }
) => {

    const [emptyField, setEmptyField] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setQues({ ...ques, [name]: value });
        console.log("Question Objj");
        console.log(ques)
    }

    const handleSubmit = (e) => {
        if (ques.category &&
            ques.question &&
            ques.answer_index &&
            ques.option1 &&
            ques.option2 
            ) {
             e.preventDefault();
            postArticle();
            setEmptyField(false);
        } else {
            setEmptyField(true)
            
            }
    }
    return (
        <div >
                <div className={styles.header_box}>
                    <h1>{title}</h1>
                </div>
            <form action="#" className={styles.wrapper}>

                {/* Rumconazole Tablets 200mg */}
                <div className={styles.input_box}>
                    <label htmlFor="form-category">Category</label>
                    <input
                        type="text"
                        id="form-category"
                        placeholder="Category"
                        name="category"
                        value={ques.category}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="form-question">Question</label>
                    <input type="text"
                        id="form-question"
                         name="question"
                            value={ques.question}
                            placeholder="Question"
                            onChange={handleChange}
                    />
                </div>
               
                <div className={styles.input_box}>
                    <label htmlFor="form-options1">Options 1</label>
                    <input type="text"
                        value={ques.option1}
                         name="option1"
                                    placeholder="Option 1"
                                    id="form-option1"
                                    onChange={handleChange}
                                />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="form-options2">Options 2</label>
                    <input type="text"
                        value={ques.option2}
                         name="option2"
                                    placeholder="Option 2"
                                    id="form-option2"
                                    onChange={handleChange}
                                />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="form-options3">Options 3</label>
                    <input type="text"
                         name="option3"
                          value={ques.option3}
                                    placeholder="Options 3"
                                    id="form-option3"
                                    
                                    onChange={handleChange}
                                />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="form-options4">Options 4</label>
                    <input type="text"
                        value={ques.option4}
                        name="option4"
                                    placeholder="Options 4"
                                    id="form-option4"
                                    onChange={handleChange}
                                />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="form-answer-index">Answer Index</label>
                    <input type="text"
                        value={ques.answer_index}
                        id="form-answer_index"
                        name="answer_index"
                        placeholder="Answer Index"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="form-explain">Explaination</label>
                    <input type="text"
                        value={ques.explain}
                        id="form-explain"
                        name="explain"
                        placeholder="Explaination"
                        onChange={handleChange}
                                />
                </div>
               
              </form> 
                <div className={styles.buttons}>
                    <input type="submit"
                            value="Close"
                             onClick={() => setShowModal(false)}
                            className="btnClose" />
                     <input type="submit"
                            value="Submit"
                    onClick={handleSubmit}
                        className="btn" />
            </div>
            <div className="errorMsgWrapper">
            {emptyField && <p className="errorMsg">Sorry, please check for empty fields </p>}

            </div>
        </div>
    );
}