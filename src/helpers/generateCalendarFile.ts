import { AnyObject } from "../types";
import * as ics from 'ics';

/**
 * Generates events to be used to generate ics file
 * @param data - combined member and absence records
 * @returns events - to be converted to ics format
 */
const generateEvents = (data: Array<AnyObject>) => {
    /** Generate events for approved leaves */
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

/**
 * 
 * @param data - combined member and absence records
 * @returns ics file data
 */
const generateCalFile = (data: Array<AnyObject>) => {
    const events = generateEvents(data);
    const { value='' } = ics.createEvents(events as ics.EventAttributes[]);
    return value;
};

export default generateCalFile;