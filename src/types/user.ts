//Imports
import {
    ApiActivity,
    ApiAverageSessions,
    ApiPerformance,
    ApiUser,
} from "./apiResponse";
import { Id } from "./misc";
import { Performance } from "./performance";
import { Session } from "./session";

//Exports
export class User {
    id: Id;
    todayScore: number;
    keyData: UserKeyData;
    firstName: string;
    lastName: string;
    age: number;
    sessions: Session[];
    performances: Performance[];
    constructor(
        apiUser: ApiUser,
        apiActivity: ApiActivity,
        apiAverageSessions: ApiAverageSessions,
        apiPerformance: ApiPerformance
    ) {
        this.id = apiUser.id;
        this.firstName = apiUser.userInfos.firstName;
        this.lastName = apiUser.userInfos.lastName;
        this.age = apiUser.userInfos.age;
        this.todayScore = apiUser.todayScore;
        this.keyData = apiUser.keyData;
        this.sessions = apiActivity.sessions.map((activitySession, i) => {
            return {
                calories: activitySession.calories,
                kilogram: activitySession.kilogram,
                date: activitySession.day,
                duration: apiAverageSessions.sessions[i].sessionLength,
            };
        });
        this.performances = apiPerformance.data.map((performance) => {
            return {
                value: performance.value,
                name: apiPerformance.kind[performance.kind],
            };
        });
    }
}

export interface UserKeyData {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
}
