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
        lines: [],
        words: [],
        filter: {
            lines: true,
            words: false
        }
    }
};

export const OCRResultsSlice = createSlice({
    name: 'ocrResultsSlice',
    initialState,
    reducers: {
        addResult: (state, action) => {
            state.ocrResults = action.payload;
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
        deleteLineById: (state, action) => {
            state.ocrResults.lines = state.ocrResults.words.filter((ocrResult: ResultModel) => ocrResult.id !== action.payload);
        },
        clearResults: (state) => {
            state.ocrResults = initialState.ocrResults;
        },
        setFilter: (state, action) => {
            state.ocrResults.filter = action.payload;
        }
    }
});

/* Action(s) */
export const {
    addResult,
    updateResult,
    deleteLineById,
    clearResults,
    setFilter
} = OCRResultsSlice.actions;

/* Reducer */
export default OCRResultsSlice.reducer;