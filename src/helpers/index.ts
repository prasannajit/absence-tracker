import { APIResponse } from "../types";

export const combineRecords = (members:Array<APIResponse>, absences:Array<APIResponse>):Array<APIResponse> => {
    const map = new Map();
    const combinedData = [];
    for (const member of members) {
        const { userId } = member;
        map.set(userId, member);
    }
    for (const absence of absences) {
        combinedData.push({ ...absence, ...map.get(absence.userId) })
    }
    return combinedData;
};
