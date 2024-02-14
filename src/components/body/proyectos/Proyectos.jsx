import styles from "./proyectos.module.css";
import foto from "../../../assets/series.png";
import foto2 from "../../../assets/cotizador.png";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

export default function Proyectos() {
  const goRight = () => {
    const div = document.getElementById("div");
    const card = div.querySelector(`.${styles.card}`);

    div.style.transform = `translateX(-${card.clientWidth}px)`;
  };

  const goLeft = () => {
    const div = document.getElementById("div");
    div.style.transform = `translateX(0px)`;
  };

  return (
    <>
      <section className={styles.section} id="proyectos">
        <h3 className={styles.h3}>Proyectos</h3>
        <div className={styles.container}>
        
        <div className={styles.divFlechas}>
            <span className={styles.flechaIzquierda} onClick={() => goLeft()}>
              {"<"}
            </span>
             <span className={styles.flechaDerecha} onClick={() => goRight()}>
              {">"}
            </span>
          </div>

          <div className={styles.div} id="div">
            <div className={styles.card} id="1">
              <div className={styles.divImagen}>
                <img className={styles.img} src={foto} id="primera" alt="" />
              </div>
              <div className={styles.divCard}>
                <h3 className={styles.h3}>Z Show </h3>
                <p className={styles.p}>asdasdasd asdasdasd</p>
                <div className={styles.divIconos}>
                  <a
                    className={styles.a}
                    href="https://github.com/Zettita/PROYECTO2-URIELEDUARDO-SOLNIK"
                  >
                    <SiGithub className={styles.icon} />
                  </a>

                  <a
                    className={styles.a}
                    href="https://zettita.github.io/PROYECTO2-URIELEDUARDO-SOLNIK/index.html"
                  >
                    <FaLink className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card} id="2">
              <div className={styles.divImagen}>
                <img className={styles.img} src={foto2} id="segunda" alt="" />
              </div>
              <div className={styles.divCard}>
                <h3 className={styles.h3}>Cotizador</h3>
                <p className={styles.p}>Hecho con React</p>
                <div className={styles.divIconos}>
                  <a
                    className={styles.a}
                    href="https://github.com/Zettita/PROYECTO3-URIEL-SOLNIK"
                  >
                    <SiGithub className={styles.icon} />
                  </a>

                  <a
                    className={styles.a}
                    href="https://cotizador-solnik.netlify.app/"
                  >
                    <FaLink className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </section>
    </>
  );
}