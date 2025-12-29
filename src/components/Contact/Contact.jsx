import React from "react";

import styles from "./Contact.module.css";
import { email} from "../../../assets/contact/emailIcon.png";
import {linkedin} from "../../../assets/contact/linkedinIcon.png";
import {github} from "../../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:fatma.khaled.ayad@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/fatma-ayad-852627240/">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://www.github.com/fatmaayad13">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};