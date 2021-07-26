import { createSlice } from "@reduxjs/toolkit";
import { combineRecords } from './../helpers/index';
import { CombinedRecord, Member, Absence } from '../types';

const data: Array<CombinedRecord> = [];

const APIResponseDataSlice = createSlice({
    name: 'APIResponseData',
    initialState: { data },
    reducers: {
        saveData(state, action) {
            const { absences, members }: { absences: Array<Absence>, members: Array<Member> } = action.payload;
            state.data = combineRecords(members, absences);
        }
    }
});

export const APIResponseDataActions = APIResponseDataSlice.actions;
export default APIResponseDataSlice;
