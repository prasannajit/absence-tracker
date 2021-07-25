import { createSlice } from "@reduxjs/toolkit";
import { combineRecords } from './../helpers/index';
import { AnyObject } from '../types';

const data: Array<AnyObject> = [];

const APIResponseDataSlice = createSlice({
    name: 'APIResponseData',
    initialState: { data },
    reducers: {
        saveData(state, action) {
            const { absences, members }: { absences: Array<AnyObject>, members: Array<AnyObject> } = action.payload;
            state.data = combineRecords(members, absences);
        }
    }
});

export const APIResponseDataActions = APIResponseDataSlice.actions;
export default APIResponseDataSlice;
