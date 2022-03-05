import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link'
import Axios from 'axios';
import {CardItem, GridContainer} from '../quiz/styles'

const QuizCategory = () => {
    
    // const apiurlLocal = BASEURL + API_VERSION + 'mcq_pcl';
    const apiurlLocal = "http://localhost:3007/api/v1/mcq";
    // const apiurlLocal = "http://localhost:3007/api/v1/mcq_pcl";

    const [quizList, setQuizList] =  useState([]);
    

    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setQuizList(response.data.mcq);
            console.log("Working");
            // console.log(`Length: ${response.data.mcq.length}`);
            // console.log(response.data.mcq);
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
        <GridContainer>             
            
            {categoryList.map((categoryItem, index) => { 
                
                return (
                    <Link href={`/quiz/${categoryItem}`}>
                        <CardItem> {categoryItem} </CardItem>
                    </Link>
                ); 
            })}
   
        </GridContainer>    
    );
}

export default QuizCategory;
