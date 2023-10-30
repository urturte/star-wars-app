import styles from "./filmsList.module.css";
import Film from "@/components/films/Films";
import React from "react";

interface FilmsListType {
  films: any[];
  onFilmClick: (film: any) => void; 
};

const FilmsList: React.FC<FilmsListType> = ({ films, onFilmClick }) => {

  return (
    <div className={styles.filmsList}>
      {films && films.map((film: any) => {
        return (
          <div className={styles.content} key={film.episode_id} onClick={() => onFilmClick(film)}>
            <Film 
            title={film.title}
            release_date={film.release_date}
            episode_id={film.episode_id} 
            key={film.episode_id} />
          </div>
        );
      })}
  </div>
  );
};
export default FilmsList;
