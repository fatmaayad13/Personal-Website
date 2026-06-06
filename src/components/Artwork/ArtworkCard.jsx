import React from "react";

import styles from "./ArtworkCard.module.css";

export const ArtworkCard = ({ art: { title, imageSrc, description }, visible, delay }) => {
  return (
    <div
      className={`${styles.container} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {imageSrc && (
        <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      )}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
