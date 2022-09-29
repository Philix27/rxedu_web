import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Axios from "axios";

export default function AdminComp({ articleCategories, title }) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}brand_drugs`;

  const [emptyField, setEmptyField] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [article, setArticle] = useState({
    name: "",
    note: "",
    dosageForm: "Tablet",
    company: "",
    generic: "",
    img: "",
    genericID: "",
    country: ["All"],
  });

  function postArticle(_article) {
    console.log("Clicked Post");
    Axios.post("https://rxedu-api.vercel.app/api/v1/brand_drugs", _article)
      .then((response) => {
        setIsSuccessful(true);

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
    if (article.name && article.generic) {
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
            <label htmlFor="form-DosageForm">Dosage Form</label>
            <select
              name="dosageForm"
              defaultValue="Tablet"
              onChange={handleChange}
            >
              <option value="Tablet">Tablet</option>
              <option value="Capsule">Capsule</option>
              <option value="Suspension">Suspension</option>
              <option value="Injection">Injection</option>
              <option value="Syrup">Syrup</option>
              <option value="Consumable">Consumable</option>
              <option value="Gummies">Gummies</option>
              <option value="Cream">Cream</option>
              <option value="Lotion">Lotion</option>
              <option value="Powder">Powder</option>
              <option value="Suppository">Suppository</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className={styles.input_box}>
            <label htmlFor="form-category">Name</label>
            <input
              type="text"
              rows="2"
              id="form-name"
              placeholder="Title"
              name="name"
              // value={ques.category}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="form-category">Description</label>
            <textarea
              rows="10"
              id="form-note"
              placeholder="Note"
              name="note"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles.input_box}>
            <label htmlFor="form-category">Company</label>
            <textarea
              rows="2"
              id="form-company"
              placeholder="Name of company"
              name="company"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.input_box}>
            <label htmlFor="form-category">Generic</label>
            <textarea
              rows="1"
              id="form-dosageForm"
              placeholder="Generic names"
              name="generic"
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
