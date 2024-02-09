//Imports
import {
    activityMock,
    averageSessionsMock,
    performanceMock,
    userMock,
} from "../../data/mocks";
import {
    ApiActivity,
    ApiAverageSessions,
    ApiPerformance,
    ApiUser,
} from "../../types/apiResponse";
import { Id } from "../../types/misc";
import { User } from "../../types/user";

//Exports
export default async function getUser(userId: Id): Promise<User> {
    let apiUser: ApiUser,
        apiActivity: ApiActivity,
        apiAverageSessions: ApiAverageSessions,
        apiPerformance: ApiPerformance;
    try {
        if (import.meta.env.VITE_USE_MOCKED_API === "true") {
            apiUser = userMock.data;
            apiActivity = activityMock.data;
            apiAverageSessions = averageSessionsMock.data;
            apiPerformance = performanceMock.data;
        } else {
            apiUser = (
                await (
                    await fetch(`http://localhost:3000/user/${userId}`)
                ).json()
            ).data;
            apiActivity = (
                await (
                    await fetch(`http://localhost:3000/user/${userId}/activity`)
                ).json()
            ).data;
            apiAverageSessions = (
                await (
                    await fetch(
                        `http://localhost:3000/user/${userId}/average-sessions`
                    )
                ).json()
            ).data;
            apiPerformance = (
                await (
                    await fetch(
                        `http://localhost:3000/user/${userId}/performance`
                    )
                ).json()
            ).data;
            if (
                !apiUser ||
                !apiActivity ||
                !apiAverageSessions ||
                !apiPerformance
            ) {
                throw new Error(`No user found with Id=${userId}`);
            }
        }
        return new User(
            apiUser,
            apiActivity,
            apiAverageSessions,
            apiPerformance
        );
    } catch (e) {
        console.error(e);
        return null;
    }
}
