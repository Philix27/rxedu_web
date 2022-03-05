import React,  {useState, useEffect, useMemo} from 'react';
import Axios from 'axios';
import { AddQuestionBtn } from './addQuestionBtn';
import { Modal } from '../articlesComps/Modal/Modal';
import {ModalContent} from './modal_content'
import QuestSection from './quest_section';
import { useRouter } from 'next/router';
import styles from './quizpage.module.css'



const QuizContent = () => {
    const router = useRouter();
    const categoryName = router.query.categoryName;

    // const apiurlLocal = BASEURL + API_VERSION + 'mcq_pcl';
    const apiurlLocal = "http://localhost:3007/api/v1/mcq";
    const apiurlLocalPost = "http://localhost:3007/api/v1/mcq_pep";
    // const apiurlLocal = "http://localhost:3007/api/v1/mcq_pcl";

    const [quizList, setQuizList] =  useState([]);
    const [showModal, setShowModal] = useState(false);
    const [quesIndex, setQuesIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showReachedEnd, setReachedEnd] = useState(false);
    // const [showDeleted, setShowDeleted] = useState(false);
    
    // !! Modal Form Params
    const [ques, setQues] = useState({
        category: "",
        question: "",
        explain: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer_index: 9,
        
    });

    
    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setQuizList(response.data.mcq);
            console.log("Working");
            console.log(`Length: ${response.data.mcq.length}`);
            console.log(response.data.mcq);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, [ques]);

  
    const params = {
            category : ques.category,
            question : ques.question,
            explain: ques.explain,
            options: [ques.option1, ques.option2, ques.option3, ques.option4],
            answerIndex: Number(ques.answer_index),
           
          }
    const postArticle = () => {
        // console.log("Before Posting");
        Axios.post(apiurlLocalPost, params).then((response) => {
            setQues({
                ...ques,
                explain: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
            });
            console.log("Successfully Sent");
            // console.log(response.data.mcq);
        }).catch(() => {
        console.log("Opps an error ocured - Local");
      });

        
    }
  
      var categoryBasedQuestionsList = [];
    quizList.forEach((value, index) => {
        if (value.category === categoryName) {
            categoryBasedQuestionsList.push(value)
        }
    }); 

    return (
        <>             
           
            {showModal && <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Add a question"
                children={
                    <ModalContent
                        setQues={setQues}
                        ques={ques}
                        showModal={showModal}
                        postArticle={postArticle}
                        paramsArticle={params}
                        setShowModal={setShowModal}
                        title="Add a question"
                    />
                }
            />}
  
           
             
            {categoryBasedQuestionsList.map((quest, index) => { 
                if (index === quesIndex) {
                    return (
                        <QuestSection
                        // key={quest.id}
                        key={index}
                        quest={quest}
                        index={index + 1}
                        length={categoryBasedQuestionsList.length} />);
                } 
            })}

            <div className={styles.buttons}>
                 <button className="btn" onClick={() => {
                    if (quesIndex > 0) {
                        
                        setQuesIndex(quesIndex - 1);
                    }
                }}>Prev</button>
                
                <button className="btn" onClick={() => {
                    if (quesIndex < (quizList.length -1) ) {
                        setQuesIndex(quesIndex + 1);
                        setReachedEnd(false);
                    } else {
                        setReachedEnd(true);
                    }
                    }}>Next</button>
            </div>

             <AddQuestionBtn setShowModal={setShowModal} />
          
        </>    
    );
}

export default QuizContent;
