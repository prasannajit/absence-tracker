import { APIResponse } from "../types";
import * as ics from 'ics';

const generateEvents = (data: Array<APIResponse>) => {
    const approvedLeaves = data.filter(row => {
        return row.confirmedAt !== null;
    });
    const events = approvedLeaves.map(row => {
        const { name, memberNote, startDate, endDate } = row;
        const title = `${name} is on leave`;
        const startArray:Array<string> = startDate.split('-');
        const start = [...startArray.map(item => parseInt(item)), 12, 0];
        const endArray:Array<string> = endDate.split('-');
        const end = [...endArray.map(item => parseInt(item)), 23, 59];
        return { title, start, end, description: memberNote };
    });
    return events;
};

const generateCalFile = (data: Array<APIResponse>) => {
    const events = generateEvents(data);
    console.log(events);
    const { value='' } = ics.createEvents(events as ics.EventAttributes[]);
    return value;
};

export default generateCalFile;