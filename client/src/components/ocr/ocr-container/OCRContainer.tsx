/* React */
import React, { useEffect, useState } from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

/* Model(s) */
import {
    RootState
} from 'src/redux/store';

import {
    OCRResultModel
} from 'src/shared/models/ocrResultModel';

/* Mock(s) */
import {
    DEFAULT_RESULT
} from 'src/shared/models/ocrResultModel';

/* Component(s) */
import Illustrator from 'src/components/shared/illustrator/Illustrator';
import OCRProcessing from 'src/components/ocr/ocr-recognition/OCRRecognition'
import OCRResult from 'src/components/ocr/ocr-result/OCRResult';
import ModalContainer from 'src/components/modals/ModalContainer';
import ModalContainerWrapper from 'src/utils/wrapper/modal-container/ModalContainerWrapper';

/* Stylesheet */
import styles from './OCRContainer.module.scss';

/* Interface(s) */
interface OCRResultContainerProps {
    receipt: string;
}

const OCRContainer: React.FC<OCRResultContainerProps> = ({ receipt }) => {
    const resultState = useSelector((state: RootState) => state.ocrResults);

    // isProcessing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleIsProcessing = (value: boolean) => {
        setIsProcessing(value);
    };

    const [result, setResult] = useState<OCRResultModel>(DEFAULT_RESULT);

    useEffect(() => {
        setResult(resultState.ocrResults);
    }, [resultState.ocrResults]);

    // showModal
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModal = (value: boolean) => {
        setShowModal(value);
    };

    const validResultLength = (result: OCRResultModel) => {
        if(result.lines.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <React.Fragment>
            <ModalContainer
                showModal={showModal}
                handleModal={handleModal}>
                <ModalContainerWrapper>
                    <OCRResult
                        result={result}
                        isModal={true}
                        handleModal={handleModal}
                        showSlidingOptions={true}
                    />
                    <></>
                </ModalContainerWrapper>
            </ModalContainer>
            <div
                style={{ 
                    height: validResultLength(result) ? '100%' : '' }}
                className={styles.ocr_container}>
                <div
                    style={{
                        display: validResultLength(result) ? 'flex' : 'block'
                    }}
                    className={styles.flex_container}>
                    <div className={styles.btn_container}>
                        {!isProcessing ? (
                            <React.Fragment>
                                {validResultLength(result) && (
                                    <OCRProcessing
                                        receipt={receipt}
                                        handleIsProcessing={handleIsProcessing}
                                    />
                                )}
                            </React.Fragment>
                        ) : (
                            <Illustrator
                                icon={'/assets/icon/glass.svg'}
                                title={'Is processing'}
                                showDots={true}
                                animation={true}
                            />
                        )}
                    </div>
                    {!isProcessing && result.lines.length > 0 && (
                        <OCRResult
                            result={result}
                            isModal={false}
                            handleModal={handleModal}
                            showSlidingOptions={false}
                        />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default OCRContainer;