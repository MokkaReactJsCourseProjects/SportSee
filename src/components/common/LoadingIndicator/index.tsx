//Imports
import styles from "./style.module.scss";

//Exports
export default function LoadingIndicator() {
    return (
        <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
