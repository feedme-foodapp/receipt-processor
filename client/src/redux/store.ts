/* store.ts */

/* React-Redux */
import {
    configureStore
} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import storage from 'redux-persist/es/storage';

/* Reducer(s) */
import splitPaneReducer from 'src/redux/features/splitPaneSlice';
import receiptReducer from 'src/redux/features/receiptSlice';
import toastReducer from 'src/redux/features/toastSlice';

const persistConfig = {
    key: 'receipt',
    storage
};

const persistedReducer = persistReducer(persistConfig, receiptReducer);

const store = configureStore({
    reducer: {
        splitPane: splitPaneReducer,
        receipt: persistedReducer,
        toast: toastReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH, 
                REHYDRATE, 
                PAUSE, 
                PERSIST, 
                PURGE, 
                REGISTER
              ]
        }
    })
});

const persistor = persistStore(store);

/* Store */
export { 
    store, 
    persistor 
};

/* Type(s) */
export type RootState = ReturnType<typeof store.getState>