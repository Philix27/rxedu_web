import AdminBrandDrugsComp from "../../comps/admin/brand";
import Axios from "axios";

export default function AdminBrands({ articlesCategoryList }) {
  return (
    <AdminBrandDrugsComp
      articleCategories={articlesCategoryList}
      title="Brands"
    />
  );
}

export async function getStaticProps({ params }) {
  var response = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}generic_drugs/`
  );
  const articlesCategoryList = response.data.data;
  return {
    props: {
      articlesCategoryList: articlesCategoryList,
    },
  };
}
