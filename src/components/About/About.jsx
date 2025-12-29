import React from "react";

import styles from "./About.module.css";
import about from "../../../assets/about/fatmaAbout.png";
import cursor from "../../../assets/about/cursorIcon.png";
import server from "../../../assets/about/serverIcon.png"
import uicon from "../../../assets/about/uiIcon.png"



export const About = () => {
  return (
     <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={about}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p>
                Hi! I'm Fatma, an international student from Libya. I'm currently a Computer Science major at Bryn Mawr.
            
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="Server icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Backend Developer</h3> */}
              <p>
               I've always wanted to do CS because  1) I deeply enjoy it  2) I want to represent Muslim, Libyan women in tech  3) It wasn't taught in my country so it was a mysterious field to me.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uicon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>UI Designer</h3> */}
              <p>
                Besides coding, I love to draw, oil-paint, play guitar, write poems/songs, and dream.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};


