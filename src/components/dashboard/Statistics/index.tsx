//Imports
import { XAxis, Tooltip, YAxis, Legend, Bar, BarChart } from "recharts";
import styles from "./style.module.scss";
import {
    performance,
    user,
    averageSessions,
    activity,
} from "../../../data/mocks";
import KeyData from "./KeyData";

//Exports
export default function Statistics() {
    // console.log("-----------");
    // console.log(user.data.keyData);
    // console.log(performance.data);
    // console.log(averageSessions.data);
    // console.log(activity.data);

    return (
        <div>
            <KeyData />
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
