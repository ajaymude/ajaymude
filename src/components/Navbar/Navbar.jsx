import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/ajaymude">
        ajaymude
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/ajaymude/about">About</Link>
          </li>
          <li>
            <Link to="/ajaymude/experience">Experience</Link>
          </li>
          <li>
            <Link to="/ajaymude/projects">Projects</Link>
          </li>

          <li>
            <Link to="/ajaymude/certificate">Certificates</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
