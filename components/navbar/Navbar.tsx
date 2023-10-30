import React from "react";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.main}>
        <a href="/" className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png"/>
        </a>

        <div className={styles.content}>
          <a href="/about" className={styles.about}>
            About
          </a>
          <a href="/" className={styles.movies}>
            Movies
          </a>
        </div>
    </div>
  );
};

export default Navbar;
