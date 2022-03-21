import Axios from 'axios';
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
  //  const router = useRouter()
  // const { id } = router.query
  var response;
  try {
    
    //  response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles/${id}`);
     response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles/${params.id}`);
   
  } catch (e) {
    console.log('Oops an error occured');
    console.log(e);
  }
  return {
    props: {
      articlate: response.article
    }
  }
 }

export async function getStaticPaths() {
  const response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles`);
  // const response = await Axios.get(`http://localhost:3007/api/v1/mcq_peps/`);
  console.log("responseResponse")
  console.log(JSON.stringify(response))
  
  // const paths = {}
  const paths = response.data.map((article) => {

    return {
      params: {
        id: article.id
      }
    }
  });
  return {
    paths,
    fallback: false
  }
}

