/* splitPaneSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Interface(s) */
export interface SplitPaneState {
    // splitPane: SplitPaneState;
    value: boolean;
}

const initialState: SplitPaneState = {
    value: true
};

export const splitPaneSlice = createSlice({
    name: 'splitPane',
    initialState,
    reducers: {
        show: (state) => {
            state.value = true;
        },
        hide: (state) => {
            state.value = false;
        }
    }
});

/* Action(s) */
export const { show, hide } = splitPaneSlice.actions;

/* Reducer(s) */
export default splitPaneSlice.reducer;