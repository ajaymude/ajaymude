import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const categories = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "database", label: "Database" },
  { value: "fullstack", label: "Full Stack" },
  { value: "quality", label: "Testing" },
  { value: "apps", label: "Mobile" },
];

export const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className={styles.container} id="experience">
      <h2 className={`${styles.title} reveal`}>Skills & Experience</h2>
      <p className={`${styles.subtitle} reveal`}>
        Technologies and tools I work with to bring ideas to life.
      </p>

      {/* Filter pills */}
      <div className={`${styles.filterBar} reveal`}>
        {categories.map(({ value, label }) => (
          <button
            key={value}
            className={`${styles.filterPill} ${
              activeCategory === value ? styles.filterPillActive : ""
            }`}
            onClick={() => setActiveCategory(value)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className={styles.skillsGrid}>
        {filteredSkills.map((skill, id) => (
          <div
            key={id}
            className={styles.skillCard}
            style={{ animationDelay: `${id * 0.05}s` }}
          >
            <div className={styles.skillIconWrap}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className={styles.skillIcon}
              />
            </div>
            <span className={styles.skillName}>{skill.title}</span>
          </div>
        ))}
      </div>

      {/* Work history timeline */}
      {history.length > 0 && (
        <div className={`${styles.timeline} reveal`}>
          <h3 className={styles.timelineTitle}>Work Experience</h3>
          <div className={styles.timelineItems}>
            {history.map((item, id) => (
              <div key={id} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <img
                      src={getImageUrl(item.imageSrc)}
                      alt={item.organisation}
                      className={styles.timelineImg}
                    />
                    <div>
                      <h4 className={styles.timelineRole}>
                        {item.role}
                        {item.organisation && ` @ ${item.organisation}`}
                      </h4>
                      <span className={styles.timelineDate}>
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>
                  </div>
                  {item.experiences.length > 0 && (
                    <ul className={styles.timelineList}>
                      {item.experiences.map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
