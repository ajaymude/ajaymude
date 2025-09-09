import React, { useState } from "react";
import styles from "./Certification.module.css";
import Card from "./Card";
import projects from "../../data/certification.json";
import projects1 from "../../data/CertificateJson.json";

const Certification = () => {
  // const [skill, setSkill] = useState(projects1);
  // const filter = (e, value) => {
  //   console.log(e, value);
  //   if (value == "skills") {
  //     setSkill(projects1);
  //   } else {
  //     const skill = projects1.filter((skill1) =>
  //       skill1?.skills?.some((s) => s.toLowerCase() === value.toLowerCase())
  //     );
  //     setSkill(skill);
  //     console.log(skill, "skill");
  //   }
  // };

  const [skill, setSkill] = useState(projects1);

const filter = (e, value) => {
  console.log(e, value);

  if (value === "skills") {
    // Reset to all
    setSkill(projects1);
  } else {
    // Map through projects and filter their certificates
    const filteredProjects = projects1
      .map(project => {
        const filteredCertificates = project.allCertificates.filter(cert =>
          cert.skills.some(s => s.toLowerCase() === value.toLowerCase())
        );
        return {
          ...project,
          allCertificates: filteredCertificates
        };
      })
      .filter(project => project.allCertificates.length > 0); // remove empty groups

    setSkill(filteredProjects);
  }
};

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.buttongroup}>
        <button className={styles.button} onClick={(e) => setSkill(projects1)}>
          <span className={styles.buttoncontent}>All </span>
        </button>
        {skill?.map(({ title }, id) => {
          return (
            <button
              onClick={(e) => filter(e, title)}
              className={styles.button}
              s
            >
              <span className={styles.buttoncontent}>{title} </span>
            </button>
          );
        })}
      </div>

      <div className={styles.projects}>
        {/* {projects.map((project, id) => {
          return <Card key={id} project={project} />;
        })} */}
        <hr />
        {skill.map(({ title, allCertificates }, id) => {
          return (
            <div key={id} className={styles.projects}>
              {allCertificates.map((project, id) => {
                return <Card key={id} project={project} id={id}/>;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certification;
