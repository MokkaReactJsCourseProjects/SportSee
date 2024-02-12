//Imports
import { RadialBar, RadialBarChart } from "recharts";
import { User } from "../../../../types/user";
import styles from "./style.module.scss";

//Types
interface ScoreProps {
    user: User;
}

//Exports
export default function Score({ user }: ScoreProps) {
    const value = Math.ceil(user.todayScore * 100);
    const data = [
        {
            name: "Max",
            value: 100,
            fill: "transparent",
        },
        {
            name: "Score",
            value,
            fill: "var(--color-primary)",
        },
    ];
    return (
        <div className={styles.container}>
            <RadialBarChart
                data={data}
                width={170}
                height={170}
                startAngle={90}
                endAngle={90 + 360}
                barSize={10}
                innerRadius="112%"
                outerRadius="112%"
                className={styles.chart}
            >
                <RadialBar
                    dataKey="value"
                    cornerIsExternal
                    cornerRadius={999}
                />
            </RadialBarChart>
            <p className={styles.statName}>Score</p>
            <div className={styles.statValue}>
                <p>
                    <em>{value}%</em>
                    <br />
                    de votre objectif
                </p>
            </div>
        </div>
    );
}
