//Imports
import styles from "./style.module.scss";

//Types
interface GreetingsProps {
    firstName: string;
}

//Exports
export default function Greetings({ firstName }: GreetingsProps) {
    return (
        <div className={styles.greetings}>
            <h1>
                Bonjour <span>{firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}
