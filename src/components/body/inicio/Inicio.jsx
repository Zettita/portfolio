import cv from "./CV-Uriel-Solnik.pdf";
import { FaSheetPlastic, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import styles from "./Inicio.module.css";
import imagen from "../../../assets/icons8-abajo-90.png";
import fondo from "../../../assets/papers.co-ax42-coding-dark-computer-bokeh-illustration-art-black-34-iphone6-plus-wallpaper.jpg";
export default function Inicio() {

  return (
    <>
      <section className={styles.section}>
        <img className={styles.fondo} src={fondo} alt="" />
        <div className={styles.divTittle}> 
        <h3 className={styles.h3}>¡Hola! soy</h3>
        <h2 className={styles.h2}>Uriel Solnik</h2>
        <h3 className={styles.h3FED}>
          Front-End Developer 
          <span className={styles.guion} id="guion">_</span>  
        </h3>
        </div>
       
        <div className={styles.div}>
          <button className={styles.button}>
            <a href="mailto:uriel.solnik@gmail.com" className={styles.a}>
              <SiGmail className={styles.svg} />
            </a>
          </button>
          <button className={styles.button}>
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5491169653078" className={styles.a}>
              <FaWhatsapp className={styles.svg} />
            </a>
          </button>
          <button className={styles.button}>
            <a href={cv} download className={styles.a}>
              <FaSheetPlastic className={styles.svg} />
            </a>
          </button>
          </div>  
        <img
          className={styles.flecha}
          id="flecha"
          src={imagen}
          alt="Flecha animada"
        />
  
      </section>
    </>
  );
}
