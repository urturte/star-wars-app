import React from "react";
import styles from "./film.module.css";

interface TripType {
  title: any;
  release_date: any;
  episode_id: any;
};

const Film: React.FC<TripType> = ({ title, release_date, episode_id }) => {
  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <h4>{title}</h4>
        <div className={styles.release_date}>
          <h6>Release date:</h6>
          <h6>{release_date}</h6>
        </div>
      </div>
      <h1 className={styles.episodeNo}>{episode_id}</h1>
    </div>
  );
};

export default Film;
