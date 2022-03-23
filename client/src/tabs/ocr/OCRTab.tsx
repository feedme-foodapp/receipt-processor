/* React */
import React from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

import {
    RootState
} from 'src/redux/store';

/* Util(s) */
import ReceiptRecognitionWrapper from 'src/utils/wrapper/receipt-recognition/ReceiptRecognitionWrapper';

/* Component(s) */
import PreviewContainer from 'src/components/preview-container/PreviewContainer';
import OCRResultContainer from 'src/components/ocr/ocr-result-container/OCRResultContainer';

const OCRTab: React.FC = () => {
    const receiptState = useSelector((state: RootState) => state.receipt);

    return (
        <ReceiptRecognitionWrapper>
            <PreviewContainer receipt={receiptState.receipt} />
            <OCRResultContainer receipt={receiptState.receipt} />
        </ReceiptRecognitionWrapper>
    );
};

export default OCRTab;