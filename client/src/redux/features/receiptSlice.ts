/* receiptSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Interface(s) */
interface ReceiptState {
    value: string;
} 

const initialState: ReceiptState = {
    value: ''
}

export const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
        setReceipt: (state, action) => {
            state.value = action.payload
        }
    }
});

/* Action(s) */
export const { setReceipt } = receiptSlice.actions;

/* Reducers(s) */
export default receiptSlice.reducer;