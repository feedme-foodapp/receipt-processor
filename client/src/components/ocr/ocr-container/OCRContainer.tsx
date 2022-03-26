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

// const CircularJSON = require('circular-json');

const OCRContainer: React.FC<OCRResultContainerProps> = ({ receipt }) => {
    const resultsState = useSelector((state: RootState) => state.ocrResults);

    // isProcessing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleIsProcessing = (value: boolean) => {
        setIsProcessing(value);
    };

    // results
    const defaultResults: OCRResultModel = {
        metaInfo: {
            lines: 0,
            words: 0,
            confidence: 0
        },
        results: []
    };

    const [results, setResults] = useState<OCRResultModel>(defaultResults);

    useEffect(() => {
        setResults(
            {
                metaInfo: resultsState.ocrResults.metaInfo,
                results: resultsState.ocrResults.results
            }
        );
    }, [resultsState.ocrResults]);

    // showModal
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModal = (value: boolean) => {
        setShowModal(value);
    };

    return (
        <React.Fragment>
            <ModalContainer
                showModal={showModal}
                handleModal={handleModal}>
                <ModalContainerWrapper>
                    <OCRResult
                        results={results}
                        isModal={true}
                        handleModal={handleModal}
                        showSlidingOptions={true}
                    />
                    <></>
                </ModalContainerWrapper>
            </ModalContainer>
            <div
                style={{ height: results.results.length === 0 ? '100%' : '' }}
                className={styles.ocr_container}>
                <div
                    style={{
                        display: results.results.length === 0 ? 'flex' : 'block'
                    }}
                    className={styles.flex_container}>
                    <div className={styles.btn_container}>
                        {!isProcessing ? (
                            <React.Fragment>
                                {results.results.length === 0 && (
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
                    {!isProcessing && results.results.length > 0 && (
                        <OCRResult
                            results={results}
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