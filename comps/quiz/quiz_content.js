import React,  {useState, useEffect, useMemo} from 'react';
import Axios from 'axios';
// import { AddQuestionBtn } from './addQuestionBtn';
import { Modal } from '../articles/Modal/Modal';
import {ModalContent} from './modal_content'
import QuestSection from './quest_section';
import { useRouter } from 'next/router';
import styles from './quizpage.module.css'



const QuizContent = () => {
    const router = useRouter();
    var cc = router.query.categoryName;
    const tempo = cc.split('-');
    const categoryName = tempo[0];
    const apiUrl = tempo[1];

    const apiurlLocal = `http://localhost:3007/api/v1/${apiUrl}`;

    const [quizList, setQuizList] =  useState([]);
    // const [showModal, setShowModal] = useState(false);
    const [quesIndex, setQuesIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showReachedEnd, setReachedEnd] = useState(false);
    // const [showDeleted, setShowDeleted] = useState(false);
    

    
    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setQuizList(response.data.data);
            console.log("Working");
            console.log(`Length: ${response.data.mcq.length}`);
            console.log(response.data.mcq);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);

  
      var categoryBasedQuestionsList = [];
    quizList.forEach((value, index) => {
        if (value.category === categoryName) {
            categoryBasedQuestionsList.push(value)
        }
    }); 

    return (
        <>             
            
             
            {categoryBasedQuestionsList.map((quest, index) => { 
                if (index === quesIndex) {
                    return (
                        <QuestSection
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

            
          
        </>    
    );
}

export default QuizContent;
