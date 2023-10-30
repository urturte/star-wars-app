import React from "react";
import styles from "./aboutBody.module.css";


const AboutBody: React.FC = () => {

  return (
    <div className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <p>
          Image source:
        </p>
        <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png">Link</a>
    </div>
  );
};

export default AboutBody;
