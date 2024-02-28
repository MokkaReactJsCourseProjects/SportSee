//Imports
import { Id } from "./misc";
import { UserKeyData } from "./user";

//Utils
interface ApiUserInfos {
    age: number;
    firstName: string;
    lastName: string;
}

interface ApiActivitySession {
    calories: number;
    day: string;
    kilogram: number;
}

interface ApiAverageSession {
    day: number;
    sessionLength: number;
}

interface ApiPerformanceKindValue {
    kind: number;
    value: number;
}

//Exports
export interface ApiUser {
    id: Id;
    keyData: UserKeyData;
    todayScore?: number;
    score?: number;
    userInfos: ApiUserInfos;
}

export interface ApiActivity {
    userId: Id;
    sessions: ApiActivitySession[];
}

export interface ApiAverageSessions {
    userId: Id;
    sessions: ApiAverageSession[];
}

export interface ApiPerformance {
    userId: Id;
    data: ApiPerformanceKindValue[];
    kind: object;
}
