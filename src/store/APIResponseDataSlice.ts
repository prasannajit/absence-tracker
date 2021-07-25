import { createSlice } from "@reduxjs/toolkit";
import { combineRecords } from './../helpers/index';
import { APIResponse } from '../types';

const data: Array<APIResponse> = [];

const APIResponseDataSlice = createSlice({
    name: 'APIResponseData',
    initialState: { data },
    reducers: {
        saveData(state, action) {
            const { absences, members }: { absences: Array<APIResponse>, members: Array<APIResponse> } = action.payload;
            state.data = combineRecords(members, absences);
        }
    }
});

export const APIResponseDataActions = APIResponseDataSlice.actions;
export default APIResponseDataSlice;
