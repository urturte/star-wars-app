import Navbar from "@/components/navbar/Navbar";
import styles from "./about.module.css";
import AboutBody from "@/components/aboutBody/AboutBody";

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.aboutBody}>
        <AboutBody />
      </div>
    </div>
  );
}
