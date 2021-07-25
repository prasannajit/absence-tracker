import { APIResponse, AbsenceStatus } from "../types";
import { nanoid } from 'nanoid';

export const combineRecords = (members: Array<APIResponse>, absences: Array<APIResponse>): Array<APIResponse> => {
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

export const prepareTableData = (data: Array<APIResponse>) => {
    let rows: Array<APIResponse>=[];
    const formattedData = {
        columns: [
            { field: 'name', headerName: 'Name', width: 150 },
            { field: 'type', headerName: 'Type', width: 150 },
            { field: 'startDate', headerName: 'Start Date', width: 150 },
            { field: 'endDate', headerName: 'End Date', width: 150 },
            { field: 'period', headerName: 'Period', width: 150 },
            { field: 'memberNote', headerName: 'Member Note', width: 150 },
            { field: 'status', headerName: 'Status', width: 150 },
            { field: 'admitterNote', headerName: 'Admitter Note', width: 150 },
        ],
        rows,
    };
    const rowsData = data.map(row => {
        const { name, type, startDate, endDate, memberNote, admitterNote, rejectedAt, confirmedAt } = row;
        let start = new Date(startDate);
        let end = new Date(endDate);
        const period = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
        let status: AbsenceStatus = AbsenceStatus.REQUESTED;
        if (rejectedAt) {
            status = AbsenceStatus.REJECTED;
        } else if(confirmedAt){
            status = AbsenceStatus.CONFIRMED;
        }
        return {
            id:nanoid(),
            name,
            type,
            startDate,
            endDate,
            memberNote,
            admitterNote,
            period,
            status,
        }
    });
    formattedData.rows = rowsData;
    return formattedData;
};