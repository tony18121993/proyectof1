import styles from "./PilotosCard.module.css";

import { Link } from "react-router-dom";

export function PilotosCard({ pilotos }) {
  return (
    <li className={styles.cardprincipal} key={pilotos.id}>
      <div className={styles.imagenes}>
      <img src={pilotos.image} alt="" />
      </div>
      <p>{pilotos.nombre}</p>
      <p>Equipo:{pilotos.equipo}</p>
      <p>Nacionalidad:{pilotos.nacionalidad}</p>
      <p>Numero: {pilotos.numero}</p>
      <p>Titulos: {pilotos.campeonatos}</p>
      <Link to={"/Detalle/" + pilotos.id}>
        <button className={styles.boton}>Ver Piloto</button>
      </Link>
    </li>
  );
}
