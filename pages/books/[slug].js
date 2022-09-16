import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

export default function PostContentPage({
  frontmatter: { title, cover_image },
  slug,
  content,
}) {
  const md = new MarkdownIt();
  const cc = md.render(content);

  return (
    <>
      {/* <Head>
        <title>Tinq | {title}</title>
      </Head> */}
      <div className="section post_page">
        <img src={cover_image} alt="" className="img" />
        <h1 className="sectionTitle">{title}</h1>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: cc }}></div>
          {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("_books"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("_books", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
