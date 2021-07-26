import { Absence, Member, CombinedRecord } from "../types";

/**
 * Combines absence and member records into one record set
 * @param members - members records
 * @param absences - absence records
 * @returns single record set that has both the data combined
 */
const combineRecords = (members: Array<Member>, absences: Array<Absence>): Array<CombinedRecord> => {
    const map = new Map();
    const combinedData = [];
    for (const member of members) {
        const { userId, name, image } = member;
        /** Create a map of userId to member data */
        map.set(userId, {name,image});
    }
    for (const absence of absences) {
        const memberDetails = map.get(absence.userId);
        combinedData.push({ ...absence, ...memberDetails })
    }
    return combinedData;
};

export default combineRecords;