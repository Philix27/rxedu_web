import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Axios from "axios";

export default function AdminBlogComp({ title }) {
  const apiUrl = `https://rxedu-api.vercel.app/api/v1/blogs`;

  const [emptyField, setEmptyField] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [article, setArticle] = useState({
    title: "",
    content: "",
    summary: "",
    image: "g",
    cateory: "All",
    timePosted: Date(),
    tags: ["All"],
  });

  function postArticle(_article) {
    console.log("Clicked Post");
    Axios.post(apiUrl, _article)
      .then((response) => {
        setIsSuccessful(true);
        console.log("Successfully Sent to: " + apiUrl);

        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((e) => {
        console.log("Opps an error ocured - Local");
        console.log(e);
      });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setArticle({ ...article, [name]: value });

    console.log("Article Objj");
    console.log(article);
  };

  const handleSubmit = (e) => {
    if (article.title && article.content) {
      e.preventDefault();
      postArticle(article);

      // setEmptyField(false);
    } else {
      console.log("Cannot Submit Post");
      setEmptyField(true);
    }
  };

  return (
    <div className="section">
      <h1 className="sectionTitle">{title}</h1>
      <div className={styles.successDiv}>
        {isSuccessful && <p>Sent Successfully </p>}
      </div>
      <div>
        <form action="#" className={styles.wrapper}>
          <div className={styles.input_box}>
            <label htmlFor="form-category">Name</label>
            <input
              type="text"
              rows="2"
              id="form-name"
              placeholder="Title"
              name="title"
              // value={ques.category}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="form-category">Description</label>
            <textarea
              rows="10"
              id="form-content"
              placeholder="content"
              name="content"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.input_box}>
            <label htmlFor="form-category">Summary</label>
            <textarea
              rows="6"
              id="form-company"
              placeholder="Summary of content"
              name="summary"
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
