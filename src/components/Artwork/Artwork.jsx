import React, { useEffect, useRef, useState } from "react";

import styles from "./Artwork.module.css";

import artwork from "../../../data/artwork.json";
import { ArtworkCard } from "./ArtworkCard";

export const Artwork = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.container} id="artwork">
      <h2 className={styles.title}>Artwork</h2>
      <div className={styles.projects}>
        {artwork.map((piece, id) => (
          <ArtworkCard
            key={id}
            art={piece}
            visible={isInView}
            delay={id * 180}
          />
        ))}
      </div>
    </section>
  );
};
