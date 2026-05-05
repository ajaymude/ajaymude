import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "about", "experience", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        <button
          className={styles.logo}
          onClick={() => scrollToSection("hero")}
        >
          <span className={styles.logoAccent}>A</span>jay
          <span className={styles.logoDot}>.</span>
        </button>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`${styles.navLink} ${activeSection === id ? styles.active : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              className={styles.ctaBtn}
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
