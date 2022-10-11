// import Image from 'next/image';
import React from "react";
import styles from "./Landing.module.css";

export default function PepLandingPage() {
  return (
    <div id="home" className={styles.container}>
      <div className="landingStyles">
        <div className="sectionTitle">PEP Examination</div>
        <p className="smallText">
          PRE-REGISTRATION EXAMINATION FOR PHARMACISTS{" "}
        </p>
        <p className={styles.subtitle}>For Nigerians</p>

        <a href="http://www.pcnmcpd.com/pep/" target="_blank" className="btn">
          Register
        </a>
      </div>
    </div>
  );
}
