import AdminComp from '../comps/admin/index'
import Axios from 'axios';


export default function Admin({articlesCategoryList}) {

  return (

     <AdminComp articleCategories={articlesCategoryList} />
  )
    
}


export async function getStaticProps({ params }) {

    
   var  response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles_category/`);
    const articlesCategoryList = response.data.data;
    
 
  return {
    props: {
      articlesCategoryList: articlesCategoryList
    }
  }
 }

