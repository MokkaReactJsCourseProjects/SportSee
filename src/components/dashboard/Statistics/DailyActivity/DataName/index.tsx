//Imports
import styles from "./style.module.scss";

//Types
interface DataNameProps {
    name: string;
    color: string;
}

//Exports
export default function DataName({ name, color }: DataNameProps) {
    return (
        <div className={styles.container}>
            <div className={styles.icon} style={{ backgroundColor: color }} />
            <p className={styles.name}>{name}</p>
        </div>
    );
}
