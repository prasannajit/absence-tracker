export type AnyObject = { [key: string]: any };

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