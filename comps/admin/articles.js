import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Axios from "axios";

export default function AdminBrandDrugsComp({ articleCategories, title }) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}articles`;

  const [emptyField, setEmptyField] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [article, setArticle] = useState({
    category: "",
    title: "",
    content: "",
    imageUrl: "",
  });

  function postArticle(_article) {
    console.log("Clicked Post");
    Axios.post(apiUrl, _article)
      .then((response) => {
        setIsSuccessful(true);

        setArticle({
          category: "",
          title: "",
          content: "",
          imageUrl: "",
        });
        console.log("Successfully Sent to: " + apiUrl);

        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch(() => {
        console.log("Opps an error ocured - Local");
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
    if (article.category && article.title && article.content) {
      e.preventDefault();
      postArticle(article);

      setEmptyField(false);
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
            <label htmlFor="form-category">Category</label>
            <select
              name="category"
              defaultValue="pharmacology"
              onChange={handleChange}
            >
              {/* <option selected="selected"
                            >Pharmacology</option> */}

              {articleCategories.map((_category, index) => {
                return (
                  <option value={_category.title.toLowerCase()} key={index}>
                    {_category.title}
                  </option>
                );
              })}
            </select>
          </div>

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
