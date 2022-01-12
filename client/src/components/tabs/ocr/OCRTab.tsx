/* React */
import React from 'react';

/* Util(s) */
import ReceiptRecognitionWrapper from 'src/utils/wrapper/receipt-recognition/ReceiptRecognitionWrapper';

/* Component(s) */
import PreviewContainer from 'src/components/preview-container/PreviewContainer';
import ResultsContainer from 'src/components/results-container/ResultsContainer';
import FileUploader from 'src/components/file-uploader/FileUploader';

/* Stylesheet */
// import styles from './OCRTab.module.scss';

const OCRTab: React.FC = () => {
    return (
        <React.Fragment>
            <ReceiptRecognitionWrapper>
                <PreviewContainer image={''} />
                <ResultsContainer image={''} />
            </ReceiptRecognitionWrapper>
            <FileUploader />
        </React.Fragment>
    );
};

export default OCRTab;