//Imports
import styles from "./style.module.scss";

//Exports
export default function Greetings() {
    return (
        <div className={styles.greetings}>
            <h1>
                Bonjour <span>Thomas</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}
