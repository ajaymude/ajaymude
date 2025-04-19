import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uidesign.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI UX Designer</h3>
              <p>
                Designed seamless and user-friendly interfaces, significantly
                improving user interaction and engagement.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Developed robust and responsive front-end applications, ensuring optimal performance and user satisfaction.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Engineered scalable and efficient backend systems, enhancing application performance and reliability.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/appdev.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Apps Developer</h3>
              <p>
              Designed and built innovative mobile applications, delivering high-quality user experiences and functionality.
              </p>
            </div>
          </li>


          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devops.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps</h3>
              <p>
              Implemented robust DevOps practices, automating workflows and optimizing deployment pipelines for faster and more reliable releases.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
