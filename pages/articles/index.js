import ArticlesComp from '../../comps/articles/'
import ArticlesCategory from '../../comps/articles/categories'
import axios from 'axios'



export default function ArticlesPage({ contentsList }) {
  // return (<ArticlesComp contents={contentsList} />)
  return (<ArticlesCategory />)
}

export async function getServerSideProps() {
  const art = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles/`);
  return {
    props: {
      contentsList: art.data
    }
  }
  
}

