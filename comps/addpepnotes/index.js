import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Axios from "axios";

export default function AddPepNotesComp() {
  // const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}pep_note/`;
  //   const [emptyField, setEmptyField] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [article, setArticle] = useState({
    category: "PEP",
    title: "",
    content: "",
    imageUrl: "",
  });

  function postArticle(_article) {
    Axios.post("https://rxedu-api.vercel.app/api/v1/pep_mcq_demo", article)
      .then((response) => {
        setIsSuccessful(true);

        setArticle({
          category: "PEP",
          title: "",
          content: "",
          imageUrl: "",
        });
        // console.log("Successfully Sent to: " + apiUrl);

        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
        console.log("Opps an error ocured");
      });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setArticle({ ...article, [name]: value });

    console.log("Article Objj");
    console.log(article);
    // console.log(apiUrl);
  };

  const handleSubmit = (e) => {
    if (article.title && article.content) {
      e.preventDefault();
      postArticle(article);
    } else {
      console.log("Something is missing");
    }
  };

  return (
    <div className="section">
      <h1 className="sectionTitle">Admin Section</h1>
      <div className={styles.successDiv}>
        {isSuccessful && <p>Sent Successfully </p>}
      </div>
      <div>
        <form action="#" className={styles.wrapper}>
          <div className={styles.input_box}>
            <label htmlFor="form-category">Title</label>
            <input
              type="text"
              rows="2"
              id="form-title"
              placeholder="Title"
              name="title"
              // value={ques.category}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="form-category">Story</label>
            <textarea
              rows="10"
              id="form-content"
              placeholder="Story - Markdown/Text"
              name="content"
              onChange={handleChange}
            ></textarea>
          </div>
        </form>

        <div className={styles.buttons}>
          <input
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            className="btn"
          />
        </div>
      </div>
    </div>
  );
}
