//Imports
import { User } from "../../types/user";

//Exports
export default function getPerformanceValue(user: User, kind: string) {
    return user.performances.find((elem) => elem.name === kind).value;
}
