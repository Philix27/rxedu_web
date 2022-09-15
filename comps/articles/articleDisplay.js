import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import MarkdownIt from 'markdown-it'


function ArticleDisplay(props) {

    const md = new MarkdownIt();
    // var htmlContent = md.render(article.content);
   
    const router = useRouter();
    const articleID = router.query.articleID;
   
    const apiurlLocal = `${process.env.NEXT_PUBLIC_API_URL}articles/${articleID}`;

    const [article, setArticle] =  useState([]);
   
    
    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
           
            setArticle(response.data.doc);
            console.log("Working");
            console.log(response.data.mcq);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, {});

  
  

    return (
        <div className='section'>             
            <br />
            <br />
            <br />
             
            <div className='sectionTitle'>{article.title}</div>
            <p>{article.content}</p>
            {/* <section dangerouslySetInnerHTML={{__html: md.render(article.content)}}></section> */}
            {/* <section dangerouslySetInnerHTML={{__html: md.render(String(article.content))}}></section> */}
            {/* <section dangerouslySetInnerHTML={{__html: md.render(article.content.toString())}}></section> */}
          
        </div>    
    );
}

export default ArticleDisplay


