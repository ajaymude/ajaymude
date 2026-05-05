import React, { useState } from "react";
import styles from "./Certification.module.css";
import Card from "./Card";
import projects1 from "../../data/CertificateJson.json";

const Certification = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(projects1);

  const handleFilter = (value) => {
    setActiveFilter(value);
    if (value === "all") {
      setFilteredData(projects1);
    } else {
      const filtered = projects1
        .map((project) => {
          const filteredCerts = project.allCertificates.filter((cert) =>
            cert.skills.some((s) => s.toLowerCase() === value.toLowerCase())
          );
          return { ...project, allCertificates: filteredCerts };
        })
        .filter((project) => project.allCertificates.length > 0);
      setFilteredData(filtered);
    }
  };

  const totalCertificates = projects1?.reduce(
    (acc, item) => acc + item.allCertificates.length,
    0
  );

  const currentCount = filteredData?.reduce(
    (acc, item) => acc + item.allCertificates.length,
    0
  );

  return (
    <section className={styles.container} id="certificates">
      <h2 className={`${styles.title} reveal`}>Certificates</h2>
      <p className={`${styles.subtitle} reveal`}>
        Continuous learning through {totalCertificates}+ professional
        certifications across multiple technologies.
      </p>

      {/* Filter pills */}
      <div className={`${styles.filterBar} reveal`}>
        <button
          className={`${styles.filterPill} ${activeFilter === "all" ? styles.filterPillActive : ""}`}
          onClick={() => handleFilter("all")}
        >
          All ({totalCertificates})
        </button>
        {projects1?.map(({ title }, id) => (
          <button
            key={id}
            className={`${styles.filterPill} ${activeFilter === title.toLowerCase() ? styles.filterPillActive : ""}`}
            onClick={() => handleFilter(title)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Certificate count */}
      {activeFilter !== "all" && (
        <p className={styles.filterCount}>
          Showing {currentCount} certificate{currentCount !== 1 ? "s" : ""}
        </p>
      )}

      {/* Certificate grid */}
      <div className={styles.certGrid}>
        {filteredData.map(({ title, allCertificates }, groupId) =>
          allCertificates.map((project, certId) => (
            <Card
              key={`${groupId}-${certId}`}
              project={project}
              id={certId}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Certification;
