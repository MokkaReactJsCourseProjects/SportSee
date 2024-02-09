//Imports
import styles from "./style.module.scss";

//Types
interface ErrorMessageProps {
    message: string;
}

//Exports
export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className={styles.container}>
            <p className={styles.oops}>Oups!</p>
            <p className={styles.error}>
                Une erreure c'est produite : {message}
            </p>
        </div>
    );
}
