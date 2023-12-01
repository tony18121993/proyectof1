import circuitos from ".././circuitos.json";
import { CircuitosCard } from "./CircuitosCard";
import styles from "./Circuitos.module.css";
export function Circuitos() {
    return (
        <>
          <div className="lista">
            <ul className={styles.contenedor}>
              <Lista />
            </ul>
          </div>
        </>
      );
    
}

function Lista() {
    let circuitoJSK = circuitos.map((circu) => <CircuitosCard circuito={circu} />);
    return circuitoJSK;
  }