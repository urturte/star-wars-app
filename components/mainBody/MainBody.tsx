import React, { useState } from "react";
import axios from "axios";
import styles from "./mainBody.module.css";
import FilmsList from "../filmsList/FilmsList";
import FilmsHeader from "../filmsHeader/FilmsHeader";
import TableOfPeople from "../tableOfPeople/TableOfPeople";

interface MainBodyProps {
  films: any[]; 
}

const MainBody: React.FC<MainBodyProps> = ({ films }) => {
  const [selectedFilm, setSelectedFilm] = useState<any | null>(null); 
  const [charactersData, setCharactersData] = useState<any[]>([]);
  const onFilmClick = async (film: any) => {
    setSelectedFilm(film);

    const characters = await Promise.all(
      film.characters.map(async (characterURL: string) => {
        try {
          const characterResponse = await axios.get(characterURL);
          return characterResponse.data;
        } catch (error) {
          console.error(`Error fetching character data: ${error}`);
          return null;
        }
      })
    );
    const filteredCharacters = characters.filter(character => character !== null);
    setCharactersData(filteredCharacters);
  };

  return (
    <div className={styles.main}>
      <FilmsHeader />
      <FilmsList films={films} onFilmClick={onFilmClick} />
      {selectedFilm && 
      <TableOfPeople
      characters={charactersData}
    />
    }    
    </div>
  );
};

export default MainBody;
