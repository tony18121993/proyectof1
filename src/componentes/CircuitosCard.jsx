import styles from "./CircuitosCard.module.css";

const mostrar = (location, ganador) => {
  alert("El Ganador de circuito " + location + " es: " + ganador);
};

export function CircuitosCard({ circuito }) {
  return (
    <li className={styles.cardprincipal} key={circuito.location}>
      <div>
        <img src={circuito.image} alt="" />
      </div>
      <div className={styles.texto}>
        <p>Nombre: {circuito.name}</p>
        <p>Ciudad: {circuito.location}</p>
        <p>Fecha Construccion: {circuito.fecha_construccion}</p>
        <button
          onClick={() => mostrar(circuito.location, circuito.ganador2023)}
        >
          Mostrar Ganador
        </button>
      </div>
    </li>
  );
}
