import image from "../img/bienvenida.jpg"
import styles from "./Bienvenida.module.css"
export function Bienvenida(){
return(
    <div className={styles.container}>
        <h2 className={styles.letra}>Bienvenido a la Pagina de Informacion de la F1</h2>
        <img src={image} className={styles.imagen} alt="" />
    </div>
);
}