//Imports
import images from "../../../../assets/images";
import { UserKeyData } from "../../../../types/user";
import DataCard from "./DataCard";
import styles from "./style.module.scss";

//Types
interface KeyDataProps {
    keyData: UserKeyData;
}

//Exports
export default function KeyData({ keyData }: KeyDataProps) {
    return (
        <div className={styles.container}>
            <DataCard
                icon={images.energy}
                colorHex="#ff0000"
                value={keyData.calorieCount}
                unit="kCal"
                unitName="Calories"
            />
            <DataCard
                icon={images.chicken}
                colorHex="#4ab8ff"
                value={keyData.proteinCount}
                unit="g"
                unitName="Proteines"
            />
            <DataCard
                icon={images.apple}
                colorHex="#f9ce23"
                value={keyData.carbohydrateCount}
                unit="g"
                unitName="Glucides"
            />
            <DataCard
                icon={images.cheeseburger}
                colorHex="#fd5181"
                value={keyData.lipidCount}
                unit="g"
                unitName="Lipides"
            />
        </div>
    );
}
