/* keyValueSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Interface(s) */
interface ToastState {
    show: boolean;
    content: {
        icon: string;
        message: string;
        color: string;
    }
}

const initialState: ToastState = {
    show: false,
    content: {
        icon: '',
        message: '',
        color: ''
    }
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToastContent: (state, action) => {
            state.content = action.payload;
        },
        handleShow: (state, action) => {
            state.show = action.payload;
        }
    } 
});

/* Action(s) */
export const {
    handleShow,
    setToastContent
} = toastSlice.actions;

/* Reducer(s) */
export default toastSlice.reducer;