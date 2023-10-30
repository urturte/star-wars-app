import React from "react";
import styles from "./filmsHeader.module.css";

const FilmsHeader: React.FC = () => {
  
  return (
    <div className={styles.title}>
      <h1>List of Star Wars films</h1>
    </div>
  );
};

export default FilmsHeader;
