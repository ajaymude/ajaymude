import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={`${styles.title} reveal`}>Featured Projects</h2>
      <p className={`${styles.subtitle} reveal`}>
        A selection of projects that showcase my skills and passion for building great software.
      </p>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} index={id} />
        ))}
      </div>
    </section>
  );
};
