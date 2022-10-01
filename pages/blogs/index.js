import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Head from 'next/head'
import BooksComp from "../../comps/books";
import { sortByDate } from "../../utils";
import ArticlesComp from "../../comps/articles/";
import ArticlesCategory from "../../comps/articles/categories";
import axios from "axios";
import BlogComps from "../../comps/blogs/blogs";

export default function BlogsPage({ contentsList }) {
  const _category = ["All", "PEP", "Undergraduate", "Year 1"];

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
