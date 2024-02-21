//Imports
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { User } from "../../../../types/user";
import styles from "./style.module.scss";
import DayTick from "./DayTick";
import DataName from "./DataName";

//Types
interface DailyActivityProps {
    user: User;
}

//Exports
export default function DailyActivity({ user }: DailyActivityProps) {
    const data = user.sessions;
    const renderTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}kCal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.legend}>
                <p className={styles.title}>Activité quotidienne</p>
                <div className={styles.dataNames}>
                    <DataName name="Poids (kg)" color="#282D30" />
                    <DataName name="Calories brûlées (kCal)" color="#E60000" />
                </div>
            </div>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart
                    data={data}
                    margin={{ top: 112, right: 43, left: 43, bottom: 43 }}
                    barGap={8}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="date"
                        tickMargin={16}
                        axisLine={{ stroke: "#DEDEDE", strokeWidth: 1 }}
                        tickLine={false}
                        tick={<DayTick />}
                    />
                    <YAxis
                        dataKey="calories"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={43}
                        tickCount={3}
                    />
                    <Tooltip
                        content={renderTooltip}
                        cursor={{ fill: "#C4C4C488" }}
                    />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
