import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import Axios from 'axios';
import styles from './styles.module.css'
// import {ArticlesCategory} from './categories'


  const categories = [
  "blog",
  "pharmacology",
  "pharmaceutics",
  "clinical pharmacy",
  "pharmacognosy",
    "pharm. microbiology",
  "others"
];


export default function ArticlesComp({contents}) {

  // console.log("contents-zone");
  // console.log(contents.data[0])
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
              <ul>
               {
              contents.data.map((article, indexer )=> {
                if (article.category.toUpperCase() === item.toUpperCase()) {
                  return (
                    <li key={indexer}>
                    <Link href={`articles/${article._id}`}>
                        
                    <a>{article.title}</a>
                       
                      </Link>
                       </li>
                    )
                }
              }
              )
          
              }
              </ul>
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

