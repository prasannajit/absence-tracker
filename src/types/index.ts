export type AnyObject = { [key: string]: any };

export interface Member {
    crewId: number,
    id: number,
    image: string,
    name: string,
    userId: number,
}

export interface Absence {
    admitterId: number | null,
    admitterNote: string,
    confirmedAt: string,
    createdAt: string,
    crewId: number,
    endDate: string,
    id: number,
    memberNote: string,
    rejectedAt: string,
    startDate: string,
    type: string,
    userId: number,
}

export interface CombinedRecord{
    admitterId: number | null,
    admitterNote: string,
    confirmedAt: string,
    createdAt: string,
    crewId: number,
    endDate: string,
    id: number,
    memberNote: string,
    rejectedAt: string,
    startDate: string,
    type: string,
    userId: number,
    image: string,
    name: string,
}

export enum APITriggerStatus {
    NONE,
    PENDING,
    FAILED,
    SUCCESS,
};

export enum AbsenceStatus {
    REJECTED = 'Rejected',
    CONFIRMED = 'Confirmed',
    REQUESTED = 'Requested',
};

export type APIUrl = [string, string];