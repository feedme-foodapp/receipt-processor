/* ocrResultsModel.ts */

// export interface OCRResultModel {
//     id: number;
//     text: string;
//     confidence: number;
// }

export interface OCRResultModel {
    metaInfo: MetaInfoModel;
    results: ResultsModel[];
}

export interface ResultsModel {
    id: number;
    text: string;
    confidence: number;
}

export interface MetaInfoModel {
    lines: number;
    words: number;
    confidence: number;
}