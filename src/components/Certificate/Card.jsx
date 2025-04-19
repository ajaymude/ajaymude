import React from 'react'
import styles from './Card.module.css'
import { getImageUrl } from "../../utils";

const Card = ({
    project: { title, imageSrc, skills, demo},
  }) => {
    return (
        <div className={styles.container}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
          <h3 className={styles.title}>{title}</h3>

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
            <a href={demo}  target="_blank" className={styles.link}>
              Verification Link
            </a>

          </div>
        </div>
      );
}

export default Card