import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const aboutCards = [
  {
    icon: "about/frontend.png",
    title: "Frontend Development",
    description:
      "Building responsive, interactive UIs with React, TypeScript, and modern CSS. Focused on performance and pixel-perfect designs.",
    gradient: "linear-gradient(135deg, #6c63ff 0%, #4834d4 100%)",
  },
  {
    icon: "about/backend.png",
    title: "Backend Development",
    description:
      "Engineering robust APIs and server-side systems with Node.js, Express, and MongoDB for scalable, reliable applications.",
    gradient: "linear-gradient(135deg, #00d4aa 0%, #0fb9b1 100%)",
  },
  {
    icon: "about/appdev.png",
    title: "App Development",
    description:
      "Creating cross-platform mobile experiences with React Native, delivering native performance with shared codebases.",
    gradient: "linear-gradient(135deg, #ff6b9d 0%, #ee5a6f 100%)",
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={`${styles.title} reveal`}>What I Do</h2>
      <p className={`${styles.subtitle} reveal`}>
        I transform ideas into exceptional digital products through clean code
        and thoughtful design.
      </p>

      <div className={styles.cards}>
        {aboutCards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} reveal`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div
              className={styles.cardIconWrapper}
              style={{ background: card.gradient }}
            >
              <img
                src={getImageUrl(card.icon)}
                alt={card.title}
                className={styles.cardIcon}
              />
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <div
              className={styles.cardAccent}
              style={{ background: card.gradient }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
