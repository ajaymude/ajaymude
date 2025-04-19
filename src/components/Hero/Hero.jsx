import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from '../../../assets/resume/ajay mude resume .pdf'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ajay Mude</h1>
        <p className={styles.description}>
          Empowering digital landscapes through holistic expertise: UI design,
          frontend, backend, and app development for transformative user
          experiences.
        </p>
        <div className={styles.link}>
          <a href="mailto:mudeajay@gmail.com" className={styles.contactBtn}>
            Contact
          </a>

          <a href={resume} download className={styles.contactBtn}>
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
