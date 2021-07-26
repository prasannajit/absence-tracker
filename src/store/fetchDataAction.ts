import { APIResponseDataActions } from './APIResponseDataSlice';
import { APITriggerStatusActions } from './APITriggerStatusSlice';
import { APITriggerStatus } from '../types';
import type { APIUrl, Absence, Member, APIResponseObject } from '../types'
import { AppDispatch } from './index';

/**
 * Async action creator to fetch data and change state of App
 * from pending->success | failed
 * @param urls - urls to be
 */
const fetchDataAction = (urls: Array<APIUrl>) => {
    return async (dispatch: AppDispatch) => {
        /** Dispatch action to change the state of App tp pending */
        dispatch(APITriggerStatusActions.changeState(APITriggerStatus.PENDING));
        /** Async method to fetch data from api endpoints */
        const fetchData = async () => {
            try {
                const promiseList: Array<Promise<Response>> = [];
                urls.forEach(url => promiseList.push(fetch(url[1])))
                const responseList = await Promise.all(promiseList);
                let result: APIResponseObject={};
                let index = 0;
                for (const response of responseList) {
                    if (response.ok) {
                        const apiData: Array<Member>|Array<Absence> = await response.json();
                        result[urls[index][0]] = apiData;
                        index++;
                    }
                };
                if (Object.keys(result).length !== urls.length) {
                    /** Error condition, some api failed */
                    throw new Error('Some API failed');
                } else {
                    /** Success condition, all api calls succeeded */
                    return result;
                }
            }
            catch (e) {
                throw e;
            }
        };
        try {
            const result = await fetchData();
            /** Dispatch action to save the api response */
            dispatch(APIResponseDataActions.saveData({ ...result }));
            /** Dispatch action to change the state of App to success */
            dispatch(APITriggerStatusActions.changeState(APITriggerStatus.SUCCESS));
        }
        catch (e) {
            /** Dispatch action to change the state of App to failed */
            dispatch(APITriggerStatusActions.changeState(APITriggerStatus.FAILED));
        }
    };
}

export default fetchDataAction;