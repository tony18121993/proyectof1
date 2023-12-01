import imagen from "../img/F1.png";
import styles from "./Menu.module.css";
import React from "react";
import { Bienvenida } from "./Bienvenida";
import { Circuitos } from "./Circuitos";
import { Pilotos } from "./Pilotos";
import { Detalle } from "./Detalle";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export function Menu() {
  return (
    <header className={styles.cabecera}>
      <img src={imagen} alt="" className={styles.imagen} />
      <Router>
        <nav>
          <ul className={styles.navegador}>
            <li>
              <Link className={styles.enlaces} to="/Bienvenida">
                Bienvenida
              </Link>
            </li>
            <li>
              <Link className={styles.enlaces} to="/Circuitos">
                Circuitos
              </Link>
            </li>
            <li>
              <Link className={styles.enlaces} to="/Pilotos">
                Pilotos
              </Link>
            </li>
            {/* <li>
              <Link className={styles.enlaces} to="/Detalle">
                Detalle Piloto
              </Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/Bienvenida" element={<Bienvenida />}></Route>
          <Route path="/Circuitos" element={<Circuitos />}></Route>
          <Route path="/Pilotos" element={<Pilotos />}></Route>
          {/* <Route path="/Detalle" element={<Detalle />}></Route> */}
          <Route path="/Detalle/:pilotoID" element={<Detalle />}></Route>
        </Routes>
      </Router>
    </header>
  );
}
