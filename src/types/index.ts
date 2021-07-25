export type APIResponse = {[key:string]: any};

export enum APITriggerStatus{
    NONE,
    PENDING,
    FAILED,
    SUCCESS,
};

export type APIUrl=[string,string];