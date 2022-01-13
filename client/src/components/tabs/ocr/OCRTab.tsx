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
import ResultsContainer from 'src/components/results-container/ResultsContainer';
import FileUploader from 'src/components/file-uploader/FileUploader';

/* Stylesheet */
// import styles from './OCRTab.module.scss';

const OCRTab: React.FC = () => {
    const receiptState = useSelector((state: RootState) => state.receipt);

    console.log(receiptState.value)

    return (
        <React.Fragment>
            <ReceiptRecognitionWrapper>
                <PreviewContainer receipt={receiptState.value} />
                <ResultsContainer receipt={receiptState.value} />
            </ReceiptRecognitionWrapper>
            <FileUploader />
        </React.Fragment>
    );
};

export default OCRTab;