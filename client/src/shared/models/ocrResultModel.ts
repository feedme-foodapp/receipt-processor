/* ocrResultsModel.ts */

export interface OCRResultModel {
    metaInfo: MetaInfoModel;
    lines: ResultModel[];
    words: ResultModel[];
    filter: FilterModel;
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

export interface FilterModel {
    lines: boolean;
    words: boolean;
}

export const DEFAULT_RESULT: OCRResultModel = {
    metaInfo: {
        lines: 0,
        words: 0,
        confidence: 0
    },
    lines: [],
    words: [],
    filter: {
        lines: true,
        words: false
    }
};