import React, {useState} from "react";
import styles from "./Intro.module.css";
import image from "../../../assets/intro/fatmaAyad.png"
import { TypeAnimation } from "react-type-animation";


export const Intro = () => {
    return (
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
            <p className = {styles.description}>Check out my website :)</p>
            <a href="mailto:fatma.khaled.ayad@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <img src= {image} alt="Fatma Ayad's Pic" className = {styles.introImg}></img>
            <div className={styles.topBlur} />
            <div className ={styles.bottomBlur} />
   </section>
    );

};