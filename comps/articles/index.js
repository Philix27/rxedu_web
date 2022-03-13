import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import Axios from 'axios';


export default function ArticlesComp(props) {

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
    <div className='section'>
      <h1>All Articles</h1>
      <div className='article-gridContainer'> 

           {articlesList.map((anArticle, index) => { 
                
                return (
                    <Link href={`/articles/${anArticle._id}`} key={anArticle._id}>
                        <div className='cardItem'>
                            {anArticle.title.toUpperCase()}
                        </div>
                    </Link>
                ); 
           })}
        
        <p>All articles will be displayed here-
          Fetched from the db using axios

          First connect to api
        </p>
       
     </div>
     </div>
    
  )
}


