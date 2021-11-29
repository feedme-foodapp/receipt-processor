/* store.ts */

/* React-Redux */
import {
    configureStore
} from '@reduxjs/toolkit';

/* Reducer(s) */
import splitPaneReducer from 'src/redux/features/splitPaneSlice';

const store = configureStore({
    reducer: {
        splitPane: splitPaneReducer
    }
});

export { store }

/* Type(s) */
export type SplitPaneState = ReturnType<typeof splitPaneReducer>;