import React, { useState } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [skill, setSkill] = useState(skills);
  const filter = (e, value) => {
    console.log(e, value);
    if(value == 'skills'){
      setSkill(skills);
    }else{

      const skill = skills.filter((skill) => skill.category === value);
      setSkill(skill);

    }

    
  };
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.buttongroup}>
      <button
          onClick={(e) => filter(e, "skills")}
          className={styles.button}
        s>
          <span className={styles.buttoncontent}>All Skills </span>
        </button>

      <button
          onClick={(e) => filter(e, "uiux")}
          className={styles.button}
        s>
          <span className={styles.buttoncontent}>UI/UX Design </span>
        </button>

        <button
          onClick={(e) => filter(e, "frontend")}
          className={styles.button}
        s>
          <span className={styles.buttoncontent}>Frontend Development  </span>
        </button>

        <button
          onClick={(e) => filter(e, "backend")}
          className={styles.button}
        s>
          <span className={styles.buttoncontent}>Backend Development </span>
        </button>

        <button
          onClick={(e) => filter(e, "database")}
          className={styles.button}
        s>
          <span className={styles.buttoncontent}>Database </span>
        </button>

        <button
          onClick={(e) => filter(e, "fullstack")}
          className={styles.button}
        s>
          <span className={styles.buttoncontent}>Full Stack Develpment </span>
        </button>
      
        <button
          onClick={(e) => filter(e, "quality")}
          className={styles.button}
        s>
          <span className={styles.buttoncontent}>Quality Assurance</span>
        </button>

        <button onClick={(e) => filter(e, "devops")} className={styles.button}>
          <span className={styles.buttoncontent}>DevOps </span>
        </button>

        <button onClick={(e) => filter(e, "apps")} className={styles.button}>
          <span className={styles.buttoncontent}>Apps Development </span>
        </button>


        <button onClick={(e) => filter(e, "desktop")} className={styles.button}>
          <span className={styles.buttoncontent}>Desktop Apps Development </span>
        </button>

        <button onClick={(e) => filter(e, "marketing")} className={styles.button}>
          <span className={styles.buttoncontent}>Marketing</span>
        </button>

        <button onClick={(e) => filter(e, "nocode")} className={styles.button}>
          <span className={styles.buttoncontent}>CMS </span>
        </button>

        <button onClick={(e) => filter(e, "extra")} className={styles.button}>
          <span className={styles.buttoncontent}>Additional Skills </span>
        </button>


      </div>

      <div className={styles.content}>
        <div className={styles.skills}>
          {skill.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
