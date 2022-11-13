import Head from "next/head";
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Navigatsioon from "../components/Navigatsioon";

const Pais = () => {
  return (
    <div className={styles.pais}>
      <Navigatsioon />
      <div className={styles.paisAlumine}>
          <div className={styles.paisAlumineSisu}>
            <h1 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH1}`}>CLIMB FOR BETTER</h1>
            <h2 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH2}`}>GET OUT NOW</h2>
            <h4 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH4}`}>JOIN US FOR THE WEEKEND TO CLIMB<br />
            THE HIGHEST PEAK IN ENGLAND</h4> 
            <button className={styles.nupp}>VIEW UPCOMING TREKS</button>
          </div>
          <div className={styles.paisAluminePilt}></div>   
        </div>
      </div>
  )
}

const Teine = () => {
  return (
    <div className={styles.teine}>
      <section className={styles.Ylemine}>
        <h3 className={styles.teineYlemineH3hall}>Choose</h3>
        <h3 className={styles.teineAlumineVasak}>These Best Treks For Spring</h3>
      </section>
      <div className={styles.teineAlumine}>
          <div className={styles.teineAlumineVasak}>
            <section className={styles.teineAlumineVasakSection}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sagittis libero nec vehicula. Cras mi arcu, gravida vitae massa eget, venenatis pellentesque est. Sed a venenatis nisi, quis dignissim ex.
            </section>
            {/*<div className={styles.nooled}>
              <span className={styles.vasak}>←</span>
              <span className={styles.lehekylg}>01</span>
              <span className={styles.kaldkriips}>/</span>
              <span className={styles.lehekyljed}>06</span>
              <span className={styles.parem}>→</span>
            </div> */}
          </div>
            <div className={styles.teineAlumineFotod}>
              <div className={`${styles.teineAlumineFotodFoto} ${styles.teineAlumineFotodFoto1}`}></div>
              <div className={`${styles.teineAlumineFotodFoto} ${styles.teineAlumineFotodFoto2}`}></div>
              <div className={`${styles.teineAlumineFotodFoto} ${styles.teineAlumineFotodFoto3}`}></div>
            </div>
      </div>
    </div>
  ) 
}

{/*const Footer = () => {
  return (
    <div className={styles.footer-up}>
    <Navigatsioon />
       <div className={styles.footer-down}>
            <div className={styles.contact}>
              <p1><strong>CALL NOW</strong></p1>
              <p2><strong>1800 888 555</strong></p2>
            </div>
        <div className={styles.footer-down}>
          <section>
            © Company Name 2022. All rights reserved.
          </section>
    </div>
    </div>
    </div>
  )
} */}

const Home = () => {
  return (
    <div>
      <Head>
        <title>Matkaklubi</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Pais />
      <Teine />
    </div>
  );
};

export default Home;
