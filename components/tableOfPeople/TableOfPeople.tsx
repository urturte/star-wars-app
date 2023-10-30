import React from "react";
import styles from "./tableOfPeople.module.css";

interface TableOfPeopleType {
    characters: any[]; 
  };

const TableOfPeople: React.FC<TableOfPeopleType> = ( { characters } ) => {

    return (
    <div>
    <table className={styles.table}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Birth year</th>
                <th>Gender</th>
                <th>Mass</th>
            </tr>
        </thead>
        <tbody>
            {characters.map((character, index) => (
                <tr key={index}>
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.gender}</td>
                    <td>{character.mass}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  );
};

export default TableOfPeople;