import AdminGenericComp from "../../comps/admin/generic";
import Axios from "axios";

export default function AdminGeneric({ articlesCategoryList }) {
  return (
    <AdminGenericComp
      articleCategories={articlesCategoryList}
      title="Generic"
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
