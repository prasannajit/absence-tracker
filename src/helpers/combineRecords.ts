import { AnyObject } from "../types";

/**
 * Combines absence and member records into one record set
 * @param members - members records
 * @param absences - absence records
 * @returns single record set that has both the data combined
 */
const combineRecords = (members: Array<AnyObject>, absences: Array<AnyObject>): Array<AnyObject> => {
    const map = new Map();
    const combinedData = [];
    for (const member of members) {
        const { userId } = member;
        /** Create a map of userId to member data */
        map.set(userId, member);
    }
    for (const absence of absences) {
        combinedData.push({ ...absence, ...map.get(absence.userId) })
    }
    return combinedData;
};

export default combineRecords;