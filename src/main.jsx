import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/outfit";
import "@fontsource/roboto";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import Certification from "./components/Certificate/Certification.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import styles from "./App.module.css";

// Scroll reveal observer
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  // Observe after a small delay to ensure DOM is ready
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, 100);
};

const App = () => {
  React.useEffect(() => {
    observeElements();
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certification />
      <Contact />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
