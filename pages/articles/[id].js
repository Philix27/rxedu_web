import Axios from 'axios';
import { useRouter } from 'next/router';
import MarkdownIt from 'markdown-it'




export default function ArticleDisplayPage({anArticle}) {

  const md = new MarkdownIt();
  const cc = md.render(anArticle.content);

    return (
        <section
          className='section'
        >
           <div className='markdown-section'>
              <div className='sectionTitle'>{anArticle.title}</div>
        <div
            dangerouslySetInnerHTML={{ __html: cc }}
            // dangerouslySetInnerHTML={{ __html: md.render(anArticle.content) }}
          >
          </div>
           </div>
          </section>
           
    );
}


export async function getStaticProps({ params }) {
 
  var response;
  try {
    
     response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles/${params.id}`);
  } catch (e) {
    console.log('Oops an error occured');
    console.log(e);
  }
  return {
    props: {
      anArticle: response.data.doc
    }
  }
 }

export async function getStaticPaths() {
  const response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles`);
  const paths = response.data.data.map((article, index) => {
    return {
      params: {id: article._id}
    }
  });

  return {
    paths,
    fallback: false
  }
}

