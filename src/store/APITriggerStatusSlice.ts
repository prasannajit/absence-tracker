import { createSlice } from "@reduxjs/toolkit";
import { APITriggerStatus } from "../types";

const status = APITriggerStatus.NONE;

const APITriggerStatusSlice = createSlice({
    name: 'APITriggerStatus',
    initialState: { status },
    reducers: {
        changeState(state, action) {
            state.status = action.payload;
        }
    }
});

export const APITriggerStatusActions = APITriggerStatusSlice.actions;

export default APITriggerStatusSlice;