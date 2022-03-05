import { Section, SectionTitle, SectionText } from '../../styles';
import styles from '../../comps/articlesComps/quiz/quizpage.module.css'
import React,  {useState} from 'react';



export default function ArticlesComp( {
        setQues,
        ques,
        title,
        setShowModal,
        showModal,
        postArticle
    }) {

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
    <div className={styles.section} >
                    <SectionTitle>Title</SectionTitle>
                
            <form action="#" className={styles.wrapper}>

                <div className={styles.input_box}>
                    <label htmlFor="form-category">Category</label>
                    <input
                        type="text"
                        id="form-category"
                        placeholder="Category"
                        name="category"
                        // value={ques.category}
                        onChange={handleChange}
                    />
        </div>
        
                <div className={styles.input_box}>
                    <label htmlFor="form-category">Sub category</label>
                    <input
                        type="text"
                        id="subcategory"
                        placeholder="Subcategory"
                        name="category"
                        // value={ques.category}
                        onChange={handleChange}
                    />
        </div>
        
                <div className={styles.input_box}>
                    <label htmlFor="form-question">Title</label>
                    <input type="text"
                        id="form-question"
                         name="title"
                            // value={ques.question}
                            placeholder="Title"
                            onChange={handleChange}
                    />
                </div>
               
                <div className={styles.input_box}>
                    <label htmlFor="form-options1">Content</label>
                    <input type="text"
                        // value={ques.option1}
                         name="Content"
                                    placeholder="Content"
                                    id="content-input"
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
    
  )
}

