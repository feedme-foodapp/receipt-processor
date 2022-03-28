/* ocrResultSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    OCRResultModel,
    ResultModel
} from 'src/shared/models/ocrResultModel';

/* Interface(s) */
interface ResultState {
    ocrResults: OCRResultModel
}

const initialState: ResultState = {
    ocrResults: {
        metaInfo: {
            confidence: 0,
            lines: 0,
            words: 0
        },
        lines: []
    }
};

export const OCRResultsSlice = createSlice({
    name: 'ocrResultsSlice',
    initialState,
    reducers: {
        addResult: (state, action) => {
            state.ocrResults = action.payload;
            
        },
        deleteResultById: (state, action) => {
            state.ocrResults.lines = state.ocrResults.lines.filter((ocrResult: ResultModel) => ocrResult.id !== action.payload);
        },
        updateResult: (state, action) => {
            state.ocrResults.lines.map((ocrResult: ResultModel, index: number) => {
                if(ocrResult.id === action.payload.id) {
                    return state.ocrResults.lines[index] = action.payload;
                } else {
                    return undefined;
                }
            })
        },
        clearResults: (state) => {
            state.ocrResults = initialState.ocrResults
        }
    }
});

/* Action(s) */
export const {
    addResult,
    updateResult,
    deleteResultById,
    clearResults
} = OCRResultsSlice.actions;

/* Reducer */
export default OCRResultsSlice.reducer;