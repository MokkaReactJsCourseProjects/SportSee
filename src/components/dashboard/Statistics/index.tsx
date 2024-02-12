//Imports
import KeyData from "./KeyData";
import { User } from "../../../types/user";
import styles from "./style.module.scss";
import Score from "./Score";
import DailyActivity from "./DailyActivity";

//Types
interface StatisticsProps {
    user: User;
}

//Exports
export default function Statistics({ user }: StatisticsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.secondContainer}>
                <DailyActivity user={user} />
                <div className={styles.thirdContainer}>
                    <Score user={user} />
                    <Score user={user} />
                    <Score user={user} />
                </div>
            </div>
            <KeyData keyData={user.keyData} />
        </div>
    );
}
