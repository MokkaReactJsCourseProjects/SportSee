//Imports
import { XAxis, Tooltip, YAxis, Legend, Bar, BarChart } from "recharts";
import KeyData from "./KeyData";
import { User } from "../../../types/user";
import styles from "./style.module.scss";

//Types
interface StatisticsProps {
    user: User;
}

//Exports
export default function Statistics({ user }: StatisticsProps) {
    return (
        <div className={styles.container}>
            <div>
                <div></div>
            </div>
            <KeyData keyData={user.keyData} />
        </div>
    );
    return (
        <div>
            <BarChart width={730} height={250} data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                    name="Poids (kg)"
                    dataKey="kg"
                    fill="var(--color-dkgray)"
                />
                <Bar
                    name="Calories brûlées (kCal)"
                    dataKey="cal"
                    fill="var(--color-primary)"
                />
            </BarChart>
            {/* <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart> */}
        </div>
    );
}
