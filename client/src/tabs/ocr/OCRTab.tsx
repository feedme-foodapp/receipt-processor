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
import OCRContainer from 'src/components/ocr/ocr-container/OCRContainer';

const OCRTab: React.FC = () => {
    const receiptState = useSelector((state: RootState) => state.receipt);

    return (
        <ReceiptRecognitionWrapper>
            <PreviewContainer 
                receipt={receiptState.receipt}
                showReceiptOptionFab={true} 
            />
            <OCRContainer receipt={receiptState.receipt} />
        </ReceiptRecognitionWrapper>
    );
};

export default OCRTab;  