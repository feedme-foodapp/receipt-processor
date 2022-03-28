/* ocrResultsModel.ts */

export interface OCRResultModel {
    metaInfo: MetaInfoModel;
    lines: ResultModel[];
}

export interface MetaInfoModel {
    lines: number;
    words: number;
    confidence: number;
}

export interface BBoxModel {
    x0: number;
    x1: number;
    y0: number;
    y1: number;
}

export interface ResultModel {
    id: number;
    text: string;
    confidence: number;
    bbox: BBoxModel;
}


export const DEFAULT_RESULT: OCRResultModel = {
    metaInfo: {
        lines: 0,
        words: 0,
        confidence: 0
    },
    lines: []
};