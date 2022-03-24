import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import Axios from 'axios';
import {CardItem, GridContainer, IndexSpan} from '../quiz/styles'
import { AddQuestionBtn } from './addQuestionBtn';
import { Modal } from '../articles/Modal/Modal';
import { ModalContent } from './modal_content'


const QuizCategory = ({apiCategory}) => {
    
    const apiurlLocal = `${process.env.NEXT_PUBLIC_API_URL}${apiCategory}`;
    const [quizList, setQuizList] =  useState([]);
    const [showModal, setShowModal] = useState(false);
   


    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setQuizList(response.data.data);
            console.log("Working");
            console.log(`Length: ${response.data.mcq.length}`);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);

 
    
    var categoryList = [];
    quizList.forEach((value, index) => {
        if (!categoryList.includes(value.category)) {
            categoryList.push(value.category)
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
                        apiUrl={apiurlLocal}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        title={apiCategory.toUpperCase()}
                    />
                }
            />}
  

        <GridContainer>             
            
            {categoryList.map((categoryItem, index) => { 
                
                return (
                    // <Link href={`/quiz/${categoryItem}`} key={index}>
                     <Link href={`/quiz/${categoryItem}-${apiCategory}`} key={index}> 
                        <CardItem>
                            <IndexSpan>{index + 1}.</IndexSpan>
                            {categoryItem.toUpperCase()}
                        </CardItem>
                    </Link>
                ); 
            })}
   
            </GridContainer>  
             <AddQuestionBtn setShowModal={setShowModal} />
        </>    
    );
}

export default QuizCategory;
