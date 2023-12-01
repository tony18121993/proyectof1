import pilotos from "../pilotos.json";
import { PilotosCard } from "./PilotosCard";
import styles from "./Pilotos.module.css";

export function Pilotos() {
  return (
    <>
      <div className="lista">
        <ul className={styles.contenedor}>
          <ListaPilotos />
        </ul>
      </div>
    </>
  );
}

function ListaPilotos() {
    let pilotosJSX = pilotos.map((piloto) => <PilotosCard pilotos={piloto} />);  
    return pilotosJSX;
  }
  