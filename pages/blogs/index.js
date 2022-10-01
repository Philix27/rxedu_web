import axios from "axios";
import BlogComps from "../../comps/blogs/blogs";

export default function BlogsPage({ contentsList }) {
  const _category = ["All", "PEP", "Undergraduate", "Year 1"];
  console.log("Blogs Obj");
  console.log(contentsList);

  return (
    <div>
      <BlogComps
        title="PEP Notes"
        page="books"
        categoryList={_category}
        posts={contentsList}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const art = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}blogs/`);
  return {
    props: {
      contentsList: art.data,
    },
  };
}
