import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import MainBody from "@/components/mainBody/MainBody";

export async function getServerSideProps() {
  try {
  const filmsResponse = await axios.get("https://swapi.dev/api/films/");
  const films = filmsResponse.data.results
  
    return {
      props: {
        films: films, 
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        films: [],
      },
    };
  }
}

export default function Home(props: any) {
  const [films, setFilms] = useState<any>(props.films);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.mainBody}>
        <MainBody films={films} />
      </div>
    </div>
  );
}
