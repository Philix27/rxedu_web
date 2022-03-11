import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import Axios from 'axios';
import { Section, SectionTitle, SectionText } from '../../styles';
import {CardItem, GridContainer} from './styles'


export default function ArticlesComp() {

      const apiurlLocal = `http://localhost:3007/api/v1/articles`;
    const [articlesList, setArticlesList] =  useState([]);
    const [showModal, setShowModal] = useState(false);
   


    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setArticlesList(response.data.data);
            console.log("Working");
            console.log(`Length: ${response.data.mcq.length}`);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);

  
  return (
    <Section>
      <h1>All Articles</h1>
      <GridContainer> 

           {articlesList.map((anArticle, index) => { 
                
                return (
                    <Link href={`/articles/${anArticle._id}`} key={anArticle._id}>
                        <CardItem>
                            {anArticle.title.toUpperCase()}
                        </CardItem>
                    </Link>
                ); 
           })}
        
        <p>All articles will be displayed here-
          Fetched from the db using axios

          First connect to api
        </p>
       
     
     </GridContainer>
     </Section>
    
  )
}

