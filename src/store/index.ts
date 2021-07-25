import { configureStore } from '@reduxjs/toolkit';
import APIResponseDataSlice from './APIResponseDataSlice';
import APITriggerStatusSlice from './APITriggerStatusSlice';

const store = configureStore({
    reducer:{
        APIData: APIResponseDataSlice.reducer,
        APIStatus: APITriggerStatusSlice.reducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;


