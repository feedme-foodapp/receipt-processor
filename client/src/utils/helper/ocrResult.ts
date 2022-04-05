/* ocrResult.ts */

/* Model(s) */
import { 
  ResultModel 
} from "src/shared/models/ocrResultModel";

export const createResultObject = (result: any) => {
  const tmpOcrResult: ResultModel | any = {
    metaInfo: {
      confidence: result.confidence,
      lines: result.lines.length,
      words: result.words.length,
    },
    lines: [],
    words: [],
    filter: {
      lines: true,
      words: false
    }
  };

  // eslint-disable-next-line array-callback-return
  result.lines.map((line: any, index: number) => {
    tmpOcrResult.lines.push({
      id: index,
      confidence: line.confidence,
      text: line.text,
      bbox: line.bbox,
    });
  });

  // eslint-disable-next-line array-callback-return
  result.words.map((word: any, index: number) => {
    tmpOcrResult.words.push({
      id: index,
      confidence: word.confidence,
      text: word.text,
      bbox: word.bbox,
    });
  });

  return tmpOcrResult;
};
