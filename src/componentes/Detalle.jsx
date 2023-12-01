import styles from "./Detalle.module.css";
import pilotos from "../pilotos.json";
import { useParams } from "react-router-dom";
export function Detalle() {
  let { pilotoID } = useParams();
  const piloto = pilotos.find((elemento) => elemento.id == pilotoID);
  return (
    <div className={styles.contenedor__detalle}>
      <div className={styles.imagenes}>
        <img src={piloto.image} alt="" />
      </div>
      <p>{piloto.nombre}</p>
      <p>Equipo: {piloto.equipo}</p>
      <p>País: {piloto.nacionalidad}</p>
      <p>Número: {piloto.numero}</p>
      <p>Títulos: {piloto.campeonatos}</p>
    </div>
  );
}
