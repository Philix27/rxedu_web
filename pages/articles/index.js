import ArticlesComp from '../../comps/articles/'
import axios from 'axios'



export default function ArticlesPage({ content }) {
  const article = content[0];
  const art = content.data[0].attributes;
  console.log("Article below");
  console.log(content);
  console.log("Data below");
  console.log(content.data);
  console.log("Arttribute below");
  console.log(content.data[0]);
  console.log("Now main data below");
  console.log(content.data[0].attributes);


  
  {/* <h2>{art.title}</h2> */}
  return (
   
      <ArticlesComp contents={content.data} />
   
   
  )
}

export async function getServerSideProps() {
  const art = await axios.get('http://localhost:1337/api/articles/');
  return {
    props: {
      content: art.data
    }
  }
  
}

