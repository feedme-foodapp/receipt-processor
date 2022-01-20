/* tesseract-service.ts */

import {
    Tesseract
} from 'tesseract.ts'

export class TesseractService {
    
    public recognize(receipt: string) {
        Tesseract.recognize(receipt);
    }
}