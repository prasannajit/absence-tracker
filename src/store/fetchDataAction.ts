import { APIResponse } from '../types';
import { APIResponseDataActions } from './APIResponseDataSlice';
import { APITriggerStatusActions } from './APITriggerStatusSlice';
import { APITriggerStatus, APIUrl } from '../types';
import { AppDispatch } from './index';

export const fetchDataAction = (urls: Array<APIUrl>) => {
    return async (dispatch: AppDispatch) => {
        dispatch(APITriggerStatusActions.changeState(APITriggerStatus.PENDING));
        const fetchData = async () => {
            try {
                const promiseList: Array<Promise<Response>> = [];
                urls.forEach(url => promiseList.push(fetch(url[1])))
                const responseList = await Promise.all(promiseList);
                const result: { [key: string]: any } = {};
                let index = 0;
                for (const response of responseList) {
                    if (response.ok) {
                        const apiData: APIResponse = await response.json();
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
            dispatch(APIResponseDataActions.saveData({ ...result }));
            dispatch(APITriggerStatusActions.changeState(APITriggerStatus.SUCCESS));
        }
        catch (e) {
            dispatch(APITriggerStatusActions.changeState(APITriggerStatus.FAILED));
        }
    };
}