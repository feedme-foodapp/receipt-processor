/* React */
import React from 'react';

/* Util(s) */
import ReceiptRecognitionWrapper from 'src/utils/wrapper/receipt-recognition/ReceiptRecognitionWrapper';

/* Component(s) */
import PreviewContainer from 'src/components/preview-container/PreviewContainer';
import FileUploader from 'src/components/file-uploader/FileUploader';

/* Stylesheet */
import styles from './OCRTab.module.scss';

const OCRTab: React.FC = () => {
    return (
        <React.Fragment>
            <ReceiptRecognitionWrapper>
                <PreviewContainer />
                <div></div>
            </ReceiptRecognitionWrapper>
            <FileUploader />
        </React.Fragment>
    );
};

export default OCRTab;