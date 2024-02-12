//Imports
import { User } from "../../../../types/user";
import styles from "./style.module.scss";

//Types
interface DailyActivityProps {
    user: User;
}

//Exports
export default function DailyActivity({ user }: DailyActivityProps) {
    return <div className={styles.container}></div>;
}
