//Imports
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";
import { User } from "../../../../types/user";
import styles from "./style.module.scss";
import getPerformanceValue from "../../../../utils/misc/getPerformanceValue";
import KindTick from "./KindTick";

//Types
interface PerformanceProps {
    user: User;
}

//Exports
export default function Performance({ user }: PerformanceProps) {
    const data = [
        {
            kind: "Intensité",
            value: getPerformanceValue(user, "intensity"),
        },
        {
            kind: "Vitesse",
            value: getPerformanceValue(user, "speed"),
        },
        {
            kind: "Force",
            value: getPerformanceValue(user, "strength"),
        },
        {
            kind: "Endurance",
            value: getPerformanceValue(user, "endurance"),
        },
        {
            kind: "Energie",
            value: getPerformanceValue(user, "energy"),
        },
        {
            kind: "Cardio",
            value: getPerformanceValue(user, "cardio"),
        },
    ];

    return (
        <div className={styles.container}>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <RadarChart
                    data={data}
                    innerRadius={"15%"}
                    outerRadius={"100%"}
                    margin={{ top: 42, right: 0, bottom: 42, left: 0 }}
                >
                    <PolarGrid radialLines={false} stroke="#FFF" />
                    <PolarAngleAxis
                        dataKey="kind"
                        tickSize={7}
                        tick={KindTick}
                    />
                    <PolarRadiusAxis
                        domain={[0, 250]}
                        axisLine={false}
                        tick={false}
                    />
                    <Radar
                        dataKey="value"
                        fill="var(--color-primary)"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
