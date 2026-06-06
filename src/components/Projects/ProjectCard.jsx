import React from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, demoLabel, sourceLabel, github},
  visible,
  delay,
}) => {
  return (
    <div
      className={`${styles.container} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      { <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      /> }
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          {demoLabel ?? "Demo"}
        </a>
        {source?.trim() && (
        <a href={source} className={styles.link}>
          {sourceLabel ?? "Website"}
        </a>
        )}
        {github?.trim() && (
        <a href={github} className={styles.link}>
          GitHub
        </a>
        )}
</div>
    </div>
  );
};