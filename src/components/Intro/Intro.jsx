import React, {useState} from "react";
import styles from "./Intro.module.css";
import image from "../../../assets/intro/fatmaAyad.png"
import { TypeAnimation } from "react-type-animation";
import resume from "../../../assets/resume/resume.pdf";


export const Intro = () => {   
   const [resumeOpen, setResumeOpen] = useState(false);

    return (
      <>
    <div className={styles.backgroundBlurs}>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </div>

    <section className = {styles.container}> 
            <div className={styles.content}>
            <p className = {styles.subTitle}>Hey there!</p>

            <h1 className = {styles.title}>
          <br />
          <TypeAnimation

            sequence={[
              "I'm Fatma Ayad!",
              1000,
              "A student at Bryn Mawr",
              1000,
              "An aspiring Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
            </h1>
            
              <ul className={styles.Buttons}>
                <li>
                  <button
                    className={styles.contactBtn}
                    onClick={() => window.open("https://www.linkedin.com/in/fatma-ayad-852627240/", "_blank")}
                  >
                    LinkedIn
                  </button>
                </li>
                <li>
                  <button
                    className={styles.contactBtn}
                    onClick={() => window.open("https://www.github.com/fatmaayad13", "_blank")}
                  >
                    Github
                  </button>
                </li>
                <li>
                  <button
                    className={styles.contactBtn}
                    onClick={() => setResumeOpen(true)}
                  >
                    Resume
                  </button>
                </li>
              </ul>
              <br />
              <p className = {styles.description}>Check out my website :)</p>
            </div>
            

                  {resumeOpen && (
        <div className={styles.modalOverlay} 
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999 }}
        onClick={() => setResumeOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                  <iframe
        src={resume}
        title="Resume"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      />
            <button className={styles.closeBtn} onClick={() => setResumeOpen(false)}>X</button>
          </div>
        </div>
      )}
            <img src= {image} alt="Fatma Ayad's Pic" className = {styles.introImg}></img>
            


   </section>
   
</>
    );

};
