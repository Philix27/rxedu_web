import React,  {useState, useEffect, useMemo} from 'react';
import Axios from 'axios';
// import {BASEURL, API_VERSION} from '../Essentials/baseurl'
import { AddToTable } from './AddToTable';
import { Modal } from '../Modal/Modal';
import {ModalContent} from './modal_content'
import QuestSection from './quest_section';
import styles from './quizpage.module.css'


const QuizContent = () => {
    
    // const apiurlLocal = BASEURL + API_VERSION + 'mcq_pcl';
    const apiurlLocal = "http://localhost:3007/api/v1/mcq";
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

    // const [category, setCategory] = useState('');
    // const [question, setQuestion] = useState('');
    // const [explain, setExplain] = useState('');
    // const [options, setOptions] = useState('');
    // const [answer_index, setanswer_index] = useState('');

    
    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setQuizList(response.data.mcq_pcl);
            console.log("Working");
            console.log(response.data.mcq_pcl);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, [ques]);

  
    const params = {
            category : ques.category,
            question : ques.question,
            explain: ques.explain,
            options: [ques.option1, ques.option2, ques.option3, ques.option4],
            answer_index: Number(ques.answer_index),
           
          }
    const postArticle = () => {
        Axios.post(apiurlLocal, params).then((response) => {
            setQues({
                ...ques,
                explain: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
            });
            console.log("Successfully Sent");
            console.log(response.data.mcq_pcl);
        }).catch(() => {
        console.log("Opps an error ocured - Local");
      });

        
    }
  
    return (
        <>             
           
            {showModal && <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Add a questiont"
                children={
                    <ModalContent
                        setQues={setQues}
                        ques={ques}
                        showModal={showModal}
                        postArticle={postArticle}
                        setShowModal={setShowModal}
                        title="Add a question"
                    />
                }
            />}
  
           
             
            {quizList.map((quest, index) => { 
                if (index === quesIndex) {
                    return (
                        <QuestSection
                        // key={quest.id}
                        key={index}
                        quest={quest}
                        index={index + 1}
                        length={quizList.length} />);
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
                        // setCurrentIndex(quest);
                        
                        setQuesIndex(quesIndex + 1);
                        setReachedEnd(false);
                    } else {
                        setReachedEnd(true);
                    }
                    }}>Next</button>
            </div>
            <div className={styles.buttons}>

             <AddToTable setShowModal={setShowModal} />
            </div>
          
        </>    
    );
}

export default QuizContent;
