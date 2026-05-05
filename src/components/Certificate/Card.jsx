import React from "react";
import styles from "./Card.module.css";
import { getImageUrl } from "../../utils";

const Card = ({ id, project: { title, imageSrc, skills, demo } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`${title} certificate`}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>
          {title} — Certificate {id + 1}
        </h3>
        <ul className={styles.skills}>
          {skills.map((skill, i) => (
            <li key={i} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
          Verify Certificate
        </a>
      </div>
    </div>
  );
};

export default Card;