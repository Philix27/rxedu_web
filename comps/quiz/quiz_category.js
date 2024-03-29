import React, { useState, useEffect } from "react";
import Link from "next/link";
import Axios from "axios";
import { CardItem, GridContainer, IndexSpan } from "../quiz/styles";
import { AddQuestionBtn } from "./addQuestionBtn";

const QuizCategory = ({ apiCategory }) => {
  const apiurlLocal = `${process.env.NEXT_PUBLIC_API_URL}${apiCategory}`;
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    Axios.get(apiurlLocal)
      .then((response) => {
        setQuizList(response.data.data);
        console.log("Working");
        console.log(`Length: ${response.data.mcq.length}`);
      })
      .catch(() => {
        console.log("Opps an error ocured - Local");
      });
  }, []);

  var categoryList = [];
  quizList.forEach((value, index) => {
    if (!categoryList.includes(value.category)) {
      categoryList.push(value.category);
    }
  });

  return (
    <>
      <GridContainer>
        {categoryList.map((categoryItem, index) => {
          return (
            <Link href={`/quiz/${categoryItem}`} key={index}>
              {/* <Link href={`/quiz/${categoryItem}-${apiCategory}`} key={index}> 
                      <Link href={`/quiz/${categoryItem}`} key={index}> 
                     </Link><Link href={`/quiz/#`} key={index}>  */}
              <CardItem>
                <IndexSpan>{index + 1}.</IndexSpan>
                {categoryItem.toUpperCase()}
              </CardItem>
            </Link>
          );
        })}
      </GridContainer>
    </>
  );
};

export default QuizCategory;
