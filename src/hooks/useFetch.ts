import { useState, useEffect } from 'react';
import { APIResponse } from '../types';
const FETCH_ABORTED_ERROR = 'AbortError';

/**
 * React Hook to perform a get request on a URL and then sets the response
 * on state property data after request is successful. If there is an error
 * during the API call, sets error state to true. During the api call, it marks
 * the state property loading to true.
 * @param  {string[]} url - API url to perform a get request
 * @return { object } - state properties data, loading and error
 */
const useFetch = (urls: string[]) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Array<APIResponse>>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        /** Set loading state before api call */
        setLoading(true);
        setError(false);
        setData([]);

        const controller = new AbortController();
        const { signal } = controller;

        const performFetch = async () => {
            try {
                const promiseList: Array<Promise<Response>> = [];
                urls.forEach(url => promiseList.push(fetch(url, { signal })))
                const responseList = await Promise.all(promiseList);
                const result: Array<APIResponse> = [];
                for (const response of responseList) {
                    if (response.ok) {
                        const apiData: APIResponse = await response.json();
                        result.push(apiData);
                    }
                }
                if (result.length !== urls.length) {
                    setLoading(false);
                    setError(true);
                } else {
                    setLoading(false);
                    setData(result);
                }
            }
            catch (e) {
                if (e.name === FETCH_ABORTED_ERROR) {
                    /** The fetch has been aborted, no action required, ignore */
                    return;
                }
                setLoading(false);
                setError(true);
            }
        };
        performFetch();
        return () => {
            controller.abort();
        };
    }, [urls]);

    return { loading, data, error };
};

export default useFetch;