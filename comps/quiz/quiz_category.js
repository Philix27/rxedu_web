import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link'
import Axios from 'axios';
import {CardItem, GridContainer, IndexSpan} from '../quiz/styles'

const QuizCategory = ({apiCategory}) => {
    
    // const apiurlLocal = process.env.BASEURL + process.env.API_VERSION + 'mcq';
    const apiurlLocal = `http://localhost:3007/api/v1/${apiCategory}`;
    // const apiurlLocal = "http://localhost:3007/api/v1/mcq";
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
                    <Link href={`/quiz/${categoryItem}`} key={index}>
                        <CardItem>
                            <IndexSpan>{index + 1}.</IndexSpan>
                            {categoryItem.toUpperCase()}
                        </CardItem>
                    </Link>
                ); 
            })}
   
        </GridContainer>    
    );
}

export default QuizCategory;
