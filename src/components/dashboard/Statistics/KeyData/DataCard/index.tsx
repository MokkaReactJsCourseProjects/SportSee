//Imports
import { Image } from "../../../../../types/misc";
import hexToRgba from "../../../../../utils/misc/hexToRgba";
import styles from "./style.module.scss";

//Types
interface DataCardProps {
    icon: Image;
    colorHex: string;
    value: number;
    unit: string;
    unitName: string;
}

//Exports
export default function DataCard({
    icon,
    colorHex,
    value,
    unit,
    unitName,
}: DataCardProps) {
    return (
        <div className={styles.card}>
            <div
                className={styles.icon}
                style={{ backgroundColor: hexToRgba(colorHex, 0.1) }}
            >
                <img src={icon} draggable={false} />
            </div>
            <div className={styles.text}>
                <p className={styles.value}>
                    {value}
                    {unit}
                </p>
                <p>{unitName}</p>
            </div>
        </div>
    );
}
