import { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'
import styles from "../styles/Home.module.css";

const Pais = () => {
  return (
    <div className={styles.pais}>
        <nav className={styles.paisNav}>
            <a href="index.html" className={styles.logo}>
                {/* <img src="assets/logo.png" alt="Matkaklubi logo" className="logoPilt">*/}
                <div className="logoTekst">
                    <span>HIKING</span>
                    <span>CLUB</span>
                </div>
            </a>
            <div className="paremPool">
                <a href="index.html" className={styles.paremPoolLink}>HOME</a>
                <a href="index.html" className={styles.paremPoolLink}>UPCOMING TREKS</a>
                <a href="index.html" className={styles.paremPoolLink}>TREK FOR FAMILY</a>
                <a href="index.html" className={styles.paremPoolLink}>CONTACT US</a>
            </div>
        </nav>
        <div className={styles.alumine}>
            <div className={styles.sisu}>
                <h1 className={'${styles.pealkirjad} $styles.paisAlumineSisuH1}'}>CLIMB FOR BETTER</h1>
                <h2 className={'${styles.pealkirjad} $styles.paisAlumineSisuH2}'}>GET OUT NOW</h2>
                <h4 className={'${styles.pealkirjad} $styles.paisAlumineSisuH4}'}>JOIN US FOR THE WEEKEND TO CLIMB<br>
                THE HIGHEST PEAK IN ENGLAND</h4>
                <a href="upcoming.html"> 
                <button className={styles.nupp}>VIEW UPCOMING TREKS</button>
                </a>
            </div>
            <div className="pilt"></div>   
        </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matkaklubi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pais />
    </div>
  );
};

export default Home;
