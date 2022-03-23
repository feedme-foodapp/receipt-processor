/* tesseract-service.ts */

import {
    Tesseract
} from 'tesseract.ts';

export class TesseractService {
    
    public async recognize(receipt: string) {
        const results = await Tesseract.recognize(receipt, 'deu');
        return results;
    }
}