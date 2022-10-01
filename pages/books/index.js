import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Head from 'next/head'
import BooksComp from "../../comps/books";
import { sortByDate } from "../../utils";

export default function PostPage({ books }) {
  const _category = ["All", "PEP", "Undergraduate", "Advanced"];

  return (
    <div>
      <BooksComp
        title="PEP Notes"
        page="books"
        categoryList={_category}
        posts={books}
      />
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("_books"));

  // Get slug and frontmatter from posts
  const books = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("_books", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      books: books.sort(sortByDate),
    },
  };
}
