import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import Axios from 'axios';
import {CardItem, GridContainer, IndexSpan} from '../quiz/styles'

const ArticlesCategory = () => {
    
    const apiurlLocal = `${process.env.NEXT_PUBLIC_API_URL}articles_category`;
    const [articlesList, setArticlesList] =  useState([]);
    const [showModal, setShowModal] = useState(false);
   


    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setArticlesList(response.data.data);
            console.log("Working");
            console.log(`Length: ${response.data.articles_category.length}`);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);

 
      

    return (
        <>
        <GridContainer>             
            {articlesList.map((categoryItem, index) => { 
                
                return (
                     <Link href={`/articles/${categoryItem.title}`} key={index}> 
                        <CardItem>
                            <IndexSpan>{index + 1}.</IndexSpan>
                            {categoryItem.title}
                        </CardItem>
                    </Link>
                ); 
            })}
   
            </GridContainer>  
        </>    
    );
}

export default ArticlesCategory;
