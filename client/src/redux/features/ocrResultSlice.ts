/* ocrResultSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    OCRResultModel,
    ResultsModel
} from 'src/shared/models/ocrResultModel';

/* Interface(s) */
interface ResultState {
    ocrResults: OCRResultModel
}

const initialState: ResultState = {
    ocrResults: {
        metaInfo: {
            lines: 0,
            words: 0,
            confidence: 0
        },
        results: []
    }
};

export const OCRResultsSlice = createSlice({
    name: 'ocrResultsSlice',
    initialState,
    reducers: {
        addResult: (state, action) => {
            // state.ocrResults.push(action.payload);
            console.log(action.payload)
            state.ocrResults = action.payload;
            
        },
        deleteResultById: (state, action) => {
            state.ocrResults.results = state.ocrResults.results.filter((ocrResult: ResultsModel) => ocrResult.id !== action.payload);
        },
        clearResults: (state) => {
            state.ocrResults = initialState.ocrResults
        }
    }
});

/* Action(s) */
export const {
    addResult,
    deleteResultById,
    clearResults
} = OCRResultsSlice.actions;

/* Reducer */
export default OCRResultsSlice.reducer;