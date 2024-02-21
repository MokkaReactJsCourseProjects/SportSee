//Imports
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { User } from "../../../../types/user";
import styles from "./style.module.scss";
import OverlayCursor from "./OverlayCursor";
import ActiveDot from "./ActiveDot";
import getFirstLetterOfDay from "../../../../utils/misc/getFirstLetterOfDay";

//Types
interface AverageSessionsProps {
    user: User;
}

//Exports
export default function AverageSessions({ user }: AverageSessionsProps) {
    const data = [{ date: "0", duration: 0 }, ...user.sessions];
    const renderTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return <p className={styles.tooltip}>{`${payload[0].value}min`}</p>;
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <ResponsiveContainer
                width="100%"
                height="100%"
                className={styles.chart}
            >
                <LineChart
                    data={data}
                    margin={{ top: 80, right: 0, left: 0, bottom: 60 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop
                                offset="10%"
                                stopColor="#FFFFFF"
                                stopOpacity={0.4}
                            />
                            <stop
                                offset="100%"
                                stopColor="#FFFFFF"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <Tooltip
                        content={renderTooltip}
                        cursor={<OverlayCursor />}
                    />
                    <Line
                        type="bumpX"
                        stroke="url(#colorUv)"
                        dataKey="duration"
                        strokeWidth={2}
                        dot={false}
                        activeDot={<ActiveDot />}
                    />
                </LineChart>
            </ResponsiveContainer>
            <p className={styles.title}>Durée moyenne des sessions</p>
            <ul className={styles.days}>
                {data.map((session, index) => {
                    if (index > 0) {
                        return (
                            <li key={index}>
                                {getFirstLetterOfDay(session.date)}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}
