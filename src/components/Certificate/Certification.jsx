import React from 'react'
import styles from './Certification.module.css'
import Card from './Card'
import projects from "../../data/certification.json";

const Certification = () => {
    return (
        <section className={styles.container} id="projects">
          <h2 className={styles.title}>Certificates</h2>
          <div className={styles.projects}>
            {projects.map((project, id) => {
              return <Card key={id} project={project} />;
            })}
          </div>
        </section>
      );
}

export default Certification