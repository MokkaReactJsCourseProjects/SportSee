//Imports
import images from "../../../../assets/images";
import { user } from "../../../../data/mocks";
import DataCard from "./DataCard";

//Exports
export default function KeyData() {
    const data = user.data.keyData;

    return (
        <div>
            <DataCard
                icon={images.energy}
                colorHex="#ff0000"
                value={data.calorieCount}
                unit="kCal"
                unitName="Calories"
            />
            <DataCard
                icon={images.chicken}
                colorHex="#4ab8ff"
                value={data.proteinCount}
                unit="g"
                unitName="Proteines"
            />
            <DataCard
                icon={images.apple}
                colorHex="#f9ce23"
                value={data.carbohydrateCount}
                unit="g"
                unitName="Glucides"
            />
            <DataCard
                icon={images.cheeseburger}
                colorHex="#fd5181"
                value={data.lipidCount}
                unit="g"
                unitName="Lipides"
            />
        </div>
    );
}
