//Imports
import KeyData from "./KeyData";
import { User } from "../../../types/user";
import styles from "./style.module.scss";
import Score from "./Score";
import DailyActivity from "./DailyActivity";
import AverageSessions from "./AverageSessions";
import Performances from "./Performances";

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
                    <AverageSessions user={user} />
                    <Performances user={user} />
                    <Score user={user} />
                </div>
            </div>
            <KeyData keyData={user.keyData} />
        </div>
    );
}
