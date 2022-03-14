import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import Axios from 'axios';
import styles from './styles.module.css'


  const categories = [
  "blog",
  "pharmacology",
  "pharmaceutics",
  "clinical pharmacy",
  "pharmacognosy",
  "pharm.microbiology",
];

export default function ArticlesComp({contents}) {
  const articleList = contents;
  console.log("contents-zone");
  console.log(contents)
  return (
    <div className='section'>
      <h1>Articles categories</h1>
      <div className='article-gridContainer'> 

        
          {
        categories.map((item, index) => (
          <div key={index} className={styles.card}> 
             <h3  >
            {item.toUpperCase()}
            </h3>
           
           <div>
               {
              contents.map((article, indexer )=> {
                if (article.attributes.category.toUpperCase() === item.toUpperCase()) {
                  return (<h5>{article.attributes.title}</h5>)
                }
              }
              )
            }
           </div>
         </div>
        ))
     }
       
     </div>
     </div>
    
  )
}

function getFewContents(articlesContent) {
  articlesContent
}

