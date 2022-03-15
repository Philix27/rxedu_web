import axios from 'axios';
import { useRouter } from 'next/router';
import MarkdownIt from 'markdown-it'




export default function ArticleDisplayPage({articlate}) {

   const md = new MarkdownIt();

    return (
                     
             
        <section
          className='section'
        >
           <div className='markdown-section'>
              <div className='sectionTitle'>{articlate.title}</div>
        <div
          dangerouslySetInnerHTML={{ __html: md.render(articlate.content) }}>
          </div>
           </div>
          </section>
           
    );
}


export async function getStaticProps({ params }) {
  var response;
  try {
    
     response = await axios.get(`http://localhost:1337/api/articles/${params.id}`);
    // console.log(`Article: ${response}`)
    // console.log(`Article-data 80: ${response.data}`)
    // console.log(`Data-data 80: ${response.data.data}`)
    // console.log(`JSON-data 80: ${JSON.stringify(response.data)}`)
    // console.log(`Article-data-id 80: ${response.data.id}`)
    // console.log(`Article-data-attributes 80: ${response.data.attributes}`)
    // console.log(`Article-title 80: ${response.data.title}`)
    // console.log(`Article-params 80: ${params.id}`)
    // const {attributes} = response.data
  } catch (e) {
    console.log('Oops an error occured');
    console.log(e);
  }
  return {
    props: {
      articlate: response.data.data.attributes
    }
  }
 }

export async function getStaticPaths() {
  const response = await axios.get('http://localhost:1337/api/articles/');
  const paths = response.data.data.map((article) => {
    
    return {
      params: {
        id: article.id.toString()
      }
    }
  });
  return {
    paths,
    fallback: false
  }
}